import { getAllConditions } from '@/data/conditions';
import { getAllBlogSlugs } from '@/data/blog';
import { localSeoLandingSitemapRoutes } from '@/data/local-seo-pages';
import { treatmentCollections } from '@/data/treatment-collections';
import { getAllTreatments } from '@/data/treatments';

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
};

export const staticSitemapRoutes: SitemapRoute[] = [
  { path: '', changeFrequency: 'daily', priority: 1 },
  { path: '/beauty-salon-batumi', changeFrequency: 'weekly', priority: 0.96 },
  { path: '/treatments', changeFrequency: 'weekly', priority: 0.95 },
  { path: '/conditions', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/contact-us', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/book', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/venue-rental-batumi', changeFrequency: 'monthly', priority: 0.72 },
  { path: '/chair-rental-batumi', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/consultation', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/international-clients', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/pricelist', changeFrequency: 'weekly', priority: 0.75 },
  { path: '/offers', changeFrequency: 'weekly', priority: 0.75 },
  { path: '/before-after', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/faq', changeFrequency: 'monthly', priority: 0.65 },
  { path: '/download', changeFrequency: 'monthly', priority: 0.65 },
  { path: '/media-gallery', changeFrequency: 'monthly', priority: 0.55 },
  { path: '/media-press', changeFrequency: 'monthly', priority: 0.55 },
  { path: '/careers', changeFrequency: 'monthly', priority: 0.45 },
  { path: '/accessibility', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.25 },
  { path: '/terms-conditions', changeFrequency: 'yearly', priority: 0.25 },
];

export async function getSitemapRoutes(): Promise<SitemapRoute[]> {
  const [treatments, conditions, blogSlugs] = await Promise.all([
    getAllTreatments('en'),
    getAllConditions('en'),
    getAllBlogSlugs(),
  ]);

  const treatmentRoutes = treatments.map((treatment) => ({
    path: `/treatments/${treatment.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.86,
  }));

  const treatmentCategoryRoutes = treatmentCollections.map((collection) => ({
    path: `/treatments/category/${collection.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.84,
  }));

  const conditionRoutes = conditions.map((condition) => ({
    path: `/conditions/${condition.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.78,
  }));

  const blogRoutes = blogSlugs.map((slug) => ({
    path: `/blog/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.72,
  }));

  return [
    ...staticSitemapRoutes,
    ...localSeoLandingSitemapRoutes,
    ...blogRoutes,
    ...treatmentCategoryRoutes,
    ...treatmentRoutes,
    ...conditionRoutes,
  ];
}
