import { describe, expect, it } from 'vitest';
import ar from '../../../messages/ar.json';
import en from '../../../messages/en.json';
import he from '../../../messages/he.json';
import ka from '../../../messages/ka.json';
import ru from '../../../messages/ru.json';
import tr from '../../../messages/tr.json';
import nl from '../../../messages/nl.json';
import fr from '../../../messages/fr.json';
import de from '../../../messages/de.json';
import { baseConditions, getLocalizedConditions } from '../conditions';

const messagesByLocale = { en, ka, ru, tr, ar, he, nl, fr, de };

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

  it('does not fall back to English condition detail copy', async () => {
    const englishConditionsBySlug = Object.fromEntries(
      baseConditions.map((condition) => [condition.slug, condition])
    );

    for (const locale of ['ka', 'ru', 'tr', 'ar', 'he', 'nl', 'fr', 'de']) {
      const localizedConditions = await getLocalizedConditions(locale);

      for (const condition of localizedConditions) {
        const englishCondition = englishConditionsBySlug[condition.slug];
        expect(condition.name, `${locale}.${condition.slug}.name`).toBeTruthy();
        expect(condition.description, `${locale}.${condition.slug}.description`).not.toBe(
          englishCondition.description
        );
        expect(
          condition.shortDescription,
          `${locale}.${condition.slug}.shortDescription`
        ).not.toBe(englishCondition.shortDescription);
        expect(condition.symptoms, `${locale}.${condition.slug}.symptoms`).not.toEqual(
          englishCondition.symptoms
        );
        expect(condition.causes, `${locale}.${condition.slug}.causes`).not.toEqual(
          englishCondition.causes
        );
        expect(condition.treatments, `${locale}.${condition.slug}.treatments`).not.toEqual(
          englishCondition.treatments
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
