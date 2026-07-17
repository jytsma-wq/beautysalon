import { describe, expect, it, vi } from 'vitest';
import { locales } from '@/i18n';
import { getLanguageAlternates } from '@/lib/seo';

vi.mock('next-intl/server', () => ({
  getTranslations: async () => (key: string) => {
    const values: Record<string, string> = {
      title: 'Localized page title',
      subtitle: 'Localized page description',
      pageTitle: 'Localized page title',
      pageDescription: 'Localized page description',
    };

    return values[key] || key;
  },
}));

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}));

vi.mock('@/i18n/routing', () => ({
  Link: () => null,
}));

const pages = [
  { path: '/faq', load: () => import('../faq/page') },
  { path: '/accessibility', load: () => import('../accessibility/page') },
  { path: '/privacy-policy', load: () => import('../privacy-policy/page') },
  { path: '/terms-conditions', load: () => import('../terms-conditions/page') },
];

describe('support page metadata', () => {
  it.each(pages)('adds canonical and locale alternates to $path', async ({ path, load }) => {
    const { generateMetadata } = await load();

    for (const locale of locales) {
      const metadata = await generateMetadata({
        params: Promise.resolve({ locale }),
      });

      expect(metadata.alternates?.canonical).toBe(
        `https://silkbeautysalon.online/${locale}${path}`
      );
      expect(metadata.alternates?.languages).toEqual(getLanguageAlternates(path));
      expect(metadata.robots).toMatchObject({ index: true, follow: true });
    }
  });
});
