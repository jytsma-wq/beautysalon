import { describe, expect, it } from 'vitest';
import { locales } from '@/i18n';
import sitemap from '../sitemap';

describe('sitemap', () => {
  it('includes every localized pricelist route with hreflang alternates', async () => {
    const entries = await sitemap();

    for (const locale of locales) {
      const url = `https://silkbeautysalon.online/${locale}/pricelist`;
      const entry = entries.find((candidate) => candidate.url === url);

      expect(entry).toBeDefined();
      expect(entry?.alternates?.languages).toMatchObject({
        en: 'https://silkbeautysalon.online/en/pricelist',
        ka: 'https://silkbeautysalon.online/ka/pricelist',
        ru: 'https://silkbeautysalon.online/ru/pricelist',
        tr: 'https://silkbeautysalon.online/tr/pricelist',
        ar: 'https://silkbeautysalon.online/ar/pricelist',
        he: 'https://silkbeautysalon.online/he/pricelist',
        'x-default': 'https://silkbeautysalon.online/en/pricelist',
      });
    }
  });

  it('excludes the unverified before-and-after gallery from discovery', async () => {
    const entries = await sitemap();

    expect(entries.some((entry) => entry.url.includes('/before-after'))).toBe(false);
  });

  it('publishes original blog content only in English and omits volatile timestamps', async () => {
    const entries = await sitemap();
    const blogEntries = entries.filter((entry) => entry.url.includes('/blog'));

    expect(blogEntries.length).toBeGreaterThan(0);
    expect(blogEntries.every((entry) => entry.url.includes('/en/blog'))).toBe(true);
    expect(entries.every((entry) => entry.lastModified === undefined)).toBe(true);
  });

  it('excludes unverified condition, promotion, press, career, and media routes', async () => {
    const entries = await sitemap();
    const excludedPaths = [
      '/conditions/acne-scarring',
      '/conditions',
      '/treatments',
      '/treatments/category/dermal-fillers',
      '/offers',
      '/media-press',
      '/media-gallery',
      '/careers',
    ];

    for (const excludedPath of excludedPaths) {
      expect(entries.some((entry) => entry.url.endsWith(excludedPath))).toBe(false);
    }
  });
});
