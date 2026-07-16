import { describe, expect, it } from 'vitest';
import {
  indexableTreatmentSlugs,
  isIndexableEditorialLocale,
  isIndexableTreatmentSlug,
} from '../search-index-policy';

describe('search index policy', () => {
  it('allows only the owner-supported treatment detail set', () => {
    for (const slug of indexableTreatmentSlugs) {
      expect(isIndexableTreatmentSlug(slug)).toBe(true);
    }

    expect(isIndexableTreatmentSlug('alexandrite-laser-hair-removal')).toBe(false);
    expect(isIndexableTreatmentSlug('migraine-treatment')).toBe(false);
    expect(isIndexableTreatmentSlug('unknown-treatment')).toBe(false);
  });

  it('indexes the original editorial locale only', () => {
    expect(isIndexableEditorialLocale('en')).toBe(true);
    expect(isIndexableEditorialLocale('ka')).toBe(false);
    expect(isIndexableEditorialLocale('ru')).toBe(false);
  });
});
