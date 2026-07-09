import '@testing-library/jest-dom';
import type { AnchorHTMLAttributes, ImgHTMLAttributes, ReactNode } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import LocalSeoLandingPage from '../page';
import { localSeoLandingPages } from '@/data/local-seo-pages';

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

  async function renderLocalSeoPage(locale: string, localSeoSlug: string) {
    const page = await LocalSeoLandingPage({
      params: Promise.resolve({ locale, localSeoSlug }),
    });

    return render(page);
  }

  function textOccurrences(text: string, phrase: string) {
    return text.split(phrase).length - 1;
  }

  it('does not render search phrase keyword blocks as visible page content', async () => {
    for (const localSeoPage of localSeoLandingPages) {
      const { unmount } = await renderLocalSeoPage('en', localSeoPage.slug);
      const content = localSeoPage.content.en;

      expect(screen.queryByText(content.searchTitle)).not.toBeInTheDocument();
      expect(
        screen.getByRole('heading', { name: content.benefitsTitle })
      ).toBeInTheDocument();

      unmount();
    }
  });

  it('renders Georgian and Turkish priority query forms without keyword-list blocks', async () => {
    const checks = [
      {
        locale: 'ka',
        slug: 'lip-fillers-batumi',
        phrases: ['ტუჩის ფილერი ბათუმში'],
      },
      {
        locale: 'ka',
        slug: 'botox-batumi',
        phrases: ['ბოტოქსი ბათუმში'],
      },
      {
        locale: 'ka',
        slug: 'skin-treatment-batumi',
        phrases: ['კანის მკურნალობა ბათუმში', 'კანის მოვლა ბათუმში'],
      },
      {
        locale: 'tr',
        slug: 'lip-fillers-batumi',
        phrases: ['Batum’da dudak dolgusu'],
      },
      {
        locale: 'tr',
        slug: 'botox-batumi',
        phrases: ['Batum’da botoks'],
      },
      {
        locale: 'tr',
        slug: 'skin-treatment-batumi',
        phrases: ['Batum’da cilt tedavisi', 'Batum’da cilt bakımı'],
      },
    ] as const;

    for (const check of checks) {
      const { container, unmount } = await renderLocalSeoPage(check.locale, check.slug);
      const visibleText = container.textContent ?? '';
      const content = localSeoLandingPages.find((page) => page.slug === check.slug)!
        .content[check.locale];

      for (const phrase of check.phrases) {
        expect(visibleText, `${check.locale}/${check.slug} should render ${phrase}`)
          .toContain(phrase);
        expect(
          textOccurrences(visibleText, phrase),
          `${check.locale}/${check.slug} should not repeat ${phrase} like a keyword list`
        ).toBeLessThanOrEqual(3);
      }

      expect(screen.queryByText(content.searchTitle)).not.toBeInTheDocument();
      expect(screen.queryByText(/Search phrases this page answers/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Popular local searches/i)).not.toBeInTheDocument();

      unmount();
    }
  });
});
