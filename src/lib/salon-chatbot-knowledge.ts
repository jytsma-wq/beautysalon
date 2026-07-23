import {
  getBookingTreatmentOptions,
  type BookingTreatmentCategory,
  type BookingTreatmentOption,
} from '@/data/booking-treatments';
import {
  getTreatmentPlanningKnowledge,
  type TreatmentPlanningKnowledge,
} from '@/data/client-service-knowledge';
import type {
  ChatbotTopicId,
  SalonChatbotResolution,
} from '@/lib/salon-chatbot';
import { siteConfig } from '@/data/site-config';

export type ChatbotWebsiteSource =
  | 'booking-menu'
  | 'treatment-guide'
  | 'knowledge-library'
  | 'site-settings';

export interface PublishedPriceRange {
  category: Exclude<BookingTreatmentCategory, 'consultation'>;
  minimumGel: number;
  maximumGel: number;
}

export interface PublishedSalonFacts {
  address: string;
  city: string;
  country: string;
  phone: string;
  whatsappPhone: string;
  email: string;
  businessHours: typeof siteConfig.businessHours;
}

export interface SalonChatbotKnowledge {
  bookingOptions: readonly BookingTreatmentOption[];
  planning: TreatmentPlanningKnowledge | null;
  treatmentHref: string | null;
  relatedArticleHref: string | null;
  libraryHref: '/blog';
  sources: readonly ChatbotWebsiteSource[];
  publishedPriceRanges: readonly PublishedPriceRange[];
  salon: PublishedSalonFacts;
}

const productLibraryHref =
  '/blog/products-medicines-fillers-botulinum-toxin-library';
const consultationGuideHref =
  '/blog/botox-fillers-batumi-consultation-guide';

const relatedArticleByTopic: Partial<Record<ChatbotTopicId, string>> = {
  'forehead-filler': consultationGuideHref,
  'forehead-botox': consultationGuideHref,
  'lip-filler': consultationGuideHref,
  'cheek-filler': consultationGuideHref,
  'under-eye-filler': consultationGuideHref,
  'jawline-filler': consultationGuideHref,
  'dermal-filler': consultationGuideHref,
  botox: consultationGuideHref,
  microneedling: productLibraryHref,
  'fire-ice': productLibraryHref,
  'chemical-peel': productLibraryHref,
  'skin-boosters': productLibraryHref,
};

function getPublishedPriceRanges(
  options: readonly BookingTreatmentOption[]
): PublishedPriceRange[] {
  const ranges = new Map<PublishedPriceRange['category'], PublishedPriceRange>();

  for (const option of options) {
    if (option.category === 'consultation' || option.priceGel === undefined) continue;
    const current = ranges.get(option.category);

    ranges.set(option.category, {
      category: option.category,
      minimumGel: current
        ? Math.min(current.minimumGel, option.priceGel)
        : option.priceGel,
      maximumGel: current
        ? Math.max(current.maximumGel, option.priceGel)
        : option.priceGel,
    });
  }

  return [...ranges.values()];
}

/**
 * Selects facts from the same published data that powers the website. It never
 * creates a second price list or fills gaps with generated values.
 */
export function getSalonChatbotKnowledge(
  resolution: SalonChatbotResolution,
  locale: string
): SalonChatbotKnowledge {
  const requestedIds = new Set(resolution.bookingTreatmentIds);
  const allBookingOptions = getBookingTreatmentOptions(locale);
  const bookingOptions = allBookingOptions.filter((option) =>
    requestedIds.has(option.id)
  );
  const planning = resolution.treatmentSlug
    ? getTreatmentPlanningKnowledge(resolution.treatmentSlug)
    : null;
  const relatedArticleHref = resolution.topicId
    ? relatedArticleByTopic[resolution.topicId] ?? null
    : null;
  const sources = new Set<ChatbotWebsiteSource>();

  if (bookingOptions.length > 0) sources.add('booking-menu');
  if (planning) sources.add('treatment-guide');
  if (relatedArticleHref) sources.add('knowledge-library');
  if (['location', 'hours', 'contact', 'languages', 'payment'].includes(resolution.intent)) {
    sources.add('site-settings');
  }

  return {
    bookingOptions,
    planning,
    treatmentHref: resolution.treatmentSlug
      ? `/treatments/${resolution.treatmentSlug}`
      : null,
    relatedArticleHref,
    libraryHref: '/blog',
    sources: [...sources],
    publishedPriceRanges: getPublishedPriceRanges(allBookingOptions),
    salon: {
      address: siteConfig.contact.address,
      city: siteConfig.contact.city,
      country: siteConfig.contact.country,
      phone: siteConfig.contact.phone,
      whatsappPhone: siteConfig.contact.whatsappPhone,
      email: siteConfig.contact.email,
      businessHours: siteConfig.businessHours,
    },
  };
}
