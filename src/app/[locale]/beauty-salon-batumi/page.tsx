import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { Award, CalendarCheck, ChevronRight, Clock, Mail, MapPin, Phone, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  JsonLd,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateLocalBusinessSchema,
} from '@/components/seo/JsonLd';
import { siteConfig } from '@/data/site-config';
import { locales } from '@/i18n';
import { buildSeoMetadata, localSeoKeywords } from '@/lib/seo';

const pageTitle = 'Beauty Salon in Batumi, Georgia';
const pageDescription =
  'Visit Silk Beauty Salon at Zurab Gorgiladze 63 in Batumi for facials, injectables, skin care, nails, lashes, and online booking.';

const serviceHighlights = [
  {
    title: 'Facials and skin care',
    description:
      'Hydrating, calming, brightening, and texture-focused skin care planned around your skin condition and Batumi climate.',
    href: '/treatments',
  },
  {
    title: 'Botox and injectables',
    description:
      'Consultation-led anti-wrinkle treatments and facial balancing with clear expectations and aftercare.',
    href: '/treatments/anti-wrinkle',
  },
  {
    title: 'Dermal fillers',
    description:
      'Natural-looking lip, cheek, chin, jawline, and tear trough planning with conservative aesthetic judgment.',
    href: '/treatments/lip-fillers',
  },
  {
    title: 'Laser and advanced skin treatments',
    description:
      'Technology-led options for tone, texture, hair reduction, collagen stimulation, and skin rejuvenation.',
    href: '/treatments/cutera-secret-pro-rf-microneedling',
  },
];

