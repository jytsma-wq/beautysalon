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

const localizedMessages = { ka, ru, tr, ar, he, nl, fr, de } as const;
const namespaces = ['beforeAfterPage', 'treatmentPage', 'accessibility', 'contactPage'] as const;
const allowedSharedValues = new Set([
  'accessibility.keyTab',
  'accessibility.keyEscape',
  'contactPage.whatsapp',
]);

function flattenStrings(value: unknown, prefix = '', result: Record<string, string> = {}) {
  if (!value || typeof value !== 'object') return result;

  for (const [key, nestedValue] of Object.entries(value)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof nestedValue === 'string') {
      result[path] = nestedValue;
    } else {
      flattenStrings(nestedValue, path, result);
    }
  }

  return result;
}

describe('localized public copy', () => {
  it('does not reuse English copy in high-risk public namespaces', () => {
    const english = flattenStrings(
      Object.fromEntries(namespaces.map((namespace) => [namespace, en[namespace]]))
    );

    for (const [locale, messages] of Object.entries(localizedMessages)) {
      const localized = flattenStrings(
        Object.fromEntries(namespaces.map((namespace) => [namespace, messages[namespace]]))
      );

      for (const [key, englishValue] of Object.entries(english)) {
        if (allowedSharedValues.has(key)) continue;
        expect(localized[key], `${locale}:${key}`).not.toBe(englishValue);
      }
    }
  });

  it('keeps email labels translated in non-English public forms', () => {
    for (const [locale, messages] of Object.entries(localizedMessages)) {
      expect(messages.contactPage.emailAddress, `${locale}:contactPage.emailAddress`).not.toMatch(
        /^Email(?: address)?$/i
      );
      expect(messages.treatmentPage.email, `${locale}:treatmentPage.email`).not.toBe('Email');
    }
  });
});
