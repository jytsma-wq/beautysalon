import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import type { Metadata } from "next";
import { AnnouncerProvider } from "@/components/ui/announcer";
import { ConsentProvider } from "@/components/providers/ConsentProvider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LocaleChrome } from '@/components/layout/LocaleChrome';
import { siteConfig } from '@/data/site-config';
import { rtlLocales, type Locale } from '@/i18n';
import { getSiteUrl, localSeoKeywords } from '@/lib/seo';
import { getNonce } from '@/lib/nonce';
import { getClientMessages } from '@/lib/client-messages';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  await params;
  
  return {
    metadataBase: new URL(getSiteUrl()),
    title: {
      default: siteConfig.name,
      template: '%s | Silk Beauty Salon',
    },
    description: siteConfig.description,
    keywords: localSeoKeywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    icons: {
      icon: [
        { url: "/favicon.png", sizes: "64x64", type: "image/png" },
        { url: "/logo.png", sizes: "512x512", type: "image/png" },
      ],
      shortcut: "/favicon.png",
      apple: "/apple-touch-icon.png",
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
  const direction = isRtl ? 'rtl' : 'ltr';

  setRequestLocale(validLocale);

  const messages = await getMessages();
  const clientMessages = getClientMessages(messages);
  const nonce = await getNonce();
  const htmlLocaleScript = `document.documentElement.lang=${JSON.stringify(validLocale)};document.documentElement.dir=${JSON.stringify(direction)};`;

  
  return (
    <ThemeProvider>
      <script
        nonce={nonce || undefined}
        dangerouslySetInnerHTML={{ __html: htmlLocaleScript }}
      />
      <div lang={validLocale} dir={direction}>
        <NextIntlClientProvider messages={clientMessages}>
          <ConsentProvider>
            <AnnouncerProvider>
              <LocaleChrome locale={validLocale as Locale}>
                {children}
              </LocaleChrome>
            </AnnouncerProvider>
          </ConsentProvider>
        </NextIntlClientProvider>
      </div>
    </ThemeProvider>
  );
}
