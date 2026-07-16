import { MetadataRoute } from 'next';
import { locales } from '@/i18n';
import { getCanonicalUrl, getLanguageAlternates } from '@/lib/seo';
import { getSitemapRoutes } from '@/lib/sitemap-routes';

const LOCALES = [...locales];

export const revalidate = 0;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = await getSitemapRoutes();

  return LOCALES.flatMap((locale) =>
    routes
      .filter((route) => !route.locales || route.locales.includes(locale))
      .map((route) => ({
        url: getCanonicalUrl(locale, route.path),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: getLanguageAlternates(route.path, route.locales),
        },
      }))
  );
}
