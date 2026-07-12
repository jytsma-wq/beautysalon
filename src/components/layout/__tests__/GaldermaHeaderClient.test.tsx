import '@testing-library/jest-dom';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { describe, expect, it, vi } from 'vitest';
import enMessages from '../../../../messages/en.json';
import { GaldermaHeaderClient } from '../GaldermaHeaderClient';

vi.mock('next/image', () => ({
  default: ({ alt = '', ...props }: { alt?: string; [key: string]: unknown }) => (
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

vi.mock('../LanguageSwitcher', () => ({ LanguageSwitcher: () => null }));
vi.mock('@/components/ui/theme-toggle', () => ({ ThemeToggle: () => null }));
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: { children: ReactNode; [key: string]: unknown }) => <div {...props}>{children}</div>,
    header: ({ children, ...props }: { children: ReactNode; [key: string]: unknown }) => <header {...props}>{children}</header>,
  },
}));

describe('GaldermaHeaderClient', () => {
  it('links to venue rental without replacing the existing treatment navigation', () => {
    render(
      <NextIntlClientProvider locale="en" messages={enMessages}>
        <GaldermaHeaderClient treatmentMegaMenuItems={[]} skinConditionMegaMenuItems={[]} />
      </NextIntlClientProvider>
    );

    expect(screen.getAllByRole('link', { name: 'Salon Space Rental' }).length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByRole('link', { name: 'Treatments' }).length).toBeGreaterThan(0);
  });

  it('keeps Download App and Chair Rental in the mobile More section', () => {
    render(
      <NextIntlClientProvider locale="en" messages={enMessages}>
        <GaldermaHeaderClient treatmentMegaMenuItems={[]} skinConditionMegaMenuItems={[]} />
      </NextIntlClientProvider>
    );

    const menuSection = screen.getByText('Menu').parentElement;
    const moreSection = screen.getByText('More', { selector: 'span' }).parentElement;

    expect(menuSection).not.toBeNull();
    expect(moreSection).not.toBeNull();
    expect(within(menuSection!).queryByRole('link', { name: 'Download App' })).not.toBeInTheDocument();
    expect(within(moreSection!).getByRole('link', { name: 'Download App' })).toHaveAttribute('href', '/download');
    expect(within(moreSection!).getByRole('link', { name: 'Chair Rental' })).toHaveAttribute(
      'href',
      '/chair-rental-batumi'
    );
  });

  it('groups secondary desktop links under More', () => {
    render(
      <NextIntlClientProvider locale="en" messages={enMessages}>
        <GaldermaHeaderClient treatmentMegaMenuItems={[]} skinConditionMegaMenuItems={[]} />
      </NextIntlClientProvider>
    );

    const moreButton = screen.getByRole('button', { name: 'More' });
    fireEvent.mouseEnter(moreButton.parentElement!);
    fireEvent.click(moreButton);

    const desktopMoreMenu = screen.getByRole('navigation', { name: 'More links' });
    expect(within(desktopMoreMenu).getByRole('link', { name: 'Download App' })).toHaveAttribute(
      'href',
      '/download'
    );
    expect(within(desktopMoreMenu).getByRole('link', { name: 'Chair Rental' })).toHaveAttribute(
      'href',
      '/chair-rental-batumi'
    );
  });
});
