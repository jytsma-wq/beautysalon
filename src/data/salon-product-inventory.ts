export type SalonProductArea =
  | 'Injectables'
  | 'SkinPen'
  | 'Fire & Ice'
  | 'Nails'
  | 'Lashes'
  | 'Hair'
  | 'Hygiene and safety';

export interface SalonProductVerification {
  exactBrand: string;
  variantOrModel: string;
  verifiedUse: string;
  supplier: string;
  evidenceReference: string;
  batchOrLotProcess: string;
  expiryProcess: string;
  storageOrMaintenance: string;
  approvedBy: string;
  approvedAt: string;
}

export interface SalonProductInventoryItem {
  id: string;
  area: SalonProductArea;
  product: string;
  referenceBrands: readonly string[];
  usedFor: string;
  relevantTreatmentSlugs: readonly string[];
  exactSalonBrand: string | null;
  staffStatus: 'confirmation-required' | 'confirmed';
  publicClaimAllowed: boolean;
  verification: SalonProductVerification | null;
}

const pendingItem = (
  item: Omit<
    SalonProductInventoryItem,
    'exactSalonBrand' | 'staffStatus' | 'publicClaimAllowed' | 'verification'
  >
): SalonProductInventoryItem => ({
  ...item,
  exactSalonBrand: null,
  staffStatus: 'confirmation-required',
  publicClaimAllowed: false,
  verification: null,
});

