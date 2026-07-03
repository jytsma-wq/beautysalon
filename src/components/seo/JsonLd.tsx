import { siteConfig } from "@/data/site-config"
import { locales, type Locale } from '@/i18n';
import { getCanonicalUrl, getSiteUrl } from '@/lib/seo';
import { getNonce } from '@/lib/nonce';

type SchemaPrimitive = string | number | boolean;
type SchemaValue = SchemaPrimitive | SchemaObject | SchemaValue[];
interface SchemaObject {
  [key: string]: SchemaValue;
}

const supportedLocaleSet = new Set<string>(locales);

const dayNameByBusinessHoursKey = {
  monday: 'Monday',
  tuesday: 'Tuesday',
  wednesday: 'Wednesday',
  thursday: 'Thursday',
  friday: 'Friday',
  saturday: 'Saturday',
  sunday: 'Sunday',
} as const;

type BusinessHoursKey = keyof typeof dayNameByBusinessHoursKey;
type DayOfWeek = (typeof dayNameByBusinessHoursKey)[BusinessHoursKey];
type OpeningHoursSpecification = {
  "@type": "OpeningHoursSpecification";
  dayOfWeek: DayOfWeek;
  opens: string;
  closes: string;
};

function getSafeLocale(locale: string): Locale {
  return supportedLocaleSet.has(locale) ? (locale as Locale) : 'en';
}

function absoluteSiteUrl(path: string): string {
  const siteUrl = getSiteUrl();
  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

function parseBusinessHours(hours: string): { opens: string; closes: string } | undefined {
  const match = hours.match(/^(\d{2}:\d{2})\s*-\s*(\d{2}:\d{2})$/);

  if (!match) {
    return undefined;
  }

  return {
    opens: match[1],
    closes: match[2],
  };
}

export function getOpeningHoursSpecification() {
  const specifications: OpeningHoursSpecification[] = [];

  for (const [businessHoursKey, dayOfWeek] of Object.entries(dayNameByBusinessHoursKey) as Array<[BusinessHoursKey, DayOfWeek]>) {
    const hours = siteConfig.businessHours[businessHoursKey];
    const parsedHours = parseBusinessHours(hours);

    if (parsedHours) {
      specifications.push({
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": dayOfWeek,
        "opens": parsedHours.opens,
        "closes": parsedHours.closes,
      });
    }
  }

  return specifications;
}

function removeEmptySchemaValues(value: unknown): SchemaValue | undefined {
  if (value === undefined || value === null || value === '') {
    return undefined;
  }

  if (Array.isArray(value)) {
    const cleanedItems = value
      .map(removeEmptySchemaValues)
      .filter((item): item is SchemaValue => item !== undefined);

    return cleanedItems.length > 0 ? cleanedItems : undefined;
  }

  if (typeof value === 'object') {
    const cleanedEntries = Object.entries(value as Record<string, unknown>)
      .map(([key, item]) => [key, removeEmptySchemaValues(item)] as const)
      .filter((entry): entry is readonly [string, SchemaValue] => entry[1] !== undefined);

    return cleanedEntries.length > 0 ? Object.fromEntries(cleanedEntries) as SchemaObject : undefined;
  }

  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return value;
  }

  return undefined;
}

export function serializeJsonLd(schema: SchemaObject): string {
  return JSON.stringify(removeEmptySchemaValues(schema)).replace(/</g, '\\u003c');
}

export function buildLocalBusinessSchema(locale: string = "en"): SchemaObject {
  const safeLocale = getSafeLocale(locale);
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": `${getSiteUrl()}/#beautysalon`,
    "name": siteConfig.name,
    "legalName": siteConfig.legalName,
    "alternateName": siteConfig.legalName,
    "description": siteConfig.description,
    "url": getCanonicalUrl(safeLocale),
    "mainEntityOfPage": getCanonicalUrl(safeLocale),
    "inLanguage": safeLocale,
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "priceRange": "GEL $$",
    "image": [
      absoluteSiteUrl('/images/hero-poster.jpg'),
      absoluteSiteUrl(siteConfig.logo.image)
    ],
    "logo": absoluteSiteUrl(siteConfig.logo.schemaImage),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address,
      "addressLocality": siteConfig.contact.city,
      "addressRegion": siteConfig.contact.region,
      "postalCode": siteConfig.contact.postcode,
      "addressCountry": siteConfig.contact.country
    },
    "hasMap": "https://www.google.com/maps/search/?api=1&query=Zurab%20Gorgiladze%2063%2C%20Batumi%2C%20Georgia",
    "areaServed": [
      {
        "@type": "City",
        "name": "Batumi",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Adjara"
        }
      },
      {
        "@type": "Country",
        "name": "Georgia"
      }
    ],
    "openingHoursSpecification": getOpeningHoursSpecification(),
    "sameAs": [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.googleBusinessProfile,
      siteConfig.social.tiktok
    ].filter(Boolean),
    "potentialAction": {
      "@type": "ReserveAction",
      "name": "Book an appointment",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": getCanonicalUrl(safeLocale, '/book'),
        "inLanguage": safeLocale,
        "actionPlatform": [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform"
        ]
      }
    }
  }

  return removeEmptySchemaValues(schema) as SchemaObject;
}

