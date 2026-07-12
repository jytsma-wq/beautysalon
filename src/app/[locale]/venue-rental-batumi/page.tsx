import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarCheck,
  Check,
  ChevronRight,
  FileCheck2,
  GraduationCap,
  MapPin,
  MessageCircle,
  Presentation,
} from 'lucide-react';
import { Link } from '@/i18n/routing';
import { locales, type Locale } from '@/i18n';
import { siteConfig } from '@/data/site-config';
import { venueRentalContent } from '@/data/venue-rental';
import { buildSeoMetadata } from '@/lib/seo';

const eventIcons = [BriefcaseBusiness, GraduationCap, Presentation];

function getContent(locale: string) {
  const validLocale = locales.includes(locale as Locale) ? (locale as Locale) : 'en';
  return venueRentalContent[validLocale];
}

function getWhatsAppHref(message: string) {
  const phone = siteConfig.contact.whatsappPhone.replace(/\D/g, '');
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = getContent(locale);

  return buildSeoMetadata({
    locale,
    path: '/venue-rental-batumi',
    title: content.metadataTitle,
    description: content.metadataDescription,
    image: '/images/hero-poster.jpg',
    imageAlt: 'Silk Beauty Salon venue rental enquiries in Batumi',
  });
}

export default async function VenueRentalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = getContent(locale);
  const whatsappHref = getWhatsAppHref(content.whatsappMessage);

  return (
    <>
      <section className="bg-[#f7f2eb]" aria-labelledby="venue-rental-title">
        <div className="container-custom py-12 md:py-16 lg:py-20">
          <nav className="mb-8 flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
            <Link href="/" className="hover:text-[#241f1b]">
              Silk Beauty Salon
            </Link>
            <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" aria-hidden="true" />
            <span className="text-[#241f1b]">{content.navLabel}</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[48%_52%] lg:gap-14">
            <div className="max-w-3xl">
              <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#8d6f58]">
                {content.eyebrow}
              </p>
              <h1
                id="venue-rental-title"
                className="localized-hero-heading mb-6 font-sans font-light text-[#241f1b]"
              >
                {content.title}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-stone-700">{content.intro}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#241f1b] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#8d6f58] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8d6f58]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {content.primaryCta}
                </a>
                <Link
                  href="/contact-us"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#cdbca9] bg-white px-6 py-3 text-sm font-medium text-[#241f1b] transition-colors hover:bg-[#eee5da] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8d6f58]"
                >
                  {content.secondaryCta}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                </Link>
              </div>

              <p className="mt-5 max-w-xl text-xs leading-5 text-stone-500">{content.availabilityNote}</p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] bg-[#e9e2da]">
              <Image
                src="/images/hero-poster.jpg"
                alt=""
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 52vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[#241f1b]/88 px-5 py-4 text-sm text-white backdrop-blur-sm">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-[#d8b98b]" aria-hidden="true" />
                  {siteConfig.contact.address}, {siteConfig.contact.city} {siteConfig.contact.postcode}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing" aria-labelledby="venue-types-title">
        <div className="container-custom">
          <div className="mb-12 max-w-3xl">
            <h2 id="venue-types-title" className="mb-5 font-sans text-3xl font-light text-[#241f1b] md:text-4xl">
              {content.eventTypesHeading}
            </h2>
            <p className="text-base leading-7 text-stone-700">{content.eventTypesIntro}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {content.eventTypes.map((eventType, index) => {
              const Icon = eventIcons[index];
              return (
                <article key={eventType.title} className="border-t border-[#cdbca9] pt-6">
                  <Icon className="mb-8 h-7 w-7 text-[#8d6f58]" strokeWidth={1.4} aria-hidden="true" />
                  <h3 className="mb-3 font-sans text-xl font-light text-[#241f1b]">{eventType.title}</h3>
                  <p className="text-sm leading-6 text-stone-600">{eventType.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-[#f7f4f0]" aria-labelledby="venue-planning-title">
        <div className="container-custom grid gap-12 lg:grid-cols-[42%_58%] lg:gap-16">
          <div>
            <h2 id="venue-planning-title" className="mb-5 font-sans text-3xl font-light text-[#241f1b] md:text-4xl">
              {content.planningHeading}
            </h2>
            <p className="text-base leading-7 text-stone-700">{content.planningIntro}</p>
          </div>
          <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {content.planningItems.map((item) => (
              <li key={item} className="flex gap-3 border-t border-[#ddd2c6] pt-4 text-sm leading-6 text-stone-700">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#8d6f58]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-spacing" aria-labelledby="venue-process-title">
        <div className="container-custom">
          <h2 id="venue-process-title" className="mb-12 font-sans text-3xl font-light text-[#241f1b] md:text-4xl">
            {content.processHeading}
          </h2>
          <ol className="grid gap-8 md:grid-cols-3">
            {content.processSteps.map((step, index) => {
              const Icon = index === 0 ? CalendarCheck : index === 1 ? FileCheck2 : MessageCircle;
              return (
                <li key={step.title} className="border-t border-[#cdbca9] pt-6">
                  <Icon className="mb-6 h-6 w-6 text-[#8d6f58]" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="mb-3 font-sans text-xl font-light text-[#241f1b]">{step.title}</h3>
                  <p className="text-sm leading-6 text-stone-600">{step.description}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="section-spacing bg-[#241f1b] text-white" aria-labelledby="venue-inquiry-title">
        <div className="container-custom grid gap-10 lg:grid-cols-[44%_56%] lg:gap-16">
          <div>
            <h2 id="venue-inquiry-title" className="mb-5 font-sans text-3xl font-light md:text-4xl">
              {content.inquiryHeading}
            </h2>
            <p className="leading-7 text-stone-300">{content.inquiryIntro}</p>
            <div className="mt-8 border-t border-white/20 pt-6">
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#d8b98b]">{content.locationLabel}</p>
              <address className="not-italic text-sm leading-6 text-stone-200">
                {siteConfig.name}
                <br />
                {siteConfig.contact.address}, {siteConfig.contact.city} {siteConfig.contact.postcode}
                <br />
                {siteConfig.contact.country}
              </address>
            </div>
          </div>
          <ul className="space-y-4">
            {content.inquiryItems.map((item) => (
              <li key={item} className="flex gap-3 border-b border-white/15 pb-4 text-sm leading-6 text-stone-200">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#d8b98b]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-spacing" aria-labelledby="venue-faq-title">
        <div className="container-custom grid gap-10 lg:grid-cols-[34%_66%] lg:gap-16">
          <h2 id="venue-faq-title" className="font-sans text-3xl font-light text-[#241f1b] md:text-4xl">
            {content.faqHeading}
          </h2>
          <div className="divide-y divide-[#ddd2c6] border-y border-[#ddd2c6]">
            {content.faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-5 font-sans text-lg text-[#241f1b] marker:content-none">
                  <span>{faq.question}</span>
                  <span className="text-2xl font-light text-[#8d6f58] transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-2 pt-3 text-sm leading-7 text-stone-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eee5da] py-16 md:py-20" aria-labelledby="venue-closing-title">
        <div className="container-custom flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <h2 id="venue-closing-title" className="mb-4 font-sans text-3xl font-light text-[#241f1b] md:text-4xl">
              {content.closingTitle}
            </h2>
            <p className="leading-7 text-stone-700">{content.closingDescription}</p>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-[#241f1b] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#8d6f58] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8d6f58]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {content.primaryCta}
          </a>
        </div>
      </section>
    </>
  );
}
