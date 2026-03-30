import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Locale } from '@/types/types';
import { RTL_LOCALES } from './constants';

/** Merge Tailwind classes safely */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Check if a locale is RTL */
export function isRTL(locale: Locale): boolean {
  return RTL_LOCALES.includes(locale);
}

/** Format price with currency */
export function formatPrice(price: number, currency = 'GEL'): string {
  return `${price} ${currency}`;
}

/** Format duration in minutes to human-readable string */
export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}

/** Build a WhatsApp deep-link URL */
export function whatsappLink(phone: string, message?: string): string {
  const clean = phone.replace(/\D/g, '');
  const encoded = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${clean}${encoded}`;
}

/** Truncate text to a given length */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trimEnd() + '…';
}

/** Get locale-specific text from a multilingual object */
export function getLocalizedText(
  obj: Record<string, string> | undefined,
  locale: Locale,
  fallback = ''
): string {
  if (!obj) return fallback;
  return obj[locale] ?? obj['en'] ?? fallback;
}
