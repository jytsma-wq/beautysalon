import { Metadata } from 'next';
import InternationalClient from './InternationalClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: 'International Clients | Silk Beauty Salon Batumi',
    ru: 'Международным клиентам | Silk Beauty Salon Батуми',
    ka: 'საერთაშორისო კლიენტები | Silk Beauty Salon ბათუმი',
    he: 'לקוחות בינלאומיים | Silk Beauty Salon באטומי',
    ar: 'العملاء الدوليين | صالون سيلك بيوتي باتومي',
    tr: 'Uluslararası Müşteriler | Silk Beauty Salon Batum',
  };

  const descriptions: Record<string, string> = {
    en: 'Discover why international clients choose Batumi for premium beauty treatments. Affordable luxury, world-class specialists, and a beautiful Black Sea destination.',
    ru: 'Узнайте, почему международные клиенты выбирают Батуми для премиальных косметологических процедур.',
    ka: 'გაიგეთ, რატომ ირჩევენ საერთაშორისო კლიენტები ბათუმს პრემიუმ სილამაზის პროცედურებისთვის.',
    he: 'גלי למה לקוחות בינלאומיים בוחרים בבאטומי לטיפולי יופי פרימיום.',
    ar: 'اكتشفي لماذا يختار العملاء الدوليون باتومي لعلاجات التجميل الفاخرة.',
    tr: 'Uluslararası müşterilerin Batum\'u neden premium güzellik tedavileri için seçtiğini keşfedin.',
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}

export default async function InternationalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <InternationalClient locale={locale} />;
}
