'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Star, Crown, Sparkles, ChevronRight, Heart, Award, Users } from 'lucide-react';

interface LoyaltyProgramProps {
  locale: string;
}

const translations = {
  en: {
    title: 'Beauty Rewards',
    subtitle: 'Earn points with every visit, redeem for exclusive treatments',
    howItWorks: 'How It Works',
    earnPoints: 'Earn Points',
    earnDesc: '1 point for every 10 GEL spent',
    redeemRewards: 'Redeem Rewards',
    redeemDesc: 'Points = Free treatments & discounts',
    exclusivePerks: 'Exclusive Perks',
    perksDesc: 'Birthday gifts, early access & more',
    tiers: 'Membership Tiers',
    join: 'Join Program',
    points: 'points',
    perVisit: 'per visit',
    bronze: 'Bronze',
    silver: 'Silver',
    gold: 'Gold',
    diamond: 'Diamond',
    rewards: 'Rewards',
    freeManicure: 'Free Manicure',
    freeFacial: 'Free Mini Facial',
    freeHydra: 'Free HydraFacial',
    discount20: '20% Off Any Treatment',
    priorityBooking: 'Priority Booking',
    birthdayGift: 'Birthday Gift',
    exclusiveEvents: 'Exclusive Events',
    freeConsultation: 'Free Consultations',
    vipSupport: 'VIP Support',
  },
  ru: {
    title: 'Программа лояльности',
    subtitle: 'Зарабатывайте баллы при каждом визите',
    howItWorks: 'Как это работает',
    earnPoints: 'Зарабатывайте баллы',
    earnDesc: '1 балл за каждые 10 GEL',
    redeemRewards: 'Получайте награды',
    redeemDesc: 'Баллы = Бесплатные процедуры',
    exclusivePerks: 'Эксклюзивные бонусы',
    perksDesc: 'Подарки на день рождения и др.',
    tiers: 'Уровни членства',
    join: 'Присоединиться',
    points: 'баллов',
    perVisit: 'за визит',
    bronze: 'Бронза',
    silver: 'Серебро',
    gold: 'Золото',
    diamond: 'Бриллиант',
    rewards: 'Награды',
    freeManicure: 'Бесплатный маникюр',
    freeFacial: 'Бесплатный мини-уход',
    freeHydra: 'Бесплатный HydraFacial',
    discount20: 'Скидка 20%',
    priorityBooking: 'Приоритетная запись',
    birthdayGift: 'Подарок на ДР',
    exclusiveEvents: 'Эксклюзивные мероприятия',
    freeConsultation: 'Бесплатные консультации',
    vipSupport: 'VIP поддержка',
  },
  ka: {
    title: 'ლოიალობის პროგრამა',
    subtitle: 'დააგროვეთ ქულები ყოველი ვიზიტით',
    howItWorks: 'როგორ მუშაობს',
    earnPoints: 'დააგროვეთ ქულები',
    earnDesc: '1 ქულა ყოველი 10 GEL-ზე',
    redeemRewards: 'მიიღეთ ჯილდოები',
    redeemDesc: 'ქულები = უფასო პროცედურები',
    exclusivePerks: 'ექსკლუზიური ბონუსები',
    perksDesc: 'დაბადების დღის საჩუქრები',
    tiers: 'წევრობის დონეები',
    join: 'გაწევრიანება',
    points: 'ქულა',
    perVisit: 'ვიზიტზე',
    bronze: 'ბრინჯაო',
    silver: 'ვერცხლი',
    gold: 'ოქრო',
    diamond: 'ალმასი',
    rewards: 'ჯილდოები',
    freeManicure: 'უფასო მანიკური',
    freeFacial: 'უფასო მინი მოვლა',
    freeHydra: 'უფასო HydraFacial',
    discount20: '20% ფასდაკლება',
    priorityBooking: 'პრიორიტეტული ჯავშნა',
    birthdayGift: 'დაბადების დღის საჩუქარი',
    exclusiveEvents: 'ექსკლუზიური ღონისძიებები',
    freeConsultation: 'უფასო კონსულტაციები',
    vipSupport: 'VIP მხარდაჭერა',
  },
  he: {
    title: 'תוכנית נאמנות',
    subtitle: 'צברי נקודות בכל ביקור',
    howItWorks: 'איך זה עובד',
    earnPoints: 'צברי נקודות',
    earnDesc: 'נקודה אחת על כל 10 GEL',
    redeemRewards: 'קבלי פרסים',
    redeemDesc: 'נקודות = טיפולים חינמיים',
    exclusivePerks: 'הטבות בלעדיות',
    perksDesc: 'מתנות יום הולדת ועוד',
    tiers: 'רמות חברות',
    join: 'הצטרפות',
    points: 'נקודות',
    perVisit: 'לביקור',
    bronze: 'ארד',
    silver: 'כסף',
    gold: 'זהב',
    diamond: 'יהלום',
    rewards: 'פרסים',
    freeManicure: 'מניקור חינם',
    freeFacial: 'טיפול פנים מיני חינם',
    freeHydra: 'HydraFacial חינם',
    discount20: 'הנחה של 20%',
    priorityBooking: 'הזמנה בעדיפות',
    birthdayGift: 'מתנת יום הולדת',
    exclusiveEvents: 'אירועים בלעדיים',
    freeConsultation: 'ייעוצים חינמיים',
    vipSupport: 'תמיכת VIP',
  },
  ar: {
    title: 'برنامج الولاء',
    subtitle: 'اجمعي النقاط مع كل زيارة',
    howItWorks: 'كيف يعمل',
    earnPoints: 'اجمعي النقاط',
    earnDesc: 'نقطة واحدة لكل 10 GEL',
    redeemRewards: 'احصلي على مكافآت',
    redeemDesc: 'النقاط = علاجات مجانية',
    exclusivePerks: 'مزايا حصرية',
    perksDesc: 'هدايا عيد الميلاد والمزيد',
    tiers: 'مستويات العضوية',
    join: 'انضمي الآن',
    points: 'نقطة',
    perVisit: 'للزيارة',
    bronze: 'برونزي',
    silver: 'فضي',
    gold: 'ذهبي',
    diamond: 'ماسي',
    rewards: 'مكافآت',
    freeManicure: 'مانيكير مجاني',
    freeFacial: 'عناية مجانية',
    freeHydra: 'HydraFacial مجاني',
    discount20: 'خصم 20%',
    priorityBooking: 'حجز أولوية',
    birthdayGift: 'هدية عيد ميلاد',
    exclusiveEvents: 'فعاليات حصرية',
    freeConsultation: 'استشارات مجانية',
    vipSupport: 'دعم VIP',
  },
  tr: {
    title: 'Güzellik Puanları',
    subtitle: 'Her ziyarette puan kazanın',
    howItWorks: 'Nasıl Çalışır',
    earnPoints: 'Puan Kazan',
    earnDesc: 'Her 10 GEL için 1 puan',
    redeemRewards: 'Ödülleri Kullan',
    redeemDesc: 'Puanlar = Ücretsiz tedaviler',
    exclusivePerks: 'Özel Ayrıcalıklar',
    perksDesc: 'Doğum günü hediyeleri ve daha fazlası',
    tiers: 'Üyelik Seviyeleri',
    join: 'Katıl',
    points: 'puan',
    perVisit: 'ziyaret başına',
    bronze: 'Bronz',
    silver: 'Gümüş',
    gold: 'Altın',
    diamond: 'Elmas',
    rewards: 'Ödüller',
    freeManicure: 'Ücretsiz Manikür',
    freeFacial: 'Ücretsiz Mini Bakım',
    freeHydra: 'Ücretsiz HydraFacial',
    discount20: '%20 İndirim',
    priorityBooking: 'Öncelikli Rezervasyon',
    birthdayGift: 'Doğum Günü Hediyesi',
    exclusiveEvents: 'Özel Etkinlikler',
    freeConsultation: 'Ücretsiz Danışmanlık',
    vipSupport: 'VIP Destek',
  },
};

