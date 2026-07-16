'use client';
import { baseTreatmentCategories } from '@/data/treatments';
import { baseConditions } from '@/data/conditions';
import { GaldermaHeaderClient } from './GaldermaHeaderClient';
import { useLocale, useMessages, useTranslations } from 'next-intl';
import type { Locale } from '@/i18n';

type MenuCopy = {
  title: string;
  description: string;
};

type MessageTree = Record<string, unknown>;

const treatmentTranslationAliases: Record<string, string> = {
  laser: 'laser-treatments',
  skin: 'skin-treatments',
  intimate: 'intimate-treatments',
  hair: 'hair-treatments',
};

const treatmentLandingHrefBySlug: Record<string, string> = {
  botox: '/botox-batumi',
  'dermal-fillers': '/dermal-fillers-batumi',
  skin: '/skin-treatment-batumi',
};

const publicTreatmentCategorySlugs = new Set(['botox', 'dermal-fillers', 'skin', 'hair']);

const menuCategoryDescriptions: Record<Locale, { treatment: string; condition: string }> = {
  en: {
    treatment: 'Review service information and confirm availability before booking.',
    condition: 'Start with information, then confirm the appropriate appointment with the salon.',
  },
  ka: {
    treatment: 'გაეცანით სერვისის ინფორმაციას და დაჯავშნამდე გადაამოწმეთ ხელმისაწვდომობა.',
    condition: 'დაიწყეთ ინფორმაციით და შემდეგ სალონთან შეათანხმეთ შესაბამისი ვიზიტი.',
  },
  ru: {
    treatment: 'Изучите информацию об услуге и уточните доступность перед записью.',
    condition: 'Начните с информации, затем уточните подходящий визит у салона.',
  },
  tr: {
    treatment: 'Hizmet bilgisini inceleyin ve rezervasyondan önce uygunluğu doğrulayın.',
    condition: 'Bilgiyle başlayın, ardından uygun randevuyu salonla doğrulayın.',
  },
  ar: {
    treatment: 'راجعي معلومات الخدمة وأكدي توفرها قبل الحجز.',
    condition: 'ابدئي بالمعلومات ثم أكدي الموعد المناسب مع الصالون.',
  },
  he: {
    treatment: 'עיינו במידע על השירות ואשרו זמינות לפני ההזמנה.',
    condition: 'התחילו במידע ולאחר מכן אשרו עם הסלון את התור המתאים.',
  },
};

const conditionTranslationAliases: Record<string, string> = {
  'acne-scarring': 'acne',
};

const overviewDescriptions: Record<Locale, { treatments: string; conditions: string }> = {
  en: {
    treatments: 'View the full treatment portfolio and browse every category.',
    conditions: 'Browse the complete skin concerns library and treatment pathways.',
  },
  ka: {
    treatments: 'იხილეთ პროცედურების სრული პორტფოლიო და ყველა კატეგორია.',
    conditions: 'იხილეთ კანის პრობლემების სრული სია და შესაბამისი პროცედურები.',
  },
  ru: {
    treatments: 'Посмотрите полный список процедур и все категории.',
    conditions: 'Посмотрите полный список кожных проблем и подходящие процедуры.',
  },
  tr: {
    treatments: 'Tüm tedavi portföyünü ve kategorileri inceleyin.',
    conditions: 'Cilt endişeleri kütüphanesini ve tedavi yollarını inceleyin.',
  },
  ar: {
    treatments: 'اطّلعي على قائمة العلاجات الكاملة وكل الفئات.',
    conditions: 'اطّلعي على مشاكل البشرة والمسارات العلاجية المناسبة.',
  },
  he: {
    treatments: 'עיינו בכל תפריט הטיפולים ובכל הקטגוריות.',
    conditions: 'עיינו בכל מצבי העור ובמסלולי הטיפול המתאימים.',
  },
};

const treatmentFallbacks: Record<Locale, Record<string, MenuCopy>> = {
  en: {
    diagnostic: {
      title: 'Diagnostic',
      description: 'Advanced skin analysis and diagnostic tools to personalize your treatment plan.',
    },
    hair: {
      title: 'Hair Treatments',
      description: 'Hair restoration, extensions, nails, and lash finishing services for complete salon care.',
    },
  },
  ka: {
    diagnostic: {
      title: 'დიაგნოსტიკა',
      description: 'კანის თანამედროვე ანალიზი და დიაგნოსტიკა პერსონალური გეგმისთვის.',
    },
    hair: {
      title: 'თმის პროცედურები',
      description: 'თმის აღდგენა, დაგრძელება, ფრჩხილები და წამწამები სრული სალონური მოვლისთვის.',
    },
  },
  ru: {
    diagnostic: {
      title: 'Диагностика',
      description: 'Современный анализ кожи и диагностика для персонального плана ухода.',
    },
    hair: {
      title: 'Процедуры для волос',
      description: 'Восстановление волос, наращивание, ногти и ресницы для полного салонного ухода.',
    },
  },
  tr: {
    diagnostic: {
      title: 'Diagnostik',
      description: 'Kişisel tedavi planı için gelişmiş cilt analizi ve tanı araçları.',
    },
    hair: {
      title: 'Saç Tedavileri',
      description: 'Eksiksiz salon bakımı için saç yenileme, kaynak, tırnak ve kirpik hizmetleri.',
    },
  },
  ar: {
    diagnostic: {
      title: 'التشخيص',
      description: 'تحليل متقدم للبشرة وأدوات تشخيص لتخصيص خطة العلاج.',
    },
    hair: {
      title: 'علاجات الشعر',
      description: 'استعادة الشعر، التمديدات، الأظافر والرموش لرعاية صالون متكاملة.',
    },
  },
  he: {
    diagnostic: {
      title: 'אבחון',
      description: 'אבחון עור מתקדם וכלים להתאמת תוכנית טיפול אישית.',
    },
    hair: {
      title: 'טיפולי שיער',
      description: 'שיקום שיער, תוספות, ציפורניים וריסים לטיפוח סלון מלא.',
    },
  },
};

