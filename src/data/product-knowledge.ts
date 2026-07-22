export type ProductKnowledgeStatus =
  | 'published-service-name'
  | 'salon-evidence-required';

export interface ProductKnowledgeEntry {
  id: string;
  title: string;
  category: 'prescription-medicine' | 'medical-device' | 'adjunct' | 'professional-skin-product';
  relevantTreatmentSlugs: readonly string[];
  brandExamples: readonly string[];
  activeIngredientOrComponents: string;
  role: string;
  mechanism: string;
  authorizationBoundary: string;
  salonUseStatus: ProductKnowledgeStatus;
  salonEvidenceNeeded: readonly string[];
  clientSafeAnswer: string;
  sourceUrls: readonly string[];
}

const injectableEvidence = [
  'Exact trade name and product variant',
  'Photo of sealed packaging and the client information leaflet',
  'Georgia registration or lawful market-access evidence',
  'Supplier invoice and cold-chain or storage record where applicable',
  'Batch or lot number and expiry-date recording process',
  'Named professional authorized to prescribe or administer the product',
  'Written consent, aftercare, complication, and emergency protocols',
] as const;

export const productKnowledgeEntries: readonly ProductKnowledgeEntry[] = [
  {
    id: 'botulinum-toxin-type-a',
    title: 'Botulinum toxin type A products',
    category: 'prescription-medicine',
    relevantTreatmentSlugs: ['anti-wrinkle', 'masseter-botox', 'hyperhidrosis'],
    brandExamples: [
      'BOTOX / BOTOX Cosmetic',
      'Azzalure',
      'Alluzience',
      'BOCOUTURE',
      'Letybo',
      'Nuceiva',
      'Relfydess',
      'Xeomin',
    ],
    activeIngredientOrComponents:
      'Product-specific preparations of botulinum toxin type A. The exact toxin name, formulation, excipients, potency assay, and approved uses differ by product.',
    role:
      'Used in appropriately selected indications to temporarily reduce cholinergic signalling to targeted muscles or sweat glands.',
    mechanism:
      'Botulinum toxin type A inhibits acetylcholine release at cholinergic nerve endings. In a targeted muscle this temporarily reduces contraction; when used intradermally for an authorized sweating indication it can temporarily reduce signalling to eccrine sweat glands.',
    authorizationBoundary:
      'Trade names are not interchangeable and their potency units cannot be directly compared or converted. Approved indications differ by product and country. The reviewed BOTOX Cosmetic label covers selected facial lines and platysma bands, while a BOTOX therapeutic label covers primary axillary hyperhidrosis. Jaw slimming or masseter contouring is not listed in those reviewed cosmetic indications and therefore needs explicit local clinical and legal verification.',
    salonUseStatus: 'salon-evidence-required',
    salonEvidenceNeeded: injectableEvidence,
    clientSafeAnswer:
      'Silk has not yet supplied evidence for the exact botulinum-toxin brand used. The chatbot may explain the product class, but it must ask the salon to confirm the trade name, intended use, practitioner, and authorization for the individual appointment.',
    sourceUrls: [
      'https://www.medicines.org.uk/emc/ingredient/1712',
      'https://www.medicines.org.uk/emc/product/600/smpc',
      'https://www.medicines.org.uk/emc/product/6584/smpc',
      'https://www.medicines.org.uk/emc/product/436/smpc',
      'https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/103000s5316s5319s5323s5326s5331lbl.pdf',
    ],
  },
  {
    id: 'hyaluronic-acid-lip-fillers',
    title: 'Hyaluronic-acid lip fillers',
    category: 'medical-device',
    relevantTreatmentSlugs: ['lip-fillers'],
    brandExamples: ['JUVÉDERM VOLBELLA XC', 'Restylane Kysse', 'RHA 3'],
    activeIngredientOrComponents:
      'A product-specific cross-linked hyaluronic-acid gel. Some variants include lidocaine; cross-linking agents, HA concentration, gel properties, and authorized injection areas differ.',
    role:
      'Injected by an appropriately authorized professional to temporarily add or restore volume in a specifically authorized facial area.',
    mechanism:
      'Hyaluronic acid is a polysaccharide that combines with water. In a cross-linked injectable gel it occupies space in tissue and creates a temporary filling or smoothing effect until the material is gradually absorbed.',
    authorizationBoundary:
      'An authorization for one filler, body area, age group, or country does not apply automatically to another. The examples are officially documented for lip use in the United States; that does not prove Georgian authorization, current supply, or use by Silk. Needle-free filler devices and products sold directly to the public are not acceptable substitutes.',
    salonUseStatus: 'salon-evidence-required',
    salonEvidenceNeeded: injectableEvidence,
    clientSafeAnswer:
      'Silk has not yet supplied evidence for the exact filler brand and variant used. The chatbot must ask the salon to confirm the sealed product, intended lip indication, whether it contains lidocaine, and the professional responsible before making any brand claim.',
    sourceUrls: [
      'https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/fda-approved-dermal-fillers',
      'https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/dermal-fillers-soft-tissue-fillers',
      'https://www.fda.gov/medical-devices/recently-approved-devices/juvedermr-volbellar-xc-p110033-s053',
      'https://www.restylaneusa.com/docs/Restylane-Kysse-IFU',
      'https://www.fda.gov/medical-devices/recently-approved-devices/rha-3-dermal-filler-p170002s030',
    ],
  },
  {
    id: 'topical-local-anaesthetic',
    title: 'Topical local anaesthetic',
    category: 'adjunct',
    relevantTreatmentSlugs: [
      'anti-wrinkle',
      'masseter-botox',
      'hyperhidrosis',
      'lip-fillers',
      'skinpen-microneedling',
    ],
    brandExamples: ['EMLA (example only)', 'Other product-specific lidocaine formulations'],
    activeIngredientOrComponents:
      'Product-specific local anaesthetic ingredients. EMLA contains lidocaine and prilocaine; other products can differ.',
    role:
      'May be selected by the responsible professional to temporarily numb intact skin before an appropriate procedure.',
    mechanism:
      'Local anaesthetics temporarily inhibit the ion movement needed for nerve impulses, reducing surface pain sensation while pressure or touch may still be felt.',
    authorizationBoundary:
      'Numbing is not automatically suitable for every client, area, or procedure. Product choice, application, allergy review, skin condition, and timing must follow the exact label and professional assessment.',
    salonUseStatus: 'salon-evidence-required',
    salonEvidenceNeeded: [
      'Exact product and active ingredients',
      'Current leaflet and local authorization status',
      'Allergy and contraindication screening process',
      'Written application and removal protocol',
    ],
    clientSafeAnswer:
      'A numbing product may be available, but Silk must confirm the exact product and whether it is appropriate for the planned treatment. The chatbot must not tell a client to apply a medicine themselves.',
    sourceUrls: [
      'https://www.medicines.org.uk/emc/product/871/smpc',
      'https://www.medicines.org.uk/emc/product/871/pil',
    ],
  },
  {
    id: 'sterile-saline-diluent',
    title: 'Sterile unpreserved 0.9% sodium chloride diluent',
    category: 'adjunct',
    relevantTreatmentSlugs: ['anti-wrinkle', 'masseter-botox', 'hyperhidrosis'],
    brandExamples: ['Brand must match locally authorized sterile supply'],
    activeIngredientOrComponents: '0.9% sodium chloride for injection, when required by the exact product label.',
    role:
      'Some botulinum-toxin products are supplied as powder and require reconstitution with the diluent specified by their official product information.',
    mechanism:
      'The sterile diluent dissolves or dilutes the medicine to the product-specific concentration prepared by the administering professional; it is not the active treatment.',
    authorizationBoundary:
      'Preparation instructions are brand- and vial-specific. The chatbot and public blog must never provide a dilution recipe or convert units between toxin products.',
    salonUseStatus: 'salon-evidence-required',
    salonEvidenceNeeded: [
      'Exact toxin product leaflet',
      'Exact locally authorized diluent',
      'Storage, reconstitution, labelling, single-use, and disposal procedure',
    ],
    clientSafeAnswer:
      'Some toxin products require sterile saline preparation by the administering professional. The exact preparation is product-specific and is not client self-care information.',
    sourceUrls: [
      'https://www.medicines.org.uk/emc/product/436/smpc',
      'https://www.medicines.org.uk/emc/product/15145/smpc',
    ],
  },
  {
    id: 'hyaluronidase',
    title: 'Hyaluronidase',
    category: 'prescription-medicine',
    relevantTreatmentSlugs: ['lip-fillers'],
    brandExamples: ['Hyalase (official product-information example)'],
    activeIngredientOrComponents: 'Hyaluronidase enzyme; formulation and source are product-specific.',
    role:
      'A medicine used in selected clinical settings because it temporarily breaks down hyaluronic acid in connective tissue. Its role in a filler complication or elective correction requires a clinician-led protocol.',
    mechanism:
      'Hyaluronidase temporarily and reversibly depolymerizes hyaluronic acid, increasing tissue permeability and promoting dispersion or resorption.',
    authorizationBoundary:
      'The reviewed product information does not itself establish a cosmetic filler-dissolving indication in Georgia. Stocking, prescribing, allergy risk, consent, use, escalation, and emergency transfer must be defined by the responsible clinical lead and local rules.',
    salonUseStatus: 'salon-evidence-required',
    salonEvidenceNeeded: [
      'Exact product, local authorization, supplier, batch, and expiry',
      'Named prescriber and administering professional',
      'Written vascular-occlusion, allergy, observation, escalation, and emergency-transfer protocols',
      'Training records and documented emergency equipment checks',
    ],
    clientSafeAnswer:
      'Questions about dissolving filler or a possible complication require immediate human clinical review. The chatbot must not recommend hyaluronidase, assess urgency, or provide treatment instructions.',
    sourceUrls: ['https://www.medicines.org.uk/emc/product/1505/smpc'],
  },
  {
    id: 'skinpen-system',
    title: 'SkinPen Precision system and single-use cartridge',
    category: 'medical-device',
    relevantTreatmentSlugs: ['skinpen-microneedling'],
    brandExamples: ['SkinPen Precision', 'SkinPen Precision Elite', 'Skinfuse Lift HG'],
    activeIngredientOrComponents:
      'A powered microneedling device, sterile single-use needle cartridge, and manufacturer-described hydrogel used to reduce friction during treatment.',
    role:
      'Creates controlled microscopic channels using an adjustable, single-use cartridge while hydrogel protects against abrasion and friction.',
    mechanism:
      'The reciprocating needle cartridge creates controlled microchannels that initiate a skin-remodelling response. No injectable filler is placed in the skin as part of the cleared SkinPen mechanism.',
    authorizationBoundary:
      'The official sources reviewed describe United States indications and labelling. Silk’s exact device model, cartridge, hydrogel, training, local market status, and maintenance records still need owner evidence.',
    salonUseStatus: 'published-service-name',
    salonEvidenceNeeded: [
      'Device model and serial number',
      'Local purchase and market-access evidence',
      'Single-use cartridge inventory and disposal procedure',
      'Skinfuse Lift HG or other manufacturer-authorized glide product',
      'Device maintenance and operator training records',
    ],
    clientSafeAnswer:
      'The website publishes SkinPen as the service name. Before stating that a particular model, cartridge, or hydrogel is currently used, the salon must verify its inventory and records.',
    sourceUrls: [
      'https://skinpen.com/faqs/',
      'https://skinpen.com/wp-content/uploads/2024/11/SkinPen-Patient-Labeling.pdf',
      'https://skinpen.com/for-providers/',
    ],
  },
  {
    id: 'is-clinical-fire-and-ice',
    title: 'iS Clinical Fire & Ice professional protocol',
    category: 'professional-skin-product',
    relevantTreatmentSlugs: ['is-clinical-fire-ice-peel'],
    brandExamples: ['Intensive Resurfacing Masque', 'Rejuvenating Masque'],
    activeIngredientOrComponents:
      'A professional warming resurfacing masque followed by a cooling rejuvenating masque; the exact current formulas and supporting products must be checked against the manufacturer packaging.',
    role:
      'A two-phase professional facial protocol intended to resurface and then cool or rejuvenate the skin.',
    mechanism:
      'The manufacturer describes an intensive resurfacing phase with warming sensation followed by a rejuvenating cooling phase. Client suitability and supporting products are selected by the professional.',
    authorizationBoundary:
      'The website publishes the branded service name, but Silk must still verify current authentic stock, professional-use instructions, formula version, supplier, and operator training.',
    salonUseStatus: 'published-service-name',
    salonEvidenceNeeded: [
      'Current product packaging and professional protocol',
      'Authorized supplier invoice, lot numbers, and expiry dates',
      'Ingredient and allergy information',
      'Operator training and aftercare protocol',
    ],
    clientSafeAnswer:
      'The website publishes iS Clinical Fire & Ice as the service name. The salon must confirm the current professional products and formula before the chatbot answers ingredient or allergy questions.',
    sourceUrls: ['https://www.isclinical.com/pages/fire-and-ice'],
  },
];

export const unresolvedSalonProductAreas = [
  {
    treatmentSlug: 'nails',
    needed:
      'Exact manicure, pedicure, gel, base, colour, top-coat, removal, hygiene, disinfection, allergy, and patch-test products and protocols.',
  },
  {
    treatmentSlug: 'lashes',
    needed:
      'Exact lift, tint, adhesive, cleanser, shield, aftercare, allergy, eye-safety, and patch-test products and protocols for each bookable lash service.',
  },
] as const;

export function getProductKnowledgeForTreatment(
  slug: string
): readonly ProductKnowledgeEntry[] {
  return productKnowledgeEntries.filter((entry) => entry.relevantTreatmentSlugs.includes(slug));
}
