import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { resultCases } from '../homepage';
import { testimonials } from '../testimonials';

function readSource(...segments: string[]): string {
  return fs.readFileSync(path.join(process.cwd(), ...segments), 'utf8');
}

describe('SEO trust content safeguards', () => {
  it('does not publish unverified testimonials or treatment result cases', () => {
    expect(testimonials).toEqual([]);
    expect(resultCases).toEqual([]);
  });

  it('does not retain stock-photo patient cases in the before-and-after component', () => {
    const source = readSource('src', 'components', 'gallery', 'EnhancedBeforeAfter.tsx');

    expect(source).not.toContain('images.unsplash.com');
    expect(source).not.toContain('patientName');
    expect(source).not.toContain('Restylane');
    expect(source).not.toContain('Botulinum toxin');
  });

  it('keeps the gallery non-indexable until verified cases are available', () => {
    const source = readSource('src', 'app', '[locale]', 'before-after', 'page.tsx');

    expect(source).toContain('noIndex: true');
    expect(source).not.toContain('EnhancedBeforeAfter');
  });

  it('does not expose a helper that can fabricate review ratings', () => {
    const source = readSource('src', 'components', 'seo', 'JsonLd.tsx');

    expect(source).not.toContain('generateReviewSchema');
    expect(source).not.toContain('AggregateRating');
    expect(source).not.toContain('MedicalStudy');
  });

  it('omits homepage trust sections while verified data is unavailable', () => {
    const source = readSource(
      'src',
      'components',
      'sections',
      'galderma-home',
      'GaldermaInspiredHome.tsx'
    );

    expect(source).toContain('resultCases.length > 0');
    expect(source).toContain('testimonials.length > 0');
  });
});
