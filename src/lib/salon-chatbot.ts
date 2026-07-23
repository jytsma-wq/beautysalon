import { locales, type Locale } from '@/i18n';

export type ChatbotIntent =
  | 'greeting'
  | 'treatment'
  | 'explanation'
  | 'price'
  | 'duration'
  | 'results'
  | 'downtime'
  | 'booking'
  | 'cancellation'
  | 'reschedule'
  | 'location'
  | 'hours'
  | 'contact'
  | 'languages'
  | 'payment'
  | 'brand'
  | 'medical'
  | 'emergency'
  | 'clarification'
  | 'unknown';

export type ChatbotTopicId =
  | 'consultation'
  | 'forehead-filler'
  | 'forehead-botox'
  | 'full-face-botox'
  | 'lip-filler'
  | 'cheek-filler'
  | 'under-eye-filler'
  | 'jawline-filler'
  | 'dermal-filler'
  | 'botox'
  | 'microneedling'
  | 'fire-ice'
  | 'chemical-peel'
  | 'skin-boosters'
  | 'nails'
  | 'gel-manicure'
  | 'nail-art'
  | 'lash-lift'
  | 'lashes'
  | 'russian-volume-lashes'
  | 'brow-lamination'
  | 'balayage'
  | 'keratin';

export type ChatbotExplanationKey =
  | 'antiWrinkle'
  | 'dermalFiller'
  | 'lipFiller'
  | 'microneedling'
  | 'fireIce'
  | 'chemicalPeel'
  | 'skinBoosters'
  | 'nails'
  | 'lashes'
  | 'balayage'
  | 'keratin';

export interface SalonChatbotResolution {
  intent: ChatbotIntent;
  topicId: ChatbotTopicId | null;
  bookingTreatmentIds: readonly string[];
  treatmentSlug: string | null;
  explanationKey: ChatbotExplanationKey | null;
  requiresHuman: boolean;
}

interface TreatmentTopic {
  id: Exclude<ChatbotTopicId, 'forehead-filler'>;
  aliases: readonly string[];
  bookingTreatmentIds: readonly string[];
  treatmentSlug: string | null;
  explanationKey: ChatbotExplanationKey | null;
}

const safetyKeywords = {
  emergency: [
    'difficulty breathing',
    'cannot breathe',
    "can't breathe",
    'chest pain',
    'vision loss',
    'lost vision',
    'severe pain',
    'fainting',
    'unconscious',
    'anaphylaxis',
    'სუნთქვა მიჭირს',
    'ძლიერი ტკივილი',
    'მხედველობის დაკარგვა',
    'გონება დაკარგა',
    'не могу дышать',
    'трудно дышать',
    'сильная боль',
    'потеря зрения',
    'обморок',
    'nefes alamıyorum',
    'nefes almakta zorlanıyorum',
    'şiddetli ağrı',
    'görme kaybı',
    'bayılma',
    'صعوبة في التنفس',
    'لا أستطيع التنفس',
    'ألم شديد',
    'فقدان البصر',
    'إغماء',
    'קושי לנשום',
    'לא יכול לנשום',
    'כאב חמור',
    'אובדן ראייה',
    'התעלפות',
  ],
  medical: [
    'medicine',
    'medicines',
    'medication',
    'pregnant',
    'pregnancy',
    'breastfeeding',
    'allergy',
    'allergic',
    'contraindication',
    'side effect',
    'symptom',
    'suitable for me',
    'წამალი',
    'მედიკამენტ',
    'ორსულ',
    'ძუძუთი',
    'ალერგ',
    'გვერდითი ეფექტ',
    'лекарств',
    'беремен',
    'кормлю грудью',
    'аллерг',
    'побочный эффект',
    'ilaç',
    'hamile',
    'emzir',
    'alerji',
    'yan etki',
    'أدوية',
    'دواء',
    'حامل',
    'الحمل',
    'الرضاعة',
    'حساسية',
    'آثار جانبية',
    'תרופה',
    'תרופות',
    'בהריון',
    'הריון',
    'הנקה',
    'אלרג',
    'תופעת לוואי',
  ],
  brand: [
    'brand',
    'manufacturer',
    'which botox',
    'which filler',
    'product do you use',
    'ბრენდი',
    'მწარმოებელი',
    'რომელ ბოტოქს',
    'бренд',
    'производитель',
    'какой ботокс',
    'какой филлер',
    'marka',
    'üretici',
    'hangi botoks',
    'hangi dolgu',
    'ماركة',
    'علامة تجارية',
    'الشركة المصنعة',
    'איזה מותג',
    'יצרן',
    'מותג',
  ],
} as const;

