import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { act, cleanup, render, screen, waitFor } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import enMessages from '../../../../messages/en.json';
import {
  getWhatsAppHref,
  shouldHideStickyMobileBarForPath,
  StickyMobileBookingBar,
} from '../StickyMobileBookingBar';

const mockedState = vi.hoisted(() => ({
  pathname: '/en',
  showBanner: false,
}));

vi.mock('next/navigation', () => ({
  usePathname: () => mockedState.pathname,
}));

vi.mock('@/components/providers/ConsentProvider', () => ({
  useConsent: () => ({ showBanner: mockedState.showBanner }),
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

function createRect(overrides: Partial<DOMRect>): DOMRect {
  return {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
    toJSON: () => ({}),
    ...overrides,
  };
}

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', {
    configurable: true,
    value,
  });
}

function stubMatchMedia(matches: boolean) {
  let currentMatches = matches;
  const listeners = new Set<(event: MediaQueryListEvent) => void>();

  vi.stubGlobal(
    'matchMedia',
    vi.fn((query: string) => ({
      get matches() {
        return currentMatches;
      },
      media: query,
      onchange: null,
      addEventListener: (_eventName: string, listener: (event: MediaQueryListEvent) => void) => {
        listeners.add(listener);
      },
      removeEventListener: (_eventName: string, listener: (event: MediaQueryListEvent) => void) => {
        listeners.delete(listener);
      },
      addListener: (listener: (event: MediaQueryListEvent) => void) => {
        listeners.add(listener);
      },
      removeListener: (listener: (event: MediaQueryListEvent) => void) => {
        listeners.delete(listener);
      },
      dispatchEvent: () => true,
    }))
  );

  return {
    setMatches(nextMatches: boolean) {
      currentMatches = nextMatches;
      listeners.forEach((listener) =>
        listener({ matches: nextMatches, media: '(max-width: 767px)' } as MediaQueryListEvent)
      );
    },
  };
}

function installPageFixtures({
  heroBottom = 620,
  footerTop = 1600,
  protectedSectionTop,
}: {
  heroBottom?: number;
  footerTop?: number;
  protectedSectionTop?: number;
} = {}) {
  document.body.innerHTML = `
    <main id="main-content">
      <section data-testid="hero-section"></section>
      ${protectedSectionTop === undefined ? '' : '<section data-testid="protected-section" data-sticky-mobile-cta-safe-zone="true"></section>'}
    </main>
    <footer data-testid="site-footer"></footer>
  `;

  const heroSection = screen.getByTestId('hero-section');
  const footer = screen.getByTestId('site-footer');
  const protectedSection = protectedSectionTop === undefined ? null : screen.getByTestId('protected-section');

  vi.spyOn(heroSection, 'getBoundingClientRect').mockImplementation(() =>
    createRect({
      bottom: heroBottom - window.scrollY,
      top: -window.scrollY,
      height: heroBottom,
      width: 390,
    })
  );
  vi.spyOn(footer, 'getBoundingClientRect').mockImplementation(() =>
    createRect({
      top: footerTop - window.scrollY,
      bottom: footerTop + 400 - window.scrollY,
      height: 400,
      width: 390,
    })
  );
  if (protectedSection) {
    vi.spyOn(protectedSection, 'getBoundingClientRect').mockImplementation(() =>
      createRect({
        top: protectedSectionTop - window.scrollY,
        bottom: protectedSectionTop + 520 - window.scrollY,
        height: 520,
        width: 390,
      })
    );
  }
}

function renderStickyBar() {
  return render(
    <NextIntlClientProvider locale="en" messages={enMessages}>
      <StickyMobileBookingBar />
    </NextIntlClientProvider>
  );
}

