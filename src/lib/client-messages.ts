type MessageRecord = Record<string, unknown>;

const passthroughNamespaces = [
  'accessibility',
  'common',
  'chatbot',
  'consent',
  'contact',
  'contactPage',
  'errorPage',
  'errors',
  'internationalNav',
  'nav',
  'newsletter',
  'whatsapp',
] as const;

const footerKeys = [
  'about',
  'beautySalonBatumi',
  'cookieNotice',
  'description',
  'emailPlaceholder',
  'facebook',
  'hours',
  'information',
  'instagram',
  'newsletterTitle',
  'privacy',
  'socialDescription',
  'stayConnected',
  'subscribe',
  'terms',
  'treatments',
  'visitUs',
] as const;

const homeEditorialKeys = [
  'carousel',
  'concerns',
  'concernItems',
  'cta',
  'heroSlides',
  'journal',
  'philosophy',
  'popularTreatments',
  'portfolio',
  'stats',
  'trendItems',
  'visitUs',
] as const;

const bookingPageKeys = [
  'additionalNotes',
  'back',
  'bookAnother',
  'booked',
  'bookingConfirmed',
  'bookingDetails',
  'bookingFailed',
  'bookingNote',
  'bookingStatus',
  'bookingSummary',
  'confirmBooking',
  'continue',
  'date',
  'dialogDescription',
  'dialogTitle',
  'done',
  'email',
  'emailAddress',
  'emailPlaceholder',
  'formNotReady',
  'fullName',
  'message',
  'messagePlaceholder',
  'namePlaceholder',
  'notesPlaceholder',
  'phone',
  'phoneNumber',
  'phonePlaceholder',
  'preferredDate',
  'preferredTime',
  'rateLimitMessage',
  'requestBooking',
  'selectDate',
  'selectDateTime',
  'selectTime',
  'selectTimeSlot',
  'selectTreatment',
  'selectTreatmentPlaceholder',
  'slotConflict',
  'successMessage',
  'successTitle',
  'thankYou',
  'time',
  'treatment',
  'unexpectedError',
] as const;

const treatmentCategoryKeys = [
  'botox',
  'dermal-fillers',
  'skin-treatments',
  'hair-treatments',
] as const;

const conditionCategoryKeys = [
  'ageing-skin',
  'acne',
  'pigmentation',
  'scars',
  'hair-loss',
  'rosacea',
  'stretch-marks',
  'dry-skin',
  'sensitive-skin',
  'acne-scarring',
  'uneven-skin-tone',
  'blemishes',
  'collagen-stimulating',
  'fine-lines-wrinkles',
  'loss-of-firmness',
  'other-conditions',
] as const;

function asRecord(value: unknown): MessageRecord {
  return value && typeof value === 'object' ? (value as MessageRecord) : {};
}

function pick(source: unknown, keys: readonly string[]): MessageRecord {
  const record = asRecord(source);

  return Object.fromEntries(
    keys.flatMap((key) => (key in record ? [[key, record[key]]] : []))
  );
}

function pickNames(source: unknown, keys: readonly string[]): MessageRecord {
  const record = asRecord(source);

  return Object.fromEntries(
    keys.flatMap((key) => {
      const name = asRecord(record[key]).name;
      return typeof name === 'string' ? [[key, { name }]] : [];
    })
  );
}

/**
 * Server components can read the complete locale dictionary directly. The
 * client only receives fields used by interactive components, which prevents
 * dormant legacy copy from being serialized into every public HTML response.
 */
export function getClientMessages<T extends MessageRecord>(messages: T): T {
  const clientMessages: MessageRecord = {};

  for (const namespace of passthroughNamespaces) {
    if (namespace in messages) {
      clientMessages[namespace] = messages[namespace];
    }
  }

  clientMessages.site = pick(messages.site, ['brandName', 'brandShort']);
  clientMessages.footer = pick(messages.footer, footerKeys);
  clientMessages.homeEditorial = pick(messages.homeEditorial, homeEditorialKeys);
  clientMessages.bookingPage = pick(messages.bookingPage, bookingPageKeys);
  clientMessages.treatmentContent = pickNames(
    messages.treatmentContent,
    treatmentCategoryKeys
  );
  clientMessages.conditionContent = pickNames(
    messages.conditionContent,
    conditionCategoryKeys
  );

  return clientMessages as T;
}
