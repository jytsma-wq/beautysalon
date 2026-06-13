/**
 * Dynamic Sitemap Generation
 * Generates locale-specific sitemaps with proper hreflang
 */

import { MetadataRoute } from 'next';
import { locales } from '@/i18n';
import { getCanonicalUrl, getLanguageAlternates } from '@/lib/seo';
import { getSitemapRoutes } from '@/lib/sitemap-routes';

const BUILD_TIME = new Date(process.env.BUILD_TIMESTAMP || Date.now());

/**
 * Generate sitemap entries for all locales
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = await getSitemapRoutes();

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: getCanonicalUrl(locale, route.path),
      lastModified: BUILD_TIME,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: getLanguageAlternates(route.path),
      },
    }))
  );
}
