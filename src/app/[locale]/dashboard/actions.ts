'use server';

import { redirect } from 'next/navigation';
import { locales } from '@/i18n';
import {
  clearDashboardSessionCookie,
  getDashboardPasswordFromEnv,
  isValidDashboardPassword,
  setDashboardSessionCookie,
} from '@/lib/dashboard-auth';

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
