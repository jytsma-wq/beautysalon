import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { locales } from '@/i18n';
import { siteConfig } from '../site-config';

describe('localized contact data', () => {
  it('does not serialize the old placeholder phone number in locale messages', () => {
    const messagesDir = path.join(process.cwd(), 'messages');

    for (const locale of locales) {
      const serializedMessages = fs.readFileSync(path.join(messagesDir, `${locale}.json`), 'utf8');

      expect(serializedMessages).not.toContain('+995 599 123 456');
      expect(serializedMessages).not.toContain('995599123456');
    }
  });

  it('keeps the Arabic footer phone aligned with the shared visible phone number', () => {
    const arMessages = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), 'messages', 'ar.json'), 'utf8')
    );

    expect(arMessages.footer.phone).toContain(siteConfig.contact.phone);
  });

  it('keeps the public WhatsApp number aligned with the shared visible phone number', () => {
    expect(siteConfig.contact.whatsappPhone).toBe(siteConfig.contact.phone);
  });
});
