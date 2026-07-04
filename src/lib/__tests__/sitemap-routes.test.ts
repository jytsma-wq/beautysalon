import { describe, expect, it } from 'vitest';
import { getSitemapRoutes } from '../sitemap-routes';

describe('getSitemapRoutes', () => {
  it('includes static, blog, treatment category, treatment, and condition SEO routes', async () => {
    const routes = await getSitemapRoutes();
    const paths = routes.map((route) => route.path);

    expect(paths).toContain('');
    expect(paths).toContain('/book');
    expect(paths).toContain('/beauty-salon-batumi');
    expect(paths).toContain('/botox-batumi');
    expect(paths).toContain('/dermal-fillers-batumi');
    expect(paths).toContain('/lip-fillers-batumi');
    expect(paths).toContain('/skin-treatment-batumi');
    expect(paths).toContain('/acne-treatment-batumi');
    expect(paths).toContain('/nails-batumi');
    expect(paths).toContain('/lashes-brows-batumi');
    expect(paths).toContain('/blog/beauty-salon-batumi-guide');
    expect(paths).toContain('/treatments/category/dermal-fillers');
    expect(paths).toContain('/treatments/anti-wrinkle');
    expect(paths).toContain('/conditions/acne-scarring');
  });
});
