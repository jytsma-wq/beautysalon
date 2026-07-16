import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2, ChevronRight, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { aboutPageCopy } from '@/data/factual-page-copy';
import { siteConfig } from '@/data/site-config';
import { locales, type Locale } from '@/i18n';
import { Link } from '@/i18n/routing';
import { getLocalizedBusinessHours } from '@/lib/business-hours';
import { buildSeoMetadata, localSeoKeywords } from '@/lib/seo';

interface Props {
  params: Promise<{ locale: string }>;
}

function getLocale(locale: string): Locale {
  return locales.includes(locale as Locale) ? (locale as Locale) : 'en';
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const localeKey = getLocale(locale);
  const copy = aboutPageCopy[localeKey];

  return buildSeoMetadata({
    locale: localeKey,
    path: '/about',
    title: copy.title,
    description: copy.description,
    keywords: localSeoKeywords,
    imageAlt: 'Silk Beauty Salon in Batumi, Georgia',
  });
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const localeKey = getLocale(locale);
  const copy = aboutPageCopy[localeKey];
  const businessHours = getLocalizedBusinessHours(localeKey);

  return (
    <>
      <section className="bg-[#f7f2eb] pt-[170px] md:pt-[188px]">
        <div className="container-custom py-16 md:py-20">
          <nav className="mb-8 flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
            <Link href="/" className="hover:text-[#241f1b]">{copy.home}</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-[#241f1b]">{copy.title}</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[48%_52%]">
            <div className="max-w-3xl">
              <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#8d6f58]">
                {copy.eyebrow}
              </p>
              <h1 className="localized-hero-heading mb-6 font-sans font-light text-[#241f1b]">
                {copy.title}
              </h1>
              <p className="text-lg leading-8 text-stone-700">{copy.intro}</p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[8px]" aria-hidden="true">
              <Image
                src="/images/hero-poster.jpg"
                alt=""
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-[#f7f4f0]" aria-labelledby="business-details-title">
        <div className="container-custom">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#8d6f58]">
              {copy.detailsEyebrow}
            </p>
            <h2 id="business-details-title" className="mb-5 font-sans text-3xl font-light text-[#241f1b] md:text-4xl">
              {copy.detailsTitle}
            </h2>
            <p className="text-base leading-7 text-stone-700">{copy.detailsText}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[42%_58%]">
            <dl className="grid gap-6 sm:grid-cols-2">
              <div className="border-t border-[#d8cbbb] pt-5">
                <dt className="mb-2 text-xs uppercase tracking-[0.18em] text-stone-500">{copy.legalName}</dt>
                <dd className="font-sans text-lg text-[#241f1b]">{siteConfig.legalName}</dd>
              </div>
              <div className="border-t border-[#d8cbbb] pt-5">
                <dt className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-stone-500">
                  <MapPin className="h-4 w-4 text-[#8d6f58]" /> {copy.address}
                </dt>
                <dd className="text-sm leading-6 text-stone-700">
                  {siteConfig.contact.address}, {siteConfig.contact.city}, {siteConfig.contact.region}{' '}
                  {siteConfig.contact.postcode}, {siteConfig.contact.country}
                </dd>
              </div>
              <div className="border-t border-[#d8cbbb] pt-5 sm:col-span-2">
                <dt className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-stone-500">
                  <Phone className="h-4 w-4 text-[#8d6f58]" /> {copy.contact}
                </dt>
                <dd className="space-y-1 text-sm leading-6 text-stone-700">
                  <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="block hover:text-[#8d6f58]">{siteConfig.contact.phone}</a>
                  <a href={`mailto:${siteConfig.contact.email}`} className="block hover:text-[#8d6f58]">
                    <Mail className="mr-1 inline h-3.5 w-3.5" /> {siteConfig.contact.email}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 flex items-center gap-2 font-sans text-xl font-light text-[#241f1b]">
                  <Clock className="h-5 w-5 text-[#8d6f58]" /> {copy.hours}
                </h3>
                <dl className="space-y-2 text-sm text-stone-700">
                  {businessHours.map(({ key, day, hours }) => (
                    <div key={key} className="flex justify-between gap-4 border-b border-[#e8e4df] pb-2">
                      <dt className="capitalize">{day}</dt>
                      <dd className="text-[#241f1b]">{hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div>
                <h3 className="mb-4 font-sans text-xl font-light text-[#241f1b]">{copy.standardsTitle}</h3>
                <ul className="space-y-3 text-sm leading-6 text-stone-700">
                  {copy.standards.map((standard) => (
                    <li key={standard} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#8d6f58]" />
                      <span>{standard}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom text-center">
          <h2 className="mb-4 font-sans text-3xl font-light text-[#241f1b] md:text-4xl">{copy.ctaTitle}</h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">{copy.ctaText}</p>
          <Button asChild className="btn-gold"><Link href="/book">{copy.ctaButton}</Link></Button>
        </div>
      </section>
    </>
  );
}
