import type { Locale } from '@/i18n';

type Highlight = { title: string; text: string };
type Faq = { question: string; answer: string };

export type BeautySalonBatumiCopy = {
  title: string;
  description: string;
  home: string;
  breadcrumb: string;
  eyebrow: string;
  h1: string;
  intro: string;
  book: string;
  treatments: string;
  whyEyebrow: string;
  whyTitle: string;
  whyText: string;
  highlights: Highlight[];
  servicesEyebrow: string;
  servicesTitle: string;
  servicesText: string;
  visitEyebrow: string;
  visitTitle: string;
  visitText: string;
  address: string;
  contact: string;
  hours: string;
  faqTitle: string;
  faqs: Faq[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
};

export const beautySalonBatumiCopy: Record<Locale, BeautySalonBatumiCopy> = {
  en: {
    title: 'Beauty Salon in Batumi, Georgia',
    description:
      'Visit Silk Beauty Salon at Zurab Gorgiladze 63 in Batumi for Botox and filler consultations, skin care, nails, lashes, prices, and online booking.',
    home: 'Home',
    breadcrumb: 'Beauty salon Batumi',
    eyebrow: 'Batumi beauty salon',
    h1: 'Beauty Salon in Batumi, Georgia',
    intro:
      'Silk Beauty Salon welcomes local clients and visitors for consultation-led Botox and filler appointments, skin care, acne consultations, nails, lashes, and brows at Zurab Gorgiladze 63.',
    book: 'Book online',
    treatments: 'View treatments',
    whyEyebrow: 'Plan your visit',
    whyTitle: 'Clear service, price, and booking information',
    whyText:
      'Use the service pages to compare starting-price guidance and appointment options. If you are unsure what to choose, start with a consultation.',
    highlights: [
      { title: 'Consultation-led', text: 'Discuss your goal and timing before confirming a service.' },
      { title: 'Prices online', text: 'Check starting prices before you book.' },
      { title: 'Central Batumi', text: 'Find the salon at Zurab Gorgiladze 63.' },
      { title: 'Direct contact', text: 'Book online or contact the salon by phone, WhatsApp, or email.' },
    ],
    servicesEyebrow: 'Services in Batumi',
    servicesTitle: 'Choose the information you need',
    servicesText:
      'Move directly to a service, the full pricelist, or online booking without searching through a long treatment catalogue.',
    visitEyebrow: 'Visit us',
    visitTitle: 'Find Silk Beauty Salon in Batumi',
    visitText:
      'The salon is at Zurab Gorgiladze 63. Contact the salon before visiting if you want to confirm service availability or timing.',
    address: 'Address',
    contact: 'Phone and email',
    hours: 'Opening hours',
    faqTitle: 'Questions about Silk Beauty Salon in Batumi',
    faqs: [
      { question: 'Where is Silk Beauty Salon?', answer: 'The salon is at Zurab Gorgiladze 63, Batumi 6010, Georgia.' },
      { question: 'Can visitors to Batumi book?', answer: 'Yes. Use online booking or contact the salon before your visit.' },
      { question: 'Are prices available online?', answer: 'Yes. The pricelist shows starting prices; the final price is confirmed for the selected service.' },
      { question: 'How can I contact the salon?', answer: 'Use the phone, WhatsApp, email, or online booking links shown on this website.' },
    ],
    ctaTitle: 'Ready to book in Batumi?',
    ctaText: 'Choose a service or start with a consultation if you need help selecting an appointment.',
    ctaButton: 'Book an appointment',
  },
  ka: {
    title: 'სილამაზის სალონი ბათუმში, საქართველო',
    description:
      'ეწვიეთ Silk Beauty Salon-ს ზურაბ გორგილაძის 63-ში: ბოტოქსისა და ფილერის კონსულტაცია, კანის მოვლა, ფრჩხილები, წამწამები, ფასები და ონლაინ დაჯავშნა.',
    home: 'მთავარი',
    breadcrumb: 'სილამაზის სალონი ბათუმში',
    eyebrow: 'სილამაზის სალონი ბათუმში',
    h1: 'სილამაზის სალონი ბათუმში, საქართველო',
    intro:
      'Silk Beauty Salon ადგილობრივებსა და სტუმრებს სთავაზობს კონსულტაციაზე დაფუძნებულ ბოტოქსისა და ფილერის ვიზიტებს, კანის მოვლას, აკნეს კონსულტაციას, ფრჩხილების, წამწამებისა და წარბების სერვისებს.',
    book: 'ონლაინ დაჯავშნა',
    treatments: 'სერვისების ნახვა',
    whyEyebrow: 'დაგეგმეთ ვიზიტი',
    whyTitle: 'გასაგები ინფორმაცია სერვისებზე, ფასებსა და დაჯავშნაზე',
    whyText:
      'სერვისების გვერდებზე შეადარეთ საწყისი ფასები და ვიზიტის ვარიანტები. თუ არჩევანში დარწმუნებული არ ხართ, დაიწყეთ კონსულტაციით.',
    highlights: [
      { title: 'კონსულტაციით', text: 'სერვისის დადასტურებამდე განიხილეთ მიზანი და დრო.' },
      { title: 'ფასები ონლაინ', text: 'დაჯავშნამდე ნახეთ საწყისი ფასები.' },
      { title: 'ბათუმის ცენტრი', text: 'სალონი მდებარეობს ზურაბ გორგილაძის 63-ში.' },
      { title: 'პირდაპირი კონტაქტი', text: 'დაჯავშნეთ ონლაინ ან დაგვიკავშირდით ტელეფონით, WhatsApp-ით ან ელფოსტით.' },
    ],
    servicesEyebrow: 'სერვისები ბათუმში',
    servicesTitle: 'აირჩიეთ საჭირო ინფორმაცია',
    servicesText: 'პირდაპირ გადადით სერვისზე, სრულ ფასებზე ან ონლაინ დაჯავშნაზე.',
    visitEyebrow: 'გვესტუმრეთ',
    visitTitle: 'იპოვეთ Silk Beauty Salon ბათუმში',
    visitText: 'სალონი მდებარეობს ზურაბ გორგილაძის 63-ში. ვიზიტამდე შეგიძლიათ დააზუსტოთ სერვისის ხელმისაწვდომობა და დრო.',
    address: 'მისამართი',
    contact: 'ტელეფონი და ელფოსტა',
    hours: 'სამუშაო საათები',
    faqTitle: 'კითხვები Silk Beauty Salon-ის შესახებ ბათუმში',
    faqs: [
      { question: 'სად მდებარეობს Silk Beauty Salon?', answer: 'სალონი მდებარეობს ზურაბ გორგილაძის 63-ში, ბათუმი 6010, საქართველო.' },
      { question: 'ბათუმის სტუმრებს შეუძლიათ დაჯავშნა?', answer: 'დიახ. გამოიყენეთ ონლაინ დაჯავშნა ან წინასწარ დაუკავშირდით სალონს.' },
      { question: 'ფასები ონლაინ არის?', answer: 'დიახ. ფასების გვერდზე მითითებულია საწყისი ფასები; საბოლოო ფასი დასტურდება არჩეული სერვისისთვის.' },
      { question: 'როგორ დავუკავშირდე სალონს?', answer: 'გამოიყენეთ ამ ვებგვერდზე მოცემული ტელეფონი, WhatsApp, ელფოსტა ან ონლაინ დაჯავშნა.' },
    ],
    ctaTitle: 'მზად ხართ ბათუმში ვიზიტის დასაჯავშნად?',
    ctaText: 'აირჩიეთ სერვისი ან დაიწყეთ კონსულტაციით, თუ დახმარება გჭირდებათ.',
    ctaButton: 'ვიზიტის დაჯავშნა',
  },
  ru: {
    title: 'Салон красоты в Батуми, Грузия',
    description:
      'Silk Beauty Salon на ул. Зураба Горгиладзе, 63: консультации по ботоксу и филлерам, уход за кожей, ногти, ресницы, цены и онлайн-запись.',
    home: 'Главная',
    breadcrumb: 'Салон красоты Батуми',
    eyebrow: 'Салон красоты в Батуми',
    h1: 'Салон красоты в Батуми, Грузия',
    intro:
      'Silk Beauty Salon принимает жителей и гостей Батуми на консультации по ботоксу и филлерам, уходу за кожей и акне, а также на услуги для ногтей, ресниц и бровей.',
    book: 'Записаться онлайн',
    treatments: 'Посмотреть услуги',
    whyEyebrow: 'Спланируйте визит',
    whyTitle: 'Понятная информация об услугах, ценах и записи',
    whyText: 'Сравните стартовые цены и варианты записи. Если вы не уверены в выборе, начните с консультации.',
    highlights: [
      { title: 'Сначала консультация', text: 'Обсудите цель и сроки перед подтверждением услуги.' },
      { title: 'Цены онлайн', text: 'Посмотрите стартовые цены до записи.' },
      { title: 'Центр Батуми', text: 'Салон находится на ул. Зураба Горгиладзе, 63.' },
      { title: 'Прямая связь', text: 'Запишитесь онлайн или свяжитесь по телефону, WhatsApp или email.' },
    ],
    servicesEyebrow: 'Услуги в Батуми',
    servicesTitle: 'Выберите нужную информацию',
    servicesText: 'Перейдите прямо к услуге, полному прайс-листу или онлайн-записи.',
    visitEyebrow: 'Как нас найти',
    visitTitle: 'Silk Beauty Salon в Батуми',
    visitText: 'Салон находится на ул. Зураба Горгиладзе, 63. Перед визитом можно уточнить доступность услуги и время.',
    address: 'Адрес',
    contact: 'Телефон и email',
    hours: 'Часы работы',
    faqTitle: 'Вопросы о Silk Beauty Salon в Батуми',
    faqs: [
      { question: 'Где находится Silk Beauty Salon?', answer: 'Салон находится по адресу: ул. Зураба Горгиладзе, 63, Батуми 6010, Грузия.' },
      { question: 'Могут ли туристы записаться?', answer: 'Да. Запишитесь онлайн или свяжитесь с салоном до визита.' },
      { question: 'Есть ли цены на сайте?', answer: 'Да. В прайс-листе указаны стартовые цены; окончательная цена подтверждается для выбранной услуги.' },
      { question: 'Как связаться с салоном?', answer: 'Используйте телефон, WhatsApp, email или онлайн-запись на этом сайте.' },
    ],
    ctaTitle: 'Готовы записаться в Батуми?',
    ctaText: 'Выберите услугу или начните с консультации, если нужна помощь.',
    ctaButton: 'Записаться',
  },
  tr: {
    title: 'Batum’da Güzellik Salonu, Gürcistan',
    description:
      'Zurab Gorgiladze 63’teki Silk Beauty Salon: botoks ve dolgu danışmanlığı, cilt bakımı, tırnak, kirpik, fiyatlar ve online randevu.',
    home: 'Ana sayfa',
    breadcrumb: 'Batum güzellik salonu',
    eyebrow: 'Batum güzellik salonu',
    h1: 'Batum’da Güzellik Salonu, Gürcistan',
    intro:
      'Silk Beauty Salon, Batum sakinleri ve ziyaretçileri için danışmanlık odaklı botoks ve dolgu randevuları, cilt ve akne bakımı, tırnak, kirpik ve kaş hizmetleri sunar.',
    book: 'Online randevu',
    treatments: 'Hizmetleri gör',
    whyEyebrow: 'Ziyaretinizi planlayın',
    whyTitle: 'Hizmet, fiyat ve randevu bilgileri açıkça sunulur',
    whyText: 'Başlangıç fiyatlarını ve randevu seçeneklerini karşılaştırın. Emin değilseniz danışmanlıkla başlayın.',
    highlights: [
      { title: 'Danışmanlık odaklı', text: 'Hizmeti onaylamadan önce hedefinizi ve zamanlamayı görüşün.' },
      { title: 'Online fiyatlar', text: 'Randevudan önce başlangıç fiyatlarını kontrol edin.' },
      { title: 'Batum merkezi', text: 'Salon Zurab Gorgiladze 63 adresindedir.' },
      { title: 'Doğrudan iletişim', text: 'Online randevu alın veya telefon, WhatsApp ya da e-posta ile ulaşın.' },
    ],
    servicesEyebrow: 'Batum’daki hizmetler',
    servicesTitle: 'İhtiyacınız olan bilgiye geçin',
    servicesText: 'Doğrudan hizmet sayfasına, tam fiyat listesine veya online randevuya gidin.',
    visitEyebrow: 'Bizi ziyaret edin',
    visitTitle: 'Batum’daki Silk Beauty Salon',
    visitText: 'Salon Zurab Gorgiladze 63 adresindedir. Gelmeden önce hizmet uygunluğunu ve saati teyit edebilirsiniz.',
    address: 'Adres',
    contact: 'Telefon ve e-posta',
    hours: 'Çalışma saatleri',
    faqTitle: 'Batum’daki Silk Beauty Salon hakkında sorular',
    faqs: [
      { question: 'Silk Beauty Salon nerede?', answer: 'Salon Zurab Gorgiladze 63, Batum 6010, Gürcistan adresindedir.' },
      { question: 'Batum’u ziyaret edenler randevu alabilir mi?', answer: 'Evet. Online randevu alın veya ziyaretinizden önce salonla iletişime geçin.' },
      { question: 'Fiyatlar internette mevcut mu?', answer: 'Evet. Fiyat listesinde başlangıç fiyatları yer alır; son fiyat seçilen hizmet için teyit edilir.' },
      { question: 'Salonla nasıl iletişim kurabilirim?', answer: 'Bu sitedeki telefon, WhatsApp, e-posta veya online randevu bağlantılarını kullanın.' },
    ],
    ctaTitle: 'Batum’da randevu almaya hazır mısınız?',
    ctaText: 'Bir hizmet seçin veya seçim konusunda yardım için danışmanlıkla başlayın.',
    ctaButton: 'Randevu al',
  },
  ar: {
    title: 'صالون تجميل في باتومي، جورجيا',
    description:
      'زوروا Silk Beauty Salon في 63 زوراب غورغيلادزه للاستشارة حول البوتوكس والفيلر والعناية بالبشرة والأظافر والرموش والأسعار والحجز عبر الإنترنت.',
    home: 'الرئيسية',
    breadcrumb: 'صالون تجميل باتومي',
    eyebrow: 'صالون تجميل في باتومي',
    h1: 'صالون تجميل في باتومي، جورجيا',
    intro:
      'يستقبل Silk Beauty Salon سكان باتومي وزوارها لمواعيد البوتوكس والفيلر القائمة على الاستشارة والعناية بالبشرة وحب الشباب وخدمات الأظافر والرموش والحواجب.',
    book: 'الحجز عبر الإنترنت',
    treatments: 'عرض الخدمات',
    whyEyebrow: 'خططي لزيارتك',
    whyTitle: 'معلومات واضحة عن الخدمات والأسعار والحجز',
    whyText: 'قارني الأسعار الابتدائية وخيارات المواعيد. إذا لم تكوني متأكدة، ابدئي باستشارة.',
    highlights: [
      { title: 'تبدأ بالاستشارة', text: 'ناقشي الهدف والتوقيت قبل تأكيد الخدمة.' },
      { title: 'الأسعار عبر الإنترنت', text: 'راجعي الأسعار الابتدائية قبل الحجز.' },
      { title: 'وسط باتومي', text: 'يقع الصالون في 63 زوراب غورغيلادزه.' },
      { title: 'تواصل مباشر', text: 'احجزي عبر الإنترنت أو تواصلي بالهاتف أو واتساب أو البريد الإلكتروني.' },
    ],
    servicesEyebrow: 'خدمات في باتومي',
    servicesTitle: 'اختاري المعلومات التي تحتاجينها',
    servicesText: 'انتقلي مباشرة إلى الخدمة أو قائمة الأسعار الكاملة أو الحجز عبر الإنترنت.',
    visitEyebrow: 'زورونا',
    visitTitle: 'Silk Beauty Salon في باتومي',
    visitText: 'يقع الصالون في 63 زوراب غورغيلادزه. يمكن تأكيد توفر الخدمة والوقت قبل الزيارة.',
    address: 'العنوان',
    contact: 'الهاتف والبريد الإلكتروني',
    hours: 'ساعات العمل',
    faqTitle: 'أسئلة عن Silk Beauty Salon في باتومي',
    faqs: [
      { question: 'أين يقع Silk Beauty Salon؟', answer: 'يقع الصالون في 63 زوراب غورغيلادزه، باتومي 6010، جورجيا.' },
      { question: 'هل يمكن لزوار باتومي الحجز؟', answer: 'نعم. استخدمي الحجز عبر الإنترنت أو تواصلي مع الصالون قبل الزيارة.' },
      { question: 'هل الأسعار متاحة عبر الإنترنت؟', answer: 'نعم. تعرض قائمة الأسعار أسعاراً ابتدائية، ويؤكد السعر النهائي للخدمة المختارة.' },
      { question: 'كيف أتواصل مع الصالون؟', answer: 'استخدمي الهاتف أو واتساب أو البريد الإلكتروني أو الحجز عبر الإنترنت الموجود في هذا الموقع.' },
    ],
    ctaTitle: 'هل أنت مستعدة للحجز في باتومي؟',
    ctaText: 'اختاري خدمة أو ابدئي باستشارة إذا كنت تحتاجين إلى مساعدة.',
    ctaButton: 'احجزي موعداً',
  },
  he: {
    title: 'מכון יופי בבטומי, גאורגיה',
    description:
      'Silk Beauty Salon בזוראב גורגילדזה 63: ייעוץ בוטוקס ופילרים, טיפולי עור, ציפורניים, ריסים, מחירים והזמנה אונליין.',
    home: 'דף הבית',
    breadcrumb: 'מכון יופי בטומי',
    eyebrow: 'מכון יופי בבטומי',
    h1: 'מכון יופי בבטומי, גאורגיה',
    intro:
      'Silk Beauty Salon מקבל תושבים ומבקרים בבטומי לפגישות בוטוקס ופילרים בגישה ייעוצית, טיפולי עור ואקנה ושירותי ציפורניים, ריסים וגבות.',
    book: 'הזמנה אונליין',
    treatments: 'הצגת שירותים',
    whyEyebrow: 'תכנון הביקור',
    whyTitle: 'מידע ברור על שירותים, מחירים והזמנה',
    whyText: 'השוו מחירי התחלה ואפשרויות תור. אם אינכם בטוחים, התחילו בייעוץ.',
    highlights: [
      { title: 'מתחילים בייעוץ', text: 'דברו על המטרה והתזמון לפני אישור השירות.' },
      { title: 'מחירים אונליין', text: 'בדקו מחירי התחלה לפני ההזמנה.' },
      { title: 'מרכז בטומי', text: 'המכון נמצא בזוראב גורגילדזה 63.' },
      { title: 'קשר ישיר', text: 'הזמינו אונליין או צרו קשר בטלפון, WhatsApp או בדוא״ל.' },
    ],
    servicesEyebrow: 'שירותים בבטומי',
    servicesTitle: 'עברו למידע שאתם צריכים',
    servicesText: 'עברו ישירות לשירות, למחירון המלא או להזמנה אונליין.',
    visitEyebrow: 'בקרו אותנו',
    visitTitle: 'Silk Beauty Salon בבטומי',
    visitText: 'המכון נמצא בזוראב גורגילדזה 63. אפשר לאשר זמינות שירות ושעה לפני הביקור.',
    address: 'כתובת',
    contact: 'טלפון ודוא״ל',
    hours: 'שעות פתיחה',
    faqTitle: 'שאלות על Silk Beauty Salon בבטומי',
    faqs: [
      { question: 'איפה נמצא Silk Beauty Salon?', answer: 'המכון נמצא בזוראב גורגילדזה 63, בטומי 6010, גאורגיה.' },
      { question: 'האם מבקרים בבטומי יכולים להזמין תור?', answer: 'כן. הזמינו אונליין או צרו קשר עם המכון לפני הביקור.' },
      { question: 'האם המחירים זמינים אונליין?', answer: 'כן. המחירון מציג מחירי התחלה; המחיר הסופי מאושר לשירות שנבחר.' },
      { question: 'איך יוצרים קשר עם המכון?', answer: 'השתמשו בטלפון, WhatsApp, דוא״ל או בקישור ההזמנה אונליין שבאתר.' },
    ],
    ctaTitle: 'מוכנים להזמין תור בבטומי?',
    ctaText: 'בחרו שירות או התחילו בייעוץ אם אתם צריכים עזרה.',
    ctaButton: 'הזמנת תור',
  },
};
