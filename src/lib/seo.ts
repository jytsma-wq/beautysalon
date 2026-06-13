import type { Metadata } from 'next';
import { locales, type Locale } from '@/i18n';
import { siteConfig } from '@/data/site-config';

export const localeOpenGraphMap: Record<string, string> = {
  en: 'en_US',
  ka: 'ka_GE',
  ru: 'ru_RU',
  tr: 'tr_TR',
  ar: 'ar_SA',
  he: 'he_IL',
};

export function getSiteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url).replace(/\/$/, '');
}

export function withBrand(title: string): string {
  return /silk beauty salon/i.test(title) ? title : `${title} | Silk Beauty Salon`;
}

export function getCanonicalPath(locale: string, path: string = ''): string {
  const normalizedPath = path === '/' ? '' : path.replace(/^\/?/, '/').replace(/\/$/, '');
  return `/${locale}${normalizedPath}`;
}

export function getCanonicalUrl(locale: string, path: string = ''): string {
  return `${getSiteUrl()}${getCanonicalPath(locale, path)}`;
}

export function getLanguageAlternates(path: string = ''): Record<string, string> {
  const alternates = Object.fromEntries(
    locales.map((locale) => [locale, getCanonicalUrl(locale, path)])
  ) as Record<Locale, string>;

  return {
    ...alternates,
    'x-default': getCanonicalUrl('en', path),
  };
}

type BuildSeoMetadataOptions = {
  locale: string;
  path?: string;
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
};

export function buildSeoMetadata({
  locale,
  path = '',
  title,
  description,
  keywords = [],
  image = '/opengraph-image.png',
  imageAlt = 'Silk Beauty Salon in Batumi, Georgia',
  type = 'website',
  noIndex = false,
}: BuildSeoMetadataOptions): Metadata {
  const fullTitle = withBrand(title);
  const canonical = getCanonicalUrl(locale, path);
  const imageUrl = image.startsWith('http') ? image : `${getSiteUrl()}${image}`;

  return {
    metadataBase: new URL(getSiteUrl()),
    title: {
      absolute: fullTitle,
    },
    description,
    keywords,
    alternates: {
      canonical,
      languages: getLanguageAlternates(path),
    },
    openGraph: {
      type,
      locale: localeOpenGraphMap[locale] || localeOpenGraphMap.en,
      url: canonical,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: '@silkbeauty_batumi',
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
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
}

export const localSeoKeywords = [
  'Batumi beauty salon',
  'beauty salon Georgia',
  'beauty salon Batumi',
  'aesthetic treatments Batumi',
  'facials Batumi',
  'Botox Batumi',
  'dermal fillers Georgia',
  'Silk Beauty Salon Batumi',
];
