import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import { GaldermaInspiredHome } from '@/components/sections/galderma-home/GaldermaInspiredHome';
import { JsonLd, generateLocalBusinessSchema } from '@/components/seo/JsonLd';
import { beautySalonBatumiCopy } from '@/data/beauty-salon-batumi-copy';
import { locales, type Locale } from '@/i18n';
import { buildSeoMetadata, localSeoKeywords } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const localeKey = locales.includes(locale as Locale) ? (locale as Locale) : 'en';
  const copy = beautySalonBatumiCopy[localeKey];

  return buildSeoMetadata({
    locale: localeKey,
    title: copy.title,
    description: copy.description,
    keywords: localSeoKeywords,
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
