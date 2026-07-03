import '@testing-library/jest-dom';
import type { AnchorHTMLAttributes, ImgHTMLAttributes, ReactNode } from 'react';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import enMessages from '../../../../messages/en.json';
import { AnnouncerProvider } from '@/components/ui/announcer';
import { GaldermaFooter } from '../GaldermaFooter';

vi.mock('next/image', () => ({
  default: ({ alt, ...props }: ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} {...props} />
  ),
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

describe('GaldermaFooter newsletter form', () => {
  beforeEach(() => {
    document.head.innerHTML = '';
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
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

    fireEvent.change(screen.getByRole('textbox', { name: 'Your email address' }), {
      target: { value: 'client@example.com' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }));

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
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      '/api/newsletter',
      expect.objectContaining({
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': 'fresh-csrf-token',
        },
        body: JSON.stringify({ email: 'client@example.com', _csrf: 'fresh-csrf-token' }),
      })
    );
    expect(screen.getAllByText('Thank you for subscribing!').length).toBeGreaterThan(0);
  });
});
