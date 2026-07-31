import { describe, expect, it } from 'vitest';
import { getAllTreatments } from '../treatments';
import ar from '../../../messages/ar.json';
import he from '../../../messages/he.json';
import ka from '../../../messages/ka.json';
import ru from '../../../messages/ru.json';
import tr from '../../../messages/tr.json';

const nonEnglishLocales = ['ka', 'ru', 'tr', 'ar', 'he'] as const;

describe('localized treatment content', () => {
  it('does not expose English booking labels in non-English locales', () => {
    const messagesByLocale = { ka, ru, tr, ar, he };

    for (const locale of nonEnglishLocales) {
      const messages = messagesByLocale[locale];

      expect(messages.bookingPage.serviceBotox).not.toBe('Botox Treatment');
      expect(messages.bookingPage.serviceRejuvenation).not.toBe('Skin Rejuvenation');
    }
  });

  it('localizes treatment price and duration notation', async () => {
    for (const locale of nonEnglishLocales) {
      const treatments = await getAllTreatments(locale);

      for (const treatment of treatments) {
        expect(treatment.price).not.toMatch(/^From\s|^Consultation required$/);
        expect(treatment.duration).not.toMatch(/minutes|week program|Initial treatment/i);
      }
    }
  });

  it('never falls back to English treatment detail copy', async () => {
    const englishTreatments = await getAllTreatments('en');
    const englishBySlug = new Map(englishTreatments.map((treatment) => [treatment.slug, treatment]));

    for (const locale of nonEnglishLocales) {
      const treatments = await getAllTreatments(locale);

      for (const treatment of treatments) {
        const english = englishBySlug.get(treatment.slug);
        expect(english).toBeDefined();
        expect(treatment.description).not.toBe('');
        expect(treatment.shortDescription).not.toBe('');
        expect(treatment.description).not.toBe(english?.description);
        expect(treatment.shortDescription).not.toBe(english?.shortDescription);

        for (const field of ['benefits', 'howItWorks', 'aftercare', 'faqs'] as const) {
          const localizedValue = treatment[field];
          if (localizedValue && (!Array.isArray(localizedValue) || localizedValue.length > 0)) {
            expect(localizedValue).not.toEqual(english?.[field]);
          }
        }
      }
    }
  });
});
