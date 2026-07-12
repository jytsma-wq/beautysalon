import type { Locale } from '@/i18n';

type VenueRentalEventType = {
  title: string;
  description: string;
};

type VenueRentalFaq = {
  question: string;
  answer: string;
};

export type VenueRentalContent = {
  navLabel: string;
  metadataTitle: string;
  metadataDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  availabilityNote: string;
  eventTypesHeading: string;
  eventTypesIntro: string;
  eventTypes: VenueRentalEventType[];
  planningHeading: string;
  planningIntro: string;
  planningItems: string[];
  processHeading: string;
  processSteps: VenueRentalEventType[];
  inquiryHeading: string;
  inquiryIntro: string;
  inquiryItems: string[];
  locationLabel: string;
  faqHeading: string;
  faqs: VenueRentalFaq[];
  closingTitle: string;
  closingDescription: string;
  whatsappMessage: string;
};

export const venueRentalContent: Record<Locale, VenueRentalContent> = {
  en: {
    navLabel: 'Salon Space Rental',
    metadataTitle: 'Salon Space Rental in Batumi',
    metadataDescription:
      'Ask about renting Silk Beauty Salon in Batumi for professional meetings, diploma or training sessions, seminars and small workshops.',
    eyebrow: 'A flexible professional setting',
    title: 'Salon space rental in Batumi',
    intro:
      'Ask about using Silk Beauty Salon for a professional meeting, diploma or training session, seminar, or small workshop. Availability, capacity, setup and price are confirmed for each enquiry.',
    primaryCta: 'Ask about availability',
    secondaryCta: 'Contact the salon',
    availabilityNote: 'Salon space rental is arranged by enquiry and does not include an automatic booking or fixed public price.',
    eventTypesHeading: 'A setting for focused, small-format events',
    eventTypesIntro:
      'Tell us what you are planning. The team will confirm whether the salon and requested setup are suitable before anything is booked.',
    eventTypes: [
      {
        title: 'Professional meetings',
        description: 'A calm setting for team discussions, consultations and small professional meetings.',
      },
      {
        title: 'Diploma & training sessions',
        description: 'Space enquiries for diploma presentations, demonstrations and beauty training days.',
      },
      {
        title: 'Seminars & workshops',
        description: 'Small educational sessions, presentations and practical workshops by prior agreement.',
      },
    ],
    planningHeading: 'Plan the space around your event',
    planningIntro:
      'We confirm the practical details with you before providing a quote. Nothing is assumed to be included until it is agreed in writing.',
    planningItems: [
      'Suitable room layout and attendee capacity',
      'Requested furniture, equipment and presentation needs',
      'Arrival, setup and access times',
      'Salon schedule and privacy requirements',
      'Cleaning, refreshments and any special arrangements',
    ],
    processHeading: 'How an enquiry works',
    processSteps: [
      {
        title: '1. Share the event details',
        description: 'Send the date, times, event type, expected guest count and setup needs.',
      },
      {
        title: '2. Confirm suitability',
        description: 'The team checks availability, capacity, practical requirements and house rules.',
      },
      {
        title: '3. Receive a written offer',
        description: 'If the space is suitable, you receive the agreed scope, price and booking conditions.',
      },
    ],
    inquiryHeading: 'What to include in your message',
    inquiryIntro: 'A complete enquiry helps the team respond accurately and avoids delays.',
    inquiryItems: [
      'Preferred date and start/end time',
      'Meeting, diploma/training session, seminar or workshop',
      'Expected number of attendees',
      'Room layout and equipment requirements',
      'Your name and preferred phone, WhatsApp or email contact',
    ],
    locationLabel: 'Venue location',
    faqHeading: 'Salon space rental questions',
    faqs: [
      {
        question: 'Can I hold a diploma or training session at the salon?',
        answer:
          'Possibly. Send the format, attendee count and practical requirements so the team can confirm whether the space is suitable. Venue rental does not mean Silk issues or endorses a diploma.',
      },
      {
        question: 'How many people can attend?',
        answer:
          'Capacity depends on the room layout, salon schedule and type of event. The maximum attendee count is confirmed before a quote is issued.',
      },
      {
        question: 'What is included with the rental?',
        answer:
          'Room access, furniture, equipment, setup and other arrangements are confirmed for each enquiry. Please list everything you need in your message.',
      },
      {
        question: 'How much does salon space rental cost?',
        answer:
          'Pricing depends on the date, length, event format and setup requirements. The team provides a written quote after reviewing the details.',
      },
    ],
    closingTitle: 'Plan your event at Silk Beauty Salon',
    closingDescription: 'Send the event details by WhatsApp or contact the salon to check suitability and availability.',
    whatsappMessage:
      'Hello Silk Beauty Salon, I would like to ask about renting the salon space. My preferred date/time is: __. Event type: __. Expected guests: __. Setup needs: __.',
  },
  ka: {
    navLabel: 'სალონის სივრცის ქირაობა',
    metadataTitle: 'სალონის სივრცის ქირაობა ბათუმში',
    metadataDescription:
      'დაგვიკავშირდით Silk Beauty Salon-ის სივრცის ქირაობის შესახებ საქმიანი შეხვედრებისთვის, დიპლომის ან სასწავლო სესიებისთვის, სემინარებისა და მცირე ვორქშოპებისთვის.',
    eyebrow: 'მოქნილი პროფესიული სივრცე',
    title: 'სალონის სივრცის ქირაობა ბათუმში',
    intro:
      'დაგვიკავშირდით Silk Beauty Salon-ის სივრცის გამოყენების შესახებ საქმიანი შეხვედრისთვის, დიპლომის ან სასწავლო სესიისთვის, სემინარისთვის ან მცირე ვორქშოპისთვის. ხელმისაწვდომობა, ტევადობა, მოწყობა და ფასი თითოეული მოთხოვნის მიხედვით დასტურდება.',
    primaryCta: 'ხელმისაწვდომობის კითხვა',
    secondaryCta: 'სალონთან დაკავშირება',
    availabilityNote: 'სივრცის ქირაობა ფორმდება მოთხოვნის საფუძველზე; ავტომატური დაჯავშნა და ფიქსირებული საჯარო ფასი არ არის.',
    eventTypesHeading: 'სივრცე მცირე და მიზნობრივი ღონისძიებებისთვის',
    eventTypesIntro:
      'გვაცნობეთ რას გეგმავთ. დაჯავშნამდე გუნდი დაადასტურებს, შეესაბამება თუ არა სალონი და სასურველი მოწყობა თქვენს ღონისძიებას.',
    eventTypes: [
      {
        title: 'საქმიანი შეხვედრები',
        description: 'მშვიდი გარემო გუნდური განხილვებისთვის, კონსულტაციებისა და მცირე პროფესიული შეხვედრებისთვის.',
      },
      {
        title: 'დიპლომის და სასწავლო სესიები',
        description: 'სივრცე დიპლომის წარდგენისთვის, დემონსტრაციებისა და სილამაზის სფეროს სასწავლო დღეებისთვის.',
      },
      {
        title: 'სემინარები და ვორქშოპები',
        description: 'მცირე საგანმანათლებლო სესიები, პრეზენტაციები და პრაქტიკული ვორქშოპები წინასწარი შეთანხმებით.',
      },
    ],
    planningHeading: 'სივრცე მოარგეთ თქვენს ღონისძიებას',
    planningIntro:
      'შეთავაზების მომზადებამდე პრაქტიკულ დეტალებს თქვენთან ვადასტურებთ. წერილობით შეთანხმებამდე არცერთი მომსახურება არ ითვლება ჩართულად.',
    planningItems: [
      'ოთახის შესაფერისი განლაგება და მონაწილეთა რაოდენობა',
      'საჭირო ავეჯი, ტექნიკა და პრეზენტაციის მოთხოვნები',
      'მისვლის, მოწყობის და დაშვების დრო',
      'სალონის განრიგი და კონფიდენციალურობის მოთხოვნები',
      'დასუფთავება, გამასპინძლება და სპეციალური საჭიროებები',
    ],
    processHeading: 'როგორ მუშავდება მოთხოვნა',
    processSteps: [
      {
        title: '1. გამოგვიგზავნეთ ღონისძიების დეტალები',
        description: 'მიუთითეთ თარიღი, დრო, ღონისძიების ტიპი, სტუმრების რაოდენობა და მოწყობის საჭიროებები.',
      },
      {
        title: '2. ვადასტურებთ შესაბამისობას',
        description: 'გუნდი ამოწმებს ხელმისაწვდომობას, ტევადობას, პრაქტიკულ მოთხოვნებსა და სივრცის წესებს.',
      },
      {
        title: '3. მიიღეთ წერილობითი შეთავაზება',
        description: 'თუ სივრცე შესაფერისია, მიიღებთ შეთანხმებულ პირობებს, ფასსა და დაჯავშნის წესებს.',
      },
    ],
    inquiryHeading: 'რა მიუთითოთ შეტყობინებაში',
    inquiryIntro: 'სრული ინფორმაცია გუნდს ზუსტი და სწრაფი პასუხის მომზადებაში ეხმარება.',
    inquiryItems: [
      'სასურველი თარიღი და დაწყების/დასრულების დრო',
      'შეხვედრა, დიპლომის/სასწავლო სესია, სემინარი ან ვორქშოპი',
      'მონაწილეთა სავარაუდო რაოდენობა',
      'ოთახის განლაგებისა და ტექნიკის მოთხოვნები',
      'თქვენი სახელი და სასურველი ტელეფონი, WhatsApp ან ელფოსტა',
    ],
    locationLabel: 'სივრცის მისამართი',
    faqHeading: 'კითხვები სივრცის ქირაობის შესახებ',
    faqs: [
      {
        question: 'შეიძლება სალონში დიპლომის ან სასწავლო სესიის ჩატარება?',
        answer:
          'შესაძლებელია შესაბამისობის დადასტურების შემდეგ. მოგვწერეთ ფორმატი, მონაწილეთა რაოდენობა და პრაქტიკული მოთხოვნები. სივრცის ქირაობა არ ნიშნავს, რომ Silk დიპლომს გასცემს ან ამტკიცებს.',
      },
      {
        question: 'რამდენი ადამიანი შეიძლება დაესწროს?',
        answer: 'ტევადობა დამოკიდებულია განლაგებაზე, სალონის განრიგსა და ღონისძიების ტიპზე და შეთავაზებამდე დასტურდება.',
      },
      {
        question: 'რა შედის ქირაობაში?',
        answer: 'სივრცეზე დაშვება, ავეჯი, ტექნიკა, მოწყობა და სხვა პირობები თითოეულ მოთხოვნაზე ცალ-ცალკე თანხმდება.',
      },
      {
        question: 'რა ღირს სივრცის ქირაობა?',
        answer: 'ფასი დამოკიდებულია თარიღზე, ხანგრძლივობაზე, ფორმატსა და მოწყობის მოთხოვნებზე. დეტალების განხილვის შემდეგ მიიღებთ წერილობით შეთავაზებას.',
      },
    ],
    closingTitle: 'დაგეგმეთ ღონისძიება Silk Beauty Salon-ში',
    closingDescription: 'გამოგვიგზავნეთ დეტალები WhatsApp-ით ან დაუკავშირდით სალონს შესაბამისობისა და ხელმისაწვდომობის გასარკვევად.',
    whatsappMessage:
      'გამარჯობა Silk Beauty Salon, მსურს სალონის სივრცის ქირაობის შესახებ ინფორმაციის მიღება. სასურველი თარიღი/დრო: __. ღონისძიების ტიპი: __. სტუმრების რაოდენობა: __. მოწყობის საჭიროებები: __.',
  },
  ru: {
    navLabel: 'Аренда пространства салона',
    metadataTitle: 'Аренда пространства салона в Батуми',
    metadataDescription:
      'Узнайте об аренде Silk Beauty Salon в Батуми для деловых встреч, дипломных или учебных сессий, семинаров и небольших мастер-классов.',
    eyebrow: 'Гибкое профессиональное пространство',
    title: 'Аренда пространства салона в Батуми',
    intro:
      'Узнайте об использовании Silk Beauty Salon для деловой встречи, дипломной или учебной сессии, семинара или небольшого мастер-класса. Доступность, вместимость, формат и цена подтверждаются для каждого запроса.',
    primaryCta: 'Узнать о доступности',
    secondaryCta: 'Связаться с салоном',
    availabilityNote: 'Аренда оформляется по запросу; автоматического бронирования и фиксированной публичной цены нет.',
    eventTypesHeading: 'Пространство для небольших деловых мероприятий',
    eventTypesIntro:
      'Расскажите, что вы планируете. До бронирования команда подтвердит, подходит ли салон и нужная конфигурация для вашего мероприятия.',
    eventTypes: [
      {
        title: 'Деловые встречи',
        description: 'Спокойная обстановка для обсуждений, консультаций и небольших профессиональных встреч.',
      },
      {
        title: 'Дипломные и учебные сессии',
        description: 'Запросы на пространство для презентаций дипломов, демонстраций и учебных дней в сфере красоты.',
      },
      {
        title: 'Семинары и мастер-классы',
        description: 'Небольшие образовательные сессии, презентации и практические занятия по предварительному согласованию.',
      },
    ],
    planningHeading: 'Подготовьте пространство под мероприятие',
    planningIntro:
      'Перед предложением мы согласуем с вами практические детали. Ничто не считается включённым без письменного подтверждения.',
    planningItems: [
      'Подходящая расстановка и количество участников',
      'Необходимая мебель, оборудование и презентационные материалы',
      'Время приезда, подготовки и доступа',
      'Расписание салона и требования к приватности',
      'Уборка, напитки и специальные условия',
    ],
    processHeading: 'Как проходит запрос',
    processSteps: [
      {
        title: '1. Отправьте детали мероприятия',
        description: 'Укажите дату, время, формат, ожидаемое число гостей и потребности по организации.',
      },
      {
        title: '2. Подтвердим возможность',
        description: 'Команда проверит доступность, вместимость, практические требования и правила пространства.',
      },
      {
        title: '3. Получите письменное предложение',
        description: 'Если пространство подходит, вы получите согласованный объём, цену и условия бронирования.',
      },
    ],
    inquiryHeading: 'Что указать в сообщении',
    inquiryIntro: 'Полный запрос помогает команде дать точный ответ без задержек.',
    inquiryItems: [
      'Желаемые дата и время начала/окончания',
      'Встреча, дипломная/учебная сессия, семинар или мастер-класс',
      'Ожидаемое количество участников',
      'Требования к расстановке и оборудованию',
      'Ваше имя и удобный телефон, WhatsApp или email',
    ],
    locationLabel: 'Адрес площадки',
    faqHeading: 'Вопросы об аренде',
    faqs: [
      {
        question: 'Можно ли провести в салоне дипломную или учебную сессию?',
        answer:
          'Возможно после подтверждения. Отправьте формат, число участников и практические требования. Аренда пространства не означает, что Silk выдаёт или подтверждает диплом.',
      },
      {
        question: 'Сколько человек может участвовать?',
        answer: 'Вместимость зависит от расстановки, графика салона и типа мероприятия и подтверждается до предложения.',
      },
      {
        question: 'Что входит в аренду?',
        answer: 'Доступ, мебель, оборудование, подготовка и другие условия согласуются отдельно для каждого запроса.',
      },
      {
        question: 'Сколько стоит аренда?',
        answer: 'Цена зависит от даты, длительности, формата и требований к подготовке. После рассмотрения деталей команда направит письменное предложение.',
      },
    ],
    closingTitle: 'Запланируйте мероприятие в Silk Beauty Salon',
    closingDescription: 'Отправьте детали в WhatsApp или свяжитесь с салоном, чтобы проверить доступность и соответствие пространства.',
    whatsappMessage:
      'Здравствуйте, Silk Beauty Salon. Я хочу узнать об аренде пространства. Желаемая дата/время: __. Тип мероприятия: __. Количество гостей: __. Требования к организации: __.',
  },
  tr: {
    navLabel: 'Salon Alanı Kiralama',
    metadataTitle: 'Batum’da Salon Mekânı Kiralama',
    metadataDescription:
      'Profesyonel toplantılar, diploma veya eğitim oturumları, seminerler ve küçük atölyeler için Silk Beauty Salon mekân kiralama bilgisi alın.',
    eyebrow: 'Esnek bir profesyonel ortam',
    title: 'Batum’da salon mekânı kiralama',
    intro:
      'Silk Beauty Salon’u profesyonel bir toplantı, diploma veya eğitim oturumu, seminer ya da küçük atölye için kullanma imkânını sorun. Uygunluk, kapasite, düzen ve fiyat her talep için ayrıca teyit edilir.',
    primaryCta: 'Uygunluğu sor',
    secondaryCta: 'Salonla iletişime geç',
    availabilityNote: 'Mekân kiralama talep üzerine düzenlenir; otomatik rezervasyon veya sabit yayımlanmış fiyat yoktur.',
    eventTypesHeading: 'Odaklı, küçük ölçekli etkinlikler için bir ortam',
    eventTypesIntro:
      'Ne planladığınızı bize anlatın. Rezervasyon yapılmadan önce ekip, salonun ve istenen düzenin etkinliğe uygunluğunu teyit eder.',
    eventTypes: [
      {
        title: 'Profesyonel toplantılar',
        description: 'Ekip görüşmeleri, danışmalar ve küçük profesyonel toplantılar için sakin bir ortam.',
      },
      {
        title: 'Diploma ve eğitim oturumları',
        description: 'Diploma sunumları, uygulama gösterimleri ve güzellik eğitimi günleri için mekân talepleri.',
      },
      {
        title: 'Seminerler ve atölyeler',
        description: 'Önceden anlaşma ile küçük eğitim oturumları, sunumlar ve uygulamalı atölyeler.',
      },
    ],
    planningHeading: 'Mekânı etkinliğinize göre planlayın',
    planningIntro:
      'Teklif vermeden önce pratik ayrıntıları sizinle teyit ederiz. Yazılı olarak kararlaştırılmayan hiçbir unsur dâhil kabul edilmez.',
    planningItems: [
      'Uygun oda düzeni ve katılımcı kapasitesi',
      'Talep edilen mobilya, ekipman ve sunum ihtiyaçları',
      'Geliş, kurulum ve erişim saatleri',
      'Salon programı ve mahremiyet gereksinimleri',
      'Temizlik, ikram ve özel düzenlemeler',
    ],
    processHeading: 'Talep süreci nasıl işler?',
    processSteps: [
      {
        title: '1. Etkinlik ayrıntılarını paylaşın',
        description: 'Tarih, saat, etkinlik türü, beklenen kişi sayısı ve düzen ihtiyaçlarını gönderin.',
      },
      {
        title: '2. Uygunluğu teyit edelim',
        description: 'Ekip uygunluk, kapasite, pratik gereksinimler ve mekân kurallarını kontrol eder.',
      },
      {
        title: '3. Yazılı teklif alın',
        description: 'Mekân uygunsa kararlaştırılan kapsam, fiyat ve rezervasyon koşulları size iletilir.',
      },
    ],
    inquiryHeading: 'Mesajınıza neleri eklemelisiniz?',
    inquiryIntro: 'Eksiksiz bilgi, ekibin doğru ve gecikmeden yanıt vermesine yardımcı olur.',
    inquiryItems: [
      'Tercih edilen tarih ve başlangıç/bitiş saati',
      'Toplantı, diploma/eğitim oturumu, seminer veya atölye',
      'Beklenen katılımcı sayısı',
      'Oda düzeni ve ekipman gereksinimleri',
      'Adınız ve tercih ettiğiniz telefon, WhatsApp veya e-posta',
    ],
    locationLabel: 'Mekân adresi',
    faqHeading: 'Mekân kiralama soruları',
    faqs: [
      {
        question: 'Salonda diploma veya eğitim oturumu düzenleyebilir miyim?',
        answer:
          'Uygunluk teyidinden sonra mümkün olabilir. Formatı, kişi sayısını ve pratik gereksinimleri gönderin. Mekân kiralama, Silk’in diploma verdiği veya onayladığı anlamına gelmez.',
      },
      {
        question: 'Kaç kişi katılabilir?',
        answer: 'Kapasite oda düzenine, salon programına ve etkinlik türüne bağlıdır; tekliften önce teyit edilir.',
      },
      {
        question: 'Kiralama neleri içerir?',
        answer: 'Mekân erişimi, mobilya, ekipman, kurulum ve diğer düzenlemeler her talep için ayrı ayrı teyit edilir.',
      },
      {
        question: 'Mekân kiralama ücreti nedir?',
        answer: 'Fiyat tarih, süre, etkinlik formatı ve kurulum gereksinimlerine bağlıdır. Ayrıntılar incelendikten sonra yazılı teklif sunulur.',
      },
    ],
    closingTitle: 'Etkinliğinizi Silk Beauty Salon’da planlayın',
    closingDescription: 'Uygunluk ve müsaitliği kontrol etmek için etkinlik ayrıntılarını WhatsApp’tan gönderin veya salonla iletişime geçin.',
    whatsappMessage:
      'Merhaba Silk Beauty Salon, salon mekânını kiralamak hakkında bilgi almak istiyorum. Tercih edilen tarih/saat: __. Etkinlik türü: __. Beklenen kişi sayısı: __. Düzen ihtiyaçları: __.',
  },
  ar: {
    navLabel: 'تأجير مساحة الصالون',
    metadataTitle: 'تأجير مساحة صالون في باتومي',
    metadataDescription:
      'استفسر عن استئجار مساحة Silk Beauty Salon في باتومي للاجتماعات المهنية أو جلسات الدبلوم والتدريب أو الندوات وورش العمل الصغيرة.',
    eyebrow: 'مساحة مهنية مرنة',
    title: 'تأجير مساحة الصالون في باتومي',
    intro:
      'استفسر عن استخدام Silk Beauty Salon لاجتماع مهني أو جلسة دبلوم أو تدريب أو ندوة أو ورشة عمل صغيرة. يتم تأكيد التوفر والسعة والتجهيز والسعر لكل طلب على حدة.',
    primaryCta: 'استفسر عن التوفر',
    secondaryCta: 'تواصل مع الصالون',
    availabilityNote: 'يتم ترتيب تأجير المكان عبر طلب مسبق، ولا يتضمن حجزاً تلقائياً أو سعراً عاماً ثابتاً.',
    eventTypesHeading: 'مساحة لفعاليات صغيرة ومركزة',
    eventTypesIntro:
      'أخبرنا بما تخطط له. يؤكد الفريق ملاءمة الصالون والتجهيز المطلوب قبل إجراء أي حجز.',
    eventTypes: [
      {
        title: 'اجتماعات مهنية',
        description: 'أجواء هادئة لمناقشات الفريق والاستشارات والاجتماعات المهنية الصغيرة.',
      },
      {
        title: 'جلسات دبلوم وتدريب',
        description: 'طلبات مساحة لعرض الدبلومات والعروض التطبيقية وأيام التدريب في مجال التجميل.',
      },
      {
        title: 'ندوات وورش عمل',
        description: 'جلسات تعليمية صغيرة وعروض وورش عملية باتفاق مسبق.',
      },
    ],
    planningHeading: 'خطط للمساحة بحسب فعاليتك',
    planningIntro:
      'نؤكد معك التفاصيل العملية قبل تقديم السعر. لا يُعتبر أي شيء مشمولاً ما لم يتم الاتفاق عليه كتابياً.',
    planningItems: [
      'ترتيب الغرفة المناسب وسعة الحضور',
      'الأثاث والمعدات واحتياجات العرض المطلوبة',
      'أوقات الوصول والتجهيز والدخول',
      'جدول الصالون ومتطلبات الخصوصية',
      'التنظيف والضيافة وأي ترتيبات خاصة',
    ],
    processHeading: 'كيف يعمل طلب الاستئجار؟',
    processSteps: [
      {
        title: '1. أرسل تفاصيل الفعالية',
        description: 'أرسل التاريخ والوقت ونوع الفعالية وعدد الضيوف المتوقع واحتياجات التجهيز.',
      },
      {
        title: '2. نؤكد الملاءمة',
        description: 'يتحقق الفريق من التوفر والسعة والمتطلبات العملية وقواعد المكان.',
      },
      {
        title: '3. استلم عرضاً مكتوباً',
        description: 'إذا كانت المساحة مناسبة، ستتلقى النطاق والسعر وشروط الحجز المتفق عليها.',
      },
    ],
    inquiryHeading: 'ما الذي يجب ذكره في رسالتك؟',
    inquiryIntro: 'يساعد الطلب الكامل الفريق على الرد بدقة ومن دون تأخير.',
    inquiryItems: [
      'التاريخ المفضل ووقت البداية والنهاية',
      'اجتماع أو جلسة دبلوم/تدريب أو ندوة أو ورشة عمل',
      'عدد الحضور المتوقع',
      'متطلبات ترتيب الغرفة والمعدات',
      'اسمك وطريقة التواصل المفضلة: هاتف أو WhatsApp أو بريد إلكتروني',
    ],
    locationLabel: 'عنوان المكان',
    faqHeading: 'أسئلة تأجير المكان',
    faqs: [
      {
        question: 'هل يمكن إقامة جلسة دبلوم أو تدريب في الصالون؟',
        answer:
          'قد يكون ذلك ممكناً بعد تأكيد الملاءمة. أرسل صيغة الفعالية وعدد الحضور والمتطلبات العملية. تأجير المكان لا يعني أن Silk تصدر الدبلوم أو تصادق عليه.',
      },
      {
        question: 'كم شخصاً يمكنه الحضور؟',
        answer: 'تعتمد السعة على ترتيب الغرفة وجدول الصالون ونوع الفعالية، ويتم تأكيدها قبل تقديم العرض.',
      },
      {
        question: 'ماذا يشمل التأجير؟',
        answer: 'يتم تأكيد الدخول والأثاث والمعدات والتجهيز والترتيبات الأخرى بشكل منفصل لكل طلب.',
      },
      {
        question: 'كم تبلغ تكلفة تأجير المكان؟',
        answer: 'يعتمد السعر على التاريخ والمدة وصيغة الفعالية ومتطلبات التجهيز. يقدم الفريق عرضاً مكتوباً بعد مراجعة التفاصيل.',
      },
    ],
    closingTitle: 'خطط لفعاليتك في Silk Beauty Salon',
    closingDescription: 'أرسل تفاصيل الفعالية عبر WhatsApp أو تواصل مع الصالون للتحقق من الملاءمة والتوفر.',
    whatsappMessage:
      'مرحباً Silk Beauty Salon، أود الاستفسار عن استئجار مساحة الصالون. التاريخ/الوقت المفضل: __. نوع الفعالية: __. عدد الضيوف: __. احتياجات التجهيز: __.',
  },
  he: {
    navLabel: 'השכרת חלל הסלון',
    metadataTitle: 'השכרת חלל סלון בבטומי',
    metadataDescription:
      'בררו לגבי השכרת חלל Silk Beauty Salon בבטומי לפגישות מקצועיות, מפגשי דיפלומה או הדרכה, סמינרים וסדנאות קטנות.',
    eyebrow: 'סביבה מקצועית וגמישה',
    title: 'השכרת חלל הסלון בבטומי',
    intro:
      'בררו לגבי שימוש ב-Silk Beauty Salon לפגישה מקצועית, מפגש דיפלומה או הדרכה, סמינר או סדנה קטנה. זמינות, קיבולת, סידור ומחיר מאושרים בנפרד לכל פנייה.',
    primaryCta: 'בדיקת זמינות',
    secondaryCta: 'יצירת קשר עם הסלון',
    availabilityNote: 'השכרת המקום מתואמת באמצעות פנייה ואינה כוללת הזמנה אוטומטית או מחיר ציבורי קבוע.',
    eventTypesHeading: 'סביבה לאירועים קטנים וממוקדים',
    eventTypesIntro:
      'ספרו לנו מה אתם מתכננים. הצוות יאשר שהסלון והסידור המבוקש מתאימים לפני ביצוע הזמנה.',
    eventTypes: [
      {
        title: 'פגישות מקצועיות',
        description: 'סביבה רגועה לדיוני צוות, ייעוצים ופגישות מקצועיות קטנות.',
      },
      {
        title: 'מפגשי דיפלומה והדרכה',
        description: 'פניות להשכרת חלל להצגת דיפלומות, הדגמות וימי הדרכה בתחום היופי.',
      },
      {
        title: 'סמינרים וסדנאות',
        description: 'מפגשי לימוד קטנים, מצגות וסדנאות מעשיות בתיאום מראש.',
      },
    ],
    planningHeading: 'תכנון החלל בהתאם לאירוע',
    planningIntro:
      'אנחנו מאשרים את הפרטים המעשיים איתכם לפני הצעת מחיר. דבר אינו נחשב כלול עד שיוסכם בכתב.',
    planningItems: [
      'סידור חדר מתאים וקיבולת משתתפים',
      'ריהוט, ציוד וצרכי מצגת מבוקשים',
      'זמני הגעה, הקמה וגישה',
      'לוח הזמנים של הסלון ודרישות פרטיות',
      'ניקיון, כיבוד וסידורים מיוחדים',
    ],
    processHeading: 'איך עובדת הפנייה?',
    processSteps: [
      {
        title: '1. שתפו את פרטי האירוע',
        description: 'שלחו תאריך, שעות, סוג אירוע, מספר אורחים צפוי וצרכי סידור.',
      },
      {
        title: '2. נאשר התאמה',
        description: 'הצוות בודק זמינות, קיבולת, דרישות מעשיות וכללי המקום.',
      },
      {
        title: '3. קבלו הצעה בכתב',
        description: 'אם החלל מתאים, תקבלו פירוט מוסכם, מחיר ותנאי הזמנה.',
      },
    ],
    inquiryHeading: 'מה לכלול בהודעה?',
    inquiryIntro: 'פנייה מלאה עוזרת לצוות להשיב במדויק וללא עיכוב.',
    inquiryItems: [
      'תאריך ושעת התחלה/סיום מועדפים',
      'פגישה, מפגש דיפלומה/הדרכה, סמינר או סדנה',
      'מספר המשתתפים הצפוי',
      'דרישות סידור החדר והציוד',
      'שם ודרך קשר מועדפת: טלפון, WhatsApp או אימייל',
    ],
    locationLabel: 'כתובת המקום',
    faqHeading: 'שאלות על השכרת המקום',
    faqs: [
      {
        question: 'האם אפשר לקיים בסלון מפגש דיפלומה או הדרכה?',
        answer:
          'ייתכן, לאחר אישור התאמה. שלחו את הפורמט, מספר המשתתפים והדרישות המעשיות. השכרת המקום אינה אומרת ש-Silk מנפיקה או מאשרת דיפלומה.',
      },
      {
        question: 'כמה אנשים יכולים להשתתף?',
        answer: 'הקיבולת תלויה בסידור החדר, בלוח הזמנים של הסלון ובסוג האירוע, ומאושרת לפני הצעת המחיר.',
      },
      {
        question: 'מה כלול בהשכרה?',
        answer: 'גישה לחלל, ריהוט, ציוד, הקמה וסידורים נוספים מאושרים בנפרד לכל פנייה.',
      },
      {
        question: 'כמה עולה השכרת המקום?',
        answer: 'המחיר תלוי בתאריך, במשך, בפורמט האירוע ובדרישות ההקמה. הצוות מספק הצעה בכתב לאחר בדיקת הפרטים.',
      },
    ],
    closingTitle: 'תכננו את האירוע שלכם ב-Silk Beauty Salon',
    closingDescription: 'שלחו את פרטי האירוע ב-WhatsApp או צרו קשר עם הסלון כדי לבדוק התאמה וזמינות.',
    whatsappMessage:
      'שלום Silk Beauty Salon, אני רוצה לברר לגבי השכרת חלל הסלון. תאריך/שעה מועדפים: __. סוג האירוע: __. מספר אורחים: __. צרכי סידור: __.',
  },
};
