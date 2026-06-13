import type { ReactNode } from 'react';
import { headers } from 'next/headers';
import { DM_Serif_Display, Inter } from 'next/font/google';
import { rtlLocales } from '@/i18n';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-inter',
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-dm-serif-display',
});

export default async function RootLayout({ children }: { children: ReactNode }) {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';
  const locale = pathname.split('/')[1] || 'en';
  const isRtl = rtlLocales.includes(locale as 'ar' | 'he');
  const nonce = headersList.get('x-nonce') || '';
  const csrfToken = headersList.get('X-CSRF-Token') || '';

  return (
    <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {csrfToken ? <meta name="csrf-token" content={csrfToken} /> : null}
        {nonce ? <meta name="csp-nonce" content={nonce} /> : null}
      </head>
      <body className={`${inter.variable} ${dmSerifDisplay.variable}`}>{children}</body>
    </html>
  );
}