const tiers = [
  {
    id: 'bronze',
    color: '#cd7f32',
    bgColor: 'rgba(205, 127, 50, 0.1)',
    borderColor: 'rgba(205, 127, 50, 0.3)',
    points: 0,
    perks: ['freeManicure', 'birthdayGift'],
  },
  {
    id: 'silver',
    color: '#c0c0c0',
    bgColor: 'rgba(192, 192, 192, 0.1)',
    borderColor: 'rgba(192, 192, 192, 0.3)',
    points: 100,
    perks: ['freeFacial', 'priorityBooking', 'freeManicure', 'birthdayGift'],
  },
  {
    id: 'gold',
    color: '#ffd700',
    bgColor: 'rgba(255, 215, 0, 0.1)',
    borderColor: 'rgba(255, 215, 0, 0.3)',
    points: 300,
    perks: ['freeHydra', 'discount20', 'exclusiveEvents', 'freeConsultation', 'freeFacial', 'priorityBooking', 'freeManicure', 'birthdayGift'],
  },
  {
    id: 'diamond',
    color: '#b9f2ff',
    bgColor: 'rgba(185, 242, 255, 0.1)',
    borderColor: 'rgba(185, 242, 255, 0.3)',
    points: 500,
    perks: ['vipSupport', 'freeHydra', 'discount20', 'exclusiveEvents', 'freeConsultation', 'freeFacial', 'priorityBooking', 'freeManicure', 'birthdayGift'],
  },
];

