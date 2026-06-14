import { describe, expect, it } from 'vitest';
import {
  filterDashboardBookings,
  getDashboardStats,
  toDashboardDateKey,
  type DashboardBooking,
} from '../dashboard-bookings';

function booking(overrides: Partial<DashboardBooking>): DashboardBooking {
  return {
    id: 'booking-id',
    name: 'Test Client',
    email: 'client@example.com',
    phone: '+995 577 34 57 67',
    service: 'Skin Consultation',
    date: new Date('2026-06-14T00:00:00.000Z'),
    timeSlot: '10:00 - 11:00',
    message: null,
    status: 'PENDING',
    createdAt: new Date('2026-06-13T12:00:00.000Z'),
    updatedAt: new Date('2026-06-13T12:00:00.000Z'),
    ...overrides,
  };
}

describe('dashboard bookings helpers', () => {
  it('formats booking dates as salon-local date keys', () => {
    expect(toDashboardDateKey(new Date('2026-06-16T00:00:00.000Z'))).toBe('2026-06-16');
  });

  it('filters bookings by selected date and status', () => {
    const bookings = [
      booking({ id: 'today-pending', status: 'PENDING', date: new Date('2026-06-16T00:00:00.000Z') }),
      booking({ id: 'today-confirmed', status: 'CONFIRMED', date: new Date('2026-06-16T00:00:00.000Z') }),
      booking({ id: 'other-day', status: 'PENDING', date: new Date('2026-06-17T00:00:00.000Z') }),
    ];

    expect(filterDashboardBookings(bookings, { date: '2026-06-16', status: 'PENDING' }).map((item) => item.id))
      .toEqual(['today-pending']);
  });

  it('calculates appointment totals for the dashboard', () => {
    const bookings = [
      booking({ id: 'today-pending', status: 'PENDING', date: new Date('2026-06-14T00:00:00.000Z') }),
      booking({ id: 'future-confirmed', status: 'CONFIRMED', date: new Date('2026-06-16T00:00:00.000Z') }),
      booking({ id: 'future-cancelled', status: 'CANCELLED', date: new Date('2026-06-17T00:00:00.000Z') }),
      booking({ id: 'past-completed', status: 'COMPLETED', date: new Date('2026-06-01T00:00:00.000Z') }),
    ];

    expect(getDashboardStats(bookings, new Date('2026-06-14T08:00:00.000Z'))).toEqual({
      total: 4,
      today: 1,
      upcoming: 2,
      pending: 1,
    });
  });
});
