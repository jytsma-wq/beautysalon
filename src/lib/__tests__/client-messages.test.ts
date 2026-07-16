import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { getClientMessages } from '../client-messages';

describe('client locale messages', () => {
  it('omits dormant unverified content from the public client payload', () => {
    const messages = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), 'messages', 'en.json'), 'utf8')
    );
    const clientMessages = getClientMessages(messages);
    const serialized = JSON.stringify(clientMessages);

    expect(clientMessages).not.toHaveProperty('aboutPage');
    expect(clientMessages).not.toHaveProperty('offersPage');
    expect(clientMessages).not.toHaveProperty('pressPage');
    expect(clientMessages).not.toHaveProperty('careersPage');
    expect(clientMessages.homeEditorial).not.toHaveProperty('reviews');
    expect(clientMessages.homeEditorial).not.toHaveProperty('resultItems');
    expect(serialized).not.toContain('Dr. Ana Beridze');
    expect(serialized).not.toContain('Award-Winning Aesthetic Clinic');
    expect(serialized).not.toContain('Featured in Vogue');
    expect(serialized).not.toContain('20% off');
    expect(serialized.length).toBeLessThan(JSON.stringify(messages).length / 2);
  });

  it('retains namespaces required by interactive site controls', () => {
    const messages = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), 'messages', 'en.json'), 'utf8')
    );
    const clientMessages = getClientMessages(messages);

    expect(clientMessages.nav).toBeDefined();
    expect(clientMessages.common).toBeDefined();
    expect(clientMessages.consent).toBeDefined();
    expect(clientMessages.footer).toBeDefined();
    expect(clientMessages.bookingPage).toBeDefined();
    expect(clientMessages.homeEditorial).toBeDefined();
    expect(clientMessages.site).toEqual({
      brandName: 'Silk Beauty Salon',
      brandShort: 'Silk Beauty',
    });
  });
});
