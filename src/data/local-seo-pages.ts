import type { Locale } from '@/i18n';

export const localSeoLandingPageSlugs = [
  'botox-batumi',
  'dermal-fillers-batumi',
  'skin-treatment-batumi',
  'lip-fillers-batumi',
  'acne-treatment-batumi',
  'nails-batumi',
  'lashes-brows-batumi',
] as const;

export type LocalSeoLandingPageSlug = (typeof localSeoLandingPageSlugs)[number];

export type LocalSeoLandingPageContent = {
  title: string;
  h1: string;
  description: string;
  eyebrow: string;
  intro: string;
  searchTitle: string;
  searchPhrases: string[];
  benefitsTitle: string;
  benefits: Array<{ title: string; text: string }>;
  treatmentTitle: string;
  treatmentIntro: string;
  faqTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  categoryCta: string;
  bookCta: string;
  bookingTitle: string;
  bookingText: string;
};

export type LocalSeoLandingPage = {
  slug: LocalSeoLandingPageSlug;
  categorySlug: 'botox' | 'dermal-fillers' | 'skin-treatments' | 'nails' | 'lashes';
  image: string;
  treatmentSlugs: string[];
  priority: number;
  content: Record<Locale, LocalSeoLandingPageContent>;
};

type GeneratedLocalSeoCopy = {
  title: string;
  h1: string;
  description: string;
  eyebrow: string;
  topic: string;
  searchPhrases: string[];
  categoryCta: string;
  bookCta: string;
  bookingTitle: string;
  bookingText: string;
};

function makeGeneratedLocalSeoContent(
  copies: Record<Locale, GeneratedLocalSeoCopy>
): Record<Locale, LocalSeoLandingPageContent> {
  return {
    en: makeEnglishLocalSeoContent(copies.en),
    ka: makeGeorgianLocalSeoContent(copies.ka),
    ru: makeRussianLocalSeoContent(copies.ru),
    tr: makeTurkishLocalSeoContent(copies.tr),
    ar: makeArabicLocalSeoContent(copies.ar),
    he: makeHebrewLocalSeoContent(copies.he),
  };
}

function makeEnglishLocalSeoContent(copy: GeneratedLocalSeoCopy): LocalSeoLandingPageContent {
  return {
    title: copy.title,
    h1: copy.h1,
    description: copy.description,
    eyebrow: copy.eyebrow,
    intro: `If you are comparing ${copy.searchPhrases[0]} options, Silk Beauty Salon offers consultation-led ${copy.topic} in central Batumi with clear suitability checks, starting-price context, and aftercare guidance.`,
    searchTitle: 'Search phrases this page supports',
    searchPhrases: copy.searchPhrases,
    benefitsTitle: `Why clients choose Silk for ${copy.h1}`,
    benefits: [
      {
        title: 'Consultation before booking',
        text: 'The team checks your goals, timing, contraindications, and expectations before confirming whether the service is suitable.',
      },
      {
        title: 'Linked to real salon services',
        text: 'This page connects to existing treatment and price information instead of duplicating unverified claims or separate price lists.',
      },
      {
        title: 'Central Batumi location',
        text: 'Appointments are planned at Zurab Gorgiladze 63 with online booking, phone, WhatsApp, and email support available.',
      },
    ],
    treatmentTitle: `${copy.h1} options`,
    treatmentIntro:
      'Use the related treatment cards to compare starting prices, duration, and service details before booking a consultation.',
    faqTitle: `${copy.h1} questions`,
    faqs: [
      {
        question: `Is ${copy.topic} suitable for me?`,
        answer:
          'Suitability depends on your goal, skin or treatment history, timing, and any contraindications. Start with a consultation if you are unsure.',
      },
      {
        question: `How much does ${copy.topic} cost in Batumi?`,
        answer:
          'Starting prices are shown on the related treatment cards and full pricelist. A final quote is confirmed after consultation.',
      },
      {
        question: 'Can I book before arriving in Batumi?',
        answer:
          'Yes. Local and international clients can book online and contact the salon before visiting to discuss timing and preparation.',
      },
      {
        question: 'Where is the salon?',
        answer:
          'Silk Beauty Salon is located at Zurab Gorgiladze 63 in Batumi, Georgia.',
      },
    ],
    categoryCta: copy.categoryCta,
    bookCta: copy.bookCta,
    bookingTitle: copy.bookingTitle,
    bookingText: copy.bookingText,
  };
}

function makeGeorgianLocalSeoContent(copy: GeneratedLocalSeoCopy): LocalSeoLandingPageContent {
  return {
    title: copy.title,
    h1: copy.h1,
    description: copy.description,
    eyebrow: copy.eyebrow,
    intro: `თუ ეძებთ ${copy.searchPhrases[0]}, Silk Beauty Salon ბათუმის ცენტრში გთავაზობთ კონსულტაციაზე დაფუძნებულ ${copy.topic}-ს, შესაბამისობის შემოწმებით, საწყისი ფასის კონტექსტით და მოვლის რეკომენდაციებით.`,
    searchTitle: 'საძიებო ფრაზები',
    searchPhrases: copy.searchPhrases,
    benefitsTitle: 'რატომ ირჩევენ Silk-ს',
    benefits: [
      {
        title: 'კონსულტაცია დაჯავშნამდე',
        text: 'გუნდი აფასებს მიზნებს, დროს, უკუჩვენებებს და მოლოდინებს, სანამ პროცედურის შესაბამისობას დაადასტურებს.',
      },
      {
        title: 'რეალურ სერვისებთან კავშირი',
        text: 'გვერდი უკავშირდება არსებულ პროცედურებსა და ფასების ინფორმაციას და არ იმეორებს დაუდასტურებელ მტკიცებებს.',
      },
      {
        title: 'ცენტრალური მდებარეობა ბათუმში',
        text: 'დაჯავშნა შესაძლებელია ზურაბ გორგილაძის 63-ში, ონლაინ, ტელეფონით, WhatsApp-ით ან ელფოსტით.',
      },
    ],
    treatmentTitle: 'სერვისის ვარიანტები',
    treatmentIntro:
      'შეადარეთ დაკავშირებული პროცედურები, საწყისი ფასები და ხანგრძლივობა კონსულტაციის დაჯავშნამდე.',
    faqTitle: 'ხშირი კითხვები',
    faqs: [
      {
        question: `${copy.topic} ჩემთვის შესაფერისია?`,
        answer:
          'შესაბამისობა დამოკიდებულია მიზანზე, კანის ან პროცედურების ისტორიაზე, დროზე და უკუჩვენებებზე. გაურკვევლობისას დაიწყეთ კონსულტაციით.',
      },
      {
        question: `რა ღირს ${copy.topic} ბათუმში?`,
        answer:
          'საწყისი ფასები მითითებულია დაკავშირებულ პროცედურებსა და სრულ ფასების გვერდზე. საბოლოო ფასი დასტურდება კონსულტაციის შემდეგ.',
      },
      {
        question: 'შემიძლია დაჯავშნა ბათუმში ჩამოსვლამდე?',
        answer:
          'დიახ. ადგილობრივ და საერთაშორისო კლიენტებს შეუძლიათ ონლაინ დაჯავშნა და წინასწარ დროისა და მომზადების განხილვა.',
      },
      {
        question: 'სად მდებარეობს სალონი?',
        answer:
          'Silk Beauty Salon მდებარეობს ზურაბ გორგილაძის 63-ში, ბათუმში, საქართველო.',
      },
    ],
    categoryCta: copy.categoryCta,
    bookCta: copy.bookCta,
    bookingTitle: copy.bookingTitle,
    bookingText: copy.bookingText,
  };
}

function makeRussianLocalSeoContent(copy: GeneratedLocalSeoCopy): LocalSeoLandingPageContent {
  return {
    title: copy.title,
    h1: copy.h1,
    description: copy.description,
    eyebrow: copy.eyebrow,
    intro: `Если вы ищете ${copy.searchPhrases[0]}, Silk Beauty Salon предлагает консультационный подход к ${copy.topic} в центре Батуми: проверка подходящих вариантов, понятные стартовые цены и рекомендации по уходу.`,
    searchTitle: 'Поисковые запросы',
    searchPhrases: copy.searchPhrases,
    benefitsTitle: `Почему выбирают Silk: ${copy.h1}`,
    benefits: [
      {
        title: 'Сначала консультация',
        text: 'Команда уточняет цели, сроки, противопоказания и ожидания перед подтверждением подходящего варианта.',
      },
      {
        title: 'Связь с реальными услугами',
        text: 'Страница ведет к существующим процедурам и ценам, без отдельных неподтвержденных обещаний.',
      },
      {
        title: 'Центр Батуми',
        text: 'Запись доступна на улице Зураба Горгиладзе 63, онлайн, по телефону, WhatsApp или email.',
      },
    ],
    treatmentTitle: `${copy.h1}: варианты`,
    treatmentIntro:
      'Сравните связанные процедуры, стартовые цены и длительность перед записью на консультацию.',
    faqTitle: `Вопросы: ${copy.h1}`,
    faqs: [
      {
        question: `Подходит ли мне ${copy.topic}?`,
        answer:
          'Это зависит от цели, истории кожи или процедур, сроков и возможных противопоказаний. Если не уверены, начните с консультации.',
      },
      {
        question: `Сколько стоит ${copy.topic} в Батуми?`,
        answer:
          'Стартовые цены указаны в связанных процедурах и полном прайс-листе. Итоговая стоимость подтверждается после консультации.',
      },
      {
        question: 'Можно ли записаться до приезда в Батуми?',
        answer:
          'Да. Местные и международные клиенты могут записаться онлайн и заранее обсудить сроки и подготовку.',
      },
      {
        question: 'Где находится салон?',
        answer:
          'Silk Beauty Salon находится по адресу Zurab Gorgiladze 63, Батуми, Грузия.',
      },
    ],
    categoryCta: copy.categoryCta,
    bookCta: copy.bookCta,
    bookingTitle: copy.bookingTitle,
    bookingText: copy.bookingText,
  };
}

function makeTurkishLocalSeoContent(copy: GeneratedLocalSeoCopy): LocalSeoLandingPageContent {
  return {
    title: copy.title,
    h1: copy.h1,
    description: copy.description,
    eyebrow: copy.eyebrow,
    intro: `${copy.searchPhrases[0]} seçeneklerini araştırıyorsanız, Silk Beauty Salon Batum merkezinde danışmanlık odaklı ${copy.topic} sunar; uygunluk kontrolü, başlangıç fiyatı bilgisi ve bakım önerileri net şekilde paylaşılır.`,
    searchTitle: 'Desteklenen arama ifadeleri',
    searchPhrases: copy.searchPhrases,
    benefitsTitle: 'Neden Silk',
    benefits: [
      {
        title: 'Rezervasyondan önce danışmanlık',
        text: 'Ekip hedefleri, zamanlamayı, kontrendikasyonları ve beklentileri değerlendirerek uygunluğu netleştirir.',
      },
      {
        title: 'Gerçek hizmet bilgilerine bağlı',
        text: 'Sayfa mevcut tedavi ve fiyat bilgilerine bağlanır; ayrı ve doğrulanmamış vaatler oluşturmaz.',
      },
      {
        title: 'Batum merkezinde konum',
        text: 'Randevular Zurab Gorgiladze 63 adresinde; online, telefon, WhatsApp ve e-posta ile desteklenir.',
      },
    ],
    treatmentTitle: 'Hizmet seçenekleri',
    treatmentIntro:
      'Danışmanlık almadan önce ilgili hizmet kartlarından başlangıç fiyatlarını, süreleri ve detayları karşılaştırın.',
    faqTitle: 'Sık sorulan sorular',
    faqs: [
      {
        question: `${copy.topic} benim için uygun mu?`,
        answer:
          'Uygunluk hedefinize, cilt veya işlem geçmişinize, zamanlamaya ve kontrendikasyonlara bağlıdır. Emin değilseniz danışmanlıkla başlayın.',
      },
      {
        question: `Batum'da ${copy.topic} fiyatı nedir?`,
        answer:
          'Başlangıç fiyatları ilgili hizmetlerde ve tam fiyat listesinde gösterilir. Son fiyat danışmanlık sonrası onaylanır.',
      },
      {
        question: 'Batum’a gelmeden önce rezervasyon yapabilir miyim?',
        answer:
          'Evet. Yerel ve uluslararası müşteriler online rezervasyon yapabilir, zamanlama ve hazırlığı önceden konuşabilir.',
      },
      {
        question: 'Salon nerede?',
        answer:
          'Silk Beauty Salon, Zurab Gorgiladze 63, Batum, Gürcistan adresindedir.',
      },
    ],
    categoryCta: copy.categoryCta,
    bookCta: copy.bookCta,
    bookingTitle: copy.bookingTitle,
    bookingText: copy.bookingText,
  };
}

