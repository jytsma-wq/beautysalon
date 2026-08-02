import { baseTreatmentCategories, localizeTreatmentPrice } from './treatments';

export const homeHeroSlides = [
  {
    eyebrow: "Beauty and aesthetics in Batumi",
    title: "Confidence in your skin starts with a precise consultation.",
    description:
      "Compare consultation-led injectables, skin care, nails, lashes, starting prices, and booking options in one place.",
    image: "/images/home/hero-consultation.webp",
    href: "/book",
    cta: "Book a consultation",
  },
  {
    eyebrow: "Skin quality",
    title: "Real solutions for real skin concerns.",
    description:
      "From texture and hydration to acne-prone skin, start with clear service information and consultation when needed.",
    image: "/images/home/hero-skin-quality.webp",
    href: "/conditions",
    cta: "Explore concerns",
  },
  {
    eyebrow: "Injectables and contour",
    title: "Subtle volume. Considered contours. You, refreshed.",
    description:
      "Read about dermal filler and anti-wrinkle consultations, starting prices, timing, and aftercare questions before booking.",
    image: "/images/home/hero-injectables.webp",
    href: "/treatments",
    cta: "View treatments",
  },
];

export const skinConcernHighlights = [
  {
    name: "Fine lines and wrinkles",
    description: "Soften expression lines while preserving natural movement.",
    href: "/botox-batumi",
    image: "/images/home/hero-consultation.webp",
  },
  {
    name: "Loss of firmness",
    description: "Support collagen, lift laxity, and refine facial structure.",
    href: "/skin-treatment-batumi",
    image: "/images/home/firmness.webp",
  },
  {
    name: "Uneven tone",
    description: "Target pigmentation, dullness, and post-inflammatory marks.",
    href: "/skin-treatment-batumi",
    image: "/images/home/uneven-tone.webp",
  },
  {
    name: "Dry skin",
    description: "Restore hydration, barrier function, and lasting luminosity.",
    href: "/skin-treatment-batumi",
    image: "/images/home/dry-skin.webp",
  },
  {
    name: "Acne and scarring",
    description: "Improve active breakouts, marks, and uneven texture.",
    href: "/acne-treatment-batumi",
    image: "/images/home/acne.webp",
  },
];

export const portfolioHighlights = [
  {
    title: "Dermal fillers",
    description:
      "Hyaluronic acid treatments for lips, cheeks, jawline, chin, under-eyes, and facial balancing.",
    href: "/dermal-fillers-batumi",
    image: "/images/home/hero-consultation.webp",
  },
  {
    title: "Anti-wrinkle injectables",
    description:
      "Precise neuromodulator treatments for forehead lines, frown lines, crow's feet, masseter, and sweating.",
    href: "/botox-batumi",
    image: "/images/home/firmness.webp",
  },
  {
    title: "Skin quality",
    description:
      "Peels, microneedling, diagnostics, and laser-led plans for stronger, brighter skin.",
    href: "/skin-treatment-batumi",
    image: "/images/home/skin-quality-plan.webp",
  },
];

export const popularTreatmentHighlights = [
  {
    id: 'antiWrinkle',
    priceTreatmentSlug: 'anti-wrinkle',
    href: '/botox-batumi',
  },
  {
    id: 'dermalFillers',
    priceTreatmentSlug: 'lip-fillers',
    href: '/dermal-fillers-batumi',
  },
  {
    id: 'skinpen',
    priceTreatmentSlug: 'skinpen-microneedling',
    href: '/skin-treatment-batumi',
  },
  {
    id: 'fireIce',
    priceTreatmentSlug: 'is-clinical-fire-ice-peel',
    href: '/skin-treatment-batumi',
  },
  {
    id: 'nails',
    priceTreatmentSlug: 'nails',
    href: '/nails-batumi',
  },
  {
    id: 'lashes',
    priceTreatmentSlug: 'lashes',
    href: '/lashes-brows-batumi',
  },
] as const;

const treatmentPriceBySlug = new Map(
  baseTreatmentCategories.flatMap((category) =>
    category.treatments.map((treatment) => [treatment.slug, treatment.price] as const)
  )
);

export function getPopularTreatmentHighlights(locale = 'en') {
  return popularTreatmentHighlights.map((item) => ({
    ...item,
    price: localizeTreatmentPrice(
      treatmentPriceBySlug.get(item.priceTreatmentSlug) || 'Consultation required',
      locale
    ),
  }));
}

export interface ResultCase {
  treatment: string;
  detail: string;
  beforeImage: string;
  afterImage: string;
}

// Add only same-client case images with documented publication consent.
export const resultCases: ResultCase[] = [];

export const skinTrendArticles = [
  {
    title: "How to plan injectables without looking overdone",
    category: "Treatment planning",
    href: "/blog",
    image: "/images/home/journal-treatment-planning.webp",
  },
  {
    title: "Skin quality is the new foundation",
    category: "Skin health",
    href: "/blog",
    image: "/images/home/journal-skin-health.webp",
  },
  {
    title: "What to know before a first filler consultation",
    category: "Consultation",
    href: "/blog",
    image: "/images/home/journal-consultation.webp",
  },
];

export const proofStats = [
  { value: "63", label: "Zurab Gorgiladze Street" },
  { value: "9", label: "Website languages" },
  { value: "7", label: "Days open each week" },
];
