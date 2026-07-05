import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { Award, CalendarCheck, ChevronRight, Clock, Mail, MapPin, Phone, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  JsonLd,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateLocalBusinessSchema,
} from '@/components/seo/JsonLd';
import { siteConfig } from '@/data/site-config';
import { locales, type Locale } from '@/i18n';
import { buildSeoMetadata, localSeoKeywords } from '@/lib/seo';

const pageTitle = 'Beauty Salon in Batumi, Georgia';
const pageDescription =
  'Visit Silk Beauty Salon at Zurab Gorgiladze 63 in Batumi for injectables, skin care, laser treatments, nails, lashes, and online booking.';

const serviceHighlights = [
  {
    title: 'Skin care and skin treatments',
    description:
      'Hydrating, calming, brightening, and texture-focused skin care planned around your skin condition and Batumi climate.',
    href: '/skin-treatment-batumi',
    cta: 'Explore skin care in Batumi',
  },
  {
    title: 'Botox and injectables',
    description:
      'Consultation-led anti-wrinkle treatments and facial balancing with clear expectations and aftercare.',
    href: '/botox-batumi',
    cta: 'Learn about Botox and injectables in Batumi',
  },
  {
    title: 'Dermal fillers',
    description:
      'Natural-looking lip, cheek, chin, jawline, and tear trough planning with conservative aesthetic judgment.',
    href: '/dermal-fillers-batumi',
    cta: 'Learn about dermal fillers in Batumi',
  },
  {
    title: 'Laser and advanced skin treatments',
    description:
      'Technology-led options for tone, texture, hair reduction, collagen stimulation, and skin rejuvenation.',
    href: '/skin-treatment-batumi',
    cta: 'Explore advanced skin treatments in Batumi',
  },
];

const serviceNavigationByLocale: Record<
  Locale,
  {
    title: string;
    intro: string;
    links: Array<{
      label: string;
      href: string;
      description: string;
    }>;
  }