const intentKeywords: Record<
  Exclude<ChatbotIntent, 'clarification' | 'unknown' | 'emergency' | 'medical' | 'brand'>,
  readonly string[]
> = {
  greeting: [
    'hello', 'hi', 'hey', 'გამარჯობა', 'привет', 'здравствуйте', 'merhaba', 'selam', 'مرحبا', 'שלום',
  ],
  treatment: [
    'recommend',
    'right treatment',
    'best treatment',
    'not sure',
    'what should i book',
    'help me choose',
    'რას მირჩევთ',
    'არ ვიცი',
    'რომელი პროცედურა',
    'что выбрать',
    'посоветуйте',
    'не уверена',
    'ne seçmeliyim',
    'emin değilim',
    'öner',
    'ماذا أختار',
    'لست متأكدة',
    'המלצה',
    'לא בטוחה',
    'מה לבחור',
  ],
  explanation: [
    'what is',
    'what does',
    'how does it work',
    'explain',
    'რა არის',
    'როგორ მუშაობს',
    'объясните',
    'что такое',
    'как работает',
    'nedir',
    'nasıl çalışır',
    'ما هو',
    'كيف يعمل',
    'מה זה',
    'איך זה עובד',
  ],
  price: [
    'price',
    'cost',
    'how much',
    'fee',
    'ფასი',
    'რა ღირს',
    'ღირს',
    'цена',
    'стоимость',
    'сколько стоит',
    'fiyat',
    'ücret',
    'ne kadar',
    'السعر',
    'تكلفة',
    'كم سعر',
    'מחיר',
    'עלות',
    'כמה עולה',
  ],
  duration: [
    'how long',
    'duration',
    'how many minutes',
    'რამდენ ხანს',
    'ხანგრძლივობა',
    'რამდენი წუთი',
    'сколько времени',
    'как долго',
    'длительность',
    'ne kadar sürer',
    'süre',
    'كم يستغرق',
    'المدة',
    'כמה זמן',
    'משך',
  ],
  results: [
    'result',
    'results',
    'when will i see',
    'how long does it last',
    'effect last',
    'შედეგი',
    'ეფექტი',
    'რამდენ ხანს ძლებს',
    'результат',
    'эффект',
    'сколько держится',
    'sonuç',
    'etki',
    'ne kadar kalıcı',
    'النتيجة',
    'متى تظهر',
    'كم تدوم',
    'תוצאה',
    'השפעה',
    'כמה זמן מחזיק',
  ],
  downtime: [
    'downtime',
    'recovery',
    'recover',
    'redness',
    'swelling',
    'bruising',
    'peeling',
    'აღდგენა',
    'შეშუპება',
    'სიწითლე',
    'სილურჯე',
    'восстановление',
    'отек',
    'покраснение',
    'синяк',
    'iyileşme',
    'şişlik',
    'kızarıklık',
    'morarma',
    'التعافي',
    'تورم',
    'احمرار',
    'كدمات',
    'החלמה',
    'נפיחות',
    'אדמומיות',
    'שטפי דם',
  ],
  booking: [
    'book',
    'booking',
    'appointment',
    'reserve',
    'დაჯავშნა',
    'ჯავშანი',
    'ვიზიტი',
    'записаться',
    'запись',
    'прием',
    'randevu',
    'rezervasyon',
    'حجز',
    'موعد',
    'לקבוע',
    'תור',
    'הזמנה',
  ],
  location: [
    'where are you',
    'where is the salon',
    'address',
    'location',
    'მისამართ',
    'სად ხართ',
    'адрес',
    'где вы',
    'konum',
    'adres',
    'neredesiniz',
    'العنوان',
    'أين الصالون',
    'כתובת',
    'איפה אתם',
  ],
  hours: [
    'opening hours',
    'what time do you open',
    'when are you open',
    'open today',
    'სამუშაო საათ',
    'როდის ხართ ღია',
    'часы работы',
    'когда вы открыты',
    'открыты сегодня',
    'çalışma saat',
    'ne zaman açık',
    'açık mısınız',
    'ساعات العمل',
    'متى تفتحون',
    'פתוח',
    'שעות פעילות',
  ],
  contact: [
    'phone number',
    'telephone',
    'email address',
    'contact you',
    'დაგიკავშირდ',
    'ტელეფონ',
    'номер телефона',
    'связаться',
    'telefon numar',
    'iletişim',
    'رقم الهاتف',
    'اتصل بكم',
    'טלפון',
    'ליצור קשר',
  ],
  languages: [
    'what languages',
    'which languages',
    'speak english',
    'language support',
    'რომელ ენებზე',
    'ენა',
    'какие языки',
    'говорите по',
    'hangi diller',
    'dil desteği',
    'ما اللغات',
    'تتحدثون',
    'אילו שפות',
    'מדברים',
  ],
  payment: [
    'how can i pay',
    'payment method',
    'pay by card',
    'cash or card',
    'გადახდა',
    'ბარათით',
    'как оплатить',
    'оплата картой',
    'наличными',
    'nasıl öde',
    'kartla ödeme',
    'nakit',
    'طريقة الدفع',
    'الدفع بالبطاقة',
    'نقداً',
    'איך משלמים',
    'לשלם בכרטיס',
    'מזומן',
  ],
  cancellation: [
    'cancel',
    'cancellation',
    'გაუქმ',
    'отмен',
    'iptal',
    'إلغاء',
    'אלטל',
    'לבטל',
    'ביטול',
  ],
  reschedule: [
    'reschedule',
    'move my appointment',
    'change appointment',
    'გადატანა',
    'ვიზიტის შეცვლა',
    'перенести',
    'изменить запись',
    'ertele',
    'randevu değiştir',
    'تغيير الموعد',
    'إعادة جدولة',
    'לשנות תור',
    'לדחות',
  ],
};

