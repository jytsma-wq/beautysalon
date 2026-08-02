import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { localeNames, locales, rtlLocales } from '@/i18n';

const europeanLocales = ['nl', 'fr', 'de'] as const;

function flattenStrings(value: unknown, prefix = '', output: Record<string, string> = {}) {
  if (typeof value === 'string') {
    output[prefix] = value;
    return output;
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) => flattenStrings(item, `${prefix}.${index}`, output));
    return output;
  }

  if (value && typeof value === 'object') {
    Object.entries(value).forEach(([key, item]) => {
      flattenStrings(item, prefix ? `${prefix}.${key}` : key, output);
    });
  }

  return output;
}

describe('Dutch, French, and German locale parity', () => {
  it('registers nine locales while keeping only Arabic and Hebrew RTL', () => {
    expect(locales).toEqual(['en', 'ka', 'ru', 'tr', 'ar', 'he', 'nl', 'fr', 'de']);
    expect(rtlLocales).toEqual(['ar', 'he']);
  });

  it('provides native language labels and flag assets', () => {
    expect(localeNames.nl).toMatchObject({ nativeName: 'Nederlands', flag: '/flags/nl.svg', dir: 'ltr' });
    expect(localeNames.fr).toMatchObject({ nativeName: 'Français', flag: '/flags/fr.svg', dir: 'ltr' });
    expect(localeNames.de).toMatchObject({ nativeName: 'Deutsch', flag: '/flags/de.svg', dir: 'ltr' });

    for (const locale of europeanLocales) {
      expect(fs.existsSync(path.join(process.cwd(), 'public', 'flags', `${locale}.svg`))).toBe(true);
    }
  });

  it('matches the complete English message structure without empty fallbacks', () => {
    const english = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), 'messages', 'en.json'), 'utf8')
    );
    const englishStrings = flattenStrings(english);

    for (const locale of europeanLocales) {
      const messages = JSON.parse(
        fs.readFileSync(path.join(process.cwd(), 'messages', `${locale}.json`), 'utf8')
      );
      const localizedStrings = flattenStrings(messages);

      expect(Object.keys(localizedStrings).sort()).toEqual(Object.keys(englishStrings).sort());
      for (const [key, englishValue] of Object.entries(englishStrings)) {
        if (!englishValue.trim()) continue;
        expect(localizedStrings[key], `${locale}:${key}`).toBeTruthy();
      }
    }
  });

  it('localizes the main navigation and booking actions', () => {
    const expectations = {
      nl: { home: 'Startpagina', navBook: 'Afspraak boeken', pageBook: 'Maak een afspraak' },
      fr: { home: 'Accueil', navBook: 'Prendre rendez-vous', pageBook: 'Prendre rendez-vous' },
      de: { home: 'Startseite', navBook: 'Termin vereinbaren', pageBook: 'Termin vereinbaren' },
    } as const;

    for (const locale of europeanLocales) {
      const messages = JSON.parse(
        fs.readFileSync(path.join(process.cwd(), 'messages', `${locale}.json`), 'utf8')
      );

      expect(messages.nav.home).toBe(expectations[locale].home);
      expect(messages.nav.bookAppointment).toBe(expectations[locale].navBook);
      expect(messages.bookingPage.title).toBe(expectations[locale].pageBook);
    }
  });

  it('rejects known literal mistranslations in public copy', () => {
    const forbiddenByLocale = {
      nl: [
        /Zijdebehandelingsgids/i,
        /Huidvuller/i,
        /Boekconsultatie/i,
        /Fire & Ice Schil/i,
        /\bGeorgia\b/,
      ],
      fr: [
        /\bClous\b/,
        /Consultation de livres?/i,
        /traitement de la soie/i,
        /Fire & Ice Peler/i,
        /dans Batumi/i,
      ],
      de: [
        /Hautfüller/i,
        /Seidenbehandlung/i,
        /Fire & Ice Schälen/i,
        /Buchberatung/i,
        /\bGeorgia\b/,
      ],
    } as const;

    for (const locale of europeanLocales) {
      const messages = fs.readFileSync(
        path.join(process.cwd(), 'messages', `${locale}.json`),
        'utf8'
      );

      for (const pattern of forbiddenByLocale[locale]) {
        expect(messages, `${locale}:${pattern}`).not.toMatch(pattern);
      }

      const localizedStrings = Object.entries(
        flattenStrings(JSON.parse(messages))
      );
      for (const [key, value] of localizedStrings) {
        expect(value, `${locale}:${key}`).not.toMatch(/^\s*[|:–—-]/);
      }
    }
  });
});
