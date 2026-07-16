import { afterEach, describe, expect, it } from 'vitest';
import {
  buildSeoMetadata,
  getCanonicalUrl,
  getLanguageAlternates,
  getSiteUrl,
} from '../seo';

const originalSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

afterEach(() => {
  if (originalSiteUrl === undefined) {
    delete process.env.NEXT_PUBLIC_SITE_URL;
  } else {
    process.env.NEXT_PUBLIC_SITE_URL = originalSiteUrl;
  }
});

describe('seo helpers', () => {
  it('uses the non-www production domain by default', () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;

    expect(getSiteUrl()).toBe('https://silkbeautysalon.online');
    expect(getCanonicalUrl('en', '/treatments')).toBe(
      'https://silkbeautysalon.online/en/treatments'
    );
  });

  it('builds canonical metadata with hreflang alternates', () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;

    const metadata = buildSeoMetadata({
      locale: 'en',
      path: '/book',
      title: 'Book a Beauty Salon Consultation in Batumi',
      description: 'Book a consultation at Silk Beauty Salon in Batumi, Georgia.',
    });

    expect(metadata.metadataBase?.toString()).toBe('https://silkbeautysalon.online/');
    expect(metadata.alternates?.canonical).toBe('https://silkbeautysalon.online/en/book');
    expect(metadata.alternates?.languages).toEqual(getLanguageAlternates('/book'));
    expect(metadata.openGraph?.url).toBe('https://silkbeautysalon.online/en/book');
  });

  it('limits language alternates when editorial content exists only in English', () => {
    expect(getLanguageAlternates('/blog/example', ['en'])).toEqual({
      en: 'https://silkbeautysalon.online/en/blog/example',
      'x-default': 'https://silkbeautysalon.online/en/blog/example',
    });
  });

  it('keeps excluded pages crawlable so links and canonicals can be followed', () => {
    const metadata = buildSeoMetadata({
      locale: 'en',
      path: '/conditions/example',
      title: 'Example condition page',
      description: 'Example description.',
      noIndex: true,
    });

    expect(metadata.robots).toMatchObject({ index: false, follow: true });
  });
});
