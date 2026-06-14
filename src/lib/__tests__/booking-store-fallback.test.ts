import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, it, vi } from 'vitest';

describe('booking store fallback', () => {
  let storageDir: string | null = null;

  afterEach(async () => {
    vi.doUnmock('@/lib/db');
    vi.resetModules();
    delete process.env.BOOKING_DATABASE_ENABLED;
    delete process.env.BOOKING_STORAGE_FILE;

    if (storageDir) {
      await rm(storageDir, { recursive: true, force: true });
      storageDir = null;
    }
  });

  it('loads booked slots from fallback storage without importing the database', async () => {
    storageDir = await mkdtemp(path.join(tmpdir(), 'silk-booking-store-'));
    process.env.BOOKING_DATABASE_ENABLED = '0';
    process.env.BOOKING_STORAGE_FILE = path.join(storageDir, 'bookings.json');

    const databaseImport = vi.fn();
    vi.doMock('@/lib/db', () => {
      databaseImport();
      throw new Error('Database should not be imported while fallback storage is active');
    });

    const { getBookedSlotsForDate } = await import('../booking-store');

    await expect(
      getBookedSlotsForDate(
        new Date('2026-06-15T00:00:00.000Z'),
        new Date('2026-06-16T00:00:00.000Z')
      )
    ).resolves.toEqual([]);

    expect(databaseImport).not.toHaveBeenCalled();
  });
});
