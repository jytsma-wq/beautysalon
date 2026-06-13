import { MetadataRoute } from 'next';
import { locales } from '@/i18n';
import { getCanonicalUrl, getLanguageAlternates } from '@/lib/seo';
import { getSitemapRoutes } from '@/lib/sitemap-routes';

const LOCALES = [...locales];

// Reflects when this build was deployed — static pages "changed" at deploy time
const BUILD_TIME = new Date(process.env.BUILD_TIMESTAMP || Date.now());

export const revalidate = 0;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = await getSitemapRoutes();

  return LOCALES.flatMap((locale) =>
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
