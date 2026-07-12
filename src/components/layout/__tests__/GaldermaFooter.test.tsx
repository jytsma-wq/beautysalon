import '@testing-library/jest-dom';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { afterEach, describe, expect, it, vi } from 'vitest';
import enMessages from '../../../../messages/en.json';
import { AnnouncerProvider } from '@/components/ui/announcer';
import { GaldermaFooter } from '../GaldermaFooter';

vi.mock('next/image', () => ({
  default: () => null,
}));

vi.mock('@/i18n/routing', () => ({
  Link: ({
    href,
    children,
    ...props
  }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children: ReactNode }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

function renderFooter() {
  return render(
    <NextIntlClientProvider locale="en" messages={enMessages}>
      <AnnouncerProvider>
        <GaldermaFooter />
      </AnnouncerProvider>
    </NextIntlClientProvider>
  );
}

describe('GaldermaFooter', () => {
  afterEach(() => {
    cleanup();
    document.head.innerHTML = '';
    vi.unstubAllGlobals();
  });

  it('fetches a fresh CSRF token before submitting the newsletter form when no meta token exists', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ token: 'fresh-csrf-token' }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });
    vi.stubGlobal('fetch', fetchMock);

    renderFooter();

    await userEvent.type(
      screen.getByRole('textbox', { name: /your email address/i }),
      'client@example.com'
    );
    await userEvent.click(screen.getByRole('button', { name: /^subscribe$/i }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(2);
    });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      '/api/csrf',
      expect.objectContaining({
        cache: 'no-store',
        credentials: 'same-origin',
      })
    );

    const [newsletterUrl, newsletterOptions] = fetchMock.mock.calls[1] as [
      string,
      RequestInit,
    ];
    expect(newsletterUrl).toBe('/api/newsletter');
    expect(newsletterOptions).toEqual(
      expect.objectContaining({
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': 'fresh-csrf-token',
        },
      })
    );
    expect(JSON.parse(newsletterOptions.body as string)).toEqual({
      email: 'client@example.com',
      locale: 'en',
      _csrf: 'fresh-csrf-token',
    });
    await waitFor(() => {
      expect(screen.getAllByText(/thank you for subscribing/i).length).toBeGreaterThan(0);
    });
  });

  it('keeps venue rental discoverable in the information links', () => {
    renderFooter();

    expect(screen.getByRole('link', { name: 'Salon Space Rental' })).toHaveAttribute(
      'href',
      '/venue-rental-batumi'
    );
  });

  it('keeps chair rental discoverable in the information links', () => {
    renderFooter();

    expect(screen.getByRole('link', { name: 'Chair Rental' })).toHaveAttribute(
      'href',
      '/chair-rental-batumi'
    );
  });
});
