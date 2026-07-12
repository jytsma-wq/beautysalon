import '@testing-library/jest-dom';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ChairRentalPage from '../page';

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

describe('ChairRentalPage', () => {
  it('renders a chair rental enquiry without unconfirmed public terms', async () => {
    render(await ChairRentalPage({ params: Promise.resolve({ locale: 'en' }) }));

    expect(screen.getByRole('heading', { level: 1, name: 'Chair rental in Batumi' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Independent professionals' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Visiting professionals' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Recurring workspace' })).toBeInTheDocument();

    const enquiryLinks = screen.getAllByRole('link', { name: 'Ask about chair rental' });
    expect(enquiryLinks[0]).toHaveAttribute('href', expect.stringMatching(/^https:\/\/wa\.me\/995577286855\?/));
    expect(screen.getByRole('link', { name: 'View salon space rental' })).toHaveAttribute(
      'href',
      '/venue-rental-batumi'
    );
    expect(screen.queryByText(/per day|per week|per month/i)).not.toBeInTheDocument();
  });
});
