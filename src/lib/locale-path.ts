import { locales, type Locale } from '@/i18n';

const localePrefix = new RegExp(`^/(?:${locales.join('|')})(?=/|$)`);

export function getLocalizedPathname(pathname: string, locale: Locale): string {
  const absolutePath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const pathWithoutLocale = absolutePath.replace(localePrefix, '') || '/';

  return `/${locale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
}
