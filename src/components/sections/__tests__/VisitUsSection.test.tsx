import '@testing-library/jest-dom';
import type { ReactNode } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { afterEach, describe, expect, it, vi } from 'vitest';
import arMessages from '../../../../messages/ar.json';
import enMessages from '../../../../messages/en.json';
import heMessages from '../../../../messages/he.json';
import kaMessages from '../../../../messages/ka.json';
import ruMessages from '../../../../messages/ru.json';
import trMessages from '../../../../messages/tr.json';
import { siteConfig } from '@/data/site-config';
import { VisitUsSection } from '../VisitUsSection';

vi.mock('@/components/effects/RevealOnScroll', () => ({
  RevealOnScroll: ({ children, className }: { children: ReactNode; className?: string }) => (
    <div className={className}>{children}</div>
  ),
}));

const localeMessages = {
  en: enMessages,
  ka: kaMessages,
  ru: ruMessages,
  tr: trMessages,
  ar: arMessages,
  he: heMessages,
} as const;

function renderVisitUsSection(locale: keyof typeof localeMessages = 'en') {
  return render(
    <NextIntlClientProvider locale={locale} messages={localeMessages[locale]}>
      <VisitUsSection />
    </NextIntlClientProvider>
  );
}

describe('VisitUsSection', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the shared address and opening hours as real text', () => {
    renderVisitUsSection();

    expect(screen.getByRole('heading', { name: /find us in central batumi/i })).toBeInTheDocument();
    expect(screen.getByText(siteConfig.name)).toBeInTheDocument();
    expect(screen.getByText(siteConfig.contact.address)).toBeInTheDocument();
    expect(screen.getByText(`${siteConfig.contact.city}, ${siteConfig.contact.postcode}, ${siteConfig.contact.country}`)).toBeInTheDocument();
    expect(screen.getAllByText(siteConfig.businessHours.monday)).toHaveLength(2);
    expect(screen.getByText(siteConfig.businessHours.sunday)).toBeInTheDocument();
  });

  it('renders a directions link to Google Maps navigation', () => {
    renderVisitUsSection();

    const directionsLink = screen.getByRole('link', {
      name: /get directions to silk beauty salon on google maps/i,
    });

    expect(directionsLink.getAttribute('href')).toContain('https://www.google.com/maps/dir/?');
    expect(directionsLink.getAttribute('href')).toContain('destination=Zurab+Gorgiladze+63%2C+Batumi%2C+Georgia');
    expect(directionsLink).toHaveAttribute('target', '_blank');
    expect(directionsLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders phone, WhatsApp, and a lazy map iframe without crashing', () => {
    renderVisitUsSection();

    expect(screen.getByRole('link', { name: /call \+995 577 34 57 67/i })).toHaveAttribute(
      'href',
      'tel:+995577345767'
    );
    expect(screen.getByRole('link', { name: `WhatsApp ${siteConfig.contact.phone}` })).toHaveAttribute(
      'href',
      'https://wa.me/995577345767'
    );

    const map = screen.getByTitle('Map to Silk Beauty Salon');

    expect(map).toHaveAttribute('loading', 'lazy');
    expect(map.getAttribute('src')).toContain('https://www.google.com/maps?');
    expect(map.getAttribute('src')).toContain('output=embed');
  });

  it('renders on all supported locale message files', () => {
    (Object.keys(localeMessages) as Array<keyof typeof localeMessages>).forEach((locale) => {
      const { unmount } = renderVisitUsSection(locale);

      expect(screen.getByText(siteConfig.contact.address)).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /google maps/i }).getAttribute('href')).toContain(
        'https://www.google.com/maps/dir/?'
      );
      expect(screen.getByTitle(new RegExp(siteConfig.name))).toHaveAttribute('loading', 'lazy');

      unmount();
    });
  });
});
