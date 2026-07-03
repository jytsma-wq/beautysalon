import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  upsert: vi.fn(),
  update: vi.fn(),
  verifyCsrfToken: vi.fn(),
  newsletterRateLimit: vi.fn(),
  logSecurityEvent: vi.fn(),
  renderEmail: vi.fn(),
  sendMail: vi.fn(),
}));

vi.mock('@/lib/db', () => ({
  db: {
    newsletterSubscriber: {
      upsert: mocks.upsert,
      update: mocks.update,
    },
  },
}));

vi.mock('@/lib/csrf', () => ({
  verifyCsrfToken: mocks.verifyCsrfToken,
}));

vi.mock('@/lib/rate-limit', () => ({
  newsletterRateLimit: mocks.newsletterRateLimit,
}));

vi.mock('@/lib/security-logger', () => ({
  logSecurityEvent: mocks.logSecurityEvent,
}));

vi.mock('@/lib/render-email', () => ({
  renderEmail: mocks.renderEmail,
}));

vi.mock('@/lib/mailer', () => ({
  sendMail: mocks.sendMail,
}));

vi.mock('@/emails/newsletter-welcome', () => ({
  NewsletterWelcomeEmail: () => null,
}));

import { POST } from '../newsletter/route';

function newsletterRequest(
  body: unknown,
  headers: Record<string, string> = {}
): Request {
  return new Request('https://silkbeautysalon.online/api/newsletter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(body),
  });
}

describe('Newsletter API', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mocks.verifyCsrfToken.mockResolvedValue(false);
    mocks.newsletterRateLimit.mockResolvedValue({
      allowed: true,
      limit: 3,
      remaining: 2,
      resetTime: Date.now() + 60000,
    });
    mocks.logSecurityEvent.mockResolvedValue(undefined);
    mocks.renderEmail.mockResolvedValue('<p>Welcome</p>');
    mocks.sendMail.mockResolvedValue({ skipped: false });
  });

  it('rejects newsletter submissions without a CSRF token', async () => {
    const response = await POST(
      newsletterRequest({ email: 'not-an-email', locale: 'en' }) as never
    );
    const data = await response.json();

    expect(response.status).toBe(403);
    expect(data.error).toBe('Invalid CSRF token');
    expect(mocks.newsletterRateLimit).not.toHaveBeenCalled();
    expect(mocks.upsert).not.toHaveBeenCalled();
    expect(mocks.sendMail).not.toHaveBeenCalled();
  });

  it('rejects same-origin no-token submissions so no CSRF bypass is introduced', async () => {
    const response = await POST(
      newsletterRequest(
        { email: 'not-an-email', locale: 'en' },
        {
          Origin: 'https://silkbeautysalon.online',
          'Sec-Fetch-Site': 'same-origin',
        }
      ) as never
    );
    const data = await response.json();

    expect(response.status).toBe(403);
    expect(data.error).toBe('Invalid CSRF token');
    expect(mocks.newsletterRateLimit).not.toHaveBeenCalled();
  });

  it('rejects token-without-cookie requests when CSRF verification fails', async () => {
    const response = await POST(
      newsletterRequest(
        { email: 'not-an-email', locale: 'en', _csrf: 'header-token' },
        { 'X-CSRF-Token': 'header-token' }
      ) as never
    );
    const data = await response.json();

    expect(response.status).toBe(403);
    expect(data.error).toBe('Invalid CSRF token');
    expect(mocks.newsletterRateLimit).not.toHaveBeenCalled();
  });

  it('allows valid CSRF requests to reach normal email validation', async () => {
    mocks.verifyCsrfToken.mockResolvedValue(true);

    const response = await POST(
      newsletterRequest(
        { email: 'not-an-email', locale: 'en', _csrf: 'valid-token' },
        { 'X-CSRF-Token': 'valid-token' }
      ) as never
    );
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe('Invalid email');
    expect(mocks.newsletterRateLimit).toHaveBeenCalledTimes(1);
    expect(mocks.upsert).not.toHaveBeenCalled();
    expect(mocks.sendMail).not.toHaveBeenCalled();
  });
});
