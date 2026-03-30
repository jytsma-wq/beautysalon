import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN, // only needed for write operations
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

// ─── Queries ─────────────────────────────────────────────────────────────────

export const TREATMENTS_QUERY = `*[_type == "treatment"] | order(category->title.en asc, name.en asc) {
  _id,
  name,
  slug,
  price,
  duration,
  badge,
  description,
  "category": category->slug.current,
  "image": image.asset->url
}`;

export const SPECIALISTS_QUERY = `*[_type == "specialist"] | order(name asc) {
  _id,
  name,
  role,
  bio,
  "image": image.asset->url,
  "treatments": treatments[]->name.en
}`;

export const CATEGORIES_QUERY = `*[_type == "category"] | order(title.en asc) {
  _id,
  title,
  slug,
  description,
  icon
}`;
