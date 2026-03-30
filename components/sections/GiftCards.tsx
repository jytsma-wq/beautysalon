'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Sparkles, ChevronRight, Heart, Star, Crown } from 'lucide-react';

interface GiftCardsProps {
  locale: string;
}

const translations = {
  en: {
    title: 'Gift Cards',
    subtitle: 'Give the gift of beauty',
    perfectGift: 'The Perfect Gift',
    chooseAmount: 'Choose Amount',
    customAmount: 'Custom Amount',
    or: 'or',
    buyNow: 'Buy Gift Card',
    includes: 'Each gift card includes:',
    digital: 'Beautiful digital delivery',
    expires: 'Valid for 12 months',
    treatments: 'Redeemable for all treatments',
    bonus: '+ Bonus points for recipient',
    popular: 'Most Popular',
    gels: 'GEL',
  },
  ru: {
    title: 'Подарочные сертификаты',
    subtitle: 'Подарите красоту',
    perfectGift: 'Идеальный подарок',
    chooseAmount: 'Выберите сумму',
    customAmount: 'Своя сумма',
    or: 'или',
    buyNow: 'Купить сертификат',
    includes: 'Каждый сертификат включает:',
    digital: 'Красивая цифровая доставка',
    expires: 'Действует 12 месяцев',
    treatments: 'Для любых процедур',
    bonus: '+ Бонусные баллы получателю',
    popular: 'Популярный',
    gels: 'GEL',
  },
  ka: {
    title: 'საჩუქრების ბარათები',
    subtitle: 'გადაეცით სილამაზის საჩუქარი',
    perfectGift: 'სრულყოფილი საჩუქარი',
    chooseAmount: 'აირჩიეთ თანხა',
    customAmount: 'საკუთარი თანხა',
    or: 'ან',
    buyNow: 'ყიდვა',
    includes: 'თითოეული ბარათი მოიცავს:',
    digital: 'ციფრული მიწოდება',
    expires: 'მოქმედებს 12 თვე',
    treatments: 'ყველა პროცედურისთვის',
    bonus: '+ ბონუს ქულები',
    popular: 'პოპულარული',
    gels: 'GEL',
  },
  he: {
    title: 'כרטיסי מתנה',
    subtitle: 'תני את מתנת היופי',
    perfectGift: 'המתנה המושלמת',
    chooseAmount: 'בחרי סכום',
    customAmount: 'סכום מותאם',
    or: 'או',
    buyNow: 'קני כרטיס',
    includes: 'כל כרטיס כולל:',
    digital: 'משלוח דיגיטלי יפה',
    expires: 'תקף ל-12 חודשים',
    treatments: 'לכל הטיפולים',
    bonus: '+ נקודות בונוס',
    popular: 'הכי פופולרי',
    gels: 'GEL',
  },
  ar: {
    title: 'بطاقات الهدايا',
    subtitle: 'اهدي هدية الجمال',
    perfectGift: 'الهدية المثالية',
    chooseAmount: 'اختاري المبلغ',
    customAmount: 'مبلغ مخصص',
    or: 'أو',
    buyNow: 'اشتري البطاقة',
    includes: 'كل بطاقة تتضمن:',
    digital: 'تسليم رقمي جميل',
    expires: 'صالحة لـ 12 شهر',
    treatments: 'لجميع العلاجات',
    bonus: '+ نقاط مكافأة',
    popular: 'الأكثر شعبية',
    gels: 'GEL',
  },
  tr: {
    title: 'Hediye Kartları',
    subtitle: 'Güzellik hediye edin',
    perfectGift: 'Mükemmel Hediye',
    chooseAmount: 'Tutar Seçin',
    customAmount: 'Özel Tutar',
    or: 'veya',
    buyNow: 'Hediye Kartı Al',
    includes: 'Her hediye kartı içerir:',
    digital: 'Güzel dijital teslimat',
    expires: '12 ay geçerli',
    treatments: 'Tüm tedaviler için geçerli',
    bonus: '+ Alıcı için bonus puanlar',
    popular: 'En Popüler',
    gels: 'GEL',
  },
};

