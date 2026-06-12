import { randomUUID } from 'node:crypto';
import { mkdir, readFile, unlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import type { Booking, BookingStatus } from '@prisma/client';
import { db } from '@/lib/db';

type BookingCreateData = {
  name: string;
  email: string;
  phone: string | null;
  service: string;
  date: Date;
  timeSlot: string;
  message: string | null;
  status: BookingStatus;
};

type SerializedBooking = Omit<Booking, 'date' | 'createdAt' | 'updatedAt'> & {
  date: string;
  createdAt: string;
  updatedAt: string;
};

type BookingStoreMode = 'database' | 'file';

const DB_BACKOFF_MS = 15 * 60_000;
const DB_OPERATION_TIMEOUT_MS = 2_500;
const STORAGE_CANDIDATES = [
  process.env.BOOKING_STORAGE_FILE,
  path.join(/* turbopackIgnore: true */ process.cwd(), 'data', 'bookings.json'),
  path.join(tmpdir(), 'silk-beauty-salon-bookings.json'),
].filter(Boolean) as string[];

let databaseUnavailableUntil = 0;
let activeStoragePath: string | null = null;
let fileQueue: Promise<void> = Promise.resolve();

function reviveBooking(booking: SerializedBooking): Booking {
  return {
    ...booking,
    date: new Date(booking.date),
    createdAt: new Date(booking.createdAt),
    updatedAt: new Date(booking.updatedAt),
  };
}

function serializeBooking(booking: Booking): SerializedBooking {
  return {
    ...booking,
    date: booking.date.toISOString(),
    createdAt: booking.createdAt.toISOString(),
    updatedAt: booking.updatedAt.toISOString(),
  };
}

function isDatabaseAvailabilityError(error: unknown): boolean {
  if (typeof error !== 'object' || error === null) {
    return false;
  }

  const code = 'code' in error ? String(error.code) : '';
  if (['P1000', 'P1001', 'P1002', 'P1017', 'P2024'].includes(code)) {
    return true;
  }

  const message = error instanceof Error ? error.message : String(error);
  return /authentication failed|can't reach database|connection.*database|database.*timeout/i.test(message);
}

export function isUniqueBookingSlotError(error: unknown): boolean {
  return typeof error === 'object' && error !== null && 'code' in error && error.code === 'P2002';
}

function markDatabaseUnavailable(error: unknown): void {
  databaseUnavailableUntil = Date.now() + DB_BACKOFF_MS;
  console.error('Booking database is unavailable; using local booking store fallback.', error);
}

function createDatabaseTimeoutError(): Error & { code: string } {
  const error = new Error('Database operation timed out') as Error & { code: string };
  error.code = 'P1002';
  return error;
}

function runDatabaseOperation<T>(operation: () => Promise<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(createDatabaseTimeoutError());
    }, DB_OPERATION_TIMEOUT_MS);

    operation().then(
      (value) => {
        clearTimeout(timeout);
        resolve(value);
      },
      (error: unknown) => {
        clearTimeout(timeout);
        reject(error);
      }
    );
  });
}

async function getStoragePath(): Promise<string> {
  if (activeStoragePath) {
    return activeStoragePath;
  }

  for (const candidate of STORAGE_CANDIDATES) {
    try {
      await mkdir(path.dirname(candidate), { recursive: true });
      const probePath = path.join(path.dirname(candidate), `.silk-write-test-${randomUUID()}`);
      await writeFile(probePath, 'ok', 'utf8');
      await unlink(probePath).catch(() => undefined);
      activeStoragePath = candidate;
      return candidate;
    } catch {
      // Try the next writable location.
    }
  }

  throw new Error('No writable booking storage path is available.');
}

async function withFileLock<T>(operation: () => Promise<T>): Promise<T> {
  const run = fileQueue.then(operation, operation);
  fileQueue = run.then(
    () => undefined,
    () => undefined
  );
  return run;
}

