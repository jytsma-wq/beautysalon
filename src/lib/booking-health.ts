export type BookingHealthStatus = 'healthy' | 'degraded';
export type BookingStoreHealth = {
  status: BookingHealthStatus;
  mode: 'database' | 'file';
  responseTime: number;
  message?: string;
};

const DB_OPERATION_TIMEOUT_MS = 2_500;

function isBookingDatabaseEnabled(): boolean {
  return process.env.BOOKING_DATABASE_ENABLED === '1';
}

function createDatabaseTimeoutError(): Error & { code: string } {
  const error = new Error('Database operation timed out') as Error & { code: string };
  error.code = 'P1002';
  return error;
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

async function runDatabaseProbe(): Promise<void> {
  const { db } = await import('@/lib/db');

  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(createDatabaseTimeoutError());
    }, DB_OPERATION_TIMEOUT_MS);

    db.$queryRaw`SELECT 1 as health`.then(
      () => {
        clearTimeout(timeout);
        resolve();
      },
      (error: unknown) => {
        clearTimeout(timeout);
        reject(error);
      }
    );
  });
}

export async function getLightweightBookingStoreHealth(): Promise<BookingStoreHealth> {
  const startedAt = Date.now();

  if (!isBookingDatabaseEnabled()) {
    return {
      status: 'degraded',
      mode: 'file',
      responseTime: Date.now() - startedAt,
      message: 'Booking database is disabled; internal booking fallback storage is active.',
    };
  }

  try {
    await runDatabaseProbe();

    return {
      status: 'healthy',
      mode: 'database',
      responseTime: Date.now() - startedAt,
    };
  } catch (error) {
    if (!isDatabaseAvailabilityError(error)) {
      throw error;
    }

    console.error('Health check - Database unavailable; booking fallback storage is active.', error);

    return {
      status: 'degraded',
      mode: 'file',
      responseTime: Date.now() - startedAt,
      message: 'Database is unavailable; booking fallback storage is active.',
    };
  }
}
