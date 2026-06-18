import { describe, expect, it } from 'vitest';
import ar from '../../../messages/ar.json';
import en from '../../../messages/en.json';
import he from '../../../messages/he.json';
import ka from '../../../messages/ka.json';
import ru from '../../../messages/ru.json';
import tr from '../../../messages/tr.json';
import { baseConditions, getLocalizedConditions } from '../conditions';

const messagesByLocale = { en, ka, ru, tr, ar, he };

describe('condition translations', () => {
  it('has translated content for every current condition slug in every locale', () => {
    const currentConditionSlugs = baseConditions.map((condition) => condition.slug);

    for (const [locale, messages] of Object.entries(messagesByLocale)) {
      for (const slug of currentConditionSlugs) {
        expect(messages.conditionContent, `${locale} conditionContent`).toHaveProperty(slug);
        expect(messages.conditionContent[slug].name, `${locale}.${slug}.name`).toBeTruthy();
        expect(messages.conditionContent[slug].shortDescription, `${locale}.${slug}.shortDescription`).toBeTruthy();
      }
    }
  });

  it('does not fall back to English names on localized conditions page data', async () => {
    const englishNamesBySlug = Object.fromEntries(
      baseConditions.map((condition) => [condition.slug, condition.name])
    );

    for (const locale of ['ka', 'ru', 'tr', 'ar', 'he']) {
      const localizedConditions = await getLocalizedConditions(locale);

      for (const condition of localizedConditions) {
        expect(condition.name, `${locale}.${condition.slug}`).not.toBe(
          englishNamesBySlug[condition.slug]
        );
      }
    }

    const georgianConditions = await getLocalizedConditions('ka');
    const georgianNamesBySlug = Object.fromEntries(
      georgianConditions.map((condition) => [condition.slug, condition.name])
    );

    expect(georgianNamesBySlug['acne-scarring']).toBe('აკნე და ნაწიბურები');
    expect(georgianNamesBySlug['uneven-skin-tone']).toBe('არათანაბარი კანის ტონი');
    expect(georgianNamesBySlug.blemishes).toBe('გამონაყარი და ლაქები');
  });
});