describe('StickyMobileBookingBar', () => {
  beforeEach(() => {
    mockedState.pathname = '/en';
    mockedState.showBanner = false;
    setScrollY(0);
    Object.defineProperty(window, 'innerHeight', {
      configurable: true,
      value: 844,
    });
    vi.stubGlobal(
      'requestAnimationFrame',
      vi.fn((callback: FrameRequestCallback) => {
        callback(0);
        return 1;
      })
    );
    vi.stubGlobal('cancelAnimationFrame', vi.fn());
    installPageFixtures();
  });

  afterEach(() => {
    cleanup();
    document.body.innerHTML = '';
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('stays hidden on mobile until the visitor scrolls past the hero section', () => {
    stubMatchMedia(true);

    renderStickyBar();

    expect(screen.queryByRole('navigation', { name: /fast mobile booking actions/i })).toBeNull();
  });

  it('appears on mobile after the scroll trigger and uses the shared booking and WhatsApp links', async () => {
    stubMatchMedia(true);
    renderStickyBar();

    act(() => {
      setScrollY(700);
      window.dispatchEvent(new Event('scroll'));
    });

    const bar = await screen.findByRole('navigation', {
      name: /fast mobile booking actions/i,
    });
    const bookLink = screen.getByRole('link', {
      name: /book an appointment at silk beauty salon/i,
    });
    const whatsappLink = screen.getByRole('link', {
      name: /message silk beauty salon on whatsapp/i,
    });

    expect(bar).toHaveClass('grid-cols-2');
    expect(bookLink).toHaveAttribute('href', '/book');
    expect(whatsappLink).toHaveAttribute('href', 'https://wa.me/995577286855');
    expect(whatsappLink).toHaveAttribute('target', '_blank');
    expect(screen.getByText('Book Now')).toBeInTheDocument();
    expect(screen.getByText('WhatsApp')).toBeInTheDocument();
  });

  it('does not render on desktop viewports', async () => {
    stubMatchMedia(false);
    setScrollY(700);

    renderStickyBar();
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    await waitFor(() => {
      expect(screen.queryByRole('navigation', { name: /fast mobile booking actions/i })).toBeNull();
    });
  });

  it('does not render on the booking route so it cannot overlap the booking form', () => {
    mockedState.pathname = '/en/book';
    stubMatchMedia(true);
    setScrollY(700);

    renderStickyBar();
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    expect(screen.queryByRole('navigation', { name: /fast mobile booking actions/i })).toBeNull();
  });

  it('does not render while the consent banner is visible', () => {
    mockedState.showBanner = true;
    stubMatchMedia(true);
    setScrollY(700);

    renderStickyBar();
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    expect(screen.queryByRole('navigation', { name: /fast mobile booking actions/i })).toBeNull();
  });

  it('does not render once the footer is in view', () => {
    cleanup();
    installPageFixtures({ footerTop: 780 });
    stubMatchMedia(true);
    setScrollY(700);

    renderStickyBar();
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    expect(screen.queryByRole('navigation', { name: /fast mobile booking actions/i })).toBeNull();
  });

  it('does not render while a protected section is in view', () => {
    cleanup();
    installPageFixtures({ protectedSectionTop: 780 });
    stubMatchMedia(true);
    setScrollY(700);

    renderStickyBar();
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    expect(screen.queryByRole('navigation', { name: /fast mobile booking actions/i })).toBeNull();
  });

  it('handles missing WhatsApp numbers without creating an invalid href', () => {
    expect(getWhatsAppHref('')).toBeUndefined();
    expect(getWhatsAppHref('+995 577 286 855')).toBe('https://wa.me/995577286855');
    expect(getWhatsAppHref('+995-577-286-855')).toBe('https://wa.me/995577286855');
  });

  it('recognizes localized booking paths as sticky-bar exclusions', () => {
    expect(shouldHideStickyMobileBarForPath('/book')).toBe(true);
    expect(shouldHideStickyMobileBarForPath('/en/book')).toBe(true);
    expect(shouldHideStickyMobileBarForPath('/ar/book/details')).toBe(true);
    expect(shouldHideStickyMobileBarForPath('/en/contact')).toBe(true);
    expect(shouldHideStickyMobileBarForPath('/en/contact-us')).toBe(true);
    expect(shouldHideStickyMobileBarForPath('/en/treatments')).toBe(false);
  });
});
