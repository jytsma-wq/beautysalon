import type { Locale } from '@/i18n';

type AboutCopy = {
  home: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  detailsEyebrow: string;
  detailsTitle: string;
  detailsText: string;
  legalName: string;
  address: string;
  contact: string;
  hours: string;
  standardsTitle: string;
  standards: string[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
};

type VisitorCopy = {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  book: string;
  services: string;
  planTitle: string;
  planText: string;
  planSteps: string[];
  serviceTitle: string;
  serviceText: string;
  locationTitle: string;
  locationText: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  hours: string;
  ctaTitle: string;
  ctaText: string;
};

export const aboutPageCopy: Record<Locale, AboutCopy> = {
  en: {
    home: 'Home',
    title: 'About Silk Beauty Salon in Batumi',
    description: 'Business, location, contact, opening-hour, service, and booking information for Silk Beauty Salon in Batumi, Georgia.',
    eyebrow: 'About the salon',
    intro: 'Silk Beauty Salon is a beauty salon at Zurab Gorgiladze 63 in Batumi. The website provides service information, starting-price guidance, contact details, and online booking in six languages.',
    detailsEyebrow: 'Verified business details',
    detailsTitle: 'Plan your visit with clear information',
    detailsText: 'Use the contact details and opening hours below to confirm the service and appointment time that suit you.',
    legalName: 'Business name', address: 'Address', contact: 'Contact', hours: 'Opening hours',
    standardsTitle: 'What the website provides',
    standards: ['Service pages with consultation and booking guidance', 'A central pricelist with starting-price information', 'Direct phone, WhatsApp, email, and online booking links'],
    ctaTitle: 'Book a visit to Silk Beauty Salon', ctaText: 'Choose a service online or start with a consultation.', ctaButton: 'Book an appointment',
  },
  ka: {
    home: 'მთავარი',
    title: 'Silk Beauty Salon-ის შესახებ ბათუმში',
    description: 'Silk Beauty Salon-ის ბიზნესის, მდებარეობის, კონტაქტის, სამუშაო საათების, სერვისებისა და დაჯავშნის ინფორმაცია ბათუმში.',
    eyebrow: 'სალონის შესახებ',
    intro: 'Silk Beauty Salon არის სილამაზის სალონი ზურაბ გორგილაძის 63-ში, ბათუმში. ვებგვერდზე მოცემულია სერვისები, საწყისი ფასები, კონტაქტი და ონლაინ დაჯავშნა ექვს ენაზე.',
    detailsEyebrow: 'დადასტურებული ბიზნეს ინფორმაცია', detailsTitle: 'დაგეგმეთ ვიზიტი გასაგები ინფორმაციით',
    detailsText: 'გამოიყენეთ ქვემოთ მოცემული კონტაქტი და სამუშაო საათები სერვისისა და დროის დასაზუსტებლად.',
    legalName: 'ბიზნესის სახელი', address: 'მისამართი', contact: 'კონტაქტი', hours: 'სამუშაო საათები',
    standardsTitle: 'რას გთავაზობთ ვებგვერდი',
    standards: ['სერვისების გვერდები კონსულტაციისა და დაჯავშნის ინფორმაციით', 'სრული ფასების გვერდი საწყისი ფასებით', 'ტელეფონი, WhatsApp, ელფოსტა და ონლაინ დაჯავშნა'],
    ctaTitle: 'დაჯავშნეთ ვიზიტი Silk Beauty Salon-ში', ctaText: 'აირჩიეთ სერვისი ონლაინ ან დაიწყეთ კონსულტაციით.', ctaButton: 'ვიზიტის დაჯავშნა',
  },
  ru: {
    home: 'Главная',
    title: 'О Silk Beauty Salon в Батуми',
    description: 'Информация о салоне Silk Beauty Salon в Батуми: адрес, контакты, часы работы, услуги и онлайн-запись.',
    eyebrow: 'О салоне',
    intro: 'Silk Beauty Salon — салон красоты на ул. Зураба Горгиладзе, 63 в Батуми. На сайте есть услуги, стартовые цены, контакты и онлайн-запись на шести языках.',
    detailsEyebrow: 'Проверенные данные', detailsTitle: 'Планируйте визит по понятной информации',
    detailsText: 'Используйте контакты и часы работы ниже, чтобы уточнить услугу и удобное время.',
    legalName: 'Название', address: 'Адрес', contact: 'Контакты', hours: 'Часы работы',
    standardsTitle: 'Что есть на сайте',
    standards: ['Страницы услуг с информацией о консультации и записи', 'Единый прайс-лист со стартовыми ценами', 'Телефон, WhatsApp, email и онлайн-запись'],
    ctaTitle: 'Запишитесь в Silk Beauty Salon', ctaText: 'Выберите услугу онлайн или начните с консультации.', ctaButton: 'Записаться',
  },
  tr: {
    home: 'Ana sayfa',
    title: 'Batum’daki Silk Beauty Salon Hakkında',
    description: 'Batum’daki Silk Beauty Salon için işletme, adres, iletişim, çalışma saatleri, hizmet ve online randevu bilgileri.',
    eyebrow: 'Salon hakkında',
    intro: 'Silk Beauty Salon, Batum’da Zurab Gorgiladze 63 adresinde bulunan bir güzellik salonudur. Web sitesinde altı dilde hizmet, başlangıç fiyatı, iletişim ve online randevu bilgileri bulunur.',
    detailsEyebrow: 'Doğrulanmış işletme bilgileri', detailsTitle: 'Ziyaretinizi açık bilgilerle planlayın',
    detailsText: 'Hizmet ve randevu saatini teyit etmek için aşağıdaki iletişim ve çalışma saatlerini kullanın.',
    legalName: 'İşletme adı', address: 'Adres', contact: 'İletişim', hours: 'Çalışma saatleri',
    standardsTitle: 'Web sitesinde bulunan bilgiler',
    standards: ['Danışmanlık ve randevu bilgileri içeren hizmet sayfaları', 'Başlangıç fiyatlarını gösteren merkezi fiyat listesi', 'Telefon, WhatsApp, e-posta ve online randevu bağlantıları'],
    ctaTitle: 'Silk Beauty Salon için randevu alın', ctaText: 'Online bir hizmet seçin veya danışmanlıkla başlayın.', ctaButton: 'Randevu al',
  },
  ar: {
    home: 'الرئيسية',
    title: 'عن Silk Beauty Salon في باتومي',
    description: 'معلومات Silk Beauty Salon في باتومي: العنوان والتواصل وساعات العمل والخدمات والحجز عبر الإنترنت.',
    eyebrow: 'عن الصالون',
    intro: 'Silk Beauty Salon هو صالون تجميل في 63 زوراب غورغيلادزه في باتومي. يقدم الموقع معلومات الخدمات والأسعار الابتدائية والتواصل والحجز عبر الإنترنت بست لغات.',
    detailsEyebrow: 'بيانات عمل مؤكدة', detailsTitle: 'خططي لزيارتك بمعلومات واضحة',
    detailsText: 'استخدمي معلومات التواصل وساعات العمل لتأكيد الخدمة والموعد المناسب.',
    legalName: 'اسم النشاط', address: 'العنوان', contact: 'التواصل', hours: 'ساعات العمل',
    standardsTitle: 'ما يقدمه الموقع',
    standards: ['صفحات خدمات مع معلومات الاستشارة والحجز', 'قائمة أسعار مركزية بأسعار ابتدائية', 'روابط الهاتف وواتساب والبريد الإلكتروني والحجز عبر الإنترنت'],
    ctaTitle: 'احجزي زيارة إلى Silk Beauty Salon', ctaText: 'اختاري خدمة عبر الإنترنت أو ابدئي باستشارة.', ctaButton: 'احجزي موعداً',
  },
  he: {
    home: 'דף הבית',
    title: 'אודות Silk Beauty Salon בבטומי',
    description: 'מידע על Silk Beauty Salon בבטומי: כתובת, קשר, שעות פתיחה, שירותים והזמנה אונליין.',
    eyebrow: 'אודות המכון',
    intro: 'Silk Beauty Salon הוא מכון יופי בזוראב גורגילדזה 63 בבטומי. האתר מציג מידע על שירותים, מחירי התחלה, קשר והזמנה אונליין בשש שפות.',
    detailsEyebrow: 'פרטי עסק מאומתים', detailsTitle: 'תכננו את הביקור בעזרת מידע ברור',
    detailsText: 'השתמשו בפרטי הקשר ובשעות הפתיחה כדי לאשר את השירות והשעה המתאימים.',
    legalName: 'שם העסק', address: 'כתובת', contact: 'יצירת קשר', hours: 'שעות פתיחה',
    standardsTitle: 'מה האתר מספק',
    standards: ['עמודי שירות עם מידע על ייעוץ והזמנה', 'מחירון מרכזי עם מחירי התחלה', 'טלפון, WhatsApp, דוא״ל והזמנה אונליין'],
    ctaTitle: 'הזמינו ביקור ב-Silk Beauty Salon', ctaText: 'בחרו שירות אונליין או התחילו בייעוץ.', ctaButton: 'הזמנת תור',
  },
};

export const visitorPageCopy: Record<Locale, VisitorCopy> = {
  en: {
    title: 'Beauty appointments in Batumi for visitors',
    description: 'Plan a Silk Beauty Salon appointment before or during a visit to Batumi using online booking, WhatsApp, phone, email, and six website languages.',
    eyebrow: 'Visiting Batumi', h1: 'Plan a beauty appointment in Batumi',
    intro: 'Use the localized service pages and pricelist to compare options before booking. Confirm the service, timing, spoken language, and any preparation directly with the salon.',
    book: 'Book online', services: 'View services', planTitle: 'Before you book',
    planText: 'A short direct check with the salon helps avoid assumptions about timing, availability, and preparation.',
    planSteps: ['Choose a service or consultation', 'Review the starting-price guidance', 'Confirm timing and spoken-language support', 'Use the salon’s direct contact channels if you have questions'],
    serviceTitle: 'Popular service information', serviceText: 'Open a dedicated Batumi service page or the full pricelist.',
    locationTitle: 'Visit Silk Beauty Salon', locationText: 'The salon is at Zurab Gorgiladze 63, Batumi 6010, Georgia.',
    address: 'Address', phone: 'Phone', whatsapp: 'WhatsApp', email: 'Email', hours: 'Opening hours',
    ctaTitle: 'Contact the salon before your visit', ctaText: 'Ask about availability, timing, and the appointment that fits your plans.',
  },
  ka: {
    title: 'სილამაზის ვიზიტები ბათუმის სტუმრებისთვის', description: 'დაგეგმეთ Silk Beauty Salon-ში ვიზიტი ონლაინ დაჯავშნით, WhatsApp-ით, ტელეფონით, ელფოსტით და ექვსენოვანი ვებგვერდით.',
    eyebrow: 'სტუმრად ბათუმში', h1: 'დაგეგმეთ სილამაზის ვიზიტი ბათუმში', intro: 'დაჯავშნამდე შეადარეთ სერვისები და ფასები. პირდაპირ სალონთან დააზუსტეთ სერვისი, დრო, სასაუბრო ენა და მომზადება.',
    book: 'ონლაინ დაჯავშნა', services: 'სერვისების ნახვა', planTitle: 'დაჯავშნამდე', planText: 'სალონთან მოკლე პირდაპირი კონტაქტი თავიდან აგაცილებთ გაუგებრობას დროსა და ხელმისაწვდომობაზე.',
    planSteps: ['აირჩიეთ სერვისი ან კონსულტაცია', 'ნახეთ საწყისი ფასები', 'დააზუსტეთ დრო და სასაუბრო ენა', 'კითხვების შემთხვევაში გამოიყენეთ პირდაპირი კონტაქტი'],
    serviceTitle: 'პოპულარული სერვისების ინფორმაცია', serviceText: 'გახსენით ბათუმის სერვისის გვერდი ან სრული ფასები.',
    locationTitle: 'ეწვიეთ Silk Beauty Salon-ს', locationText: 'სალონი მდებარეობს ზურაბ გორგილაძის 63-ში, ბათუმი 6010, საქართველო.',
    address: 'მისამართი', phone: 'ტელეფონი', whatsapp: 'WhatsApp', email: 'ელფოსტა', hours: 'სამუშაო საათები',
    ctaTitle: 'დაუკავშირდით სალონს ვიზიტამდე', ctaText: 'იკითხეთ ხელმისაწვდომობის, დროისა და თქვენთვის შესაფერისი ვიზიტის შესახებ.',
  },
  ru: {
    title: 'Запись в салон красоты для гостей Батуми', description: 'Запланируйте визит в Silk Beauty Salon через онлайн-запись, WhatsApp, телефон, email и сайт на шести языках.',
    eyebrow: 'Визит в Батуми', h1: 'Запланируйте визит в салон красоты в Батуми', intro: 'Сравните услуги и стартовые цены до записи. Уточните услугу, время, язык общения и подготовку напрямую у салона.',
    book: 'Записаться онлайн', services: 'Посмотреть услуги', planTitle: 'Перед записью', planText: 'Короткий прямой контакт с салоном поможет уточнить время, доступность и подготовку.',
    planSteps: ['Выберите услугу или консультацию', 'Посмотрите стартовые цены', 'Уточните время и язык общения', 'Задайте вопросы через прямые контакты салона'],
    serviceTitle: 'Популярные услуги', serviceText: 'Откройте страницу услуги в Батуми или полный прайс-лист.',
    locationTitle: 'Посетите Silk Beauty Salon', locationText: 'Адрес: ул. Зураба Горгиладзе, 63, Батуми 6010, Грузия.',
    address: 'Адрес', phone: 'Телефон', whatsapp: 'WhatsApp', email: 'Email', hours: 'Часы работы',
    ctaTitle: 'Свяжитесь с салоном до визита', ctaText: 'Уточните доступность, время и подходящий формат записи.',
  },
  tr: {
    title: 'Batum ziyaretçileri için güzellik randevuları', description: 'Silk Beauty Salon randevunuzu online rezervasyon, WhatsApp, telefon, e-posta ve altı dilli web sitesiyle planlayın.',
    eyebrow: 'Batum’u ziyaret ederken', h1: 'Batum’da güzellik randevusu planlayın', intro: 'Randevudan önce hizmetleri ve başlangıç fiyatlarını karşılaştırın. Hizmet, saat, konuşma dili ve hazırlığı doğrudan salonla teyit edin.',
    book: 'Online randevu', services: 'Hizmetleri gör', planTitle: 'Randevudan önce', planText: 'Salonla kısa bir doğrudan görüşme zamanlama, uygunluk ve hazırlık konularını netleştirir.',
    planSteps: ['Bir hizmet veya danışmanlık seçin', 'Başlangıç fiyatlarını inceleyin', 'Saati ve konuşma dilini teyit edin', 'Sorularınız için doğrudan iletişim kanallarını kullanın'],
    serviceTitle: 'Popüler hizmet bilgileri', serviceText: 'Batum hizmet sayfasını veya tam fiyat listesini açın.',
    locationTitle: 'Silk Beauty Salon’u ziyaret edin', locationText: 'Salon Zurab Gorgiladze 63, Batum 6010, Gürcistan adresindedir.',
    address: 'Adres', phone: 'Telefon', whatsapp: 'WhatsApp', email: 'E-posta', hours: 'Çalışma saatleri',
    ctaTitle: 'Ziyaretinizden önce salonla iletişime geçin', ctaText: 'Uygunluk, saat ve planınıza uyan randevuyu sorun.',
  },
  ar: {
    title: 'مواعيد تجميل لزوار باتومي', description: 'خططي لموعد في Silk Beauty Salon عبر الحجز الإلكتروني وواتساب والهاتف والبريد الإلكتروني وموقع بست لغات.',
    eyebrow: 'زيارة باتومي', h1: 'خططي لموعد تجميل في باتومي', intro: 'قارني الخدمات والأسعار الابتدائية قبل الحجز. أكدي الخدمة والوقت ولغة التواصل والتحضير مباشرة مع الصالون.',
    book: 'الحجز عبر الإنترنت', services: 'عرض الخدمات', planTitle: 'قبل الحجز', planText: 'يساعد التواصل المباشر القصير مع الصالون على توضيح الوقت والتوفر والتحضير.',
    planSteps: ['اختاري خدمة أو استشارة', 'راجعي الأسعار الابتدائية', 'أكدي الوقت ولغة التواصل', 'استخدمي قنوات التواصل المباشر للأسئلة'],
    serviceTitle: 'معلومات الخدمات الشائعة', serviceText: 'افتحي صفحة الخدمة في باتومي أو قائمة الأسعار الكاملة.',
    locationTitle: 'زوري Silk Beauty Salon', locationText: 'العنوان: 63 زوراب غورغيلادزه، باتومي 6010، جورجيا.',
    address: 'العنوان', phone: 'الهاتف', whatsapp: 'واتساب', email: 'البريد الإلكتروني', hours: 'ساعات العمل',
    ctaTitle: 'تواصلي مع الصالون قبل الزيارة', ctaText: 'اسألي عن التوفر والوقت والموعد المناسب لخطتك.',
  },
  he: {
    title: 'תורי יופי למבקרים בבטומי', description: 'תכננו תור ב-Silk Beauty Salon באמצעות הזמנה אונליין, WhatsApp, טלפון, דוא״ל ואתר בשש שפות.',
    eyebrow: 'ביקור בבטומי', h1: 'תכננו תור יופי בבטומי', intro: 'השוו שירותים ומחירי התחלה לפני ההזמנה. אשרו ישירות עם המכון את השירות, השעה, שפת השיחה וההכנה.',
    book: 'הזמנה אונליין', services: 'הצגת שירותים', planTitle: 'לפני ההזמנה', planText: 'קשר ישיר קצר עם המכון עוזר להבהיר תזמון, זמינות והכנה.',
    planSteps: ['בחרו שירות או ייעוץ', 'בדקו מחירי התחלה', 'אשרו שעה ושפת שיחה', 'השתמשו בערוצי הקשר הישירים לשאלות'],
    serviceTitle: 'מידע על שירותים פופולריים', serviceText: 'פתחו עמוד שירות בבטומי או את המחירון המלא.',
    locationTitle: 'בקרו ב-Silk Beauty Salon', locationText: 'המכון נמצא בזוראב גורגילדזה 63, בטומי 6010, גאורגיה.',
    address: 'כתובת', phone: 'טלפון', whatsapp: 'WhatsApp', email: 'דוא״ל', hours: 'שעות פתיחה',
    ctaTitle: 'צרו קשר עם המכון לפני הביקור', ctaText: 'שאלו על זמינות, שעה והתור שמתאים לתוכנית שלכם.',
  },
};

export type TransparentPageKey = 'offers' | 'press' | 'careers' | 'media';

type TransparentPageCopy = {
  title: string;
  description: string;
  eyebrow: string;
  cta: string;
};

export const transparentPageCopy: Record<
  Locale,
  Record<TransparentPageKey, TransparentPageCopy>
> = {
  en: {
    offers: { title: 'Current offers', description: 'Only confirmed salon offers are published. Contact Silk Beauty Salon to ask what is currently available.', eyebrow: 'Offers', cta: 'Contact the salon' },
    press: { title: 'Media enquiries', description: 'For verified business information, interview requests, or approved media assets, contact Silk Beauty Salon directly.', eyebrow: 'Press and media', cta: 'Email the salon' },
    careers: { title: 'Careers at Silk Beauty Salon', description: 'Contact the salon directly to ask about current professional opportunities. No public vacancy is listed on this page.', eyebrow: 'Careers', cta: 'Send an enquiry' },
    media: { title: 'Verified salon media', description: 'Salon and client media is published only when its source and permission are confirmed. Visit the official social profiles for current public media.', eyebrow: 'Photos and video', cta: 'Visit Instagram' },
  },
  ka: {
    offers: { title: 'მიმდინარე შეთავაზებები', description: 'ქვეყნდება მხოლოდ დადასტურებული შეთავაზებები. მიმდინარე ინფორმაციისთვის დაუკავშირდით Silk Beauty Salon-ს.', eyebrow: 'შეთავაზებები', cta: 'დაუკავშირდით სალონს' },
    press: { title: 'მედიის საკითხები', description: 'დადასტურებული ბიზნეს ინფორმაციის, ინტერვიუს ან დამტკიცებული მედია მასალისათვის დაუკავშირდით სალონს.', eyebrow: 'პრესა და მედია', cta: 'მიწერეთ სალონს' },
    careers: { title: 'კარიერა Silk Beauty Salon-ში', description: 'მიმდინარე პროფესიული შესაძლებლობების შესახებ პირდაპირ დაუკავშირდით სალონს. ამ გვერდზე საჯარო ვაკანსია არ არის გამოქვეყნებული.', eyebrow: 'კარიერა', cta: 'გაგზავნეთ მოთხოვნა' },
    media: { title: 'დადასტურებული სალონის მედია', description: 'სალონისა და კლიენტის მასალა ქვეყნდება მხოლოდ წყაროსა და ნებართვის დადასტურების შემდეგ. მიმდინარე მასალა იხილეთ ოფიციალურ სოციალურ პროფილებში.', eyebrow: 'ფოტო და ვიდეო', cta: 'Instagram-ის ნახვა' },
  },
  ru: {
    offers: { title: 'Текущие предложения', description: 'Публикуются только подтвержденные предложения. Свяжитесь с Silk Beauty Salon, чтобы уточнить актуальные условия.', eyebrow: 'Предложения', cta: 'Связаться с салоном' },
    press: { title: 'Для СМИ', description: 'За проверенной информацией о бизнесе, интервью или одобренными медиа-материалами обращайтесь напрямую в салон.', eyebrow: 'Пресса и медиа', cta: 'Написать в салон' },
    careers: { title: 'Карьера в Silk Beauty Salon', description: 'Свяжитесь с салоном, чтобы узнать о текущих профессиональных возможностях. Публичных вакансий на этой странице нет.', eyebrow: 'Карьера', cta: 'Отправить запрос' },
    media: { title: 'Проверенные материалы салона', description: 'Фото и видео салона или клиентов публикуются только после подтверждения источника и разрешения. Актуальные материалы смотрите в официальных соцсетях.', eyebrow: 'Фото и видео', cta: 'Открыть Instagram' },
  },
  tr: {
    offers: { title: 'Güncel teklifler', description: 'Yalnızca doğrulanmış salon teklifleri yayınlanır. Güncel durumu sormak için Silk Beauty Salon ile iletişime geçin.', eyebrow: 'Teklifler', cta: 'Salonla iletişime geç' },
    press: { title: 'Medya talepleri', description: 'Doğrulanmış işletme bilgileri, röportaj talepleri veya onaylı medya materyalleri için salonla doğrudan iletişime geçin.', eyebrow: 'Basın ve medya', cta: 'Salona e-posta gönder' },
    careers: { title: 'Silk Beauty Salon’da kariyer', description: 'Güncel profesyonel fırsatları sormak için salonla doğrudan iletişime geçin. Bu sayfada açık ilan yayınlanmamaktadır.', eyebrow: 'Kariyer', cta: 'Bilgi iste' },
    media: { title: 'Doğrulanmış salon medyası', description: 'Salon ve müşteri medyası yalnızca kaynak ve izin doğrulandığında yayınlanır. Güncel paylaşımlar için resmi sosyal profilleri ziyaret edin.', eyebrow: 'Fotoğraf ve video', cta: 'Instagram’a git' },
  },
  ar: {
    offers: { title: 'العروض الحالية', description: 'ننشر العروض المؤكدة فقط. تواصلي مع Silk Beauty Salon للسؤال عن المتاح حالياً.', eyebrow: 'العروض', cta: 'تواصلي مع الصالون' },
    press: { title: 'استفسارات الإعلام', description: 'للحصول على معلومات مؤكدة أو طلب مقابلة أو مواد إعلامية معتمدة، تواصلي مباشرة مع الصالون.', eyebrow: 'الصحافة والإعلام', cta: 'مراسلة الصالون' },
    careers: { title: 'العمل في Silk Beauty Salon', description: 'تواصلي مباشرة مع الصالون للسؤال عن الفرص المهنية الحالية. لا توجد وظيفة عامة منشورة في هذه الصفحة.', eyebrow: 'الوظائف', cta: 'إرسال استفسار' },
    media: { title: 'وسائط صالون مؤكدة', description: 'لا ننشر صور أو فيديوهات الصالون والعملاء إلا بعد تأكيد المصدر والإذن. تابعي الحسابات الرسمية للمحتوى الحالي.', eyebrow: 'صور وفيديو', cta: 'زيارة Instagram' },
  },
  he: {
    offers: { title: 'הצעות עדכניות', description: 'רק הצעות מאומתות מתפרסמות. צרו קשר עם Silk Beauty Salon כדי לשאול מה זמין כעת.', eyebrow: 'הצעות', cta: 'יצירת קשר עם המכון' },
    press: { title: 'פניות מדיה', description: 'למידע עסקי מאומת, בקשות ראיון או חומרי מדיה מאושרים, צרו קשר ישירות עם המכון.', eyebrow: 'עיתונות ומדיה', cta: 'שליחת דוא״ל' },
    careers: { title: 'קריירה ב-Silk Beauty Salon', description: 'צרו קשר ישירות עם המכון כדי לשאול על הזדמנויות מקצועיות. אין משרה ציבורית המפורסמת בעמוד זה.', eyebrow: 'קריירה', cta: 'שליחת פנייה' },
    media: { title: 'מדיה מאומתת של המכון', description: 'תמונות וסרטונים של המכון או לקוחות מתפרסמים רק לאחר אימות מקור והרשאה. לעדכונים בקרו בפרופילים החברתיים הרשמיים.', eyebrow: 'תמונות ווידאו', cta: 'ביקור ב-Instagram' },
  },
};
