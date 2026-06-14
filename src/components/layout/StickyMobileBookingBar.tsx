'use client';

import { CalendarCheck, MessageCircle, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { siteConfig } from '@/data/site-config';

export function StickyMobileBookingBar() {
  const t = useTranslations('nav');
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s/g, '')}`;
  const whatsappHref = `https://wa.me/${siteConfig.contact.whatsappPhone
    .replace(/\s/g, '')
    .replace('+', '')}`;

  return (
    <nav
      aria-label={t('stickyBookingLabel')}
      className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-[1fr_auto_auto] overflow-hidden rounded-md border border-[#d9cec1] bg-white/95 shadow-[0_16px_44px_rgba(36,31,27,0.18)] backdrop-blur lg:hidden"
    >
      <Link
        href="/book"
        className="flex h-14 items-center justify-center gap-2 bg-[#241f1b] px-4 text-xs font-medium uppercase tracking-[0.14em] text-white"
      >
        <CalendarCheck className="size-4" aria-hidden="true" />
        <span>{t('book')}</span>
      </Link>
      <a
        href={phoneHref}
        className="grid h-14 w-14 place-items-center border-l border-[#d9cec1] text-[#241f1b]"
        aria-label={t('call')}
      >
        <Phone className="size-5" aria-hidden="true" />
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-14 w-14 place-items-center border-l border-[#d9cec1] text-[#241f1b]"
        aria-label={t('whatsapp')}
      >
        <MessageCircle className="size-5" aria-hidden="true" />
      </a>
    </nav>
  );
}
