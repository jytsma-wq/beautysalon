import { locales, type Locale } from '@/i18n';

export type BookingTreatmentCategory =
  | 'consultation'
  | 'injectables'
  | 'skin'
  | 'lashes'
  | 'hair'
  | 'nails';

type LocalizedText = Record<Locale, string>;

export interface BookingTreatment {
  id: string;
  category: BookingTreatmentCategory;
  durationMinutes: number;
  priceGel?: number;
  name: LocalizedText;
}

export interface BookingTreatmentOption {
  id: string;
  category: BookingTreatmentCategory;
  durationMinutes: number;
  priceGel?: number;
  label: string;
  value: string;
}

export const bookingTreatments: BookingTreatment[] = [
  {
    id: 'consultation-not-sure',
    category: 'consultation',
    durationMinutes: 45,
    name: {
      en: 'Consultation / Not sure what to book',
      ka: 'კონსულტაცია / არ ვიცი, რა დავჯავშნო',
      ru: 'Консультация / Не уверена, что выбрать',
      tr: 'Konsültasyon / Ne seçeceğimden emin değilim',
      ar: 'استشارة / لست متأكدة مما أحجز',
      he: 'ייעוץ / לא בטוחה מה לקבוע',
          nl: "Consultatie / Weet u niet zeker wat u moet boeken",
      fr: "Consultation / Je ne sais pas quoi réserver",
      de: "Beratung / Ich bin mir nicht sicher, was ich buchen soll",
},
  },
  {
    id: 'lip-filler-1ml',
    category: 'injectables',
    durationMinutes: 45,
    priceGel: 350,
    name: {
      en: 'Lip Filler - Russian Technique (1ml)',
      ka: 'ტუჩების შევსება - რუსული ტექნიკა (1მლ)',
      ru: 'Увеличение губ - Русская техника (1мл)',
      tr: 'Dudak Dolgusu - Rus Tekniği (1ml)',
      ar: 'حشو الشفاه - التقنية الروسية (1مل)',
      he: 'מילוי שפתיים - טכניקה רוסית (1מ"ל)',
          nl: "Lipfiller - Russische techniek (1ml)",
      fr: "Filler des lèvres - Technique russe (1 ml)",
      de: "Lippenfüller – Russische Technik (1 ml)",
},
  },
  {
    id: 'botox-forehead',
    category: 'injectables',
    durationMinutes: 20,
    priceGel: 300,
    name: {
      en: 'Botox - Forehead Lines',
      ka: 'ბოტოქსი - შუბლის ნაოჭები',
      ru: 'Ботокс - Морщины лба',
      tr: 'Botox - Alın Çizgileri',
      ar: 'البوتوكس - تجاعيد الجبهة',
      he: 'בוטוקס - קמטי מצח',
          nl: "Botox - Voorhoofdlijnen",
      fr: "Botox - Lignes du front",
      de: "Botox – Stirnfalten",
},
  },
  {
    id: 'botox-full-face',
    category: 'injectables',
    durationMinutes: 40,
    priceGel: 600,
    name: {
      en: 'Botox - Full Face',
      ka: 'ბოტოქსი - მთლიანად სახეზე',
      ru: 'Ботокс - Всё лицо',
      tr: 'Botox - Yüz Genel',
      ar: 'البوتوكس - الوجه كاملاً',
      he: 'בוטוקס - כל הפנים',
          nl: "Botox - Volledig gezicht",
      fr: "Botox - Visage intégral",
      de: "Botox – Vollgesicht",
},
  },
  {
    id: 'cheek-filler',
    category: 'injectables',
    durationMinutes: 45,
    priceGel: 380,
    name: {
      en: 'Cheek Filler (1ml)',
      ka: 'ლოყების შევსება (1მლ)',
      ru: 'Скуловой филлер (1мл)',
      tr: 'Elmacık Dolgusu (1ml)',
      ar: 'حشو الخدود (1مل)',
      he: 'מילוי לחיים (1מ"ל)',
          nl: "Wangvuller (1 ml)",
      fr: "Filler des pommettes (1 ml)",
      de: "Wangenfüller (1 ml)",
},
  },
  {
    id: 'undereye-filler',
    category: 'injectables',
    durationMinutes: 30,
    priceGel: 400,
    name: {
      en: 'Under-eye Filler (1ml)',
      ka: 'თვალების ქვეშ შევსება (1მლ)',
      ru: 'Филлер под глазами (1мл)',
      tr: 'Göz Altı Dolgusu (1ml)',
      ar: 'حشو تحت العين (1مل)',
      he: 'מילוי תחת העין (1מ"ל)',
          nl: "Filler voor onder de ogen (1 ml)",
      fr: "Filler sous les yeux (1 ml)",
      de: "Unter-Augen-Füller (1 ml)",
},
  },
  {
    id: 'jawline-contouring',
    category: 'injectables',
    durationMinutes: 60,
    priceGel: 700,
    name: {
      en: 'Jawline Contouring (2ml)',
      ka: 'ყბის კონტურირება (2მლ)',
      ru: 'Контур пластика челюсти (2мл)',
      tr: 'Çene Hattı Konturlama (2ml)',
      ar: 'تحديد خط الفك (2مل)',
      he: 'עיצוב קו הלסת (2מ"ל)',
          nl: "Kaaklijncontouren (2 ml)",
      fr: "Contour de la mâchoire (2 ml)",
      de: "Kieferkonturierung (2 ml)",
},
  },
  {
    id: 'chemical-peel',
    category: 'skin',
    durationMinutes: 45,
    priceGel: 150,
    name: {
      en: 'Chemical Peel',
      ka: 'ქიმიური პილინგი',
      ru: 'Химический пилинг',
      tr: 'Kimyasal Peeling',
      ar: 'التقشير الكيميائي',
      he: 'פילינג כימי',
          nl: "Chemische peeling",
      fr: "Peeling chimique",
      de: "Chemisches Peeling",
},
  },
  {
    id: 'microneedling',
    category: 'skin',
    durationMinutes: 75,
    priceGel: 250,
    name: {
      en: 'Microneedling',
      ka: 'მიკრონემარი',
      ru: 'Микроигольчатая терапия',
      tr: 'Mikroiğneleme',
      ar: 'الميكرونيدلينج',
      he: 'מיקרו-מחטים',
          nl: "Microneedling",
      fr: "Microneedling",
      de: "Microneedling",
},
  },
  {
    id: 'skin-boosters',
    category: 'skin',
    durationMinutes: 45,
    priceGel: 350,
    name: {
      en: 'Skin Boosters (2ml)',
      ka: 'კანის ბუსტერები (2მლ)',
      ru: 'Скин-бустеры (2мл)',
      tr: 'Cilt Canlandırıcı (2ml)',
      ar: 'معززات البشرة (2مل)',
      he: 'מחזקי עור (2מ"ל)',
          nl: "Huidboosters (2 ml)",
      fr: "Boosters de peau (2 ml)",
      de: "Haut-Booster (2 ml)",
},
  },
  {
    id: 'russian-volume-lashes',
    category: 'lashes',
    durationMinutes: 150,
    priceGel: 180,
    name: {
      en: 'Russian Volume Lashes',
      ka: 'რუსული მოცულობითი წამწამები',
      ru: 'Русский объём ресниц',
      tr: 'Rus Hacim Kirpikler',
      ar: 'رموش الحجم الروسي',
      he: 'ריסים נפח רוסי',
          nl: "Russische volumewimpers",
      fr: "Cils Volume Russe",
      de: "Russische Volumenwimpern",
},
  },
  {
    id: 'lash-lift-tint',
    category: 'lashes',
    durationMinutes: 60,
    priceGel: 80,
    name: {
      en: 'Lash Lift & Tint',
      ka: 'წამწამების აწევა და დაჭრა',
      ru: 'Ламинирование и окрашивание ресниц',
      tr: 'Kirpik Kıvırma ve Boyama',
      ar: 'رفع وصبغ الرموش',
      he: 'הרמת וצביעת ריסים',
          nl: "Wimperlift en tint",
      fr: "Rehaussement et teinture des cils",
      de: "Wimpern heben und färben",
},
  },
  {
    id: 'brow-lamination',
    category: 'lashes',
    durationMinutes: 60,
    priceGel: 90,
    name: {
      en: 'Brow Lamination',
      ka: 'წვეროების ლამინაცია',
      ru: 'Ламинирование бровей',
      tr: 'Kaş Laminasyonu',
      ar: 'فرد الحواجب',
      he: 'למינציית גבות',
          nl: "Wenkbrauwen lamineren",
      fr: "Lamination des sourcils",
      de: "Augenbrauenlaminierung",
},
  },
  {
    id: 'balayage',
    category: 'hair',
    durationMinutes: 180,
    priceGel: 250,
    name: {
      en: 'Balayage',
      ka: 'ბალაიაჟი',
      ru: 'Балаяж',
      tr: 'Balayage',
      ar: 'بالاياژ',
      he: "בלאיאז'",
          nl: "Balayage",
      fr: "Balayage",
      de: "Balayage",
},
  },
  {
    id: 'keratin-treatment',
    category: 'hair',
    durationMinutes: 120,
    priceGel: 280,
    name: {
      en: 'Keratin Treatment',
      ka: 'კერატინის მოწესრიგება',
      ru: 'Кератиновое выпрямление',
      tr: 'Keratin Tedavisi',
      ar: 'علاج الكيراتين',
      he: 'טיפול קרטין',
          nl: "Keratine behandeling",
      fr: "Traitement à la kératine",
      de: "Keratin-Behandlung",
},
  },
  {
    id: 'gel-manicure',
    category: 'nails',
    durationMinutes: 60,
    priceGel: 55,
    name: {
      en: 'Gel Manicure',
      ka: 'გელ მანიკური',
      ru: 'Гель-маникюр',
      tr: 'Jel Manikür',
      ar: 'مانيكير جل',
      he: "מניקור ג'ל",
          nl: "Gelmanicure",
      fr: "Manucure Gel",
      de: "Gel-Maniküre",
},
  },
  {
    id: 'nail-art',
    category: 'nails',
    durationMinutes: 90,
    priceGel: 90,
    name: {
      en: 'Nail Art',
      ka: 'ფრჩხილების არტი',
      ru: 'Нейл-арт',
      tr: 'Tırnak Sanatı',
      ar: 'فن الأظافر',
      he: 'אמנות ציפורניים',
      nl: "Nagelkunst",
      fr: "Nail Art",
      de: "Nagelkunst",
},
  },
];

function normalizeLocale(locale: string): Locale {
  return locales.includes(locale as Locale) ? (locale as Locale) : 'en';
}

export function getBookingTreatmentOptions(locale: string): BookingTreatmentOption[] {
  const resolvedLocale = normalizeLocale(locale);

  return bookingTreatments.map((treatment) => ({
    id: treatment.id,
    category: treatment.category,
    durationMinutes: treatment.durationMinutes,
    priceGel: treatment.priceGel,
    label: treatment.name[resolvedLocale] || treatment.name.en,
    value: treatment.name.en,
  }));
}
