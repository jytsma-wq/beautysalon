import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { locales } from '@/i18n';
import { baseTreatmentCategories } from '../treatments';
import {
  getPopularTreatmentHighlights,
  portfolioHighlights,
  popularTreatmentHighlights,
} from '../homepage';

function findBaseTreatment(slug: string) {
  return baseTreatmentCategories
    .flatMap((category) => category.treatments)
    .find((treatment) => treatment.slug === slug);
}

describe('homepage popular treatment highlights', () => {
  it('uses central treatment prices for the six homepage cards', () => {
    expect(popularTreatmentHighlights).toHaveLength(6);

    const cards = getPopularTreatmentHighlights();

    expect(cards.map((card) => card.id)).toEqual([
      'antiWrinkle',
      'dermalFillers',
      'skinpen',
      'fireIce',
      'nails',
      'lashes',
    ]);

    for (const card of cards) {
      const source = findBaseTreatment(card.priceTreatmentSlug);

      expect(source, `${card.priceTreatmentSlug} should exist in central treatment data`).toBeDefined();
      expect(card.price).toBe(source?.price);
      expect(card.price).toMatch(/^(From|Consultation)/);
      expect(card.href.startsWith('/treatments') || card.href === '/botox-batumi').toBe(true);
    }
  });

  it('routes homepage Botox highlights to the local Botox Batumi page', () => {
    const botoxCard = popularTreatmentHighlights.find((card) => card.id === 'antiWrinkle');
    const botoxPortfolioCard = portfolioHighlights.find((card) => card.title === 'Anti-wrinkle injectables');

    expect(botoxCard?.href).toBe('/botox-batumi');
    expect(botoxPortfolioCard?.href).toBe('/botox-batumi');
  });

  it('has localized homepage copy for every supported language', () => {
    const messagesDir = path.join(process.cwd(), 'messages');

    for (const locale of locales) {
      const messages = JSON.parse(
        fs.readFileSync(path.join(messagesDir, `${locale}.json`), 'utf8')
      );
      const section = messages.homeEditorial?.popularTreatments;

      expect(section?.eyebrow, `${locale} eyebrow`).toBeTruthy();
      expect(section?.title, `${locale} title`).toBeTruthy();
      expect(section?.description, `${locale} description`).toBeTruthy();
      expect(section?.viewPricelist, `${locale} pricelist CTA`).toBeTruthy();
      expect(section?.priceLabel, `${locale} price label`).toBeTruthy();

      for (const card of popularTreatmentHighlights) {
        const item = section?.items?.[card.id];

        expect(item?.title, `${locale} ${card.id} title`).toBeTruthy();
        expect(item?.description, `${locale} ${card.id} description`).toBeTruthy();
        expect(item?.linkLabel, `${locale} ${card.id} link label`).toBeTruthy();
      }
    }
  });
});
