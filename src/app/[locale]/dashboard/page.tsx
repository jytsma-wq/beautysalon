import type { Metadata } from 'next';
import type { BookingStatus } from '@prisma/client';
import { CalendarDays, Clock, LockKeyhole, LogOut, Mail, Phone, Search, UserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  filterDashboardBookings,
  getDashboardStats,
  toDashboardDateKey,
  type DashboardBooking,
} from '@/lib/dashboard-bookings';
import { getDashboardPasswordFromEnv, isDashboardAuthenticated } from '@/lib/dashboard-auth';
import { loginDashboard, logoutDashboard } from './actions';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Appointments Dashboard | Silk Beauty Salon',
  description: 'Private appointments dashboard for the Silk Beauty Salon team.',
  robots: {
    index: false,
    follow: false,
  },
};

type DashboardPageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

const BOOKING_STATUSES: Array<BookingStatus | 'ALL'> = [
  'ALL',
  'PENDING',
  'CONFIRMED',
  'COMPLETED',
  'CANCELLED',
  'NO_SHOW',
];

const statusLabels: Record<BookingStatus | 'ALL', string> = {
  ALL: 'All statuses',
  PENDING: 'Pending',
  CONFIRMED: 'Confirmed',
  COMPLETED: 'Completed',
  CANCELLED: 'Cancelled',
  NO_SHOW: 'No show',
};

const statusClasses: Record<BookingStatus, string> = {
  PENDING: 'border-[#d8cbbb] bg-[#f7f2eb] text-[#6f5845]',
  CONFIRMED: 'border-emerald-200 bg-emerald-50 text-emerald-800',
  COMPLETED: 'border-stone-200 bg-white text-stone-700',
  CANCELLED: 'border-red-200 bg-red-50 text-red-700',
  NO_SHOW: 'border-amber-200 bg-amber-50 text-amber-800',
};

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Tbilisi',
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: '2-digit',
});

const createdAtFormatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Tbilisi',
  year: 'numeric',
  month: 'short',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
});

