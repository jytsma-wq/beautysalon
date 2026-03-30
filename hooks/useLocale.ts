'use client';

import { useParams } from 'next/navigation';
import type { Locale } from '@/types/types';
import { defaultLocale, RTL_LOCALES } from '@/lib/constants';

/**
 * Custom hook — reads the [locale] segment from the URL and exposes helpers.
 */
export function useLocale() {
  const params = useParams();
  const locale = (params?.locale as Locale) ?? defaultLocale;
  const isRTL = RTL_LOCALES.includes(locale);
  const dir = isRTL ? 'rtl' : 'ltr';

  return { locale, isRTL, dir };
}
