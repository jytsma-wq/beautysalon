import { getAllBlogSlugs } from '@/data/blog';
import { localSeoLandingSitemapRoutes } from '@/data/local-seo-pages';
import { getAllTreatments } from '@/data/treatments';
import type { Locale } from '@/i18n';
import { isIndexableTreatmentSlug } from '@/lib/search-index-policy';

export type SitemapChangeFrequency =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never';

export type SitemapRoute = {
  path: string;
  changeFrequency: SitemapChangeFrequency;
  priority: number;
  locales?: readonly Locale[];
};

export const staticSitemapRoutes: SitemapRoute[] = [
  { path: '', changeFrequency: 'daily', priority: 1 },
  { path: '/beauty-salon-batumi', changeFrequency: 'weekly', priority: 0.96 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/contact-us', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/book', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/venue-rental-batumi', changeFrequency: 'monthly', priority: 0.72 },
  { path: '/chair-rental-batumi', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/consultation', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/international-clients', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/pricelist', changeFrequency: 'weekly', priority: 0.75 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.7, locales: ['en'] },
  { path: '/faq', changeFrequency: 'monthly', priority: 0.65 },
  { path: '/download', changeFrequency: 'monthly', priority: 0.65 },
  { path: '/accessibility', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.25 },
  { path: '/terms-conditions', changeFrequency: 'yearly', priority: 0.25 },
];

export async function getSitemapRoutes(): Promise<SitemapRoute[]> {
  const [treatments, blogSlugs] = await Promise.all([
    getAllTreatments('en'),
    getAllBlogSlugs(),
  ]);

  const treatmentRoutes = treatments
    .filter((treatment) => isIndexableTreatmentSlug(treatment.slug))
    .map((treatment) => ({
      path: `/treatments/${treatment.slug}`,
      changeFrequency: 'weekly' as const,
      priority: 0.82,
    }));

  const blogRoutes = blogSlugs.map((slug) => ({
    path: `/blog/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.72,
    locales: ['en'] as const,
  }));

  return [
    ...staticSitemapRoutes,
    ...localSeoLandingSitemapRoutes,
    ...blogRoutes,
    ...treatmentRoutes,
  ];
}
