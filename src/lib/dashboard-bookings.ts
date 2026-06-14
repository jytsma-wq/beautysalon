import type { Booking, BookingStatus } from '@prisma/client';

export type DashboardBooking = Pick<
  Booking,
  'id' | 'name' | 'email' | 'phone' | 'service' | 'date' | 'timeSlot' | 'message' | 'status' | 'createdAt' | 'updatedAt'
>;

export type DashboardBookingFilters = {
  date?: string;
  status?: BookingStatus | 'ALL' | '';
};

export type DashboardStats = {
  total: number;
  today: number;
  upcoming: number;
  pending: number;
};

const SALON_TIME_ZONE = 'Asia/Tbilisi';
const ACTIVE_STATUSES = new Set<BookingStatus>(['PENDING', 'CONFIRMED']);

export function toDashboardDateKey(date: Date): string {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: SALON_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);

  const year = parts.find((part) => part.type === 'year')?.value;
  const month = parts.find((part) => part.type === 'month')?.value;
  const day = parts.find((part) => part.type === 'day')?.value;

  return `${year}-${month}-${day}`;
}

export function filterDashboardBookings(
  bookings: DashboardBooking[],
  filters: DashboardBookingFilters
): DashboardBooking[] {
  return bookings.filter((booking) => {
    const matchesDate = filters.date ? toDashboardDateKey(booking.date) === filters.date : true;
    const matchesStatus = filters.status && filters.status !== 'ALL'
      ? booking.status === filters.status
      : true;

    return matchesDate && matchesStatus;
  });
}

export function getDashboardStats(bookings: DashboardBooking[], now = new Date()): DashboardStats {
  const todayKey = toDashboardDateKey(now);

  return bookings.reduce<DashboardStats>(
    (stats, booking) => {
      const bookingDateKey = toDashboardDateKey(booking.date);
      const isActive = ACTIVE_STATUSES.has(booking.status);

      return {
        total: stats.total + 1,
        today: stats.today + (bookingDateKey === todayKey && isActive ? 1 : 0),
        upcoming: stats.upcoming + (bookingDateKey >= todayKey && isActive ? 1 : 0),
        pending: stats.pending + (booking.status === 'PENDING' ? 1 : 0),
      };
    },
    {
      total: 0,
      today: 0,
      upcoming: 0,
      pending: 0,
    }
  );
}
