import { describe, expect, it, vi } from 'vitest';
import { getLanguageAlternates } from '@/lib/seo';

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
  it('renders canonical and hreflang metadata for priority price-list pages', async () => {
    const { generateMetadata } = await import('../page');
    const metadata = await generateMetadata({
      params: Promise.resolve({ locale: 'en' }),
    });

    expect(metadata.alternates?.canonical).toBe(
      'https://silkbeautysalon.online/en/pricelist'
    );
    expect(metadata.alternates?.languages).toEqual(getLanguageAlternates('/pricelist'));
    expect(metadata.robots).toMatchObject({
      index: true,
      follow: true,
    });
  });
});
