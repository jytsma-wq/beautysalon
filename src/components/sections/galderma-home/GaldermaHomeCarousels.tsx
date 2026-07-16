'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { Link } from '@/i18n/routing';
import type { Locale } from '@/i18n';
import { beautySalonBatumiCopy } from '@/data/beauty-salon-batumi-copy';
import { localSeoLandingPages } from '@/data/local-seo-pages';
import { BeforeAfterSlider } from '@/components/gallery/BeforeAfterSlider';
import { useHydratedReducedMotion } from '@/hooks/use-hydrated-reduced-motion';
import {
  homeHeroSlides,
  resultCases,
  skinConcernHighlights,
  skinTrendArticles,
} from '@/data/homepage';
import { getTestimonialViewModel, testimonials } from '@/data/testimonials';

function CarouselButton({
  direction,
  onClick,
  disabled,
}: {
  direction: 'previous' | 'next';
  onClick: () => void;
  disabled?: boolean;
}) {
  const t = useTranslations('homeEditorial');
  const Icon = direction === 'previous' ? ArrowLeft : ArrowRight;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'previous' ? t('carousel.previousSlide') : t('carousel.nextSlide')}
      className="grid size-11 place-items-center border border-stone-300 bg-white text-stone-950 transition-colors hover:border-stone-950 disabled:pointer-events-none disabled:opacity-30"
    >
      <Icon className="size-4" strokeWidth={1.5} />
    </button>
  );
}

function useCarouselControls(options?: { loop?: boolean; watchDrag?: boolean }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: options?.loop ?? false,
    watchDrag: options?.watchDrag ?? true,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateState = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const frame = window.requestAnimationFrame(updateState);
    emblaApi.on('select', updateState);
    emblaApi.on('reInit', updateState);

    return () => {
      window.cancelAnimationFrame(frame);
      emblaApi.off('select', updateState);
      emblaApi.off('reInit', updateState);
    };
  }, [emblaApi, updateState]);

  return {
    emblaRef,
    emblaApi,
    scrollPrev: () => emblaApi?.scrollPrev(),
    scrollNext: () => emblaApi?.scrollNext(),
    canScrollPrev,
    canScrollNext,
    selectedIndex,
  };
}

