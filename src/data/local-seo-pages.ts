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
    nl: makeDutchLocalSeoContent(copies.nl),
    fr: makeFrenchLocalSeoContent(copies.fr),
    de: makeGermanLocalSeoContent(copies.de),
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

function makeDutchLocalSeoContent(copy: GeneratedLocalSeoCopy): LocalSeoLandingPageContent {
  return {
    title: copy.title,
    h1: copy.h1,
    description: copy.description,
    eyebrow: copy.eyebrow,
    intro: `Vergelijkt u opties voor ${copy.searchPhrases[0]}? Silk Beauty Salon biedt in het centrum van Batumi consultatiegerichte ${copy.topic}, met een zorgvuldige geschiktheidsbeoordeling, duidelijke vanafprijzen en nazorginformatie.`,
    searchTitle: 'Gerelateerde zoekonderwerpen',
    searchPhrases: copy.searchPhrases,
    benefitsTitle: `Waarom klanten Silk kiezen voor ${copy.h1}`,
    benefits: [
      {
        title: 'Eerst een consultatie',
        text: 'Het team bespreekt uw wensen, timing, mogelijke contra-indicaties en verwachtingen voordat een behandeling wordt bevestigd.',
      },
      {
        title: 'Gekoppeld aan echte salondiensten',
        text: 'Deze pagina verwijst naar bestaande behandelingen en prijsinformatie, zonder onbevestigde claims of dubbele prijslijsten.',
      },
      {
        title: 'Centraal gelegen in Batumi',
        text: 'Afspraken vinden plaats aan Zurab Gorgiladze 63. Online boeken en contact via telefoon, WhatsApp en e-mail zijn beschikbaar.',
      },
    ],
    treatmentTitle: `Mogelijkheden voor ${copy.h1}`,
    treatmentIntro:
      'Vergelijk de bijbehorende behandelingen, vanafprijzen, duur en praktische informatie voordat u een consultatie boekt.',
    faqTitle: `Vragen over ${copy.h1}`,
    faqs: [
      {
        question: `Is ${copy.topic} geschikt voor mij?`,
        answer:
          'Dat hangt af van uw wensen, huid- of behandelgeschiedenis, planning en mogelijke contra-indicaties. Boek bij twijfel eerst een consultatie.',
      },
      {
        question: `Wat kost ${copy.topic} in Batumi?`,
        answer:
          'De bijbehorende behandelkaarten en volledige prijslijst tonen vanafprijzen. De definitieve prijs wordt na overleg bevestigd.',
      },
      {
        question: 'Kan ik boeken voordat ik in Batumi aankom?',
        answer:
          'Ja. Lokale en internationale klanten kunnen online boeken en vooraf contact opnemen over timing en voorbereiding.',
      },
      {
        question: 'Waar is de salon?',
        answer: 'Silk Beauty Salon bevindt zich aan Zurab Gorgiladze 63 in Batumi, Georgië.',
      },
    ],
    categoryCta: copy.categoryCta,
    bookCta: copy.bookCta,
    bookingTitle: copy.bookingTitle,
    bookingText: copy.bookingText,
  };
}

function makeFrenchLocalSeoContent(copy: GeneratedLocalSeoCopy): LocalSeoLandingPageContent {
  return {
    title: copy.title,
    h1: copy.h1,
    description: copy.description,
    eyebrow: copy.eyebrow,
    intro: `Si vous comparez les options pour ${copy.searchPhrases[0]}, Silk Beauty Salon propose ce service dans le centre de Batumi avec une consultation préalable, des prix de départ clairs et des conseils de suivi.`,
    searchTitle: 'Sujets de recherche associés',
    searchPhrases: copy.searchPhrases,
    benefitsTitle: `Pourquoi choisir Silk pour ${copy.h1}`,
    benefits: [
      {
        title: 'Une consultation avant de réserver',
        text: 'L’équipe vérifie vos objectifs, le calendrier, les éventuelles contre-indications et vos attentes avant de confirmer le soin.',
      },
      {
        title: 'Relié aux services réels du salon',
        text: 'Cette page renvoie vers les soins et tarifs existants, sans promesses non vérifiées ni duplication des prix.',
      },
      {
        title: 'Au centre de Batumi',
        text: 'Les rendez-vous ont lieu au 63 Zurab Gorgiladze. La réservation en ligne et le contact par téléphone, WhatsApp ou e-mail sont disponibles.',
      },
    ],
    treatmentTitle: `Options pour ${copy.h1}`,
    treatmentIntro:
      'Comparez les soins associés, les prix de départ, la durée et les informations pratiques avant de réserver une consultation.',
    faqTitle: `Questions sur ${copy.h1}`,
    faqs: [
      {
        question: 'Ce service me convient-il ?',
        answer:
          'Cela dépend de vos objectifs, de vos antécédents cutanés ou esthétiques, du calendrier et des éventuelles contre-indications. En cas de doute, commencez par une consultation.',
      },
      {
        question: 'Quel est le prix de ce service à Batumi ?',
        answer:
          'Les soins associés et la liste complète des prix indiquent les tarifs de départ. Le tarif final est confirmé après la consultation.',
      },
      {
        question: 'Puis-je réserver avant mon arrivée à Batumi ?',
        answer:
          'Oui. Les clients locaux et internationaux peuvent réserver en ligne et contacter le salon à l’avance au sujet du calendrier et de la préparation.',
      },
      {
        question: 'Où se trouve le salon ?',
        answer: 'Silk Beauty Salon se trouve au 63 Zurab Gorgiladze, à Batumi, en Géorgie.',
      },
    ],
    categoryCta: copy.categoryCta,
    bookCta: copy.bookCta,
    bookingTitle: copy.bookingTitle,
    bookingText: copy.bookingText,
  };
}

