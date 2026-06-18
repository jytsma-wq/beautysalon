import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { GaldermaInspiredHome } from '@/components/sections/galderma-home/GaldermaInspiredHome';
import { JsonLd, generateLocalBusinessSchema } from '@/components/seo/JsonLd';
import { buildSeoMetadata, localSeoKeywords } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return buildSeoMetadata({
    locale,
    title: locale === 'en' ? 'Beauty Salon in Batumi, Georgia' : t('homeTitle'),
    description:
      locale === 'en'
        ? 'Visit Silk Beauty Salon in Batumi, Georgia for aesthetic treatments, injectables, skin care, laser treatments, nails and lashes.'
        : t('homeDescription'),
    keywords: locale === 'en' ? localSeoKeywords : t('keywords').split(',').map((keyword) => keyword.trim()),
    imageAlt: 'Silk Beauty Salon in Batumi, Georgia - beauty salon and aesthetic treatments',
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <JsonLd schema={generateLocalBusinessSchema(locale)} />
      <GaldermaInspiredHome />
    </>
  );
}
