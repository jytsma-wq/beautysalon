import { SALON_INFO } from './constants';

/**
 * Build a WhatsApp click-to-chat URL for the salon.
 */
export function buildWhatsAppBookingLink(options?: {
  service?: string;
  name?: string;
  date?: string;
}): string {
  const phone = SALON_INFO.whatsapp;

  let message = 'Hello! I would like to book an appointment at Silk Beauty Salon.';

  if (options?.service) message += `\n\nService: ${options.service}`;
  if (options?.name)    message += `\nName: ${options.name}`;
  if (options?.date)    message += `\nPreferred date: ${options.date}`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Build a general WhatsApp link with a custom message.
 */
export function buildWhatsAppLink(message?: string): string {
  const phone = SALON_INFO.whatsapp;
  if (!message) return `https://wa.me/${phone}`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
