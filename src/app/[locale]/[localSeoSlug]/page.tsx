import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  CalendarCheck,
  Check,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Search,
  Shield,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  JsonLd,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateLocalBusinessSchema,
  generateServiceSchema,
} from '@/components/seo/JsonLd';
import {
  localSeoLandingPages,
  localSeoLandingPageSlugs,
} from '@/data/local-seo-pages';
import { siteConfig } from '@/data/site-config';
import { getTreatmentBySlug, type Treatment } from '@/data/treatments';
import { locales, type Locale } from '@/i18n';
import { Link } from '@/i18n/routing';
import { buildSeoMetadata } from '@/lib/seo';

interface Props {
  params: Promise<{ locale: string; localSeoSlug: string }>;
}

export const revalidate = 86400;
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    localSeoLandingPageSlugs.map((localSeoSlug) => ({
      locale,
      localSeoSlug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, localSeoSlug } = await params;
  const page = localSeoLandingPages.find((candidate) => candidate.slug === localSeoSlug);

  if (!page) {
    return {
      title: 'Silk Beauty Salon',
    };
  }

  const localeKey = locales.includes(locale as Locale) ? (locale as Locale) : 'en';
  const content = page.content[localeKey];

  return buildSeoMetadata({
    locale: localeKey,
    path: `/${page.slug}`,
    title: content.title,
    description: content.description,
    keywords: [
      ...content.searchPhrases,
      content.h1,
      'Silk Beauty Salon Batumi',
      'beauty salon Batumi',
      'aesthetic treatments Batumi',
    ],
    image: page.image,
    imageAlt: `${content.h1} at Silk Beauty Salon`,
  });
}

export default async function LocalSeoLandingPage({ params }: Props) {
  const { locale, localSeoSlug } = await params;
  const page = localSeoLandingPages.find((candidate) => candidate.slug === localSeoSlug);

  if (!page) {
    notFound();
  }

  const localeKey = locales.includes(locale as Locale) ? (locale as Locale) : 'en';
  const content = page.content[localeKey];
  const treatments = (
    await Promise.all(
      page.treatmentSlugs.map((treatmentSlug) =>
        getTreatmentBySlug(treatmentSlug, localeKey)
      )
    )
  ).filter((treatment): treatment is Treatment => Boolean(treatment));

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: `${siteConfig.url}/${localeKey}` },
    {
      name: 'Beauty Salon Batumi',
      url: `${siteConfig.url}/${localeKey}/beauty-salon-batumi`,
    },
    {
      name: content.h1,
      url: `${siteConfig.url}/${localeKey}/${page.slug}`,
    },
  ]);

  const treatmentSchema = generateServiceSchema({
    name: content.h1,
    description: content.description,
    image: page.image,
    treatments: treatments.map((treatment) => ({
      name: treatment.name,
      url: `/${localeKey}/treatments/${treatment.slug}`,
    })),
  });

  return (
    <>
      <JsonLd id={`json-ld-${page.slug}-business`} schema={generateLocalBusinessSchema(localeKey)} />
      <JsonLd id={`json-ld-${page.slug}-breadcrumbs`} schema={breadcrumbSchema} />
      <JsonLd id={`json-ld-${page.slug}-service`} schema={treatmentSchema} />
      <JsonLd id={`json-ld-${page.slug}-faq`} schema={generateFAQSchema(content.faqs)} />

      <section className="bg-[#f7f2eb] pt-[170px] md:pt-[188px]">
        <div className="container-custom py-16 md:py-20">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
            <Link href="/" className="hover:text-[#241f1b]">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/beauty-salon-batumi" className="hover:text-[#241f1b]">
              Batumi
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-[#241f1b]">{content.h1}</span>
          </nav>

          <div className="grid items-end gap-12 lg:grid-cols-[48%_52%]">
            <div className="max-w-3xl">
              <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#8d6f58]">
                {content.eyebrow}
              </p>
              <h1 className="mb-6 font-sans text-[clamp(2.7rem,5.4vw,5.6rem)] font-light leading-[1.02] text-[#241f1b]">
                {content.h1}
              </h1>
              <p className="text-lg leading-8 text-stone-700 md:text-xl">
                {content.intro}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild className="btn-gold">
                  <Link href="/book">{content.bookCta}</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-md">
                  <Link href={`/treatments/category/${page.categorySlug}`}>
                    {content.categoryCta}
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[8px]">
              <Image
                src={page.image}
                alt={`${content.h1} at Silk Beauty Salon in Batumi`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 52vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e8e4df] bg-white">
        <div className="container-custom py-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <Search className="h-5 w-5 text-[#8d6f58]" />
              <h2 className="font-sans text-xl font-light text-[#241f1b]">
                {content.searchTitle}
              </h2>
            </div>
            <ul className="flex flex-wrap gap-3">
              {content.searchPhrases.map((phrase) => (
                <li
                  key={phrase}
                  className="rounded-md border border-[#d8cbbb] px-4 py-2 text-sm text-stone-700"
                >
                  {phrase}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[38%_62%]">
            <div>
              <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#8d6f58]">
                Silk Beauty Salon
              </p>
              <h2 className="mb-5 font-sans text-3xl font-light text-[#241f1b] md:text-4xl">
                {content.benefitsTitle}
              </h2>
              <p className="leading-7 text-stone-700">
                {siteConfig.name} is located at {siteConfig.contact.address}, {siteConfig.contact.city}.
                Online booking, phone support, WhatsApp, and email are available for local and
                international clients.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {content.benefits.map((benefit, index) => {
                const icons = [Shield, Sparkles, MapPin];
                const Icon = icons[index] || Check;

                return (
                  <article key={benefit.title} className="border-t border-[#e8e4df] pt-6">
                    <Icon className="mb-4 h-6 w-6 text-[#8d6f58]" />
                    <h3 className="mb-2 font-sans text-xl font-light text-[#241f1b]">
                      {benefit.title}
                    </h3>
                    <p className="text-sm leading-6 text-stone-600">{benefit.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-[#f7f4f0]">
        <div className="container-custom">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#8d6f58]">
              Treatments
            </p>
            <h2 className="mb-5 font-sans text-3xl font-light text-[#241f1b] md:text-4xl">
              {content.treatmentTitle}
            </h2>
            <p className="leading-7 text-stone-700">{content.treatmentIntro}</p>
          </div>

          {treatments.length > 0 ? (
            <div className="grid gap-px bg-[#d8cbbb] md:grid-cols-2 xl:grid-cols-3">
              {treatments.map((treatment) => (
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
                  <span className="mt-6 inline-flex items-center gap-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#241f1b]">
                    View treatment
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          ) : null}

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild className="btn-gold">
              <Link href="/book">{content.bookCta}</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-md">
              <Link href={`/treatments/category/${page.categorySlug}`}>
                {content.categoryCta}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[42%_58%]">
            <div>
              <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#8d6f58]">
                Booking
              </p>
              <h2 className="mb-5 font-sans text-3xl font-light text-[#241f1b] md:text-4xl">
                {content.bookingTitle}
              </h2>
              <p className="leading-7 text-stone-700">{content.bookingText}</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <article className="border-t border-[#e8e4df] pt-5">
                <CalendarCheck className="mb-4 h-6 w-6 text-[#8d6f58]" />
                <h3 className="mb-2 text-xs uppercase tracking-[0.18em] text-stone-500">
                  Online
                </h3>
                <Link href="/book" className="text-sm leading-6 text-[#241f1b] hover:text-[#8d6f58]">
                  {content.bookCta}
                </Link>
              </article>
              <article className="border-t border-[#e8e4df] pt-5">
                <Phone className="mb-4 h-6 w-6 text-[#8d6f58]" />
                <h3 className="mb-2 text-xs uppercase tracking-[0.18em] text-stone-500">
                  Phone
                </h3>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="text-sm leading-6 text-[#241f1b] hover:text-[#8d6f58]"
                >
                  {siteConfig.contact.phone}
                </a>
              </article>
              <article className="border-t border-[#e8e4df] pt-5">
                <Mail className="mb-4 h-6 w-6 text-[#8d6f58]" />
                <h3 className="mb-2 text-xs uppercase tracking-[0.18em] text-stone-500">
                  Email
                </h3>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="break-words text-sm leading-6 text-[#241f1b] hover:text-[#8d6f58]"
                >
                  {siteConfig.contact.email}
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-[#f7f4f0]">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 font-sans text-3xl font-light text-[#241f1b] md:text-4xl">
              {content.faqTitle}
            </h2>
            <div className="space-y-8">
              {content.faqs.map((faq) => (
                <article key={faq.question} className="border-t border-[#d8cbbb] pt-6">
                  <h3 className="mb-3 font-sans text-xl font-light text-[#241f1b]">
                    {faq.question}
                  </h3>
                  <p className="leading-7 text-stone-700">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