const localFaqs = [
  {
    question: 'Where is Silk Beauty Salon in Batumi?',
    answer:
      'Silk Beauty Salon is located at Zurab Gorgiladze 63, Batumi, Adjara 6000, Georgia.',
  },
  {
    question: 'Can tourists book appointments at Silk Beauty Salon?',
    answer:
      'Yes. International clients can book online, call the salon, or email info@silkbeautysalon.online before arriving in Batumi.',
  },
  {
    question: 'Which beauty services are available in Batumi?',
    answer:
      'Silk Beauty Salon offers facials, skin care, injectables, dermal fillers, laser and energy treatments, lashes, nails, consultations, and aftercare planning.',
  },
  {
    question: 'How can I book a beauty appointment in Batumi?',
    answer:
      'Use the online booking page, call +995 599 123 456, or email info@silkbeautysalon.online to request an appointment.',
  },
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  return buildSeoMetadata({
    locale,
    path: '/beauty-salon-batumi',
    title: pageTitle,
    description: pageDescription,
    keywords: [
      'beauty salon Batumi',
      'Batumi beauty salon',
      'best beauty salon Batumi',
      'facials Batumi',
      'Botox Batumi',
      'dermal fillers Batumi',
      'skin care Batumi Georgia',
      ...localSeoKeywords,
    ],
    image: '/images/hero-poster.jpg',
    imageAlt: 'Silk Beauty Salon in Batumi, Georgia',
  });
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function BeautySalonBatumiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: `${siteConfig.url}/${locale}` },
    { name: pageTitle, url: `${siteConfig.url}/${locale}/beauty-salon-batumi` },
  ]);

  return (
    <>
      <JsonLd id="json-ld-batumi-business" schema={generateLocalBusinessSchema(locale)} />
      <JsonLd id="json-ld-batumi-breadcrumbs" schema={breadcrumbSchema} />
      <JsonLd id="json-ld-batumi-faq" schema={generateFAQSchema(localFaqs)} />

      <section className="bg-[#f7f2eb] pt-[170px] md:pt-[188px]">
        <div className="container-custom py-16 md:py-20">
          <nav className="mb-8 flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
            <Link href="/" className="hover:text-[#241f1b]">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-[#241f1b]">Beauty salon Batumi</span>
          </nav>

          <div className="grid items-end gap-12 lg:grid-cols-[48%_52%]">
            <div className="max-w-3xl">
              <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#8d6f58]">
                Batumi beauty salon
              </p>
              <h1 className="mb-6 font-sans text-[clamp(2.9rem,5.6vw,5.8rem)] font-light leading-[1.02] text-[#241f1b]">
                Beauty Salon in Batumi, Georgia
              </h1>
              <p className="text-lg leading-8 text-stone-700 md:text-xl">
                Silk Beauty Salon welcomes local and international clients for aesthetic consultations,
                facials, injectables, dermal fillers, skin care, lashes, nails, and beauty treatments
                at Zurab Gorgiladze 63 in Batumi.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild className="btn-gold">
                  <Link href="/book">Book online</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-md">
                  <Link href="/treatments">View treatments</Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[8px]">
              <Image
                src="/images/hero-poster.jpg"
                alt="Silk Beauty Salon treatment room in Batumi, Georgia"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[38%_62%]">
            <div>
              <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#8d6f58]">
                Why choose Silk
              </p>
              <h2 className="mb-5 font-sans text-3xl font-light text-[#241f1b] md:text-4xl">
                Local expertise with clear consultation and aftercare
              </h2>
              <p className="leading-7 text-stone-700">
                A good Batumi beauty salon should make location, pricing context, practitioner details,
                treatment expectations, and booking options easy to understand. Silk combines visible
                team expertise, multilingual communication, and online booking so clients can plan beauty
                care around work, travel, events, and the Black Sea climate.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: Shield,
                  title: 'Consultation first',
                  text: 'Treatments are planned around skin history, goals, timing, downtime, and contraindications.',
                },
                {
                  icon: Sparkles,
                  title: 'Natural results',
                  text: 'The team focuses on balance, skin quality, and results that fit your features.',
                },
                {
                  icon: Award,
                  title: 'Visible team expertise',
                  text: 'Practitioner bios list roles, qualifications, languages, and treatment focus.',
                },
                {
                  icon: CalendarCheck,
                  title: 'Easy booking',
                  text: 'Book online, call, or email before visiting the salon in central Batumi.',
                },
              ].map((item) => (
                <div key={item.title} className="border-t border-[#e8e4df] pt-6">
                  <item.icon className="mb-4 h-6 w-6 text-[#8d6f58]" />
                  <h3 className="mb-2 font-sans text-xl font-light text-[#241f1b]">{item.title}</h3>
                  <p className="text-sm leading-6 text-stone-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-[#f7f4f0]">
        <div className="container-custom">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#8d6f58]">
              Services in Batumi
            </p>
            <h2 className="mb-5 font-sans text-3xl font-light text-[#241f1b] md:text-4xl">
              Popular beauty and aesthetic treatments
            </h2>
            <p className="leading-7 text-stone-700">
              Start with the treatment category that matches your goal. If you are unsure, book a
              consultation and the team will help you choose a suitable path.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {serviceHighlights.map((service) => (
              <article key={service.title} className="border-t border-[#d8cbbb] pt-6">
                <h3 className="mb-3 font-sans text-xl font-light text-[#241f1b]">{service.title}</h3>
                <p className="mb-5 text-sm leading-6 text-stone-600">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#8d6f58] hover:text-[#241f1b]"
                >
                  Learn more
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[44%_56%]">
            <div>
              <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#8d6f58]">
                Visit us
              </p>
              <h2 className="mb-5 font-sans text-3xl font-light text-[#241f1b] md:text-4xl">
                Find Silk Beauty Salon in Batumi
              </h2>
              <p className="leading-7 text-stone-700">
                The salon is on Zurab Gorgiladze Street, close to central Batumi hotels, shops, and
                the Black Sea boulevard. Contact the team before arriving if you need help planning
                a treatment around travel, events, or recovery time.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="border-t border-[#e8e4df] pt-5">
                <h3 className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-stone-500">
                  <MapPin className="h-4 w-4 text-[#8d6f58]" />
                  Address
                </h3>
                <p className="text-sm leading-6 text-stone-700">
                  {siteConfig.contact.address}
                  <br />
                  {siteConfig.contact.city}, {siteConfig.contact.region} {siteConfig.contact.postcode}
                  <br />
                  {siteConfig.contact.country}
                </p>
              </div>
              <div className="border-t border-[#e8e4df] pt-5">
                <h3 className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-stone-500">
                  <Phone className="h-4 w-4 text-[#8d6f58]" />
                  Phone and email
                </h3>
                <p className="space-y-1 text-sm leading-6 text-stone-700">
                  <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="block hover:text-[#8d6f58]">
                    {siteConfig.contact.phone}
                  </a>
                  <a href={`mailto:${siteConfig.contact.email}`} className="block hover:text-[#8d6f58]">
                    <Mail className="mr-1 inline h-3.5 w-3.5" />
                    {siteConfig.contact.email}
                  </a>
                </p>
              </div>
              <div className="border-t border-[#e8e4df] pt-5 sm:col-span-2">
                <h3 className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-stone-500">
                  <Clock className="h-4 w-4 text-[#8d6f58]" />
                  Opening hours
                </h3>
                <dl className="grid gap-2 text-sm text-stone-700 sm:grid-cols-2">
                  {Object.entries(siteConfig.businessHours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between gap-4 border-b border-[#e8e4df] pb-2">
                      <dt className="capitalize">{day}</dt>
                      <dd className="text-[#241f1b]">{hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-[#f7f4f0]">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 font-sans text-3xl font-light text-[#241f1b] md:text-4xl">
              Questions about booking a beauty salon in Batumi
            </h2>
            <div className="space-y-8">
              {localFaqs.map((faq) => (
                <article key={faq.question} className="border-t border-[#d8cbbb] pt-6">
                  <h3 className="mb-3 font-sans text-xl font-light text-[#241f1b]">{faq.question}</h3>
                  <p className="leading-7 text-stone-700">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom text-center">
          <h2 className="mb-4 font-sans text-3xl font-light text-[#241f1b] md:text-4xl">
            Ready to book in Batumi?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-stone-600">
            Choose a consultation if you want help deciding which treatment fits your goals, timing,
            and skin condition.
          </p>
          <Button asChild className="btn-gold">
            <Link href="/book">Book a consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
