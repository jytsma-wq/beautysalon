import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import { getAllTreatments, getTreatmentBySlug } from '@/data/treatments';
import { getTreatmentCollectionBySlug } from '@/data/treatment-collections';
import type { Treatment } from '@/data/treatments';
import { buildSeoMetadata, localSeoKeywords } from '@/lib/seo';

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export const revalidate = 86400;

const legacyCategoryAnchors: Record<string, string> = {
  botox: 'botox',
  'dermal-fillers': 'dermal-fillers',
  'skin-treatments': 'skin-treatments',
  'laser-treatments': 'laser-treatments',
  'hair-and-hair-extensions': 'hair-treatments',
  nails: 'nails',
  lashes: 'lashes',
};

const collectionMessageKeys: Record<string, string> = {
  botox: 'botox',
  'dermal-fillers': 'dermalFillers',
  'skin-treatments': 'skinTreatments',
  'laser-treatments': 'laserTreatments',
  'hair-and-hair-extensions': 'hairAndHairExtensions',
  nails: 'nails',
  lashes: 'lashes',
};

export async function generateStaticParams() {
  const locales = ['en', 'ka', 'ru', 'ar', 'he', 'tr'];
  const slugs = Object.keys(legacyCategoryAnchors);

  return locales.flatMap((locale) =>
    slugs.map((slug) => ({
      locale,
      slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const t = await getTranslations({ locale, namespace: 'treatmentsPage' });
  const tCollection = await getTranslations({ locale, namespace: 'treatmentCollectionPage' });
  const collection = getTreatmentCollectionBySlug(slug);
  const collectionKey = collectionMessageKeys[slug];

  if (!collection || !collectionKey) {
    return {
      title: t('title'),
    };
  }

  const title = tCollection(`collections.${collectionKey}.title`);
  const description = tCollection(`collections.${collectionKey}.description`);

  return buildSeoMetadata({
    locale,
    path: `/treatments/category/${slug}`,
    title: tCollection('metadataTitle', { title }),
    description: tCollection('metadataDescription', { title, description }),
    keywords: [title, `${title} Batumi`, `${title} Georgia`, ...localSeoKeywords],
    image: collection.image,
    imageAlt: tCollection('imageAlt', { title }),
  });
}

export default async function TreatmentCollectionPage({ params }: Props) {
  const { locale, slug } = await params;
  const collection = getTreatmentCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  const collectionKey = collectionMessageKeys[collection.slug];

  if (!collectionKey) {
    notFound();
  }

  const tCommon = await getTranslations({ locale, namespace: 'common' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });
  const tTreatment = await getTranslations({ locale, namespace: 'treatmentPage' });
  const tCollection = await getTranslations({ locale, namespace: 'treatmentCollectionPage' });
  const localizedCollection = {
    title: tCollection(`collections.${collectionKey}.title`),
    eyebrow: tCollection(`collections.${collectionKey}.eyebrow`),
    description: tCollection(`collections.${collectionKey}.description`),
  };
  const localizedServices = collection.services?.map((service, index) => ({
    ...service,
    title: tCollection(`collections.${collectionKey}.services.service${index + 1}.title`),
    description: tCollection(`collections.${collectionKey}.services.service${index + 1}.description`),
    duration: tCollection(`collections.${collectionKey}.services.service${index + 1}.duration`),
  }));

  const collectionTreatments = collection.treatmentSlugs
    ? (
        await Promise.all(
          collection.treatmentSlugs.map((treatmentSlug) =>
            getTreatmentBySlug(treatmentSlug, locale)
          )
        )
      ).filter((treatment): treatment is Treatment => Boolean(treatment))
    : [];

  const fallbackTreatments =
    collectionTreatments.length === 0 && collection.slug === 'skin-treatments'
      ? (await getAllTreatments(locale)).slice(0, 6)
      : [];

  const cards = collectionTreatments.length > 0 ? collectionTreatments : fallbackTreatments;

  return (
    <>
      <section className="bg-[#f7f2eb] pt-42.5 md:pt-47">
        <div className="grid min-h-[68svh] grid-cols-1 lg:grid-cols-[44%_56%]">
          <div className="flex items-end px-6 py-14 md:px-12 lg:px-16 xl:px-24">
            <div className="max-w-xl">
              <nav className="mb-8 flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
                <Link href="/" className="hover:text-[#241f1b]">
                  {tCommon('home')}
                </Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <Link href="/treatments" className="hover:text-[#241f1b]">
                  {tNav('treatments')}
                </Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-[#241f1b]">{localizedCollection.title}</span>
              </nav>
              <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#8d6f58]">
                {localizedCollection.eyebrow}
              </p>
              <h1 className="localized-hero-heading font-sans font-light text-[#241f1b]">
                {localizedCollection.title}
              </h1>
              <p className="mt-7 text-base leading-8 text-stone-700 md:text-lg">
                {localizedCollection.description}
              </p>
              <Link
                href="/book"
                className="mt-10 inline-flex h-12 items-center rounded-md border border-[#241f1b] px-7 text-xs font-medium uppercase tracking-[0.18em] text-[#241f1b] transition-colors hover:bg-[#241f1b] hover:text-white"
              >
                {tCommon('bookConsultation')}
              </Link>
            </div>
          </div>
          <div className="relative min-h-[44svh] overflow-hidden lg:min-h-0">
            <Image
              src={collection.image}
              alt={tCollection('imageAlt', { title: localizedCollection.title })}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 56vw"
            />
          </div>
        </div>
      </section>

      {cards.length > 0 ? (
        <section className="bg-white px-6 py-20 md:px-12 md:py-24 lg:px-16 xl:px-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex items-end justify-between gap-8 border-b border-stone-200 pb-6">
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[#8d6f58]">
                  {tCollection('includedTreatments')}
                </p>
                <h2 className="localized-section-heading mt-3 font-sans font-light text-[#241f1b]">
                  {tCollection('treatmentOptionsTitle')}
                </h2>
              </div>
            </div>

            <div className="grid gap-px bg-stone-200 md:grid-cols-2 xl:grid-cols-3">
              {cards.map((treatment) => (
                <Link
                  key={treatment.slug}
                  href={`/treatments/${treatment.slug}`}
                  className="group bg-white p-7 transition-colors hover:bg-[#f7f2eb]"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <h3 className="font-sans text-2xl font-light leading-tight text-[#241f1b]">
                      {treatment.name}
                    </h3>
                    {treatment.price ? (
                      <span className="shrink-0 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[#8d6f58]">
                        {treatment.price}
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm leading-7 text-stone-600">
                    {treatment.shortDescription}
                  </p>
                  {treatment.duration ? (
                    <p className="mt-5 text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
                      {treatment.duration}
                    </p>
                  ) : null}
                  <span className="mt-6 inline-block text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#241f1b]">
                    {tTreatment('learnMore')}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {collection.services && collection.services.length > 0 ? (
        <section className="bg-[#f7f2eb] px-6 py-20 md:px-12 md:py-24 lg:px-16 xl:px-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 border-b border-stone-200 pb-6">
              <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[#8d6f58]">
                {tCollection('serviceOptions')}
              </p>
              <h2 className="localized-section-heading mt-3 font-sans font-light text-[#241f1b]">
                {tCollection('serviceOptionsTitle')}
              </h2>
            </div>

            <div className="grid gap-px bg-stone-200 md:grid-cols-2">
              {localizedServices?.map((service) => (
                <article key={service.title} className="bg-white p-8">
                  <h3 className="font-sans text-2xl font-light text-[#241f1b]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-stone-600">
                    {service.description}
                  </p>
                  {service.duration ? (
                    <p className="mt-5 text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
                      {service.duration}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-[#f7f2eb] px-6 py-24 md:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[55%_45%] lg:items-center">
          <div>
            <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#8d6f58]">
              {tCollection('consultationEyebrow')}
            </p>
            <h2 className="localized-section-heading font-sans font-light text-[#241f1b]">
              {tCollection('consultationTitle')}
            </h2>
          </div>
          <div>
            <p className="max-w-lg text-base leading-8 text-stone-700 md:text-lg">
              {tCollection('consultationDescription')}
            </p>
            <Link
              href="/book"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-md border border-[#241f1b] bg-transparent px-7 text-xs font-medium uppercase tracking-[0.18em] text-[#241f1b] transition-colors hover:bg-[#241f1b] hover:text-white"
            >
              {tCommon('bookNow')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
