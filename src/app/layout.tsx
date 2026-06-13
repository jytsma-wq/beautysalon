import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { DM_Serif_Display, Inter } from 'next/font/google';
import { rtlLocales } from '@/i18n';
import { siteConfig } from '@/data/site-config';
import { getSiteUrl, localSeoKeywords } from '@/lib/seo';
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

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  applicationName: siteConfig.name,
  title: {
    default: 'Beauty Salon in Batumi, Georgia | Silk Beauty Salon',
    template: '%s | Silk Beauty Salon',
  },
  description:
    'Silk Beauty Salon is a beauty salon in Batumi, Georgia for aesthetic treatments, facials, injectables, laser treatments, skin care, nails, lashes, and consultations.',
  keywords: localSeoKeywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    url: getSiteUrl(),
    siteName: siteConfig.name,
    title: 'Beauty Salon in Batumi, Georgia | Silk Beauty Salon',
    description:
      'Visit Silk Beauty Salon in Batumi, Georgia for premium beauty salon services and aesthetic treatments.',
    images: [
      {
        url: `${getSiteUrl()}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'Silk Beauty Salon in Batumi, Georgia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beauty Salon in Batumi, Georgia | Silk Beauty Salon',
    description:
      'Silk Beauty Salon in Batumi, Georgia offers aesthetic treatments, skin care, facials, nails, and lashes.',
    images: [`${getSiteUrl()}/opengraph-image.png`],
    creator: '@silkbeauty_batumi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

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
