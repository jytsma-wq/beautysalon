import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { AnnouncerProvider } from "@/components/ui/announcer";
import { GaldermaHeader } from "@/components/layout/GaldermaHeader";
import { GaldermaFooter } from "@/components/layout/GaldermaFooter";
import { ConsentProvider } from "@/components/providers/ConsentProvider";
import { WhatsAppWidget } from "@/components/layout/WhatsAppWidget";
import { ChatbotWidget } from "@/components/layout/ChatbotWidget";
import { SkipLink } from "@/components/layout/SkipLink";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { siteConfig } from '@/data/site-config';
import { rtlLocales } from '@/i18n';
import { getSiteUrl } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  
  return {
    metadataBase: new URL(getSiteUrl()),
    title: {
      default: t('siteTitle'),
      template: '%s | Silk Beauty Salon',
    },
    description: t('siteDescription'),
    keywords: t('siteKeywords'),
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    icons: {
      icon: "/favicon.ico",
    },
    other: {
      'link:rel:preload;as:video;href:https://cdn.coverr.co/videos/coverr-a-woman-getting-a-facial-treatment-6960/1080p.mp4;type:video/mp4': '',
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure valid locale
  const validLocale = (routing.locales as readonly string[]).includes(locale) ? locale : routing.defaultLocale;
  const isRtl = rtlLocales.includes(validLocale as 'ar' | 'he');

  setRequestLocale(validLocale);

  const messages = await getMessages();

  
  return (
    <ThemeProvider>
      <div lang={validLocale} dir={isRtl ? 'rtl' : 'ltr'}>
        <NextIntlClientProvider messages={messages}>
          <ConsentProvider>
            <AnnouncerProvider>
              <SkipLink />
              <GaldermaHeader />
              <main id="main-content" className="pt-35">
                {children}
              </main>
              <GaldermaFooter />
              <ChatbotWidget />
              <WhatsAppWidget />
              <Toaster />
            </AnnouncerProvider>
          </ConsentProvider>
        </NextIntlClientProvider>
      </div>
    </ThemeProvider>
  );
}
