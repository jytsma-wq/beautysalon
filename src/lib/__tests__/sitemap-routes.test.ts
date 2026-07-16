import { describe, expect, it } from 'vitest';
import { getSitemapRoutes } from '../sitemap-routes';

describe('getSitemapRoutes', () => {
  it('includes verified customer routes and excludes unverified discovery routes', async () => {
    const routes = await getSitemapRoutes();
    const paths = routes.map((route) => route.path);

    expect(paths).toContain('');
    expect(paths).toContain('/book');
    expect(paths).toContain('/venue-rental-batumi');
    expect(paths).toContain('/chair-rental-batumi');
    expect(paths).toContain('/beauty-salon-batumi');
    expect(paths).toContain('/botox-batumi');
    expect(paths).toContain('/dermal-fillers-batumi');
    expect(paths).toContain('/lip-fillers-batumi');
    expect(paths).toContain('/skin-treatment-batumi');
    expect(paths).toContain('/acne-treatment-batumi');
    expect(paths).toContain('/nails-batumi');
    expect(paths).toContain('/lashes-brows-batumi');
    expect(paths).toContain('/blog/beauty-salon-batumi-guide');
    expect(paths).toContain('/treatments/anti-wrinkle');
    expect(paths).toContain('/treatments/skinpen-microneedling');
    expect(paths).not.toContain('/conditions/acne-scarring');
    expect(paths).not.toContain('/conditions');
    expect(paths).not.toContain('/treatments');
    expect(paths).not.toContain('/treatments/category/dermal-fillers');
    expect(paths).not.toContain('/treatments/alexandrite-laser-hair-removal');
    expect(paths).not.toContain('/offers');
    expect(paths).not.toContain('/media-press');
    expect(paths).not.toContain('/media-gallery');
    expect(paths).not.toContain('/careers');

    const blogRoute = routes.find(
      (route) => route.path === '/blog/beauty-salon-batumi-guide'
    );
    expect(blogRoute?.locales).toEqual(['en']);
  });
});