const conditionFallbacks: Record<Locale, Record<string, MenuCopy>> = {
  en: {
    'uneven-skin-tone': {
      title: 'Uneven Skin Tone',
      description: 'Restore a bright, even complexion with targeted pigmentation treatments.',
    },
    blemishes: {
      title: 'Blemishes',
      description: 'Clear blemishes and achieve a smoother, healthier-looking complexion.',
    },
    'collagen-stimulating': {
      title: 'Collagen Stimulating',
      description: 'Boost collagen for firmer, more youthful skin.',
    },
    'fine-lines-wrinkles': {
      title: 'Fine Lines & Wrinkles',
      description: 'Smooth and prevent fine lines with anti-wrinkle treatments and skincare.',
    },
    'loss-of-firmness': {
      title: 'Loss of Firmness',
      description: 'Lift and tighten sagging skin with advanced skin firming treatments.',
    },
    'other-conditions': {
      title: 'Other Conditions',
      description: 'Personalized solutions for additional skin and aesthetic concerns.',
    },
  },
  ka: {
    'uneven-skin-tone': {
      title: 'არათანაბარი კანის ტონი',
      description: 'გაათანაბრეთ კანის ფერი და შეამცირეთ პიგმენტაცია მიზნობრივი პროცედურებით.',
    },
    blemishes: {
      title: 'კანის გამონაყარი',
      description: 'გაწმინდეთ კანი და მიიღეთ უფრო გლუვი, ჯანსაღი იერი.',
    },
    'collagen-stimulating': {
      title: 'კოლაგენის სტიმულაცია',
      description: 'გააქტიურეთ კოლაგენი უფრო მკვრივი და ახალგაზრდული კანისთვის.',
    },
    'fine-lines-wrinkles': {
      title: 'წვრილი ხაზები და ნაოჭები',
      description: 'შეამცირეთ და თავიდან აიცილეთ ნაოჭები შესაბამისი პროცედურებით.',
    },
    'loss-of-firmness': {
      title: 'სიმკვრივის დაკარგვა',
      description: 'გაამკვრივეთ და აწიეთ მოშვებული კანი თანამედროვე პროცედურებით.',
    },
    'other-conditions': {
      title: 'სხვა პრობლემები',
      description: 'პერსონალური გადაწყვეტილებები სხვა კანისა და ესთეტიკური პრობლემებისთვის.',
    },
  },
  ru: {
    'uneven-skin-tone': {
      title: 'Неровный тон кожи',
      description: 'Верните коже ровный и сияющий тон с помощью целевых процедур.',
    },
    blemishes: {
      title: 'Высыпания',
      description: 'Очистите кожу и добейтесь более гладкого, здорового вида.',
    },
    'collagen-stimulating': {
      title: 'Стимуляция коллагена',
      description: 'Активируйте выработку коллагена для более упругой и молодой кожи.',
    },
    'fine-lines-wrinkles': {
      title: 'Мелкие линии и морщины',
      description: 'Сгладьте и предупредите морщины с помощью процедур и ухода.',
    },
    'loss-of-firmness': {
      title: 'Потеря упругости',
      description: 'Подтяните и укрепите кожу современными процедурами.',
    },
    'other-conditions': {
      title: 'Другие состояния',
      description: 'Индивидуальные решения для других кожных и эстетических задач.',
    },
  },
  tr: {
    'uneven-skin-tone': {
      title: 'Eşitsiz Cilt Tonu',
      description: 'Hedefe yönelik pigmentasyon tedavileriyle daha parlak ve eşit bir cilt tonu.',
    },
    blemishes: {
      title: 'Lekeler ve Sivilceler',
      description: 'Daha pürüzsüz ve sağlıklı görünen bir cilt için etkili çözümler.',
    },
    'collagen-stimulating': {
      title: 'Kolajen Uyarımı',
      description: 'Daha sıkı ve genç görünen cilt için kolajen üretimini destekleyin.',
    },
    'fine-lines-wrinkles': {
      title: 'İnce Çizgiler ve Kırışıklıklar',
      description: 'Kırışıklık karşıtı tedaviler ve bakım ile çizgileri yumuşatın.',
    },
    'loss-of-firmness': {
      title: 'Sıkılık Kaybı',
      description: 'Gelişmiş sıkılaştırma tedavileriyle sarkan cildi toparlayın.',
    },
    'other-conditions': {
      title: 'Diğer Cilt Sorunları',
      description: 'Diğer cilt ve estetik endişeler için kişisel çözümler.',
    },
  },
  ar: {
    'uneven-skin-tone': {
      title: 'تفاوت لون البشرة',
      description: 'استعيدي بشرة أكثر إشراقا وتجانسا بعلاجات تصبغ موجهة.',
    },
    blemishes: {
      title: 'الحبوب والشوائب',
      description: 'حلول لبشرة أنقى وأكثر نعومة وصحة.',
    },
    'collagen-stimulating': {
      title: 'تحفيز الكولاجين',
      description: 'تعزيز الكولاجين لبشرة أكثر تماسكا وشبابا.',
    },
    'fine-lines-wrinkles': {
      title: 'الخطوط الدقيقة والتجاعيد',
      description: 'تنعيم الخطوط والوقاية منها بعلاجات مناسبة وعناية طبية.',
    },
    'loss-of-firmness': {
      title: 'فقدان التماسك',
      description: 'شد البشرة المترهلة وتحسين تماسكها بعلاجات متقدمة.',
    },
    'other-conditions': {
      title: 'مشاكل أخرى',
      description: 'حلول شخصية لمشاكل البشرة والاحتياجات الجمالية الأخرى.',
    },
  },
  he: {
    'uneven-skin-tone': {
      title: 'גוון עור לא אחיד',
      description: 'החזירו לעור מראה אחיד ובהיר יותר עם טיפולים ממוקדים בפיגמנטציה.',
    },
    blemishes: {
      title: 'פצעונים ופגמים',
      description: 'טיפולים לעור נקי, חלק ובריא יותר.',
    },
    'collagen-stimulating': {
      title: 'עידוד קולגן',
      description: 'עידוד ייצור קולגן לעור מוצק וצעיר יותר.',
    },
    'fine-lines-wrinkles': {
      title: 'קמטוטים וקמטים',
      description: 'החלקה ומניעה של קמטוטים בעזרת טיפולים וטיפוח מתאים.',
    },
    'loss-of-firmness': {
      title: 'אובדן מוצקות',
      description: 'מיצוק והרמה של עור רפוי בעזרת טיפולים מתקדמים.',
    },
    'other-conditions': {
      title: 'מצבים נוספים',
      description: 'פתרונות אישיים לצרכים נוספים של העור והאסתטיקה.',
    },
  },
};

