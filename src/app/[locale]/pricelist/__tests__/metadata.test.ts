import { describe, expect, it, vi } from 'vitest';
import { getLanguageAlternates } from '@/lib/seo';
import { locales } from '@/i18n';

vi.mock('@/i18n/routing', () => ({
  Link: () => null,
}));

vi.mock('lucide-react', () => ({
  ChevronRight: () => null,
}));

vi.mock('@/components/ui/button', () => ({
  Button: () => null,
}));

vi.mock('@/data/treatments', () => ({
  getLocalizedTreatmentCategories: async () => [],
}));

vi.mock('next-intl/server', () => ({
  getTranslations: async () => (key: string) => {
    const values: Record<string, string> = {
      title: 'Beauty Salon Prices in Batumi',
      subtitle: 'Browse starting prices for Silk Beauty Salon treatments in Batumi.',
    };

    return values[key] || key;
  },
}));

describe('pricelist metadata', () => {
  it('renders canonical and hreflang metadata for all localized price-list pages', async () => {
    const { generateMetadata } = await import('../page');

    for (const locale of locales) {
      const metadata = await generateMetadata({
        params: Promise.resolve({ locale }),
      });

      expect(metadata.title).toEqual({
        absolute: 'Beauty Salon Prices in Batumi | Silk Beauty Salon',
      });
      expect(metadata.description).toBe(
        'Browse starting prices for Silk Beauty Salon treatments in Batumi.'
      );
      expect(metadata.alternates?.canonical).toBe(
        `https://silkbeautysalon.online/${locale}/pricelist`
      );
      expect(metadata.alternates?.languages).toEqual(getLanguageAlternates('/pricelist'));
      expect(metadata.robots).toMatchObject({
        index: true,
        follow: true,
      });
    }
  });
});
