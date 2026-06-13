import type { Locale } from '@/i18n';

export const localSeoLandingPageSlugs = [
  'botox-batumi',
  'dermal-fillers-batumi',
  'skin-treatment-batumi',
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
  categorySlug: 'botox' | 'dermal-fillers' | 'skin-treatments';
  image: string;
  treatmentSlugs: string[];
  priority: number;
  content: Record<Locale, LocalSeoLandingPageContent>;
};

export const localSeoLandingPages: LocalSeoLandingPage[] = [
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
        searchTitle: 'Search phrases this page answers',
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
        eyebrow: 'ბოტოქსი ბათუმში',
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
        bookingTitle: 'დაჯავშნეთ ბოტოქსი ბათუმში',
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
        title: "Batumi'de Botoks",
        h1: "Batumi'de Botoks",
        description:
          "Silk Beauty Salon'da Batumi botoks danışmanlığı: kırışıklık, masseter ve terleme odaklı seçenekler, net bakım önerileriyle planlanır.",
        eyebrow: 'Batumi botoks',
        intro:
          "Batumi botoks, Batumi botoks tedavisi veya Botox Batumi arıyorsanız, Silk Beauty Salon merkezi Batumi'de danışmanlık odaklı enjeksiyon randevuları sunar.",
        searchTitle: 'Bu sayfanın yanıtladığı aramalar',
        searchPhrases: ['Batumi botoks', 'Batumi botoks tedavisi', 'Botox Batumi'],
        benefitsTitle: "Batumi'de botoks için neden Silk",
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
            title: 'Merkezi Batumi konumu',
            text: 'Silk Beauty Salon, Zurab Gorgiladze 63 adresinde, Batumi merkezine yakın konumdadır.',
          },
        ],
        treatmentTitle: 'Botoks ve nöromodülatör seçenekleri',
        treatmentIntro:
          'İlgili tedavileri inceleyin, ardından sizin için uygun planı netleştirmek üzere danışmanlık randevusu alın.',
        faqTitle: 'Batumi botoks soruları',
        faqs: [
          {
            question: "Turist olarak Batumi'de botoks randevusu alabilir miyim?",
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
        bookingTitle: "Batumi'de botoks randevusu",
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
        searchTitle: 'Search phrases this page answers',
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
      'filter-facial',
      'caviar-peel',
      'skinpen-microneedling',
      'morpheus-8-treatment',
      'profhilo-body',
      'observe-skin-scanner',
    ],
    priority: 0.96,
    content: {
      en: {
        title: 'Skin treatment in Batumi',
        h1: 'Skin treatment in Batumi',
        description:
          'Skin treatment, skin care, facials, peels, microneedling, and skin analysis in Batumi at Silk Beauty Salon.',
        eyebrow: 'Skin care Batumi',
        intro:
          'If you are searching for skin treatment Batumi, skin care Batumi, or facials Batumi, Silk Beauty Salon plans skin treatments around your skin condition, goals, and timing.',
        searchTitle: 'Search phrases this page answers',
        searchPhrases: ['skin treatment Batumi', 'skin care Batumi', 'facials Batumi'],
        benefitsTitle: 'Why clients choose Silk for skin treatment in Batumi',
        benefits: [
          {
            title: 'Skin assessment first',
            text: 'The team can use consultation and skin analysis to understand texture, pores, pigmentation, redness, acne marks, or sensitivity.',
          },
          {
            title: 'Treatment plans, not guesses',
            text: 'Facials, peels, microneedling, boosters, and device-led treatments are selected around your skin and schedule.',
          },
          {
            title: 'Aftercare built in',
            text: 'You receive guidance for sun exposure, home care, and timing around Batumi weather, travel, and events.',
          },
        ],
        treatmentTitle: 'Skin treatment and facial options',
        treatmentIntro:
          'Explore skin analysis, facials, peels, microneedling, and collagen-focused treatments before booking your consultation.',
        faqTitle: 'Skin treatment Batumi questions',
        faqs: [
          {
            question: 'Which skin treatment should I book in Batumi?',
            answer:
              'If you are unsure, book a consultation or skin analysis first. The team can recommend a suitable facial, peel, microneedling, or device treatment.',
          },
          {
            question: 'Can I book a facial before an event?',
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
          'Choose a consultation if you want a skin plan for facials, peels, microneedling, collagen support, or skin analysis.',
      },
      ka: {
        title: 'კანის მკურნალობა ბათუმში',
        h1: 'კანის მკურნალობა ბათუმში',
        description:
          'კანის მკურნალობა, კანის მოვლა, სახის პროცედურები, პილინგი, მიკრონიდლინგი და კანის ანალიზი ბათუმში Silk Beauty Salon-ში.',
        eyebrow: 'კანის მოვლა ბათუმში',
        intro:
          'თუ ეძებთ კანის მკურნალობა ბათუმში, კანის მოვლა ბათუმში ან facials Batumi, Silk Beauty Salon გეგმავს პროცედურებს თქვენი კანის მდგომარეობის, მიზნების და დროის მიხედვით.',
        searchTitle: 'საძიებო ფრაზები',
        searchPhrases: ['კანის მკურნალობა ბათუმში', 'კანის მოვლა ბათუმში', 'სახის პროცედურები ბათუმში'],
        benefitsTitle: 'რატომ ირჩევენ Silk-ს კანის მკურნალობისთვის ბათუმში',
        benefits: [
          {
            title: 'პირველ რიგში კანის შეფასება',
            text: 'გუნდი კონსულტაციით და კანის ანალიზით აფასებს ტექსტურას, ფორებს, პიგმენტაციას, სიწითლეს, აკნეს კვალს ან მგრძნობელობას.',
          },
          {
            title: 'გეგმა და არა გამოცნობა',
            text: 'სახის პროცედურები, პილინგები, მიკრონიდლინგი, ბუსტერები და აპარატული პროცედურები ირჩევა თქვენი კანის მიხედვით.',
          },
          {
            title: 'შემდგომი მოვლა',
            text: 'იღებთ რეკომენდაციებს მზეზე ყოფნის, სახლის მოვლის და ბათუმის ამინდთან ან ღონისძიებებთან დროის დაგეგმვისთვის.',
          },
        ],
        treatmentTitle: 'კანის პროცედურები და სახის მოვლა',
        treatmentIntro:
          'დაათვალიერეთ კანის ანალიზი, სახის პროცედურები, პილინგი, მიკრონიდლინგი და კოლაგენზე ორიენტირებული პროცედურები.',
        faqTitle: 'კითხვები კანის მკურნალობაზე ბათუმში',
        faqs: [
          {
            question: 'რომელი კანის პროცედურა დავჯავშნო ბათუმში?',
            answer:
              'თუ დარწმუნებული არ ხართ, დაიწყეთ კონსულტაციით ან კანის ანალიზით. გუნდი შეგირჩევთ შესაბამის გზას.',
          },
          {
            question: 'შემიძლია სახის პროცედურა ღონისძიებამდე?',
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
          'აირჩიეთ კონსულტაცია სახის პროცედურების, პილინგის, მიკრონიდლინგის, კოლაგენის მხარდაჭერის ან კანის ანალიზისთვის.',
      },
      ru: {
        title: 'Лечение и уход за кожей в Батуми',
        h1: 'Лечение и уход за кожей в Батуми',
        description:
          'Уход за кожей, процедуры для лица, пилинги, микронидлинг и анализ кожи в Батуми в Silk Beauty Salon.',
        eyebrow: 'Уход за кожей Батуми',
        intro:
          'Если вы ищете лечение кожи Батуми, уход за кожей Батуми или facials Batumi, Silk Beauty Salon подбирает процедуры по состоянию кожи, целям и срокам.',
        searchTitle: 'Поисковые запросы',
        searchPhrases: ['лечение кожи Батуми', 'уход за кожей Батуми', 'процедуры для лица Батуми'],
        benefitsTitle: 'Почему выбирают Silk для кожи в Батуми',
        benefits: [
          {
            title: 'Сначала оценка кожи',
            text: 'Команда оценивает текстуру, поры, пигментацию, покраснение, следы акне или чувствительность.',
          },
          {
            title: 'План вместо догадок',
            text: 'Фейшиалы, пилинги, микронидлинг, бустеры и аппаратные процедуры подбираются по коже и графику.',
          },
          {
            title: 'Уход после процедуры',
            text: 'Вы получаете рекомендации по солнцу, домашнему уходу и срокам с учетом погоды, поездок и событий.',
          },
        ],
        treatmentTitle: 'Варианты процедур для кожи',
        treatmentIntro:
          'Изучите анализ кожи, фейшиалы, пилинги, микронидлинг и процедуры для поддержки коллагена.',
        faqTitle: 'Вопросы о лечении кожи в Батуми',
        faqs: [
          {
            question: 'Какую процедуру для кожи выбрать в Батуми?',
            answer:
              'Если вы не уверены, начните с консультации или анализа кожи. Команда предложит подходящий вариант.',
          },
          {
            question: 'Можно ли сделать фейшиал перед событием?',
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
          'Консультация подходит для плана фейшиалов, пилингов, микронидлинга, коллагеновой поддержки или анализа кожи.',
      },
      tr: {
        title: "Batumi'de cilt tedavisi",
        h1: "Batumi'de cilt tedavisi",
        description:
          "Silk Beauty Salon'da Batumi cilt bakımı, yüz bakımı, peeling, microneedling ve cilt analizi.",
        eyebrow: 'Batumi cilt bakımı',
        intro:
          "Batumi cilt bakımı, Batumi cilt tedavisi veya facials Batumi arıyorsanız, Silk Beauty Salon tedavileri cilt durumu, hedefler ve zamanlamaya göre planlar.",
        searchTitle: 'Bu sayfanın yanıtladığı aramalar',
        searchPhrases: ['Batumi cilt bakımı', 'Batumi cilt tedavisi', 'Batumi yüz bakımı'],
        benefitsTitle: "Batumi'de cilt tedavisi için neden Silk",
        benefits: [
          {
            title: 'Önce cilt değerlendirmesi',
            text: 'Ekip doku, gözenek, pigmentasyon, kızarıklık, akne izleri veya hassasiyeti anlamak için danışmanlık yapar.',
          },
          {
            title: 'Tahmin değil tedavi planı',
            text: 'Yüz bakımları, peeling, microneedling, booster ve cihaz odaklı tedaviler cildinize göre seçilir.',
          },
          {
            title: 'Bakım önerileri dahil',
            text: 'Güneş, ev bakımı, Batumi havası, seyahat ve etkinlik zamanlaması için öneriler alırsınız.',
          },
        ],
        treatmentTitle: 'Cilt tedavisi ve yüz bakımı seçenekleri',
        treatmentIntro:
          'Randevu almadan önce cilt analizi, yüz bakımı, peeling, microneedling ve kolajen odaklı tedavileri inceleyin.',
        faqTitle: 'Batumi cilt tedavisi soruları',
        faqs: [
          {
            question: "Batumi'de hangi cilt tedavisini seçmeliyim?",
            answer:
              'Emin değilseniz önce danışmanlık veya cilt analizi alın. Ekip uygun seçeneği önerebilir.',
          },
          {
            question: 'Etkinlik öncesi yüz bakımı yapılır mı?',
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
        bookingTitle: "Batumi'de cilt tedavisi randevusu",
        bookingText:
          'Yüz bakımı, peeling, microneedling, kolajen desteği veya cilt analizi için danışmanlık seçin.',
      },
      ar: {
        title: 'علاج البشرة في باتومي',
        h1: 'علاج البشرة في باتومي',
        description:
          'علاج البشرة، العناية بالبشرة، جلسات الوجه، التقشير، المايكرونيدلنغ وتحليل البشرة في باتومي لدى Silk Beauty Salon.',
        eyebrow: 'العناية بالبشرة باتومي',
        intro:
          'إذا كنت تبحثين عن علاج البشرة باتومي أو العناية بالبشرة في باتومي أو facials Batumi، يخطط Silk Beauty Salon العلاجات حسب حالة البشرة والأهداف والتوقيت.',
        searchTitle: 'عبارات البحث التي تغطيها الصفحة',
        searchPhrases: ['علاج البشرة باتومي', 'العناية بالبشرة في باتومي', 'جلسات الوجه في باتومي'],
        benefitsTitle: 'لماذا يختار العملاء Silk لعلاج البشرة في باتومي',
        benefits: [
          {
            title: 'تقييم البشرة أولا',
            text: 'يمكن للفريق استخدام الاستشارة وتحليل البشرة لفهم الملمس، المسام، التصبغ، الاحمرار، آثار حب الشباب أو الحساسية.',
          },
          {
            title: 'خطة علاج لا تخمين',
            text: 'يتم اختيار جلسات الوجه، التقشير، المايكرونيدلنغ، البوسترات والعلاجات بالأجهزة حسب البشرة والجدول.',
          },
          {
            title: 'العناية اللاحقة ضمن الخطة',
            text: 'تحصلين على إرشادات للشمس، العناية المنزلية، والتوقيت حول طقس باتومي والسفر والمناسبات.',
          },
        ],
        treatmentTitle: 'خيارات علاج البشرة وجلسات الوجه',
        treatmentIntro:
          'اطلعي على تحليل البشرة، جلسات الوجه، التقشير، المايكرونيدلنغ والعلاجات الداعمة للكولاجين قبل الحجز.',
        faqTitle: 'أسئلة عن علاج البشرة في باتومي',
        faqs: [
          {
            question: 'أي علاج بشرة أحجز في باتومي؟',
            answer:
              'إذا لم تكوني متأكدة، ابدئي باستشارة أو تحليل للبشرة. يمكن للفريق اقتراح الخيار المناسب.',
          },
          {
            question: 'هل يمكن حجز جلسة وجه قبل مناسبة؟',
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
          'اختاري الاستشارة لخطة تشمل جلسات الوجه، التقشير، المايكرونيدلنغ، دعم الكولاجين أو تحليل البشرة.',
      },
      he: {
        title: 'טיפולי עור בבטומי',
        h1: 'טיפולי עור בבטומי',
        description:
          'טיפולי עור, טיפוח עור, טיפולי פנים, פילינג, מיקרונידלינג וניתוח עור בבטומי ב-Silk Beauty Salon.',
        eyebrow: 'טיפוח עור בטומי',
        intro:
          'אם אתם מחפשים טיפולי עור בבטומי, טיפוח עור בבטומי או facials Batumi, Silk Beauty Salon מתכנן טיפול לפי מצב העור, המטרות והתזמון.',
        searchTitle: 'ביטויי חיפוש שהעמוד מכסה',
        searchPhrases: ['טיפולי עור בבטומי', 'טיפוח עור בבטומי', 'טיפולי פנים בבטומי'],
        benefitsTitle: 'למה לבחור ב-Silk לטיפולי עור בבטומי',
        benefits: [
          {
            title: 'קודם הערכת עור',
            text: 'הצוות יכול להשתמש בייעוץ ובניתוח עור כדי להבין מרקם, נקבוביות, פיגמנטציה, אדמומיות, סימני אקנה או רגישות.',
          },
          {
            title: 'תכנית טיפול ולא ניחוש',
            text: 'טיפולי פנים, פילינג, מיקרונידלינג, בוסטרים וטיפולים במכשור נבחרים לפי העור ולוח הזמנים.',
          },
          {
            title: 'הנחיות לאחר טיפול',
            text: 'מקבלים הדרכה לגבי שמש, טיפול ביתי ותזמון סביב מזג האוויר בבטומי, נסיעות ואירועים.',
          },
        ],
        treatmentTitle: 'אפשרויות טיפולי עור ופנים',
        treatmentIntro:
          'עיינו בניתוח עור, טיפולי פנים, פילינג, מיקרונידלינג וטיפולים ממוקדי קולגן לפני קביעת ייעוץ.',
        faqTitle: 'שאלות על טיפולי עור בבטומי',
        faqs: [
          {
            question: 'איזה טיפול עור כדאי לקבוע בבטומי?',
            answer:
              'אם אינכם בטוחים, התחילו בייעוץ או ניתוח עור. הצוות יוכל להמליץ על אפשרות מתאימה.',
          },
          {
            question: 'אפשר לקבוע טיפול פנים לפני אירוע?',
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
          'בחרו ייעוץ לתכנית של טיפולי פנים, פילינג, מיקרונידלינג, תמיכת קולגן או ניתוח עור.',
      },
    },
  },
];

export const localSeoLandingSitemapRoutes = localSeoLandingPages.map((page) => ({
  path: `/${page.slug}`,
  changeFrequency: 'weekly' as const,
  priority: page.priority,
}));
