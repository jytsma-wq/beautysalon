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
});
