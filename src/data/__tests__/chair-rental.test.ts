import { describe, expect, it } from 'vitest';
import { locales } from '@/i18n';
import { chairRentalContent } from '../chair-rental';

describe('chairRentalContent', () => {
  it('provides enquiry-based chair rental content for all six locales', () => {
    expect(Object.keys(chairRentalContent)).toEqual([...locales]);

    for (const locale of locales) {
      const content = chairRentalContent[locale];

      expect(content.navLabel).toBeTruthy();
      expect(content.title).toBeTruthy();
      expect(content.useCases).toHaveLength(3);
      expect(content.confirmationItems.length).toBeGreaterThanOrEqual(5);
      expect(content.processSteps).toHaveLength(3);
      expect(content.faqs.length).toBeGreaterThanOrEqual(3);
      expect(content.whatsappMessage).toBeTruthy();
      expect(content.availabilityNote).toMatch(/price|ფას|цен|fiyat|السعر|מחיר/i);
    }
  });
});
