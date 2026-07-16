import type { Locale } from '@/i18n';

export interface Testimonial {
  quote: string;
  quoteByLocale?: Partial<Record<Locale, string>>;
  author: string;
  role?: string;
  rating?: number;
  avatarUrl?: string;
  treatmentType?: string;
  treatmentDate?: string;
  reviewDate?: string;
}

// Populate only with reviews whose source and publication permission are verified.
export const testimonials: Testimonial[] = [];

const localeMap: Record<Locale, string> = {
  en: 'en-US',
  ka: 'ka-GE',
  ru: 'ru-RU',
  tr: 'tr-TR',
  ar: 'ar-SA',
  he: 'he-IL',
};

function firstAlphaNumericToken(value: string): string | undefined {
  return Array.from(value.replace(/[^\p{L}\p{N}]/gu, ''))[0];
}

function normalizeName(value: string | undefined): string {
  return value?.replace(/\s+/g, ' ').trim() || 'Client';
}

export function getTestimonialDisplayName(author: string | undefined): string {
  const normalized = normalizeName(author);
  const parts = normalized.split(' ');

  if (parts.length === 1) {
    return normalized;
  }

  const firstName = parts[0];
  const lastInitial = firstAlphaNumericToken(parts[parts.length - 1]);

  return lastInitial ? `${firstName} ${lastInitial.toUpperCase()}.` : firstName;
}

export function getTestimonialInitials(author: string | undefined): string {
  const normalized = normalizeName(author);
  const parts = normalized.split(' ');
  const firstInitial = firstAlphaNumericToken(parts[0])?.toUpperCase() || 'C';

  if (parts.length === 1) {
    return firstInitial;
  }

  const lastInitial = firstAlphaNumericToken(parts[parts.length - 1])?.toUpperCase();

  return lastInitial ? `${firstInitial}${lastInitial}` : firstInitial;
}

export function getTestimonialQuote(testimonial: Testimonial, locale: Locale): string {
  return testimonial.quoteByLocale?.[locale]?.trim() || testimonial.quote;
}

export function formatTestimonialDate(value: string | undefined, locale: Locale): string | undefined {
  if (!value?.trim()) {
    return undefined;
  }

  const dateValue = /^\d{4}-\d{2}$/.test(value) ? `${value}-01T00:00:00Z` : value;
  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  try {
    return new Intl.DateTimeFormat(localeMap[locale], {
      month: 'long',
      year: 'numeric',
    }).format(date);
  } catch {
    return value;
  }
}

export function getTestimonialViewModel(testimonial: Testimonial, locale: Locale) {
  const dateLabel = formatTestimonialDate(
    testimonial.reviewDate || testimonial.treatmentDate,
    locale
  );
  const detailLabel = [testimonial.treatmentType || testimonial.role, dateLabel]
    .filter((item): item is string => Boolean(item))
    .join(' - ');

  return {
    quote: getTestimonialQuote(testimonial, locale),
    displayName: getTestimonialDisplayName(testimonial.author),
    initials: getTestimonialInitials(testimonial.author),
    avatarUrl: testimonial.avatarUrl,
    rating: testimonial.rating ?? 5,
    detailLabel: detailLabel || undefined,
  };
}
