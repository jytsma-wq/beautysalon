import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { cleanup, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { afterEach, describe, expect, it, vi } from 'vitest';
import enMessages from '../../../../messages/en.json';
import { SalonGuideWidget } from '../SalonGuideWidget';

vi.mock('@/components/providers/ConsentProvider', () => ({
  useConsent: () => ({ showBanner: false }),
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

function renderWidget() {
  return render(
    <NextIntlClientProvider locale="en" messages={enMessages}>
      <SalonGuideWidget locale="en" />
    </NextIntlClientProvider>
  );
}

describe('SalonGuideWidget', () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it('puts a visible treatment-and-price invitation in front of visitors', async () => {
    const user = userEvent.setup();
    renderWidget();

    expect(
      screen.getByText('Ask about our treatments and prices')
    ).toBeVisible();

    await user.click(
      screen.getByRole('button', { name: 'Open the Silk treatment guide' })
    );

    expect(
      screen.getByRole('dialog', { name: 'Mariam · Silk treatment guide' })
    ).toBeVisible();
    expect(screen.queryByText('Ask about our treatments and prices')).toBeNull();
  });

  it('answers a specific price question immediately with price and duration', async () => {
    const user = userEvent.setup();
    renderWidget();
    await user.click(
      screen.getByRole('button', { name: 'Open the Silk treatment guide' })
    );

    await user.type(
      screen.getByRole('textbox', { name: 'Your question' }),
      'How much is lip filler?'
    );
    await user.click(screen.getByRole('button', { name: 'Send question' }));

    const transcript = screen.getByRole('log');
    expect(within(transcript).getByText(/₾350 · 45 min/)).toBeVisible();
    expect(within(transcript).getByText(/Lip Filler - Russian Technique/)).toBeVisible();
    expect(within(transcript).getByText(/Volume is visible immediately/)).toBeVisible();
    expect(within(transcript).getByText(/Swelling, tenderness, and bruising/)).toBeVisible();
    expect(screen.getByRole('link', { name: 'Book this treatment' })).toHaveAttribute(
      'href',
      '/book'
    );
  });

  it('clarifies forehead filler without substituting the forehead Botox price', async () => {
    const user = userEvent.setup();
    renderWidget();
    await user.click(
      screen.getByRole('button', { name: 'Open the Silk treatment guide' })
    );

    await user.type(
      screen.getByRole('textbox', { name: 'Your question' }),
      'Price for forehead filler?'
    );
    await user.click(screen.getByRole('button', { name: 'Send question' }));

    const transcript = screen.getByRole('log');
    expect(within(transcript).getByText(/No forehead filler price is published/)).toBeVisible();
    expect(within(transcript).queryByText(/₾300/)).toBeNull();
    expect(screen.getByRole('link', { name: 'Ask the salon on WhatsApp' })).toHaveAttribute(
      'href',
      expect.stringContaining('wa.me/995577286855')
    );
  });

  it('closes on Escape and returns focus to the launcher', async () => {
    const user = userEvent.setup();
    renderWidget();
    const launcher = screen.getByRole('button', {
      name: 'Open the Silk treatment guide',
    });
    await user.click(launcher);
    await user.keyboard('{Escape}');

    expect(screen.queryByRole('dialog')).toBeNull();
    expect(launcher).toHaveFocus();
  });

  it('prioritizes an emergency response without price or booking prompts', async () => {
    const user = userEvent.setup();
    renderWidget();
    await user.click(
      screen.getByRole('button', { name: 'Open the Silk treatment guide' })
    );

    await user.type(
      screen.getByRole('textbox', { name: 'Your question' }),
      'Severe pain after lip filler'
    );
    await user.click(screen.getByRole('button', { name: 'Send question' }));

    const transcript = screen.getByRole('log');
    expect(within(transcript).getByText(/urgent medical care/)).toBeVisible();
    expect(within(transcript).queryByText(/₾350/)).toBeNull();
    expect(screen.queryByRole('link', { name: 'Book this treatment' })).toBeNull();
    expect(screen.queryByRole('link', { name: 'Ask the salon on WhatsApp' })).toBeNull();
  });
});
