'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Clock, AlertTriangle, CheckCircle, Info, ChevronDown, ChevronUp } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import { treatments, treatmentCategories } from '@/lib/treatments';

const TREATMENT_IMAGES = [
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=90',
  'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1920&q=90',
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1920&q=90',
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1920&q=90',
];

interface TreatmentsClientProps {
  locale: string;
}

export function TreatmentsClient({ locale }: TreatmentsClientProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedTreatment, setExpandedTreatment] = useState<string | null>(null);

  const filtered = activeCategory === 'all'
    ? treatments
    : treatments.filter((t) => t.category === activeCategory);

  const headerTitle = locale === 'en' ? 'All Treatments' : locale === 'ru' ? 'Все процедуры' : locale === 'ka' ? 'ყველა პროცედურა' : locale === 'he' ? 'כל הטיפולים' : locale === 'ar' ? 'جميع العلاجات' : 'Tüm Tedaviler';
  
  const headerSub = locale === 'en' ? 'Every service performed by internationally certified specialists with medical-grade products.' : locale === 'ru' ? 'Каждая услуга выполняется сертифицированными специалистами с медицинскими продуктами.' : locale === 'ka' ? 'ყოველი მომსახურება სრულდება საერთაშორისოდ სერტიფიცირებული სპეციალისტების მიერ.' : locale === 'he' ? 'כל שירות מבוצע על ידי מומחים מוסמכים בינלאומיים עם מוצרים ברמה רפואית.' : locale === 'ar' ? 'كل خدمة يؤديها متخصصون معتمدون دولياً بمنتجات طبية.' : 'Her hizmet uluslararası sertifikalı uzmanlar tarafından tıbbi sınıf ürünlerle sunulur.';
  
  const bookNowLabel = locale === 'en' ? 'Book Now' : locale === 'ru' ? 'Записаться' : locale === 'ka' ? 'დაჯავშნა' : locale === 'he' ? 'הזמן עכשיו' : locale === 'ar' ? 'احجز الآن' : 'Randevu Al';

  const catLabels = treatmentCategories.map(c => ({
    id: c.id,
    label: c.label[locale as keyof typeof c.label] || c.label.en,
  }));

  const allCategories = [
    { id: 'all', label: locale === 'en' ? 'All' : locale === 'ru' ? 'Все' : locale === 'ka' ? 'ყველა' : locale === 'he' ? 'הכל' : locale === 'ar' ? 'الكل' : 'Tümü' },
    ...catLabels,
  ];

  const toggleTreatment = (id: string) => {
    setExpandedTreatment(expandedTreatment === id ? null : id);
  };

  return (
    <div style={{ background: 'linear-gradient(180deg, #0d0a08 0%, #111009 100%)' }}>
      <PageHero pageKey="treatments" images={TREATMENT_IMAGES} />

      <div className="container mx-auto max-w-7xl px-6 pt-8 pb-20">
        {/* Header */}
        <div className="text-center mb-16 -mt-10 relative z-10">
          <h1
            className="font-display font-bold mb-4"
            style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              background: 'linear-gradient(135deg, #f5e6d0, #C9A96E)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {headerTitle}
          </h1>
          <p className="text-stone-500 max-w-xl mx-auto">
            {headerSub}
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'text-stone-900'
                  : 'border border-stone-800 text-stone-400 hover:border-amber-400/40 hover:text-amber-300'
              }`}
              style={activeCategory === cat.id ? { background: 'linear-gradient(135deg, #C9A96E, #a07840)' } : {}}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filtered.map((t) => (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative rounded-2xl border border-stone-800 hover:border-amber-400/30 transition-all duration-300 group overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                {/* Header */}
                <div className="p-5 pb-0">
                  {t.badge && (
                    <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-400/10 text-amber-400 border border-amber-400/20">
                      {t.badge}
                    </span>
                  )}

                  <p className="text-amber-400/50 text-xs tracking-widest uppercase mb-2 capitalize">{t.category}</p>
                  <h3 className="text-stone-100 font-display text-lg font-bold mb-2 group-hover:text-white transition-colors pr-16">
                    {t.name[locale as keyof typeof t.name] || t.name.en}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-4">{t.description[locale as keyof typeof t.description] || t.description.en}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1.5 text-stone-600 text-sm">
                      <Clock size={12} />
                      <span>{t.duration} min</span>
                    </div>
                    <div className="text-right">
                      <span className="text-amber-400 font-bold text-lg">{t.price} GEL</span>
                      {t.priceNote && <span className="text-stone-600 text-xs block">{t.priceNote}</span>}
                    </div>
                  </div>

                  {/* Products Used */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {t.products.map((p) => (
                      <span key={p} className="px-2 py-0.5 rounded bg-stone-800/50 text-stone-400 text-xs">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expandable Details */}
                <button
                  onClick={() => toggleTreatment(t.id)}
                  className="w-full px-5 py-3 flex items-center justify-between text-stone-500 hover:text-amber-400 transition-colors border-t border-stone-800/50"
                >
                  <span className="text-xs flex items-center gap-1">
                    <Info size={12} />
                    {locale === 'en' ? 'Details & Safety' : locale === 'ru' ? 'Детали и безопасность' : locale === 'ka' ? 'დეტალები და უსაფრთხოება' : locale === 'he' ? 'פרטים ובטיחות' : locale === 'ar' ? 'التفاصيل والسلامة' : 'Detaylar ve Güvenlik'}
                  </span>
                  {expandedTreatment === t.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>

                <AnimatePresence>
                  {expandedTreatment === t.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-2 space-y-3 bg-stone-900/20">
                        {/* Contra-indications */}
                        <div className="flex gap-2">
                          <AlertTriangle size={14} className="text-amber-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-stone-400 text-xs font-medium mb-1">
                              {locale === 'en' ? 'Contra-indications' : locale === 'ru' ? 'Противопоказания' : locale === 'ka' ? 'უკუჩვენებები' : locale === 'he' ? 'התוויות נגד' : locale === 'ar' ? 'موانع الاستعمال' : 'Kontrendikasyonlar'}
                            </p>
                            <p className="text-stone-500 text-xs">{t.contraIndications}</p>
                          </div>
                        </div>

                        {/* Recovery */}
                        <div className="flex gap-2">
                          <CheckCircle size={14} className="text-green-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-stone-400 text-xs font-medium mb-1">
                              {locale === 'en' ? 'Recovery Time' : locale === 'ru' ? 'Время восстановления' : locale === 'ka' ? 'აღდგენის დრო' : locale === 'he' ? 'זמן התאוששות' : locale === 'ar' ? 'وقت التعافي' : 'İyileşme Süresi'}
                            </p>
                            <p className="text-stone-500 text-xs">{t.recovery}</p>
                          </div>
                        </div>

                        {/* Longevity */}
                        <div className="flex gap-2">
                          <Clock size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-stone-400 text-xs font-medium mb-1">
                              {locale === 'en' ? 'Results Last' : locale === 'ru' ? 'Результат держится' : locale === 'ka' ? 'შედეგი გრძელდება' : locale === 'he' ? 'תוצאות נמשכות' : locale === 'ar' ? 'مدة النتائج' : 'Sonuçların Süresi'}
                            </p>
                            <p className="text-stone-500 text-xs">{t.longevity}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Book Button */}
                <div className="p-5 pt-0">
                  <Link
                    href={`/${locale}/contact?service=${t.id}`}
                    className="mt-2 w-full block text-center py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-stone-700 text-stone-400 hover:border-amber-400/50 hover:text-amber-300 transition-all"
                  >
                    {bookNowLabel}
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
