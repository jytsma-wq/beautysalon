'use client';

import { Clock, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { RevealOnScroll } from '@/components/effects/RevealOnScroll';
import { siteConfig } from '@/data/site-config';
import { getBusinessAddress, getGoogleMapsDirectionsUrl, getGoogleMapsEmbedUrl } from '@/lib/location-links';

function getPhoneHref(phoneNumber: string) {
  return `tel:${phoneNumber.replace(/\s/g, '')}`;
}

function getWhatsAppHref(phoneNumber: string) {
  const normalizedPhoneNumber = phoneNumber.replace(/\D/g, '');

  return normalizedPhoneNumber ? `https://wa.me/${normalizedPhoneNumber}` : undefined;
}

export function VisitUsSection() {
  const t = useTranslations('homeEditorial.visitUs');
  const address = getBusinessAddress();
  const directionsUrl = getGoogleMapsDirectionsUrl(address.fullAddress);
  const mapUrl = getGoogleMapsEmbedUrl(address.fullAddress);
  const whatsappHref = getWhatsAppHref(siteConfig.contact.whatsappPhone);

  return (
    <section
      id="visit-us"
      aria-labelledby="visit-us-heading"
      data-sticky-mobile-cta-safe-zone="true"
      className="bg-[#f7f2eb] px-6 py-24 md:px-12 md:py-32 lg:px-16 xl:px-24"
    >
      <RevealOnScroll className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[42%_58%] lg:items-stretch">
        <div className="flex flex-col justify-between">
          <div>
            <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#8d6f58]">
              {t('eyebrow')}
            </p>
            <h2
              id="visit-us-heading"
              className="localized-section-heading font-sans font-light text-[#241f1b]"
            >
              {t('title')}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-stone-600 md:text-lg">
              {t('description')}
            </p>
          </div>

          <div className="mt-10 space-y-7 border-t border-stone-200 pt-8">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 size-5 shrink-0 text-[#8d6f58]" aria-hidden="true" />
              <div>
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-stone-500">
                  {t('addressLabel')}
                </p>
                <address className="mt-2 not-italic leading-7 text-[#241f1b]">
                  <span className="block font-medium">{siteConfig.name}</span>
                  <span className="block">{address.streetAddress}</span>
                  <span className="block">
                    {address.locality}, {siteConfig.contact.postcode}, {address.country}
                  </span>
                </address>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="mt-1 size-5 shrink-0 text-[#8d6f58]" aria-hidden="true" />
              <div className="w-full">
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-stone-500">
                  {t('hoursLabel')}
                </p>
                <dl className="mt-2 grid gap-2 text-sm leading-6 text-[#241f1b]">
                  <div className="flex justify-between gap-6">
                    <dt className="text-stone-600">{t('weekdays')}</dt>
                    <dd>{siteConfig.businessHours.monday}</dd>
                  </div>
                  <div className="flex justify-between gap-6">
                    <dt className="text-stone-600">{t('saturday')}</dt>
                    <dd>{siteConfig.businessHours.saturday}</dd>
                  </div>
                  <div className="flex justify-between gap-6">
                    <dt className="text-stone-600">{t('sunday')}</dt>
                    <dd>{siteConfig.businessHours.sunday}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('directionsAria', { salonName: siteConfig.name })}
              className="inline-flex h-12 items-center justify-center gap-3 border border-[#241f1b] bg-[#241f1b] px-7 text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#3a3028] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8d6f58]"
            >
              <Navigation className="size-4" aria-hidden="true" />
              {t('directions')}
            </a>
            <a
              href={getPhoneHref(siteConfig.contact.phone)}
              aria-label={`${t('phoneLabel')} ${siteConfig.contact.phone}`}
              className="inline-flex h-12 items-center justify-center gap-3 border border-[#241f1b] px-7 text-xs font-medium uppercase tracking-[0.18em] text-[#241f1b] transition-colors hover:bg-[#241f1b] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8d6f58]"
            >
              <Phone className="size-4" aria-hidden="true" />
              {t('phoneLabel')}
            </a>
            {whatsappHref ? (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t('whatsappLabel')} ${siteConfig.contact.whatsappPhone}`}
                className="inline-flex h-12 items-center justify-center gap-3 border border-[#d9cec1] px-7 text-xs font-medium uppercase tracking-[0.18em] text-[#241f1b] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8d6f58]"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                {t('whatsappLabel')}
              </a>
            ) : null}
          </div>
        </div>

        <div className="relative min-h-72 overflow-hidden border border-stone-200 bg-stone-100 md:min-h-105 lg:min-h-full">
          <iframe
            src={mapUrl}
            title={t('mapTitle', { salonName: siteConfig.name })}
            className="absolute inset-0 h-full w-full"
            width="600"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </RevealOnScroll>
    </section>
  );
}
