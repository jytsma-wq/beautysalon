import { describe, expect, it } from 'vitest';
import { bookingTreatments, getBookingTreatmentOptions } from '../booking-treatments';
import { locales } from '@/i18n';

describe('booking treatment options', () => {
  it('keeps the website booking dropdown aligned with the mobile app menu shape', () => {
    expect(bookingTreatments).toHaveLength(17);
    expect(bookingTreatments.map((treatment) => treatment.id)).toEqual([
      'consultation-not-sure',
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

    expect(firstOption.label).toBe('კონსულტაცია / არ ვიცი, რა დავჯავშნო');
    expect(firstOption.value).toBe('Consultation / Not sure what to book');
  });

  it('has a label for every supported website language', () => {
    for (const locale of locales) {
      const options = getBookingTreatmentOptions(locale);

      expect(options).toHaveLength(bookingTreatments.length);
      expect(options.every((option) => option.label.length > 0)).toBe(true);
    }
  });
});