function makeArabicLocalSeoContent(copy: GeneratedLocalSeoCopy): LocalSeoLandingPageContent {
  return {
    title: copy.title,
    h1: copy.h1,
    description: copy.description,
    eyebrow: copy.eyebrow,
    intro: `إذا كنت تبحثين عن ${copy.searchPhrases[0]}، يقدم Silk Beauty Salon ${copy.topic} في وسط باتومي بأسلوب قائم على الاستشارة، مع فحص الملاءمة، سياق السعر المبدئي، وإرشادات العناية بعد الموعد.`,
    searchTitle: 'عبارات البحث المدعومة',
    searchPhrases: copy.searchPhrases,
    benefitsTitle: `لماذا يختار العملاء Silk: ${copy.h1}`,
    benefits: [
      {
        title: 'استشارة قبل الحجز',
        text: 'يراجع الفريق الأهداف، التوقيت، الموانع والتوقعات قبل تأكيد ملاءمة الخدمة.',
      },
      {
        title: 'مرتبطة بخدمات حقيقية',
        text: 'ترتبط هذه الصفحة بمعلومات العلاجات والأسعار الموجودة، من دون وعود أو قوائم أسعار غير مؤكدة.',
      },
      {
        title: 'موقع مركزي في باتومي',
        text: 'المواعيد في Zurab Gorgiladze 63 مع حجز إلكتروني ودعم عبر الهاتف وWhatsApp والبريد الإلكتروني.',
      },
    ],
    treatmentTitle: `خيارات ${copy.h1}`,
    treatmentIntro:
      'استخدمي بطاقات العلاجات المرتبطة لمقارنة الأسعار المبدئية والمدة والتفاصيل قبل حجز الاستشارة.',
    faqTitle: `أسئلة حول ${copy.h1}`,
    faqs: [
      {
        question: `هل ${copy.topic} مناسب لي؟`,
        answer:
          'تعتمد الملاءمة على الهدف، تاريخ البشرة أو العلاجات، التوقيت وأي موانع. إذا لم تكوني متأكدة فابدئي باستشارة.',
      },
      {
        question: `كم تكلفة ${copy.topic} في باتومي؟`,
        answer:
          'تظهر الأسعار المبدئية في بطاقات العلاجات وقائمة الأسعار الكاملة. يتم تأكيد السعر النهائي بعد الاستشارة.',
      },
      {
        question: 'هل يمكن الحجز قبل الوصول إلى باتومي؟',
        answer:
          'نعم. يمكن للعملاء المحليين والدوليين الحجز عبر الإنترنت ومناقشة التوقيت والتحضير مسبقا.',
      },
      {
        question: 'أين يقع الصالون؟',
        answer:
          'يقع Silk Beauty Salon في Zurab Gorgiladze 63، باتومي، جورجيا.',
      },
    ],
    categoryCta: copy.categoryCta,
    bookCta: copy.bookCta,
    bookingTitle: copy.bookingTitle,
    bookingText: copy.bookingText,
  };
}

function makeHebrewLocalSeoContent(copy: GeneratedLocalSeoCopy): LocalSeoLandingPageContent {
  return {
    title: copy.title,
    h1: copy.h1,
    description: copy.description,
    eyebrow: copy.eyebrow,
    intro: `אם אתם מחפשים ${copy.searchPhrases[0]}, Silk Beauty Salon מציע ${copy.topic} במרכז בטומי בגישה מבוססת ייעוץ, עם בדיקת התאמה, מידע על מחיר התחלתי והנחיות לאחר הטיפול.`,
    searchTitle: 'ביטויי חיפוש נתמכים',
    searchPhrases: copy.searchPhrases,
    benefitsTitle: `למה לבחור ב-Silk: ${copy.h1}`,
    benefits: [
      {
        title: 'ייעוץ לפני קביעה',
        text: 'הצוות בודק מטרות, תזמון, התוויות נגד וציפיות לפני אישור התאמת השירות.',
      },
      {
        title: 'מחובר לשירותים אמיתיים',
        text: 'העמוד מקשר למידע קיים על טיפולים ומחירים, בלי ליצור הבטחות או מחירונים לא מאומתים.',
      },
      {
        title: 'מיקום מרכזי בבטומי',
        text: 'הפגישות ב-Zurab Gorgiladze 63 עם הזמנה אונליין ותמיכה בטלפון, WhatsApp ואימייל.',
      },
    ],
    treatmentTitle: `אפשרויות ${copy.h1}`,
    treatmentIntro:
      'השתמשו בכרטיסי הטיפול הקשורים כדי להשוות מחיר התחלתי, משך זמן ופרטי שירות לפני קביעת ייעוץ.',
    faqTitle: `שאלות על ${copy.h1}`,
    faqs: [
      {
        question: `האם ${copy.topic} מתאים לי?`,
        answer:
          'ההתאמה תלויה במטרה, בהיסטוריית העור או הטיפולים, בתזמון ובהתוויות נגד. אם אינכם בטוחים, התחילו בייעוץ.',
      },
      {
        question: `כמה עולה ${copy.topic} בבטומי?`,
        answer:
          'מחירי התחלה מוצגים בכרטיסי הטיפולים וברשימת המחירים המלאה. המחיר הסופי מאושר לאחר ייעוץ.',
      },
      {
        question: 'אפשר להזמין לפני שמגיעים לבטומי?',
        answer:
          'כן. לקוחות מקומיים ובינלאומיים יכולים להזמין אונליין ולדון מראש בתזמון ובהכנה.',
      },
      {
        question: 'איפה נמצא הסלון?',
        answer:
          'Silk Beauty Salon נמצא ב-Zurab Gorgiladze 63, בטומי, גאורגיה.',
      },
    ],
    categoryCta: copy.categoryCta,
    bookCta: copy.bookCta,
    bookingTitle: copy.bookingTitle,
    bookingText: copy.bookingText,
  };
}