const giftAmounts = [
  { amount: 100, popular: false },
  { amount: 200, popular: false },
  { amount: 300, popular: true },
  { amount: 500, popular: false },
  { amount: 800, popular: false },
];

export default function GiftCards({ locale }: GiftCardsProps) {
  const [selectedAmount, setSelectedAmount] = useState(300);
  const [customAmount, setCustomAmount] = useState('');
  const t = translations[locale as keyof typeof translations] || translations.en;

  const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount;

  return (
    <section className="py-24 px-6" style={{ background: 'linear-gradient(180deg, #0a0806 0%, #0f0a08 50%, #0a0806 100%)' }}>
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Gift size={14} className="text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">{t.perfectGift}</span>
          </div>
          
          <h2 className="font-display font-bold mb-4" style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            background: 'linear-gradient(135deg, #c084fc, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            {t.title}
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Gift Card Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden p-8 border border-purple-500/20" 
              style={{ 
                background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(139, 92, 246, 0.05))',
                aspectRatio: '16/10'
              }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl" />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                {/* Logo */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-display text-2xl font-bold">Silk Beauty</h3>
                    <p className="text-purple-300/60 text-xs">Salon & Spa</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Sparkles size={18} className="text-white" />
                  </div>
                </div>

                {/* Amount */}
                <div className="text-center py-6">
                  <p className="text-purple-300/60 text-sm mb-1">{t.chooseAmount}</p>
                  <p className="text-white text-5xl font-bold">
                    {finalAmount} <span className="text-2xl text-purple-400">{t.gels}</span>
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-purple-300/40 text-xs">
                  <span>28 Rustaveli Ave, Batumi</span>
                  <span>+995 599 123 456</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Selection Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-6 rounded-2xl border border-stone-800" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <h4 className="text-white font-semibold mb-4">{t.chooseAmount}</h4>
              
              {/* Amount Grid */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {giftAmounts.map((gift) => (
                  <motion.button
                    key={gift.amount}
                    onClick={() => { setSelectedAmount(gift.amount); setCustomAmount(''); }}
                    className={`relative p-4 rounded-xl border transition-all text-center ${
                      selectedAmount === gift.amount && !customAmount
                        ? 'border-purple-500 bg-purple-500/10'
                        : 'border-stone-700 hover:border-purple-500/50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {gift.popular && (
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-purple-500 text-white text-xs">
                        {t.popular}
                      </span>
                    )}
                    <span className="text-white font-bold">{gift.amount}</span>
                    <span className="text-stone-500 text-xs ml-1">{t.gels}</span>
                  </motion.button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-6">
                <p className="text-stone-500 text-xs mb-2">{t.or} {t.customAmount}:</p>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="100-5000"
                    className="flex-1 bg-stone-800/50 border border-stone-700 rounded-xl px-4 py-3 text-white focus:border-purple-500/50 outline-none transition-all"
                  />
                  <span className="text-stone-400">{t.gels}</span>
                </div>
              </div>

              {/* Includes */}
              <div className="mb-6 p-4 rounded-xl bg-stone-800/30 border border-stone-700/30">
                <p className="text-stone-400 text-xs uppercase tracking-wider mb-3">{t.includes}</p>
                <div className="space-y-2">
                  {[
                    { icon: Sparkles, text: t.digital },
                    { icon: Star, text: t.expires },
                    { icon: Heart, text: t.treatments },
                    { icon: Crown, text: t.bonus },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-stone-500 text-sm">
                      <item.icon size={12} className="text-purple-400" />
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.button
                onClick={() => window.open(`https://wa.me/995599123456?text=${encodeURIComponent(`${t.buyNow}: ${finalAmount} GEL`)}`, '_blank')}
                className="w-full py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #a855f7, #7c3aed)' }}
                whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(168, 85, 247, 0.3)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Gift size={18} />
                {t.buyNow}
                <ChevronRight size={16} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
