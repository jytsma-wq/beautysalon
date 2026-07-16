'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { beautySalonBatumiCopy } from '@/data/beauty-salon-batumi-copy';
import { localSeoLandingPages } from '@/data/local-seo-pages';
import type { Locale } from '@/i18n';
import {
  getPopularTreatmentHighlights,
  portfolioHighlights,
  proofStats,
  resultCases,
} from '@/data/homepage';
import { testimonials } from '@/data/testimonials';
import { RevealOnScroll } from '@/components/effects/RevealOnScroll';
import { VisitUsSection } from '@/components/sections/VisitUsSection';
import { useHydratedReducedMotion } from '@/hooks/use-hydrated-reduced-motion';
import {
  ClinicalHeroCarousel,
  ConcernCarousel,
  ReviewsCarousel,
  ResultsCarousel,
  TrendsCarousel,
} from './GaldermaHomeCarousels';

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#8d6f58]">
        {eyebrow}
      </p>
      <h2 className="localized-section-heading font-sans font-light text-[#241f1b]">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function PhilosophySection() {
  const locale = useLocale() as Locale;
  const copy = beautySalonBatumiCopy[locale];

  return (
    <section className="bg-white px-6 py-24 md:px-12 md:py-32 lg:px-16 xl:px-24">
      <RevealOnScroll className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[42%_58%] lg:items-end">
          <SectionHeading
            eyebrow={copy.whyEyebrow}
            title={copy.whyTitle}
            description={copy.whyText}
          />
          <div className="border-t border-stone-200 pt-8">
            <p className="localized-statement-heading font-sans font-light text-[#241f1b]">
              {copy.servicesText}
            </p>
          </div>
      </RevealOnScroll>
    </section>
  );
}

