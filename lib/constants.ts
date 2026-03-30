import type { Locale } from '@/types/types';

export const locales: Locale[] = ['en', 'ka', 'ru', 'he', 'ar', 'tr'];
export const defaultLocale: Locale = 'en';

export const SALON_INFO = {
  name: 'Silk Beauty Salon',
  address: '28 Rustaveli Avenue, Batumi 6010, Georgia',
  phone: '+995 599 123 456',
  email: 'info@silkbeautybatumi.ge',
  instagram: 'https://instagram.com/silkbeautybatumi',
  instagramHandle: '@silkbeautybatumi',
  facebook: 'https://facebook.com/silkbeautybatumi',
  facebookHandle: '@silkbeautybatumi',
  tiktok: 'https://tiktok.com/@silkbeautybatumi',
  tiktokHandle: '@silkbeautybatumi',
  whatsapp: '+995599123456',
  coordinates: {
    lat: 41.6468,
    lng: 41.6367,
  },
  hours: [
    { day: 'Mon – Thu', hours: '10:00 – 20:00' },
    { day: 'Fri – Sat', hours: '10:00 – 21:00' },
    { day: 'Sunday',    hours: '11:00 – 19:00' },
  ],
} as const;

export const RTL_LOCALES: Locale[] = ['he', 'ar'];

export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  ka: 'ქართული',
  ru: 'Русский',
  he: 'עברית',
  ar: 'العربية',
  tr: 'Türkçe',
};

export const PRICE_RANGE = {
  min: 55,
  max: 800,
  currency: 'GEL',
};
