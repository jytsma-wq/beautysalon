import { indexableTreatmentSlugs } from '@/lib/search-index-policy';

export const appointmentPolicies = {
  bookingRequestConfirmationHours: 24,
  cancellationNoticeHours: 48,
  rescheduleNoticeHours: 24,
} as const;

export type ChatbotSupportedTreatmentSlug = (typeof indexableTreatmentSlugs)[number];

export interface TreatmentPlanningKnowledge {
  slug: ChatbotSupportedTreatmentSlug;
  results: string;
  downtime: string;
  sessions: string;
  preparation: string;
  comfort: string;
  safety: string;
  sourceUrls?: readonly string[];
}

const clinicalPreparation =
  'Before booking, tell the salon about relevant health conditions, allergies, pregnancy or breastfeeding, medicines, recent procedures, and any active irritation in the treatment area. Follow the instructions given for your appointment and do not stop prescribed medicine unless your prescriber tells you to.';

const injectionSafety =
  'Suitability, product choice, dose, and treatment area must be confirmed by the practitioner after an individual assessment. The website and chatbot must not diagnose a condition or guarantee a result.';

const skinSafety =
  'Suitability must be confirmed before treatment. Active irritation, infection, recent procedures, medicines, or other health factors may change the plan. Unexpected or worsening symptoms need direct human review; urgent symptoms need local emergency care.';

export const treatmentPlanningKnowledge: Record<
  ChatbotSupportedTreatmentSlug,
  TreatmentPlanningKnowledge
