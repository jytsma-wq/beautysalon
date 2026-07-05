import '@testing-library/jest-dom';
import fs from 'node:fs';
import path from 'node:path';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { locales } from '@/i18n';
import { siteConfig } from '@/data/site-config';
import {
  buildLocalBusinessSchema,
  generateLocalBusinessSchema,
  getOpeningHoursSpecification,
  JsonLd,
} from '../JsonLd';

vi.mock('@/lib/nonce', () => ({
  getNonce: vi.fn(async () => 'test-nonce'),
}));

describe('LocalBusiness BeautySalon JSON-LD', () => {
  it('renders parseable JSON-LD in the script component', async () => {
    const schema = generateLocalBusinessSchema('en');
    const element = await JsonLd({ schema, id: 'json-ld-local-business' });

    render(element);

    const script = document.querySelector('script[type="application/ld+json"]');

    expect(script).toBeInTheDocument();
    expect(script).toHaveAttribute('id', 'json-ld-local-business');
    expect(script).toHaveAttribute('nonce', 'test-nonce');
    expect(JSON.parse(script?.textContent || '')).toMatchObject({
      '@context': 'https://schema.org',
      '@type': 'BeautySalon',
      name: siteConfig.name,
    });
  });

  it('includes required verified business fields from the shared site config', () => {
    const schema = JSON.parse(generateLocalBusinessSchema('en'));

    expect(schema).toMatchObject({
      '@context': 'https://schema.org',
      '@type': 'BeautySalon',
      '@id': `${siteConfig.url}/#beautysalon`,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      priceRange: 'GEL $$',
      url: `${siteConfig.url}/en`,
      mainEntityOfPage: `${siteConfig.url}/en`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.contact.address,
        addressLocality: siteConfig.contact.city,
        addressRegion: siteConfig.contact.region,
        postalCode: siteConfig.contact.postcode,
        addressCountry: siteConfig.contact.country,
      },
      potentialAction: {
        '@type': 'ReserveAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${siteConfig.url}/en/book`,
        },
      },
    });
    expect(schema.address.postalCode).toBe('6010');
    expect(schema.address.streetAddress).toBe('Zurab Gorgiladze 63');
    expect(schema.address.addressLocality).toBe('Batumi');
    expect(schema.address.addressCountry).toBe('Georgia');
    expect(schema.telephone).toBe('+995 577 34 57 67');
    expect(JSON.stringify(schema)).not.toContain('+995 599 123 456');
    expect(schema.openingHoursSpecification).toHaveLength(7);
    expect(schema.sameAs).toEqual([
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.tiktok,
    ]);
  });

  it('excludes aggregateRating, review markup, and unverified geo coordinates', () => {
    const schema = JSON.parse(generateLocalBusinessSchema('en'));

    expect(schema.aggregateRating).toBeUndefined();
    expect(schema.review).toBeUndefined();
    expect(schema.geo).toBeUndefined();
  });

  it('serializes without undefined, null, empty-string, or invalid image URL junk', () => {
    const serializedSchema = generateLocalBusinessSchema('en');
    const schema = JSON.parse(serializedSchema);

    expect(serializedSchema).not.toContain('undefined');
    expect(serializedSchema).not.toContain('null');
    expect(schema.sameAs).not.toContain('');
    expect(schema.image).toEqual([
      `${siteConfig.url}/images/hero-poster.jpg`,
      `${siteConfig.url}${siteConfig.logo.image}`,
    ]);
  });

  it('builds parseable schema for every localized homepage route', () => {
    for (const locale of locales) {
      const schema = JSON.parse(generateLocalBusinessSchema(locale));

      expect(schema.url).toBe(`${siteConfig.url}/${locale}`);
      expect(schema.mainEntityOfPage).toBe(`${siteConfig.url}/${locale}`);
      expect(schema.inLanguage).toBe(locale);
      expect(schema.potentialAction.target.urlTemplate).toBe(`${siteConfig.url}/${locale}/book`);
      expect(schema['@id']).toBe(`${siteConfig.url}/#beautysalon`);
    }
  });

  it('falls back to English route data for unsupported locales', () => {
    const schema = buildLocalBusinessSchema('unsupported-locale');

    expect(schema.url).toBe(`${siteConfig.url}/en`);
    expect(schema.inLanguage).toBe('en');
  });

  it('derives opening hours from the shared business hours source', () => {
    expect(getOpeningHoursSpecification()).toEqual([
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '10:00', closes: '22:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '10:00', closes: '22:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '10:00', closes: '22:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '10:00', closes: '22:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '10:00', closes: '22:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '22:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '11:00', closes: '22:00' },
    ]);
  });

  it('keeps the localized homepage wired to the LocalBusiness generator', () => {
    const homepageSource = fs.readFileSync(
      path.join(process.cwd(), 'src', 'app', '[locale]', 'page.tsx'),
      'utf8'
    );

    expect(homepageSource).toContain("import { JsonLd, generateLocalBusinessSchema }");
    expect(homepageSource).toContain('<JsonLd schema={generateLocalBusinessSchema(locale)} />');
  });
});
