import '@testing-library/jest-dom';
import type { AnchorHTMLAttributes, ImgHTMLAttributes, ReactNode } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import LocalSeoLandingPage from '../page';

vi.mock('next/image', () => ({
  default: ({
    alt,
    fill: _fill,
    priority: _priority,
    ...props
  }: ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean; priority?: boolean }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} {...props} />
  ),
}));

vi.mock('next/navigation', () => ({
  notFound: () => {
    throw new Error('notFound');
  },
}));

vi.mock('@/components/seo/JsonLd', () => ({
  JsonLd: ({ id }: { id: string }) => <script data-testid={id} type="application/ld+json" />,
  generateBreadcrumbSchema: vi.fn(() => ({})),
  generateFAQSchema: vi.fn(() => ({})),
  generateLocalBusinessSchema: vi.fn(() => ({})),
  generateServiceSchema: vi.fn(() => ({})),
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

vi.mock('next-intl/server', () => ({
  getTranslations: async ({ namespace }: { namespace: string }) => {
    const translations: Record<string, Record<string, string>> = {
      common: {
        home: 'Home',
      },
      nav: {
        treatments: 'Treatments',
      },
      treatmentPage: {
        learnMore: 'Learn more',
      },
      localSeoTemplate: {
        booking: 'Booking',
        email: 'Email',
        locationText: '{name} is located at {address}, {city}.',
        online: 'Online',
        phone: 'Phone',
      },
    };

    return (key: string, values?: Record<string, string>) => {
      const template = translations[namespace]?.[key] ?? key;

      return values
        ? Object.entries(values).reduce(
            (text, [valueKey, value]) => text.replace(`{${valueKey}}`, value),
            template
          )
        : template;
    };
  },
}));

describe('LocalSeoLandingPage', () => {
  afterEach(() => {
    cleanup();
  });

  it('does not render search phrase keyword blocks as visible page content', async () => {
    const page = await LocalSeoLandingPage({
      params: Promise.resolve({ locale: 'en', localSeoSlug: 'botox-batumi' }),
    });

    render(page);

    expect(screen.queryByText('Search phrases this page answers')).not.toBeInTheDocument();
    expect(screen.queryByText('Botox Batumi')).not.toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Why clients choose Silk for Botox in Batumi/i })
    ).toBeInTheDocument();
  });
});
