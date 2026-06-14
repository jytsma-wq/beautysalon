import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  delete: vi.fn(),
}));

vi.mock('@/lib/db', () => ({
  db: {
    booking: {
      delete: mocks.delete,
      findFirst: vi.fn(),
      findMany: vi.fn(),
      create: vi.fn(),
      count: vi.fn(),
    },
    $queryRaw: vi.fn(),
  },
}));

import { deleteBookingById } from '../booking-store';

describe('booking store', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    process.env.BOOKING_DATABASE_ENABLED = '1';
    mocks.delete.mockResolvedValue({ id: 'booking-1' });
  });

  it('deletes bookings by id through the database store', async () => {
    await expect(deleteBookingById('booking-1')).resolves.toBe(true);

    expect(mocks.delete).toHaveBeenCalledWith({ where: { id: 'booking-1' } });
  });

  it('returns false when the booking id does not exist', async () => {
    const notFound = new Error('Record not found') as Error & { code: string };
    notFound.code = 'P2025';
    mocks.delete.mockRejectedValue(notFound);

    await expect(deleteBookingById('missing-booking')).resolves.toBe(false);
  });
});
