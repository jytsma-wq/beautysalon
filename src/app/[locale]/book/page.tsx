import { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';
import { Link } from '@/i18n/routing';
import { ChevronRight, Calendar } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { siteConfig } from '@/data/site-config';
import { bookingTreatments, getBookingTreatmentOptions } from '@/data/booking-treatments';
import { BookingForm } from './booking-form';
import { buildSeoMetadata, getSiteUrl, localSeoKeywords } from '@/lib/seo';

interface Props {
  params: Promise<{ locale: string }>;
}

const JSON_LD_BASE = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Silk Beauty Salon',
  image: `${getSiteUrl()}/images/hero-poster.jpg`,
  priceRange: '$$',
  acceptsOffers: bookingTreatments.map((treatment) => ({
    '@type': 'Offer' as const,
    name: treatment.name.en,
    price: String(treatment.priceGel),
    priceCurrency: 'GEL',
  })),
} as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'bookingPage' });

  return buildSeoMetadata({
    locale,
    path: '/book',
    title: t('metadata.title'),
    description: t('metadata.description'),
    keywords: localSeoKeywords,
    imageAlt: t('heroImageAlt'),
  });
}

export default async function BookingPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'bookingPage' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });
  const treatmentOptions = getBookingTreatmentOptions(locale);

  // Build JSON-LD with dynamic address data
  const jsonLd = {
    ...JSON_LD_BASE,
    address: {
      '@type': 'PostalAddress' as const,
      streetAddress: siteConfig.contact.address,
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.region,
      postalCode: siteConfig.contact.postcode,
      addressCountry: siteConfig.contact.country,
    },
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
  };

  return (
    <>
      <Script
        id="json-ld-booking"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="bg-[#f7f2eb] pt-42.5 md:pt-47">
        <div className="container-custom py-16 md:py-20">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
            <Link href="/" className="inline-flex min-h-11 min-w-11 items-center hover:text-[#241f1b]">
              {tCommon('home')}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-[#241f1b]">{tNav('book')}</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[48%_52%]">
            <div className="max-w-3xl">
              <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#8d6f58]">
                {t('personalInfo')}
              </p>
              <h1 className="localized-hero-heading mb-6 font-sans font-light text-[#241f1b]">
                {tNav('book')}
              </h1>
              <p className="text-lg text-stone-700 leading-8">
                {t('subtitle')}
              </p>
            </div>
            <div className="relative aspect-4/3 overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1920&q=80"
                alt={`${t('heroImageAlt')} at Silk Beauty Salon in Batumi, Georgia`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Booking Calendar and Form */}
            <div className="lg:col-span-2">
              <div className="border-t border-[#e8e4df] pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-[#b5453a]" />
                  <h2 className="font-sans text-2xl font-light text-[#241f1b] md:text-3xl">
                    {t('selectDateTime')}
                  </h2>
                </div>

                <div className="rounded-md bg-[#f7f4f0] p-4 md:p-8">
                  <BookingForm treatments={treatmentOptions} />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="border-t border-[#e8e4df] py-8">
                <h3 className="mb-4 font-sans text-lg font-light text-[#241f1b]">
                  {t('needHelp')}
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                  <span className="text-muted-foreground">{t('phone')}:</span>
                  <br />
                  <a 
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                    className="text-primary hover:text-[#b5453a]"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
                <div>
                  <span className="text-muted-foreground">{t('email')}:</span>
                  <br />
                  <a 
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-primary hover:text-[#b5453a]"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div>
                  <span className="text-muted-foreground">{t('address')}:</span>
                  <br />
                  <span className="text-primary">
                    {siteConfig.contact.address}, {siteConfig.contact.city}
                  </span>
                </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Treatment Menu */}
              <div className="border-t border-[#e8e4df] py-8">
                <h3 className="mb-4 font-sans text-lg font-light text-[#241f1b]">
                  {t('treatmentMenu', { defaultValue: 'Treatment menu' })}
                </h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  {t('treatmentMenuDescription', {
                    defaultValue: 'Choose the same treatment menu used in the Silk Beauty mobile app.',
                  })}
                </p>
                <a
                  href="#booking-embed"
                  className="mt-5 inline-flex min-h-11 items-center rounded-md border border-[#d9cec1] bg-[#f7f2eb] px-4 text-xs font-medium uppercase tracking-widest text-[#241f1b] transition-colors hover:bg-[#241f1b] hover:text-white"
                >
                  {t('openTreatmentDropdown', { defaultValue: 'Open treatment dropdown' })}
                </a>
              </div>

              {/* What to Expect */}
              <div className="border-t border-[#e8e4df] py-8">
                <h3 className="mb-4 font-sans text-lg font-light text-[#241f1b]">
                  {t('whatToExpect.title')}
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-[#b5453a] text-xs tracking-[0.15em] uppercase">01</span>
                    <span>{t('whatToExpect.step1')}</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-[#b5453a] text-xs tracking-[0.15em] uppercase">02</span>
                    <span>{t('whatToExpect.step2')}</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-[#b5453a] text-xs tracking-[0.15em] uppercase">03</span>
                    <span>{t('whatToExpect.step3')}</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-[#b5453a] text-xs tracking-[0.15em] uppercase">04</span>
                    <span>{t('whatToExpect.step4')}</span>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="border-t border-[#e8e4df] py-8">
                <h3 className="mb-4 font-sans text-lg font-light text-[#241f1b]">
                  {t('needHelp')}
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">{t('phone')}:</span>
                    <br />
                    <a 
                      href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                      className="text-primary hover:text-[#b5453a]"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                  <div>
                    <span className="text-muted-foreground">{t('email')}:</span>
                    <br />
                    <a 
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-primary hover:text-[#b5453a]"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-muted-foreground">{t('address')}:</span>
                    <br />
                    <span className="text-primary">
                      {siteConfig.contact.address}, {siteConfig.contact.city}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing bg-[#f7f4f0]">
        <div className="container-custom">
          <h2 className="mb-8 text-center font-sans text-2xl font-light text-[#241f1b] md:text-3xl">
            {t('faq.title')}
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              { q: t('faq.q1'), a: t('faq.a1') },
              { q: t('faq.q2'), a: t('faq.a2') },
              { q: t('faq.q3'), a: t('faq.a3') },
              { q: t('faq.q4'), a: t('faq.a4') },
            ].map((faq, index) => (
              <div key={index} className="py-6 border-t border-[#e8e4df]">
                <h3 className="font-semibold text-primary mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
