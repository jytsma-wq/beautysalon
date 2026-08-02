'use client';

import { useState, useEffect, type ReactNode } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { FacebookBrandIcon, InstagramBrandIcon, TikTokBrandIcon } from '@/components/icons';
import { siteConfig } from '@/data/site-config';
import { localizedCountryNames, rtlLocales, type Locale } from '@/i18n';
import { motion } from 'framer-motion';

const MOBILE_MENU_TOGGLE_ID = 'silk-mobile-menu-toggle';

type MegaMenuItem = {
  title: string;
  href: string;
  description: string;
};

type MoreMenuItem = {
  title: string;
  href: string;
};

function MegaMenuPanel({
  eyebrow,
  title,
  overviewHref,
  overviewLabel,
  description,
  image,
  items,
}: {
  eyebrow: string;
  title: string;
  overviewHref: string;
  overviewLabel: string;
  description: string;
  image: string;
  items: MegaMenuItem[];
}) {
  return (
    <div className="absolute left-1/2 top-full z-50 w-[min(1120px,calc(100vw-3rem))] -translate-x-1/2 pt-4">
      <div className="overflow-hidden rounded-[6px] border border-[#dfe5e2] bg-[#f4f6f4] shadow-[0_24px_70px_rgba(30,50,44,0.14)]">
        <div className="grid lg:grid-cols-[320px_1fr]">
          <div className="border-r border-[#e8e4df] bg-white">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image src={image} alt="" fill className="object-cover" sizes="320px" />
            </div>
            <div className="p-8">
              <p className="mb-3 text-[0.68rem] uppercase tracking-normal text-[#31584f]">
                {eyebrow}
              </p>
              <h3 className="font-sans text-4xl font-light leading-[1.02] text-[#241f1b]">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">{description}</p>
              <Link
                href={overviewHref}
                className="mt-8 inline-flex h-11 items-center rounded-[4px] bg-[#31584f] px-6 text-[0.68rem] font-medium uppercase tracking-normal text-white transition-colors hover:bg-[#24443e]"
              >
                {overviewLabel}
              </Link>
            </div>
          </div>

          <div className="p-8 md:p-10">
            <div className="grid gap-x-8 gap-y-6 md:grid-cols-2 xl:grid-cols-3">
              {items.map((item) => (
                <Link
                  key={`${item.title}-${item.href}`}
                  href={item.href}
                  className="group rounded-[6px] border border-transparent bg-white/70 p-5 transition-colors hover:border-[#e8e4df] hover:bg-white"
                >
                  <h4 className="text-sm font-medium uppercase tracking-normal text-[#241f1b]">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-stone-600">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreMenuPanel({ label, items }: { label: string; items: MoreMenuItem[] }) {
  return (
    <div className="absolute end-0 top-full z-50 w-72 pt-4">
      <nav
        id="silk-desktop-more-menu"
        aria-label={label}
        className="overflow-hidden rounded-[8px] border border-[#e8e4df] bg-white px-5 py-3 shadow-[0_20px_50px_rgba(36,31,27,0.12)]"
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex min-h-11 items-center border-b border-[#dfe5e2] text-sm text-stone-700 transition-colors last:border-b-0 hover:text-[#31584f]"
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}

function BrandLogo({
  className,
  imageClassName,
  priority = false,
}: {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={siteConfig.logo.image}
      alt={siteConfig.name}
      width={180}
      height={180}
      priority={priority}
      className={imageClassName || className}
      sizes="(max-width: 1023px) 64px, 72px"
    />
  );
}

function closeMobileMenu() {
  const menuToggle = document.getElementById(MOBILE_MENU_TOGGLE_ID) as HTMLInputElement | null;
  if (menuToggle) {
    menuToggle.checked = false;
  }
}

function SocialIconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-10 w-9 place-items-center text-stone-600 transition-colors hover:text-[#31584f]"
    >
      {children}
    </a>
  );
}

export function GaldermaHeaderClient({
  treatmentMegaMenuItems,
  skinConditionMegaMenuItems,
}: {
  treatmentMegaMenuItems: MegaMenuItem[];
  skinConditionMegaMenuItems: MegaMenuItem[];
}) {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeMegaMenu, setActiveMegaMenu] = useState<'treatments' | 'conditions' | 'more' | null>(null);
  const locale = useLocale() as Locale;
  const t = useTranslations('nav');
  const tCommon = useTranslations('common');

  const moreMenuItems: MoreMenuItem[] = [
    { title: t('about', { defaultValue: 'About' }), href: '/about' },
    { title: t('venueRental', { defaultValue: 'Venue Rental' }), href: '/venue-rental-batumi' },
    { title: t('chairRental', { defaultValue: 'Chair Rental' }), href: '/chair-rental-batumi' },
    { title: t('downloadApp', { defaultValue: 'Download App' }), href: '/download' },
    { title: t('contact', { defaultValue: 'Contact Us' }), href: '/contact-us' },
    { title: t('faq', { defaultValue: 'FAQ' }), href: '/faq' },
    { title: t('blog', { defaultValue: 'Journal' }), href: '/blog' },
  ];
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = rtlLocales.includes(locale) ? 'rtl' : 'ltr';
  }, [locale]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMobileMenu();
      }
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <>
      <input
        id={MOBILE_MENU_TOGGLE_ID}
        type="checkbox"
        className="peer/mobile-menu sr-only"
        aria-label={t('openMenu')}
        aria-controls="silk-mobile-menu-panel"
      />

      <motion.div
        dir="ltr"
        className={`fixed top-0 left-0 right-0 z-50 hidden border-b border-[#dfe5e2] bg-[#f4f6f4] transition-all duration-300 lg:block ${
          isHidden ? '-translate-y-full' : 'translate-y-0'
        }`}
        initial={{ y: 0 }}
        animate={{ y: isHidden ? -100 : 0 }}
      >
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-xs lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5" aria-label={tCommon('social')}>
              <SocialIconLink href={siteConfig.social.facebook} label="Facebook">
                <FacebookBrandIcon className="h-5 w-5" />
              </SocialIconLink>
              <SocialIconLink href={siteConfig.social.instagram} label="Instagram">
                <InstagramBrandIcon className="h-5 w-5" />
              </SocialIconLink>
              <SocialIconLink href={siteConfig.social.tiktok} label="TikTok">
                <TikTokBrandIcon className="h-5 w-5" />
              </SocialIconLink>
            </div>
            <nav className="hidden items-center gap-6 lg:flex">
              <Link
                href="/about"
                className="uppercase tracking-normal text-stone-600 transition-colors hover:text-[#31584f]"
              >
                {t('about', { defaultValue: 'About' })}
              </Link>
              <Link
                href="/venue-rental-batumi"
                className="uppercase tracking-normal text-stone-600 transition-colors hover:text-[#31584f]"
              >
                {t('venueRental', { defaultValue: 'Venue Rental' })}
              </Link>
              <Link
                href="/contact-us"
                className="uppercase tracking-normal text-stone-600 transition-colors hover:text-[#31584f]"
              >
                {t('contact', { defaultValue: 'Contact Us' })}
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </motion.div>

      <motion.header
        dir="ltr"
        className={`fixed top-0 left-0 right-0 z-40 border-b border-[#dfe5e2] bg-white/95 backdrop-blur-md transition-all duration-300 lg:top-10 ${
          isHidden ? '-translate-y-full' : 'translate-y-0'
        }`}
        initial={{ y: 0 }}
        animate={{ y: isHidden ? -120 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="relative hidden min-h-20 grid-cols-[minmax(220px,1fr)_auto_auto] items-center gap-6 xl:grid">
            <Link
              href="/"
              className="flex min-w-0 items-center gap-3 transition-opacity hover:opacity-80"
              aria-label={siteConfig.name}
            >
              <BrandLogo
                priority
                imageClassName="h-14 w-14 shrink-0 object-contain contrast-125 saturate-110"
              />
              <span className="truncate font-serif text-[1.7rem] leading-none text-[#1c1c1c]">
                {siteConfig.name}
              </span>
            </Link>

            <nav
              aria-label={t('mainNavigation', { defaultValue: 'Main navigation' })}
              className="relative flex min-w-0 items-center justify-center gap-4 2xl:gap-6"
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <div onMouseEnter={() => setActiveMegaMenu('treatments')}>
                <button
                  type="button"
                  className="flex items-center gap-1 whitespace-nowrap text-xs uppercase tracking-normal text-stone-700 transition-colors hover:text-[#31584f] outline-none"
                  aria-expanded={activeMegaMenu === 'treatments'}
                >
                  {t('treatments', { defaultValue: 'Treatments' })}
                  <ChevronDown className="h-3 w-3" />
                </button>
              </div>

              <div onMouseEnter={() => setActiveMegaMenu('conditions')}>
                <button
                  type="button"
                  className="flex items-center gap-1 whitespace-nowrap text-xs uppercase tracking-normal text-stone-700 transition-colors hover:text-[#31584f] outline-none"
                  aria-expanded={activeMegaMenu === 'conditions'}
                >
                  {t('conditions', { defaultValue: 'Skin Conditions' })}
                  <ChevronDown className="h-3 w-3" />
                </button>
              </div>

              <Link href="/pricelist" className="whitespace-nowrap text-xs uppercase tracking-normal text-stone-700 transition-colors hover:text-[#31584f]">
                {t('pricelist', { defaultValue: 'Pricelist' })}
              </Link>
              <Link href="/offers" className="whitespace-nowrap text-xs uppercase tracking-normal text-stone-700 transition-colors hover:text-[#31584f]">
                {t('offers', { defaultValue: 'Offers' })}
              </Link>
              <Link href="/international-clients" className="whitespace-nowrap text-xs uppercase tracking-normal text-stone-700 transition-colors hover:text-[#31584f]">
                {t('international', { defaultValue: 'International Clients' })}
              </Link>
              <div onMouseEnter={() => setActiveMegaMenu('more')}>
                <button
                  type="button"
                  className="flex items-center gap-1 whitespace-nowrap text-xs uppercase tracking-normal text-stone-700 transition-colors hover:text-[#31584f] outline-none"
                  aria-expanded={activeMegaMenu === 'more'}
                  aria-controls="silk-desktop-more-menu"
                  onFocus={() => setActiveMegaMenu('more')}
                  onClick={() => setActiveMegaMenu('more')}
                >
                  {t('more', { defaultValue: 'More' })}
                  <ChevronDown className="h-3 w-3" />
                </button>
              </div>

              {activeMegaMenu === 'treatments' ? (
                <MegaMenuPanel
                  eyebrow={t('treatments')}
                  title={t('treatmentPortfolio')}
                  overviewHref="/treatments"
                  overviewLabel={t('allTreatments')}
                  description={t('treatmentPortfolioDescription')}
                  image="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1000&q=80"
                  items={treatmentMegaMenuItems}
                />
              ) : null}

              {activeMegaMenu === 'conditions' ? (
                <MegaMenuPanel
                  eyebrow={t('skinConcerns')}
                  title={t('skinConditions')}
                  overviewHref="/conditions"
                  overviewLabel={t('allConditions')}
                  description={t('conditionsDescription')}
                  image="https://images.unsplash.com/photo-1570172619644-dfd40ed531fb?w=1000&q=80"
                  items={skinConditionMegaMenuItems}
                />
              ) : null}

              {activeMegaMenu === 'more' ? (
                <MoreMenuPanel
                  label={t('moreLinks', { defaultValue: 'More links' })}
                  items={moreMenuItems}
                />
              ) : null}
            </nav>

            <Link
              href="/book"
              className="inline-flex h-11 shrink-0 items-center justify-center rounded-[4px] bg-[#31584f] px-6 text-center text-xs font-medium uppercase tracking-normal text-white transition-colors hover:bg-[#24443e]"
            >
              {t('book', { defaultValue: 'Book' })}
            </Link>
          </div>

          <div className="relative flex min-h-20 items-center justify-between xl:hidden">
            <Link
              href="/"
              className="flex min-w-0 items-center gap-2 transition-opacity hover:opacity-80"
              aria-label={siteConfig.name}
            >
              <BrandLogo
                priority
                imageClassName="h-12 w-12 shrink-0 object-contain contrast-125 saturate-110 sm:h-14 sm:w-14"
              />
              <span className="hidden whitespace-nowrap font-serif text-[0.95rem] leading-none text-[#1c1c1c] min-[310px]:block sm:text-xl">
                {siteConfig.name}
              </span>
            </Link>

            <div className="flex shrink-0 items-center gap-0.5">
              <div className="hidden sm:block lg:hidden">
                <ThemeToggle />
              </div>
              <div className="lg:hidden">
                <LanguageSwitcher />
              </div>
              <label
                htmlFor={MOBILE_MENU_TOGGLE_ID}
                className="grid h-11 w-11 cursor-pointer place-items-center text-[#1c1c1c]"
                aria-label={t('openMenu')}
              >
                <Menu className="h-6 w-6" strokeWidth={1.25} />
              </label>
            </div>
          </div>
        </div>
      </motion.header>

      <div
        id="silk-mobile-menu-panel"
        className="fixed inset-0 z-[70] hidden overflow-y-auto bg-[#f4f6f4] peer-checked/mobile-menu:block"
      >
        <div className="relative flex min-h-dvh items-center justify-center px-6 py-20">
          <label
            htmlFor={MOBILE_MENU_TOGGLE_ID}
            className="absolute top-8 right-8 grid h-11 w-11 cursor-pointer place-items-center text-4xl font-light text-stone-900 transition-colors hover:text-stone-600"
            aria-label={t('closeMenu')}
          >
            <X className="h-8 w-8" strokeWidth={1} />
          </label>

          <div className="w-full max-w-5xl">
            <div className="mb-10 flex justify-center">
              <Link href="/" onClick={closeMobileMenu} className="block transition-opacity hover:opacity-80" aria-label={siteConfig.name}>
                <BrandLogo imageClassName="h-24 w-24 object-contain" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-10">
              <nav className="space-y-5">
                <span className="mb-6 block text-xs uppercase tracking-normal text-stone-500">{t('menu')}</span>
                <Link href="/treatments" onClick={closeMobileMenu} className="flex min-h-11 items-center font-serif text-3xl font-light text-stone-900 transition-colors hover:text-[#31584f]">
                  {t('treatments', { defaultValue: 'Treatments' })}
                </Link>
                <Link href="/conditions" onClick={closeMobileMenu} className="flex min-h-11 items-center font-serif text-3xl font-light text-stone-900 transition-colors hover:text-[#31584f]">
                  {t('conditions', { defaultValue: 'Skin Conditions' })}
                </Link>
                <Link href="/pricelist" onClick={closeMobileMenu} className="flex min-h-11 items-center font-serif text-3xl font-light text-stone-900 transition-colors hover:text-[#31584f]">
                  {t('pricelist', { defaultValue: 'Pricelist' })}
                </Link>
                <Link href="/offers" onClick={closeMobileMenu} className="flex min-h-11 items-center font-serif text-3xl font-light text-stone-900 transition-colors hover:text-[#31584f]">
                  {t('offers', { defaultValue: 'Offers' })}
                </Link>
                <Link href="/international-clients" onClick={closeMobileMenu} className="flex min-h-11 items-center font-serif text-3xl font-light text-stone-900 transition-colors hover:text-[#31584f]">
                  {t('international', { defaultValue: 'International Clients' })}
                </Link>
              </nav>

              <div>
                <span className="mb-6 block text-xs uppercase tracking-normal text-stone-500">{t('more')}</span>
                <nav className="mb-8 space-y-4">
                  <Link href="/about" onClick={closeMobileMenu} className="flex min-h-11 items-center text-lg text-stone-700 transition-colors hover:text-[#8d6f58]">
                    {t('about', { defaultValue: 'About' })}
                  </Link>
                  <Link href="/venue-rental-batumi" onClick={closeMobileMenu} className="flex min-h-11 items-center text-lg text-stone-700 transition-colors hover:text-[#8d6f58]">
                    {t('venueRental', { defaultValue: 'Venue Rental' })}
                  </Link>
                  <Link href="/chair-rental-batumi" onClick={closeMobileMenu} className="flex min-h-11 items-center text-lg text-stone-700 transition-colors hover:text-[#8d6f58]">
                    {t('chairRental', { defaultValue: 'Chair Rental' })}
                  </Link>
                  <Link href="/download" onClick={closeMobileMenu} className="flex min-h-11 items-center text-lg text-stone-700 transition-colors hover:text-[#8d6f58]">
                    {t('downloadApp', { defaultValue: 'Download App' })}
                  </Link>
                  <Link href="/contact-us" onClick={closeMobileMenu} className="flex min-h-11 items-center text-lg text-stone-700 transition-colors hover:text-[#8d6f58]">
                    {t('contact', { defaultValue: 'Contact Us' })}
                  </Link>
                  <Link href="/faq" onClick={closeMobileMenu} className="flex min-h-11 items-center text-lg text-stone-700 transition-colors hover:text-[#8d6f58]">
                    {t('faq', { defaultValue: 'FAQ' })}
                  </Link>
                  <Link href="/blog" onClick={closeMobileMenu} className="flex min-h-11 items-center text-lg text-stone-700 transition-colors hover:text-[#8d6f58]">
                    {t('blog', { defaultValue: 'Journal' })}
                  </Link>
                </nav>

                <div className="mt-10">
                  <span className="mb-4 block text-xs uppercase tracking-[0.4em] text-stone-400">
                    {t('visitUs', { defaultValue: 'Visit Us' })}
                  </span>
                  <p className="text-sm leading-relaxed text-stone-600">
                    {siteConfig.contact.address}
                    <br />
                    {siteConfig.contact.city}, {localizedCountryNames[locale]} {siteConfig.contact.postcode}
                  </p>
                </div>

                <Link
                  href="/book"
                  onClick={closeMobileMenu}
                  className="mt-10 block w-full rounded-[4px] bg-[#31584f] py-5 text-center text-sm uppercase tracking-normal text-white transition-colors hover:bg-[#24443e]"
                >
                  {t('bookConsultation', { defaultValue: 'Book Consultation' })}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
