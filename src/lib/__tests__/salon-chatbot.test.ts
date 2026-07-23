import { describe, expect, it } from 'vitest';
import {
  resolveSalonQuestion,
  type ChatbotIntent,
} from '../salon-chatbot';
import { getSalonChatbotKnowledge } from '../salon-chatbot-knowledge';

function expectIntent(question: string, locale: string, intent: ChatbotIntent) {
  expect(resolveSalonQuestion(question, locale).intent).toBe(intent);
}

describe('salon chatbot question resolution', () => {
  it('finds an exact service before returning approved price and duration data', () => {
    const priceAnswer = resolveSalonQuestion('How much is lip filler?', 'en');
    const durationAnswer = resolveSalonQuestion('How long does lip filler take?', 'en');

    expect(priceAnswer).toMatchObject({
      intent: 'price',
      topicId: 'lip-filler',
      bookingTreatmentIds: ['lip-filler-1ml'],
      treatmentSlug: 'lip-fillers',
    });
    expect(durationAnswer).toMatchObject({
      intent: 'duration',
      topicId: 'lip-filler',
      bookingTreatmentIds: ['lip-filler-1ml'],
    });
  });

  it('never confuses forehead filler with forehead anti-wrinkle injections', () => {
    expect(resolveSalonQuestion('I want filler for my forehead. What is the price?', 'en')).toMatchObject({
      intent: 'clarification',
      topicId: 'forehead-filler',
      bookingTreatmentIds: [],
      treatmentSlug: null,
      requiresHuman: true,
    });

    expect(resolveSalonQuestion('What does Botox for forehead lines cost?', 'en')).toMatchObject({
      intent: 'price',
      topicId: 'forehead-botox',
      bookingTreatmentIds: ['botox-forehead'],
      treatmentSlug: 'anti-wrinkle',
      requiresHuman: false,
    });
  });

  it('returns both published options for a general Botox price question', () => {
    expect(resolveSalonQuestion('Сколько стоит ботокс?', 'ru')).toMatchObject({
      intent: 'price',
      topicId: 'botox',
      bookingTreatmentIds: ['botox-forehead', 'botox-full-face'],
    });
  });

  it('recognizes common customer intents in every supported script', () => {
    expectIntent('რამდენ ხანს გრძელდება მიკრონიდლინგი?', 'ka', 'duration');
    expectIntent('Randevumu iptal etmek istiyorum', 'tr', 'cancellation');
    expectIntent('أتناول أدوية، هل العلاج مناسب؟', 'ar', 'medical');
    expectIntent('יש לי קושי לנשום אחרי טיפול', 'he', 'emergency');
  });

  it('answers practical salon questions that lead visitors toward a booking', () => {
    expectIntent('Where is the salon?', 'en', 'location');
    expectIntent('Когда вы открыты?', 'ru', 'hours');
    expectIntent('Telefon numaranız nedir?', 'tr', 'contact');
    expectIntent('ما اللغات التي تتحدثونها؟', 'ar', 'languages');
    expectIntent('אפשר לשלם בכרטיס?', 'he', 'payment');
  });

  it('recognizes a desired result even when the visitor does not know the treatment name', () => {
    expect(resolveSalonQuestion('I want fuller lips. What does it cost?', 'en')).toMatchObject({
      intent: 'price',
      topicId: 'lip-filler',
      bookingTreatmentIds: ['lip-filler-1ml'],
    });
  });

  it.each([
    ['How much is a consultation?', 'consultation-not-sure'],
    ['Full face Botox price', 'botox-full-face'],
    ['Russian volume lashes price', 'russian-volume-lashes'],
    ['Gel manicure price', 'gel-manicure'],
    ['Nail art price', 'nail-art'],
  ])('maps a specific service question to only its exact booking option', (question, bookingId) => {
    const resolution = resolveSalonQuestion(question, 'en');

    expect(resolution.intent).toBe('price');
    expect(resolution.bookingTreatmentIds).toEqual([bookingId]);
  });

  it('routes brand questions and unverified answers to salon staff', () => {
    expect(resolveSalonQuestion('Hangi marka botoks kullanıyorsunuz?', 'tr')).toMatchObject({
      intent: 'brand',
      requiresHuman: true,
    });
    expect(resolveSalonQuestion('Do you offer forehead filler?', 'en')).toMatchObject({
      intent: 'clarification',
      requiresHuman: true,
    });
  });

  it('lets guided quick actions bypass wording differences without bypassing safety', () => {
    expect(resolveSalonQuestion('prijzen', 'en', 'price')).toMatchObject({
      intent: 'price',
      bookingTreatmentIds: [],
    });
    expect(resolveSalonQuestion('medicine', 'en', 'price')).toMatchObject({
      intent: 'medical',
      requiresHuman: true,
    });
  });

  it('falls back honestly when no approved answer can be selected', () => {
    expect(resolveSalonQuestion('Can you answer a very unusual question?', 'en')).toMatchObject({
      intent: 'unknown',
      requiresHuman: true,
      bookingTreatmentIds: [],
      treatmentSlug: null,
    });
  });

  it('reads exact price, duration and planning facts from the website sources', () => {
    const resolution = resolveSalonQuestion('How much is lip filler?', 'en');
    const knowledge = getSalonChatbotKnowledge(resolution, 'en');

    expect(knowledge.bookingOptions).toEqual([
      expect.objectContaining({
        id: 'lip-filler-1ml',
        priceGel: 350,
        durationMinutes: 45,
      }),
    ]);
    expect(knowledge.planning?.slug).toBe('lip-fillers');
    expect(knowledge.treatmentHref).toBe('/treatments/lip-fillers');
    expect(knowledge.relatedArticleHref).toBe(
      '/blog/botox-fillers-batumi-consultation-guide'
    );
    expect(knowledge.sources).toEqual([
      'booking-menu',
      'treatment-guide',
      'knowledge-library',
    ]);
  });

  it('does not invent website facts for an unlisted forehead filler service', () => {
    const resolution = resolveSalonQuestion('Price and duration for forehead filler?', 'en');
    const knowledge = getSalonChatbotKnowledge(resolution, 'en');

    expect(knowledge.bookingOptions).toEqual([]);
    expect(knowledge.planning).toBeNull();
    expect(knowledge.treatmentHref).toBeNull();
    expect(knowledge.relatedArticleHref).toBe(
      '/blog/botox-fillers-batumi-consultation-guide'
    );
  });

  it('derives general price ranges and salon details from published website data', () => {
    const resolution = resolveSalonQuestion('What are your prices?', 'en');
    const knowledge = getSalonChatbotKnowledge(resolution, 'en');

    expect(knowledge.publishedPriceRanges).toEqual([
      { category: 'injectables', minimumGel: 300, maximumGel: 700 },
      { category: 'skin', minimumGel: 150, maximumGel: 350 },
      { category: 'lashes', minimumGel: 80, maximumGel: 180 },
      { category: 'hair', minimumGel: 250, maximumGel: 280 },
      { category: 'nails', minimumGel: 55, maximumGel: 90 },
    ]);
    expect(knowledge.salon).toMatchObject({
      address: 'Zurab Gorgiladze 63',
      city: 'Batumi',
      phone: '+995 577 34 57 67',
      whatsappPhone: '+995 577 28 68 55',
    });
  });
});
