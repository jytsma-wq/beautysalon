import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { locales } from '@/i18n';
import { siteConfig } from '../site-config';

describe('localized contact data', () => {
  it('uses the owner-confirmed postal code in the shared site config', () => {
    expect(siteConfig.contact.postcode).toBe('6010');
    expect(`${siteConfig.contact.city}, ${siteConfig.contact.region} ${siteConfig.contact.postcode}`).toBe(
      'Batumi, Adjara 6010'
    );
    expect(JSON.stringify(siteConfig.contact)).not.toContain('Batumi, Adjara 6000');
  });

  it('does not serialize the old placeholder phone number in locale messages', () => {
    const messagesDir = path.join(process.cwd(), 'messages');

    for (const locale of locales) {
      const serializedMessages = fs.readFileSync(path.join(messagesDir, `${locale}.json`), 'utf8');

      expect(serializedMessages).not.toContain('+995 599 123 456');
      expect(serializedMessages).not.toContain('995599123456');
    }
  });

  it('does not serialize the outdated 6000 postal code in locale address messages', () => {
    const messagesDir = path.join(process.cwd(), 'messages');

    for (const locale of locales) {
      const serializedMessages = fs.readFileSync(path.join(messagesDir, `${locale}.json`), 'utf8');

      expect(serializedMessages).toContain('6010');
      expect(serializedMessages).not.toContain('6000');
    }
  });

  it('keeps the Arabic footer phone aligned with the shared visible phone number', () => {
    const arMessages = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), 'messages', 'ar.json'), 'utf8')
    );

    expect(arMessages.footer.phone).toContain(siteConfig.contact.phone);
  });
});
