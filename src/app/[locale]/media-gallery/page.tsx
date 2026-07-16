import type { Metadata } from 'next';
import { TransparentInfoPage } from '@/components/sections/TransparentInfoPage';
import { transparentPageCopy } from '@/data/factual-page-copy';
import { siteConfig } from '@/data/site-config';
import { locales, type Locale } from '@/i18n';
import { buildSeoMetadata } from '@/lib/seo';
import { getTranslations } from 'next-intl/server';

interface Props { params: Promise<{ locale: string }> }
const safeLocale = (locale: string): Locale => locales.includes(locale as Locale) ? locale as Locale : 'en';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = safeLocale((await params).locale);
  const copy = transparentPageCopy[locale].media;
  return buildSeoMetadata({ locale, path: '/media-gallery', title: copy.title, description: copy.description, noIndex: true });
}

export default async function MediaGalleryPage({ params }: Props) {
  const locale = safeLocale((await params).locale);
  const copy = transparentPageCopy[locale].media;
  const tCommon = await getTranslations({ locale, namespace: 'common' });
  return <TransparentInfoPage homeLabel={tCommon('home')} {...copy} primaryHref={siteConfig.social.instagram} primaryLabel={copy.cta} external bookLabel={tCommon('bookNow')} />;
}