function makeGermanLocalSeoContent(copy: GeneratedLocalSeoCopy): LocalSeoLandingPageContent {
  return {
    title: copy.title,
    h1: copy.h1,
    description: copy.description,
    eyebrow: copy.eyebrow,
    intro: `Wenn Sie Angebote für ${copy.searchPhrases[0]} vergleichen, bietet Silk Beauty Salon im Zentrum von Batumi beratungsorientierte ${copy.topic} mit sorgfältiger Eignungsprüfung, transparenten Einstiegspreisen und Hinweisen zur Nachsorge.`,
    searchTitle: 'Verwandte Suchthemen',
    searchPhrases: copy.searchPhrases,
    benefitsTitle: `Warum Kunden Silk für ${copy.h1} wählen`,
    benefits: [
      {
        title: 'Beratung vor der Buchung',
        text: 'Das Team bespricht Ihre Ziele, den Zeitplan, mögliche Kontraindikationen und Erwartungen, bevor eine Behandlung bestätigt wird.',
      },
      {
        title: 'Mit echten Salonleistungen verknüpft',
        text: 'Diese Seite verweist auf bestehende Behandlungen und Preisinformationen, ohne unbestätigte Aussagen oder doppelte Preislisten.',
      },
      {
        title: 'Zentrale Lage in Batumi',
        text: 'Termine finden in der Zurab-Gorgiladze-Straße 63 statt. Online-Buchung und Kontakt per Telefon, WhatsApp oder E-Mail sind möglich.',
      },
    ],
    treatmentTitle: `Möglichkeiten für ${copy.h1}`,
    treatmentIntro:
      'Vergleichen Sie die zugehörigen Behandlungen, Einstiegspreise, Dauer und praktischen Informationen, bevor Sie eine Beratung buchen.',
    faqTitle: `Fragen zu ${copy.h1}`,
    faqs: [
      {
        question: `Ist ${copy.topic} für mich geeignet?`,
        answer:
          'Das hängt von Ihren Zielen, Ihrer Haut- oder Behandlungsgeschichte, dem Zeitplan und möglichen Kontraindikationen ab. Beginnen Sie bei Unsicherheit mit einer Beratung.',
      },
      {
        question: `Was kostet ${copy.topic} in Batumi?`,
        answer:
          'Die zugehörigen Behandlungen und die vollständige Preisliste zeigen Einstiegspreise. Der endgültige Preis wird nach der Beratung bestätigt.',
      },
      {
        question: 'Kann ich vor meiner Ankunft in Batumi buchen?',
        answer:
          'Ja. Lokale und internationale Kunden können online buchen und vorab Kontakt zum Salon aufnehmen, um Zeitplan und Vorbereitung zu besprechen.',
      },
      {
        question: 'Wo befindet sich der Salon?',
        answer: 'Silk Beauty Salon befindet sich in der Zurab-Gorgiladze-Straße 63 in Batumi, Georgien.',
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
    treatmentSlugs: ['anti-wrinkle', 'masseter-botox', 'hyperhidrosis'],
    priority: 0.97,
    content: {
      en: {
        title: 'Botox in Batumi, Georgia',
        h1: 'Botox in Batumi, Georgia',
        description:
          'Book consultation-led Botox injections in Batumi at Silk Beauty Salon for anti-wrinkle, masseter, and sweating concerns with clear aftercare.',
        eyebrow: 'Batumi Botox clinic search',
        intro:
          'If you are searching for Botox Batumi, Botox injections Batumi, or anti-wrinkle injections Batumi, Silk Beauty Salon offers consultation-led injectable appointments in central Batumi with realistic planning and aftercare.',
        searchTitle: 'Supported local searches',
        searchPhrases: [
          'Botox Batumi',
          'Botox injections Batumi',
          'anti-wrinkle injections Batumi',
          'Botox price Batumi',
          'where to get Botox in Batumi',
        ],
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
            question: 'Where can I get Botox in Batumi?',
            answer:
              'Silk Beauty Salon offers consultation-led Botox and anti-wrinkle injection appointments at Zurab Gorgiladze 63 in Batumi, with suitability reviewed before treatment.',
          },
          {
            question: 'What is the Botox price in Batumi?',
            answer:
              'Starting prices are shown on the Botox treatment cards and the pricelist. Final pricing depends on the treatment area and consultation.',
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
          'თუ ეძებთ ბოტოქსი ბათუმში ან ბოტოქსის ინექციები ბათუმში, Silk Beauty Salon ცენტრალურ ბათუმში გთავაზობთ კონსულტაციაზე დაფუძნებულ ინექციურ პროცედურებს.',
        searchTitle: 'საძიებო ფრაზები',
        searchPhrases: ['ბოტოქსი ბათუმში', 'ბოტოქსის ინექციები ბათუმში', 'Botox Batumi'],
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
            question: 'რა ღირს ბოტოქსი ბათუმში?',
            answer:
              'საწყისი ფასები მითითებულია ბოტოქსის პროცედურების ბარათებზე და ფასების გვერდზე. საბოლოო ფასი კონსულტაციის შემდეგ დასტურდება.',
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
          'Если вы ищете ботокс Батуми или инъекции ботокса Батуми, Silk Beauty Salon предлагает консультационный подход к инъекционным процедурам в центре Батуми.',
        searchTitle: 'Поисковые запросы',
        searchPhrases: ['ботокс Батуми', 'инъекции ботокса Батуми', 'ботокс цена Батуми'],
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
            question: 'Сколько стоит ботокс в Батуми?',
            answer:
              'Стартовые цены указаны в карточках процедур и в прайс-листе. Итоговая стоимость зависит от зоны и подтверждается после консультации.',
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
          'Batum’da botoks veya Batum botoks arayan danışanlar için randevu; yüz hareketleri, hedefleriniz ve uygunluk değerlendirmesiyle planlanır.',
        searchTitle: 'Bu sayfanın yanıtladığı aramalar',
        searchPhrases: ['Batum’da botoks', 'Batum botoks', 'Batum botoks fiyatları'],
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
            question: 'Batum botoks fiyatları nasıl belirlenir?',
            answer:
              'Başlangıç fiyatları tedavi kartlarında ve fiyat listesinde yer alır. Son fiyat, uygulama alanı ve danışmanlık sonrası netleşir.',
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
          'إذا كنت تبحثين عن بوتوكس باتومي أو حقن بوتوكس باتومي، يقدم Silk Beauty Salon مواعيد حقن قائمة على الاستشارة في وسط باتومي.',
        searchTitle: 'عبارات البحث التي تغطيها الصفحة',
        searchPhrases: ['بوتوكس باتومي', 'حقن بوتوكس باتومي', 'أسعار البوتوكس باتومي'],
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
            question: 'كيف يتم تحديد أسعار البوتوكس في باتومي؟',
            answer:
              'تظهر الأسعار المبدئية في بطاقات العلاجات وقائمة الأسعار. يتم تأكيد السعر النهائي حسب منطقة العلاج وبعد الاستشارة.',
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
          'אם אתם מחפשים בוטוקס בטומי, הזרקות בוטוקס בטומי או Botox Batumi, Silk Beauty Salon מציע ייעוץ וטיפולי הזרקה במרכז בטומי.',
        searchTitle: 'ביטויי חיפוש שהעמוד מכסה',
        searchPhrases: ['בוטוקס בטומי', 'הזרקות בוטוקס בטומי', 'מחירי בוטוקס בטומי'],
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
            question: 'איך נקבעים מחירי בוטוקס בטומי?',
            answer:
              'מחירי התחלה מוצגים בכרטיסי הטיפולים וברשימת המחירים. המחיר הסופי תלוי באזור הטיפול ומאושר לאחר ייעוץ.',
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
          nl: {
        title: "Botox in Batumi, Georgië",
        h1: "Botox in Batumi, Georgië",
        description:
          "Boek op consultatie geleide Botox-injecties in Batumi bij Silk Beauty Salon voor problemen met rimpels, kauwspieren en zweten, met duidelijke nazorg.",
        eyebrow: "Batumi Botox kliniek zoeken",
        intro:
          "Als u op zoek bent naar Botox Batumi, Botox-injecties Batumi of antirimpelinjecties Batumi, dan biedt Silk Beauty Salon op consultatie gebaseerde injectables-afspraken in het centrale Batumi met realistische planning en nazorg.",
        searchTitle: "Ondersteunde lokale zoekopdrachten",
        searchPhrases: [
          "Botox Batumi",
          "Botox injecties Batumi",
          "antirimpelinjecties Batumi",
          "Botox prijs Batumi",
          "waar Botox in Batumi beschikbaar is",
        ],
        benefitsTitle: "Waarom klanten Silk kiezen voor Botox in Batumi",
        benefits: [
          {
            title: "Consult vóór de behandeling",
            text: "Uw behandelaar beoordeelt gezichtsbewegingen, doelen, timing, relevante medische informatie en geschiktheid voordat een behandelplan wordt besproken.",
          },
          {
            title: "Natuurlijk ogende planning",
            text: "Afspraken zijn gericht op het verzachten van expressielijnen terwijl uw gezicht evenwichtig en expressief blijft.",
          },
          {
            title: "Centrale Batumi-locatie",
            text: "Bezoek Silk Beauty Salon op Zurab Gorgiladze 63, dicht bij de centrale Batumi hotels, winkels en de boulevard.",
          },
        ],
        treatmentTitle: "Botox en neuromodulatoropties",
        treatmentIntro:
          "Verken de gerelateerde behandelingspagina's en boek vervolgens een consult zodat het team kan bevestigen wat geschikt is voor uw gezicht, timing en verwachtingen.",
        faqTitle: "Botox Batumi vragen",
        faqs: [
          {
            question: "Kan ik als toerist Botox in Batumi boeken?",
            answer:
              "Ja. Internationale klanten kunnen online boeken, bellen of e-mailen voordat ze arriveren. Het team legt de timing, de nazorg uit en legt uit of de behandeling past bij uw reisplannen.",
          },
          {
            question: "Waar kan ik Botox in Batumi boeken?",
            answer:
              "Silk Beauty Salon biedt op consultatie gebaseerde Botox-afspraken en antirimpelinjectieafspraken bij Zurab Gorgiladze 63 in Batumi, waarbij de geschiktheid vóór de behandeling wordt beoordeeld.",
          },
          {
            question: "Wat is de Botox-prijs in Batumi?",
            answer:
              "Vanafprijzen staan ​​vermeld op de Botox behandelkaarten en de prijslijst. De uiteindelijke prijs is afhankelijk van het behandelgebied en het consult.",
          },
          {
            question: "Heeft de Botox downtime nodig?",
            answer:
              "Veel cliënten hervatten hun dagelijkse activiteiten snel, maar uw behandelaar geeft tijdens de afspraak persoonlijke nazorg- en timinginformatie.",
          },
          {
            question: "Hoe weet ik welke Botox-behandeling geschikt is?",
            answer:
              "Begin met een consultatie. De behandelaar bespreekt gezichtsbewegingen, wensen, contra-indicaties en doelen voordat een plan wordt voorgesteld.",
          },
        ],
        categoryCta: "Bekijk alle Botox behandelingen",
        bookCta: "Boek Botox consultatie",
        bookingTitle: "Boek Botox in Batumi",
        bookingText:
          "Kies een consultatie als u hulp wilt bij het kiezen tussen opties tegen rimpels, kauwspieren, zweten of andere neuromodulatoropties.",
      },
      fr: {
        title: "Botox à Batumi, Géorgie",
        h1: "Botox à Batumi, Géorgie",
        description:
          "Réservez à Batumi une consultation pour les injections de Botox et les options anti-rides, du masséter ou de la transpiration, avec des informations de suivi claires.",
        eyebrow: "Consultation Botox à Batumi",
        intro:
          "Si vous recherchez Botox Batumi, injections Botox Batumi ou injections anti-rides Batumi, Silk Beauty Salon propose des rendez-vous précédés d'une consultation dans le centre de Batumi, avec une planification réaliste et des conseils de suivi.",
        searchTitle: "Recherches locales prises en charge",
        searchPhrases: [
          "Botox Batumi",
          "Injections Botox Batumi",
          "injections anti-rides Batumi",
          "Prix ​​​​Botox Batumi",
          "où faire du Botox à Batumi",
        ],
        benefitsTitle: "Pourquoi choisir Silk pour le Botox à Batumi",
        benefits: [
          {
            title: "Consultation avant traitement",
            text: "Votre praticien examine les mouvements du visage, les objectifs, le timing, les antécédents médicaux et l’adéquation avant de recommander un plan injectable.",
          },
          {
            title: "Une planification d'apparence naturelle",
            text: "Les rendez-vous visent à adoucir les rides d’expression tout en gardant votre visage équilibré et expressif.",
          },
          {
            title: "Emplacement central Batumi",
            text: "Visitez Silk Beauty Salon au Zurab Gorgiladze 63, à proximité des hôtels du centre-ville Batumi, des magasins et du boulevard.",
          },
        ],
        treatmentTitle: "Options Botox et neuromodulateur",
        treatmentIntro:
          "Explorez les pages de soins associées, puis réservez une consultation afin que l'équipe puisse confirmer ce qui convient à votre visage, au timing et à vos attentes.",
        faqTitle: "Questions Botox Batumi",
        faqs: [
          {
            question: "Puis-je réserver Botox à Batumi en tant que touriste ?",
            answer:
              "Oui. Les clients internationaux peuvent réserver en ligne, appeler ou envoyer un e-mail avant d'arriver. L'équipe vous expliquera le calendrier, le suivi et si le traitement correspond à vos projets de voyage.",
          },
          {
            question: "Où puis-je obtenir du Botox à Batumi ?",
            answer:
              "Silk Beauty Salon propose des rendez-vous de consultation Botox et d'injection anti-rides au Zurab Gorgiladze 63 à Batumi, avec une évaluation de l'adéquation avant le traitement.",
          },
          {
            question: "Quel est le prix Botox en Batumi ?",
            answer:
              "Les prix de départ sont indiqués sur les fiches de soins Botox et sur la liste de prix. Le prix final dépend de la zone de traitement et de la consultation.",
          },
          {
            question: "Le Botox nécessite-t-il un temps d'arrêt ?",
            answer:
              "La plupart des clients reprennent rapidement leurs plans quotidiens normaux, mais votre praticien vous donnera des conseils de suivi et des conseils sur le timing pendant le rendez-vous.",
          },
          {
            question: "Comment puis-je savoir quel traitement Botox est le bon ?",
            answer:
              "Commencez par une consultation. Le praticien vérifie les mouvements du visage, les préoccupations, les contre-indications et les objectifs avant de recommander un plan.",
          },
        ],
        categoryCta: "Voir tous les traitements Botox",
        bookCta: "Réserver une consultation Botox",
        bookingTitle: "Réserver une consultation Botox à Batumi",
        bookingText:
          "Choisissez une consultation si vous souhaitez de l'aide pour choisir entre les options antirides, masséter, anti-transpiration ou autres neuromodulateurs.",
      },
      de: {
        title: "Botox in Batumi, Georgien",
        h1: "Botox in Batumi, Georgien",
        description:
          "Buchen Sie bei Silk Beauty Salon in Batumi eine Beratung zu Botox-Injektionen und Optionen für Falten, Masseter oder starkes Schwitzen, mit klaren Hinweisen zur Nachsorge.",
        eyebrow: "Botox-Beratung in Batumi",
        intro:
          "Wenn Sie nach Botox Batumi-, Botox-Injektionen Batumi oder Anti-Falten-Injektionen Batumi suchen, bietet Silk Beauty Salon beratungsgeführte Injektionstermine im Zentrum von Batumi mit realistischer Planung und Nachsorge an.",
        searchTitle: "Unterstützte lokale Suchen",
        searchPhrases: [
          "Botox Batumi",
          "Botox-Injektionen Batumi",
          "Anti-Falten-Injektionen Batumi",
          "Botox Preis Batumi",
          "Wo bekommt man Botox in Batumi",
        ],
        benefitsTitle: "Warum Kunden Silk für Botox in Batumi wählen",
        benefits: [
          {
            title: "Beratung vor der Behandlung",
            text: "Ihre Fachkraft prüft Gesichtsbewegungen, Ziele, Zeitplanung, relevante medizinische Angaben und Eignung, bevor ein Behandlungsplan besprochen wird.",
          },
          {
            title: "Natürlich wirkende Planung",
            text: "Bei den Terminen geht es darum, Mimikfalten zu mildern und gleichzeitig Ihr Gesicht ausgeglichen und ausdrucksstark zu halten.",
          },
          {
            title: "Zentraler Batumi-Standort",
            text: "Besuchen Sie Silk Beauty Salon unter der Adresse Zurab Gorgiladze 63, in der Nähe zentraler Batumi-Hotels, Geschäfte und des Boulevards.",
          },
        ],
        treatmentTitle: "Botox und Neuromodulator-Optionen",
        treatmentIntro:
          "Erkunden Sie die entsprechenden Behandlungsseiten und vereinbaren Sie dann einen Beratungstermin, damit das Team bestätigen kann, was für Ihr Gesicht, Ihren Zeitpunkt und Ihre Erwartungen geeignet ist.",
        faqTitle: "Botox Batumi Fragen",
        faqs: [
          {
            question: "Kann ich als Tourist Botox in Batumi buchen?",
            answer:
              "Ja. Internationale Kunden können vor ihrer Ankunft online, telefonisch oder per E-Mail buchen. Das Team erklärt Ihnen den Zeitpunkt, die Nachsorge und ob die Behandlung zu Ihren Reiseplänen passt.",
          },
          {
            question: "Wo kann ich Botox in Batumi bekommen?",
            answer:
              "Silk Beauty Salon bietet beratungsgeführte Botox- und Anti-Falten-Injektionstermine bei Zurab Gorgiladze 63 in Batumi an, wobei die Eignung vor der Behandlung überprüft wird.",
          },
          {
            question: "Wie hoch ist der Botox-Preis in Batumi?",
            answer:
              "Die Startpreise sind auf den Behandlungskarten Botox und der Preisliste angegeben. Der endgültige Preis hängt vom Behandlungsbereich und der Beratung ab.",
          },
          {
            question: "Erfordert Botox Ausfallzeiten?",
            answer:
              "Viele Kunden nehmen ihre üblichen Tagesaktivitäten schnell wieder auf. Ihre Fachkraft gibt Ihnen beim Termin individuelle Hinweise zur Nachsorge und Zeitplanung.",
          },
          {
            question: "Woher weiß ich, welche Botox-Behandlung die richtige ist?",
            answer:
              "Beginnen Sie mit einer Beratung. Die Fachkraft bespricht Gesichtsbewegungen, Anliegen, Kontraindikationen und Ziele, bevor ein Plan vorgeschlagen wird.",
          },
        ],
        categoryCta: "Alle Botox-Behandlungen anzeigen",
        bookCta: "Buchen Sie eine Botox-Beratung",
        bookingTitle: "Buchen Sie Botox in Batumi",
        bookingText:
          "Wählen Sie eine Beratung, wenn Sie Hilfe bei der Entscheidung zwischen Anti-Falten-, Masseter-, Schwitz- oder anderen neuromodulatorischen Optionen benötigen.",
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
          nl: {
        title: "Dermale fillers in Batumi",
        h1: "Dermale fillers in Batumi",
        description:
          "Consultatiegerichte dermale fillers in Batumi voor onder meer lippen, wangen, kaaklijn, kin en het gebied onder de ogen bij Silk Beauty Salon.",
        eyebrow: "Fillerconsultatie in Batumi",
        intro:
          "Als u op zoek bent naar fillers Batumi, lipfillers Batumi of fillers in Batumi, plant Silk Beauty Salon gezichtsbalancering met conservatief esthetisch oordeel.",
        searchTitle: "Ondersteunde lokale zoekopdrachten",
        searchPhrases: ["dermale fillers Batumi", "lipfillers Batumi", "fillers in Batumi"],
        benefitsTitle: "Waarom klanten Silk kiezen voor fillers in Batumi",
        benefits: [
          {
            title: "Gezichtsbalans eerst",
            text: "Filler-plannen houden rekening met verhoudingen, profiel, expressie en of een subtiele aanpak geschikter is.",
          },
          {
            title: "Duidelijke verwachtingen",
            text: "Tijdens uw afspraak worden onder meer de zwelling, het risico op blauwe plekken, de timing, het onderhoud en de nazorg besproken.",
          },
          {
            title: "Meerdere vulgebieden",
            text: "Consultaties kunnen betrekking hebben op de lippen, wangen, kin, kaaklijn, holtes onder de ogen en profielbalancering.",
          },
        ],
        treatmentTitle: "Behandelingsopties voor fillers",
        treatmentIntro:
          "Gebruik de onderstaande behandelpagina's om inzicht te krijgen in veel voorkomende fillergebieden en boek vervolgens een consult voor een persoonlijk plan.",
        faqTitle: "Vragen over fillers in Batumi",
        faqs: [
          {
            question: "Kan ik lipfillers boeken in Batumi?",
            answer:
              "Ja. Silk Beauty Salon biedt op consultatie gebaseerde lipfillerplanning, samen met andere dermale fillergebieden.",
          },
          {
            question: "Zullen fillers er natuurlijk uitzien?",
            answer:
              "Het team richt zich op gezichtsharmonie en conservatieve planning. Geschiktheid en verwachte resultaten worden voorafgaand aan de behandeling besproken.",
          },
          {
            question: "Hoe moet ik fillers plannen tijdens reizen?",
            answer:
              "Boek een consultatie vóór belangrijke evenementen of reisdagen, zodat het team de zwelling, het risico op blauwe plekken en de timing kan bespreken.",
          },
        ],
        categoryCta: "Bekijk alle fillers",
        bookCta: "Fillerconsultatie boeken",
        bookingTitle: "Boek dermale fillers in Batumi",
        bookingText:
          "Kies een consult om lipfillers, wangfillers, kaaklijncontouren, kinondersteuning of onderoogplanning te bespreken.",
      },
      fr: {
        title: "Filler et produits de comblement à Batumi",
        h1: "Filler à Batumi",
        description:
          "Consultations pour les fillers à Batumi chez Silk Beauty Salon, notamment pour les lèvres, les joues, la mâchoire, le menton et le contour des yeux.",
        eyebrow: "Consultation filler à Batumi",
        intro:
          "Si vous recherchez des produits de comblement cutané Batumi, des produits de comblement pour les lèvres Batumi ou des produits de comblement Batumi, Silk Beauty Salon prévoit un équilibrage du visage avec un jugement esthétique conservateur.",
        searchTitle: "Recherches locales prises en charge",
        searchPhrases: ["filler Batumi", "filler lèvres Batumi", "produits de comblement Batumi"],
        benefitsTitle: "Pourquoi choisir Silk pour les fillers à Batumi",
        benefits: [
          {
            title: "L’équilibre du visage d’abord",
            text: "Les plans de remplissage tiennent compte des proportions, du profil, de l’expression et déterminent si une approche subtile est plus appropriée.",
          },
          {
            title: "Des attentes claires",
            text: "Votre rendez-vous comprend une discussion sur l’enflure, le risque d’ecchymoses, le moment choisi, l’entretien et le suivi.",
          },
          {
            title: "Plusieurs zones de remplissage",
            text: "Les consultations peuvent couvrir les lèvres, les joues, le menton, la mâchoire, les creux sous les yeux et l'équilibrage du profil.",
          },
        ],
        treatmentTitle: "Options de traitement de comblement cutané",
        treatmentIntro:
          "Utilisez les pages de traitement ci-dessous pour comprendre les zones de comblement courantes, puis réservez une consultation pour un plan personnel.",
        faqTitle: "Questions sur les produits de comblement cutané Batumi",
        faqs: [
          {
            question: "Puis-je réserver un filler des lèvres à Batumi ?",
            answer:
              "Oui. Silk Beauty Salon propose une planification du remplissage des lèvres basée sur une consultation ainsi que d'autres domaines de remplissage cutané.",
          },
          {
            question: "Les fillers auront-ils un aspect naturel ?",
            answer:
              "L’équipe se concentre sur l’harmonie du visage et une planification conservatrice. L'adéquation et les résultats attendus sont discutés avant le traitement.",
          },
          {
            question: "Comment dois-je planifier les activités de remplissage en voyage ?",
            answer:
              "Réservez une consultation avant des événements importants ou des jours de voyage afin que l'équipe puisse discuter de l'enflure, du risque d'ecchymoses et du moment choisi.",
          },
        ],
        categoryCta: "Voir tous les produits de comblement cutané",
        bookCta: "Réserver une consultation filler",
        bookingTitle: "Réserver une consultation filler à Batumi",
        bookingText:
          "Choisissez une consultation pour discuter du comblement des lèvres, du comblement des joues, du contour de la mâchoire, du soutien du menton ou de la planification sous les yeux.",
      },
      de: {
        title: "Hautfüller in Batumi",
        h1: "Hautfüller in Batumi",
        description:
          "Beratungsgeführte Hautfüller in Batumi für Lippen, Wangen, Kieferpartie, Kinn und Tränenkanalplanung in Silk Beauty Salon.",
        eyebrow: "Füllstoffe Batumi",
        intro:
          "Wenn Sie nach Hautfüllern Batumi, Lippenfüllern Batumi oder Füllern in Batumi suchen, plant Silk Beauty Salon den Gesichtsausgleich mit konservativem ästhetischem Urteilsvermögen.",
        searchTitle: "Unterstützte lokale Suchen",
        searchPhrases: ["Hautfüller Batumi", "Lippenfüller Batumi", "Füllstoffe in Batumi"],
        benefitsTitle: "Warum Kunden Silk für Filler in Batumi wählen",
        benefits: [
          {
            title: "Zuerst die Gesichtsausgewogenheit",
            text: "Füllpläne berücksichtigen Proportionen, Profil, Ausdruck und ob ein subtiler Ansatz besser geeignet ist.",
          },
          {
            title: "Klare Erwartungen",
            text: "Ihr Termin beinhaltet eine Besprechung von Schwellungen, dem Risiko von Blutergüssen, dem Zeitpunkt, der Wartung und der Nachsorge.",
          },
          {
            title: "Mehrere Füllbereiche",
            text: "Beratungen können Lippen, Wangen, Kinn, Kieferpartie, Augenhöhlen und Profilausgleich umfassen.",
          },
        ],
        treatmentTitle: "Möglichkeiten der Dermalfiller-Behandlung",
        treatmentIntro:
          "Nutzen Sie die folgenden Behandlungsseiten, um häufige Füllbereiche zu verstehen, und vereinbaren Sie dann einen Beratungstermin für einen persönlichen Plan.",
        faqTitle: "Fragen zu Hautfüllern Batumi",
        faqs: [
          {
            question: "Kann ich Lippenfüller in Batumi buchen?",
            answer:
              "Ja. Silk Beauty Salon bietet zusammen mit anderen Hautfüllerbereichen eine beratungsgeführte Planung von Lippenfüllern an.",
          },
          {
            question: "Sehen Füllstoffe natürlich aus?",
            answer:
              "Das Team konzentriert sich auf Gesichtsharmonie und konservative Planung. Eignung und erwartete Ergebnisse werden vor der Behandlung besprochen.",
          },
          {
            question: "Wie sollte ich Füllstoffe rund um die Reise planen?",
            answer:
              "Vereinbaren Sie vor wichtigen Ereignissen oder Reisetagen einen Beratungstermin, damit das Team Schwellungen, das Risiko von Blutergüssen und den Zeitpunkt besprechen kann.",
          },
        ],
        categoryCta: "Alle Hautfüller anzeigen",
        bookCta: "Beratung zum Füllen von Büchern",
        bookingTitle: "Buchen Sie Hautfüller in Batumi",
        bookingText:
          "Wählen Sie eine Beratung, um Lippenfüller, Wangenfüller, Kieferkonturierung, Kinnunterstützung oder Planung unter den Augen zu besprechen.",
      },
},
  },
  {
    slug: 'skin-treatment-batumi',
    categorySlug: 'skin-treatments',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1800&q=85',
    treatmentSlugs: [
      'is-clinical-fire-ice-peel',
      'skinpen-microneedling',
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
          nl: {
        title: "Huidbehandeling in Batumi",
        h1: "Huidbehandeling in Batumi",
        description:
          "Huidbehandeling, huidverzorging, peelings, microneedling en huidanalyse in Batumi bij Silk Beauty Salon.",
        eyebrow: "Huidverzorging Batumi",
        intro:
          "Als u op zoek bent naar huidbehandeling Batumi, huidverzorging Batumi of huidanalyse Batumi, plant Silk Beauty Salon huidbehandelingen rond uw huidconditie, doelen en timing.",
        searchTitle: "Ondersteunde lokale zoekopdrachten",
        searchPhrases: ["huidbehandeling Batumi", "huidverzorging Batumi", "huidanalyse Batumi"],
        benefitsTitle: "Waarom klanten Silk kiezen voor huidbehandelingen in Batumi",
        benefits: [
          {
            title: "Huidbeoordeling eerst",
            text: "Het team kan gebruik maken van consultatie en huidanalyse om inzicht te krijgen in de textuur, poriën, pigmentatie, roodheid, acne of gevoeligheid.",
          },
          {
            title: "Behandelplannen, geen gissingen",
            text: "Peelings, microneedling, huidanalyse en apparaatgestuurde behandelingen worden geselecteerd op basis van uw huid en schema.",
          },
          {
            title: "Nazorg ingebouwd",
            text: "U ontvangt begeleiding voor blootstelling aan de zon, thuiszorg en timing rond het weer, reizen en evenementen.",
          },
        ],
        treatmentTitle: "Opties voor huidbehandeling",
        treatmentIntro:
          "Ontdek huidanalyses, peelings, microneedling en op collageen gerichte behandelingen voordat u uw consultatie boekt.",
        faqTitle: "Huidbehandeling Batumi vragen",
        faqs: [
          {
            question: "Welke huidbehandeling moet ik boeken in Batumi?",
            answer:
              "Als u het niet zeker weet, boek dan eerst een consult of huidanalyse. Het team kan een geschikte peeling, microneedling of apparaatbehandeling aanbevelen.",
          },
          {
            question: "Kan ik vóór een evenement een huidbehandeling boeken?",
            answer:
              "Ja, maar timing is belangrijk. Sommige behandelingen passen vlak voor een evenement, terwijl andere hersteltijd vragen. Overleg daarom vooraf met het team.",
          },
          {
            question: "Bieden jullie opties voor acnesporen, poriën en huidtextuur?",
            answer:
              "Ja. Behandelingsopties kunnen worden besproken voor textuur, poriën, acne, dofheid, roodheid en problemen met de huidkwaliteit.",
          },
        ],
        categoryCta: "Bekijk alle huidbehandelingen",
        bookCta: "Huidconsult boeken",
        bookingTitle: "Boek een huidbehandeling in Batumi",
        bookingText:
          "Kies voor een consult als je een huidplan wilt voor peelings, microneedling, collageenondersteuning of huidanalyse.",
      },
      fr: {
        title: "Soins de la peau à Batumi",
        h1: "Soins de la peau à Batumi",
        description:
          "Soins de la peau, peelings, microneedling et analyse cutanée à Batumi chez Silk Beauty Salon.",
        eyebrow: "Soins de la peau Batumi",
        intro:
          "Si vous recherchez un traitement cutané Batumi, un soin cutané Batumi ou une analyse cutanée Batumi, Silk Beauty Salon planifie des traitements cutanés en fonction de votre état de peau, de vos objectifs et de votre timing.",
        searchTitle: "Recherches locales prises en charge",
        searchPhrases: ["traitement de la peau Batumi", "soins de la peau Batumi", "analyse cutanée Batumi"],
        benefitsTitle: "Pourquoi choisir Silk pour les soins de la peau à Batumi",
        benefits: [
          {
            title: "Évaluation cutanée en premier",
            text: "L'équipe peut utiliser la consultation et l'analyse cutanée pour comprendre la texture, les pores, la pigmentation, les rougeurs, les marques d'acné ou la sensibilité.",
          },
          {
            title: "Des plans de traitement, pas des suppositions",
            text: "Les peelings, le microneedling, l'analyse cutanée et les traitements pilotés par des appareils sont sélectionnés en fonction de votre peau et de votre emploi du temps.",
          },
          {
            title: "Suivi intégré",
            text: "Vous recevez des conseils sur l'exposition au soleil, les soins à domicile et le calendrier concernant la météo, les voyages et les événements du Batumi.",
          },
        ],
        treatmentTitle: "Options de traitement de la peau",
        treatmentIntro:
          "Découvrez l'analyse cutanée, les peelings, le microneedling et les traitements axés sur le collagène avant de réserver votre consultation.",
        faqTitle: "Questions sur le traitement de la peau Batumi",
        faqs: [
          {
            question: "Quel soin de la peau dois-je réserver au Batumi ?",
            answer:
              "En cas de doute, réservez d'abord une consultation ou une analyse de peau. L’équipe peut recommander un traitement par peeling, microneedling ou appareil adapté.",
          },
          {
            question: "Puis-je réserver un soin de la peau avant un événement ?",
            answer:
              "Oui, mais le timing compte. Certains soins sont adaptés aux événements tandis que d'autres nécessitent un temps de récupération, alors renseignez-vous auprès de l'équipe avant de réserver à proximité d'un événement.",
          },
          {
            question: "Aidez-vous à atténuer les marques, les pores et la texture de l'acné ?",
            answer:
              "Oui. Les options de traitement peuvent être discutées pour les problèmes de texture, de pores, de marques d’acné, de teint terne, de rougeurs et de qualité de la peau.",
          },
        ],
        categoryCta: "Voir tous les soins de la peau",
        bookCta: "Réserver une consultation cutanée",
        bookingTitle: "Réservez un traitement de la peau à Batumi",
        bookingText:
          "Choisissez une consultation si vous souhaitez un plan cutané pour les peelings, le microneedling, le soutien au collagène ou l'analyse cutanée.",
      },
      de: {
        title: "Hautbehandlung in Batumi",
        h1: "Hautbehandlung in Batumi",
        description:
          "Hautbehandlung, Hautpflege, Peelings, Microneedling und Hautanalyse in Batumi bei Silk Beauty Salon.",
        eyebrow: "Hautpflege Batumi",
        intro:
          "Wenn Sie nach einer Hautbehandlung Batumi, einer Hautpflege Batumi oder einer Hautanalyse Batumi suchen, plant Silk Beauty Salon Hautbehandlungen entsprechend Ihrem Hautzustand, Ihren Zielen und Ihrem Zeitplan.",
        searchTitle: "Unterstützte lokale Suchen",
        searchPhrases: ["Hautbehandlung Batumi", "Hautpflege Batumi", "Hautanalyse Batumi"],
        benefitsTitle: "Warum Kunden Silk für Hautbehandlungen in Batumi wählen",
        benefits: [
          {
            title: "Zuerst Hautbeurteilung",
            text: "Durch Beratung und Hautanalyse kann das Team Beschaffenheit, Poren, Pigmentierung, Rötungen, Akneflecken oder Empfindlichkeit verstehen.",
          },
          {
            title: "Behandlungspläne, keine Vermutungen",
            text: "Peelings, Mikronadelung, Hautanalyse und gerätegesteuerte Behandlungen werden entsprechend Ihrer Haut und Ihrem Zeitplan ausgewählt.",
          },
          {
            title: "Nachsorge eingebaut",
            text: "Sie erhalten Hinweise zur Sonneneinstrahlung, zur häuslichen Pflege und zum Timing rund um Wetter, Reisen und Veranstaltungen.",
          },
        ],
        treatmentTitle: "Möglichkeiten der Hautbehandlung",
        treatmentIntro:
          "Entdecken Sie Hautanalysen, Peelings, Microneedling und Kollagenbehandlungen, bevor Sie Ihren Beratungstermin buchen.",
        faqTitle: "Fragen zur Hautbehandlung Batumi",
        faqs: [
          {
            question: "Welche Hautbehandlung sollte ich in Batumi buchen?",
            answer:
              "Wenn Sie unsicher sind, vereinbaren Sie zunächst einen Beratungstermin oder eine Hautanalyse. Das Team kann Ihnen ein geeignetes Peeling, Microneedling oder eine Gerätebehandlung empfehlen.",
          },
          {
            question: "Kann ich vor einer Veranstaltung eine Hautbehandlung buchen?",
            answer:
              "Ja, aber das Timing ist wichtig. Einige Behandlungen sind veranstaltungsfreundlich, während andere eine Erholungszeit erfordern. Fragen Sie daher das Team, bevor Sie in der Nähe einer Veranstaltung buchen.",
          },
          {
            question: "Helfen Sie bei Akneflecken, Poren und Textur?",
            answer:
              "Ja. Es können Behandlungsoptionen für Beschaffenheit, Poren, Akneflecken, Mattheit, Rötung und Hautqualitätsprobleme besprochen werden.",
          },
        ],
        categoryCta: "Alle Hautbehandlungen ansehen",
        bookCta: "Buchen Sie eine Hautberatung",
        bookingTitle: "Hautbehandlung in Batumi buchen",
        bookingText:
          "Wählen Sie eine Beratung, wenn Sie einen Hautplan für Peelings, Microneedling, Kollagenunterstützung oder Hautanalyse wünschen.",
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
          nl: {
        title: "Lipfillers in Batumi, Georgië",
        h1: "Lipfillers in Batumi",
        description:
          "Lipfillers op adviesbasis in Batumi bij Silk Beauty Salon met natuurlijk ogende planning, vanafprijzen en begeleiding bij nazorg.",
        eyebrow: "Consult voor het vullen van de lippen",
        topic: "afspraken voor lipfillers",
        searchPhrases: ["lipfillers Batumi", "lipvergroting Batumi", "lipfiller Georgië"],
        categoryCta: "Bekijk de mogelijkheden voor fillers",
        bookCta: "Boek een lipfiller consult",
        bookingTitle: "Boek lipfillers in Batumi",
        bookingText:
          "Kies een consultatie om de lipvorm, symmetrie, volumedoelen, timing en de startprijs te bespreken voordat een behandeling wordt bevestigd.",
      },
      fr: {
        title: "Produits de comblement des lèvres à Batumi, Géorgie",
        h1: "Filler des lèvres à Batumi",
        description:
          "Consultation pour le filler des lèvres à Batumi chez Silk Beauty Salon, avec une planification naturelle, des prix de départ et des conseils de suivi.",
        eyebrow: "Consultation de comblement des lèvres",
        topic: "rendez-vous pour le remplissage des lèvres",
        searchPhrases: ["filler lèvres Batumi", "augmentation des lèvres Batumi", "filler lèvres Géorgie"],
        categoryCta: "Voir les options de produits de comblement cutané",
        bookCta: "Réserver une consultation de comblement des lèvres",
        bookingTitle: "Réserver une consultation pour les lèvres à Batumi",
        bookingText:
          "Choisissez une consultation pour discuter de la forme des lèvres, de la symétrie, des objectifs de volume, du calendrier et du prix de départ avant de confirmer tout traitement.",
      },
      de: {
        title: "Lippenfüller in Batumi, Georgien",
        h1: "Lippenfüller in Batumi",
        description:
          "Beratungsgeführte Lippenfüller in Batumi und Silk Beauty Salon mit natürlich aussehender Planung, Einstiegspreisen und Nachsorgeberatung.",
        eyebrow: "Beratung zum Lippenfüller",
        topic: "Termine für Lippenfüller",
        searchPhrases: ["Lippenfüller Batumi", "Lippenvergrößerung Batumi", "Lippenfüller Georgien"],
        categoryCta: "Sehen Sie sich die Optionen für Hautfüller an",
        bookCta: "Buchen Sie eine Beratung zum Lippenfüller",
        bookingTitle: "Buchen Sie Lippenfüller in Batumi",
        bookingText:
          "Wählen Sie eine Beratung, um Lippenform, Symmetrie, Volumenziele, Zeitpunkt und den Startpreis zu besprechen, bevor eine Behandlung bestätigt wird.",
      },
}),
  },
  {
    slug: 'acne-treatment-batumi',
    categorySlug: 'skin-treatments',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1800&q=85',
    treatmentSlugs: [
      'skinpen-microneedling',
      'is-clinical-fire-ice-peel',
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
          nl: {
        title: "Acnebehandeling in Batumi, Georgië",
        h1: "Acnebehandeling in Batumi",
        description:
          "Ontdek de opties voor acne- en post-acnebehandeling op consultatie in Batumi, waaronder huidanalyse, peelings, microneedling en apparaatgestuurde zorg.",
        eyebrow: "Ondersteuning voor acne en post-acne",
        topic: "planning van acne- en post-acnebehandeling",
        searchPhrases: ["acnebehandeling Batumi", "Behandeling van acnelittekens Batumi", "post-acnebehandeling Batumi"],
        categoryCta: "Bekijk de huidbehandelingsopties",
        bookCta: "Acne consult boeken",
        bookingTitle: "Boek een acnebehandelingsconsult in Batumi",
        bookingText:
          "Kies een consultatiegesprek om actieve puistjes, acne, textuur, huidige producten, behandelingstijdstip en nazorg te bespreken.",
      },
      fr: {
        title: "Traitement de l'acné à Batumi, Géorgie",
        h1: "Traitement de l'acné à Batumi",
        description:
          "Découvrez à Batumi des options de soins pour l'acné et les marques post-acné, notamment l'analyse cutanée, les peelings, le microneedling et les soins assistés par appareil.",
        eyebrow: "Accompagnement acnéique et post-acnéique",
        topic: "Planification du traitement de l'acné et post-acné",
        searchPhrases: ["traitement de l'acné Batumi", "traitement des cicatrices d'acné Batumi", "traitement post-acnéique Batumi"],
        categoryCta: "Voir les options de traitement de la peau",
        bookCta: "Réserver une consultation contre l'acné",
        bookingTitle: "Réservez une consultation de traitement de l'acné à Batumi",
        bookingText:
          "Choisissez une consultation pour discuter des éruptions cutanées actives, des marques d'acné, de la texture, des produits actuels, du calendrier du traitement et du suivi.",
      },
      de: {
        title: "Aknebehandlung in Batumi, Georgien",
        h1: "Aknebehandlung in Batumi",
        description:
          "Entdecken Sie in Batumi konsultativ geführte Akne- und Post-Akne-Behandlungsmöglichkeiten, einschließlich Hautanalyse, Peelings, Mikronadelung und gerätegeführter Pflege.",
        eyebrow: "Unterstützung bei Akne und Post-Akne",
        topic: "Akne- und Post-Akne-Behandlungsplanung",
        searchPhrases: ["Aknebehandlung Batumi", "Aknenarbenbehandlung Batumi", "Post-Akne-Behandlung Batumi"],
        categoryCta: "Sehen Sie sich die Behandlungsmöglichkeiten für die Haut an",
        bookCta: "Buchen Sie eine Akne-Beratung",
        bookingTitle: "Beratung zur Aknebehandlung in Batumi buchen",
        bookingText:
          "Wählen Sie eine Beratung, um aktive Ausbrüche, Akneflecken, Textur, aktuelle Produkte, Behandlungszeitpunkt und Nachsorge zu besprechen.",
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
          nl: {
        title: "Nagels, manicure en pedicure in Batumi",
        h1: "Nagels in Batumi",
        description:
          "Boek manicure-, pedicure-, gelnagels- en nagelafwerkingsdiensten in Batumi met duidelijke timing, startprijzen en afspraakplanning.",
        eyebrow: "Nagelsalon Batumi",
        topic: "afspraken voor nagelservice",
        searchPhrases: ["nagels Batumi", "manicure Batumi", "pedicure Batumi"],
        categoryCta: "Bekijk nagelservices",
        bookCta: "Nagelafspraak boeken",
        bookingTitle: "Boek een nagelafspraak in Batumi",
        bookingText:
          "Kies een nagelafspraak voor vormgeving, nagelriemverzorging, gelmanicure, nail art, pedicureplanning of afwerking die klaar is voor een evenement.",
      },
      fr: {
        title: "Ongles, manucure et pédicure à Batumi",
        h1: "Ongles à Batumi",
        description:
          "Réservez une manucure, une pédicure, des ongles en gel ou une finition des ongles à Batumi, avec des durées et des prix de départ clairs.",
        eyebrow: "Salon de manucure Batumi",
        topic: "rendez-vous pour le service des ongles",
        searchPhrases: ["ongles Batumi", "manucure Batumi", "pédicure Batumi"],
        categoryCta: "Voir les services d'ongles",
        bookCta: "Prendre rendez-vous pour les ongles",
        bookingTitle: "Réserver un rendez-vous pour les ongles à Batumi",
        bookingText:
          "Choisissez un rendez-vous pour le façonnage, le soin des cuticules, la manucure en gel, le nail art, la planification d'une pédicure ou la finition d'un événement.",
      },
      de: {
        title: "Nägel, Maniküre und Pediküre in Batumi",
        h1: "Nägel in Batumi",
        description:
          "Buchen Sie Maniküre-, Pediküre-, Gelnägel- und Nagelfinish-Dienstleistungen in Batumi mit klarem Zeitplan, Startpreisen und Terminplanung.",
        eyebrow: "Nagelstudio Batumi",
        topic: "Nagelservice-Termine",
        searchPhrases: ["Nägel Batumi", "Maniküre Batumi", "Pediküre Batumi"],
        categoryCta: "Nageldienstleistungen ansehen",
        bookCta: "Nageltermin vereinbaren",
        bookingTitle: "Nageltermin in Batumi buchen",
        bookingText:
          "Wählen Sie einen Nageltermin für Formgebung, Nagelhautpflege, Gel-Maniküre, Nagelkunst, Pediküre-Planung oder Event-Ready-Finishing.",
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
          nl: {
        title: "Wimpers en wenkbrauwen in Batumi",
        h1: "Wimpers en wenkbrauwen in Batumi",
        description:
          "Boek wimperlifting, wimperstyling, Russische volumewimpers en ondersteuning voor wenkbrauwlaminering in Batumi met afspraakplanning op basis van advies.",
        eyebrow: "Wimper- en wenkbrauwafspraken",
        topic: "afspraak voor wimper- en wenkbrauwservice",
        searchPhrases: ["wimpers Batumi", "wimperlifting Batumi", "wenkbrauwlaminering Batumi"],
        categoryCta: "Bekijk wimperservices",
        bookCta: "Maak een afspraak voor wimpers of wenkbrauwen",
        bookingTitle: "Boek wimpers en wenkbrauwen in Batumi",
        bookingText:
          "Maak een afspraak om de wimperlift, wimperstyling, wenkbrauwlaminering, vormvoorkeuren, timing en nazorg te bespreken.",
      },
      fr: {
        title: "Cils et sourcils à Batumi",
        h1: "Cils et sourcils à Batumi",
        description:
          "Réservez à Batumi un rehaussement ou un stylisme des cils, des extensions volume russe ou une lamination des sourcils, après échange sur vos préférences.",
        eyebrow: "Rendez-vous cils et sourcils",
        topic: "rendez-vous pour le service des cils et des sourcils",
        searchPhrases: ["cils Batumi", "rehaussement de cils Batumi", "lamination des sourcils Batumi"],
        categoryCta: "Voir les services de cils",
        bookCta: "Prendre rendez-vous pour les cils ou les sourcils",
        bookingTitle: "Réserver les cils et les sourcils à Batumi",
        bookingText:
          "Choisissez un rendez-vous pour discuter du rehaussement et du style des cils, de la lamination des sourcils, de la forme souhaitée, du calendrier et de l'entretien.",
      },
      de: {
        title: "Wimpern und Brauen in Batumi",
        h1: "Wimpern und Brauen in Batumi",
        description:
          "Buchen Sie Wimpernlifting, Wimpernstyling, russische Volumenwimpern und Unterstützung bei der Augenbrauenlaminierung in Batumi mit Beratungsterminplanung.",
        eyebrow: "Termine für Wimpern und Augenbrauen",
        topic: "Termine für den Wimpern- und Augenbrauenservice",
        searchPhrases: ["Wimpern Batumi", "Wimpernlift Batumi", "Augenbrauenlaminierung Batumi"],
        categoryCta: "Wimpernservices ansehen",
        bookCta: "Buchen Sie einen Wimpern- oder Augenbrauentermin",
        bookingTitle: "Buchen Sie Wimpern und Brauen in Batumi",
        bookingText:
          "Wählen Sie einen Termin, um Wimpernlifting, Wimpernstyling, Augenbrauenlaminierung, Formpräferenzen, Zeitpunkt und Nachsorge zu besprechen.",
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
