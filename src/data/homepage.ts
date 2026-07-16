import { baseTreatmentCategories } from './treatments';

export const homeHeroSlides = [
  {
    eyebrow: "Beauty and aesthetics in Batumi",
    title: "Confidence in your skin starts with a precise consultation.",
    description:
      "Compare consultation-led injectables, skin care, nails, lashes, starting prices, and booking options in one place.",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1920&q=85",
    href: "/book",
    cta: "Book a consultation",
  },
  {
    eyebrow: "Skin quality",
    title: "Real solutions for real skin concerns.",
    description:
      "From texture and hydration to acne-prone skin, start with clear service information and consultation when needed.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=85",
    href: "/conditions",
    cta: "Explore concerns",
  },
  {
    eyebrow: "Injectables and contour",
    title: "Subtle volume. Considered contours. You, refreshed.",
    description:
      "Read about dermal filler and anti-wrinkle consultations, starting prices, timing, and aftercare questions before booking.",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1920&q=85",
    href: "/treatments",
    cta: "View treatments",
  },
];

export const skinConcernHighlights = [
  {
    name: "Fine lines and wrinkles",
    description: "Soften expression lines while preserving natural movement.",
    href: "/botox-batumi",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=900&q=85",
  },
  {
    name: "Loss of firmness",
    description: "Support collagen, lift laxity, and refine facial structure.",
    href: "/skin-treatment-batumi",
    image:
      "https://images.unsplash.com/photo-1552693673-1bf958298935?w=900&q=85",
  },
  {
    name: "Uneven tone",
    description: "Target pigmentation, dullness, and post-inflammatory marks.",
    href: "/skin-treatment-batumi",
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=900&q=85",
  },
  {
    name: "Dry skin",
    description: "Restore hydration, barrier function, and lasting luminosity.",
    href: "/skin-treatment-batumi",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=900&q=85",
  },
  {
    name: "Acne and scarring",
    description: "Improve active breakouts, marks, and uneven texture.",
    href: "/acne-treatment-batumi",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=85",
  },
];

export const portfolioHighlights = [
  {
    title: "Dermal fillers",
    description:
      "Hyaluronic acid treatments for lips, cheeks, jawline, chin, under-eyes, and facial balancing.",
    href: "/dermal-fillers-batumi",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&q=85",
  },
  {
    title: "Anti-wrinkle injectables",
    description:
      "Precise neuromodulator treatments for forehead lines, frown lines, crow's feet, masseter, and sweating.",
    href: "/botox-batumi",
    image:
      "https://images.unsplash.com/photo-1552693673-1bf958298935?w=1200&q=85",
  },
  {
    title: "Skin quality",
    description:
      "Peels, microneedling, diagnostics, and laser-led plans for stronger, brighter skin.",
    href: "/skin-treatment-batumi",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=85",
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

export function getPopularTreatmentHighlights() {
  return popularTreatmentHighlights.map((item) => ({
    ...item,
    price: treatmentPriceBySlug.get(item.priceTreatmentSlug) || 'Consultation required',
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
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1000&q=85",
  },
  {
    title: "Skin quality is the new foundation",
    category: "Skin health",
    href: "/blog",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1000&q=85",
  },
  {
    title: "What to know before a first filler consultation",
    category: "Consultation",
    href: "/blog",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1000&q=85",
  },
];

export const proofStats = [
  { value: "63", label: "Zurab Gorgiladze Street" },
  { value: "6", label: "Website languages" },
  { value: "7", label: "Days open each week" },
];
