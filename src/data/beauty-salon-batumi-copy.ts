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
  nl: {
    title: "Schoonheidssalon in Batumi, Georgië",
    description:
      "Bezoek Silk Beauty Salon op Zurab Gorgiladze 63 in Batumi voor Botox- en fillerconsultaties, huidverzorging, nagels, wimpers, prijzen en online boeken.",
    home: "Startpagina",
    breadcrumb: "Schoonheidssalon Batumi",
    eyebrow: "Batumi schoonheidssalon",
    h1: "Schoonheidssalon in Batumi, Georgië",
    intro:
      "Silk Beauty Salon verwelkomt lokale klanten en bezoekers voor consultatiegerichte Botox- en fillerafspraken, huidverzorging, acneconsultaties, nagels, wimpers en wenkbrauwen aan Zurab Gorgiladze 63.",
    book: "Boek online",
    treatments: "Bekijk behandelingen",
    whyEyebrow: "Plan uw bezoek",
    whyTitle: "Duidelijke service-, prijs- en boekingsinformatie",
    whyText:
      "Gebruik de servicepagina's om vanafprijsbegeleiding en afspraakmogelijkheden te vergelijken. Als u niet zeker weet wat u moet kiezen, begin dan met een adviesgesprek.",
    highlights: [
      { title: "Op overleg gebaseerd", text: "Bespreek uw doel en timing voordat u een dienst bevestigt." },
      { title: "Prijzen online", text: "Controleer de vanafprijzen voordat u boekt." },
      { title: "Centraal Batumi", text: "Vind de salon op Zurab Gorgiladze 63." },
      { title: "Direct contact", text: "Boek online of neem telefonisch, WhatsApp of e-mail contact op met de salon." },
    ],
    servicesEyebrow: "Diensten in Batumi",
    servicesTitle: "Kies de informatie die u nodig heeft",
    servicesText:
      "Ga direct naar een dienst, de volledige prijslijst of online boeken zonder door een lange behandelcatalogus te hoeven bladeren.",
    visitEyebrow: "Bezoek ons",
    visitTitle: "Zoek Silk Beauty Salon in Batumi",
    visitText:
      "De salon bevindt zich op Zurab Gorgiladze 63. Neem vóór uw bezoek contact op met de salon als u de beschikbaarheid of timing van de service wilt bevestigen.",
    address: "Adres",
    contact: "Telefoon en e-mail",
    hours: "Openingstijden",
    faqTitle: "Vragen over Silk Beauty Salon en Batumi",
    faqs: [
      { question: "Waar is Silk Beauty Salon?", answer: "De salon bevindt zich op Zurab Gorgiladze 63, Batumi 6010, Georgië." },
      { question: "Kunnen bezoekers van Batumi boeken?", answer: "Ja. Maak gebruik van online reserveren of neem voor uw bezoek contact op met de salon." },
      { question: "Zijn prijzen online beschikbaar?", answer: "Ja. Op de prijslijst staan ​​vanafprijzen; de definitieve prijs wordt bevestigd voor de geselecteerde dienst." },
      { question: "Hoe kan ik contact opnemen met de salon?", answer: "Gebruik de telefoon, WhatsApp, e-mail of online boekingslinks die op deze website worden weergegeven." },
    ],
    ctaTitle: "Klaar om te boeken in Batumi?",
    ctaText: "Kies een dienst of start met een adviesgesprek als u hulp nodig heeft bij het maken van een afspraak.",
    ctaButton: "Boek een afspraak",
  },
  fr: {
    title: "Salon de beauté à Batumi, Géorgie",
    description:
      "Visitez Silk Beauty Salon au 63 Zurab Gorgiladze à Batumi pour des consultations Botox et filler, des soins de la peau, des ongles, des cils, les tarifs et la réservation en ligne.",
    home: "Accueil",
    breadcrumb: "Institut de beauté Batumi",
    eyebrow: "Salon de beauté Batumi",
    h1: "Salon de beauté à Batumi, Géorgie",
    intro:
      "Silk Beauty Salon accueille les habitants et les visiteurs pour des consultations Botox et filler, des soins de la peau et de l'acné, ainsi que des services pour les ongles, les cils et les sourcils au 63 Zurab Gorgiladze.",
    book: "Réservez en ligne",
    treatments: "Voir les traitements",
    whyEyebrow: "Planifiez votre visite",
    whyTitle: "Informations claires sur le service, le prix et la réservation",
    whyText:
      "Utilisez les pages de service pour comparer les conseils sur les prix de départ et les options de rendez-vous. Si vous ne savez pas quoi choisir, commencez par une consultation.",
    highlights: [
      { title: "Mené par des consultations", text: "Discutez de votre objectif et de votre timing avant de confirmer un service." },
      { title: "Tarifs en ligne", text: "Vérifiez les prix de départ avant de réserver." },
      { title: "Centrale Batumi", text: "Retrouvez le salon au Zurab Gorgiladze 63." },
      { title: "Contact direct", text: "Réservez en ligne ou contactez le salon par téléphone, WhatsApp ou par e-mail." },
    ],
    servicesEyebrow: "Services à Batumi",
    servicesTitle: "Choisissez les informations dont vous avez besoin",
    servicesText:
      "Accédez directement à un service, à la liste de prix complète ou à une réservation en ligne sans chercher dans un long catalogue de soins.",
    visitEyebrow: "Visitez-nous",
    visitTitle: "Trouver Silk Beauty Salon à Batumi",
    visitText:
      "Le salon est situé au Zurab Gorgiladze 63. Contactez le salon avant de vous rendre si vous souhaitez confirmer la disponibilité ou le calendrier du service.",
    address: "Adresse",
    contact: "Téléphone et email",
    hours: "Horaires d'ouverture",
    faqTitle: "Questions sur Silk Beauty Salon à Batumi",
    faqs: [
      { question: "Où se trouve Silk Beauty Salon ?", answer: "Le salon est situé au Zurab Gorgiladze 63, Batumi 6010, Géorgie." },
      { question: "Les visiteurs de Batumi peuvent-ils réserver ?", answer: "Oui. Utilisez la réservation en ligne ou contactez le salon avant votre visite." },
      { question: "Les prix sont-ils disponibles en ligne ?", answer: "Oui. La liste de prix indique les prix de départ ; le prix final est confirmé pour la prestation sélectionnée." },
      { question: "Comment puis-je contacter le salon ?", answer: "Utilisez le téléphone, le WhatsApp, le courrier électronique ou les liens de réservation en ligne indiqués sur ce site Web." },
    ],
    ctaTitle: "Prêt à réserver à Batumi ?",
    ctaText: "Choisissez un service ou commencez par une consultation si vous avez besoin d'aide pour choisir un rendez-vous.",
    ctaButton: "Prendre rendez-vous",
  },
  de: {
    title: "Schönheitssalon in Batumi, Georgien",
    description:
      "Besuchen Sie Silk Beauty Salon unter Zurab Gorgiladze 63 in Batumi für Botox- und Filler-Beratungen, Hautpflege, Nägel, Wimpern, Preise und Online-Buchung.",
    home: "Startseite",
    breadcrumb: "Schönheitssalon Batumi",
    eyebrow: "Batumi Schönheitssalon",
    h1: "Schönheitssalon in Batumi, Georgien",
    intro:
      "Silk Beauty Salon heißt lokale Kunden und Besucher zu beratungsgeleiteten Botox- und Filler-Terminen, Hautpflege, Akne-Beratungen, Nägeln, Wimpern und Brauen im Zurab Gorgiladze 63 willkommen.",
    book: "Buchen Sie online",
    treatments: "Behandlungen ansehen",
    whyEyebrow: "Planen Sie Ihren Besuch",
    whyTitle: "Klare Service-, Preis- und Buchungsinformationen",
    whyText:
      "Vergleichen Sie auf den Serviceseiten die Einstiegspreisberatung und Terminoptionen. Wenn Sie unsicher sind, was Sie wählen sollen, beginnen Sie mit einem Beratungsgespräch.",
    highlights: [
      { title: "Beratungsgeleitet", text: "Besprechen Sie Ihr Ziel und Ihren Zeitplan, bevor Sie eine Dienstleistung bestätigen." },
      { title: "Preise online", text: "Überprüfen Sie die Startpreise, bevor Sie buchen." },
      { title: "Zentrale Batumi", text: "Finden Sie den Salon unter Zurab Gorgiladze 63." },
      { title: "Direkter Kontakt", text: "Buchen Sie online oder kontaktieren Sie den Salon telefonisch (WhatsApp) oder per E-Mail." },
    ],
    servicesEyebrow: "Dienstleistungen in Batumi",
    servicesTitle: "Wählen Sie die Informationen aus, die Sie benötigen",
    servicesText:
      "Gehen Sie direkt zu einer Dienstleistung, zur vollständigen Preisliste oder zur Online-Buchung, ohne einen langen Behandlungskatalog durchsuchen zu müssen.",
    visitEyebrow: "Besuchen Sie uns",
    visitTitle: "Finden Sie Silk Beauty Salon in Batumi",
    visitText:
      "Der Salon befindet sich unter der Adresse Zurab Gorgiladze 63. Kontaktieren Sie den Salon vor Ihrem Besuch, wenn Sie die Verfügbarkeit oder den Zeitpunkt des Service bestätigen möchten.",
    address: "Adresse",
    contact: "Telefon und E-Mail",
    hours: "Öffnungszeiten",
    faqTitle: "Fragen zu Silk Beauty Salon in Batumi",
    faqs: [
      { question: "Wo ist Silk Beauty Salon?", answer: "Der Salon befindet sich in der Zurab-Gorgiladze-Straße 63, Batumi 6010, Georgien." },
      { question: "Können Besucher von Batumi buchen?", answer: "Ja. Nutzen Sie die Online-Buchung oder kontaktieren Sie den Salon vor Ihrem Besuch." },
      { question: "Sind die Preise online verfügbar?", answer: "Ja. Die Preisliste zeigt die Startpreise; Der endgültige Preis für die ausgewählte Dienstleistung wird bestätigt." },
      { question: "Wie kann ich den Salon kontaktieren?", answer: "Nutzen Sie die auf dieser Website angezeigten Telefon-, WhatsApp-, E-Mail- oder Online-Buchungslinks." },
    ],
    ctaTitle: "Sind Sie bereit, in Batumi zu buchen?",
    ctaText: "Wählen Sie eine Dienstleistung oder beginnen Sie mit einer Beratung, wenn Sie Hilfe bei der Terminauswahl benötigen.",
    ctaButton: "Buchen Sie einen Termin",
  },
};
