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

export const testimonials: Testimonial[] = [
  {
    quote: "Nino is absolutely wonderful! I've been coming to her for years and she never disappoints. My skin has never looked better. The results are always natural and exactly what I wanted.",
    author: "Anna K.",
    role: "Regular Client",
    rating: 5
  },
  {
    quote: "I was nervous about getting fillers for the first time, but Ketevan made me feel so comfortable. My lips look amazing and so natural - everyone keeps asking what I've done!",
    author: "Mariam D.",
    role: "Lip Fillers Client",
    treatmentType: "Lip Fillers Client",
    rating: 5
  },
  {
    quote: "Got Botox before my daughter's wedding and couldn't be happier! The team at Silk Beauty Salon made me feel so relaxed. The results are subtle but exactly what I wanted.",
    author: "Lela S.",
    role: "Anti-Wrinkle Client",
    treatmentType: "Anti-Wrinkle Client",
    rating: 5
  },
  {
    quote: "The team at Silk Beauty Salon is amazing! Sophia took the time to understand exactly what I wanted and delivered beyond my expectations. I'm a client for life now.",
    author: "Nika T.",
    role: "Skin Treatment Client",
    treatmentType: "Skin Treatment Client",
    rating: 5
  },
  {
    quote: "I've been coming to Silk Beauty Salon for over 2 years now. The clinic is beautiful, the staff are professional and friendly, and the results speak for themselves.",
    author: "Giorgi M.",
    role: "Long-term Client",
    rating: 5
  },
  {
    quote: "After years of struggling with acne scarring, I finally found a clinic that could help. The skin treatment plan transformed my skin. I feel like a different person!",
    author: "Temo R.",
    role: "Skin Treatment Client",
    treatmentType: "Skin Treatment Client",
    rating: 5
  },
  {
    quote: "The skin analysis was incredible! It showed me exactly what my skin needed and the team created a personalized treatment plan. My skin has never looked better.",
    author: "Salome L.",
    role: "Skin Analysis Client",
    treatmentType: "Skin Analysis Client",
    rating: 5
  },
  {
    quote: "I was worried about looking 'done' but Nino knew exactly how to enhance my features naturally. My friends keep telling me how refreshed I look!",
    author: "Eka W.",
    role: "Dermal Fillers Client",
    treatmentType: "Dermal Fillers Client",
    rating: 5
  }
];

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
