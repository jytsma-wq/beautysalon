import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { resultCases } from '../homepage';
import { allVideos, imageGalleries } from '../media';
import { siteConfig } from '../site-config';
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

  it('keeps shared business data factual and free of fabricated trust claims', () => {
    expect(siteConfig.legalName).toBe('Silk Beauty Salon');
    expect(siteConfig).not.toHaveProperty('founderName');
    expect(siteConfig).not.toHaveProperty('team');
    expect(siteConfig).not.toHaveProperty('awards');
    expect(JSON.stringify(siteConfig)).not.toContain('+995 599 123 456');
  });

  it('does not attribute treatment guidance to an unverified practitioner', () => {
    const source = readSource(
      'src',
      'app',
      '[locale]',
      'treatments',
      '[slug]',
      'page.tsx'
    );

    expect(source).not.toContain('Dr. Ana Beridze');
    expect(source).not.toContain('Medical Director');
  });

  it('does not publish unverified staff, award, offer, press, career, or media claims', () => {
    const sources = [
      readSource('src', 'app', '[locale]', 'about', 'page.tsx'),
      readSource('src', 'app', '[locale]', 'international-clients', 'page.tsx'),
      readSource('src', 'app', '[locale]', 'offers', 'page.tsx'),
      readSource('src', 'app', '[locale]', 'media-press', 'page.tsx'),
      readSource('src', 'app', '[locale]', 'careers', 'page.tsx'),
      readSource('src', 'app', '[locale]', 'media-gallery', 'page.tsx'),
    ].join('\n');

    expect(sources).not.toContain('Vogue');
    expect(sources).not.toContain('Grazia');
    expect(sources).not.toContain('Tatler');
    expect(sources).not.toContain('50-70%');
    expect(sources).not.toContain('Dr. Ana Beridze');
    expect(allVideos).toEqual([]);
    expect(imageGalleries).toEqual([]);
  });

  it('uses BeautySalon rather than a medical-business claim on booking', () => {
    const source = readSource('src', 'app', '[locale]', 'book', 'page.tsx');

    expect(source).toContain("'@type': 'BeautySalon'");
    expect(source).not.toContain("'@type': 'MedicalBusiness'");
  });

  it('keeps unverified catalog surfaces out of search while preserving their URLs', () => {
    const treatmentOverview = readSource('src', 'app', '[locale]', 'treatments', 'page.tsx');
    const conditionOverview = readSource('src', 'app', '[locale]', 'conditions', 'page.tsx');
    const treatmentCategory = readSource(
      'src',
      'app',
      '[locale]',
      'treatments',
      'category',
      '[slug]',
      'page.tsx'
    );

    expect(treatmentOverview).toContain('noIndex: true');
    expect(conditionOverview).toContain('noIndex: true');
    expect(treatmentCategory).toContain('noIndex: true');
  });

  it('uses verified local landing pages on the consultation journey', () => {
    const source = readSource('src', 'app', '[locale]', 'consultation', 'page.tsx');

    expect(source).toContain('localSeoLandingPages.map');
    expect(source).not.toContain("from '@/data/navigation'");
  });
});
