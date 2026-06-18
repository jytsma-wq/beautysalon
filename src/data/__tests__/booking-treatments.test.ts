import { describe, expect, it } from 'vitest';
import { bookingTreatments, getBookingTreatmentOptions } from '../booking-treatments';
import { locales } from '@/i18n';

describe('booking treatment options', () => {
  it('keeps the website booking dropdown aligned with the mobile app menu shape', () => {
    expect(bookingTreatments).toHaveLength(16);
    expect(bookingTreatments.map((treatment) => treatment.id)).toEqual([
      'lip-filler-1ml',
      'botox-forehead',
      'botox-full-face',
      'cheek-filler',
      'undereye-filler',
      'jawline-contouring',
      'chemical-peel',
      'microneedling',
      'skin-boosters',
      'russian-volume-lashes',
      'lash-lift-tint',
      'brow-lamination',
      'balayage',
      'keratin-treatment',
      'gel-manicure',
      'nail-art',
    ]);
  });

  it('shows localized labels while submitting the English treatment name', () => {
    const georgianOptions = getBookingTreatmentOptions('ka');
    const firstOption = georgianOptions[0];

    expect(firstOption.label).toBe('ტუჩების შევსება - რუსული ტექნიკა (1მლ)');
    expect(firstOption.value).toBe('Lip Filler - Russian Technique (1ml)');
  });

  it('has a label for every supported website language', () => {
    for (const locale of locales) {
      const options = getBookingTreatmentOptions(locale);

      expect(options).toHaveLength(bookingTreatments.length);
      expect(options.every((option) => option.label.length > 0)).toBe(true);
    }
  });
});