export const salonProductInventory: readonly SalonProductInventoryItem[] = [
  pendingItem({
    id: 'injectable-botulinum-toxin',
    area: 'Injectables',
    product: 'Botulinum toxin type A medicine',
    referenceBrands: [
      'BOTOX / BOTOX Cosmetic',
      'Azzalure',
      'Alluzience',
      'BOCOUTURE',
      'Letybo',
      'Nuceiva',
      'Relfydess',
      'Xeomin',
    ],
    usedFor: 'Confirm separately for anti-wrinkle, masseter, and hyperhidrosis services; uses and authorization are product- and country-specific.',
    relevantTreatmentSlugs: ['anti-wrinkle', 'masseter-botox', 'hyperhidrosis'],
  }),
  pendingItem({
    id: 'injectable-ha-lip-filler',
    area: 'Injectables',
    product: 'Hyaluronic-acid lip filler, exact variant',
    referenceBrands: ['JUVÉDERM VOLBELLA XC', 'Restylane Kysse', 'RHA 3'],
    usedFor: 'Lip volume or contour only after exact product indication and individual suitability are confirmed.',
    relevantTreatmentSlugs: ['lip-fillers'],
  }),
  pendingItem({
    id: 'injectable-topical-anaesthetic',
    area: 'Injectables',
    product: 'Topical local anaesthetic',
    referenceBrands: ['EMLA (official product-information example)'],
    usedFor: 'Optional surface numbing when selected by the responsible professional.',
    relevantTreatmentSlugs: [
      'anti-wrinkle',
      'masseter-botox',
      'hyperhidrosis',
      'lip-fillers',
    ],
  }),
  pendingItem({
    id: 'injectable-saline',
    area: 'Injectables',
    product: 'Sterile unpreserved 0.9% sodium chloride for injection',
    referenceBrands: [],
    usedFor: 'Product-specific reconstitution only when required by the exact medicine label.',
    relevantTreatmentSlugs: ['anti-wrinkle', 'masseter-botox', 'hyperhidrosis'],
  }),
  pendingItem({
    id: 'injectable-hyaluronidase',
    area: 'Injectables',
    product: 'Hyaluronidase medicine and protocol',
    referenceBrands: ['Hyalase (official product-information example)'],
    usedFor: 'Clinician-led hyaluronic-acid filler correction or complication protocol; never chatbot-directed self-care.',
    relevantTreatmentSlugs: ['lip-fillers'],
  }),
  pendingItem({
    id: 'injectable-antiseptic',
    area: 'Injectables',
    product: 'Skin preparation or antiseptic product',
    referenceBrands: [],
    usedFor: 'Product- and area-specific skin preparation before an injectable procedure.',
    relevantTreatmentSlugs: [
      'anti-wrinkle',
      'masseter-botox',
      'hyperhidrosis',
      'lip-fillers',
    ],
  }),
  pendingItem({
    id: 'injectable-syringes-needles-cannulas',
    area: 'Injectables',
    product: 'Sterile single-use syringes, needles, and cannulas',
    referenceBrands: [],
    usedFor: 'Exact device type and size selected by the administering professional for the product and area.',
    relevantTreatmentSlugs: [
      'anti-wrinkle',
      'masseter-botox',
      'hyperhidrosis',
      'lip-fillers',
    ],
  }),
  pendingItem({
    id: 'injectable-aftercare-consumables',
    area: 'Injectables',
    product: 'Sterile gauze, swabs, cold pack, and approved aftercare materials',
    referenceBrands: [],
    usedFor: 'Procedure support and product-specific aftercare.',
    relevantTreatmentSlugs: [
      'anti-wrinkle',
      'masseter-botox',
      'hyperhidrosis',
      'lip-fillers',
    ],
  }),
  pendingItem({
    id: 'skinpen-device',
    area: 'SkinPen',
    product: 'Microneedling device and model',
    referenceBrands: ['SkinPen Precision', 'SkinPen Precision Elite'],
    usedFor: 'Controlled microneedling after assessment; model and serial number must match salon records.',
    relevantTreatmentSlugs: ['skinpen-microneedling'],
  }),
  pendingItem({
    id: 'skinpen-cartridge',
    area: 'SkinPen',
    product: 'Sterile single-use needle cartridge',
    referenceBrands: ['SkinPen cartridge', 'SkinPen Elite Cartridge Unit'],
    usedFor: 'Single-client cartridge compatible with the verified device model.',
    relevantTreatmentSlugs: ['skinpen-microneedling'],
  }),
  pendingItem({
    id: 'skinpen-hydrogel',
    area: 'SkinPen',
    product: 'Manufacturer-described treatment hydrogel',
    referenceBrands: ['Skinfuse Lift HG'],
    usedFor: 'Protects against abrasion and friction during the manufacturer-described procedure.',
    relevantTreatmentSlugs: ['skinpen-microneedling'],
  }),
  pendingItem({
    id: 'skinpen-cleanser-antiseptic',
    area: 'SkinPen',
    product: 'Pre-treatment cleanser and antiseptic',
    referenceBrands: [],
    usedFor: 'Skin preparation according to the verified device protocol.',
    relevantTreatmentSlugs: ['skinpen-microneedling'],
  }),
  pendingItem({
    id: 'skinpen-anaesthetic',
    area: 'SkinPen',
    product: 'Optional topical local anaesthetic',
    referenceBrands: ['EMLA (official product-information example)'],
    usedFor: 'May be selected by the responsible professional for comfort; exact product and suitability must be confirmed.',
    relevantTreatmentSlugs: ['skinpen-microneedling'],
  }),
  pendingItem({
    id: 'skinpen-aftercare',
    area: 'SkinPen',
    product: 'Post-treatment cleanser, moisturizer or barrier product, and sunscreen',
    referenceBrands: [],
    usedFor: 'Only products approved by the treating professional for the immediate post-treatment period.',
    relevantTreatmentSlugs: ['skinpen-microneedling'],
  }),
  pendingItem({
    id: 'fire-ice-cleanser',
    area: 'Fire & Ice',
    product: 'Professional pre-treatment cleanser',
    referenceBrands: ['iS Clinical product to be confirmed'],
    usedFor: 'Cleansing step in the salon’s verified professional protocol.',
    relevantTreatmentSlugs: ['is-clinical-fire-ice-peel'],
  }),
  pendingItem({
    id: 'fire-ice-resurfacing-masque',
    area: 'Fire & Ice',
    product: 'Warming resurfacing masque',
    referenceBrands: ['iS Clinical Intensive Resurfacing Masque'],
    usedFor: 'The manufacturer-described warming resurfacing phase.',
    relevantTreatmentSlugs: ['is-clinical-fire-ice-peel'],
  }),
  pendingItem({
    id: 'fire-ice-rejuvenating-masque',
    area: 'Fire & Ice',
    product: 'Cooling rejuvenating masque',
    referenceBrands: ['iS Clinical Rejuvenating Masque'],
    usedFor: 'The manufacturer-described cooling phase.',
    relevantTreatmentSlugs: ['is-clinical-fire-ice-peel'],
  }),
  pendingItem({
    id: 'fire-ice-finishing-products',
    area: 'Fire & Ice',
    product: 'Finishing serum, moisturizer, and sun protection',
    referenceBrands: ['Exact iS Clinical or salon-approved products to be confirmed'],
    usedFor: 'Only if included in the current professional protocol and selected for the client.',
    relevantTreatmentSlugs: ['is-clinical-fire-ice-peel'],
  }),
  pendingItem({
    id: 'nails-cleansing-disinfection',
    area: 'Nails',
    product: 'Hand, foot, surface, and instrument cleansing or disinfection products',
    referenceBrands: [],
    usedFor: 'Hygiene steps must distinguish skin, surface, instrument disinfection, and sterilization requirements.',
    relevantTreatmentSlugs: ['nails'],
  }),
  pendingItem({
    id: 'nails-files-buffers',
    area: 'Nails',
    product: 'Files, buffers, drill bits, and single-use abrasives',
    referenceBrands: [],
    usedFor: 'Preparation, shaping, and removal with a documented single-use or reprocessing rule.',
    relevantTreatmentSlugs: ['nails'],
  }),
  pendingItem({
    id: 'nails-remover-prep',
    area: 'Nails',
    product: 'Polish or gel remover, dehydrator, and primer',
    referenceBrands: [],
    usedFor: 'Removal and product-system preparation; compatibility must be confirmed.',
    relevantTreatmentSlugs: ['nails'],
  }),
  pendingItem({
    id: 'nails-base-builder',
    area: 'Nails',
    product: 'Base coat, builder gel, acrylic, or polygel system',
    referenceBrands: [],
    usedFor: 'Foundation or enhancement system; exact chemistry, lamp compatibility, and allergy information are required.',
    relevantTreatmentSlugs: ['nails'],
  }),
  pendingItem({
    id: 'nails-colour-top',
    area: 'Nails',
    product: 'Colour gel or polish and top coat',
    referenceBrands: [],
    usedFor: 'Colour and finish; record system compatibility and curing requirements.',
    relevantTreatmentSlugs: ['nails'],
  }),
  pendingItem({
    id: 'nails-lamp',
    area: 'Nails',
    product: 'Curing lamp, model, and compatible product system',
    referenceBrands: [],
    usedFor: 'Curing only with the product system and timing specified by its manufacturer.',
    relevantTreatmentSlugs: ['nails'],
  }),
  pendingItem({
    id: 'nails-aftercare',
    area: 'Nails',
    product: 'Cuticle oil, hand or foot cream, and retail aftercare',
    referenceBrands: [],
    usedFor: 'Finish and home-care recommendation after ingredient and allergy review.',
    relevantTreatmentSlugs: ['nails'],
  }),
  pendingItem({
    id: 'nails-pedicure',
    area: 'Nails',
    product: 'Pedicure soak, scrub, callus product, mask, and moisturizer',
    referenceBrands: [],
    usedFor: 'Pedicure protocol; exact products, contact times, contraindications, and hygiene steps are required.',
    relevantTreatmentSlugs: ['nails'],
  }),
  pendingItem({
    id: 'lashes-cleanser',
    area: 'Lashes',
    product: 'Eye-area and lash cleanser or primer',
    referenceBrands: [],
    usedFor: 'Preparation compatible with the selected lash system and eye area.',
    relevantTreatmentSlugs: ['lashes'],
  }),
  pendingItem({
    id: 'lashes-extension-fibres',
    area: 'Lashes',
    product: 'Extension fibres, curls, lengths, and diameters',
    referenceBrands: [],
    usedFor: 'Only if extension services are currently offered and verified.',
    relevantTreatmentSlugs: ['lashes'],
  }),
  pendingItem({
    id: 'lashes-adhesive-remover',
    area: 'Lashes',
    product: 'Lash adhesive and professional remover',
    referenceBrands: [],
    usedFor: 'Extension application and removal; ingredient, humidity, shelf-life, allergy, and eye-safety records are required.',
    relevantTreatmentSlugs: ['lashes'],
  }),
  pendingItem({
    id: 'lashes-lift-system',
    area: 'Lashes',
    product: 'Lash-lift lotion and setting or neutralizing lotion',
    referenceBrands: [],
    usedFor: 'Lift service only with one compatible professional system and documented timing.',
    relevantTreatmentSlugs: ['lashes'],
  }),
  pendingItem({
    id: 'lashes-tint',
    area: 'Lashes',
    product: 'Lash tint and developer',
    referenceBrands: [],
    usedFor: 'Tint service after confirming exact product, allergy instructions, and eye-area use.',
    relevantTreatmentSlugs: ['lashes'],
  }),
  pendingItem({
    id: 'lashes-shields-pads-tape',
    area: 'Lashes',
    product: 'Silicone shields or rods, under-eye pads, and tape',
    referenceBrands: [],
    usedFor: 'Positioning and protection during the selected service.',
    relevantTreatmentSlugs: ['lashes'],
  }),
  pendingItem({
    id: 'lashes-aftercare',
    area: 'Lashes',
    product: 'Conditioning or aftercare serum and cleansing product',
    referenceBrands: [],
    usedFor: 'Service-specific home care after ingredient and compatibility review.',
    relevantTreatmentSlugs: ['lashes'],
  }),
  pendingItem({
    id: 'hair-cleanse-condition',
    area: 'Hair',
    product: 'Professional shampoo, conditioner, mask, and scalp products',
    referenceBrands: [],
    usedFor: 'Hair and scalp cleansing or conditioning; separate products by hair need and service.',
    relevantTreatmentSlugs: ['hair-treatments', 'keratin-treatment'],
  }),
  pendingItem({
    id: 'hair-colour',
    area: 'Hair',
    product: 'Permanent, demi-permanent, or direct colour system',
    referenceBrands: [],
    usedFor: 'Colour services only after the exact system, shade, developer, allergy instructions, and patch-test policy are documented.',
    relevantTreatmentSlugs: ['balayage'],
  }),
  pendingItem({
    id: 'hair-lightener-developer-toner',
    area: 'Hair',
    product: 'Lightener or bleach, developer, and toner',
    referenceBrands: [],
    usedFor: 'Balayage or lightening service with compatible products and strand or allergy testing as required.',
    relevantTreatmentSlugs: ['balayage'],
  }),
  pendingItem({
    id: 'hair-bond-builder',
    area: 'Hair',
    product: 'Bond-building or protective additive and aftercare',
    referenceBrands: [],
    usedFor: 'Optional support during colour or lightening only if compatible with the chosen system.',
    relevantTreatmentSlugs: ['balayage'],
  }),
  pendingItem({
    id: 'hair-keratin-smoothing',
    area: 'Hair',
    product: 'Keratin or smoothing system',
    referenceBrands: [],
    usedFor: 'Exact formula, ingredients, ventilation requirements, heat protocol, aftercare, and local compliance must be confirmed.',
    relevantTreatmentSlugs: ['keratin-treatment'],
  }),
  pendingItem({
    id: 'hair-styling-heat-protection',
    area: 'Hair',
    product: 'Heat protectant, styling, and finishing products',
    referenceBrands: [],
    usedFor: 'Finish selected for the service and hair type.',
    relevantTreatmentSlugs: ['hair-treatments', 'balayage', 'keratin-treatment'],
  }),
  pendingItem({
    id: 'hair-extensions',
    area: 'Hair',
    product: 'Extension hair, attachment system, maintenance, and remover',
    referenceBrands: [],
    usedFor: 'Exact hair source, method, attachment, removal, maintenance, and home-care system must be documented.',
    relevantTreatmentSlugs: ['hair-extensions'],
  }),
  pendingItem({
    id: 'hygiene-hand-surface',
    area: 'Hygiene and safety',
    product: 'Hand hygiene and treatment-surface cleaning or disinfection products',
    referenceBrands: [],
    usedFor: 'Document exact product, intended surface or skin use, dilution if supplied by manufacturer, contact time, and safety data.',
    relevantTreatmentSlugs: [],
  }),
  pendingItem({
    id: 'hygiene-instrument-reprocessing',
    area: 'Hygiene and safety',
    product: 'Instrument cleaning, disinfection, sterilization, pouches, and indicators',
    referenceBrands: [],
    usedFor: 'A written reprocessing workflow matched to each reusable instrument.',
    relevantTreatmentSlugs: [],
  }),
  pendingItem({
    id: 'hygiene-ppe',
    area: 'Hygiene and safety',
    product: 'Gloves, masks, eye protection, aprons, couch roll, and other PPE',
    referenceBrands: [],
    usedFor: 'Task-appropriate single-use or reusable protective equipment.',
    relevantTreatmentSlugs: [],
  }),
  pendingItem({
    id: 'hygiene-waste-sharps',
    area: 'Hygiene and safety',
    product: 'Clinical waste, sharps containers, spill kit, and collection service',
    referenceBrands: [],
    usedFor: 'Segregation, storage, and disposal according to the salon’s legal obligations.',
    relevantTreatmentSlugs: [],
  }),
  pendingItem({
    id: 'hygiene-emergency',
    area: 'Hygiene and safety',
    product: 'First-aid and clinical emergency medicines, devices, and checklists',
    referenceBrands: [],
    usedFor: 'The responsible clinical lead must define the exact stock, training, inspection schedule, escalation, and transfer protocol under Georgian requirements.',
    relevantTreatmentSlugs: [],
  }),
];

export const salonProductVerificationFields = [
  'Exact brand or trade name',
  'Product variant, model, shade, concentration, or size as applicable',
  'Which salon service and step use it',
  'Supplier and latest invoice',
  'Current batch or lot number and expiry date',
  'Local authorization, leaflet, safety data sheet, or device documentation as applicable',
  'Storage, opening, shelf-life, cleaning, or maintenance instructions',
  'Allergy, patch-test, contraindication, consent, and aftercare rules',
  'Staff member or clinical lead who approved the record',
  'Whether the product name may be shown publicly and answered by the chatbot',
] as const;

export function getInventoryByArea(area: SalonProductArea): readonly SalonProductInventoryItem[] {
  return salonProductInventory.filter((item) => item.area === area);
}
