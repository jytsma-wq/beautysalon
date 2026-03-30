export type Locale = 'en' | 'ka' | 'ru' | 'he' | 'ar' | 'tr';

export interface Treatment {
  id: string;
  category: string;
  name: string;
  duration: number;
  price: number;
  desc: string;
  badge?: string | null;
}

export interface Specialist {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  img: string;
  instagram: string;
  badge: string;
}

export interface Category {
  id: string;
  label: string;
  icon?: string;
  description?: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface BookingForm {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  message: string;
}

// Sanity-typed documents
export interface SanityTreatment {
  _id: string;
  _type: 'treatment';
  name: { en: string; ka?: string; ru?: string };
  slug: { current: string };
  category: { _ref: string };
  price: number;
  duration: number;
  description: any[];
  badge?: string;
  image?: { asset: { url: string } };
}

export interface SanitySpecialist {
  _id: string;
  _type: 'specialist';
  name: string;
  role: string;
  bio: any[];
  image?: { asset: { url: string } };
  treatments: { _ref: string }[];
}

export interface SanityCategory {
  _id: string;
  _type: 'category';
  title: { en: string; ka?: string; ru?: string };
  slug: { current: string };
  description?: string;
  icon?: string;
}