function getNestedString(messages: MessageTree, path: string[], fallback: string): string {
  let current: unknown = messages;

  for (const key of path) {
    if (!current || typeof current !== 'object' || !(key in current)) {
      return fallback;
    }
    current = (current as MessageTree)[key];
  }

  return typeof current === 'string' && current.trim().length > 0 ? current : fallback;
}

export function GaldermaHeader() {
  const locale = useLocale() as Locale;
  const messages = useMessages() as MessageTree;
  const tNav = useTranslations('nav');

  const treatmentMegaMenuItems = [
    {
      title: tNav('allTreatments'),
      href: '/treatments',
      description: overviewDescriptions[locale].treatments,
    },
    ...baseTreatmentCategories
      .filter((category) => publicTreatmentCategorySlugs.has(category.slug))
      .map((category) => {
      const translationKey = treatmentTranslationAliases[category.slug] || category.slug;
      const fallback = treatmentFallbacks[locale][category.slug];

      return {
        title: getNestedString(
          messages,
          ['treatmentContent', translationKey, 'name'],
          fallback?.title || category.name,
        ),
        href: treatmentLandingHrefBySlug[category.slug] || `/treatments#${category.slug}`,
        description: getNestedString(
          messages,
          ['treatmentContent', translationKey, 'description'],
          menuCategoryDescriptions[locale].treatment,
        ),
      };
      }),
  ];

  const skinConditionMegaMenuItems = [
    {
      title: tNav('allConditions'),
      href: '/conditions',
      description: overviewDescriptions[locale].conditions,
    },
    ...baseConditions.map((condition) => {
      const translationKey = conditionTranslationAliases[condition.slug] || condition.slug;
      const fallback = conditionFallbacks[locale][condition.slug];

      return {
        title: getNestedString(
          messages,
          ['conditionContent', translationKey, 'name'],
          fallback?.title || condition.name,
        ),
        href: `/conditions/${condition.slug}`,
        description: getNestedString(
          messages,
          ['conditionContent', translationKey, 'shortDescription'],
          menuCategoryDescriptions[locale].condition,
        ),
      };
    }),
  ];

  return (
    <GaldermaHeaderClient
      treatmentMegaMenuItems={treatmentMegaMenuItems}
      skinConditionMegaMenuItems={skinConditionMegaMenuItems}
    />
  );
}
