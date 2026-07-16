/**
 * Search engines should only receive detail pages for services that have a
 * clear, owner-supported customer journey. Other routes remain accessible for
 * existing links, but stay out of the index until the business verifies them.
 */
export const indexableTreatmentSlugs = [
  'anti-wrinkle',
  'masseter-botox',
  'hyperhidrosis',
  'lip-fillers',
  'skinpen-microneedling',
  'is-clinical-fire-ice-peel',
  'nails',
  'lashes',
] as const;

const indexableTreatmentSlugSet = new Set<string>(indexableTreatmentSlugs);

export function isIndexableTreatmentSlug(slug: string): boolean {
  return indexableTreatmentSlugSet.has(slug);
}

export function isIndexableEditorialLocale(locale: string): boolean {
  return locale === 'en';
}