> = {
  'anti-wrinkle': {
    slug: 'anti-wrinkle',
    results:
      'Changes may begin to appear within a few days and usually develop over about two weeks. The current service page estimates that results may last 3–6 months, but timing varies by treatment area, dose, product, and individual response.',
    downtime:
      'There is usually no planned recovery period, although temporary redness, swelling, tenderness, or bruising can occur at injection sites.',
    sessions:
      'The initial treatment is one appointment. Any review or maintenance schedule is decided after consultation and response to treatment.',
    preparation: clinicalPreparation,
    comfort:
      'The treatment uses brief injections with a fine needle. Sensation varies; ask the practitioner which comfort measures are appropriate for the planned area.',
    safety: injectionSafety,
  },
  'masseter-botox': {
    slug: 'masseter-botox',
    results:
      'Jaw tension effects may begin earlier, while visible contour changes can take about 4–6 weeks to develop. Duration varies and must be discussed for the individual treatment plan.',
    downtime:
      'There is usually no planned recovery period, but temporary injection-site redness, tenderness, swelling, or bruising can occur.',
    sessions:
      'The initial treatment is one appointment. Review and any repeat treatment are based on the practitioner’s assessment and the client’s response.',
    preparation: clinicalPreparation,
    comfort:
      'Several small injections are placed in the jaw muscles. Sensation varies; the practitioner can explain suitable comfort measures during consultation.',
    safety: injectionSafety,
  },
  hyperhidrosis: {
    slug: 'hyperhidrosis',
    results:
      'The current service page estimates that reduced sweating may last 6–12 months. Onset and duration vary by treatment area and individual response.',
    downtime:
      'Most normal activities can usually resume promptly, but temporary injection-site tenderness, redness, swelling, or bruising can occur. Follow the area-specific aftercare provided.',
    sessions:
      'The initial treatment is one appointment. The practitioner decides whether and when repeat treatment is appropriate.',
    preparation: clinicalPreparation,
    comfort:
      'The treatment involves multiple small injections. Sensitivity differs by body area; ask which comfort measures are available for the planned area.',
    safety: injectionSafety,
  },
  'lip-fillers': {
    slug: 'lip-fillers',
    results:
      'Volume is visible immediately, while the settled result is assessed after swelling reduces. The current service page estimates 6–12 months, but longevity varies by product, amount, anatomy, metabolism, and aftercare.',
    downtime:
      'Swelling, tenderness, and bruising can occur and may affect social plans for several days. The practitioner will explain what is expected and when to seek help.',
    sessions:
      'The plan is confirmed at consultation. Review or additional treatment is never automatic and depends on the settled result and practitioner assessment.',
    preparation: clinicalPreparation,
    comfort:
      'The service may use a needle or cannula. Comfort options depend on the exact product and plan and are confirmed before treatment.',
    safety:
      'Lip filler is an injectable procedure that requires individual assessment and informed consent. The chatbot must route questions about complications, medicines, pregnancy, suitability, or unexpected symptoms to the salon; urgent symptoms need local emergency care.',
  },
  'skinpen-microneedling': {
    slug: 'skinpen-microneedling',
    results:
      'Improvement is gradual as the skin remodels. SkinPen says changes may continue for 3–6 months, and the provider determines the appropriate treatment plan.',
    downtime:
      'Temporary redness, dryness, tightness, or peeling is commonly described for about 24–72 hours. Individual response can vary.',
    sessions:
      'A series is often recommended, commonly spaced around four weeks apart, but the number of sessions must be set after assessment rather than promised in advance.',
    preparation: clinicalPreparation,
    comfort:
      'SkinPen describes light pressure, a mild buzzing sensation, and minimal discomfort; a topical anaesthetic may be used when appropriate.',
    safety: skinSafety,
    sourceUrls: [
      'https://www.skinpen.com/the-treatment',
      'https://www.skinpen.com/faqs/',
    ],
  },
  'is-clinical-fire-ice-peel': {
    slug: 'is-clinical-fire-ice-peel',
    results:
      'The treatment is intended to refine the look of texture and leave skin looking refreshed. The degree and duration of change vary, so event timing and expectations should be confirmed with the salon.',
    downtime:
      'The manufacturer describes little to no downtime. Temporary warmth, redness, dryness, or sensitivity may still occur and individual response varies.',
    sessions:
      'It may be booked as a single treatment or as part of a plan. Frequency is selected after the skin and goals are assessed.',
    preparation:
      'Tell the salon about active irritation, recent sun exposure, recent exfoliating or skin procedures, allergies, medicines, and important event dates. Follow the preparation instructions provided for your appointment.',
    comfort:
      'The professional protocol uses an intensive warming resurfacing masque followed by a cooling rejuvenating masque. Sensation varies by client.',
    safety: skinSafety,
    sourceUrls: ['https://www.isclinical.com/pages/fire-and-ice'],
  },
  nails: {
    slug: 'nails',
    results:
      'The finished shape and colour are visible at the appointment. Wear time depends on the selected service, natural nail growth, daily activity, and home care.',
    downtime:
      'No recovery period is normally planned. The nail specialist will explain any setting time and immediate care for the selected finish.',
    sessions:
      'One appointment completes the selected service. Removal or maintenance timing depends on the product and nail growth.',
    preparation:
      'Tell the salon what is currently on the nails and whether removal is needed. Mention known product allergies, pain, swelling, broken skin, or a suspected infection before the appointment.',
    comfort:
      'The appointment includes preparation, shaping, cuticle care, and the chosen finish. Tell the nail specialist immediately if any step feels painful or causes burning.',
    safety:
      'Pain, swelling, broken skin, or a suspected nail infection needs human review before service. The chatbot must not diagnose nail conditions and should suggest medical advice when symptoms may be clinical.',
  },
  lashes: {
    slug: 'lashes',
    results:
      'The visible finish is immediate. How long it lasts depends on the selected lash service, the natural lash cycle, products used, and aftercare.',
    downtime:
      'No recovery period is normally planned. Water, steam, cosmetics, or oil-based product restrictions depend on the exact service and will be confirmed after the appointment.',
    sessions:
      'One appointment completes the selected service. Maintenance timing depends on whether the client books a lift, styling service, or fuller lash finish.',
    preparation:
      'Arrive with the eye area clean if possible and tell the salon about allergies, sensitivity, irritation, eye conditions, recent eye procedures, or current eye treatment before booking.',
    comfort:
      'The eye area is prepared and the selected service is completed while comfort is checked. Stinging, burning, or pain should be reported immediately.',
    safety:
      'Active redness, swelling, discharge, pain, or a suspected eye infection needs human review before service. The chatbot must not diagnose eye symptoms and should recommend clinical care when appropriate.',
  },
};

export const unsupportedTreatmentHandoff =
  'This service has not yet been verified for automated answers. Please ask the salon to confirm availability, price, duration, preparation, suitability, and aftercare before booking.';

export function getTreatmentPlanningKnowledge(
  slug: string
): TreatmentPlanningKnowledge | null {
  return treatmentPlanningKnowledge[slug as ChatbotSupportedTreatmentSlug] ?? null;
}

export function getTreatmentAnswerOrHandoff(slug: string):
  | { kind: 'verified'; knowledge: TreatmentPlanningKnowledge }
  | { kind: 'handoff'; message: string } {
  const knowledge = getTreatmentPlanningKnowledge(slug);

  return knowledge
    ? { kind: 'verified', knowledge }
    : { kind: 'handoff', message: unsupportedTreatmentHandoff };
}
