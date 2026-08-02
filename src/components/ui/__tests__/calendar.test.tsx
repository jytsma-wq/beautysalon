import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { afterEach, describe, expect, it } from 'vitest';
import { Calendar } from '../calendar';

const calendarCases = [
  {
    locale: 'nl',
    caption: 'AUGUSTUS 2026',
    weekday: 'ZO',
    previous: 'Ga naar vorige maand',
    next: 'Ga naar volgende maand',
    dayLabel: 'zondag 9 augustus 2026',
  },
  {
    locale: 'fr',
    caption: 'AOÛT 2026',
    weekday: 'DIM',
    previous: 'Aller au mois précédent',
    next: 'Aller au mois suivant',
    dayLabel: 'dimanche 9 août 2026',
  },
  {
    locale: 'de',
    caption: 'AUGUST 2026',
    weekday: 'SO',
    previous: 'Zum vorherigen Monat',
    next: 'Zum nächsten Monat',
    dayLabel: 'Sonntag, 9. August 2026',
  },
] as const;

describe('Calendar locale rendering', () => {
  afterEach(() => {
    cleanup();
  });

  calendarCases.forEach(({ locale, caption, weekday, previous, next, dayLabel }) => {
    it(`localizes the calendar controls for ${locale}`, () => {
      render(
        <NextIntlClientProvider locale={locale} messages={{}}>
          <Calendar mode="single" month={new Date(2026, 7, 1)} />
        </NextIntlClientProvider>
      );

      expect(screen.getByText(caption)).toBeInTheDocument();
      expect(screen.getByText(weekday)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: previous })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: next })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: dayLabel })).toBeInTheDocument();
    });
  });
});