export function generateLocalBusinessSchema(locale: string = "en") {
  return serializeJsonLd(buildLocalBusinessSchema(locale));
}

/**
 * Generate FAQ Schema for treatment pages
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return JSON.stringify(schema)
}

/**
 * Generate Breadcrumb Schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return JSON.stringify(schema)
}

/**
 * Generate Medical Procedure Schema for treatments
 */
export function generateTreatmentSchema(treatment: {
  name: string
  description: string
  image?: string
  price?: string
  duration?: string
  benefits?: string[]
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": treatment.name,
    "description": treatment.description,
    "image": treatment.image,
    "procedureType": "Aesthetic",
    "howPerformed": treatment.benefits?.join('. ') || undefined,
    "procedureFollowUp": treatment.duration ? `Takes approximately ${treatment.duration}` : undefined,
    "status": "https://schema.org/ActiveNotRecruiting",
    "study": {
      "@type": "MedicalStudy",
      "status": "completed"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${getSiteUrl()}/treatments/${treatment.name.toLowerCase().replace(/\s+/g, '-')}`
    },
    "provider": {
      "@type": "BeautySalon",
      "name": siteConfig.name,
      "url": getSiteUrl()
    },
    "offers": treatment.price ? {
      "@type": "Offer",
      "price": treatment.price.replace(/[^0-9.]/g, ''),
      "priceCurrency": "GEL",
      "availability": "https://schema.org/InStock"
    } : undefined
  }

  return JSON.stringify(schema)
}

/**
 * Generate Review Schema for testimonials
 */
export function generateReviewSchema(reviews: Array<{
  author: string
  rating: number
  text: string
  date?: string
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.name,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": reviews.length.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map((review) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": review.text,
      "datePublished": review.date || new Date().toISOString()
    }))
  }

  return JSON.stringify(schema)
}

/**
 * Generate Article Schema for editorial content
 */
export function generateArticleSchema(article: {
  title: string
  slug: string
  excerpt: string
  image: string
  category: string
  author: string
  locale?: string
  createdAt: Date
  updatedAt: Date
  sourceUrls?: string[]
}) {
  const siteUrl = getSiteUrl()
  const articleUrl = `${siteUrl}/${article.locale || 'en'}/blog/${article.slug}`
  const imageUrl = article.image.startsWith('http') ? article.image : `${siteUrl}${article.image}`

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    },
    "headline": article.title,
    "description": article.excerpt,
    "image": [imageUrl],
    "datePublished": article.createdAt.toISOString(),
    "dateModified": article.updatedAt.toISOString(),
    "articleSection": article.category,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}${siteConfig.logo.schemaImage}`
      }
    },
    "citation": article.sourceUrls?.length ? article.sourceUrls : undefined
  }

  return JSON.stringify(schema)
}

/**
 * Generate Service Schema for treatment categories
 */
export function generateServiceSchema(service: {
  name: string
  description: string
  image?: string
  treatments: Array<{ name: string; url: string }>
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "image": service.image,
    "provider": {
      "@type": "BeautySalon",
      "name": siteConfig.name,
      "url": getSiteUrl()
    },
    "areaServed": {
      "@type": "City",
      "name": "Batumi",
      "containedInPlace": {
        "@type": "Country",
        "name": "Georgia"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.name,
      "itemListElement": service.treatments.map((treatment) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": treatment.name,
          "url": `${getSiteUrl()}${treatment.url}`
        }
      }))
    }
  }

  return JSON.stringify(schema)
}

export async function JsonLd({ schema, id = 'json-ld' }: { schema: string; id?: string }) {
  const nonce = await getNonce();

  return (
    <script
      id={id}
      type="application/ld+json"
      nonce={nonce || undefined}
      dangerouslySetInnerHTML={{ __html: schema }}
    />
  )
}
