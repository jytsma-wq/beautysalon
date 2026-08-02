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
      <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-normal text-[#31584f]">
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
    <section className="bg-white px-6 py-20 md:px-12 md:py-28 lg:px-16 xl:px-24">
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
    <section className="bg-white px-6 py-20 md:px-12 md:py-28 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={copy.servicesEyebrow}
            title={copy.servicesTitle}
            description={copy.servicesText}
          />
          <Link
            href="/treatments"
            className="inline-flex h-12 items-center self-start border border-[#31584f] px-7 text-xs font-medium uppercase tracking-normal text-[#31584f] transition-colors hover:bg-[#31584f] hover:text-white"
          >
            {t('portfolio.viewAll')}
          </Link>
        </RevealOnScroll>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-7">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              className={
                index === 0
                  ? 'lg:col-span-5'
                  : index === 1
                    ? 'lg:col-span-3 lg:mt-20'
                    : 'lg:col-span-4 lg:mt-8'
              }
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <Link href={item.href} className="group block h-full">
                <div className="relative aspect-4/5 overflow-hidden bg-stone-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 translate-y-4 bg-linear-to-t from-[#241f1b]/35 to-transparent opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
                </div>
                <div className="border-b border-[#dfe5e2] py-6">
                  <h3 className="font-sans text-3xl font-light text-[#241f1b] md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-stone-600">
                    {item.description}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-normal text-[#31584f]">
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
  const locale = useLocale() as Locale;
  const shouldReduceMotion = useHydratedReducedMotion();
  const items = getPopularTreatmentHighlights(locale).map((item) => ({
    ...item,
    title: t(`popularTreatments.items.${item.id}.title`),
    description: t(`popularTreatments.items.${item.id}.description`),
    linkLabel: t(`popularTreatments.items.${item.id}.linkLabel`),
  }));

  return (
    <section className="bg-[#f4f6f4] px-6 py-20 md:px-12 md:py-28 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={t('popularTreatments.eyebrow')}
            title={t('popularTreatments.title')}
            description={t('popularTreatments.description')}
          />
          <Link
            href="/pricelist"
            className="inline-flex h-12 items-center self-start border border-[#31584f] px-7 text-xs font-medium uppercase tracking-normal text-[#31584f] transition-colors hover:bg-[#31584f] hover:text-white"
          >
            {t('popularTreatments.viewPricelist')}
          </Link>
        </RevealOnScroll>

        <div className="grid border-y border-[#cfd9d4] lg:grid-cols-2">
          {items.map((item) => (
            <motion.article
              key={item.id}
              className="border-b border-[#cfd9d4] last:border-b-0 lg:odd:border-r lg:[&:nth-last-child(-n+2)]:border-b-0"
              whileHover={shouldReduceMotion ? undefined : { x: 4 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <Link href={item.href} className="group flex min-h-56 h-full flex-col px-1 py-8 sm:px-7 md:py-10 lg:px-9">
                <div className="flex items-start justify-between gap-6">
                  <h3 className="font-sans text-2xl font-light text-[#241f1b] md:text-3xl">
                    {item.title}
                  </h3>
                  <div className="shrink-0 text-end">
                    <p className="text-[0.64rem] font-medium uppercase tracking-normal text-[#31584f]">
                      {t('popularTreatments.priceLabel')}
                    </p>
                    <p className="mt-2 font-sans text-2xl font-light text-[#241f1b]">
                      {item.price}
                    </p>
                  </div>
                </div>
                <p className="mt-5 grow text-sm leading-7 text-stone-600">
                  {item.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-normal text-[#31584f]">
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
    <section className="bg-[#31584f] px-6 py-16 text-white md:px-12 lg:px-16 xl:px-24">
      <div className="mx-auto grid max-w-7xl divide-y divide-white/20 md:grid-cols-3 md:divide-x md:divide-y-0">
        {proofStats.map((stat, index) => (
          <RevealOnScroll key={stat.value} delay={index * 0.08}>
            <div className="px-8 py-10 text-center">
              <p className="font-sans text-5xl font-light leading-none text-white md:text-6xl">
                {stat.value}
              </p>
              <p className="mt-4 text-[0.68rem] uppercase tracking-normal text-white/70">
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
    <section className="bg-[#17201d] px-6 py-24 text-white md:px-12 md:py-32 lg:px-16 xl:px-24">
      <RevealOnScroll className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[55%_45%] lg:items-center">
        <div>
          <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-normal text-[#d8cbbb]">
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
              className="inline-flex h-12 items-center justify-center rounded-[4px] bg-white px-7 text-xs font-medium uppercase tracking-normal text-[#17201d] transition-colors hover:bg-[#dfe9e4]"
            >
              {tCommon('bookNow')}
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex h-12 items-center justify-center border border-white/60 px-7 text-xs font-medium uppercase tracking-normal text-white transition-colors hover:bg-white hover:text-[#17201d]"
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

      <section className="bg-[#f7f2eb] px-6 py-20 md:px-12 md:py-28 lg:px-16 xl:px-24">
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