const foreheadAliases = [
  'forehead', 'შუბლი', 'შუბლის', 'лоб', 'лба', 'alın', 'الجبهة', 'מצח',
] as const;
const fillerAliases = [
  'filler', 'fillers', 'შემავსებელი', 'ფილერი', 'филлер', 'dolgu', 'حشو', 'فيلر', 'פילר', 'מילוי',
] as const;
const botoxAliases = [
  'botox', 'anti-wrinkle', 'anti wrinkle', 'ბოტოქს', 'ботокс', 'botoks', 'بوتوكس', 'בוטוקס',
] as const;

const treatmentTopics: readonly TreatmentTopic[] = [
  {
    id: 'consultation',
    aliases: [
      'consultation', 'not sure what to book', 'კონსულტაცია', 'консультация',
      'konsültasyon', 'استشارة', 'ייעוץ',
    ],
    bookingTreatmentIds: ['consultation-not-sure'],
    treatmentSlug: null,
    explanationKey: null,
  },
  {
    id: 'full-face-botox',
    aliases: [
      'full face botox', 'botox full face', 'ბოტოქსი მთლიანად სახეზე',
      'ботокс всего лица', 'botoks tüm yüz', 'بوتوكس الوجه كاملاً', 'בוטוקס כל הפנים',
    ],
    bookingTreatmentIds: ['botox-full-face'],
    treatmentSlug: 'anti-wrinkle',
    explanationKey: 'antiWrinkle',
  },
  {
    id: 'forehead-botox',
    aliases: [
      'forehead lines', 'forehead botox', 'botox for forehead', 'შუბლის ბოტოქსი', 'ботокс лба',
      'botoks alın', 'alın botoks', 'بوتوكس الجبهة', 'בוטוקס למצח',
    ],
    bookingTreatmentIds: ['botox-forehead'],
    treatmentSlug: 'anti-wrinkle',
    explanationKey: 'antiWrinkle',
  },
  {
    id: 'under-eye-filler',
    aliases: [
      'under-eye filler', 'under eye filler', 'tear trough filler', 'филлер под глазами',
      'göz altı dolgusu', 'حشو تحت العين', 'מילוי מתחת לעיניים',
    ],
    bookingTreatmentIds: ['undereye-filler'],
    treatmentSlug: null,
    explanationKey: 'dermalFiller',
  },
  {
    id: 'cheek-filler',
    aliases: ['cheek filler', 'cheek fillers', 'филлер скул', 'elmacık dolgusu', 'حشو الخدود', 'מילוי לחיים'],
    bookingTreatmentIds: ['cheek-filler'],
    treatmentSlug: null,
    explanationKey: 'dermalFiller',
  },
  {
    id: 'jawline-filler',
    aliases: ['jawline filler', 'jaw filler', 'контур челюсти', 'çene hattı dolgusu', 'تحديد الفك', 'מילוי קו לסת'],
    bookingTreatmentIds: ['jawline-contouring'],
    treatmentSlug: null,
    explanationKey: 'dermalFiller',
  },
  {
    id: 'lip-filler',
    aliases: [
      'lip filler', 'lip fillers', 'filler for lips', 'ტუჩის ფილერი', 'ტუჩების შევსება',
      'fuller lips', 'lip volume', 'bigger lips', 'филлер губ', 'увеличение губ', 'dudak dolgusu',
      'dolgun dudak', 'حشو الشفاه', 'فيلر الشفاه', 'شفاه ممتلئة', 'מילוי שפתיים', 'שפתיים מלאות',
    ],
    bookingTreatmentIds: ['lip-filler-1ml'],
    treatmentSlug: 'lip-fillers',
    explanationKey: 'lipFiller',
  },
  {
    id: 'microneedling',
    aliases: ['microneedling', 'skinpen', 'acne scars', 'skin texture', 'large pores', 'მიკრონიდლინგ', 'микронидлинг', 'микроигольчат', 'mikroiğneleme', 'الميكرونيدلينج', 'מיקרונידלינג', 'מיקרו-מחטים'],
    bookingTreatmentIds: ['microneedling'],
    treatmentSlug: 'skinpen-microneedling',
    explanationKey: 'microneedling',
  },
  {
    id: 'fire-ice',
    aliases: ['fire and ice', 'fire & ice', 'is clinical fire', 'огонь и лед', 'fire ice', 'فاير آند آيس'],
    bookingTreatmentIds: [],
    treatmentSlug: 'is-clinical-fire-ice-peel',
    explanationKey: 'fireIce',
  },
  {
    id: 'chemical-peel',
    aliases: ['chemical peel', 'ქიმიური პილინგ', 'химический пилинг', 'kimyasal peeling', 'التقشير الكيميائي', 'פילינג כימי'],
    bookingTreatmentIds: ['chemical-peel'],
    treatmentSlug: null,
    explanationKey: 'chemicalPeel',
  },
  {
    id: 'skin-boosters',
    aliases: ['skin booster', 'skin boosters', 'скин-бустер', 'cilt canlandırıcı', 'معززات البشرة', 'מחזקי עור'],
    bookingTreatmentIds: ['skin-boosters'],
    treatmentSlug: null,
    explanationKey: 'skinBoosters',
  },
  {
    id: 'russian-volume-lashes',
    aliases: [
      'russian volume lashes', 'russian lashes', 'რუსული მოცულობითი წამწამები',
      'русский объём ресниц', 'rus hacim kirpik', 'رموش الحجم الروسي', 'ריסים נפח רוסי',
    ],
    bookingTreatmentIds: ['russian-volume-lashes'],
    treatmentSlug: 'lashes',
    explanationKey: 'lashes',
  },
  {
    id: 'lash-lift',
    aliases: ['lash lift', 'lash lift tint', 'ламинирование ресниц', 'kirpik kıvırma', 'رفع الرموش', 'הרמת ריסים'],
    bookingTreatmentIds: ['lash-lift-tint'],
    treatmentSlug: 'lashes',
    explanationKey: 'lashes',
  },
  {
    id: 'brow-lamination',
    aliases: ['brow lamination', 'ламинирование бровей', 'kaş laminasyonu', 'فرد الحواجب', 'למינציית גבות'],
    bookingTreatmentIds: ['brow-lamination'],
    treatmentSlug: null,
    explanationKey: 'lashes',
  },
  {
    id: 'lashes',
    aliases: ['lashes', 'lash', 'eyelashes', 'წამწამ', 'ресниц', 'kirpik', 'رموش', 'ריסים'],
    bookingTreatmentIds: ['russian-volume-lashes', 'lash-lift-tint'],
    treatmentSlug: 'lashes',
    explanationKey: 'lashes',
  },
  {
    id: 'gel-manicure',
    aliases: [
      'gel manicure', 'gel nails', 'გელ მანიკური', 'гель маникюр',
      'jel manikür', 'مانيكير جل', 'מניקור ג׳ל', 'מניקור ג ל',
    ],
    bookingTreatmentIds: ['gel-manicure'],
    treatmentSlug: 'nails',
    explanationKey: 'nails',
  },
  {
    id: 'nail-art',
    aliases: [
      'nail art', 'nail design', 'ფრჩხილების არტი', 'нейл арт',
      'tırnak sanatı', 'فن الأظافر', 'אמנות ציפורניים',
    ],
    bookingTreatmentIds: ['nail-art'],
    treatmentSlug: 'nails',
    explanationKey: 'nails',
  },
  {
    id: 'nails',
    aliases: ['nails', 'nail', 'manicure', 'ფრჩხილ', 'маникюр', 'ногт', 'manikür', 'tırnak', 'أظافر', 'مانيكير', 'ציפורניים', 'מניקור'],
    bookingTreatmentIds: ['gel-manicure', 'nail-art'],
    treatmentSlug: 'nails',
    explanationKey: 'nails',
  },
  {
    id: 'balayage',
    aliases: ['balayage', 'ბალაიაჟ', 'балаяж', 'بالاياج', "בלאיאז'"],
    bookingTreatmentIds: ['balayage'],
    treatmentSlug: null,
    explanationKey: 'balayage',
  },
  {
    id: 'keratin',
    aliases: ['keratin', 'კერატინ', 'кератин', 'keratin', 'كيراتين', 'קרטין'],
    bookingTreatmentIds: ['keratin-treatment'],
    treatmentSlug: null,
    explanationKey: 'keratin',
  },
  {
    id: 'botox',
    aliases: botoxAliases,
    bookingTreatmentIds: ['botox-forehead', 'botox-full-face'],
    treatmentSlug: 'anti-wrinkle',
    explanationKey: 'antiWrinkle',
  },
  {
    id: 'dermal-filler',
    aliases: fillerAliases,
    bookingTreatmentIds: ['lip-filler-1ml', 'cheek-filler', 'undereye-filler', 'jawline-contouring'],
    treatmentSlug: null,
    explanationKey: 'dermalFiller',
  },
];