async function readFileBookings(): Promise<Booking[]> {
  const storagePath = await getStoragePath();

  try {
    const raw = await readFile(storagePath, 'utf8');
    const parsed = JSON.parse(raw) as SerializedBooking[];
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed.map(reviveBooking);
  } catch (error) {
    if (typeof error === 'object' && error !== null && 'code' in error && error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

async function writeFileBookings(bookings: Booking[]): Promise<void> {
  const storagePath = await getStoragePath();
  const serialized = bookings.map(serializeBooking);
  await writeFile(storagePath, `${JSON.stringify(serialized, null, 2)}\n`, 'utf8');
}

function isActiveBookingOnDate(booking: Booking, start: Date, end: Date): boolean {
  return booking.status !== 'CANCELLED' && booking.date >= start && booking.date < end;
}

async function withDatabaseFallback<T>(
  databaseOperation: () => Promise<T>,
  fileOperation: () => Promise<T>
): Promise<{ mode: BookingStoreMode; value: T }> {
  if (Date.now() < databaseUnavailableUntil) {
    return { mode: 'file', value: await fileOperation() };
  }

  try {
    return { mode: 'database', value: await runDatabaseOperation(databaseOperation) };
  } catch (error) {
    if (!isDatabaseAvailabilityError(error)) {
      throw error;
    }
    markDatabaseUnavailable(error);
    return { mode: 'file', value: await fileOperation() };
  }
}

export async function getBookedSlotsForDate(start: Date, end: Date): Promise<string[]> {
  const result = await withDatabaseFallback(
    async () => {
      const bookings = await db.booking.findMany({
        where: {
          date: {
            gte: start,
            lt: end,
          },
          status: {
            not: 'CANCELLED',
          },
        },
        select: {
          timeSlot: true,
        },
      });

      return bookings.map((booking) => booking.timeSlot);
    },
    async () => withFileLock(async () => {
      const bookings = await readFileBookings();
      return bookings
        .filter((booking) => isActiveBookingOnDate(booking, start, end))
        .map((booking) => booking.timeSlot);
    })
  );

  return result.value;
}

export async function listBookings(): Promise<Booking[]> {
  const result = await withDatabaseFallback(
    async () => db.booking.findMany({ orderBy: { createdAt: 'desc' } }),
    async () => withFileLock(async () => {
      const bookings = await readFileBookings();
      return bookings.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    })
  );

  return result.value;
}

export async function findBookingConflict(start: Date, end: Date, timeSlot: string): Promise<Booking | null> {
  const result = await withDatabaseFallback(
    async () => db.booking.findFirst({
      where: {
        date: {
          gte: start,
          lt: end,
        },
        timeSlot,
        status: {
          not: 'CANCELLED',
        },
      },
    }),
    async () => withFileLock(async () => {
      const bookings = await readFileBookings();
      return bookings.find((booking) => (
        isActiveBookingOnDate(booking, start, end) && booking.timeSlot === timeSlot
      )) ?? null;
    })
  );

  return result.value;
}

export async function createBooking(data: BookingCreateData): Promise<Booking> {
  const result = await withDatabaseFallback(
    async () => db.booking.create({ data }),
    async () => withFileLock(async () => {
      const bookings = await readFileBookings();
      const conflict = bookings.find((booking) => (
        isActiveBookingOnDate(booking, data.date, new Date(data.date.getTime() + 86_400_000))
        && booking.timeSlot === data.timeSlot
      ));

      if (conflict) {
        const error = new Error('This time slot is already booked') as Error & { code: string };
        error.code = 'P2002';
        throw error;
      }

      const now = new Date();
      const booking: Booking = {
        id: randomUUID(),
        ...data,
        createdAt: now,
        updatedAt: now,
      };

      bookings.push(booking);
      await writeFileBookings(bookings);
      return booking;
    })
  );

  return result.value;
}

export async function getBookingStoreHealth() {
  const startedAt = Date.now();

  try {
    const count = await runDatabaseOperation(async () => {
      await db.$queryRaw`SELECT 1 as health`;
      return db.booking.count();
    });

    return {
      status: 'healthy' as const,
      mode: 'database' as const,
      responseTime: Date.now() - startedAt,
      bookings: count,
    };
  } catch (error) {
    if (!isDatabaseAvailabilityError(error)) {
      throw error;
    }

    markDatabaseUnavailable(error);
    const bookings = await withFileLock(readFileBookings);
    return {
      status: 'degraded' as const,
      mode: 'file' as const,
      responseTime: Date.now() - startedAt,
      bookings: bookings.length,
      message: 'Database is unavailable; booking fallback storage is active.',
    };
  }
}
