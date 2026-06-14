'use client';

import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Toaster } from '@/components/ui/toaster';
import { GaldermaHeader } from '@/components/layout/GaldermaHeader';
import { GaldermaFooter } from '@/components/layout/GaldermaFooter';
import { WhatsAppWidget } from '@/components/layout/WhatsAppWidget';
import { StickyMobileBookingBar } from '@/components/layout/StickyMobileBookingBar';
import { SkipLink } from '@/components/layout/SkipLink';
import { rtlLocales, type Locale } from '@/i18n';

export function LocaleChrome({ children, locale }: { children: ReactNode; locale: Locale }) {
  const pathname = usePathname();
  const isDashboardPath = /^\/(?:en|ka|ru|tr|ar|he)\/dashboard(?:\/|$)/.test(pathname || '');

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = rtlLocales.includes(locale) ? 'rtl' : 'ltr';
  }, [locale]);

  return (
    <>
      {!isDashboardPath ? <SkipLink /> : null}
      {!isDashboardPath ? <GaldermaHeader /> : null}
      <main id="main-content" className={isDashboardPath ? '' : 'pt-36 pb-24 lg:pt-32 lg:pb-0'}>
        {children}
      </main>
      {!isDashboardPath ? <GaldermaFooter /> : null}
      {!isDashboardPath ? <StickyMobileBookingBar /> : null}
      {!isDashboardPath ? <WhatsAppWidget /> : null}
      <Toaster />
    </>
  );
}
