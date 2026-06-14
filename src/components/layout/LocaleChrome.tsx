'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Toaster } from '@/components/ui/toaster';
import { GaldermaHeader } from '@/components/layout/GaldermaHeader';
import { GaldermaFooter } from '@/components/layout/GaldermaFooter';
import { WhatsAppWidget } from '@/components/layout/WhatsAppWidget';
import { ChatbotWidget } from '@/components/layout/ChatbotWidget';
import { SkipLink } from '@/components/layout/SkipLink';

export function LocaleChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isDashboardPath = /^\/(?:en|ka|ru|tr|ar|he)\/dashboard(?:\/|$)/.test(pathname || '');

  return (
    <>
      {!isDashboardPath ? <SkipLink /> : null}
      {!isDashboardPath ? <GaldermaHeader /> : null}
      <main id="main-content" className={isDashboardPath ? '' : 'pt-35'}>
        {children}
      </main>
      {!isDashboardPath ? <GaldermaFooter /> : null}
      {!isDashboardPath ? <ChatbotWidget /> : null}
      {!isDashboardPath ? <WhatsAppWidget /> : null}
      <Toaster />
    </>
  );
}