const coreLocalSeoLandingPages: LocalSeoLandingPage[] = [
  {
    slug: 'botox-batumi',
    categorySlug: 'botox',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1800&q=85',
    treatmentSlugs: ['anti-wrinkle', 'masseter-botox', 'hyperhidrosis', 'migraine-treatment'],
    priority: 0.97,
    content: {
      en: {
        title: 'Botox in Batumi, Georgia',
        h1: 'Botox in Batumi, Georgia',
        description:
          'Book consultation-led Botox in Batumi at Silk Beauty Salon for anti-wrinkle, masseter, and sweating concerns with clear aftercare.',
        eyebrow: 'Batumi Botox clinic search',
        intro:
          'If you are searching for Botox Batumi, Batumi Botox, or botox in Batumi, Silk Beauty Salon offers consultation-led injectable appointments in central Batumi with realistic planning and aftercare.',
        searchTitle: 'Supported local searches',
        searchPhrases: ['Botox Batumi', 'Batumi Botox', 'botox in Batumi'],
        benefitsTitle: 'Why clients choose Silk for Botox in Batumi',
        benefits: [
          {
            title: 'Consultation before treatment',
            text: 'Your practitioner reviews facial movement, goals, timing, medical history, and suitability before recommending any injectable plan.',
          },
          {
            title: 'Natural-looking planning',
            text: 'Appointments focus on softening expression lines while keeping your face balanced and expressive.',
          },
          {
            title: 'Central Batumi location',
            text: 'Visit Silk Beauty Salon at Zurab Gorgiladze 63, close to central Batumi hotels, shops, and the boulevard.',
          },
        ],
        treatmentTitle: 'Botox and neuromodulator options',
        treatmentIntro:
          'Explore the related treatment pages, then book a consultation so the team can confirm what is suitable for your face, timing, and expectations.',
        faqTitle: 'Botox Batumi questions',
        faqs: [
          {
            question: 'Can I book Botox in Batumi as a tourist?',
            answer:
              'Yes. International clients can book online, call, or email before arriving. The team will explain timing, aftercare, and whether treatment fits your travel plans.',
          },
          {
            question: 'Does Botox require downtime?',
            answer:
              'Most clients return to normal daily plans quickly, but your practitioner will give aftercare guidance and timing advice during the appointment.',
          },
          {
            question: 'How do I know which Botox treatment is right?',
            answer:
              'Start with a consultation. The practitioner checks facial movement, concerns, contraindications, and goals before recommending a plan.',
          },
        ],
        categoryCta: 'View all Botox treatments',
        bookCta: 'Book Botox consultation',
        bookingTitle: 'Book Botox in Batumi',
        bookingText:
          'Choose a consultation if you want help deciding between anti-wrinkle, masseter, sweating, or other neuromodulator options.',
      },
      ka: {
        title: 'ბოტოქსი ბათუმში',
        h1: 'ბოტოქსი ბათუმში',
        description:
          'Silk Beauty Salon გთავაზობთ კონსულტაციაზე დაფუძნებულ ბოტოქსის პროცედურებს ბათუმში, მკაფიო დაგეგმვით და შემდგომი მოვლის რეკომენდაციებით.',
        eyebrow: 'ბოტოქსის კონსულტაცია',
        intro:
          'თუ ეძებთ ბოტოქსი ბათუმში, ბოტოქსის პროცედურა ბათუმში ან Botox Batumi, Silk Beauty Salon ცენტრალურ ბათუმში გთავაზობთ კონსულტაციაზე დაფუძნებულ ინექციურ პროცედურებს.',
        searchTitle: 'საძიებო ფრაზები',
        searchPhrases: ['ბოტოქსი ბათუმში', 'ბოტოქსის პროცედურა ბათუმში', 'Botox Batumi'],
        benefitsTitle: 'რატომ ირჩევენ Silk-ს ბოტოქსისთვის ბათუმში',
        benefits: [
          {
            title: 'კონსულტაცია პროცედურამდე',
            text: 'სპეციალისტი აფასებს მიმიკას, მიზნებს, დროს, ისტორიას და შესაბამისობას ნებისმიერი გეგმის რეკომენდაციამდე.',
          },
          {
            title: 'ბუნებრივი შედეგის დაგეგმვა',
            text: 'მიზანი არის ხაზების დარბილება ისე, რომ სახის ბალანსი და ბუნებრივი გამომეტყველება შენარჩუნდეს.',
          },
          {
            title: 'ცენტრალური მდებარეობა ბათუმში',
            text: 'Silk Beauty Salon მდებარეობს ზურაბ გორგილაძის 63-ში, ცენტრალურ ბათუმში.',
          },
        ],
        treatmentTitle: 'ბოტოქსისა და ნეირომოდულატორის ვარიანტები',
        treatmentIntro:
          'დაათვალიერეთ დაკავშირებული პროცედურები და დაჯავშნეთ კონსულტაცია, რათა გუნდმა შეაფასოს რა არის თქვენთვის შესაფერისი.',
        faqTitle: 'კითხვები ბოტოქსზე ბათუმში',
        faqs: [
          {
            question: 'შეუძლიათ ტურისტებს ბოტოქსის დაჯავშნა ბათუმში?',
            answer:
              'დიახ. საერთაშორისო კლიენტებს შეუძლიათ ონლაინ დაჯავშნა, დარეკვა ან ელფოსტით დაკავშირება ჩამოსვლამდე.',
          },
          {
            question: 'სჭირდება ბოტოქსს აღდგენის პერიოდი?',
            answer:
              'ბევრი კლიენტი მალე უბრუნდება ყოველდღიურ გეგმებს, თუმცა სპეციალისტი მოგცემთ ინდივიდუალურ რეკომენდაციებს.',
          },
          {
            question: 'როგორ გავიგო რომელი პროცედურაა შესაფერისი?',
            answer:
              'დაიწყეთ კონსულტაციით. სპეციალისტი შეაფასებს მიმიკას, მიზნებს, უკუჩვენებებს და დაგეგმავს შესაბამის გზას.',
          },
        ],
        categoryCta: 'ყველა ბოტოქსის პროცედურა',
        bookCta: 'ბოტოქსის კონსულტაციის დაჯავშნა',
        bookingTitle: 'დაჯავშნეთ ბოტოქსის კონსულტაცია',
        bookingText:
          'აირჩიეთ კონსულტაცია, თუ გჭირდებათ დახმარება ანტი-ნაოჭების, მასეტერის, ჭარბი ოფლიანობის ან სხვა ვარიანტის არჩევაში.',
      },
      ru: {
        title: 'Ботокс в Батуми, Грузия',
        h1: 'Ботокс в Батуми',
        description:
          'Запишитесь на консультацию по ботоксу в Батуми в Silk Beauty Salon: против морщин, для массетера и других задач с понятным уходом после процедуры.',
        eyebrow: 'Ботокс Батуми',
        intro:
          'Если вы ищете ботокс Батуми, ботокс в Батуми или Batumi Botox, Silk Beauty Salon предлагает консультационный подход к инъекционным процедурам в центре Батуми.',
        searchTitle: 'Поисковые запросы',
        searchPhrases: ['ботокс Батуми', 'ботокс в Батуми', 'Batumi Botox'],
        benefitsTitle: 'Почему выбирают Silk для ботокса в Батуми',
        benefits: [
          {
            title: 'Сначала консультация',
            text: 'Специалист оценивает мимику, цели, сроки, историю и возможные противопоказания перед рекомендацией процедуры.',
          },
          {
            title: 'Естественное планирование',
            text: 'Подход направлен на мягкое уменьшение линий без потери баланса лица и живой мимики.',
          },
          {
            title: 'Центр Батуми',
            text: 'Silk Beauty Salon находится на улице Зураба Горгиладзе 63, рядом с центральными районами Батуми.',
          },
        ],
        treatmentTitle: 'Варианты ботокса и нейромодуляторов',
        treatmentIntro:
          'Изучите связанные процедуры и запишитесь на консультацию, чтобы команда подтвердила подходящий план.',
        faqTitle: 'Вопросы о ботоксе в Батуми',
        faqs: [
          {
            question: 'Можно ли записаться на ботокс в Батуми туристам?',
            answer:
              'Да. Международные клиенты могут записаться онлайн, по телефону или email до приезда в Батуми.',
          },
          {
            question: 'Нужен ли восстановительный период после ботокса?',
            answer:
              'Чаще всего клиенты быстро возвращаются к обычному графику, но рекомендации по уходу и ограничениям даются индивидуально.',
          },
          {
            question: 'Как понять, какой вид ботокса мне подходит?',
            answer:
              'Начните с консультации. Специалист оценит мимику, ожидания, противопоказания и предложит подходящий вариант.',
          },
        ],
        categoryCta: 'Все процедуры Botox',
        bookCta: 'Записаться на консультацию',
        bookingTitle: 'Записаться на ботокс в Батуми',
        bookingText:
          'Консультация поможет выбрать между anti-wrinkle, masseter, лечением потливости и другими вариантами.',
      },
      tr: {
        title: 'Batum’da botoks',
        h1: 'Batum’da botoks',
        description:
          'Batum’da botoks danışmanlığı için Silk Beauty Salon: kırışıklık, masseter ve terleme odaklı seçenekler net bakım önerileriyle planlanır.',
        eyebrow: 'Botoks danışmanlığı',
        intro:
          'Batum’da botoks randevusu, yüz hareketleri, hedefleriniz ve uygunluk değerlendirmesiyle planlanır.',
        searchTitle: 'Bu sayfanın yanıtladığı aramalar',
        searchPhrases: ['Batum’da botoks', 'Batum botoks tedavisi', 'Botox Batumi'],
        benefitsTitle: 'Botoks danışmanlığı için neden Silk',
        benefits: [
          {
            title: 'Tedaviden önce danışmanlık',
            text: 'Uzman; yüz hareketlerini, hedefleri, zamanlamayı, geçmiş bilgileri ve uygunluğu değerlendirir.',
          },
          {
            title: 'Doğal görünüm planı',
            text: 'Amaç çizgileri yumuşatırken yüz dengesini ve doğal ifadeyi korumaktır.',
          },
          {
            title: 'Merkezi Batum konumu',
            text: 'Silk Beauty Salon, Zurab Gorgiladze 63 adresinde, Batum merkezine yakın konumdadır.',
          },
        ],
        treatmentTitle: 'Botoks ve nöromodülatör seçenekleri',
        treatmentIntro:
          'İlgili tedavileri inceleyin, ardından sizin için uygun planı netleştirmek üzere danışmanlık randevusu alın.',
        faqTitle: 'Botoks danışmanlığı soruları',
        faqs: [
          {
            question: 'Turist olarak botoks randevusu alabilir miyim?',
            answer:
              'Evet. Uluslararası misafirler gelmeden önce online rezervasyon yapabilir, arayabilir veya email gönderebilir.',
          },
          {
            question: 'Botoks sonrası dinlenme gerekir mi?',
            answer:
              'Birçok kişi günlük planlarına hızlıca döner; kişisel bakım ve zamanlama önerileri randevuda paylaşılır.',
          },
          {
            question: 'Hangi botoks seçeneği uygun?',
            answer:
              'Danışmanlıkla başlayın. Uzman yüz hareketlerini, beklentileri ve uygunluğu değerlendirir.',
          },
        ],
        categoryCta: 'Tüm botoks tedavileri',
        bookCta: 'Botoks danışmanlığı al',
        bookingTitle: 'Botoks danışmanlığı randevusu',
        bookingText:
          'Anti-wrinkle, masseter, terleme veya diğer nöromodülatör seçenekleri arasında karar vermek için danışmanlık seçin.',
      },
      ar: {
        title: 'بوتوكس في باتومي',
        h1: 'بوتوكس في باتومي',
        description:
          'احجزي استشارة بوتوكس في باتومي لدى Silk Beauty Salon لعلاج التجاعيد، عضلة الفك، والتعرق مع إرشادات واضحة للعناية بعد الجلسة.',
        eyebrow: 'بوتوكس باتومي',
        intro:
          'إذا كنت تبحثين عن بوتوكس باتومي أو حقن بوتوكس في باتومي، يقدم Silk Beauty Salon مواعيد حقن قائمة على الاستشارة في وسط باتومي.',
        searchTitle: 'عبارات البحث التي تغطيها الصفحة',
        searchPhrases: ['بوتوكس باتومي', 'حقن بوتوكس في باتومي', 'Botox Batumi'],
        benefitsTitle: 'لماذا يختار العملاء Silk للبوتوكس في باتومي',
        benefits: [
          {
            title: 'استشارة قبل العلاج',
            text: 'يراجع المختص حركة الوجه، الأهداف، التوقيت، التاريخ الصحي ومدى ملاءمة الإجراء قبل وضع الخطة.',
          },
          {
            title: 'تخطيط لنتيجة طبيعية',
            text: 'يركز الموعد على تلطيف الخطوط مع الحفاظ على توازن الوجه وتعابيره الطبيعية.',
          },
          {
            title: 'موقع مركزي في باتومي',
            text: 'يقع Silk Beauty Salon في شارع Zurab Gorgiladze 63 بالقرب من وسط باتومي.',
          },
        ],
        treatmentTitle: 'خيارات البوتوكس والنيرومودوليتر',
        treatmentIntro:
          'اطلعي على العلاجات المرتبطة ثم احجزي استشارة لتأكيد الخطة المناسبة لوجهك وتوقيتك وتوقعاتك.',
        faqTitle: 'أسئلة عن بوتوكس باتومي',
        faqs: [
          {
            question: 'هل يمكن للسائحين حجز بوتوكس في باتومي؟',
            answer:
              'نعم. يمكن للعملاء الدوليين الحجز عبر الإنترنت أو الهاتف أو البريد الإلكتروني قبل الوصول.',
          },
          {
            question: 'هل يحتاج البوتوكس إلى فترة توقف؟',
            answer:
              'غالبا يمكن العودة إلى الخطط اليومية بسرعة، لكن المختص يعطي تعليمات العناية والتوقيت حسب الحالة.',
          },
          {
            question: 'كيف أعرف الخيار المناسب لي؟',
            answer:
              'ابدئي باستشارة. يتم تقييم حركة الوجه والأهداف والموانع قبل اقتراح أي خطة.',
          },
        ],
        categoryCta: 'عرض كل علاجات البوتوكس',
        bookCta: 'حجز استشارة بوتوكس',
        bookingTitle: 'احجزي بوتوكس في باتومي',
        bookingText:
          'اختاري الاستشارة إذا كنت تحتاجين مساعدة في تحديد خيار التجاعيد أو عضلة الفك أو التعرق أو غيرها.',
      },
      he: {
        title: 'בוטוקס בבטומי',
        h1: 'בוטוקס בבטומי',
        description:
          'קבעו ייעוץ בוטוקס בבטומי ב-Silk Beauty Salon לטיפול בקמטים, מסטר והזעה, עם תכנון ברור והנחיות לאחר הטיפול.',
        eyebrow: 'בוטוקס בטומי',
        intro:
          'אם אתם מחפשים בוטוקס בבטומי, טיפול בוטוקס בבטומי או Botox Batumi, Silk Beauty Salon מציע ייעוץ וטיפולי הזרקה במרכז בטומי.',
        searchTitle: 'ביטויי חיפוש שהעמוד מכסה',
        searchPhrases: ['בוטוקס בבטומי', 'טיפול בוטוקס בבטומי', 'Botox Batumi'],
        benefitsTitle: 'למה לבחור ב-Silk לבוטוקס בבטומי',
        benefits: [
          {
            title: 'ייעוץ לפני טיפול',
            text: 'המטפל בודק תנועת פנים, מטרות, תזמון, רקע רפואי והתאמה לפני המלצה על תכנית.',
          },
          {
            title: 'תכנון למראה טבעי',
            text: 'המטרה היא לרכך קווים תוך שמירה על איזון הפנים והבעה טבעית.',
          },
          {
            title: 'מיקום מרכזי בבטומי',
            text: 'Silk Beauty Salon נמצא ברחוב Zurab Gorgiladze 63, קרוב למרכז בטומי.',
          },
        ],
        treatmentTitle: 'אפשרויות בוטוקס ונירומודולטורים',
        treatmentIntro:
          'עיינו בטיפולים הקשורים וקבעו ייעוץ כדי לוודא מה מתאים לפנים, לתזמון ולציפיות שלכם.',
        faqTitle: 'שאלות על בוטוקס בבטומי',
        faqs: [
          {
            question: 'האם תיירים יכולים לקבוע בוטוקס בבטומי?',
            answer:
              'כן. לקוחות מחו"ל יכולים להזמין אונליין, להתקשר או לשלוח אימייל לפני ההגעה.',
          },
          {
            question: 'האם יש זמן החלמה אחרי בוטוקס?',
            answer:
              'רבים חוזרים מהר לשגרה, אך ההנחיות והזמנים ניתנים לפי המקרה האישי.',
          },
          {
            question: 'איך יודעים איזה טיפול מתאים?',
            answer:
              'מתחילים בייעוץ. המטפל בודק תנועת פנים, מטרות, מגבלות והתאמה לפני המלצה.',
          },
        ],
        categoryCta: 'כל טיפולי הבוטוקס',
        bookCta: 'קביעת ייעוץ בוטוקס',
        bookingTitle: 'קבעו בוטוקס בבטומי',
        bookingText:
          'בחרו ייעוץ אם אתם מתלבטים בין טיפול בקמטים, מסטר, הזעה או אפשרויות נוספות.',
      },
    },
  },
  {
    slug: 'dermal-fillers-batumi',
    categorySlug: 'dermal-fillers',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1800&q=85',
    treatmentSlugs: ['lip-fillers', 'cheek-fillers', 'chin-fillers', 'jaw-fillers', 'tear-trough'],
    priority: 0.96,
    content: {
      en: {
        title: 'Dermal fillers in Batumi',
        h1: 'Dermal fillers in Batumi',
        description:
          'Consultation-led dermal fillers in Batumi for lips, cheeks, jawline, chin, and tear trough planning at Silk Beauty Salon.',
        eyebrow: 'Fillers Batumi',
        intro:
          'If you are searching for dermal fillers Batumi, lip fillers Batumi, or fillers in Batumi, Silk Beauty Salon plans facial balancing with conservative aesthetic judgment.',
        searchTitle: 'Supported local searches',
        searchPhrases: ['dermal fillers Batumi', 'lip fillers Batumi', 'fillers in Batumi'],
        benefitsTitle: 'Why clients choose Silk for fillers in Batumi',
        benefits: [
          {
            title: 'Facial balance first',
            text: 'Filler plans consider proportions, profile, expression, and whether a subtle approach is more suitable.',
          },
          {
            title: 'Clear expectations',
            text: 'Your appointment includes discussion of swelling, bruising risk, timing, maintenance, and aftercare.',
          },
          {
            title: 'Multiple filler areas',
            text: 'Consultations can cover lips, cheeks, chin, jawline, under-eye hollows, and profile balancing.',
          },
        ],
        treatmentTitle: 'Dermal filler treatment options',
        treatmentIntro:
          'Use the treatment pages below to understand common filler areas, then book a consultation for a personal plan.',
        faqTitle: 'Dermal fillers Batumi questions',
        faqs: [
          {
            question: 'Can I book lip fillers in Batumi?',
            answer:
              'Yes. Silk Beauty Salon offers consultation-led lip filler planning along with other dermal filler areas.',
          },
          {
            question: 'Will fillers look natural?',
            answer:
              'The team focuses on facial harmony and conservative planning. Suitability and expected results are discussed before treatment.',
          },
          {
            question: 'How should I plan fillers around travel?',
            answer:
              'Book a consultation before important events or travel days so the team can discuss swelling, bruising risk, and timing.',
          },
        ],
        categoryCta: 'View all dermal fillers',
        bookCta: 'Book filler consultation',
        bookingTitle: 'Book dermal fillers in Batumi',
        bookingText:
          'Choose a consultation to discuss lip fillers, cheek fillers, jawline contouring, chin support, or under-eye planning.',
      },
      ka: {
        title: 'დერმალური ფილერები ბათუმში',
        h1: 'დერმალური ფილერები ბათუმში',
        description:
          'Silk Beauty Salon გთავაზობთ დერმალური ფილერების კონსულტაციას ბათუმში ტუჩების, ყვრიმალების, ყბის ხაზის, ნიკაპის და თვალქვეშა ზონისთვის.',
        eyebrow: 'ფილერები ბათუმში',
        intro:
          'თუ ეძებთ დერმალური ფილერები ბათუმში, ტუჩის ფილერები ბათუმში ან fillers Batumi, Silk Beauty Salon გეგმავს სახის ბალანსს ფრთხილი ესთეტიკური მიდგომით.',
        searchTitle: 'საძიებო ფრაზები',
        searchPhrases: ['დერმალური ფილერები ბათუმში', 'ტუჩის ფილერები ბათუმში', 'fillers Batumi'],
        benefitsTitle: 'რატომ ირჩევენ Silk-ს ფილერებისთვის ბათუმში',
        benefits: [
          {
            title: 'პირველ რიგში სახის ბალანსი',
            text: 'გეგმა ითვალისწინებს პროპორციებს, პროფილს, მიმიკას და იმას, რამდენად ფრთხილი მიდგომაა საჭირო.',
          },
          {
            title: 'მკაფიო მოლოდინები',
            text: 'კონსულტაციაზე განიხილება შეშუპება, ჩალურჯების რისკი, დრო, მოვლა და შედეგის შენარჩუნება.',
          },
          {
            title: 'რამდენიმე ზონის დაგეგმვა',
            text: 'შესაძლებელია ტუჩების, ყვრიმალების, ნიკაპის, ყბის ხაზის, თვალქვეშა ზონის და პროფილის განხილვა.',
          },
        ],
        treatmentTitle: 'დერმალური ფილერების ვარიანტები',
        treatmentIntro:
          'ქვემოთ ნახავთ პოპულარულ ზონებს. პერსონალური გეგმისთვის დაჯავშნეთ კონსულტაცია.',
        faqTitle: 'კითხვები დერმალურ ფილერებზე ბათუმში',
        faqs: [
          {
            question: 'შეიძლება ტუჩის ფილერების დაჯავშნა ბათუმში?',
            answer:
              'დიახ. Silk Beauty Salon გთავაზობთ კონსულტაციაზე დაფუძნებულ ტუჩის ფილერებს და სხვა ზონების დაგეგმვას.',
          },
          {
            question: 'ფილერები ბუნებრივად გამოიყურება?',
            answer:
              'გუნდი ყურადღებას აქცევს სახის ჰარმონიას და ფრთხილ დაგეგმვას. მოლოდინები განიხილება პროცედურამდე.',
          },
          {
            question: 'როგორ დავგეგმო ფილერები მოგზაურობასთან ერთად?',
            answer:
              'დაჯავშნეთ კონსულტაცია მნიშვნელოვან ღონისძიებამდე ან მგზავრობამდე, რათა დრო და შესაძლო შეშუპება სწორად დაგეგმოთ.',
          },
        ],
        categoryCta: 'ყველა დერმალური ფილერი',
        bookCta: 'ფილერის კონსულტაციის დაჯავშნა',
        bookingTitle: 'დაჯავშნეთ დერმალური ფილერები ბათუმში',
        bookingText:
          'კონსულტაციაზე შეგიძლიათ განიხილოთ ტუჩები, ყვრიმალები, ყბის ხაზი, ნიკაპი ან თვალქვეშა ზონა.',
      },
      ru: {
        title: 'Дермальные филлеры в Батуми',
        h1: 'Дермальные филлеры в Батуми',
        description:
          'Консультации по дермальным филлерам в Батуми: губы, скулы, подбородок, линия челюсти и tear trough в Silk Beauty Salon.',
        eyebrow: 'Филлеры Батуми',
        intro:
          'Если вы ищете дермальные филлеры Батуми, филлеры в Батуми или увеличение губ Батуми, Silk Beauty Salon планирует гармоничное и аккуратное улучшение черт лица.',
        searchTitle: 'Поисковые запросы',
        searchPhrases: ['дермальные филлеры Батуми', 'филлеры в Батуми', 'увеличение губ Батуми'],
        benefitsTitle: 'Почему выбирают Silk для филлеров в Батуми',
        benefits: [
          {
            title: 'Сначала баланс лица',
            text: 'План учитывает пропорции, профиль, мимику и то, когда более деликатный подход будет лучше.',
          },
          {
            title: 'Понятные ожидания',
            text: 'На консультации обсуждаются отек, риск синяков, сроки, поддержание результата и уход.',
          },
          {
            title: 'Разные зоны филлеров',
            text: 'Можно обсудить губы, скулы, подбородок, линию челюсти, область под глазами и профиль.',
          },
        ],
        treatmentTitle: 'Варианты дермальных филлеров',
        treatmentIntro:
          'Изучите страницы процедур ниже, затем запишитесь на консультацию для персонального плана.',
        faqTitle: 'Вопросы о филлерах в Батуми',
        faqs: [
          {
            question: 'Можно ли сделать филлеры губ в Батуми?',
            answer:
              'Да. Silk Beauty Salon предлагает консультационное планирование филлеров губ и других зон.',
          },
          {
            question: 'Будут ли филлеры выглядеть естественно?',
            answer:
              'Команда ориентируется на гармонию лица и аккуратный подход. Ожидания обсуждаются до процедуры.',
          },
          {
            question: 'Как планировать филлеры перед поездкой?',
            answer:
              'Лучше записаться до важных событий или перелетов, чтобы обсудить возможный отек, синяки и сроки.',
          },
        ],
        categoryCta: 'Все дермальные филлеры',
        bookCta: 'Записаться на консультацию',
        bookingTitle: 'Записаться на филлеры в Батуми',
        bookingText:
          'Консультация подходит для обсуждения губ, скул, линии челюсти, подбородка или области под глазами.',
      },
      tr: {
        title: "Batumi'de dermal dolgu",
        h1: "Batumi'de dermal dolgu",
        description:
          "Silk Beauty Salon'da Batumi dermal dolgu danışmanlığı: dudak, yanak, çene, çene hattı ve göz altı planlaması.",
        eyebrow: 'Batumi dolgu',
        intro:
          "Batumi dermal dolgu, Batumi dudak dolgusu veya Batumi fillers arıyorsanız, Silk Beauty Salon yüz dengesini ölçülü bir estetik yaklaşımla planlar.",
        searchTitle: 'Bu sayfanın yanıtladığı aramalar',
        searchPhrases: ['Batumi dermal dolgu', 'Batumi dudak dolgusu', 'Batumi fillers'],
        benefitsTitle: "Batumi'de dolgu için neden Silk",
        benefits: [
          {
            title: 'Önce yüz dengesi',
            text: 'Dolgu planı oranları, profili, ifadeyi ve daha sade yaklaşımın uygun olup olmadığını değerlendirir.',
          },
          {
            title: 'Net beklentiler',
            text: 'Randevuda şişlik, morarma riski, zamanlama, bakım ve sonuçların korunması konuşulur.',
          },
          {
            title: 'Birden fazla bölge',
            text: 'Dudak, yanak, çene, çene hattı, göz altı ve profil dengeleme seçenekleri değerlendirilebilir.',
          },
        ],
        treatmentTitle: 'Dermal dolgu seçenekleri',
        treatmentIntro:
          'Aşağıdaki tedavi sayfalarını inceleyin, ardından kişisel plan için danışmanlık alın.',
        faqTitle: 'Batumi dermal dolgu soruları',
        faqs: [
          {
            question: "Batumi'de dudak dolgusu yapılır mı?",
            answer:
              'Evet. Silk Beauty Salon dudak dolgusu ve diğer dermal dolgu bölgeleri için danışmanlık odaklı planlama sunar.',
          },
          {
            question: 'Dolgular doğal görünür mü?',
            answer:
              'Ekip yüz uyumuna ve ölçülü planlamaya odaklanır. Beklentiler tedavi öncesinde konuşulur.',
          },
          {
            question: 'Dolgu randevusunu seyahate göre nasıl planlamalıyım?',
            answer:
              'Önemli etkinlik veya seyahat günlerinden önce danışmanlık alın; şişlik ve morarma riski için zamanlama konuşulur.',
          },
        ],
        categoryCta: 'Tüm dermal dolgular',
        bookCta: 'Dolgu danışmanlığı al',
        bookingTitle: "Batumi'de dolgu randevusu",
        bookingText:
          'Dudak, yanak, çene hattı, çene desteği veya göz altı planlamasını görüşmek için danışmanlık seçin.',
      },
      ar: {
        title: 'فيلر في باتومي',
        h1: 'فيلر وحقن تعبئة في باتومي',
        description:
          'استشارة فيلر في باتومي لدى Silk Beauty Salon للشفاه، الخدود، الفك، الذقن وتحت العين مع تخطيط متوازن.',
        eyebrow: 'فيلر باتومي',
        intro:
          'إذا كنت تبحثين عن فيلر باتومي أو فيلر الشفاه في باتومي أو dermal fillers Batumi، يخطط Silk Beauty Salon لتوازن الوجه بأسلوب محافظ وطبيعي.',
        searchTitle: 'عبارات البحث التي تغطيها الصفحة',
        searchPhrases: ['فيلر باتومي', 'فيلر الشفاه في باتومي', 'dermal fillers Batumi'],
        benefitsTitle: 'لماذا يختار العملاء Silk للفيلر في باتومي',
        benefits: [
          {
            title: 'توازن الوجه أولا',
            text: 'تراعي الخطة النسب، البروفايل، التعابير، وما إذا كان الأسلوب الخفيف أكثر ملاءمة.',
          },
          {
            title: 'توقعات واضحة',
            text: 'تتضمن الاستشارة الحديث عن التورم، احتمال الكدمات، التوقيت، الصيانة والعناية بعد الجلسة.',
          },
          {
            title: 'مناطق متعددة للفيلر',
            text: 'يمكن مناقشة الشفاه، الخدود، الذقن، خط الفك، تحت العين وتوازن البروفايل.',
          },
        ],
        treatmentTitle: 'خيارات الفيلر',
        treatmentIntro:
          'راجعي صفحات العلاجات أدناه ثم احجزي استشارة لخطة شخصية مناسبة.',
        faqTitle: 'أسئلة عن فيلر باتومي',
        faqs: [
          {
            question: 'هل يمكن حجز فيلر الشفاه في باتومي؟',
            answer:
              'نعم. يقدم Silk Beauty Salon تخطيطا قائما على الاستشارة لفيلر الشفاه ومناطق أخرى.',
          },
          {
            question: 'هل سيبدو الفيلر طبيعيا؟',
            answer:
              'يركز الفريق على تناغم الوجه والتخطيط المحافظ. تتم مناقشة التوقعات قبل العلاج.',
          },
          {
            question: 'كيف أخطط للفيلر حول السفر؟',
            answer:
              'احجزي استشارة قبل المناسبات أو أيام السفر المهمة لمناقشة التورم والكدمات والتوقيت.',
          },
        ],
        categoryCta: 'عرض كل علاجات الفيلر',
        bookCta: 'حجز استشارة فيلر',
        bookingTitle: 'احجزي فيلر في باتومي',
        bookingText:
          'اختاري الاستشارة لمناقشة الشفاه، الخدود، خط الفك، الذقن أو منطقة تحت العين.',
      },
      he: {
        title: 'פילרים בבטומי',
        h1: 'פילרים בבטומי',
        description:
          'ייעוץ פילרים בבטומי ב-Silk Beauty Salon לשפתיים, לחיים, קו לסת, סנטר ומתחת לעיניים עם תכנון מאוזן.',
        eyebrow: 'פילרים בטומי',
        intro:
          'אם אתם מחפשים פילרים בבטומי, מילוי שפתיים בבטומי או dermal fillers Batumi, Silk Beauty Salon מתכנן איזון פנים בגישה שמרנית וטבעית.',
        searchTitle: 'ביטויי חיפוש שהעמוד מכסה',
        searchPhrases: ['פילרים בבטומי', 'מילוי שפתיים בבטומי', 'dermal fillers Batumi'],
        benefitsTitle: 'למה לבחור ב-Silk לפילרים בבטומי',
        benefits: [
          {
            title: 'איזון פנים קודם',
            text: 'תכנית הפילר מתחשבת בפרופורציות, פרופיל, הבעה והאם גישה עדינה מתאימה יותר.',
          },
          {
            title: 'ציפיות ברורות',
            text: 'בייעוץ מדברים על נפיחות, סיכון לשטפי דם, תזמון, תחזוקה והנחיות לאחר הטיפול.',
          },
          {
            title: 'אזורים שונים לפילר',
            text: 'אפשר לדון בשפתיים, לחיים, סנטר, קו לסת, מתחת לעיניים ואיזון פרופיל.',
          },
        ],
        treatmentTitle: 'אפשרויות טיפול בפילרים',
        treatmentIntro:
          'עיינו בעמודי הטיפולים למטה ואז קבעו ייעוץ לתכנית אישית.',
        faqTitle: 'שאלות על פילרים בבטומי',
        faqs: [
          {
            question: 'אפשר לקבוע מילוי שפתיים בבטומי?',
            answer:
              'כן. Silk Beauty Salon מציע תכנון מילוי שפתיים ואזורים נוספים על בסיס ייעוץ.',
          },
          {
            question: 'האם הפילרים ייראו טבעיים?',
            answer:
              'הצוות מתמקד בהרמוניית הפנים ובתכנון שמרני. הציפיות נבדקות לפני הטיפול.',
          },
          {
            question: 'איך מתכננים פילרים סביב נסיעה?',
            answer:
              'כדאי לקבוע ייעוץ לפני אירועים או ימי נסיעה חשובים כדי לדון בנפיחות, שטפי דם ותזמון.',
          },
        ],
        categoryCta: 'כל טיפולי הפילרים',
        bookCta: 'קביעת ייעוץ פילרים',
        bookingTitle: 'קבעו פילרים בבטומי',
        bookingText:
          'בחרו ייעוץ כדי לדון בשפתיים, לחיים, קו לסת, סנטר או אזור מתחת לעיניים.',
      },
    },
  },
  {
    slug: 'skin-treatment-batumi',
    categorySlug: 'skin-treatments',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1800&q=85',
    treatmentSlugs: [
      'is-clinical-fire-ice-peel',
      'mesoestetic-cosmelan-peel',
      'obagi-blue-radiance-peel',
      'obagi-nu-derm',
      'skinpen-microneedling',
      'observe-skin-scanner',
    ],
    priority: 0.96,
    content: {
      en: {
        title: 'Skin treatment in Batumi',
        h1: 'Skin treatment in Batumi',
        description:
          'Skin treatment, skin care, peels, microneedling, and skin analysis in Batumi at Silk Beauty Salon.',
        eyebrow: 'Skin care Batumi',
        intro:
          'If you are searching for skin treatment Batumi, skin care Batumi, or skin analysis Batumi, Silk Beauty Salon plans skin treatments around your skin condition, goals, and timing.',
        searchTitle: 'Supported local searches',
        searchPhrases: ['skin treatment Batumi', 'skin care Batumi', 'skin analysis Batumi'],
        benefitsTitle: 'Why clients choose Silk for skin treatment in Batumi',
        benefits: [
          {
            title: 'Skin assessment first',
            text: 'The team can use consultation and skin analysis to understand texture, pores, pigmentation, redness, acne marks, or sensitivity.',
          },
          {
            title: 'Treatment plans, not guesses',
            text: 'Peels, microneedling, skin analysis, and device-led treatments are selected around your skin and schedule.',
          },
          {
            title: 'Aftercare built in',
            text: 'You receive guidance for sun exposure, home care, and timing around Batumi weather, travel, and events.',
          },
        ],
        treatmentTitle: 'Skin treatment options',
        treatmentIntro:
          'Explore skin analysis, peels, microneedling, and collagen-focused treatments before booking your consultation.',
        faqTitle: 'Skin treatment Batumi questions',
        faqs: [
          {
            question: 'Which skin treatment should I book in Batumi?',
            answer:
              'If you are unsure, book a consultation or skin analysis first. The team can recommend a suitable peel, microneedling, or device treatment.',
          },
          {
            question: 'Can I book a skin treatment before an event?',
            answer:
              'Yes, but timing matters. Some treatments are event-friendly while others need recovery time, so ask the team before booking close to an event.',
          },
          {
            question: 'Do you help with acne marks, pores, and texture?',
            answer:
              'Yes. Treatment options can be discussed for texture, pores, acne marks, dullness, redness, and skin quality concerns.',
          },
        ],
        categoryCta: 'View all skin treatments',
        bookCta: 'Book skin consultation',
        bookingTitle: 'Book skin treatment in Batumi',
        bookingText:
          'Choose a consultation if you want a skin plan for peels, microneedling, collagen support, or skin analysis.',
      },
      ka: {
        title: 'კანის მკურნალობა ბათუმში',
        h1: 'კანის მკურნალობა ბათუმში',
        description:
          'კანის მკურნალობა, კანის მოვლა, პილინგი, მიკრონიდლინგი და კანის ანალიზი ბათუმში Silk Beauty Salon-ში.',
        eyebrow: 'კანის მოვლა ბათუმში',
        intro:
          'თუ ეძებთ კანის მკურნალობას ბათუმში, კანის მოვლას ბათუმში ან კანის ანალიზს ბათუმში, Silk Beauty Salon გეგმავს პროცედურებს თქვენი კანის მდგომარეობის, მიზნების და დროის მიხედვით.',
        searchTitle: 'საძიებო ფრაზები',
        searchPhrases: ['კანის მკურნალობა ბათუმში', 'კანის მოვლა ბათუმში', 'კანის ანალიზი ბათუმში'],
        benefitsTitle: 'რატომ ირჩევენ Silk-ს კანის მკურნალობისთვის ბათუმში',
        benefits: [
          {
            title: 'პირველ რიგში კანის შეფასება',
            text: 'გუნდი კონსულტაციით და კანის ანალიზით აფასებს ტექსტურას, ფორებს, პიგმენტაციას, სიწითლეს, აკნეს კვალს ან მგრძნობელობას.',
          },
          {
            title: 'გეგმა და არა გამოცნობა',
            text: 'პილინგები, მიკრონიდლინგი, კანის ანალიზი და აპარატული პროცედურები ირჩევა თქვენი კანის მიხედვით.',
          },
          {
            title: 'შემდგომი მოვლა',
            text: 'იღებთ რეკომენდაციებს მზეზე ყოფნის, სახლის მოვლის და ბათუმის ამინდთან ან ღონისძიებებთან დროის დაგეგმვისთვის.',
          },
        ],
        treatmentTitle: 'კანის პროცედურების ვარიანტები',
        treatmentIntro:
          'დაათვალიერეთ კანის ანალიზი, პილინგი, მიკრონიდლინგი და კოლაგენზე ორიენტირებული პროცედურები.',
        faqTitle: 'კითხვები კანის მკურნალობაზე ბათუმში',
        faqs: [
          {
            question: 'რომელი კანის პროცედურა დავჯავშნო ბათუმში?',
            answer:
              'თუ დარწმუნებული არ ხართ, დაიწყეთ კონსულტაციით ან კანის ანალიზით. გუნდი შეგირჩევთ შესაბამის გზას.',
          },
          {
            question: 'შემიძლია კანის პროცედურა ღონისძიებამდე?',
            answer:
              'დიახ, თუმცა დრო მნიშვნელოვანია. ზოგ პროცედურას აღდგენა სჭირდება, ამიტომ ღონისძიებამდე კონსულტაცია რეკომენდებულია.',
          },
          {
            question: 'ეხმარებით აკნეს კვალს, ფორებს და ტექსტურას?',
            answer:
              'დიახ. შესაძლებელია ტექსტურის, ფორების, აკნეს კვალის, სიწითლის და კანის ხარისხის მიზნების განხილვა.',
          },
        ],
        categoryCta: 'ყველა კანის პროცედურა',
        bookCta: 'კანის კონსულტაციის დაჯავშნა',
        bookingTitle: 'დაჯავშნეთ კანის მკურნალობა ბათუმში',
        bookingText:
          'აირჩიეთ კონსულტაცია პილინგის, მიკრონიდლინგის, კოლაგენის მხარდაჭერის ან კანის ანალიზისთვის.',
      },
      ru: {
        title: 'Лечение и уход за кожей в Батуми',
        h1: 'Лечение и уход за кожей в Батуми',
        description:
          'Уход за кожей, пилинги, микронидлинг и анализ кожи в Батуми в Silk Beauty Salon.',
        eyebrow: 'Уход за кожей Батуми',
        intro:
          'Если вы ищете лечение кожи Батуми, уход за кожей Батуми или анализ кожи Батуми, Silk Beauty Salon подбирает процедуры по состоянию кожи, целям и срокам.',
        searchTitle: 'Поисковые запросы',
        searchPhrases: ['лечение кожи Батуми', 'уход за кожей Батуми', 'анализ кожи Батуми'],
        benefitsTitle: 'Почему выбирают Silk для кожи в Батуми',
        benefits: [
          {
            title: 'Сначала оценка кожи',
            text: 'Команда оценивает текстуру, поры, пигментацию, покраснение, следы акне или чувствительность.',
          },
          {
            title: 'План вместо догадок',
            text: 'Пилинги, микронидлинг, анализ кожи и аппаратные процедуры подбираются по коже и графику.',
          },
          {
            title: 'Уход после процедуры',
            text: 'Вы получаете рекомендации по солнцу, домашнему уходу и срокам с учетом погоды, поездок и событий.',
          },
        ],
        treatmentTitle: 'Варианты процедур для кожи',
        treatmentIntro:
          'Изучите анализ кожи, пилинги, микронидлинг и процедуры для поддержки коллагена.',
        faqTitle: 'Вопросы о лечении кожи в Батуми',
        faqs: [
          {
            question: 'Какую процедуру для кожи выбрать в Батуми?',
            answer:
              'Если вы не уверены, начните с консультации или анализа кожи. Команда предложит подходящий вариант.',
          },
          {
            question: 'Можно ли сделать процедуру для кожи перед событием?',
            answer:
              'Да, но важны сроки. Некоторые процедуры подходят перед событием, другим нужно время на восстановление.',
          },
          {
            question: 'Помогаете ли вы с постакне, порами и текстурой?',
            answer:
              'Да. Можно обсудить варианты для текстуры, пор, следов акне, тусклости, покраснения и качества кожи.',
          },
        ],
        categoryCta: 'Все процедуры для кожи',
        bookCta: 'Записаться на консультацию',
        bookingTitle: 'Записаться на уход за кожей в Батуми',
        bookingText:
          'Консультация подходит для плана пилингов, микронидлинга, коллагеновой поддержки или анализа кожи.',
      },
      tr: {
        title: 'Batum’da cilt tedavisi',
        h1: 'Batum’da cilt tedavisi',
        description:
          'Batum’da cilt tedavisi ve cilt bakımı için Silk Beauty Salon’da peeling, microneedling ve cilt analizi.',
        eyebrow: 'Cilt danışmanlığı',
        intro:
          'Batum’da cilt tedavisi ve Batum’da cilt bakımı seçenekleri, cilt analizi ve danışmanlıkla belirlenir.',
        searchTitle: 'Bu sayfanın yanıtladığı aramalar',
        searchPhrases: ['Batum’da cilt tedavisi', 'Batum’da cilt bakımı', 'Batum cilt analizi'],
        benefitsTitle: 'Cilt tedavisi için neden Silk',
        benefits: [
          {
            title: 'Önce cilt değerlendirmesi',
            text: 'Ekip doku, gözenek, pigmentasyon, kızarıklık, akne izleri veya hassasiyeti anlamak için danışmanlık yapar.',
          },
          {
            title: 'Tahmin değil tedavi planı',
            text: 'Peeling, microneedling, cilt analizi ve cihaz odaklı tedaviler cildinize göre seçilir.',
          },
          {
            title: 'Bakım önerileri dahil',
            text: 'Güneş, ev bakımı, Batum havası, seyahat ve etkinlik zamanlaması için öneriler alırsınız.',
          },
        ],
        treatmentTitle: 'Cilt tedavisi seçenekleri',
        treatmentIntro:
          'Randevu almadan önce cilt analizi, peeling, microneedling ve kolajen odaklı tedavileri inceleyin.',
        faqTitle: 'Cilt tedavisi soruları',
        faqs: [
          {
            question: 'Batum’da hangi cilt tedavisini seçmeliyim?',
            answer:
              'Emin değilseniz önce danışmanlık veya cilt analizi alın. Ekip uygun seçeneği önerebilir.',
          },
          {
            question: 'Etkinlik öncesi cilt tedavisi yapılır mı?',
            answer:
              'Evet, ancak zamanlama önemlidir. Bazı işlemler etkinlik öncesi uygundur, bazıları iyileşme süresi ister.',
          },
          {
            question: 'Akne izleri, gözenek ve doku için yardımcı oluyor musunuz?',
            answer:
              'Evet. Doku, gözenek, akne izleri, matlık, kızarıklık ve cilt kalitesi için seçenekler konuşulabilir.',
          },
        ],
        categoryCta: 'Tüm cilt tedavileri',
        bookCta: 'Cilt danışmanlığı al',
        bookingTitle: 'Cilt danışmanlığı randevusu',
        bookingText:
          'Peeling, microneedling, kolajen desteği veya cilt analizi için danışmanlık seçin.',
      },
      ar: {
        title: 'علاج البشرة في باتومي',
        h1: 'علاج البشرة في باتومي',
        description:
          'علاج البشرة، العناية بالبشرة، التقشير، المايكرونيدلنغ وتحليل البشرة في باتومي لدى Silk Beauty Salon.',
        eyebrow: 'العناية بالبشرة باتومي',
        intro:
          'إذا كنت تبحثين عن علاج البشرة في باتومي أو العناية بالبشرة في باتومي أو تحليل البشرة في باتومي، يخطط Silk Beauty Salon العلاجات حسب حالة البشرة والأهداف والتوقيت.',
        searchTitle: 'عبارات البحث التي تغطيها الصفحة',
        searchPhrases: ['علاج البشرة باتومي', 'العناية بالبشرة في باتومي', 'تحليل البشرة في باتومي'],
        benefitsTitle: 'لماذا يختار العملاء Silk لعلاج البشرة في باتومي',
        benefits: [
          {
            title: 'تقييم البشرة أولا',
            text: 'يمكن للفريق استخدام الاستشارة وتحليل البشرة لفهم الملمس، المسام، التصبغ، الاحمرار، آثار حب الشباب أو الحساسية.',
          },
          {
            title: 'خطة علاج لا تخمين',
            text: 'يتم اختيار التقشير، المايكرونيدلنغ، تحليل البشرة والعلاجات بالأجهزة حسب البشرة والجدول.',
          },
          {
            title: 'العناية اللاحقة ضمن الخطة',
            text: 'تحصلين على إرشادات للشمس، العناية المنزلية، والتوقيت حول طقس باتومي والسفر والمناسبات.',
          },
        ],
        treatmentTitle: 'خيارات علاج البشرة',
        treatmentIntro:
          'اطلعي على تحليل البشرة، التقشير، المايكرونيدلنغ والعلاجات الداعمة للكولاجين قبل الحجز.',
        faqTitle: 'أسئلة عن علاج البشرة في باتومي',
        faqs: [
          {
            question: 'أي علاج بشرة أحجز في باتومي؟',
            answer:
              'إذا لم تكوني متأكدة، ابدئي باستشارة أو تحليل للبشرة. يمكن للفريق اقتراح الخيار المناسب.',
          },
          {
            question: 'هل يمكن حجز علاج بشرة قبل مناسبة؟',
            answer:
              'نعم، لكن التوقيت مهم. بعض العلاجات مناسبة قبل المناسبات وبعضها يحتاج وقتا للتعافي.',
          },
          {
            question: 'هل تساعدون في آثار حب الشباب والمسام والملمس؟',
            answer:
              'نعم. يمكن مناقشة خيارات للملمس، المسام، آثار حب الشباب، البهتان، الاحمرار وجودة البشرة.',
          },
        ],
        categoryCta: 'عرض كل علاجات البشرة',
        bookCta: 'حجز استشارة بشرة',
        bookingTitle: 'احجزي علاج البشرة في باتومي',
        bookingText:
          'اختاري الاستشارة لخطة تشمل التقشير، المايكرونيدلنغ، دعم الكولاجين أو تحليل البشرة.',
      },
      he: {
        title: 'טיפולי עור בבטומי',
        h1: 'טיפולי עור בבטומי',
        description:
          'טיפולי עור, טיפוח עור, פילינג, מיקרונידלינג וניתוח עור בבטומי ב-Silk Beauty Salon.',
        eyebrow: 'טיפוח עור בטומי',
        intro:
          'אם אתם מחפשים טיפולי עור בבטומי, טיפוח עור בבטומי או אבחון עור בבטומי, Silk Beauty Salon מתכנן טיפול לפי מצב העור, המטרות והתזמון.',
        searchTitle: 'ביטויי חיפוש שהעמוד מכסה',
        searchPhrases: ['טיפולי עור בבטומי', 'טיפוח עור בבטומי', 'אבחון עור בבטומי'],
        benefitsTitle: 'למה לבחור ב-Silk לטיפולי עור בבטומי',
        benefits: [
          {
            title: 'קודם הערכת עור',
            text: 'הצוות יכול להשתמש בייעוץ ובניתוח עור כדי להבין מרקם, נקבוביות, פיגמנטציה, אדמומיות, סימני אקנה או רגישות.',
          },
          {
            title: 'תכנית טיפול ולא ניחוש',
            text: 'פילינג, מיקרונידלינג, אבחון עור וטיפולים במכשור נבחרים לפי העור ולוח הזמנים.',
          },
          {
            title: 'הנחיות לאחר טיפול',
            text: 'מקבלים הדרכה לגבי שמש, טיפול ביתי ותזמון סביב מזג האוויר בבטומי, נסיעות ואירועים.',
          },
        ],
        treatmentTitle: 'אפשרויות טיפולי עור',
        treatmentIntro:
          'עיינו בניתוח עור, פילינג, מיקרונידלינג וטיפולים ממוקדי קולגן לפני קביעת ייעוץ.',
        faqTitle: 'שאלות על טיפולי עור בבטומי',
        faqs: [
          {
            question: 'איזה טיפול עור כדאי לקבוע בבטומי?',
            answer:
              'אם אינכם בטוחים, התחילו בייעוץ או ניתוח עור. הצוות יוכל להמליץ על אפשרות מתאימה.',
          },
          {
            question: 'אפשר לקבוע טיפול עור לפני אירוע?',
            answer:
              'כן, אבל התזמון חשוב. חלק מהטיפולים מתאימים לפני אירוע וחלק דורשים זמן התאוששות.',
          },
          {
            question: 'האם אתם עוזרים בסימני אקנה, נקבוביות ומרקם?',
            answer:
              'כן. אפשר לדון באפשרויות למרקם, נקבוביות, סימני אקנה, חוסר ברק, אדמומיות ואיכות עור.',
          },
        ],
        categoryCta: 'כל טיפולי העור',
        bookCta: 'קביעת ייעוץ עור',
        bookingTitle: 'קבעו טיפול עור בבטומי',
        bookingText:
          'בחרו ייעוץ לתכנית של פילינג, מיקרונידלינג, תמיכת קולגן או ניתוח עור.',
      },
    },
  },
];