> = {
  en: {
    title: 'Popular beauty services in Batumi',
    intro:
      'Use this guide to move from the broad beauty salon page to the service, price, or booking information that fits your visit.',
    links: [
      {
        label: 'Botox and anti-wrinkle consultations',
        href: '/botox-batumi',
        description: 'Read about consultation-led injectable appointments and aftercare planning.',
      },
      {
        label: 'Dermal fillers',
        href: '/dermal-fillers-batumi',
        description: 'Explore facial balancing options for lips, cheeks, chin, jawline, and under-eye areas.',
      },
      {
        label: 'Lip fillers',
        href: '/lip-fillers-batumi',
        description: 'Review lip filler consultation information before choosing an appointment.',
      },
      {
        label: 'Skin treatments',
        href: '/skin-treatment-batumi',
        description: 'Compare skin analysis, peels, microneedling, and skin-quality support.',
      },
      {
        label: 'Acne care',
        href: '/acne-treatment-batumi',
        description: 'Find consultation options for acne-prone skin and post-acne texture concerns.',
      },
      {
        label: 'Nails',
        href: '/nails-batumi',
        description: 'See manicure, pedicure, and nail-service information before booking.',
      },
      {
        label: 'Lashes and brows',
        href: '/lashes-brows-batumi',
        description: 'Plan lash extensions, lash lift, brow lamination, or shaping appointments.',
      },
      {
        label: 'Prices',
        href: '/pricelist',
        description: 'Check starting prices and use the list as a guide before consultation.',
      },
      {
        label: 'Book an appointment',
        href: '/book',
        description: 'Choose a consultation or treatment time online.',
      },
    ],
  },
  ka: {
    title: 'პოპულარული სილამაზის სერვისები ბათუმში',
    intro:
      'ეს გზამკვლევი დაგეხმარებათ სერვისის, ფასების ან დაჯავშნის გვერდზე გადასვლაში თქვენი ვიზიტის დაგეგმვისთვის.',
    links: [
      {
        label: 'ბოტოქსი და ნაოჭების საწინააღმდეგო კონსულტაცია',
        href: '/botox-batumi',
        description: 'გაეცანით კონსულტაციაზე დაფუძნებულ ინექციურ ვიზიტებს და შემდგომ მოვლას.',
      },
      {
        label: 'დერმალური ფილერები',
        href: '/dermal-fillers-batumi',
        description: 'იხილეთ ტუჩების, ლოყების, ნიკაპის, ყბის ხაზისა და თვალქვეშა ზონის ვარიანტები.',
      },
      {
        label: 'ტუჩის ფილერები',
        href: '/lip-fillers-batumi',
        description: 'წაიკითხეთ ტუჩის ფილერის კონსულტაციის ინფორმაცია ვიზიტის არჩევამდე.',
      },
      {
        label: 'კანის პროცედურები',
        href: '/skin-treatment-batumi',
        description: 'შეადარეთ კანის ანალიზი, პილინგი, მიკრონიდლინგი და კანის ხარისხის მხარდაჭერა.',
      },
      {
        label: 'აკნეს მოვლა',
        href: '/acne-treatment-batumi',
        description: 'ნახეთ კონსულტაციის ვარიანტები აკნესკენ მიდრეკილი კანისა და პოსტაკნეს ტექსტურისთვის.',
      },
      {
        label: 'ფრჩხილები',
        href: '/nails-batumi',
        description: 'გაეცანით მანიკიურის, პედიკიურისა და ფრჩხილის სერვისების ინფორმაციას.',
      },
      {
        label: 'წამწამები და წარბები',
        href: '/lashes-brows-batumi',
        description: 'დაგეგმეთ წამწამების, ლიფტინგის, წარბის ლამინაციის ან ფორმირების ვიზიტი.',
      },
      {
        label: 'ფასები',
        href: '/pricelist',
        description: 'შეამოწმეთ საწყისი ფასები და გამოიყენეთ სია კონსულტაციამდე ორიენტირად.',
      },
      {
        label: 'ვიზიტის დაჯავშნა',
        href: '/book',
        description: 'აირჩიეთ კონსულტაციის ან პროცედურის დრო ონლაინ.',
      },
    ],
  },
  ru: {
    title: 'Популярные beauty-услуги в Батуми',
    intro:
      'Этот раздел помогает перейти от общей страницы салона к услугам, ценам или записи на удобное время.',
    links: [
      {
        label: 'Ботокс и консультации по мимическим морщинам',
        href: '/botox-batumi',
        description: 'Узнайте о консультационном подходе к инъекционным процедурам и уходу после визита.',
      },
      {
        label: 'Дермальные филлеры',
        href: '/dermal-fillers-batumi',
        description: 'Посмотрите варианты для губ, щек, подбородка, линии челюсти и зоны под глазами.',
      },
      {
        label: 'Филлеры губ',
        href: '/lip-fillers-batumi',
        description: 'Изучите информацию о консультации перед записью на процедуру для губ.',
      },
      {
        label: 'Уход и процедуры для кожи',
        href: '/skin-treatment-batumi',
        description: 'Сравните анализ кожи, пилинги, микронидлинг и поддержку качества кожи.',
      },
      {
        label: 'Уход при акне',
        href: '/acne-treatment-batumi',
        description: 'Найдите консультации для кожи, склонной к акне, и постакне-текстуры.',
      },
      {
        label: 'Ногти',
        href: '/nails-batumi',
        description: 'Посмотрите информацию о маникюре, педикюре и nail-услугах перед записью.',
      },
      {
        label: 'Ресницы и брови',
        href: '/lashes-brows-batumi',
        description: 'Запланируйте наращивание, лифтинг ресниц, ламинирование или оформление бровей.',
      },
      {
        label: 'Цены',
        href: '/pricelist',
        description: 'Проверьте стартовые цены и используйте список как ориентир перед консультацией.',
      },
      {
        label: 'Записаться',
        href: '/book',
        description: 'Выберите время для консультации или процедуры онлайн.',
      },
    ],
  },
  tr: {
    title: 'Batum’da popüler güzellik hizmetleri',
    intro:
      'Bu bölüm, salon sayfasından ihtiyacınıza uygun hizmet, fiyat veya randevu bilgisine geçmenize yardımcı olur.',
    links: [
      {
        label: 'Botoks ve kırışıklık karşıtı danışmanlık',
        href: '/botox-batumi',
        description: 'Danışmanlık odaklı enjeksiyon randevuları ve bakım planlaması hakkında bilgi alın.',
      },
      {
        label: 'Dermal dolgular',
        href: '/dermal-fillers-batumi',
        description: 'Dudak, yanak, çene, çene hattı ve göz altı bölgeleri için seçenekleri inceleyin.',
      },
      {
        label: 'Dudak dolgusu',
        href: '/lip-fillers-batumi',
        description: 'Randevu seçmeden önce dudak dolgusu danışmanlık bilgilerini okuyun.',
      },
      {
        label: 'Cilt bakımları',
        href: '/skin-treatment-batumi',
        description: 'Cilt analizi, peeling, mikro iğneleme ve cilt kalitesi desteğini karşılaştırın.',
      },
      {
        label: 'Akne bakımı',
        href: '/acne-treatment-batumi',
        description: 'Akneye eğilimli cilt ve akne sonrası doku sorunları için danışmanlık seçeneklerini bulun.',
      },
      {
        label: 'Tırnak hizmetleri',
        href: '/nails-batumi',
        description: 'Manikür, pedikür ve tırnak hizmetleri hakkında bilgi alın.',
      },
      {
        label: 'Kirpik ve kaş',
        href: '/lashes-brows-batumi',
        description: 'Kirpik uzatma, lifting, kaş laminasyonu veya kaş şekillendirme randevunuzu planlayın.',
      },
      {
        label: 'Fiyatlar',
        href: '/pricelist',
        description: 'Başlangıç fiyatlarını kontrol edin ve listeyi danışmanlık öncesi rehber olarak kullanın.',
      },
      {
        label: 'Randevu al',
        href: '/book',
        description: 'Danışmanlık veya işlem saatinizi online seçin.',
      },
    ],
  },
  ar: {
    title: 'خدمات تجميل شائعة في باتومي',
    intro:
      'يساعدك هذا الدليل على الانتقال من صفحة الصالون العامة إلى معلومات الخدمة أو الأسعار أو الحجز المناسبة لزيارتك.',
    links: [
      {
        label: 'استشارة البوتوكس والتجاعيد',
        href: '/botox-batumi',
        description: 'تعرّفي على المواعيد القائمة على الاستشارة وخطة العناية بعد الإجراء.',
      },
      {
        label: 'الفيلر التجميلي',
        href: '/dermal-fillers-batumi',
        description: 'استكشفي خيارات الشفاه والخدود والذقن وخط الفك ومنطقة تحت العين.',
      },
      {
        label: 'فيلر الشفاه',
        href: '/lip-fillers-batumi',
        description: 'راجعي معلومات الاستشارة قبل اختيار موعد لفيلر الشفاه.',
      },
      {
        label: 'علاجات البشرة',
        href: '/skin-treatment-batumi',
        description: 'قارني بين تحليل البشرة والتقشير والميكرونيدلينغ ودعم جودة البشرة.',
      },
      {
        label: 'العناية بالبشرة المعرضة لحب الشباب',
        href: '/acne-treatment-batumi',
        description: 'اطلعي على خيارات الاستشارة للبشرة المعرضة لحب الشباب وآثار ما بعده.',
      },
      {
        label: 'الأظافر',
        href: '/nails-batumi',
        description: 'شاهدي معلومات المانيكير والباديكير وخدمات الأظافر قبل الحجز.',
      },
      {
        label: 'الرموش والحواجب',
        href: '/lashes-brows-batumi',
        description: 'خططي لموعد تركيب الرموش أو رفعها أو تصفيح الحواجب أو تشكيلها.',
      },
      {
        label: 'الأسعار',
        href: '/pricelist',
        description: 'تحققي من الأسعار الابتدائية واستخدمي القائمة كدليل قبل الاستشارة.',
      },
      {
        label: 'احجزي موعداً',
        href: '/book',
        description: 'اختاري وقت الاستشارة أو الخدمة عبر الإنترنت.',
      },
    ],
  },
  he: {
    title: 'שירותי יופי פופולריים בבטומי',
    intro:
      'המדריך הזה עוזר לעבור מעמוד הסלון הכללי אל מידע על שירותים, מחירים או הזמנה שמתאים לביקור שלך.',
    links: [
      {
        label: 'ייעוץ בוטוקס וקמטים',
        href: '/botox-batumi',
        description: 'קראי על פגישות הזרקה בגישה ייעוצית ותכנון טיפול לאחר הפגישה.',
      },
      {
        label: 'פילרים דרמליים',
        href: '/dermal-fillers-batumi',
        description: 'בדקי אפשרויות לשפתיים, לחיים, סנטר, קו לסת ואזור מתחת לעיניים.',
      },
      {
        label: 'מילוי שפתיים',
        href: '/lip-fillers-batumi',
        description: 'עברי על מידע הייעוץ לפני בחירת תור למילוי שפתיים.',
      },
      {
        label: 'טיפולי עור',
        href: '/skin-treatment-batumi',
        description: 'השווי בין אבחון עור, פילינג, מיקרונידלינג ותמיכה באיכות העור.',
      },
      {
        label: 'טיפול בעור עם נטייה לאקנה',
        href: '/acne-treatment-batumi',
        description: 'מצאי אפשרויות ייעוץ לעור עם נטייה לאקנה ולמרקם אחרי אקנה.',
      },
      {
        label: 'ציפורניים',
        href: '/nails-batumi',
        description: 'ראי מידע על מניקור, פדיקור ושירותי ציפורניים לפני ההזמנה.',
      },
      {
        label: 'ריסים וגבות',
        href: '/lashes-brows-batumi',
        description: 'תכנני תור להארכת ריסים, הרמה, למינציה לגבות או עיצוב.',
      },
      {
        label: 'מחירים',
        href: '/pricelist',
        description: 'בדקי מחירי התחלה והשתמשי ברשימה כמדריך לפני ייעוץ.',
      },
      {
        label: 'הזמנת תור',
        href: '/book',
        description: 'בחרי זמן לייעוץ או טיפול אונליין.',
      },
    ],
  },
};

