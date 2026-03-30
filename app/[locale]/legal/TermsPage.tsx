import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/types/types';

const legalContent: Record<string, Record<string, { title: string; lastUpdated: string; sections: { title: string; content: string }[] }>> = {
  en: {
    terms: {
      title: 'Terms of Use',
      lastUpdated: 'Last updated: March 2024',
      sections: [
        {
          title: '1. Acceptance of Terms',
          content: 'By accessing and using the Silk Beauty Salon website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this website. These Terms of Use apply to all visitors, users, and others who access or use the Service.'
        },
        {
          title: '2. Use License',
          content: 'Permission is granted to temporarily view the materials on Silk Beauty Salon\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials; use the materials for any commercial purpose; or attempt to decompile or reverse engineer any software contained on the website.'
        },
        {
          title: '3. Services and Appointments',
          content: 'All services and treatments offered by Silk Beauty Salon are subject to availability and may require prior consultation. Prices displayed on the website are indicative and may vary based on individual requirements. We reserve the right to refuse service to anyone for any reason at any time. Appointment cancellations must be made at least 24 hours in advance.'
        },
        {
          title: '4. Medical Disclaimer',
          content: 'The information provided on this website is for general informational purposes only and should not be considered as medical advice. All aesthetic treatments carry potential risks and side effects. We strongly recommend consulting with our certified specialists before undergoing any treatment. Individual results may vary, and no guarantees are made regarding outcomes.'
        },
        {
          title: '5. User Accounts',
          content: 'When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service. You are responsible for safeguarding the password that you use to access the Service.'
        },
        {
          title: '6. Intellectual Property',
          content: 'The Service and its original content, features, and functionality are and will remain the exclusive property of Silk Beauty Salon and its licensors. The Service is protected by copyright, trademark, and other laws of both Georgia and foreign countries. Our trademarks and trade dress may not be used without our prior written consent.'
        },
        {
          title: '7. Limitation of Liability',
          content: 'In no event shall Silk Beauty Salon, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.'
        },
        {
          title: '8. Governing Law',
          content: 'These Terms shall be governed and construed in accordance with the laws of Georgia, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.'
        }
      ]
    },
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: March 2024',
      sections: [
        {
          title: '1. Information We Collect',
          content: 'We collect information in various ways when you visit our website, book appointments, or contact us. This includes personal information such as your name, email address, phone number, and any other information you choose to provide. We may also collect information about your preferences, treatment history, and health-related information relevant to our services.'
        },
        {
          title: '2. How We Use Your Information',
          content: 'We use the information we collect to provide, maintain, and improve our services; process and manage your appointments; send you technical notices, updates, security alerts, and support messages; respond to your comments, questions, and customer service requests; communicate with you about products, services, and events; and monitor and analyze trends, usage, and activities in connection with our services.'
        },
        {
          title: '3. Information Sharing',
          content: 'We do not sell, trade, or otherwise transfer your personal information to outside parties except to trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law or protect our rights.'
        },
        {
          title: '4. Data Security',
          content: 'We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems and are required to keep the information confidential.'
        },
        {
          title: '5. Cookies and Tracking',
          content: 'We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies through your browser settings.'
        },
        {
          title: '6. Your Rights',
          content: 'You have the right to access, update, or delete your personal information at any time. You may also have the right to restrict or object to certain processing of your data. To exercise these rights, please contact us using the contact information provided below. We will respond to your request within 30 days.'
        },
        {
          title: '7. Third-Party Links',
          content: 'Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites.'
        },
        {
          title: '8. Contact Information',
          content: 'If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at: Silk Beauty Salon, 28 Rustaveli Avenue, Batumi 6010, Georgia. Email: info@silkbeautybatumi.ge | Phone: +995 599 123 456'
        }
      ]
    },
    cookies: {
      title: 'Cookie Notice',
      lastUpdated: 'Last updated: March 2024',
      sections: [
        {
          title: 'What Are Cookies?',
          content: 'Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners. Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device for a set period or until you delete them. Session cookies are deleted when you close your web browser.'
        },
        {
          title: 'How We Use Cookies',
          content: 'We use cookies for various purposes: to enable certain functions of the website, to provide analytics, to store your preferences, and to enable advertisements delivery, including behavioral advertising. We use both session and persistent cookies on the Service, and we use different types of cookies for different purposes as described below.'
        },
        {
          title: 'Essential Cookies',
          content: 'These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas. Because these cookies are strictly necessary to deliver the website, you cannot refuse them without impacting how our site functions.'
        },
        {
          title: 'Analytics and Performance Cookies',
          content: 'We use analytics cookies to track how visitors interact with our website. This helps us understand which pages are most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies, we will not know when you have visited our site.'
        },
        {
          title: 'Functionality Cookies',
          content: 'These cookies are used to recognize you when you return to our website. This enables us to personalize our content for you, greet you by name, and remember your preferences (for example, your choice of language or region). If you do not allow these cookies, then these services may not work properly.'
        },
        {
          title: 'Targeting and Advertising Cookies',
          content: 'These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns. They remember that you have visited a website and this information is shared with other organizations such as advertisers.'
        },
        {
          title: 'Third-Party Cookies',
          content: 'In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and so on. These include cookies from services like Google Analytics, Facebook Pixel, and other marketing tools. These third parties have their own privacy policies and we encourage you to review them.'
        },
        {
          title: 'Managing Cookies',
          content: 'You can control and/or delete cookies as you wish. You can delete all cookies that are already on your device and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work. For more information about managing cookies, visit www.allaboutcookies.org.'
        }
      ]
    }
  },
  ru: {
    terms: {
      title: 'Условия использования',
      lastUpdated: 'Обновлено: Март 2024',
      sections: [
        { title: '1. Принятие условий', content: 'Используя веб-сайт Silk Beauty Salon, вы принимаете и соглашаетесь соблюдать условия настоящего соглашения. Если вы не согласны с этими условиями, пожалуйста, не используйте этот веб-сайт.' },
        { title: '2. Лицензия на использование', content: 'Разрешается временно просматривать материалы на веб-сайте Silk Beauty Salon для личного некоммерческого просмотра.' },
        { title: '3. Услуги и записи', content: 'Все услуги и процедуры, предлагаемые Silk Beauty Salon, зависят от доступности и могут потребовать предварительной консультации.' },
        { title: '4. Медицинская оговорка', content: 'Информация на этом веб-сайте предоставляется только для общих информационных целей и не должна рассматриваться как медицинская рекомендация.' },
        { title: '5. Пользовательские аккаунты', content: 'При создании аккаунта вы должны предоставить точную и полную информацию.' },
        { title: '6. Интеллектуальная собственность', content: 'Сервис и его оригинальный контент являются исключительной собственностью Silk Beauty Salon.' },
        { title: '7. Ограничение ответственности', content: 'Silk Beauty Salon не несет ответственности за косвенные или случайные убытки.' },
        { title: '8. Применимое право', content: 'Эти условия регулируются законами Грузии.' }
      ]
    },
    privacy: {
      title: 'Политика конфиденциальности',
      lastUpdated: 'Обновлено: Март 2024',
      sections: [
        { title: '1. Информация, которую мы собираем', content: 'Мы собираем информацию, когда вы посещаете наш веб-сайт, бронируете встречи или связываетесь с нами.' },
        { title: '2. Как мы используем вашу информацию', content: 'Мы используем информацию для предоставления и улучшения наших услуг.' },
        { title: '3. Обмен информацией', content: 'Мы не продаем и не передаем вашу личную информацию третьим лицам.' },
        { title: '4. Безопасность данных', content: 'Мы внедряем меры безопасности для защиты вашей личной информации.' },
        { title: '5. Cookies и отслеживание', content: 'Мы используем cookies для понимания и сохранения ваших предпочтений.' },
        { title: '6. Ваши права', content: 'Вы имеете право доступа, обновления или удаления вашей личной информации.' },
        { title: '7. Сторонние ссылки', content: 'Мы можем включать ссылки на сторонние сайты с отдельной политикой конфиденциальности.' },
        { title: '8. Контактная информация', content: 'По вопросам конфиденциальности: info@silkbeautybatumi.ge | +995 599 123 456' }
      ]
    },
    cookies: {
      title: 'Уведомление о cookies',
      lastUpdated: 'Обновлено: Март 2024',
      sections: [
        { title: 'Что такое cookies?', content: 'Cookies — это небольшие текстовые файлы, размещаемые на вашем устройстве при посещении веб-сайта.' },
        { title: 'Как мы используем cookies', content: 'Мы используем cookies для различных целей: для функций сайта, аналитики и хранения предпочтений.' },
        { title: 'Необходимые cookies', content: 'Эти cookies строго необходимы для работы сайта.' },
        { title: 'Аналитические cookies', content: 'Мы используем аналитические cookies для отслеживания взаимодействия посетителей с сайтом.' },
        { title: 'Функциональные cookies', content: 'Эти cookies используются для узнавания вас при возвращении на сайт.' },
        { title: 'Рекламные cookies', content: 'Эти cookies используются для показа релевантной рекламы.' },
        { title: 'Сторонние cookies', content: 'Мы также можем использовать cookies третьих сторон, таких как Google Analytics и Facebook Pixel.' },
        { title: 'Управление cookies', content: 'Вы можете контролировать и удалять cookies по своему усмотрению.' }
      ]
    }
  },
  ka: {
    terms: {
      title: 'გამოყენების პირობები',
      lastUpdated: 'განახლებულია: მარტი 2024',
      sections: [
        { title: '1. პირობების მიღება', content: 'Silk Beauty Salon-ის ვებსაიტის გამოყენებით, თქვენ იღებთ და ეთანხმებით ამ შეთანხმების პირობებს.' },
        { title: '2. ლიცენზია', content: 'ნებადართულია მასალების დროებითი ნახვა პირადი, არაკომერციული მიზნებისთვის.' },
        { title: '3. მომსახურება და ჯავშნები', content: 'ყველა მომსახურება დამოკიდებულია ხელმისაწვდომობაზე.' },
        { title: '4. სამედიცინო განაცხადი', content: 'ინფორმაცია მოცემულია მხოლოდ ზოგადი ცნობისმოყვარეობისთვის.' },
        { title: '5. მომხმარებლის ანგარიშები', content: 'ანგარიშის შექმნისას უნდა მისცეთ ზუსტი ინფორმაცია.' },
        { title: '6. ინტელექტუალური საკუთრება', content: 'სერვისი და მისი ორიგინალური შიგთავსი Silk Beauty Salon-ის საკუთრებაა.' },
        { title: '7. პასუხისმგებლობის შეზღუდვა', content: 'Silk Beauty Salon არ არის პასუხისმგებელი არაპირდაპირი ზარალისთვის.' },
        { title: '8. მოქმედი სამართალი', content: 'პირობები რეგულირდება საქართველოს კანონმდებლობით.' }
      ]
    },
    privacy: {
      title: 'კონფიდენციალურობის პოლიტიკა',
      lastUpdated: 'განახლებულია: მარტი 2024',
      sections: [
        { title: '1. შეგროვებული ინფორმაცია', content: 'ჩვენ ვაგროვებთ ინფორმაციას, როდესაც ეწვევით ჩვენს ვებსაიტს.' },
        { title: '2. ინფორმაციის გამოყენება', content: 'ვიყენებთ ინფორმაციას მომსახურების მისაწოდებლად და გასაუმჯობესებლად.' },
        { title: '3. ინფორმაციის გაზიარება', content: 'ჩვენ არ ვყიდით და არ გადავცემთ თქვენს პერსონალურ ინფორმაციას.' },
        { title: '4. მონაცემთა უსაფრთხოება', content: 'ჩვენ ვახორციელებთ უსაფრთხოების ზომებს.' },
        { title: '5. Cookies', content: 'ჩვენ ვიყენებთ cookies-ს თქვენი პრეფერენსიებისთვის.' },
        { title: '6. თქვენი უფლებები', content: 'გაქვთ უფლება მიხვდეთ, განაახლოთ ან წაშალოთ თქვენი ინფორმაცია.' },
        { title: '7. მესამე მხარის ბმულები', content: 'შეიძლება მივაწოდოთ ბმულები მესამე მხარის საიტებზე.' },
        { title: '8. საკონტაქტო ინფორმაცია', content: 'კონფიდენციალურობის შესახებ: info@silkbeautybatumi.ge | +995 599 123 456' }
      ]
    },
    cookies: {
      title: 'Cookie შეტყობინება',
      lastUpdated: 'განახლებულია: მარტი 2024',
      sections: [
        { title: 'რა არის cookies?', content: 'Cookies არის პატარა ტექსტური ფაილები, რომლებიც თავსდება თქვენს მოწყობილობაზე.' },
        { title: 'როგორ ვიყენებთ cookies-ს', content: 'ვიყენებთ cookies-ს სხვადასხვა მიზნით.' },
        { title: 'აუცილებელი cookies', content: 'ეს cookies მკაცრად აუცილებელია საიტის სამუშაოდ.' },
        { title: 'ანალიტიკური cookies', content: 'ვიყენებთ ანალიტიკურ cookies-ს ვიზიტორების ქცევის გასაგებად.' },
        { title: 'ფუნქციონალური cookies', content: 'ეს cookies გამოიყენება თქვენს გამოცნობისთვის.' },
        { title: 'სარეკლამო cookies', content: 'გამოიყენება შესაბამისი რეკლამის საჩვენებლად.' },
        { title: 'მესამე მხარის cookies', content: 'შეიძლება გამოვიყენოთ მესამე მხარის cookies.' },
        { title: 'Cookies-ის მართვა', content: 'შეგიძლიათ გააკონტროლოთ და წაშალოთ cookies.' }
      ]
    }
  },
  he: {
    terms: {
      title: 'תנאי שימוש',
      lastUpdated: 'עודכן: מרץ 2024',
      sections: [
        { title: '1. קבלת תנאים', content: 'באמצעות שימוש באתר Silk Beauty Salon, אתה מקבל ומסכים לתנאי הסכם זה.' },
        { title: '2. רישיון שימוש', content: 'מותר לצפות בחומרים באתר לצפייה אישית ולא מסחרית בלבד.' },
        { title: '3. שירותים ותורים', content: 'כל השירותים והטיפולים כפופים לזמינות.' },
        { title: '4. כתב ויתור רפואי', content: 'המידע באתר ניתן למטרות מידע כללי בלבד.' },
        { title: '5. חשבונות משתמש', content: 'עליך לספק מידע מדויק בעת יצירת חשבון.' },
        { title: '6. קניין רוחני', content: 'השירות ותוכנו המקורי הם רכושה הבלעדי של Silk Beauty Salon.' },
        { title: '7. הגבלת אחריות', content: 'Silk Beauty Salon אינה אחראית לנזקים עקיפים.' },
        { title: '8. דין חל', content: 'תנאים אלה כפופים לחוקי גאורגיה.' }
      ]
    },
    privacy: {
      title: 'מדיניות פרטיות',
      lastUpdated: 'עודכן: מרץ 2024',
      sections: [
        { title: '1. מידע שאנו אוספים', content: 'אנו אוספים מידע כאשר אתה מבקר באתר שלנו.' },
        { title: '2. שימוש במידע', content: 'אנו משתמשים במידע כדי לספק ולשפר את השירותים שלנו.' },
        { title: '3. שיתוף מידע', content: 'אנו לא מוכרים או מעבירים את המידע האישי שלך.' },
        { title: '4. אבטחת מידע', content: 'אנו מיישמים אמצעי אבטחה להגנה על המידע שלך.' },
        { title: '5. עוגיות', content: 'אנו משתמשים בעוגיות לשמירת העדפותיך.' },
        { title: '6. הזכויות שלך', content: 'יש לך זכות לגשת, לעדכן או למחוק את המידע שלך.' },
        { title: '7. קישורי צד שלישי', content: 'אנו עשויים לספק קישורים לאתרי צד שלישי.' },
        { title: '8. פרטי קשר', content: 'לשאלות פרטיות: info@silkbeautybatumi.ge | +995 599 123 456' }
      ]
    },
    cookies: {
      title: 'הודעת עוגיות',
      lastUpdated: 'עודכן: מרץ 2024',
      sections: [
        { title: 'מהן עוגיות?', content: 'עוגיות הן קבצי טקסט קטנים שמוצבים על המכשיר שלך.' },
        { title: 'כיצד אנו משתמשים בעוגיות', content: 'אנו משתמשים בעוגיות למטרות שונות.' },
        { title: 'עוגיות חיוניות', content: 'עוגיות אלה הכרחיות לפעולת האתר.' },
        { title: 'עוגיות אנליטיות', content: 'אנו משתמשים בעוגיות אנליטיות להבנת התנהגות מבקרים.' },
        { title: 'עוגיות פונקציונליות', content: 'עוגיות אלה משמשות לזיהוי שלך בחזרה לאתר.' },
        { title: 'עוגיות פרסומיות', content: 'משמשות להצגת פרסומות רלוונטיות.' },
        { title: 'עוגיות צד שלישי', content: 'אנו עשויים להשתמש בעוגיות צד שלישי.' },
        { title: 'ניהול עוגיות', content: 'אתה יכול לשלוט ולמחוק עוגיות.' }
      ]
    }
  },
  ar: {
    terms: {
      title: 'شروط الاستخدام',
      lastUpdated: 'تم التحديث: مارس 2024',
      sections: [
        { title: '1. قبول الشروط', content: 'باستخدام موقع Silk Beauty Salon، أنت تقبل وتوافق على شروط هذه الاتفاقية.' },
        { title: '2. ترخيص الاستخدام', content: 'يُسمح بعرض المواد على الموقع للعرض الشخصي غير التجاري فقط.' },
        { title: '3. الخدمات والمواعيد', content: 'جميع الخدمات والعلاجات تعتمد على التوفر.' },
        { title: '4. إخلاء المسؤولية الطبية', content: 'المعلومات على الموقع مخصصة للأغراض العامة فقط.' },
        { title: '5. حسابات المستخدمين', content: 'يجب عليك تقديم معلومات دقيقة عند إنشاء حساب.' },
        { title: '6. الملكية الفكرية', content: 'الخدمة ومحتواها الأصلي هي ملك حصري لـ Silk Beauty Salon.' },
        { title: '7. تحديد المسؤولية', content: 'Silk Beauty Salon غير مسؤولة عن الأضرار غير المباشرة.' },
        { title: '8. القانون الحاكم', content: 'تخضع هذه الشروط لقوانين جورجيا.' }
      ]
    },
    privacy: {
      title: 'سياسة الخصوصية',
      lastUpdated: 'تم التحديث: مارس 2024',
      sections: [
        { title: '1. المعلومات التي نجمعها', content: 'نجمع المعلومات عند زيارتك لموقعنا.' },
        { title: '2. كيف نستخدم معلوماتك', content: 'نستخدم المعلومات لتقديم وتحسين خدماتنا.' },
        { title: '3. مشاركة المعلومات', content: 'نحن لا نبيع أو ننقل معلوماتك الشخصية.' },
        { title: '4. أمن البيانات', content: 'ننفذ تدابير أمنية لحماية معلوماتك.' },
        { title: '5. ملفات تعريف الارتباط', content: 'نستخدم ملفات تعريف الارتباط لحفظ تفضيلاتك.' },
        { title: '6. حقوقك', content: 'لديك الحق في الوصول أو تحديث أو حذف معلوماتك.' },
        { title: '7. روابط الطرف الثالث', content: 'قد نقدم روابط لمواقع طرف ثالث.' },
        { title: '8. معلومات الاتصال', content: 'لأسئلة الخصوصية: info@silkbeautybatumi.ge | +995 599 123 456' }
      ]
    },
    cookies: {
      title: 'إشعار ملفات تعريف الارتباط',
      lastUpdated: 'تم التحديث: مارس 2024',
      sections: [
        { title: 'ما هي ملفات تعريف الارتباط؟', content: 'ملفات تعريف الارتباط هي ملفات نصية صغيرة توضع على جهازك.' },
        { title: 'كيف نستخدم ملفات تعريف الارتباط', content: 'نستخدم ملفات تعريف الارتباط لأغراض مختلفة.' },
        { title: 'ملفات تعريف الارتباط الأساسية', content: 'هذه الملفات ضرورية لعمل الموقع.' },
        { title: 'ملفات تعريف الارتباط التحليلية', content: 'نستخدمها لفهم سلوك الزوار.' },
        { title: 'ملفات تعريف الارتباط الوظيفية', content: 'تستخدم للتعرف عليك عند العودة للموقع.' },
        { title: 'ملفات تعريف الارتباط الإعلانية', content: 'تستخدم لعرض إعلانات ذات صلة.' },
        { title: 'ملفات تعريف الارتباط لطرف ثالث', content: 'قد نستخدم ملفات تعريف ارتباط من طرف ثالث.' },
        { title: 'إدارة ملفات تعريف الارتباط', content: 'يمكنك التحكم في ملفات تعريف الارتباط وحذفها.' }
      ]
    }
  },
  tr: {
    terms: {
      title: 'Kullanım Koşulları',
      lastUpdated: 'Güncellenme: Mart 2024',
      sections: [
        { title: '1. Koşulların Kabulü', content: 'Silk Beauty Salon web sitesini kullanarak bu sözleşmenin koşullarını kabul etmiş olursunuz.' },
        { title: '2. Kullanım Lisansı', content: 'Sitedeki materyalleri yalnızca kişisel, ticari olmayan görüntüleme için izin verilir.' },
        { title: '3. Hizmetler ve Randevular', content: 'Tüm hizmetler müsaitliğe bağlıdır.' },
        { title: '4. Tıbbi Feragat', content: 'Sitedaki bilgiler yalnızca genel bilgilendirme amaçlıdır.' },
        { title: '5. Kullanıcı Hesapları', content: 'Hesap oluştururken doğru bilgi sağlamalısınız.' },
        { title: '6. Fikri Mülkiyet', content: 'Hizmet ve özgün içeriği Silk Beauty Salon\'un mülkiyetindedir.' },
        { title: '7. Sorumluluk Sınırlaması', content: 'Silk Beauty Salon dolaylı zararlardan sorumlu değildir.' },
        { title: '8. Uygulanacak Hukuk', content: 'Bu koşullar Gürcistan yasalarına tabidir.' }
      ]
    },
    privacy: {
      title: 'Gizlilik Politikası',
      lastUpdated: 'Güncellenme: Mart 2024',
      sections: [
        { title: '1. Topladığımız Bilgiler', content: 'Web sitemizi ziyaret ettiğinizde bilgi toplarız.' },
        { title: '2. Bilgilerinizi Nasıl Kullanırız', content: 'Bilgileri hizmetlerimizi sağlamak ve geliştirmek için kullanırız.' },
        { title: '3. Bilgi Paylaşımı', content: 'Kişisel bilgilerinizi satmıyor veya aktarmıyoruz.' },
        { title: '4. Veri Güvenliği', content: 'Bilgilerinizi korumak için güvenlik önlemleri uyguluyoruz.' },
        { title: '5. Çerezler', content: 'Tercihlerinizi kaydetmek için çerezleri kullanıyoruz.' },
        { title: '6. Haklarınız', content: 'Bilgilerinize erişme, güncelleme veya silme hakkınız var.' },
        { title: '7. Üçüncü Taraf Bağlantıları', content: 'Üçüncü taraf sitelerine bağlantılar sağlayabiliriz.' },
        { title: '8. İletişim Bilgileri', content: 'Gizlilik soruları için: info@silkbeautybatumi.ge | +995 599 123 456' }
      ]
    },
    cookies: {
      title: 'Çerez Bildirimi',
      lastUpdated: 'Güncellenme: Mart 2024',
      sections: [
        { title: 'Çerezler Nedir?', content: 'Çerezler, cihazınıza yerleştirilen küçük metin dosyalarıdır.' },
        { title: 'Çerezleri Nasıl Kullanırız', content: 'Çerezleri çeşitli amaçlarla kullanırız.' },
        { title: 'Temel Çerezler', content: 'Bu çerezler sitenin çalışması için gereklidir.' },
        { title: 'Analitik Çerezler', content: 'Ziyaretçi davranışını anlamak için kullanılır.' },
        { title: 'İşlevsel Çerezler', content: 'Siteye döndüğünüzde sizi tanımak için kullanılır.' },
        { title: 'Reklam Çerezleri', content: 'İlgili reklamları göstermek için kullanılır.' },
        { title: 'Üçüncü Taraf Çerezleri', content: 'Üçüncü taraf çerezlerini kullanabiliriz.' },
        { title: 'Çerezleri Yönetme', content: 'Çerezleri kontrol edebilir ve silebilirsiniz.' }
      ]
    }
  }
};

export default async function LegalPage({
  params,
  pageType,
}: {
  params: Promise<{ locale: Locale }>;
  pageType: 'terms' | 'privacy' | 'cookies';
}) {
  const { locale } = await params;
  const content = legalContent[locale]?.[pageType] || legalContent.en[pageType];

  return (
    <div style={{ background: 'linear-gradient(180deg, #0d0a08 0%, #111009 100%)' }}>
      <div className="container mx-auto max-w-4xl px-6 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="font-display font-bold mb-4"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              background: 'linear-gradient(135deg, #f5e6d0, #C9A96E)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {content.title}
          </h1>
          <p className="text-stone-500 text-sm">{content.lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {content.sections.map((section, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl border border-stone-800"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <h2 className="text-gold-400 font-semibold text-lg mb-3">{section.title}</h2>
              <p className="text-stone-400 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <a
            href={`/${locale}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-stone-900 transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #C9A96E, #a07840)' }}
          >
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
}
