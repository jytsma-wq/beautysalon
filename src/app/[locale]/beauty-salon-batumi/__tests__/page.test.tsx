import '@testing-library/jest-dom';
import type { AnchorHTMLAttributes, ImgHTMLAttributes, ReactNode } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import BeautySalonBatumiPage from '../page';

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

vi.mock('@/components/seo/JsonLd', () => ({
  JsonLd: ({ id }: { id: string }) => <script data-testid={id} type="application/ld+json" />,
  generateBreadcrumbSchema: vi.fn(() => ({})),
  generateFAQSchema: vi.fn(() => ({})),
  generateLocalBusinessSchema: vi.fn(() => ({})),
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

vi.mock('@/components/ui/button', () => ({
  Button: ({ children }: { children: ReactNode }) => <>{children}</>,
}));

const expectedServiceHrefs = [
  '/botox-batumi',
  '/dermal-fillers-batumi',
  '/lip-fillers-batumi',
  '/skin-treatment-batumi',
  '/acne-treatment-batumi',
  '/nails-batumi',
  '/lashes-brows-batumi',
  '/pricelist',
  '/book',
];

describe('BeautySalonBatumiPage', () => {
  afterEach(() => {
    cleanup();
  });

  it('replaces the visible local-search keyword block with customer-facing service navigation', async () => {
    const page = await BeautySalonBatumiPage({
      params: Promise.resolve({ locale: 'en' }),
    });
    const { container } = render(page);

    expect(screen.queryByText(/Popular local searches/i)).not.toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Popular beauty services in Batumi' })
    ).toBeInTheDocument();

    for (const href of expectedServiceHrefs) {
      expect(container.querySelector(`a[href="${href}"]`)).toBeInTheDocument();
    }
  });

  it('renders localized service navigation in Arabic and Hebrew without crashing', async () => {
    for (const locale of ['ar', 'he']) {
      const page = await BeautySalonBatumiPage({
        params: Promise.resolve({ locale }),
      });
      const { container, unmount } = render(page);

      expect(screen.queryByText(/Popular local searches/i)).not.toBeInTheDocument();
      expect(container.querySelector('a[href="/pricelist"]')).toBeInTheDocument();
      expect(container.querySelector('a[href="/book"]')).toBeInTheDocument();

      unmount();
    }
  });
});