const localFaqs = [
  {
    question: 'Where is Silk Beauty Salon in Batumi?',
    answer:
      'Silk Beauty Salon is located at Zurab Gorgiladze 63, Batumi, Adjara 6000, Georgia.',
  },
  {
    question: 'Can tourists book appointments at Silk Beauty Salon?',
    answer:
      'Yes. International clients can book online, call the salon, or email info@silkbeautysalon.online before arriving in Batumi.',
  },
  {
    question: 'Which beauty services are available in Batumi?',
    answer:
      'Silk Beauty Salon offers skin care, injectables, dermal fillers, laser treatments, lashes, nails, consultations, and aftercare planning.',
  },
  {
    question: 'How can I book a beauty appointment in Batumi?',
    answer:
      'Use the online booking page, call +995 577 34 57 67, or email info@silkbeautysalon.online to request an appointment.',
  },
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  return buildSeoMetadata({
    locale,
    path: '/beauty-salon-batumi',
    title: pageTitle,
    description: pageDescription,
    keywords: [
      'beauty salon Batumi',
      'Batumi beauty salon',
      'best beauty salon Batumi',
      'skin care Batumi',
      'Botox Batumi',
      'dermal fillers Batumi',
      'skin care Batumi Georgia',
      ...localSeoKeywords,
    ],
    image: '/images/hero-poster.jpg',
    imageAlt: 'Silk Beauty Salon in Batumi, Georgia',
  });
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function BeautySalonBatumiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const localeKey = locales.includes(locale as Locale) ? (locale as Locale) : 'en';
  const serviceNavigation = serviceNavigationByLocale[localeKey];
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: `${siteConfig.url}/${localeKey}` },
    { name: pageTitle, url: `${siteConfig.url}/${localeKey}/beauty-salon-batumi` },
  ]);

  return (
    <>
      <JsonLd id="json-ld-batumi-business" schema={generateLocalBusinessSchema(locale)} />
      <JsonLd id="json-ld-batumi-breadcrumbs" schema={breadcrumbSchema} />
      <JsonLd id="json-ld-batumi-faq" schema={generateFAQSchema(localFaqs)} />

      <section className="bg-[#f7f2eb] pt-[170px] md:pt-[188px]">
        <div className="container-custom py-16 md:py-20">
          <nav className="mb-8 flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
            <Link href="/" className="hover:text-[#241f1b]">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-[#241f1b]">Beauty salon Batumi</span>
          </nav>

          <div className="grid items-end gap-12 lg:grid-cols-[48%_52%]">
            <div className="max-w-3xl">
              <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#8d6f58]">
                Batumi beauty salon
              </p>
              <h1 className="localized-hero-heading mb-6 font-sans font-light text-[#241f1b]">
                Beauty Salon in Batumi, Georgia
              </h1>
              <p className="text-lg leading-8 text-stone-700 md:text-xl">
                Silk Beauty Salon welcomes local and international clients for aesthetic consultations,
                injectables, dermal fillers, skin care, lashes, nails, and beauty treatments
                at Zurab Gorgiladze 63 in Batumi.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild className="btn-gold">
                  <Link href="/book">Book online</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-md">
                  <Link href="/treatments">View treatments</Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[8px]">
              <Image
                src="/images/hero-poster.jpg"
                alt="Silk Beauty Salon treatment room in Batumi, Georgia"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[38%_62%]">
            <div>
              <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#8d6f58]">
                Why choose Silk
              </p>
              <h2 className="mb-5 font-sans text-3xl font-light text-[#241f1b] md:text-4xl">
                Local expertise with clear consultation and aftercare
              </h2>
              <p className="leading-7 text-stone-700">
                A good Batumi beauty salon should make location, pricing context, practitioner details,
                treatment expectations, and booking options easy to understand. Silk combines visible
                team expertise, multilingual communication, and online booking so clients can plan beauty
                care around work, travel, events, and the Black Sea climate.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: Shield,
                  title: 'Consultation first',
                  text: 'Treatments are planned around skin history, goals, timing, downtime, and contraindications.',
                },
                {
                  icon: Sparkles,
                  title: 'Natural results',
                  text: 'The team focuses on balance, skin quality, and results that fit your features.',
                },
                {
                  icon: Award,
                  title: 'Visible team expertise',
                  text: 'Practitioner bios list roles, qualifications, languages, and treatment focus.',
                },
                {
                  icon: CalendarCheck,
                  title: 'Easy booking',
                  text: 'Book online, call, or email before visiting the salon in central Batumi.',
                },
              ].map((item) => (
                <div key={item.title} className="border-t border-[#e8e4df] pt-6">
                  <item.icon className="mb-4 h-6 w-6 text-[#8d6f58]" />
                  <h3 className="mb-2 font-sans text-xl font-light text-[#241f1b]">{item.title}</h3>
                  <p className="text-sm leading-6 text-stone-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-[#f7f4f0]">
        <div className="container-custom">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#8d6f58]">
              Services in Batumi
            </p>
            <h2 className="mb-5 font-sans text-3xl font-light text-[#241f1b] md:text-4xl">
              Popular beauty and aesthetic treatments
            </h2>
            <p className="leading-7 text-stone-700">
              Start with the treatment category that matches your goal. If you are unsure, book a
              consultation and the team will help you choose a suitable path.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {serviceHighlights.map((service) => (
              <article key={service.title} className="border-t border-[#d8cbbb] pt-6">
                <h3 className="mb-3 font-sans text-xl font-light text-[#241f1b]">{service.title}</h3>
                <p className="mb-5 text-sm leading-6 text-stone-600">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#8d6f58] hover:text-[#241f1b]"
                >
                  {service.cta}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-14 border-t border-[#d8cbbb] pt-8">
            <h3 className="mb-6 font-sans text-2xl font-light text-[#241f1b]">
              {serviceNavigation.title}
            </h3>
            <p className="mb-8 max-w-3xl text-sm leading-6 text-stone-600">
              {serviceNavigation.intro}
            </p>
            <div className="grid gap-5 md:grid-cols-3">
              {serviceNavigation.links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group border-t border-[#d8cbbb] pt-5"
                >
                  <span className="mb-3 inline-flex items-center gap-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#8d6f58] group-hover:text-[#241f1b]">
                    {item.label}
                    <ChevronRight className="h-4 w-4" />
                  </span>
                  <p className="text-sm leading-6 text-stone-600">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[44%_56%]">
            <div>
              <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#8d6f58]">
                Visit us
              </p>
              <h2 className="mb-5 font-sans text-3xl font-light text-[#241f1b] md:text-4xl">
                Find Silk Beauty Salon in Batumi
              </h2>
              <p className="leading-7 text-stone-700">
                The salon is on Zurab Gorgiladze Street, close to central Batumi hotels, shops, and
                the Black Sea boulevard. Contact the team before arriving if you need help planning
                a treatment around travel, events, or recovery time.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="border-t border-[#e8e4df] pt-5">
                <h3 className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-stone-500">
                  <MapPin className="h-4 w-4 text-[#8d6f58]" />
                  Address
                </h3>
                <p className="text-sm leading-6 text-stone-700">
                  {siteConfig.contact.address}
                  <br />
                  {siteConfig.contact.city}, {siteConfig.contact.region} {siteConfig.contact.postcode}
                  <br />
                  {siteConfig.contact.country}
                </p>
              </div>
              <div className="border-t border-[#e8e4df] pt-5">
                <h3 className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-stone-500">
                  <Phone className="h-4 w-4 text-[#8d6f58]" />
                  Phone and email
                </h3>
                <p className="space-y-1 text-sm leading-6 text-stone-700">
                  <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="block hover:text-[#8d6f58]">
                    {siteConfig.contact.phone}
                  </a>
                  <a href={`mailto:${siteConfig.contact.email}`} className="block hover:text-[#8d6f58]">
                    <Mail className="mr-1 inline h-3.5 w-3.5" />
                    {siteConfig.contact.email}
                  </a>
                </p>
              </div>
              <div className="border-t border-[#e8e4df] pt-5 sm:col-span-2">
                <h3 className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-stone-500">
                  <Clock className="h-4 w-4 text-[#8d6f58]" />
                  Opening hours
                </h3>
                <dl className="grid gap-2 text-sm text-stone-700 sm:grid-cols-2">
                  {Object.entries(siteConfig.businessHours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between gap-4 border-b border-[#e8e4df] pb-2">
                      <dt className="capitalize">{day}</dt>
                      <dd className="text-[#241f1b]">{hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-[#f7f4f0]">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 font-sans text-3xl font-light text-[#241f1b] md:text-4xl">
              Questions about booking a beauty salon in Batumi
            </h2>
            <div className="space-y-8">
              {localFaqs.map((faq) => (
                <article key={faq.question} className="border-t border-[#d8cbbb] pt-6">
                  <h3 className="mb-3 font-sans text-xl font-light text-[#241f1b]">{faq.question}</h3>
                  <p className="leading-7 text-stone-700">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom text-center">
          <h2 className="mb-4 font-sans text-3xl font-light text-[#241f1b] md:text-4xl">
            Ready to book in Batumi?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-stone-600">
            Choose a consultation if you want help deciding which treatment fits your goals, timing,
            and skin condition.
          </p>
          <Button asChild className="btn-gold">
            <Link href="/book">Book a consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