function PortfolioSection() {
  const t = useTranslations('homeEditorial');
  const locale = useLocale() as Locale;
  const copy = beautySalonBatumiCopy[locale];
  const shouldReduceMotion = useHydratedReducedMotion();
  const localCopies = ['dermal-fillers-batumi', 'botox-batumi', 'skin-treatment-batumi'].map(
    (slug) => localSeoLandingPages.find((page) => page.slug === slug)!.content[locale]
  );
  const items = portfolioHighlights.map((item, index) => ({
    ...item,
    title: localCopies[index].h1,
    description: localCopies[index].description,
  }));

  return (
    <section className="bg-white px-6 py-24 md:px-12 md:py-32 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={copy.servicesEyebrow}
            title={copy.servicesTitle}
            description={copy.servicesText}
          />
          <Link
            href="/treatments"
            className="inline-flex h-12 items-center self-start border border-[#241f1b] px-7 text-xs font-medium uppercase tracking-[0.18em] text-[#241f1b] transition-colors hover:bg-[#241f1b] hover:text-white"
          >
            {t('portfolio.viewAll')}
          </Link>
        </RevealOnScroll>

        <div className="grid gap-px bg-stone-200 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              className="bg-white"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              whileHover={shouldReduceMotion ? undefined : { y: -8 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
            >
              <Link href={item.href} className="group block h-full">
                <div className="relative aspect-4/5 overflow-hidden bg-stone-100">
                  <Image
                    src={item.image}
                    alt={`${item.title} at Silk Beauty Salon in Batumi, Georgia`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 translate-y-4 bg-linear-to-t from-[#241f1b]/35 to-transparent opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
                </div>
                <div className="min-h-56 p-7 md:p-9">
                  <h3 className="font-sans text-4xl font-light text-[#241f1b]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-stone-600">
                    {item.description}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#8d6f58]">
                    {t('portfolio.explore')}
                    <span className="h-px w-7 bg-current transition-transform duration-300 group-hover:translate-x-2" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PopularTreatmentsSection() {
  const t = useTranslations('homeEditorial');
  const shouldReduceMotion = useHydratedReducedMotion();
  const items = getPopularTreatmentHighlights().map((item) => ({
    ...item,
    title: t(`popularTreatments.items.${item.id}.title`),
    description: t(`popularTreatments.items.${item.id}.description`),
    linkLabel: t(`popularTreatments.items.${item.id}.linkLabel`),
  }));

  return (
    <section className="bg-white px-6 py-24 md:px-12 md:py-32 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={t('popularTreatments.eyebrow')}
            title={t('popularTreatments.title')}
            description={t('popularTreatments.description')}
          />
          <Link
            href="/pricelist"
            className="inline-flex h-12 items-center self-start border border-[#241f1b] px-7 text-xs font-medium uppercase tracking-[0.18em] text-[#241f1b] transition-colors hover:bg-[#241f1b] hover:text-white"
          >
            {t('popularTreatments.viewPricelist')}
          </Link>
        </RevealOnScroll>

        <div className="grid gap-px bg-stone-200 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <motion.article
              key={item.id}
              className="bg-white"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              whileHover={shouldReduceMotion ? undefined : { y: -8 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
            >
              <Link href={item.href} className="group flex min-h-72 h-full flex-col p-7 md:p-9">
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#8d6f58]">
                  {t('popularTreatments.priceLabel')}
                </p>
                <p className="mt-3 font-sans text-3xl font-light text-[#241f1b]">
                  {item.price}
                </p>
                <h3 className="mt-8 font-sans text-3xl font-light text-[#241f1b]">
                  {item.title}
                </h3>
                <p className="mt-4 grow text-sm leading-7 text-stone-600">
                  {item.description}
                </p>
                <span className="mt-7 inline-flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#8d6f58]">
                  {item.linkLabel}
                  <span className="h-px w-7 bg-current transition-transform duration-300 group-hover:translate-x-2" />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const t = useTranslations('homeEditorial');

  return (
    <section className="bg-[#f7f2eb] px-6 py-20 md:px-12 lg:px-16 xl:px-24">
      <div className="mx-auto grid max-w-7xl gap-px bg-stone-200 md:grid-cols-3">
        {proofStats.map((stat, index) => (
          <RevealOnScroll key={stat.value} delay={index * 0.08}>
            <div className="bg-[#f7f2eb] px-8 py-12 text-center">
              <p className="font-sans text-6xl font-light leading-none text-[#241f1b]">
                {stat.value}
              </p>
              <p className="mt-4 text-[0.68rem] uppercase tracking-[0.22em] text-stone-500">
                {t(`stats.item${index + 1}.label`)}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

function SpecialistCta() {
  const locale = useLocale() as Locale;
  const copy = beautySalonBatumiCopy[locale];
  const tCommon = useTranslations('common');
  const tNav = useTranslations('nav');

  return (
    <section className="bg-[#241f1b] px-6 py-24 text-white md:px-12 md:py-32 lg:px-16 xl:px-24">
      <RevealOnScroll className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[55%_45%] lg:items-center">
        <div>
          <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#d8cbbb]">
            {copy.whyEyebrow}
          </p>
          <h2 className="localized-hero-heading font-sans font-light">
            {copy.ctaTitle}
          </h2>
        </div>
        <div>
          <p className="max-w-lg text-base leading-8 text-stone-200 md:text-lg">
            {copy.ctaText}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/book"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white px-7 text-xs font-medium uppercase tracking-[0.18em] text-[#241f1b] transition-colors hover:bg-[#f7f2eb]"
            >
              {tCommon('bookNow')}
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex h-12 items-center justify-center border border-white/60 px-7 text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-[#241f1b]"
            >
              {tNav('contact')}
            </Link>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export function GaldermaInspiredHome() {
  const t = useTranslations('homeEditorial');
  return (
    <>
      <ClinicalHeroCarousel />
      <PhilosophySection />

      <section className="bg-[#f7f2eb] px-6 py-24 md:px-12 md:py-32 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll className="mb-12">
            <SectionHeading
              eyebrow={t('concerns.eyebrow')}
              title={t('concerns.title')}
              description={t('concerns.description')}
            />
          </RevealOnScroll>
          <RevealOnScroll delay={0.08}>
            <ConcernCarousel />
          </RevealOnScroll>
        </div>
      </section>

      <PortfolioSection />
      <PopularTreatmentsSection />
      <StatsSection />

      {resultCases.length > 0 ? (
        <section className="bg-[#f7f2eb] px-6 py-24 md:px-12 md:py-32 lg:px-16 xl:px-24">
          <div className="mx-auto max-w-7xl">
            <RevealOnScroll className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow={t('results.eyebrow')}
                title={t('results.title')}
                description={t('results.description')}
              />
              <Link
                href="/before-after"
                className="inline-flex h-12 items-center self-start border border-[#241f1b] px-7 text-xs font-medium uppercase tracking-[0.18em] text-[#241f1b] transition-colors hover:bg-[#241f1b] hover:text-white"
              >
                {t('results.cta')}
              </Link>
            </RevealOnScroll>
            <RevealOnScroll delay={0.08}>
              <ResultsCarousel />
            </RevealOnScroll>
          </div>
        </section>
      ) : null}

      {testimonials.length > 0 ? (
        <section className="bg-white px-6 py-24 md:px-12 md:py-32 lg:px-16 xl:px-24">
          <div className="mx-auto max-w-7xl">
            <RevealOnScroll className="mb-12">
              <SectionHeading
                eyebrow={t('reviews.eyebrow')}
                title={t('reviews.title')}
                description={t('reviews.description')}
              />
            </RevealOnScroll>
            <RevealOnScroll delay={0.08}>
              <ReviewsCarousel />
            </RevealOnScroll>
          </div>
        </section>
      ) : null}

      <SpecialistCta />
      <VisitUsSection />

      <section className="bg-white px-6 py-24 md:px-12 md:py-32 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow={t('journal.eyebrow')}
              title={t('journal.title')}
              description={t('journal.description')}
            />
            <Link
              href="/blog"
              className="inline-flex h-12 items-center self-start border border-[#241f1b] px-7 text-xs font-medium uppercase tracking-[0.18em] text-[#241f1b] transition-colors hover:bg-[#241f1b] hover:text-white"
            >
              {t('journal.cta')}
            </Link>
          </RevealOnScroll>
          <RevealOnScroll delay={0.08}>
            <TrendsCarousel />
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
