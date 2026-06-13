import { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import {
  ChevronRight,
  Award,
  Heart,
  Shield,
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/data/site-config';
import { getTranslations } from 'next-intl/server';
import { buildSeoMetadata, localSeoKeywords } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'aboutPage' });
  return buildSeoMetadata({
    locale,
    path: '/about',
    title: locale === 'en' ? 'Beauty Specialists in Batumi, Georgia' : t('title'),
    description:
      locale === 'en'
        ? 'Meet Silk Beauty Salon, a beauty salon in Batumi, Georgia led by experienced aesthetic and beauty specialists.'
        : t('subtitle'),
    keywords: localSeoKeywords,
    imageAlt: 'Silk Beauty Salon team and clinic in Batumi, Georgia',
  });
}

export async function generateStaticParams() {
  const locales = ['en', 'ka', 'ru', 'ar', 'he', 'tr'];
  return locales.map((locale) => ({ locale }));
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'aboutPage' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });

  const values = [
    { icon: Heart, titleKey: 'patientCare' },
    { icon: Award, titleKey: 'excellence' },
    { icon: Shield, titleKey: 'safety' },
    { icon: Sparkles, titleKey: 'naturalResults' },
  ];

  return (
    <>
      <section className="bg-[#f7f2eb] pt-[170px] md:pt-[188px]">
        <div className="container-custom py-16 md:py-20">
          <nav className="mb-8 flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
            <Link href="/" className="hover:text-[#241f1b]">
              {tCommon('home')}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-[#241f1b]">{t('title')}</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[48%_52%]">
            <div className="max-w-3xl">
              <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#8d6f58]">
                About the clinic
              </p>
              <h1 className="mb-6 font-sans text-[clamp(2.9rem,5.6vw,5.8rem)] font-light leading-[1.02] text-[#241f1b]">
                {t('title')}
              </h1>
              <p className="text-lg leading-8 text-stone-700">{t('subtitle')}</p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[8px]">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80"
                alt="Silk Beauty Salon interior in Batumi, Georgia"
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
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-sans text-3xl font-light text-[#241f1b] md:text-4xl">{t('ourStory')}</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">{t('storyP1')}</p>
              <p className="mb-4 leading-relaxed text-muted-foreground">{t('storyP2')}</p>
              <p className="text-sm text-stone-600">{t('storyP3')}</p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[8px]">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
                alt="Silk Beauty Salon clinic in Batumi, Georgia"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-[#f7f4f0]" aria-labelledby="trust-title">
        <div className="container-custom">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#8d6f58]">
              Trust, ownership, and contact details
            </p>
            <h2
              id="trust-title"
              className="mb-5 font-sans text-3xl font-light text-[#241f1b] md:text-4xl"
            >
              Locally operated beauty care in Batumi
            </h2>
            <p className="text-base leading-7 text-stone-700">{siteConfig.trust.ownership}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[42%_58%]">
            <dl className="grid gap-6 sm:grid-cols-2">
              <div className="border-t border-[#d8cbbb] pt-5">
                <dt className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-stone-500">
                  <Award className="h-4 w-4 text-[#8d6f58]" />
                  Legal name
                </dt>
                <dd className="font-sans text-lg text-[#241f1b]">{siteConfig.legalName}</dd>
              </div>
              <div className="border-t border-[#d8cbbb] pt-5">
                <dt className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-stone-500">
                  <Shield className="h-4 w-4 text-[#8d6f58]" />
                  Owner
                </dt>
                <dd className="font-sans text-lg text-[#241f1b]">{siteConfig.founderName}</dd>
              </div>
              <div className="border-t border-[#d8cbbb] pt-5">
                <dt className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-stone-500">
                  <MapPin className="h-4 w-4 text-[#8d6f58]" />
                  Address
                </dt>
                <dd className="text-sm leading-6 text-stone-700">
                  {siteConfig.contact.address}, {siteConfig.contact.city}, {siteConfig.contact.region}{' '}
                  {siteConfig.contact.postcode}, {siteConfig.contact.country}
                </dd>
              </div>
              <div className="border-t border-[#d8cbbb] pt-5">
                <dt className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-stone-500">
                  <Phone className="h-4 w-4 text-[#8d6f58]" />
                  Contact
                </dt>
                <dd className="space-y-1 text-sm leading-6 text-stone-700">
                  <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="block hover:text-[#8d6f58]">
                    {siteConfig.contact.phone}
                  </a>
                  <a href={`mailto:${siteConfig.contact.email}`} className="block hover:text-[#8d6f58]">
                    <Mail className="mr-1 inline h-3.5 w-3.5" />
                    {siteConfig.contact.email}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 flex items-center gap-2 font-sans text-xl font-light text-[#241f1b]">
                  <Clock className="h-5 w-5 text-[#8d6f58]" />
                  Opening hours
                </h3>
                <dl className="space-y-2 text-sm text-stone-700">
                  {Object.entries(siteConfig.businessHours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between gap-4 border-b border-[#e8e4df] pb-2">
                      <dt className="capitalize">{day}</dt>
                      <dd className="text-[#241f1b]">{hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div>
                <h3 className="mb-4 font-sans text-xl font-light text-[#241f1b]">
                  Operating standards
                </h3>
                <ul className="space-y-3 text-sm leading-6 text-stone-700">
                  {siteConfig.trust.standards.map((standard) => (
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

      <section className="section-spacing bg-secondary">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-sans text-3xl font-light text-[#241f1b] md:text-4xl">{t('ourValues')}</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.titleKey} className="border-t border-[#e8e4df] p-8 text-center">
                <value.icon className="mx-auto mb-4 h-7 w-7 text-[#8d6f58]" />
                <h3 className="mb-2 font-sans text-xl font-light text-[#241f1b]">{t(`values.${value.titleKey}`)}</h3>
                <p className="text-sm text-muted-foreground">{t(`values.${value.titleKey}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing" id="team">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-sans text-3xl font-light text-[#241f1b] md:text-4xl">{t('meetTeam')}</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">{t('teamSubtitle')}</p>
          </div>
          <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {siteConfig.team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative mx-auto mb-4 aspect-[4/5] max-w-xs overflow-hidden rounded-[8px]">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role} at Silk Beauty Salon in Batumi`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 50vw, 400px"
                  />
                </div>
                <h3 className="text-lg font-light text-[#241f1b]">{member.name}</h3>
                <p className="mb-2 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#8d6f58]">
                  {member.role}
                </p>
                <p className="mx-auto max-w-sm text-sm text-muted-foreground">{member.bio}</p>
                {member.qualifications && (
                  <ul className="mx-auto mt-4 max-w-sm space-y-2 text-left text-xs leading-5 text-stone-600">
                    {member.qualifications.map((qualification) => (
                      <li key={qualification} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8d6f58]" />
                        <span>{qualification}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {member.languages && (
                  <p className="mt-2 text-xs text-muted-foreground">Languages: {member.languages.join(', ')}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-[#f7f4f0]">
        <div className="container-custom text-center">
          <h2 className="mb-8 font-sans text-3xl font-light text-[#241f1b] md:text-4xl">{t('awards.title')}</h2>
          <div className="mb-8 flex flex-wrap justify-center gap-8">
            <span className="text-sm uppercase tracking-wider text-[#1c1c1c]">{t('awards.awardWinning')}</span>
            <span className="text-sm uppercase tracking-wider text-[#1c1c1c]">{t('awards.premierSalon')}</span>
            <span className="text-sm uppercase tracking-wider text-[#1c1c1c]">{t('awards.featuredIn')}</span>
          </div>
          <p className="text-sm text-[#9a9a9a]">{t('featuredIn')}</p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom text-center">
          <h2 className="mb-4 font-sans text-3xl font-light text-[#241f1b] md:text-4xl">{t('ctaTitle')}</h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">{t('ctaSubtitle')}</p>
          <Button asChild className="btn-gold">
            <Link href="/book">{t('ctaButton')}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