export default function LoyaltyProgram({ locale }: LoyaltyProgramProps) {
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <section className="py-24 px-6" style={{ background: 'linear-gradient(180deg, #0a0806 0%, #110d0a 50%, #0a0806 100%)' }}>
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
            <Crown size={14} className="text-amber-400" />
            <span className="text-amber-400 text-sm font-medium">{locale === 'ru' ? 'Эксклюзивно' : locale === 'ka' ? 'ექსკლუზიური' : 'Exclusive'}</span>
          </div>
          
          <h2 className="font-display font-bold mb-4" style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            background: 'linear-gradient(135deg, #f5e6d0, #C9A96E)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            {t.title}
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* How It Works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Star, title: t.earnPoints, desc: t.earnDesc, color: '#C9A96E' },
            { icon: Gift, title: t.redeemRewards, desc: t.redeemDesc, color: '#ec4899' },
            { icon: Sparkles, title: t.exclusivePerks, desc: t.perksDesc, color: '#8b5cf6' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-stone-800 hover:border-amber-400/30 transition-all text-center"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: `${item.color}20` }}>
                <item.icon size={24} style={{ color: item.color }} />
              </div>
              <h4 className="text-white font-semibold mb-2">{item.title}</h4>
              <p className="text-stone-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Tiers */}
        <div className="mb-12">
          <h3 className="text-white text-xl font-semibold text-center mb-8 flex items-center justify-center gap-2">
            <Award size={20} className="text-amber-400" />
            {t.tiers}
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border transition-all hover:scale-105"
                style={{ 
                  background: tier.bgColor,
                  borderColor: tier.borderColor,
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `${tier.color}30` }}>
                    <Star size={16} style={{ color: tier.color }} fill={tier.color} />
                  </div>
                  <h4 className="font-semibold" style={{ color: tier.color }}>
                    {t[tier.id as keyof typeof t] as string}
                  </h4>
                </div>
                
                <p className="text-stone-400 text-xs mb-3">
                  {tier.points}+ {t.points}
                </p>
                
                <div className="space-y-1.5">
                  {tier.perks.slice(0, 3).map((perk, j) => (
                    <div key={j} className="flex items-center gap-1.5 text-xs text-stone-500">
                      <ChevronRight size={10} style={{ color: tier.color }} />
                      {t[perk as keyof typeof t] as string}
                    </div>
                  ))}
                  {tier.perks.length > 3 && (
                    <p className="text-xs text-stone-600">+{tier.perks.length - 3} {locale === 'ru' ? 'ещё' : locale === 'ka' ? 'მეტი' : 'more'}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Rewards Preview */}
        <div className="p-8 rounded-3xl border border-amber-400/20" style={{ background: 'linear-gradient(135deg, rgba(201,169,110,0.05), rgba(160,120,64,0.02))' }}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-white text-lg font-semibold mb-2 flex items-center gap-2">
                <Gift size={20} className="text-amber-400" />
                {t.rewards}
              </h4>
              <div className="flex flex-wrap gap-2">
                {[t.freeManicure, t.freeFacial, t.freeHydra, t.discount20].map((reward, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400/80 text-sm border border-amber-400/20">
                    {reward}
                  </span>
                ))}
              </div>
            </div>
            
            <motion.button
              onClick={() => window.open('https://wa.me/995599123456?text=' + encodeURIComponent(locale === 'ru' ? 'Хочу вступить в программу лояльности!' : 'I want to join the loyalty program!'), '_blank')}
              className="px-8 py-4 rounded-full text-stone-900 font-semibold flex items-center gap-2"
              style={{ background: 'linear-gradient(135deg, #C9A96E, #a07840)' }}
              whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(201, 169, 110, 0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              <Users size={18} />
              {t.join}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
