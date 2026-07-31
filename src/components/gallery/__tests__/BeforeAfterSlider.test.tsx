import '@testing-library/jest-dom';
import type { ImgHTMLAttributes, ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { describe, expect, it, vi } from 'vitest';
import heMessages from '../../../../messages/he.json';
import { BeforeAfterSlider } from '../BeforeAfterSlider';

vi.mock('next/image', () => ({
  default: ({
    alt = '',
    fill: _fill,
    priority: _priority,
    ...props
  }: ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean; priority?: boolean }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} {...props} />
  ),
}));

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: { children: ReactNode; [key: string]: unknown }) => (
      <div {...props}>{children}</div>
    ),
  },
}));

vi.mock('@/hooks/use-hydrated-reduced-motion', () => ({
  useHydratedReducedMotion: () => true,
}));

describe('BeforeAfterSlider', () => {
  it('uses caller-provided localized labels for visible and accessible copy', () => {
    render(
      <NextIntlClientProvider locale="he" messages={heMessages}>
        <BeforeAfterSlider
          beforeSrc="/before.jpg"
          afterSrc="/after.jpg"
          beforeAlt="לפני טיפול"
          afterAlt="אחרי טיפול"
          beforeLabel="לפני"
          afterLabel="אחרי"
        />
      </NextIntlClientProvider>
    );

    expect(screen.getByText('לפני')).toBeInTheDocument();
    expect(screen.getByText('אחרי')).toBeInTheDocument();
    expect(screen.getByRole('slider')).toHaveAttribute('aria-valuetext', '50% לפני');
    expect(screen.queryByText('Before')).not.toBeInTheDocument();
    expect(screen.queryByText('After')).not.toBeInTheDocument();
  });
});
