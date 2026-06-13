import { afterEach, describe, expect, it } from 'vitest';
import { baseTreatmentCategories } from '@/data/treatments';
import {
  getAllCategorySlugs,
  getAllTreatmentSlugs,
  getTreatmentCategoriesByLocale,
  getTreatmentBySlug,
} from '@/lib/treatments-db';

describe('treatments database fallback', () => {
  const originalDatabaseUrl = process.env.DATABASE_URL;
  const originalDirectDatabaseUrl = process.env.DIRECT_DATABASE_URL;

  afterEach(() => {
    if (originalDatabaseUrl === undefined) {
      delete process.env.DATABASE_URL;
    } else {
      process.env.DATABASE_URL = originalDatabaseUrl;
    }

    if (originalDirectDatabaseUrl === undefined) {
      delete process.env.DIRECT_DATABASE_URL;
    } else {
      process.env.DIRECT_DATABASE_URL = originalDirectDatabaseUrl;
    }
  });

  it('serves static treatment data when database env is missing', async () => {
    delete process.env.DATABASE_URL;
    delete process.env.DIRECT_DATABASE_URL;

    const categories = await getTreatmentCategoriesByLocale('en');
    const treatmentSlugs = await getAllTreatmentSlugs();
    const categorySlugs = await getAllCategorySlugs();
    const firstTreatment = baseTreatmentCategories[0].treatments[0];
    const treatment = await getTreatmentBySlug(firstTreatment.slug, 'en');

    expect(categories).toHaveLength(baseTreatmentCategories.length);
    expect(treatmentSlugs).toContain(firstTreatment.slug);
    expect(categorySlugs).toContain(baseTreatmentCategories[0].slug);
    expect(treatment?.slug).toBe(firstTreatment.slug);
  });
});
