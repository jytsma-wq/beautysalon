'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { locales } from '@/i18n';
import {
  clearDashboardSessionCookie,
  getDashboardPasswordFromEnv,
  isDashboardAuthenticated,
  isValidDashboardPassword,
  setDashboardSessionCookie,
} from '@/lib/dashboard-auth';
import { deleteBookingById } from '@/lib/booking-store';

function getSafeLocale(value: FormDataEntryValue | null): string {
  return typeof value === 'string' && (locales as readonly string[]).includes(value) ? value : 'en';
}

export async function loginDashboard(formData: FormData) {
  const locale = getSafeLocale(formData.get('locale'));
  const password = String(formData.get('password') ?? '');
  const expectedPassword = getDashboardPasswordFromEnv();

  if (!expectedPassword) {
    redirect(`/${locale}/dashboard?error=unconfigured`);
  }

  if (!isValidDashboardPassword(password, expectedPassword)) {
    redirect(`/${locale}/dashboard?error=invalid`);
  }

  await setDashboardSessionCookie();
  redirect(`/${locale}/dashboard`);
}

export async function logoutDashboard(formData: FormData) {
  const locale = getSafeLocale(formData.get('locale'));

  await clearDashboardSessionCookie();
  redirect(`/${locale}/dashboard`);
}

export async function deleteDashboardBooking(formData: FormData) {
  const locale = getSafeLocale(formData.get('locale'));
  const bookingId = String(formData.get('bookingId') ?? '').trim();
  const authenticated = await isDashboardAuthenticated();

  if (!authenticated) {
    redirect(`/${locale}/dashboard?error=unauthorized`);
  }

  if (!bookingId) {
    redirect(`/${locale}/dashboard?error=missing-booking`);
  }

  const deleted = await deleteBookingById(bookingId);
  revalidatePath(`/${locale}/dashboard`);
  redirect(`/${locale}/dashboard?deleted=${deleted ? '1' : '0'}`);
}