const intentDetectionOrder: readonly ChatbotIntent[] = [
  'cancellation',
  'reschedule',
  'location',
  'hours',
  'contact',
  'languages',
  'payment',
  'price',
  'duration',
  'results',
  'downtime',
  'explanation',
  'booking',
  'treatment',
  'greeting',
];

function normalize(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase()
    .replace(/[’'“”".,!?;:()[\]{}\/\\|_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function includesAny(question: string, values: readonly string[]): boolean {
  return values.some((value) => question.includes(normalize(value)));
}

function normalizeLocale(locale: string): Locale {
  return locales.includes(locale as Locale) ? (locale as Locale) : 'en';
}

function findTopic(question: string): TreatmentTopic | null {
  return treatmentTopics.find((topic) => includesAny(question, topic.aliases)) ?? null;
}

function resultForSafetyIntent(
  intent: 'emergency' | 'medical' | 'brand',
  topic: TreatmentTopic | null
): SalonChatbotResolution {
  return {
    intent,
    topicId: topic?.id ?? null,
    bookingTreatmentIds: topic?.bookingTreatmentIds ?? [],
    treatmentSlug: topic?.treatmentSlug ?? null,
    explanationKey: topic?.explanationKey ?? null,
    requiresHuman: true,
  };
}

export function resolveSalonQuestion(
  question: string,
  locale: string,
  guidedIntent?: ChatbotIntent
): SalonChatbotResolution {
  normalizeLocale(locale);
  const normalizedQuestion = normalize(question);
  const topic = findTopic(normalizedQuestion);

  if (includesAny(normalizedQuestion, safetyKeywords.emergency)) {
    return resultForSafetyIntent('emergency', topic);
  }
  if (includesAny(normalizedQuestion, safetyKeywords.medical)) {
    return resultForSafetyIntent('medical', topic);
  }

  const mentionsForehead = includesAny(normalizedQuestion, foreheadAliases);
  const mentionsFiller = includesAny(normalizedQuestion, fillerAliases);
  const mentionsBotox = includesAny(normalizedQuestion, botoxAliases);

  if (mentionsForehead && mentionsFiller && !mentionsBotox) {
    return {
      intent: 'clarification',
      topicId: 'forehead-filler',
      bookingTreatmentIds: [],
      treatmentSlug: null,
      explanationKey: 'dermalFiller',
      requiresHuman: true,
    };
  }

  if (includesAny(normalizedQuestion, safetyKeywords.brand)) {
    return resultForSafetyIntent('brand', topic);
  }

  const detectedIntent = intentDetectionOrder.find((intent) =>
    includesAny(normalizedQuestion, intentKeywords[intent as keyof typeof intentKeywords] ?? [])
  );
  const intent = guidedIntent && !['emergency', 'medical', 'brand'].includes(guidedIntent)
    ? guidedIntent
    : detectedIntent ?? (topic ? 'treatment' : 'unknown');

  if (!topic) {
    return {
      intent,
      topicId: null,
      bookingTreatmentIds: [],
      treatmentSlug: null,
      explanationKey: null,
      requiresHuman: intent === 'unknown',
    };
  }

  return {
    intent,
    topicId: topic.id,
    bookingTreatmentIds: topic.bookingTreatmentIds,
    treatmentSlug: topic.treatmentSlug,
    explanationKey: topic.explanationKey,
    requiresHuman: false,
  };
}
