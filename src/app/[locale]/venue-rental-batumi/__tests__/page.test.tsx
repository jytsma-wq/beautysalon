import '@testing-library/jest-dom';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import VenueRentalPage from '../page';

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

describe('VenueRentalPage', () => {
  it('renders the three approved venue uses and enquiry actions', async () => {
    render(await VenueRentalPage({ params: Promise.resolve({ locale: 'en' }) }));

    expect(screen.getByRole('heading', { level: 1, name: 'Salon space rental in Batumi' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Professional meetings' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Diploma & training sessions' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Seminars & workshops' })).toBeInTheDocument();

    const availabilityLinks = screen.getAllByRole('link', { name: 'Ask about availability' });
    expect(availabilityLinks.length).toBeGreaterThan(0);
    expect(availabilityLinks[0]).toHaveAttribute('href', expect.stringMatching(/^https:\/\/wa\.me\/995577286855\?/));
    expect(screen.getByRole('link', { name: 'Contact the salon' })).toHaveAttribute('href', '/contact-us');
  });
});
