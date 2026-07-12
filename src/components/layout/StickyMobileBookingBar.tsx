'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { CalendarCheck, MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { siteConfig } from '@/data/site-config';
import { useConsent } from '@/components/providers/ConsentProvider';
import { cn } from '@/lib/utils';

const MOBILE_MEDIA_QUERY = '(max-width: 767px)';
const BOOKING_HREF = '/book';

type StickyBarState = {
  isMobile: boolean;
  hasPassedHero: boolean;
  isFooterVisible: boolean;
  isProtectedSectionVisible: boolean;
};

export function getWhatsAppHref(phoneNumber: string = siteConfig.contact.whatsappPhone) {
  const normalizedPhoneNumber = phoneNumber.replace(/\D/g, '');

  return normalizedPhoneNumber ? `https://wa.me/${normalizedPhoneNumber}` : undefined;
}

export function shouldHideStickyMobileBarForPath(pathname: string | null | undefined) {
  return /^\/(?:en|ka|ru|tr|ar|he)?\/?(?:book|contact|contact-us|venue-rental-batumi|chair-rental-batumi)(?:\/|$)/.test(
    pathname || ''
  );
}

function getHeroTriggerPosition() {
  const main = document.getElementById('main-content') || document.querySelector('main');
  const firstSection = main?.querySelector('section, article');

  if (!firstSection) {
    return 240;
  }

  return window.scrollY + firstSection.getBoundingClientRect().bottom - 24;
}

function isFooterInView() {
  const footer = document.querySelector('footer');

  if (!footer) {
    return false;
  }

  return footer.getBoundingClientRect().top < window.innerHeight - 16;
}

function isProtectedStickyCtaSectionInView() {
  const protectedSection = document.querySelector('[data-sticky-mobile-cta-safe-zone="true"]');

  if (!protectedSection) {
    return false;
  }

  const rect = protectedSection.getBoundingClientRect();

  return rect.top < window.innerHeight - 16 && rect.bottom > 16;
}

export function StickyMobileBookingBar() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const { showBanner } = useConsent();
  const whatsappHref = getWhatsAppHref();
  const [barState, setBarState] = useState<StickyBarState>({
    isMobile: false,
    hasPassedHero: false,
    isFooterVisible: false,
    isProtectedSectionVisible: false,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY);
    let animationFrame = 0;

    const updateBarState = () => {
      const isMobile = mediaQuery.matches;

      setBarState({
        isMobile,
        hasPassedHero: isMobile ? window.scrollY >= getHeroTriggerPosition() : false,
        isFooterVisible: isMobile ? isFooterInView() : false,
        isProtectedSectionVisible: isMobile ? isProtectedStickyCtaSectionInView() : false,
      });
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateBarState);
    };

    updateBarState();
    mediaQuery.addEventListener('change', requestUpdate);
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      mediaQuery.removeEventListener('change', requestUpdate);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  if (
    !barState.isMobile ||
    !barState.hasPassedHero ||
    barState.isFooterVisible ||
    barState.isProtectedSectionVisible ||
    showBanner ||
    shouldHideStickyMobileBarForPath(pathname)
  ) {
    return null;
  }

  return (
    <nav
      aria-label={t('stickyBookingLabel')}
      className={cn(
        'fixed inset-x-3 z-50 grid overflow-hidden rounded-md border border-[#d9cec1] bg-white/95 shadow-[0_16px_44px_rgba(36,31,27,0.18)] backdrop-blur md:hidden',
        whatsappHref ? 'grid-cols-2' : 'grid-cols-1'
      )}
      style={{ bottom: 'calc(env(safe-area-inset-bottom) + 0.75rem)' }}
    >
      <Link
        href={BOOKING_HREF}
        aria-label={t('stickyBookNowLabel')}
        className="flex min-h-14 items-center justify-center gap-2 bg-[#241f1b] px-4 text-xs font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#3a3028] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#d8cbbb]"
      >
        <CalendarCheck className="size-4" aria-hidden="true" />
        <span>{t('bookNow')}</span>
      </Link>
      {whatsappHref ? (
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-14 items-center justify-center gap-2 border-l border-[#d9cec1] px-4 text-xs font-medium uppercase tracking-[0.14em] text-[#241f1b] transition-colors hover:bg-[#f7f2eb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#8d6f58] rtl:border-l-0 rtl:border-r"
          aria-label={t('whatsapp')}
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          <span>{t('whatsappShort')}</span>
        </a>
      ) : null}
    </nav>
  );
}