export function ClinicalHeroCarousel() {
  const locale = useLocale() as Locale;
  const shouldReduceMotion = useHydratedReducedMotion();
  const hubCopy = beautySalonBatumiCopy[locale];
  const skinCopy = localSeoLandingPages.find((page) => page.slug === 'skin-treatment-batumi')!.content[locale];
  const fillerCopy = localSeoLandingPages.find((page) => page.slug === 'dermal-fillers-batumi')!.content[locale];
  const localizedSlides = [
    {
      eyebrow: hubCopy.eyebrow,
      title: hubCopy.h1,
      description: hubCopy.intro,
      href: '/book',
      cta: hubCopy.book,
    },
    {
      eyebrow: skinCopy.eyebrow,
      title: skinCopy.h1,
      description: skinCopy.description,
      href: '/skin-treatment-batumi',
      cta: skinCopy.categoryCta,
    },
    {
      eyebrow: fillerCopy.eyebrow,
      title: fillerCopy.h1,
      description: fillerCopy.description,
      href: '/dermal-fillers-batumi',
      cta: fillerCopy.categoryCta,
    },
  ];
  const slides = homeHeroSlides.map((slide, index) => ({
    ...slide,
    ...localizedSlides[index],
  }));
  const {
    emblaRef,
    scrollPrev,
    scrollNext,
    canScrollPrev,
    canScrollNext,
    selectedIndex,
  } = useCarouselControls();

  return (
    <section className="relative bg-[#f7f2eb]">
      <div className="overflow-hidden [contain:layout_paint]" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <article key={slide.title} className="min-w-0 flex-[0_0_100%]">
              <div className="grid min-h-[calc(100svh-128px)] grid-cols-1 lg:grid-cols-[50%_50%]">
                <div className="order-2 flex items-center px-6 py-10 md:px-12 md:py-14 lg:order-1 lg:px-14 xl:px-20">
                  <div className="max-w-2xl">
                    <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#8d6f58]">
                      {slide.eyebrow}
                    </p>
                    {index === 0 ? (
                      <h1 className="localized-carousel-heading font-sans font-light text-[#241f1b]">
                        {slide.title}
                      </h1>
                    ) : (
                      <h2 className="localized-carousel-heading font-sans font-light text-[#241f1b]">
                        {slide.title}
                      </h2>
                    )}
                    <p className="mt-7 max-w-md text-base leading-8 text-stone-700 md:text-lg">
                      {slide.description}
                    </p>
                    <Link
                      href={slide.href}
                      className="mt-10 inline-flex h-12 items-center border border-[#241f1b] px-7 text-xs font-medium uppercase tracking-[0.18em] text-[#241f1b] transition-colors hover:bg-[#241f1b] hover:text-white"
                    >
                      {slide.cta}
                    </Link>
                  </div>
                </div>
                <div className="relative order-1 min-h-[34svh] overflow-hidden sm:min-h-[42svh] lg:order-2 lg:min-h-0">
                  <motion.div
                    className="absolute inset-0"
                    animate={
                      shouldReduceMotion
                        ? { scale: 1, x: '0%' }
                        : { scale: [1.02, 1.07, 1.03], x: ['0%', '-1.5%', '0.75%'] }
                    }
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : {
                            duration: 18,
                            repeat: Infinity,
                            repeatType: 'mirror',
                            ease: 'easeInOut',
                          }
                    }
                    style={{ willChange: shouldReduceMotion ? 'auto' : 'transform' }}
                  >
                    <Image
                      src={slide.image}
                      alt={`Silk Beauty Salon in Batumi, Georgia - ${slide.title}`}
                      fill
                      preload={index === 0}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      fetchPriority={index === 0 ? 'high' : 'low'}
                      className="object-cover"
                      sizes="(max-width: 1023px) 100vw, 50vw"
                    />
                  </motion.div>
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 right-6 flex items-center gap-3 md:bottom-10 md:right-10">
        <CarouselButton
          direction="previous"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
        />
        <CarouselButton
          direction="next"
          onClick={scrollNext}
          disabled={!canScrollNext}
        />
      </div>
      <div className="absolute bottom-8 left-6 flex gap-2 md:left-12 lg:left-16 xl:left-24">
        {slides.map((slide, index) => (
          <span
            key={slide.title}
            className={`h-px transition-all ${
              selectedIndex === index ? 'w-12 bg-[#241f1b]' : 'w-5 bg-stone-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export function ConcernCarousel() {
  const t = useTranslations('homeEditorial');
  const shouldReduceMotion = useHydratedReducedMotion();
  const concerns = skinConcernHighlights.map((item, index) => ({
    ...item,
    name: t(`concernItems.item${index + 1}.name`),
    description: t(`concernItems.item${index + 1}.description`),
  }));
  const { emblaRef, emblaApi, scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useCarouselControls({ loop: true });

  useEffect(() => {
    if (!emblaApi) return;
    if (shouldReduceMotion) return;

    const autoplay = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 4500);

    return () => window.clearInterval(autoplay);
  }, [emblaApi, shouldReduceMotion]);

  return (
    <div>
      <div className="mb-8 flex justify-end gap-3">
        <CarouselButton
          direction="previous"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
        />
        <CarouselButton
          direction="next"
          onClick={scrollNext}
          disabled={!canScrollNext}
        />
      </div>
      <div className="overflow-hidden [contain:layout_paint]" ref={emblaRef}>
        <div className="-ml-5 flex">
          {concerns.map((item) => (
            <article
              key={item.name}
              className="min-w-0 flex-[0_0_86%] pl-5 sm:flex-[0_0_48%] lg:flex-[0_0_31%]"
            >
              <Link href={item.href} className="group block">
                <div className="relative aspect-4/5 overflow-hidden bg-stone-100">
                  <Image
                    src={item.image}
                    alt={`${item.name} treatment consultation at Silk Beauty Salon in Batumi, Georgia`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 86vw, (max-width: 1024px) 48vw, 31vw"
                  />
                </div>
                <div className="border-b border-stone-200 py-6">
                  <h3 className="font-sans text-3xl font-light text-[#241f1b]">
                    {item.name}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-stone-600">
                    {item.description}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ResultsCarousel() {
  const t = useTranslations('homeEditorial');
  const cases = resultCases.map((item, index) => ({
    ...item,
    treatment: t(`resultItems.item${index + 1}.treatment`),
    detail: t(`resultItems.item${index + 1}.detail`),
  }));
  const { emblaRef, scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useCarouselControls({ watchDrag: false });

  return (
    <div>
      <div className="mb-8 flex justify-end gap-3">
        <CarouselButton
          direction="previous"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
        />
        <CarouselButton
          direction="next"
          onClick={scrollNext}
          disabled={!canScrollNext}
        />
      </div>
      <div className="overflow-hidden [contain:layout_paint]" ref={emblaRef}>
        <div className="-ml-6 flex">
          {cases.map((item) => (
            <article
              key={item.treatment}
              className="min-w-0 flex-[0_0_92%] pl-6 md:flex-[0_0_58%] lg:flex-[0_0_42%]"
            >
              <div className="relative aspect-3/4 overflow-hidden bg-white">
                <BeforeAfterSlider
                  beforeSrc={item.beforeImage}
                  afterSrc={item.afterImage}
                  beforeAlt={`Before ${item.treatment} treatment at Silk Beauty Salon in Batumi`}
                  afterAlt={`After ${item.treatment} treatment at Silk Beauty Salon in Batumi`}
                  initialPosition={52}
                />
              </div>
              <div className="pt-5">
                <h3 className="font-sans text-2xl font-light text-[#241f1b]">
                  {item.treatment}
                </h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <p className="mt-8 text-center text-[0.68rem] uppercase tracking-[0.16em] text-stone-500">
        {t('results.disclaimer')}
      </p>
    </div>
  );
}

export function ReviewsCarousel() {
  const t = useTranslations('homeEditorial');
  const locale = useLocale() as Locale;
  const shouldReduceMotion = useHydratedReducedMotion();
  const reviews = testimonials.slice(0, 6);
  const {
    emblaRef,
    emblaApi,
    scrollPrev,
    scrollNext,
    canScrollPrev,
    canScrollNext,
    selectedIndex,
  } = useCarouselControls({ loop: true });

  useEffect(() => {
    if (!emblaApi) return;
    if (shouldReduceMotion) return;

    const autoplay = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 6500);

    return () => window.clearInterval(autoplay);
  }, [emblaApi, shouldReduceMotion]);

  return (
    <div>
      <div className="mb-8 flex justify-end gap-3">
        <CarouselButton
          direction="previous"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
        />
        <CarouselButton
          direction="next"
          onClick={scrollNext}
          disabled={!canScrollNext}
        />
      </div>
      <div className="overflow-hidden [contain:layout_paint]" ref={emblaRef}>
        <div className="-ml-5 flex">
          {reviews.map((review) => {
            const reviewModel = getTestimonialViewModel(review, locale);
            const rating = reviewModel.rating;

            return (
              <article
                key={`${review.author}-${review.role}`}
                className="min-w-0 flex-[0_0_88%] pl-5 md:flex-[0_0_48%] lg:flex-[0_0_33%]"
              >
                <figure className="flex min-h-80 flex-col justify-between border border-stone-200 bg-white p-7 md:p-9">
                  <div>
                    <div
                      className="mb-7 flex gap-1 text-[#8d6f58]"
                      role="img"
                      aria-label={t('reviews.ratingLabel', { rating })}
                    >
                      {Array.from({ length: rating }).map((_, index) => (
                        <Star
                          key={`${review.author}-star-${index}`}
                          className="size-4 fill-current"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <blockquote className="font-sans text-2xl font-light leading-snug text-[#241f1b]">
                      &ldquo;{reviewModel.quote}&rdquo;
                    </blockquote>
                  </div>
                  <figcaption className="mt-10 border-t border-stone-200 pt-5">
                    <div className="flex min-w-0 items-center gap-4">
                      <div
                        className="relative grid size-12 shrink-0 place-items-center overflow-hidden rounded-full border border-stone-200 bg-[#f7f2eb] text-[0.68rem] font-medium uppercase tracking-[0.12em] text-[#8d6f58]"
                        aria-hidden="true"
                      >
                        {reviewModel.avatarUrl ? (
                          <Image
                            src={reviewModel.avatarUrl}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        ) : (
                          <span>{reviewModel.initials}</span>
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium uppercase tracking-[0.18em] text-[#241f1b]">
                          {reviewModel.displayName}
                        </p>
                        {reviewModel.detailLabel ? (
                          <p className="mt-2 text-sm text-stone-500">{reviewModel.detailLabel}</p>
                        ) : null}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </article>
            );
          })}
        </div>
      </div>
      <div className="mt-8 flex justify-center gap-2">
        {reviews.map((review, index) => (
          <button
            key={`${review.author}-dot`}
            type="button"
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={t('reviews.goToReview', { number: index + 1 })}
            className="grid h-8 w-14 place-items-center"
          >
            <span
              className={`h-px transition-all ${
                selectedIndex === index ? 'w-12 bg-[#241f1b]' : 'w-5 bg-stone-400'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export function TrendsCarousel() {
  const t = useTranslations('homeEditorial');
  const articles = skinTrendArticles.map((article, index) => ({
    ...article,
    category: t(`trendItems.item${index + 1}.category`),
    title: t(`trendItems.item${index + 1}.title`),
  }));
  const { emblaRef, scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useCarouselControls();

  return (
    <div>
      <div className="mb-8 flex justify-end gap-3">
        <CarouselButton
          direction="previous"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
        />
        <CarouselButton
          direction="next"
          onClick={scrollNext}
          disabled={!canScrollNext}
        />
      </div>
      <div className="overflow-hidden [contain:layout_paint]" ref={emblaRef}>
        <div className="-ml-5 flex">
          {articles.map((article) => (
            <article
              key={article.title}
              className="min-w-0 flex-[0_0_88%] pl-5 md:flex-[0_0_48%] lg:flex-[0_0_32%]"
            >
              <Link href={article.href} className="group block">
                <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                  <Image
                    src={article.image}
                    alt={`${article.title} - Silk Beauty Salon Batumi skin care guide`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 88vw, 32vw"
                  />
                </div>
                <p className="mt-5 text-[0.68rem] uppercase tracking-[0.22em] text-[#8d6f58]">
                  {article.category}
                </p>
                <h3 className="mt-3 font-sans text-3xl font-light leading-tight text-[#241f1b]">
                  {article.title}
                </h3>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
