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
        pricelist: 'Pricelist',
        treatments: 'Treatments',
        treatmentPortfolio: 'Related services',
        treatmentPortfolioDescription: 'Compare related services in Batumi.',
        whatsappShort: 'WhatsApp',
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
        ).toBeLessThanOrEqual(4);
      }

      expect(screen.queryByText(content.searchTitle)).not.toBeInTheDocument();
      expect(screen.queryByText(/Search phrases this page answers/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Popular local searches/i)).not.toBeInTheDocument();

      unmount();
    }
  });

  it('renders Botox query-language variants without keyword stuffing', async () => {
    const checks = [
      {
        locale: 'en',
        phrases: [
          'Botox injections Batumi',
          'anti-wrinkle injections Batumi',
          'Where can I get Botox in Batumi?',
        ],
      },
      {
        locale: 'ka',
        phrases: ['ბოტოქსი ბათუმში', 'ბოტოქსის ინექციები ბათუმში'],
      },
      {
        locale: 'ru',
        phrases: ['ботокс Батуми', 'инъекции ботокса Батуми'],
      },
      {
        locale: 'tr',
        phrases: ['Batum’da botoks', 'Batum botoks'],
      },
      {
        locale: 'ar',
        phrases: ['بوتوكس باتومي', 'حقن بوتوكس باتومي'],
      },
      {
        locale: 'he',
        phrases: ['בוטוקס בטומי', 'הזרקות בוטוקס בטומי'],
      },
    ] as const;

    for (const check of checks) {
      const { container, unmount } = await renderLocalSeoPage(
        check.locale,
        'botox-batumi'
      );
      const visibleText = container.textContent ?? '';

      for (const phrase of check.phrases) {
        expect(visibleText, `${check.locale}/botox-batumi should render ${phrase}`)
          .toContain(phrase);
        expect(
          textOccurrences(visibleText, phrase),
          `${check.locale}/botox-batumi should not repeat ${phrase} like a keyword list`
        ).toBeLessThanOrEqual(4);
      }

      expect(screen.queryByText(/Search phrases this page answers/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Popular local searches/i)).not.toBeInTheDocument();

      unmount();
    }
  });

  it('maps Botox price query variants to the Botox local SEO page data', () => {
    const botoxPage = localSeoLandingPages.find((page) => page.slug === 'botox-batumi');

    expect(botoxPage?.content.en.searchPhrases).toContain('Botox price Batumi');
    expect(botoxPage?.content.ka.searchPhrases).toContain('ბოტოქსის ინექციები ბათუმში');
    expect(botoxPage?.content.ru.searchPhrases).toContain('ботокс цена Батуми');
    expect(botoxPage?.content.tr.searchPhrases).toContain('Batum botoks fiyatları');
    expect(botoxPage?.content.ar.searchPhrases).toContain('أسعار البوتوكس باتومي');
    expect(botoxPage?.content.he.searchPhrases).toContain('מחירי בוטוקס בטומי');
  });

  it('connects service pages to prices, booking, WhatsApp, and related services', async () => {
    const { container } = await renderLocalSeoPage('en', 'botox-batumi');

    expect(container.querySelector('a[href="/pricelist"]')).toBeInTheDocument();
    expect(container.querySelector('a[href="/book"]')).toBeInTheDocument();
    expect(
      container.querySelector('a[href="https://wa.me/995577286855"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('a[href="/dermal-fillers-batumi"]')
    ).toBeInTheDocument();
  });
});
