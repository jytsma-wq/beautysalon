import { describe, expect, it } from 'vitest';
import { locales } from '@/i18n';
import { venueRentalContent } from '../venue-rental';

describe('venueRentalContent', () => {
  it('provides complete rental content for all six supported locales', () => {
    expect(Object.keys(venueRentalContent)).toEqual([...locales]);

    for (const locale of locales) {
      const content = venueRentalContent[locale];

      expect(content.navLabel).toBeTruthy();
      expect(content.title).toBeTruthy();
      expect(content.eventTypes).toHaveLength(3);
      expect(content.processSteps).toHaveLength(3);
      expect(content.inquiryItems.length).toBeGreaterThanOrEqual(4);
      expect(content.faqs.length).toBeGreaterThanOrEqual(3);
      expect(content.whatsappMessage).toBeTruthy();
    }
  });
});
