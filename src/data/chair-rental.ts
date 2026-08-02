import type { Locale } from '@/i18n';

type ChairRentalItem = {
  title: string;
  description: string;
};

type ChairRentalFaq = {
  question: string;
  answer: string;
};

export type ChairRentalContent = {
  navLabel: string;
  metadataTitle: string;
  metadataDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  availabilityNote: string;
  useCasesHeading: string;
  useCasesIntro: string;
  useCases: ChairRentalItem[];
  confirmationHeading: string;
  confirmationIntro: string;
  confirmationItems: string[];
  processHeading: string;
  processSteps: ChairRentalItem[];
  inquiryHeading: string;
  inquiryIntro: string;
  inquiryItems: string[];
  locationLabel: string;
  faqHeading: string;
  faqs: ChairRentalFaq[];
  closingTitle: string;
  closingDescription: string;
  whatsappMessage: string;
};

export const chairRentalContent: Record<Locale, ChairRentalContent> = {
  en: {
    navLabel: 'Chair Rental',
    metadataTitle: 'Chair Rental for Beauty Professionals in Batumi',
    metadataDescription:
      'Ask about renting a chair or workstation at Silk Beauty Salon in Batumi. Availability, suitability, working arrangements and price are confirmed individually.',
    eyebrow: 'Independent workspace enquiries',
    title: 'Chair rental in Batumi',
    intro:
      'Beauty professionals can enquire about using a chair or workstation at Silk Beauty Salon. We review the service type, schedule, practical needs and working arrangement before confirming whether the space is suitable.',
    primaryCta: 'Ask about chair rental',
    secondaryCta: 'View salon space rental',
    availabilityNote:
      'Availability, suitability, working terms and price are confirmed individually in writing; this page is not an automatic rental offer.',
    useCasesHeading: 'Flexible workspace enquiries',
    useCasesIntro:
      'Tell us how you plan to work. Every enquiry is reviewed against the salon schedule, available workspace and practical requirements.',
    useCases: [
      {
        title: 'Independent professionals',
        description: 'Enquiries from beauty professionals seeking a suitable place to serve their own clients by prior agreement.',
      },
      {
        title: 'Visiting professionals',
        description: 'Short-term workspace enquiries for professionals working in Batumi for selected dates or client appointments.',
      },
      {
        title: 'Recurring workspace',
        description: 'Regular chair or workstation enquiries considered according to service compatibility and salon availability.',
      },
    ],
    confirmationHeading: 'What we confirm before an agreement',
    confirmationIntro:
      'Nothing is assumed to be included. Responsibilities, access and commercial terms must be agreed before any chair rental begins.',
    confirmationItems: [
      'Your service type, experience and client arrangements',
      'Preferred dates, working hours and frequency',
      'Workstation, furniture, tools, products and equipment needed',
      'Hygiene, cleaning, laundry and waste responsibilities',
      'Insurance, licences or permissions where applicable',
      'Price, deposit, cancellation, access and other written terms',
    ],
    processHeading: 'How to enquire',
    processSteps: [
      {
        title: '1. Introduce your work',
        description: 'Share your service type, experience, preferred schedule and the clients you expect to serve.',
      },
      {
        title: '2. Review the practical fit',
        description: 'The salon reviews space, schedule, hygiene, equipment and operating requirements with you.',
      },
      {
        title: '3. Agree terms in writing',
        description: 'If suitable, both sides confirm the scope, price, responsibilities and rental conditions before starting.',
      },
    ],
    inquiryHeading: 'Include these details',
    inquiryIntro: 'A complete introduction helps the salon assess the enquiry accurately.',
    inquiryItems: [
      'Your name and professional service',
      'Experience and any relevant qualifications',
      'Preferred dates, hours and expected frequency',
      'Whether you bring your own clients',
      'Tools, products, furniture and equipment required',
      'Preferred phone, WhatsApp or email contact',
    ],
    locationLabel: 'Salon location',
    faqHeading: 'Chair rental questions',
    faqs: [
      {
        question: 'Who can enquire about chair rental?',
        answer:
          'Beauty professionals may enquire. Suitability depends on the service, professional requirements, available workspace and salon schedule.',
      },
      {
        question: 'What does chair rental cost?',
        answer:
          'There is no fixed public price. Cost depends on the schedule, frequency, workspace and agreed facilities and is confirmed in writing.',
      },
      {
        question: 'Are tools, products or equipment included?',
        answer:
          'Only items listed in the written agreement are included. Explain what you will bring and what you need from the salon.',
      },
      {
        question: 'Can I bring my own clients?',
        answer:
          'Client arrangements, booking responsibilities, payments and salon access must be discussed and agreed before rental begins.',
      },
    ],
    closingTitle: 'Ask about working from Silk Beauty Salon',
    closingDescription:
      'Send a professional introduction and your preferred working arrangement by WhatsApp so the team can review suitability and availability.',
    whatsappMessage:
      'Hello Silk Beauty Salon, I would like to ask about chair rental. My service is: __. Experience: __. Preferred dates/hours: __. Expected frequency: __. I bring my own clients: yes/no. Workspace or equipment needs: __.',
  },
  ka: {
    navLabel: 'სამუშაო ადგილის ქირაობა',
    metadataTitle: 'სამუშაო სკამის ქირაობა სილამაზის სპეციალისტებისთვის ბათუმში',
    metadataDescription:
      'დაგვიკავშირდით Silk Beauty Salon-ში სამუშაო სკამის ან ადგილის ქირაობის შესახებ. ხელმისაწვდომობა, შესაბამისობა, პირობები და ფასი ინდივიდუალურად დასტურდება.',
    eyebrow: 'დამოუკიდებელი სამუშაო სივრცის მოთხოვნები',
    title: 'სამუშაო სკამის ქირაობა ბათუმში',
    intro:
      'სილამაზის სფეროს სპეციალისტებს შეუძლიათ მოგვმართონ Silk Beauty Salon-ში სამუშაო სკამის ან ადგილის გამოყენების შესახებ. შესაბამისობის დადასტურებამდე განვიხილავთ მომსახურების ტიპს, განრიგს, პრაქტიკულ საჭიროებებსა და სამუშაო პირობებს.',
    primaryCta: 'იკითხეთ სამუშაო ადგილის შესახებ',
    secondaryCta: 'სალონის სივრცის ქირაობის ნახვა',
    availabilityNote:
      'ხელმისაწვდომობა, შესაბამისობა, სამუშაო პირობები და ფასი ინდივიდუალურად და წერილობით დასტურდება; ეს გვერდი ავტომატური შეთავაზება არ არის.',
    useCasesHeading: 'მოქნილი სამუშაო სივრცის მოთხოვნები',
    useCasesIntro:
      'გვაცნობეთ, როგორ გეგმავთ მუშაობას. თითოეული მოთხოვნა ფასდება სალონის განრიგის, თავისუფალი ადგილისა და პრაქტიკული მოთხოვნების მიხედვით.',
    useCases: [
      {
        title: 'დამოუკიდებელი სპეციალისტები',
        description: 'სილამაზის სპეციალისტების მოთხოვნები საკუთარი კლიენტების წინასწარი შეთანხმებით მომსახურებისთვის.',
      },
      {
        title: 'მოწვეული სპეციალისტები',
        description: 'მოკლევადიანი სამუშაო ადგილის მოთხოვნები ბათუმში კონკრეტული თარიღებით ან კლიენტებთან ვიზიტებისთვის.',
      },
      {
        title: 'რეგულარული სამუშაო ადგილი',
        description: 'რეგულარული ქირაობის მოთხოვნები განიხილება მომსახურების შესაბამისობისა და სალონის ხელმისაწვდომობის მიხედვით.',
      },
    ],
    confirmationHeading: 'რას ვადასტურებთ შეთანხმებამდე',
    confirmationIntro:
      'არცერთი პირობა ავტომატურად არ ითვლება ჩართულად. პასუხისმგებლობები, დაშვება და კომერციული პირობები მუშაობის დაწყებამდე უნდა შეთანხმდეს.',
    confirmationItems: [
      'თქვენი მომსახურების ტიპი, გამოცდილება და კლიენტებთან მუშაობა',
      'სასურველი თარიღები, სამუშაო საათები და სიხშირე',
      'სამუშაო ადგილი, ავეჯი, ხელსაწყოები, პროდუქტები და ტექნიკა',
      'ჰიგიენის, დასუფთავების, თეთრეულისა და ნარჩენების პასუხისმგებლობები',
      'დაზღვევა, ლიცენზია ან ნებართვა, თუ საჭიროა',
      'ფასი, დეპოზიტი, გაუქმება, დაშვება და სხვა წერილობითი პირობები',
    ],
    processHeading: 'როგორ გამოგზავნოთ მოთხოვნა',
    processSteps: [
      {
        title: '1. გაგვაცანით თქვენი საქმიანობა',
        description: 'მიუთითეთ მომსახურება, გამოცდილება, სასურველი განრიგი და კლიენტებთან მუშაობის ფორმატი.',
      },
      {
        title: '2. ვაფასებთ პრაქტიკულ შესაბამისობას',
        description: 'თქვენთან ერთად განვიხილავთ სივრცეს, განრიგს, ჰიგიენას, ტექნიკასა და სამუშაო მოთხოვნებს.',
      },
      {
        title: '3. პირობები წერილობით თანხმდება',
        description: 'შესაბამისობის შემთხვევაში ორივე მხარე მუშაობის დაწყებამდე ადასტურებს ფასს, პასუხისმგებლობებსა და პირობებს.',
      },
    ],
    inquiryHeading: 'მიუთითეთ ეს დეტალები',
    inquiryIntro: 'სრული პროფესიული ინფორმაცია სალონს მოთხოვნის ზუსტად შეფასებაში ეხმარება.',
    inquiryItems: [
      'თქვენი სახელი და პროფესიული მომსახურება',
      'გამოცდილება და შესაბამისი კვალიფიკაცია',
      'სასურველი თარიღები, საათები და სიხშირე',
      'მოგყავთ თუ არა საკუთარი კლიენტები',
      'საჭირო ხელსაწყოები, პროდუქტები, ავეჯი და ტექნიკა',
      'სასურველი ტელეფონი, WhatsApp ან ელფოსტა',
    ],
    locationLabel: 'სალონის მისამართი',
    faqHeading: 'კითხვები სამუშაო ადგილის ქირაობაზე',
    faqs: [
      {
        question: 'ვის შეუძლია სამუშაო ადგილის ქირაობის მოთხოვნა?',
        answer: 'სილამაზის სპეციალისტებს შეუძლიათ მოთხოვნის გამოგზავნა. შესაბამისობა დამოკიდებულია მომსახურებაზე, პროფესიულ მოთხოვნებზე, თავისუფალ ადგილზე და განრიგზე.',
      },
      {
        question: 'რა ღირს სამუშაო ადგილის ქირაობა?',
        answer: 'ფიქსირებული საჯარო ფასი არ არის. ღირებულება დამოკიდებულია განრიგზე, სიხშირეზე, სივრცესა და შეთანხმებულ პირობებზე.',
      },
      {
        question: 'ხელსაწყოები, პროდუქტები ან ტექნიკა შედის?',
        answer: 'შედის მხოლოდ ის, რაც წერილობით შეთანხმებაშია მითითებული. გვაცნობეთ რას მოიტანთ და რა გჭირდებათ სალონისგან.',
      },
      {
        question: 'შემიძლია საკუთარი კლიენტების მოყვანა?',
        answer: 'კლიენტებთან მუშაობა, ჯავშნები, გადახდები და სალონზე დაშვება ქირაობის დაწყებამდე უნდა შეთანხმდეს.',
      },
    ],
    closingTitle: 'იკითხეთ Silk Beauty Salon-ში მუშაობის შესახებ',
    closingDescription: 'გამოგვიგზავნეთ პროფესიული ინფორმაცია და სასურველი სამუშაო ფორმატი WhatsApp-ით შესაბამისობისა და ხელმისაწვდომობის შესაფასებლად.',
    whatsappMessage:
      'გამარჯობა Silk Beauty Salon, მსურს სამუშაო სკამის ქირაობის შესახებ ინფორმაციის მიღება. ჩემი მომსახურება: __. გამოცდილება: __. სასურველი თარიღები/საათები: __. სიხშირე: __. საკუთარი კლიენტები მომყავს: კი/არა. სამუშაო ადგილის ან ტექნიკის საჭიროებები: __.',
  },
  ru: {
    navLabel: 'Аренда рабочего места',
    metadataTitle: 'Аренда кресла для бьюти-мастеров в Батуми',
    metadataDescription:
      'Узнайте об аренде кресла или рабочего места в Silk Beauty Salon в Батуми. Доступность, соответствие, условия и цена подтверждаются индивидуально.',
    eyebrow: 'Запросы на независимое рабочее место',
    title: 'Аренда кресла в Батуми',
    intro:
      'Бьюти-мастера могут узнать об использовании кресла или рабочего места в Silk Beauty Salon. До подтверждения мы рассматриваем вид услуг, график, практические потребности и формат работы.',
    primaryCta: 'Узнать об аренде кресла',
    secondaryCta: 'Посмотреть аренду пространства салона',
    availabilityNote:
      'Доступность, соответствие, рабочие условия и цена подтверждаются индивидуально и письменно; эта страница не является автоматическим предложением аренды.',
    useCasesHeading: 'Гибкие запросы на рабочее место',
    useCasesIntro: 'Расскажите, как вы планируете работать. Каждый запрос оценивается по графику салона, свободному месту и практическим требованиям.',
    useCases: [
      {
        title: 'Независимые специалисты',
        description: 'Запросы от бьюти-мастеров, которым нужно подходящее место для работы со своими клиентами по согласованию.',
      },
      {
        title: 'Приглашённые специалисты',
        description: 'Краткосрочные запросы на работу в Батуми в выбранные даты или для отдельных клиентских визитов.',
      },
      {
        title: 'Регулярное рабочее место',
        description: 'Регулярная аренда рассматривается с учётом совместимости услуг и доступности салона.',
      },
    ],
    confirmationHeading: 'Что подтверждается до соглашения',
    confirmationIntro: 'Ничто не считается включённым автоматически. Ответственность, доступ и коммерческие условия согласуются до начала работы.',
    confirmationItems: [
      'Вид услуг, опыт и формат работы с клиентами',
      'Предпочтительные даты, часы и частота',
      'Рабочее место, мебель, инструменты, продукты и оборудование',
      'Ответственность за гигиену, уборку, бельё и отходы',
      'Страхование, лицензии или разрешения, если применимо',
      'Цена, депозит, отмена, доступ и другие письменные условия',
    ],
    processHeading: 'Как отправить запрос',
    processSteps: [
      {
        title: '1. Расскажите о своей работе',
        description: 'Укажите услуги, опыт, желаемый график и формат работы с клиентами.',
      },
      {
        title: '2. Проверим практическое соответствие',
        description: 'Вместе обсудим пространство, график, гигиену, оборудование и рабочие требования.',
      },
      {
        title: '3. Согласуем условия письменно',
        description: 'Если формат подходит, до начала работы стороны подтверждают цену, ответственность и условия аренды.',
      },
    ],
    inquiryHeading: 'Что указать в запросе',
    inquiryIntro: 'Полное профессиональное представление помогает точно оценить запрос.',
    inquiryItems: [
      'Имя и профессиональная услуга',
      'Опыт и соответствующая квалификация',
      'Желаемые даты, часы и частота',
      'Приводите ли вы своих клиентов',
      'Нужные инструменты, продукты, мебель и оборудование',
      'Удобный телефон, WhatsApp или email',
    ],
    locationLabel: 'Адрес салона',
    faqHeading: 'Вопросы об аренде кресла',
    faqs: [
      {
        question: 'Кто может обратиться по поводу аренды?',
        answer: 'Обратиться могут бьюти-мастера. Возможность зависит от услуги, профессиональных требований, свободного места и графика салона.',
      },
      {
        question: 'Сколько стоит аренда кресла?',
        answer: 'Фиксированной публичной цены нет. Стоимость зависит от графика, частоты, рабочего места и согласованных условий.',
      },
      {
        question: 'Инструменты, продукты или оборудование включены?',
        answer: 'Включено только то, что указано в письменном соглашении. Сообщите, что вы принесёте и что нужно от салона.',
      },
      {
        question: 'Можно ли приводить своих клиентов?',
        answer: 'Работа с клиентами, запись, платежи и доступ в салон должны быть согласованы до начала аренды.',
      },
    ],
    closingTitle: 'Узнайте о работе в Silk Beauty Salon',
    closingDescription: 'Отправьте профессиональное представление и желаемый формат работы в WhatsApp для оценки соответствия и доступности.',
    whatsappMessage:
      'Здравствуйте, Silk Beauty Salon. Я хочу узнать об аренде кресла. Моя услуга: __. Опыт: __. Желаемые даты/часы: __. Частота: __. Привожу своих клиентов: да/нет. Требования к месту или оборудованию: __.',
  },
  tr: {
    navLabel: 'Koltuk Kiralama',
    metadataTitle: 'Batum’da Güzellik Uzmanları İçin Koltuk Kiralama',
    metadataDescription:
      'Silk Beauty Salon’da koltuk veya çalışma alanı kiralama hakkında bilgi alın. Uygunluk, çalışma koşulları ve fiyat bireysel olarak teyit edilir.',
    eyebrow: 'Bağımsız çalışma alanı talepleri',
    title: 'Batum’da koltuk kiralama',
    intro:
      'Güzellik uzmanları Silk Beauty Salon’da koltuk veya çalışma alanı kullanmak için talepte bulunabilir. Uygunluğu teyit etmeden önce hizmet türünü, programı, pratik ihtiyaçları ve çalışma düzenini değerlendiririz.',
    primaryCta: 'Koltuk kiralamayı sor',
    secondaryCta: 'Salon alanı kiralamayı görüntüle',
    availabilityNote:
      'Uygunluk, çalışma şartları ve fiyat ayrı ayrı ve yazılı olarak teyit edilir; bu sayfa otomatik bir kiralama teklifi değildir.',
    useCasesHeading: 'Esnek çalışma alanı talepleri',
    useCasesIntro: 'Nasıl çalışmayı planladığınızı anlatın. Her talep salon programına, boş alana ve pratik gereksinimlere göre değerlendirilir.',
    useCases: [
      {
        title: 'Bağımsız uzmanlar',
        description: 'Kendi müşterilerine önceden anlaşmayla hizmet verecek uygun bir yer arayan güzellik uzmanlarının talepleri.',
      },
      {
        title: 'Misafir uzmanlar',
        description: 'Batum’da belirli tarihlerde veya müşteri randevularında çalışacak uzmanlar için kısa süreli talepler.',
      },
      {
        title: 'Düzenli çalışma alanı',
        description: 'Düzenli kiralama talepleri hizmet uyumu ve salonun uygunluğuna göre değerlendirilir.',
      },
    ],
    confirmationHeading: 'Anlaşmadan önce neleri teyit ederiz?',
    confirmationIntro: 'Hiçbir şey otomatik olarak dâhil sayılmaz. Sorumluluklar, erişim ve ticari şartlar çalışmaya başlamadan önce kararlaştırılır.',
    confirmationItems: [
      'Hizmet türünüz, deneyiminiz ve müşteri düzeniniz',
      'Tercih edilen tarihler, çalışma saatleri ve sıklık',
      'Çalışma alanı, mobilya, alet, ürün ve ekipman ihtiyaçları',
      'Hijyen, temizlik, çamaşır ve atık sorumlulukları',
      'Gerektiğinde sigorta, lisans veya izinler',
      'Fiyat, depozito, iptal, erişim ve diğer yazılı şartlar',
    ],
    processHeading: 'Nasıl talepte bulunulur?',
    processSteps: [
      {
        title: '1. İşinizi tanıtın',
        description: 'Hizmetinizi, deneyiminizi, tercih edilen programı ve müşteri çalışma şeklinizi paylaşın.',
      },
      {
        title: '2. Pratik uyumu değerlendirelim',
        description: 'Alanı, programı, hijyeni, ekipmanı ve çalışma gereksinimlerini birlikte gözden geçiririz.',
      },
      {
        title: '3. Şartları yazılı kararlaştıralım',
        description: 'Uygunsa başlamadan önce fiyat, sorumluluklar ve kiralama koşulları iki tarafça teyit edilir.',
      },
    ],
    inquiryHeading: 'Bu bilgileri ekleyin',
    inquiryIntro: 'Eksiksiz bir profesyonel tanıtım, salonun talebi doğru değerlendirmesine yardımcı olur.',
    inquiryItems: [
      'Adınız ve profesyonel hizmetiniz',
      'Deneyiminiz ve ilgili nitelikleriniz',
      'Tercih edilen tarihler, saatler ve sıklık',
      'Kendi müşterilerinizi getirip getirmediğiniz',
      'Gerekli alet, ürün, mobilya ve ekipman',
      'Tercih edilen telefon, WhatsApp veya e-posta',
    ],
    locationLabel: 'Salon adresi',
    faqHeading: 'Koltuk kiralama soruları',
    faqs: [
      {
        question: 'Kimler koltuk kiralama talebinde bulunabilir?',
        answer: 'Güzellik uzmanları talepte bulunabilir. Uygunluk hizmete, mesleki gereksinimlere, boş alana ve salon programına bağlıdır.',
      },
      {
        question: 'Koltuk kiralama ücreti nedir?',
        answer: 'Sabit yayımlanmış fiyat yoktur. Ücret program, sıklık, çalışma alanı ve kararlaştırılan imkânlara göre belirlenir.',
      },
      {
        question: 'Aletler, ürünler veya ekipman dâhil mi?',
        answer: 'Yalnızca yazılı anlaşmada listelenenler dâhildir. Neleri getireceğinizi ve salondan neler istediğinizi belirtin.',
      },
      {
        question: 'Kendi müşterilerimi getirebilir miyim?',
        answer: 'Müşteri düzeni, rezervasyon sorumlulukları, ödemeler ve salon erişimi kiralama başlamadan önce kararlaştırılmalıdır.',
      },
    ],
    closingTitle: 'Silk Beauty Salon’da çalışmayı sorun',
    closingDescription: 'Uygunluk ve müsaitliğin değerlendirilmesi için profesyonel tanıtımınızı ve tercih ettiğiniz çalışma düzenini WhatsApp’tan gönderin.',
    whatsappMessage:
      'Merhaba Silk Beauty Salon, koltuk kiralama hakkında bilgi almak istiyorum. Hizmetim: __. Deneyim: __. Tercih edilen tarih/saatler: __. Sıklık: __. Kendi müşterilerimi getiriyorum: evet/hayır. Alan veya ekipman ihtiyaçları: __.',
  },
  ar: {
    navLabel: 'تأجير كرسي عمل',
    metadataTitle: 'تأجير كرسي لمختصي التجميل في باتومي',
    metadataDescription:
      'استفسر عن استئجار كرسي أو مساحة عمل في Silk Beauty Salon في باتومي. يتم تأكيد التوفر والملاءمة وشروط العمل والسعر بشكل فردي.',
    eyebrow: 'طلبات مساحة عمل مستقلة',
    title: 'تأجير كرسي عمل في باتومي',
    intro:
      'يمكن لمختصي التجميل الاستفسار عن استخدام كرسي أو مساحة عمل في Silk Beauty Salon. نراجع نوع الخدمة والجدول والاحتياجات العملية وترتيب العمل قبل تأكيد ملاءمة المساحة.',
    primaryCta: 'استفسر عن تأجير الكرسي',
    secondaryCta: 'عرض تأجير مساحة الصالون',
    availabilityNote:
      'يتم تأكيد التوفر والملاءمة وشروط العمل والسعر بشكل فردي وكتابي؛ هذه الصفحة ليست عرض تأجير تلقائياً.',
    useCasesHeading: 'طلبات مرنة لمساحة العمل',
    useCasesIntro: 'أخبرنا كيف تخطط للعمل. تتم مراجعة كل طلب وفق جدول الصالون والمساحة المتاحة والمتطلبات العملية.',
    useCases: [
      {
        title: 'مختصون مستقلون',
        description: 'طلبات من مختصي التجميل الباحثين عن مكان مناسب لخدمة عملائهم باتفاق مسبق.',
      },
      {
        title: 'مختصون زائرون',
        description: 'طلبات قصيرة الأجل للعمل في باتومي في تواريخ محددة أو لمواعيد عملاء مختارة.',
      },
      {
        title: 'مساحة عمل منتظمة',
        description: 'تتم مراجعة طلبات الاستخدام المنتظم وفق توافق الخدمة وتوفر الصالون.',
      },
    ],
    confirmationHeading: 'ما الذي نؤكده قبل الاتفاق؟',
    confirmationIntro: 'لا يُفترض أن أي شيء مشمول تلقائياً. يجب الاتفاق على المسؤوليات والدخول والشروط التجارية قبل بدء العمل.',
    confirmationItems: [
      'نوع خدمتك وخبرتك وترتيبات العملاء',
      'التواريخ وساعات العمل والتكرار المفضل',
      'مساحة العمل والأثاث والأدوات والمنتجات والمعدات',
      'مسؤوليات النظافة والتنظيف والغسيل والنفايات',
      'التأمين أو التراخيص أو التصاريح عند الحاجة',
      'السعر والعربون والإلغاء والدخول والشروط المكتوبة الأخرى',
    ],
    processHeading: 'كيفية إرسال الطلب',
    processSteps: [
      {
        title: '1. عرّف بعملك',
        description: 'شارك نوع الخدمة والخبرة والجدول المفضل وطريقة العمل مع العملاء.',
      },
      {
        title: '2. نراجع الملاءمة العملية',
        description: 'نراجع معك المساحة والجدول والنظافة والمعدات ومتطلبات التشغيل.',
      },
      {
        title: '3. نتفق على الشروط كتابةً',
        description: 'إذا كان مناسباً، يؤكد الطرفان السعر والمسؤوليات وشروط التأجير قبل البدء.',
      },
    ],
    inquiryHeading: 'أرسل هذه التفاصيل',
    inquiryIntro: 'يساعد التعريف المهني الكامل الصالون على تقييم الطلب بدقة.',
    inquiryItems: [
      'اسمك وخدمتك المهنية',
      'خبرتك وأي مؤهلات ذات صلة',
      'التواريخ والساعات والتكرار المفضل',
      'هل تحضر عملاءك الخاصين',
      'الأدوات والمنتجات والأثاث والمعدات المطلوبة',
      'وسيلة التواصل المفضلة: هاتف أو WhatsApp أو بريد إلكتروني',
    ],
    locationLabel: 'عنوان الصالون',
    faqHeading: 'أسئلة تأجير الكرسي',
    faqs: [
      {
        question: 'من يمكنه الاستفسار عن تأجير الكرسي؟',
        answer: 'يمكن لمختصي التجميل الاستفسار. تعتمد الملاءمة على الخدمة والمتطلبات المهنية والمساحة المتاحة وجدول الصالون.',
      },
      {
        question: 'كم تبلغ تكلفة تأجير الكرسي؟',
        answer: 'لا يوجد سعر عام ثابت. تعتمد التكلفة على الجدول والتكرار ومساحة العمل والمرافق المتفق عليها.',
      },
      {
        question: 'هل الأدوات أو المنتجات أو المعدات مشمولة؟',
        answer: 'يُشمل فقط ما يرد في الاتفاق المكتوب. وضح ما ستحضره وما تحتاجه من الصالون.',
      },
      {
        question: 'هل يمكنني إحضار عملائي؟',
        answer: 'يجب مناقشة ترتيبات العملاء والحجوزات والمدفوعات والدخول إلى الصالون والاتفاق عليها قبل بدء التأجير.',
      },
    ],
    closingTitle: 'استفسر عن العمل من Silk Beauty Salon',
    closingDescription: 'أرسل تعريفاً مهنياً وترتيب العمل المفضل عبر WhatsApp حتى يتمكن الفريق من مراجعة الملاءمة والتوفر.',
    whatsappMessage:
      'مرحباً Silk Beauty Salon، أود الاستفسار عن تأجير كرسي عمل. خدمتي: __. الخبرة: __. التواريخ/الساعات المفضلة: __. التكرار: __. أحضر عملائي: نعم/لا. احتياجات المساحة أو المعدات: __.',
  },
  he: {
    navLabel: 'השכרת עמדת עבודה',
    metadataTitle: 'השכרת כיסא לאנשי מקצוע בתחום היופי בבטומי',
    metadataDescription:
      'בררו לגבי השכרת כיסא או עמדת עבודה ב-Silk Beauty Salon בבטומי. זמינות, התאמה, תנאי עבודה ומחיר מאושרים בנפרד.',
    eyebrow: 'פניות לעמדת עבודה עצמאית',
    title: 'השכרת כיסא עבודה בבטומי',
    intro:
      'אנשי מקצוע בתחום היופי יכולים לברר לגבי שימוש בכיסא או בעמדת עבודה ב-Silk Beauty Salon. אנחנו בוחנים את סוג השירות, לוח הזמנים, הצרכים המעשיים וסידור העבודה לפני אישור התאמת החלל.',
    primaryCta: 'בירור על השכרת כיסא',
    secondaryCta: 'צפייה בהשכרת חלל הסלון',
    availabilityNote:
      'זמינות, התאמה, תנאי עבודה ומחיר מאושרים בנפרד ובכתב; עמוד זה אינו הצעת השכרה אוטומטית.',
    useCasesHeading: 'פניות גמישות לעמדת עבודה',
    useCasesIntro: 'ספרו לנו איך אתם מתכננים לעבוד. כל פנייה נבדקת לפי לוח הזמנים של הסלון, המקום הזמין והדרישות המעשיות.',
    useCases: [
      {
        title: 'אנשי מקצוע עצמאיים',
        description: 'פניות מאנשי מקצוע בתחום היופי המחפשים מקום מתאים לשרת את לקוחותיהם בתיאום מראש.',
      },
      {
        title: 'אנשי מקצוע אורחים',
        description: 'פניות קצרות טווח לעבודה בבטומי בתאריכים נבחרים או לפגישות לקוחות מסוימות.',
      },
      {
        title: 'עמדת עבודה קבועה',
        description: 'פניות לשימוש קבוע נבחנות לפי התאמת השירות וזמינות הסלון.',
      },
    ],
    confirmationHeading: 'מה מאשרים לפני הסכם?',
    confirmationIntro: 'אין להניח שדבר כלול אוטומטית. יש להסכים על אחריות, גישה ותנאים מסחריים לפני תחילת העבודה.',
    confirmationItems: [
      'סוג השירות, הניסיון וסידורי הלקוחות שלכם',
      'תאריכים, שעות עבודה ותדירות מועדפים',
      'עמדת עבודה, ריהוט, כלים, מוצרים וציוד נדרשים',
      'אחריות על היגיינה, ניקיון, כביסה ופסולת',
      'ביטוח, רישיונות או היתרים כאשר נדרש',
      'מחיר, פיקדון, ביטול, גישה ותנאים כתובים נוספים',
    ],
    processHeading: 'איך פונים?',
    processSteps: [
      {
        title: '1. הציגו את עבודתכם',
        description: 'שתפו את סוג השירות, הניסיון, לוח הזמנים המועדף ואופן העבודה עם לקוחות.',
      },
      {
        title: '2. נבדוק התאמה מעשית',
        description: 'נבחן יחד את החלל, לוח הזמנים, ההיגיינה, הציוד ודרישות העבודה.',
      },
      {
        title: '3. נסכם תנאים בכתב',
        description: 'אם מתאים, שני הצדדים מאשרים מחיר, אחריות ותנאי השכרה לפני תחילת העבודה.',
      },
    ],
    inquiryHeading: 'כללו את הפרטים הבאים',
    inquiryIntro: 'הצגה מקצועית מלאה עוזרת לסלון להעריך את הפנייה במדויק.',
    inquiryItems: [
      'שם והשירות המקצועי שלכם',
      'ניסיון וכישורים רלוונטיים',
      'תאריכים, שעות ותדירות מועדפים',
      'האם אתם מביאים לקוחות משלכם',
      'כלים, מוצרים, ריהוט וציוד נדרשים',
      'טלפון, WhatsApp או אימייל מועדפים',
    ],
    locationLabel: 'כתובת הסלון',
    faqHeading: 'שאלות על השכרת כיסא',
    faqs: [
      {
        question: 'מי יכול לפנות לגבי השכרת כיסא?',
        answer: 'אנשי מקצוע בתחום היופי יכולים לפנות. ההתאמה תלויה בשירות, בדרישות המקצועיות, במקום הזמין ובלוח הזמנים של הסלון.',
      },
      {
        question: 'כמה עולה השכרת כיסא?',
        answer: 'אין מחיר ציבורי קבוע. העלות תלויה בלוח הזמנים, בתדירות, בעמדת העבודה ובמתקנים המוסכמים.',
      },
      {
        question: 'האם כלים, מוצרים או ציוד כלולים?',
        answer: 'כלולים רק פריטים שמופיעים בהסכם הכתוב. ציינו מה תביאו ומה דרוש לכם מהסלון.',
      },
      {
        question: 'האם אפשר להביא לקוחות משלי?',
        answer: 'יש לדון ולהסכים על סידורי לקוחות, הזמנות, תשלומים וגישה לסלון לפני תחילת ההשכרה.',
      },
    ],
    closingTitle: 'בררו על עבודה מתוך Silk Beauty Salon',
    closingDescription: 'שלחו הצגה מקצועית וסידור עבודה מועדף ב-WhatsApp כדי שהצוות יוכל לבדוק התאמה וזמינות.',
    whatsappMessage:
      'שלום Silk Beauty Salon, אני רוצה לברר לגבי השכרת כיסא עבודה. השירות שלי: __. ניסיון: __. תאריכים/שעות מועדפים: __. תדירות: __. אני מביא/ה לקוחות משלי: כן/לא. צרכי עמדה או ציוד: __.',
  },
  nl: {
    navLabel: "Stoel verhuur",
    metadataTitle: "Stoelverhuur voor schoonheidsprofessionals in Batumi",
    metadataDescription:
      "Vraag naar het huren van een stoel of werkplek bij Silk Beauty Salon in Batumi. Beschikbaarheid, geschiktheid, werkafspraken en prijs worden individueel bevestigd.",
    eyebrow: "Onafhankelijke werkplekaanvragen",
    title: "Stoelverhuur in Batumi",
    intro:
      "Schoonheidsprofessionals kunnen bij Silk Beauty Salon informeren naar het gebruik van een stoel of werkplek. We beoordelen het servicetype, het schema, de praktische behoeften en de werkafspraak voordat we bevestigen of de ruimte geschikt is.",
    primaryCta: "Vraag naar stoelverhuur",
    secondaryCta: "Bekijk salonruimte huren",
    availabilityNote:
      "Beschikbaarheid, geschiktheid, arbeidsvoorwaarden en prijs worden individueel schriftelijk bevestigd; deze pagina is geen automatisch huuraanbod.",
    useCasesHeading: "Vragen over flexibele werkplekken",
    useCasesIntro:
      "Vertel ons hoe u van plan bent te werken. Elke aanvraag wordt beoordeeld aan de hand van het salonschema, de beschikbare werkruimte en praktische vereisten.",
    useCases: [
      {
        title: "Onafhankelijke professionals",
        description: "Vragen van schoonheidsprofessionals die na voorafgaande toestemming op zoek zijn naar een geschikte plek om hun eigen klanten te bedienen.",
      },
      {
        title: "Bezoekende professionals",
        description: "Kortetermijnaanvragen voor werkruimte voor professionals die in Batumi werken voor geselecteerde data of klantafspraken.",
      },
      {
        title: "Terugkerende werkruimte",
        description: "Regelmatige stoel- of werkstationvragen worden in overweging genomen op basis van servicecompatibiliteit en salonbeschikbaarheid.",
      },
    ],
    confirmationHeading: "Wat we bevestigen vóór een overeenkomst",
    confirmationIntro:
      "Er wordt aangenomen dat er niets is opgenomen. Verantwoordelijkheden, toegang en commerciële voorwaarden moeten worden overeengekomen voordat een stoelverhuur begint.",
    confirmationItems: [
      "Uw servicetype, ervaring en klantarrangementen",
      "Voorkeursdata, werktijden en frequentie",
      "Werkstation, meubilair, gereedschap, producten en apparatuur nodig",
      "Verantwoordelijkheden op het gebied van hygiëne, schoonmaak, was en afval",
      "Verzekering, licenties of toestemmingen, indien van toepassing",
      "Prijs, aanbetaling, annulering, toegang en andere schriftelijke voorwaarden",
    ],
    processHeading: "Hoe te informeren",
    processSteps: [
      {
        title: "1. Introduceer je werk",
        description: "Deel uw servicetype, ervaring, voorkeursschema en de klanten die u verwacht te bedienen.",
      },
      {
        title: "2. Bekijk de praktische pasvorm",
        description: "De salon bespreekt met u de ruimte, het schema, de hygiëne, de uitrusting en de operationele vereisten.",
      },
      {
        title: "3. Spreek de voorwaarden schriftelijk af",
        description: "Indien passend bevestigen beide partijen de omvang, prijs, verantwoordelijkheden en huurvoorwaarden voordat ze beginnen.",
      },
    ],
    inquiryHeading: "Voeg deze details toe",
    inquiryIntro: "Een volledige introductie helpt de salon om de aanvraag nauwkeurig te beoordelen.",
    inquiryItems: [
      "Uw naam en professionele service",
      "Ervaring en eventuele relevante kwalificaties",
      "Voorkeursdata, uren en verwachte frequentie",
      "Of u nu uw eigen klanten meeneemt",
      "Benodigde gereedschappen, producten, meubels en uitrusting",
      "Voorkeurstelefoon, WhatsApp of e-mailcontact",
    ],
    locationLabel: "Salonlocatie",
    faqHeading: "Vragen over stoelverhuur",
    faqs: [
      {
        question: "Wie kan informatie krijgen over stoelverhuur?",
        answer:
          "Schoonheidsprofessionals kunnen navraag doen. Geschiktheid hangt af van de service, professionele vereisten, beschikbare werkruimte en salonschema.",
      },
      {
        question: "Wat kost stoelverhuur?",
        answer:
          "Er is geen vaste publieksprijs. De kosten zijn afhankelijk van de planning, frequentie, werkruimte en overeengekomen faciliteiten en worden schriftelijk bevestigd.",
      },
      {
        question: "Zijn gereedschappen, producten of apparatuur inbegrepen?",
        answer:
          "Enkel de zaken vermeld in de schriftelijke overeenkomst zijn inbegrepen. Leg uit wat u meeneemt en wat u nodig heeft vanuit de salon.",
      },
      {
        question: "Kan ik mijn eigen klanten meenemen?",
        answer:
          "Klantafspraken, boekingsverantwoordelijkheden, betalingen en toegang tot de salon moeten worden besproken en overeengekomen voordat de huur begint.",
      },
    ],
    closingTitle: "Vraag naar werken vanuit Silk Beauty Salon",
    closingDescription:
      "Stuur een professionele introductie en uw gewenste werkafspraak per WhatsApp, zodat het team de geschiktheid en beschikbaarheid kan beoordelen.",
    whatsappMessage:
      "Hallo Silk Beauty Salon, ik wil graag vragen stellen over stoelverhuur. Mijn dienst is: __. Ervaring: __. Voorkeursdata/hours: __. Verwachte frequentie: __. Ik breng mijn eigen klanten mee: ja/no. Behoeften aan werkruimte of apparatuur: __.",
  },
  fr: {
    navLabel: "Location de chaises",
    metadataTitle: "Location de chaises pour professionnels de la beauté à Batumi",
    metadataDescription:
      "Renseignez-vous sur la location d'une chaise ou d'un poste de travail au Silk Beauty Salon à Batumi. La disponibilité, l'adéquation, les modalités de travail et le prix sont confirmés individuellement.",
    eyebrow: "Enquêtes indépendantes sur l’espace de travail",
    title: "Location de chaise à Batumi",
    intro:
      "Les professionnels de la beauté peuvent se renseigner sur l'utilisation d'une chaise ou d'un poste de travail au Silk Beauty Salon. Nous examinons le type de service, le calendrier, les besoins pratiques et les modalités de travail avant de confirmer si l'espace est adapté.",
    primaryCta: "Renseignez-vous sur la location de chaises",
    secondaryCta: "Voir la location d'espace de salon",
    availabilityNote:
      "La disponibilité, l'adéquation, les conditions de travail et le prix sont confirmés individuellement par écrit ; cette page n'est pas une offre de location automatique.",
    useCasesHeading: "Demandes d’espace de travail flexible",
    useCasesIntro:
      "Dites-nous comment vous envisagez de travailler. Chaque demande est examinée en fonction du calendrier du salon, de l'espace de travail disponible et des exigences pratiques.",
    useCases: [
      {
        title: "Professionnels indépendants",
        description: "Demandes de professionnels de la beauté recherchant un lieu adapté pour servir leurs propres clients sur accord préalable.",
      },
      {
        title: "Professionnels invités",
        description: "Demandes ponctuelles d'espace de travail pour les professionnels présents à Batumi à certaines dates ou pour des rendez-vous clients.",
      },
      {
        title: "Espace de travail récurrent",
        description: "Demandes régulières de chaises ou de postes de travail prises en compte en fonction de la compatibilité des services et de la disponibilité du salon.",
      },
    ],
    confirmationHeading: "Ce que nous confirmons avant un accord",
    confirmationIntro:
      "Rien n’est supposé être inclus. Les responsabilités, l'accès et les conditions commerciales doivent être convenus avant le début de toute location de chaise.",
    confirmationItems: [
      "Votre type de service, votre expérience et les modalités client",
      "Dates, horaires et fréquence souhaités",
      "Poste de travail, mobilier, outils, produits et équipements nécessaires",
      "Responsabilités en matière d'hygiène, de nettoyage, de lessive et de déchets",
      "Assurance, licences ou autorisations le cas échéant",
      "Prix, dépôt, annulation, accès et autres conditions écrites",
    ],
    processHeading: "Comment se renseigner",
    processSteps: [
      {
        title: "1. Présentez votre travail",
        description: "Partagez votre type de service, votre expérience, votre horaire préféré et les clients que vous comptez servir.",
      },
      {
        title: "2. Examinez l’ajustement pratique",
        description: "Le salon examine avec vous les besoins en matière d'espace, d'horaire, d'hygiène, d'équipement et de fonctionnement.",
      },
      {
        title: "3. Acceptez les conditions par écrit",
        description: "Le cas échéant, les deux parties confirment l'étendue, le prix, les responsabilités et les conditions de location avant de commencer.",
      },
    ],
    inquiryHeading: "Inclure ces détails",
    inquiryIntro: "Une introduction complète aide le salon à évaluer la demande avec précision.",
    inquiryItems: [
      "Votre nom et service professionnel",
      "Expérience et toutes qualifications pertinentes",
      "Dates, heures et fréquence souhaitées",
      "Que vous ameniez vos propres clients",
      "Outils, produits, mobilier et équipement requis",
      "Téléphone préféré, WhatsApp ou contact par e-mail",
    ],
    locationLabel: "Emplacement du salon",
    faqHeading: "Questions sur la location de chaises",
    faqs: [
      {
        question: "Qui peut se renseigner sur la location de chaises ?",
        answer:
          "Les professionnels de la beauté peuvent se renseigner. L'adéquation dépend du service, des exigences professionnelles, de l'espace de travail disponible et de l'horaire du salon.",
      },
      {
        question: "Combien coûte la location d'une chaise ?",
        answer:
          "Il n’y a pas de prix public fixe. Le coût dépend du calendrier, de la fréquence, de l'espace de travail et des installations convenues et est confirmé par écrit.",
      },
      {
        question: "Les outils, produits ou équipements sont-ils inclus ?",
        answer:
          "Seuls les éléments répertoriés dans l’accord écrit sont inclus. Expliquez ce que vous apporterez et ce dont vous avez besoin du salon.",
      },
      {
        question: "Puis-je amener mes propres clients ?",
        answer:
          "Les arrangements avec le client, les responsabilités de réservation, les paiements et l'accès au salon doivent être discutés et convenus avant le début de la location.",
      },
    ],
    closingTitle: "Renseignez-vous sur le travail à partir de Silk Beauty Salon",
    closingDescription:
      "Envoyez une présentation professionnelle et votre modalité de travail préférée par WhatsApp afin que l'équipe puisse évaluer l'adéquation et la disponibilité.",
    whatsappMessage:
      "Bonjour Silk Beauty Salon, j'aimerais poser des questions sur la location de chaises. Mon service est : __. Expérience: __. Dates préférées/hours : __. Fréquence attendue : __. J'amène mes propres clients : oui/no. Besoins en espace de travail ou en équipement : __.",
  },
  de: {
    navLabel: "Stuhlverleih",
    metadataTitle: "Stuhlvermietung für Schönheitsprofis in Batumi",
    metadataDescription:
      "Fragen Sie nach der Anmietung eines Stuhls oder Arbeitsplatzes bei Silk Beauty Salon in Batumi. Verfügbarkeit, Eignung, Arbeitsmodalitäten und Preis werden individuell bestätigt.",
    eyebrow: "Unabhängige Arbeitsplatzanfragen",
    title: "Stuhlvermietung in Batumi",
    intro:
      "Kosmetikprofis können sich bei Silk Beauty Salon über die Nutzung eines Stuhls oder einer Arbeitsstation erkundigen. Wir überprüfen die Art der Dienstleistung, den Zeitplan, die praktischen Bedürfnisse und die Arbeitsvereinbarung, bevor wir bestätigen, ob der Raum geeignet ist.",
    primaryCta: "Fragen Sie nach der Stuhlmiete",
    secondaryCta: "Salonraummiete ansehen",
    availabilityNote:
      "Verfügbarkeit, Eignung, Arbeitsbedingungen und Preis werden individuell schriftlich bestätigt; Bei dieser Seite handelt es sich nicht um ein automatisches Mietangebot.",
    useCasesHeading: "Anfragen zu flexiblen Arbeitsplätzen",
    useCasesIntro:
      "Sagen Sie uns, wie Sie arbeiten möchten. Jede Anfrage wird anhand des Salonplans, des verfügbaren Arbeitsplatzes und der praktischen Anforderungen überprüft.",
    useCases: [
      {
        title: "Unabhängige Fachleute",
        description: "Anfragen von Kosmetikprofis, die nach vorheriger Vereinbarung einen geeigneten Ort für die Betreuung ihrer eigenen Kunden suchen.",
      },
      {
        title: "Fachbesucher",
        description: "Kurzfristige Arbeitsplatzanfragen für Fachkräfte, die in Batumi für ausgewählte Termine oder Kundentermine arbeiten.",
      },
      {
        title: "Wiederkehrender Arbeitsbereich",
        description: "Regelmäßige Stuhl- oder Arbeitsplatzanfragen werden je nach Servicekompatibilität und Salonverfügbarkeit berücksichtigt.",
      },
    ],
    confirmationHeading: "Was wir vor einer Vereinbarung bestätigen",
    confirmationIntro:
      "Es wird davon ausgegangen, dass nichts enthalten ist. Verantwortlichkeiten, Zugang und Geschäftsbedingungen müssen vor Beginn der Stuhlmiete vereinbart werden.",
    confirmationItems: [
      "Ihre Serviceart, Erfahrung und Kundenvereinbarungen",
      "Bevorzugte Termine, Arbeitszeiten und Häufigkeit",
      "Benötigter Arbeitsplatz, Möbel, Werkzeuge, Produkte und Ausrüstung",
      "Hygiene-, Reinigungs-, Wäsche- und Abfallverantwortung",
      "Versicherung, Lizenzen oder Genehmigungen, sofern zutreffend",
      "Preis, Anzahlung, Stornierung, Zugang und andere schriftliche Bedingungen",
    ],
    processHeading: "So erkundigen Sie sich",
    processSteps: [
      {
        title: "1. Stellen Sie Ihre Arbeit vor",
        description: "Teilen Sie Ihren Servicetyp, Ihre Erfahrung, Ihren bevorzugten Zeitplan und die Kunden mit, die Sie voraussichtlich bedienen werden.",
      },
      {
        title: "2. Überprüfen Sie die praktische Passform",
        description: "Der Salon bespricht mit Ihnen Raum, Zeitplan, Hygiene, Ausstattung und Betriebsanforderungen.",
      },
      {
        title: "3. Vereinbaren Sie die Bedingungen schriftlich",
        description: "Bei Eignung bestätigen beide Seiten vor Beginn den Umfang, den Preis, die Verantwortlichkeiten und die Mietkonditionen.",
      },
    ],
    inquiryHeading: "Geben Sie diese Details an",
    inquiryIntro: "Eine vollständige Einführung hilft dem Salon, die Anfrage genau zu beurteilen.",
    inquiryItems: [
      "Ihr Name und professioneller Service",
      "Erfahrung und alle relevanten Qualifikationen",
      "Bevorzugte Termine, Öffnungszeiten und voraussichtliche Häufigkeit",
      "Ob Sie Ihre eigenen Kunden mitbringen",
      "Benötigte Werkzeuge, Produkte, Möbel und Geräte",
      "Bevorzugter Telefonkontakt: WhatsApp oder E-Mail-Kontakt",
    ],
    locationLabel: "Salonstandort",
    faqHeading: "Fragen zur Stuhlmiete",
    faqs: [
      {
        question: "Wer kann eine Stuhlmietanfrage stellen?",
        answer:
          "Schönheitsprofis können sich erkundigen. Die Eignung hängt vom Service, den beruflichen Anforderungen, dem verfügbaren Arbeitsplatz und dem Salonplan ab.",
      },
      {
        question: "Was kostet die Stuhlmiete?",
        answer:
          "Es gibt keinen festen öffentlichen Preis. Die Kosten hängen vom Zeitplan, der Häufigkeit, dem Arbeitsbereich und den vereinbarten Einrichtungen ab und werden schriftlich bestätigt.",
      },
      {
        question: "Sind Werkzeuge, Produkte oder Geräte enthalten?",
        answer:
          "Es sind nur die in der schriftlichen Vereinbarung aufgeführten Punkte enthalten. Erklären Sie, was Sie mitbringen und was Sie im Salon benötigen.",
      },
      {
        question: "Kann ich meine eigenen Kunden mitbringen?",
        answer:
          "Kundenvereinbarungen, Buchungspflichten, Zahlungen und Zugang zum Salon müssen vor Mietbeginn besprochen und vereinbart werden.",
      },
    ],
    closingTitle: "Fragen Sie nach der Arbeit unter Silk Beauty Salon",
    closingDescription:
      "Senden Sie eine professionelle Vorstellung und Ihre bevorzugte Arbeitsvereinbarung per WhatsApp, damit das Team die Eignung und Verfügbarkeit prüfen kann.",
    whatsappMessage:
      "Hallo Silk Beauty Salon, ich würde gerne nach der Stuhlmiete fragen. Mein Service ist: __. Erfahrung: __. Wunschtermin/hours: __. Erwartete Häufigkeit: __. Ich bringe meine eigenen Kunden mit: ja/no. Anforderungen an den Arbeitsplatz oder die Ausrüstung: __.",
  },
};