function firstParam(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

function normalizeStatus(value: string | undefined): BookingStatus | 'ALL' {
  return BOOKING_STATUSES.includes(value as BookingStatus | 'ALL') ? (value as BookingStatus | 'ALL') : 'ALL';
}

function normalizeDate(value: string | undefined): string {
  return value && /^\d{4}-\d{2}-\d{2}$/.test(value) ? value : '';
}

function sortAppointments(bookings: DashboardBooking[]): DashboardBooking[] {
  return [...bookings].sort((left, right) => {
    const dateDiff = left.date.getTime() - right.date.getTime();
    if (dateDiff !== 0) {
      return dateDiff;
    }

    return left.timeSlot.localeCompare(right.timeSlot);
  });
}

function DashboardLogin({ locale, error }: { locale: string; error?: string }) {
  const isConfigured = Boolean(getDashboardPasswordFromEnv());
  const errorMessage = error === 'unconfigured'
    ? 'Dashboard password is not configured in Hostinger environment variables.'
    : error === 'invalid'
      ? 'The password was not correct.'
      : null;

  return (
    <section className="min-h-screen bg-[#f7f2eb] px-4 py-10 md:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-md items-center">
        <div className="w-full rounded-[8px] border border-[#e8e4df] bg-white p-6 shadow-[0_24px_80px_rgba(36,31,27,0.10)] md:p-8">
          <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#f7f2eb] text-[#241f1b]">
            <LockKeyhole className="h-6 w-6" />
          </div>
          <h1 className="font-sans text-3xl font-light leading-tight text-[#241f1b]">Appointments dashboard</h1>
          <p className="mt-3 text-sm leading-6 text-stone-600">
            Private access for the Silk Beauty Salon team.
          </p>

          {errorMessage ? (
            <div className="mt-6 rounded-[8px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
              {errorMessage}
            </div>
          ) : null}

          <form action={loginDashboard} className="mt-8 space-y-5">
            <input type="hidden" name="locale" value={locale} />
            <div className="space-y-2">
              <Label htmlFor="dashboard-password">Password</Label>
              <Input
                id="dashboard-password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="h-11 rounded-md border-[#d8cbbb] bg-white"
              />
            </div>
            <Button type="submit" className="h-11 w-full" disabled={!isConfigured}>
              Open dashboard
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function EmptyState() {
  return (
    <div className="rounded-[8px] border border-dashed border-[#d8cbbb] bg-white px-6 py-14 text-center">
      <CalendarDays className="mx-auto mb-4 h-8 w-8 text-stone-400" />
      <h2 className="font-sans text-xl font-light text-[#241f1b]">No appointments found</h2>
      <p className="mt-2 text-sm text-stone-600">Change the filters or check another date.</p>
    </div>
  );
}

function AppointmentTable({ bookings }: { bookings: DashboardBooking[] }) {
  if (bookings.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="overflow-hidden rounded-[8px] border border-[#e8e4df] bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[960px] border-collapse text-left">
          <thead className="border-b border-[#e8e4df] bg-[#fbf8f4] text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
            <tr>
              <th className="px-5 py-4 font-medium">Appointment</th>
              <th className="px-5 py-4 font-medium">Client</th>
              <th className="px-5 py-4 font-medium">Contact</th>
              <th className="px-5 py-4 font-medium">Service</th>
              <th className="px-5 py-4 font-medium">Status</th>
              <th className="px-5 py-4 font-medium">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#eee8e1] text-sm">
            {bookings.map((booking) => (
              <tr key={booking.id} className="align-top">
                <td className="px-5 py-4">
                  <div className="font-medium text-[#241f1b]">{dateFormatter.format(booking.date)}</div>
                  <div className="mt-1 flex items-center gap-1.5 text-stone-600">
                    <Clock className="h-3.5 w-3.5" />
                    {booking.timeSlot}
                  </div>
                  <div className="mt-2 text-xs text-stone-400">
                    Requested {createdAtFormatter.format(booking.createdAt)}
                  </div>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2 font-medium text-[#241f1b]">
                    <UserRound className="h-4 w-4 text-[#8d6f58]" />
                    {booking.name}
                  </div>
                </td>
                <td className="px-5 py-4">
                  <div className="space-y-2 text-stone-700">
                    <a className="flex items-center gap-2 transition-colors hover:text-[#241f1b]" href={`mailto:${booking.email}`}>
                      <Mail className="h-4 w-4 text-[#8d6f58]" />
                      {booking.email}
                    </a>
                    {booking.phone ? (
                      <a className="flex items-center gap-2 transition-colors hover:text-[#241f1b]" href={`tel:${booking.phone.replace(/\s/g, '')}`}>
                        <Phone className="h-4 w-4 text-[#8d6f58]" />
                        {booking.phone}
                      </a>
                    ) : null}
                  </div>
                </td>
                <td className="px-5 py-4 text-stone-700">{booking.service}</td>
                <td className="px-5 py-4">
                  <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${statusClasses[booking.status]}`}>
                    {statusLabels[booking.status]}
                  </span>
                </td>
                <td className="max-w-[260px] px-5 py-4 text-stone-700">
                  {booking.message ? booking.message : <span className="text-stone-400">No notes</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default async function DashboardPage({ params, searchParams }: DashboardPageProps) {
  const { locale } = await params;
  const resolvedSearchParams = await searchParams;
  const authenticated = await isDashboardAuthenticated();

  if (!authenticated) {
    return <DashboardLogin locale={locale} error={firstParam(resolvedSearchParams.error)} />;
  }

  const { listBookings } = await import('@/lib/booking-store');
  const selectedDate = normalizeDate(firstParam(resolvedSearchParams.date));
  const selectedStatus = normalizeStatus(firstParam(resolvedSearchParams.status));
  const bookings = await listBookings();
  const stats = getDashboardStats(bookings);
  const filteredBookings = sortAppointments(
    filterDashboardBookings(bookings, {
      date: selectedDate,
      status: selectedStatus,
    })
  );
  const todayKey = toDashboardDateKey(new Date());

  return (
    <section className="min-h-screen bg-[#f7f2eb] px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-5 border-b border-[#e3d8cb] pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-[#8d6f58]">
              Silk Beauty Salon
            </p>
            <h1 className="mt-3 font-sans text-4xl font-light leading-tight text-[#241f1b] md:text-5xl">
              Appointments
            </h1>
            <p className="mt-3 text-sm text-stone-600">Today is {todayKey}</p>
          </div>
          <form action={logoutDashboard}>
            <input type="hidden" name="locale" value={locale} />
            <Button type="submit" variant="outline" className="h-10 rounded-md bg-white">
              <LogOut className="h-4 w-4" />
              Sign out
            </Button>
          </form>
        </header>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            ['Total', stats.total],
            ['Today', stats.today],
            ['Upcoming', stats.upcoming],
            ['Pending', stats.pending],
          ].map(([label, value]) => (
            <div key={label} className="rounded-[8px] border border-[#e8e4df] bg-white p-5">
              <p className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">{label}</p>
              <p className="mt-3 text-3xl font-light text-[#241f1b]">{value}</p>
            </div>
          ))}
        </div>

        <form className="mt-8 grid gap-4 rounded-[8px] border border-[#e8e4df] bg-white p-4 md:grid-cols-[minmax(0,1fr)_220px_auto_auto] md:items-end">
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input id="date" name="date" type="date" defaultValue={selectedDate} className="h-10 rounded-md border-[#d8cbbb]" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <select
              id="status"
              name="status"
              defaultValue={selectedStatus}
              className="h-10 w-full rounded-md border border-[#d8cbbb] bg-white px-3 text-sm text-[#241f1b] outline-none focus:border-[#8d6f58] focus:ring-2 focus:ring-[#8d6f58]/20"
            >
              {BOOKING_STATUSES.map((status) => (
                <option key={status} value={status}>
                  {statusLabels[status]}
                </option>
              ))}
            </select>
          </div>
          <Button type="submit" className="h-10">
            <Search className="h-4 w-4" />
            Filter
          </Button>
          <a
            href={`/${locale}/dashboard`}
            className="inline-flex h-10 items-center justify-center rounded-md border border-[#d9cec1] bg-white px-4 text-xs font-medium uppercase tracking-widest text-[#241f1b] transition-colors hover:bg-[#f7f2eb]"
          >
            Clear
          </a>
        </form>

        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="font-sans text-2xl font-light text-[#241f1b]">Appointment list</h2>
            <p className="text-sm text-stone-600">{filteredBookings.length} shown</p>
          </div>
          <AppointmentTable bookings={filteredBookings} />
        </div>
      </div>
    </section>
  );
}
