'use client';

import type { MouseEvent } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/routing';
import { locales, localeNames, type Locale } from '@/i18n';
import { trackLanguageChange } from '@/lib/analytics';

export function LanguageSwitcher() {
  const t = useTranslations('common');
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const currentPathname = pathname || '/';

  const getLocalizedHref = (newLocale: Locale) =>
    `/${newLocale}${currentPathname === '/' ? '' : currentPathname}`;

  const handleLocaleChange = (event: MouseEvent<HTMLAnchorElement>, newLocale: Locale) => {
    if (newLocale === locale) {
      event.preventDefault();
      event.currentTarget.closest('details')?.removeAttribute('open');
      return;
    }

    trackLanguageChange(locale, newLocale);
  };

  return (
    <details className="group relative" data-testid="language-switcher">
      <summary
        className="flex h-11 min-w-11 cursor-pointer list-none items-center justify-center gap-2 rounded-md px-2 text-sm hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d6f58] sm:min-w-0 sm:justify-start [&::-webkit-details-marker]:hidden"
        aria-label={t('currentLanguageFlag', { language: localeNames[locale]?.name || locale })}
      >
        <Image
          src={localeNames[locale]?.flag || '/flags/en.svg'}
          alt={t('currentLanguageFlag', { language: localeNames[locale]?.name || locale })}
          width={24}
          height={16}
          className="h-4 w-6 rounded-sm"
        />
        <span className="hidden sm:inline">{localeNames[locale]?.nativeName || locale.toUpperCase()}</span>
      </summary>

      <div className="absolute right-0 z-[80] mt-2 hidden w-44 overflow-hidden rounded-md border border-[#e8e4df] bg-white py-1 shadow-[0_16px_40px_rgba(36,31,27,0.14)] group-open:block">
        {locales.map((loc) => (
          <a
            key={loc}
            href={getLocalizedHref(loc)}
            hrefLang={loc}
            onClick={(event) => handleLocaleChange(event, loc)}
            className={`flex w-full items-center justify-between gap-3 px-3 py-2 text-sm transition-colors hover:bg-stone-50 ${
              locale === loc ? 'bg-stone-100 text-[#241f1b]' : 'text-stone-700'
            }`}
            aria-current={locale === loc ? 'true' : undefined}
          >
            <span className="flex items-center gap-2">
              <Image
                src={localeNames[loc]?.flag}
                alt={t('languageFlag', { language: localeNames[loc]?.name || loc })}
                width={24}
                height={16}
                className="h-4 w-6 rounded-sm"
              />
              <span>{localeNames[loc]?.nativeName}</span>
            </span>
            {locale === loc ? <span className="text-xs text-[#b5453a]">✓</span> : null}
          </a>
        ))}
      </div>
    </details>
  );
}
