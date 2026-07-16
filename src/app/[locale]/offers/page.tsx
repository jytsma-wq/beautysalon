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
  const copy = transparentPageCopy[locale].offers;
  return buildSeoMetadata({ locale, path: '/offers', title: copy.title, description: copy.description, noIndex: true });
}

export default async function OffersPage({ params }: Props) {
  const locale = safeLocale((await params).locale);
  const copy = transparentPageCopy[locale].offers;
  const tCommon = await getTranslations({ locale, namespace: 'common' });
  return <TransparentInfoPage homeLabel={tCommon('home')} {...copy} primaryHref={`mailto:${siteConfig.contact.email}?subject=Current%20offers`} primaryLabel={copy.cta} bookLabel={tCommon('bookNow')} />;
}
