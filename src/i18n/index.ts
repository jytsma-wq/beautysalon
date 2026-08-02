export const locales = ['en', 'ka', 'ru', 'tr', 'ar', 'he', 'nl', 'fr', 'de'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<
  Locale,
  { name: string; nativeName: string; flag: string; dir: 'ltr' | 'rtl' }
> = {
  en: { name: 'English', nativeName: 'English', flag: '/flags/en.svg', dir: 'ltr' },
  ka: { name: 'Georgian', nativeName: 'ქართული', flag: '/flags/ka.svg', dir: 'ltr' },
  ru: { name: 'Russian', nativeName: 'Русский', flag: '/flags/ru.svg', dir: 'ltr' },
  tr: { name: 'Turkish', nativeName: 'Türkçe', flag: '/flags/tr.svg', dir: 'ltr' },
  ar: { name: 'Arabic', nativeName: 'العربية', flag: '/flags/ar.svg', dir: 'rtl' },
  he: { name: 'Hebrew', nativeName: 'עברית', flag: '/flags/he.svg', dir: 'rtl' },
  nl: { name: 'Dutch', nativeName: 'Nederlands', flag: '/flags/nl.svg', dir: 'ltr' },
  fr: { name: 'French', nativeName: 'Français', flag: '/flags/fr.svg', dir: 'ltr' },
  de: { name: 'German', nativeName: 'Deutsch', flag: '/flags/de.svg', dir: 'ltr' },
};

export const rtlLocales = ['ar', 'he'];

export const localizedCountryNames: Record<Locale, string> = {
  en: 'Georgia',
  ka: 'საქართველო',
  ru: 'Грузия',
  tr: 'Gürcistan',
  ar: 'جورجيا',
  he: 'גאורגיה',
  nl: 'Georgië',
  fr: 'Géorgie',
  de: 'Georgien',
};
