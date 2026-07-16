import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2, ChevronRight, Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { visitorPageCopy } from '@/data/factual-page-copy';
import { localSeoLandingPages } from '@/data/local-seo-pages';
import { siteConfig } from '@/data/site-config';
import { locales, type Locale } from '@/i18n';
import { Link } from '@/i18n/routing';
import { getLocalizedBusinessHours } from '@/lib/business-hours';
import { buildSeoMetadata, localSeoKeywords } from '@/lib/seo';
import { getTranslations } from 'next-intl/server';

interface Props {
  params: Promise<{ locale: string }>;
}

function getLocale(locale: string): Locale {
  return locales.includes(locale as Locale) ? (locale as Locale) : 'en';
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const localeKey = getLocale(locale);
  const copy = visitorPageCopy[localeKey];

  return buildSeoMetadata({
    locale: localeKey,
    path: '/international-clients',
    title: copy.title,
    description: copy.description,
    keywords: [...localSeoKeywords, 'beauty salon for visitors Batumi'],
    imageAlt: 'Silk Beauty Salon in Batumi, Georgia',
  });
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function InternationalClientsPage({ params }: Props) {
  const { locale } = await params;
  const localeKey = getLocale(locale);
  const copy = visitorPageCopy[localeKey];
  const tCommon = await getTranslations({ locale: localeKey, namespace: 'common' });
  const whatsappHref = `https://wa.me/${siteConfig.contact.whatsappPhone.replace(/\D/g, '')}`;
  const businessHours = getLocalizedBusinessHours(localeKey);

  return (
    <>
      <section className="relative flex min-h-[70vh] items-center pt-[120px] md:pt-[138px]">
        <div className="absolute inset-0">
          <Image src="/images/hero-poster.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-[#1c1c1c]/55" />
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl text-white">
            <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#d8cbbb]">{copy.eyebrow}</p>
            <h1 className="localized-hero-heading mb-6 font-sans font-light">{copy.h1}</h1>
            <p className="max-w-2xl text-lg leading-8 text-white/90">{copy.intro}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild className="btn-gold"><Link href="/book">{copy.book}</Link></Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-[#241f1b]">
                <Link href="/beauty-salon-batumi">{copy.services}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-secondary py-4">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-[#8d6f58]">{tCommon('home')}</Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium text-primary">{copy.h1}</span>
          </nav>
        </div>
      </div>

      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-[38%_62%]">
            <div>
              <h2 className="mb-5 font-sans text-3xl font-light text-[#241f1b] md:text-4xl">{copy.planTitle}</h2>
              <p className="leading-7 text-stone-700">{copy.planText}</p>
            </div>
            <ol className="grid gap-6 sm:grid-cols-2">
              {copy.planSteps.map((step, index) => (
                <li key={step} className="border-t border-[#d8cbbb] pt-5">
                  <span className="mb-3 block text-[0.68rem] uppercase tracking-[0.18em] text-[#8d6f58]">{String(index + 1).padStart(2, '0')}</span>
                  <span className="flex gap-3 text-sm leading-6 text-stone-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#8d6f58]" /> {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-[#f7f4f0]">
        <div className="container-custom">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-5 font-sans text-3xl font-light text-[#241f1b] md:text-4xl">{copy.serviceTitle}</h2>
            <p className="leading-7 text-stone-700">{copy.serviceText}</p>
          </div>
          <div className="grid gap-px bg-[#d8cbbb] md:grid-cols-2 lg:grid-cols-3">
            {localSeoLandingPages.map((page) => {
              const content = page.content[localeKey];
              return (
                <Link key={page.slug} href={`/${page.slug}`} className="group bg-white p-7 transition-colors hover:bg-[#f7f2eb]">
                  <h3 className="font-sans text-xl font-light text-[#241f1b]">{content.h1}</h3>
                  <p className="mt-3 text-sm leading-6 text-stone-600">{content.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-[0.68rem] uppercase tracking-[0.18em] text-[#8d6f58]">
                    {tCommon('learnMore')} <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
            <Link href="/pricelist" className="group bg-white p-7 transition-colors hover:bg-[#f7f2eb]">
              <h3 className="font-sans text-xl font-light text-[#241f1b]">{copy.services}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">{copy.serviceText}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-[0.68rem] uppercase tracking-[0.18em] text-[#8d6f58]">
                {tCommon('viewAll')} <ChevronRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-5 font-sans text-3xl font-light text-[#241f1b] md:text-4xl">{copy.locationTitle}</h2>
            <p className="leading-7 text-stone-700">{copy.locationText}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            <div className="border-t border-[#d8cbbb] pt-5"><MapPin className="mb-3 h-5 w-5 text-[#8d6f58]" /><h3 className="mb-2 text-xs uppercase tracking-[0.18em] text-stone-500">{copy.address}</h3><p className="text-sm leading-6">{siteConfig.contact.address}<br />{siteConfig.contact.city} {siteConfig.contact.postcode}, {siteConfig.contact.country}</p></div>
            <div className="border-t border-[#d8cbbb] pt-5"><Phone className="mb-3 h-5 w-5 text-[#8d6f58]" /><h3 className="mb-2 text-xs uppercase tracking-[0.18em] text-stone-500">{copy.phone}</h3><a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="text-sm hover:text-[#8d6f58]">{siteConfig.contact.phone}</a></div>
            <div className="border-t border-[#d8cbbb] pt-5"><MessageCircle className="mb-3 h-5 w-5 text-[#8d6f58]" /><h3 className="mb-2 text-xs uppercase tracking-[0.18em] text-stone-500">{copy.whatsapp}</h3><a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#8d6f58]">{siteConfig.contact.whatsappPhone}</a></div>
            <div className="border-t border-[#d8cbbb] pt-5"><Mail className="mb-3 h-5 w-5 text-[#8d6f58]" /><h3 className="mb-2 text-xs uppercase tracking-[0.18em] text-stone-500">{copy.email}</h3><a href={`mailto:${siteConfig.contact.email}`} className="break-words text-sm hover:text-[#8d6f58]">{siteConfig.contact.email}</a></div>
            <div className="border-t border-[#d8cbbb] pt-5"><Clock className="mb-3 h-5 w-5 text-[#8d6f58]" /><h3 className="mb-2 text-xs uppercase tracking-[0.18em] text-stone-500">{copy.hours}</h3><p className="text-sm leading-6">{businessHours[0].day}: {businessHours[0].hours}<br />{businessHours[6].day}: {businessHours[6].hours}</p></div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-[#241f1b] text-white">
        <div className="container-custom text-center">
          <h2 className="mb-4 font-sans text-3xl font-light md:text-4xl">{copy.ctaTitle}</h2>
          <p className="mx-auto mb-8 max-w-xl text-white/75">{copy.ctaText}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-white text-[#241f1b] hover:bg-[#f7f2eb]"><Link href="/book">{copy.book}</Link></Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-[#241f1b]"><a href={whatsappHref} target="_blank" rel="noopener noreferrer">{copy.whatsapp}</a></Button>
          </div>
        </div>
      </section>
    </>
  );
}
