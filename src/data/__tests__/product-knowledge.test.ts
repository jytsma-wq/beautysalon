import { describe, expect, it } from 'vitest';
import {
  getProductKnowledgeForTreatment,
  productKnowledgeEntries,
  unresolvedSalonProductAreas,
} from '../product-knowledge';

describe('product knowledge safeguards', () => {
  it('does not claim that an internet-researched injectable brand is used by Silk', () => {
    const injectables = productKnowledgeEntries.filter((entry) =>
      entry.relevantTreatmentSlugs.some((slug) =>
        ['anti-wrinkle', 'masseter-botox', 'hyperhidrosis', 'lip-fillers'].includes(slug)
      )
    );

    expect(injectables.length).toBeGreaterThan(0);
    expect(injectables.every((entry) => entry.salonUseStatus === 'salon-evidence-required')).toBe(
      true
    );
  });

  it('documents product roles without publishing doses or dilution recipes', () => {
    const serialized = JSON.stringify(productKnowledgeEntries).toLowerCase();

    expect(serialized).not.toContain('units per');
    expect(serialized).not.toContain('dilution table');
    expect(serialized).toContain('must never provide a dilution recipe');
  });

  it('connects the relevant product classes to each verified clinical service', () => {
    expect(getProductKnowledgeForTreatment('anti-wrinkle').length).toBeGreaterThanOrEqual(3);
    expect(getProductKnowledgeForTreatment('lip-fillers').length).toBeGreaterThanOrEqual(3);
    expect(getProductKnowledgeForTreatment('skinpen-microneedling')).toHaveLength(2);
    expect(getProductKnowledgeForTreatment('is-clinical-fire-ice-peel')).toHaveLength(1);
  });

  it('keeps nail and lash brands unresolved until the salon supplies inventory', () => {
    expect(unresolvedSalonProductAreas.map((area) => area.treatmentSlug)).toEqual([
      'nails',
      'lashes',
    ]);
  });
});