const additionalLocalSeoLandingPages: LocalSeoLandingPage[] = [
  {
    slug: 'lip-fillers-batumi',
    categorySlug: 'dermal-fillers',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1800&q=85',
    treatmentSlugs: ['lip-fillers'],
    priority: 0.94,
    content: makeGeneratedLocalSeoContent({
      en: {
        title: 'Lip fillers in Batumi, Georgia',
        h1: 'Lip fillers in Batumi',
        description:
          'Consultation-led lip fillers in Batumi at Silk Beauty Salon with natural-looking planning, starting prices, and aftercare guidance.',
        eyebrow: 'Lip filler consultation',
        topic: 'lip filler appointments',
        searchPhrases: ['lip fillers Batumi', 'lip augmentation Batumi', 'lip filler Georgia'],
        categoryCta: 'View dermal filler options',
        bookCta: 'Book lip filler consultation',
        bookingTitle: 'Book lip fillers in Batumi',
        bookingText:
          'Choose a consultation to discuss lip shape, symmetry, volume goals, timing, and the starting price before any treatment is confirmed.',
      },
      ka: {
        title: 'ტუჩის ფილერი ბათუმში',
        h1: 'ტუჩის ფილერი ბათუმში',
        description:
          'ტუჩის ფილერის კონსულტაცია ბათუმში Silk Beauty Salon-ში ბუნებრივი დაგეგმვით, საწყისი ფასით და შემდგომი მოვლის რეკომენდაციებით.',
        eyebrow: 'ტუჩის ფილერის კონსულტაცია',
        topic: 'ტუჩის ფილერის პროცედურა',
        searchPhrases: ['ტუჩის ფილერი ბათუმში', 'ტუჩების გადიდება ბათუმში', 'ტუჩის ფილერი საქართველოში'],
        categoryCta: 'ფილერების ვარიანტები',
        bookCta: 'ტუჩის ფილერის კონსულტაცია',
        bookingTitle: 'დაჯავშნეთ ტუჩის ფილერის კონსულტაცია',
        bookingText:
          'კონსულტაციაზე განიხილება ტუჩის ფორმა, სიმეტრია, მოცულობის მიზანი, დრო და საწყისი ფასი.',
      },
      ru: {
        title: 'Филлеры губ в Батуми, Грузия',
        h1: 'Филлеры губ в Батуми',
        description:
          'Консультационный подход к филлерам губ в Батуми в Silk Beauty Salon: естественное планирование, стартовые цены и уход после процедуры.',
        eyebrow: 'Консультация по филлерам губ',
        topic: 'филлеры губ',
        searchPhrases: ['филлеры губ Батуми', 'увеличение губ Батуми', 'филлеры губ Грузия'],
        categoryCta: 'Смотреть варианты филлеров',
        bookCta: 'Записаться на консультацию',
        bookingTitle: 'Записаться на филлеры губ в Батуми',
        bookingText:
          'На консультации можно обсудить форму губ, симметрию, объем, сроки и стартовую цену до подтверждения процедуры.',
      },
      tr: {
        title: 'Batum’da dudak dolgusu',
        h1: 'Batum’da dudak dolgusu',
        description:
          'Silk Beauty Salon’da Batum’da dudak dolgusu danışmanlığı: doğal planlama, başlangıç fiyatı ve bakım önerileri.',
        eyebrow: 'Dudak dolgusu danışmanlığı',
        topic: 'dudak dolgusu randevuları',
        searchPhrases: ['Batum’da dudak dolgusu', 'dudak büyütme Batum', 'Gürcistan dudak dolgusu'],
        categoryCta: 'Dolgu seçeneklerini gör',
        bookCta: 'Dudak dolgusu danışmanlığı al',
        bookingTitle: 'Dudak dolgusu danışmanlığı randevusu',
        bookingText:
          'Danışmanlıkta dudak şekli, simetri, hacim hedefi, zamanlama ve başlangıç fiyatı konuşulur.',
      },
      ar: {
        title: 'فيلر الشفاه في باتومي',
        h1: 'فيلر الشفاه في باتومي',
        description:
          'استشارة فيلر الشفاه في باتومي لدى Silk Beauty Salon مع تخطيط طبيعي، أسعار مبدئية وإرشادات العناية بعد الموعد.',
        eyebrow: 'استشارة فيلر الشفاه',
        topic: 'مواعيد فيلر الشفاه',
        searchPhrases: ['فيلر الشفاه باتومي', 'تكبير الشفاه باتومي', 'فيلر الشفاه جورجيا'],
        categoryCta: 'عرض خيارات الفيلر',
        bookCta: 'حجز استشارة فيلر الشفاه',
        bookingTitle: 'احجزي فيلر الشفاه في باتومي',
        bookingText:
          'تناقش الاستشارة شكل الشفاه، التناسق، هدف الحجم، التوقيت والسعر المبدئي قبل تأكيد العلاج.',
      },
      he: {
        title: 'מילוי שפתיים בבטומי',
        h1: 'מילוי שפתיים בבטומי',
        description:
          'ייעוץ מילוי שפתיים בבטומי ב-Silk Beauty Salon עם תכנון טבעי, מחיר התחלתי והנחיות לאחר הטיפול.',
        eyebrow: 'ייעוץ מילוי שפתיים',
        topic: 'פגישות מילוי שפתיים',
        searchPhrases: ['מילוי שפתיים בטומי', 'עיבוי שפתיים בטומי', 'מילוי שפתיים גאורגיה'],
        categoryCta: 'ראו אפשרויות פילרים',
        bookCta: 'קביעת ייעוץ שפתיים',
        bookingTitle: 'קבעו מילוי שפתיים בבטומי',
        bookingText:
          'בייעוץ דנים בצורת השפתיים, סימטריה, מטרת נפח, תזמון ומחיר התחלתי לפני אישור טיפול.',
      },
    }),
  },
  {
    slug: 'acne-treatment-batumi',
    categorySlug: 'skin-treatments',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1800&q=85',
    treatmentSlugs: [
      'cutera-aviclear',
      'skinpen-microneedling',
      'cutera-secret-pro-rf-microneedling',
      'obagi-blue-radiance-peel',
    ],
    priority: 0.92,
    content: makeGeneratedLocalSeoContent({
      en: {
        title: 'Acne treatment in Batumi, Georgia',
        h1: 'Acne treatment in Batumi',
        description:
          'Explore consultation-led acne and post-acne treatment options in Batumi, including skin analysis, peels, microneedling, and device-led care.',
        eyebrow: 'Acne and post-acne support',
        topic: 'acne and post-acne treatment planning',
        searchPhrases: ['acne treatment Batumi', 'acne scar treatment Batumi', 'post-acne treatment Batumi'],
        categoryCta: 'View skin treatment options',
        bookCta: 'Book acne consultation',
        bookingTitle: 'Book acne treatment consultation in Batumi',
        bookingText:
          'Choose a consultation to discuss active breakouts, acne marks, texture, current products, treatment timing, and aftercare.',
      },
      ka: {
        title: 'აკნეს მკურნალობა ბათუმში',
        h1: 'აკნეს მკურნალობა ბათუმში',
        description:
          'აკნესა და პოსტაკნეს კონსულტაციაზე დაფუძნებული ვარიანტები ბათუმში: კანის ანალიზი, პილინგი, მიკრონიდლინგი და აპარატული პროცედურები.',
        eyebrow: 'აკნე და პოსტაკნე',
        topic: 'აკნესა და პოსტაკნეს მკურნალობის დაგეგმვა',
        searchPhrases: ['აკნეს მკურნალობა ბათუმი', 'აკნეს ნაწიბურების მკურნალობა ბათუმი', 'პოსტაკნე ბათუმი'],
        categoryCta: 'კანის პროცედურები',
        bookCta: 'აკნეს კონსულტაცია',
        bookingTitle: 'დაჯავშნეთ აკნეს კონსულტაცია ბათუმში',
        bookingText:
          'კონსულტაციაზე განიხილება გამონაყარი, აკნეს კვალი, ტექსტურა, მიმდინარე მოვლა, დრო და შემდგომი მოვლა.',
      },
      ru: {
        title: 'Лечение акне в Батуми, Грузия',
        h1: 'Лечение акне в Батуми',
        description:
          'Консультационные варианты для акне и постакне в Батуми: анализ кожи, пилинги, микронидлинг и аппаратные процедуры.',
        eyebrow: 'Акне и постакне',
        topic: 'планирование лечения акне и постакне',
        searchPhrases: ['лечение акне Батуми', 'лечение постакне Батуми', 'рубцы после акне Батуми'],
        categoryCta: 'Смотреть процедуры для кожи',
        bookCta: 'Записаться на консультацию',
        bookingTitle: 'Записаться на консультацию по акне в Батуми',
        bookingText:
          'На консультации можно обсудить активные высыпания, следы акне, текстуру, текущий уход, сроки и рекомендации после процедур.',
      },
      tr: {
        title: 'Batum akne tedavisi',
        h1: 'Batum akne tedavisi',
        description:
          'Batum’da akne ve akne izi için danışmanlık odaklı seçenekler: cilt analizi, peeling, microneedling ve cihaz destekli bakım.',
        eyebrow: 'Akne ve akne izi desteği',
        topic: 'akne ve akne izi tedavi planlaması',
        searchPhrases: ['Batum akne tedavisi', 'akne izi tedavisi Batum', 'sivilce tedavisi Batum'],
        categoryCta: 'Cilt tedavilerini gör',
        bookCta: 'Akne danışmanlığı al',
        bookingTitle: 'Batum’da akne danışmanlığı',
        bookingText:
          'Danışmanlıkta aktif akne, izler, doku, mevcut ürünler, zamanlama ve bakım önerileri konuşulur.',
      },
      ar: {
        title: 'علاج حب الشباب في باتومي',
        h1: 'علاج حب الشباب في باتومي',
        description:
          'خيارات قائمة على الاستشارة لعلاج حب الشباب وآثاره في باتومي، تشمل تحليل البشرة، التقشير، المايكرونيدلنغ والعلاجات بالأجهزة.',
        eyebrow: 'حب الشباب وآثاره',
        topic: 'تخطيط علاج حب الشباب وآثاره',
        searchPhrases: ['علاج حب الشباب باتومي', 'علاج آثار حب الشباب باتومي', 'علاج ندبات حب الشباب باتومي'],
        categoryCta: 'عرض علاجات البشرة',
        bookCta: 'حجز استشارة حب الشباب',
        bookingTitle: 'احجزي استشارة حب الشباب في باتومي',
        bookingText:
          'تناقش الاستشارة الحبوب النشطة، آثار حب الشباب، الملمس، المنتجات الحالية، التوقيت والعناية اللاحقة.',
      },
      he: {
        title: 'טיפול באקנה בבטומי',
        h1: 'טיפול באקנה בבטומי',
        description:
          'אפשרויות מבוססות ייעוץ לאקנה ופוסט-אקנה בבטומי, כולל אבחון עור, פילינג, מיקרונידלינג וטיפולי מכשור.',
        eyebrow: 'אקנה ופוסט-אקנה',
        topic: 'תכנון טיפול באקנה ובפוסט-אקנה',
        searchPhrases: ['טיפול באקנה בטומי', 'טיפול בצלקות אקנה בטומי', 'טיפול בפוסט אקנה בטומי'],
        categoryCta: 'ראו טיפולי עור',
        bookCta: 'קביעת ייעוץ אקנה',
        bookingTitle: 'קבעו ייעוץ אקנה בבטומי',
        bookingText:
          'בייעוץ דנים בפצעונים פעילים, סימני אקנה, מרקם, מוצרים נוכחיים, תזמון והנחיות לאחר טיפול.',
      },
    }),
  },
  {
    slug: 'nails-batumi',
    categorySlug: 'nails',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=1800&q=85',
    treatmentSlugs: ['nails'],
    priority: 0.88,
    content: makeGeneratedLocalSeoContent({
      en: {
        title: 'Nails, manicure and pedicure in Batumi',
        h1: 'Nails in Batumi',
        description:
          'Book manicure, pedicure, gel nails, and nail finishing services in Batumi with clear timing, starting prices, and appointment planning.',
        eyebrow: 'Nail salon Batumi',
        topic: 'nail service appointments',
        searchPhrases: ['nails Batumi', 'manicure Batumi', 'pedicure Batumi'],
        categoryCta: 'View nail services',
        bookCta: 'Book nail appointment',
        bookingTitle: 'Book nails in Batumi',
        bookingText:
          'Choose a nail appointment for shaping, cuticle care, gel manicure, nail art, pedicure planning, or event-ready finishing.',
      },
      ka: {
        title: 'ფრჩხილები, მანიკური და პედიკური ბათუმში',
        h1: 'ფრჩხილები ბათუმში',
        description:
          'მანიკური, პედიკური, გელ ლაქი და ფრჩხილების მოვლა ბათუმში, დროის, საწყისი ფასებისა და დაჯავშნის მკაფიო დაგეგმვით.',
        eyebrow: 'ფრჩხილების სალონი ბათუმში',
        topic: 'ფრჩხილების სერვისების დაჯავშნა',
        searchPhrases: ['ფრჩხილები ბათუმი', 'მანიკური ბათუმი', 'პედიკური ბათუმი'],
        categoryCta: 'ფრჩხილების სერვისები',
        bookCta: 'ფრჩხილების სერვისის დაჯავშნა',
        bookingTitle: 'დაჯავშნეთ ფრჩხილები ბათუმში',
        bookingText:
          'აირჩიეთ ფრჩხილების სერვისი ფორმისთვის, კუტიკულის მოვლისთვის, გელ მანიკურისთვის, nail art-ისთვის ან პედიკურისთვის.',
      },
      ru: {
        title: 'Ногти, маникюр и педикюр в Батуми',
        h1: 'Ногти в Батуми',
        description:
          'Маникюр, педикюр, гель-лак и nail-сервисы в Батуми с понятным временем, стартовыми ценами и записью.',
        eyebrow: 'Нейл-салон Батуми',
        topic: 'запись на nail-сервисы',
        searchPhrases: ['ногти Батуми', 'маникюр Батуми', 'педикюр Батуми'],
        categoryCta: 'Смотреть nail-сервисы',
        bookCta: 'Записаться на ногти',
        bookingTitle: 'Записаться на ногти в Батуми',
        bookingText:
          'Выберите nail-сервис для формы, кутикул, гель-маникюра, дизайна, педикюра или подготовки к событию.',
      },
      tr: {
        title: 'Batum tırnak, manikür ve pedikür',
        h1: 'Batum tırnak hizmetleri',
        description:
          'Batum’da manikür, pedikür, kalıcı oje ve tırnak bitirme hizmetleri; süre, başlangıç fiyatı ve randevu planı ile.',
        eyebrow: 'Batum tırnak salonu',
        topic: 'tırnak hizmeti randevuları',
        searchPhrases: ['Batum tırnak', 'manikür Batum', 'pedikür Batum'],
        categoryCta: 'Tırnak hizmetlerini gör',
        bookCta: 'Tırnak randevusu al',
        bookingTitle: 'Batum’da tırnak randevusu',
        bookingText:
          'Şekillendirme, kütikül bakımı, jel manikür, nail art, pedikür veya etkinlik öncesi bitiş için randevu alın.',
      },
      ar: {
        title: 'الأظافر والمانيكير والباديكير في باتومي',
        h1: 'الأظافر في باتومي',
        description:
          'خدمات مانيكير، باديكير، جل أظافر وتشطيب الأظافر في باتومي مع توضيح المدة، الأسعار المبدئية وخطة الموعد.',
        eyebrow: 'صالون أظافر باتومي',
        topic: 'مواعيد خدمات الأظافر',
        searchPhrases: ['أظافر باتومي', 'مانيكير باتومي', 'باديكير باتومي'],
        categoryCta: 'عرض خدمات الأظافر',
        bookCta: 'حجز موعد أظافر',
        bookingTitle: 'احجزي الأظافر في باتومي',
        bookingText:
          'احجزي للعناية بالشكل، الجلد المحيط، جل مانيكير، فن الأظافر، الباديكير أو لمسة نهائية لمناسبة.',
      },
      he: {
        title: 'ציפורניים, מניקור ופדיקור בבטומי',
        h1: 'ציפורניים בבטומי',
        description:
          'מניקור, פדיקור, ג׳ל ושירותי ציפורניים בבטומי עם זמן טיפול, מחיר התחלתי ותכנון פגישה ברור.',
        eyebrow: 'סלון ציפורניים בטומי',
        topic: 'פגישות שירותי ציפורניים',
        searchPhrases: ['ציפורניים בטומי', 'מניקור בטומי', 'פדיקור בטומי'],
        categoryCta: 'ראו שירותי ציפורניים',
        bookCta: 'קביעת פגישת ציפורניים',
        bookingTitle: 'קבעו ציפורניים בבטומי',
        bookingText:
          'קבעו שירות לצורה, טיפול בקוטיקולה, מניקור ג׳ל, עיצוב ציפורניים, פדיקור או הכנה לאירוע.',
      },
    }),
  },
  {
    slug: 'lashes-brows-batumi',
    categorySlug: 'lashes',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1800&q=85',
    treatmentSlugs: ['lashes'],
    priority: 0.87,
    content: makeGeneratedLocalSeoContent({
      en: {
        title: 'Lashes and brows in Batumi',
        h1: 'Lashes and brows in Batumi',
        description:
          'Book lash lift, lash styling, Russian volume lashes, and brow lamination support in Batumi with consultation-led appointment planning.',
        eyebrow: 'Lash and brow appointments',
        topic: 'lash and brow service appointments',
        searchPhrases: ['lashes Batumi', 'lash lift Batumi', 'brow lamination Batumi'],
        categoryCta: 'View lash services',
        bookCta: 'Book lash or brow appointment',
        bookingTitle: 'Book lashes and brows in Batumi',
        bookingText:
          'Choose an appointment to discuss lash lift, lash styling, brow lamination, shape preferences, timing, and aftercare.',
      },
      ka: {
        title: 'წამწამები და წარბები ბათუმში',
        h1: 'წამწამები და წარბები ბათუმში',
        description:
          'წამწამების ლიფტინგი, სტაილინგი, მოცულობითი წამწამები და წარბების ლამინაციის მხარდაჭერა ბათუმში კონსულტაციაზე დაფუძნებული დაგეგმვით.',
        eyebrow: 'წამწამებისა და წარბების სერვისი',
        topic: 'წამწამებისა და წარბების სერვისების დაჯავშნა',
        searchPhrases: ['წამწამები ბათუმი', 'წამწამების ლიფტინგი ბათუმი', 'წარბების ლამინაცია ბათუმი'],
        categoryCta: 'წამწამების სერვისები',
        bookCta: 'წამწამების ან წარბების დაჯავშნა',
        bookingTitle: 'დაჯავშნეთ წამწამები და წარბები ბათუმში',
        bookingText:
          'კონსულტაციაზე განიხილება წამწამების ლიფტინგი, სტაილინგი, წარბების ლამინაცია, ფორმა, დრო და მოვლა.',
      },
      ru: {
        title: 'Ресницы и брови в Батуми',
        h1: 'Ресницы и брови в Батуми',
        description:
          'Ламинирование ресниц, lash styling, русский объем и ламинирование бровей в Батуми с консультационным планированием.',
        eyebrow: 'Ресницы и брови',
        topic: 'запись на услуги ресниц и бровей',
        searchPhrases: ['ресницы Батуми', 'ламинирование ресниц Батуми', 'ламинирование бровей Батуми'],
        categoryCta: 'Смотреть услуги ресниц',
        bookCta: 'Записаться на ресницы или брови',
        bookingTitle: 'Записаться на ресницы и брови в Батуми',
        bookingText:
          'Обсудите ламинирование ресниц, lash styling, ламинирование бровей, желаемую форму, сроки и уход.',
      },
      tr: {
        title: 'Batum kirpik ve kaş hizmetleri',
        h1: 'Batum kirpik ve kaş hizmetleri',
        description:
          'Batum’da kirpik lifting, kirpik styling, Rus hacim kirpikler ve kaş laminasyonu için danışmanlık odaklı randevu.',
        eyebrow: 'Kirpik ve kaş randevuları',
        topic: 'kirpik ve kaş hizmeti randevuları',
        searchPhrases: ['Batum kirpik', 'kirpik lifting Batum', 'kaş laminasyonu Batum'],
        categoryCta: 'Kirpik hizmetlerini gör',
        bookCta: 'Kirpik veya kaş randevusu al',
        bookingTitle: 'Batum’da kirpik ve kaş randevusu',
        bookingText:
          'Kirpik lifting, styling, kaş laminasyonu, şekil tercihi, zamanlama ve bakım önerilerini konuşun.',
      },
      ar: {
        title: 'الرموش والحواجب في باتومي',
        h1: 'الرموش والحواجب في باتومي',
        description:
          'حجز رفع الرموش، تنسيق الرموش، رموش الحجم الروسي ودعم تصفيح الحواجب في باتومي مع تخطيط قائم على الاستشارة.',
        eyebrow: 'مواعيد الرموش والحواجب',
        topic: 'مواعيد خدمات الرموش والحواجب',
        searchPhrases: ['رموش باتومي', 'رفع الرموش باتومي', 'تصفيح الحواجب باتومي'],
        categoryCta: 'عرض خدمات الرموش',
        bookCta: 'حجز موعد رموش أو حواجب',
        bookingTitle: 'احجزي الرموش والحواجب في باتومي',
        bookingText:
          'ناقشي رفع الرموش، تنسيقها، تصفيح الحواجب، الشكل المفضل، التوقيت والعناية بعد الموعد.',
      },
      he: {
        title: 'ריסים וגבות בבטומי',
        h1: 'ריסים וגבות בבטומי',
        description:
          'קביעת הרמת ריסים, עיצוב ריסים, נפח רוסי ולמינציית גבות בבטומי עם תכנון פגישה מבוסס ייעוץ.',
        eyebrow: 'פגישות ריסים וגבות',
        topic: 'פגישות שירותי ריסים וגבות',
        searchPhrases: ['ריסים בטומי', 'הרמת ריסים בטומי', 'למינציה לגבות בטומי'],
        categoryCta: 'ראו שירותי ריסים',
        bookCta: 'קביעת ריסים או גבות',
        bookingTitle: 'קבעו ריסים וגבות בבטומי',
        bookingText:
          'דונו בהרמת ריסים, עיצוב, למינציית גבות, העדפת צורה, תזמון והנחיות לאחר השירות.',
      },
    }),
  },
];

export const localSeoLandingPages: LocalSeoLandingPage[] = [
  ...coreLocalSeoLandingPages,
  ...additionalLocalSeoLandingPages,
];

export const localSeoLandingSitemapRoutes = localSeoLandingPages.map((page) => ({
  path: `/${page.slug}`,
  changeFrequency: 'weekly' as const,
  priority: page.priority,
}));
