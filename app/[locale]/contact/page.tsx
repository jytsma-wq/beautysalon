'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CheckCircle2, Loader2 } from 'lucide-react';
import { buildWhatsAppBookingLink } from '@/lib/whatsapp';
import { SALON_INFO } from '@/lib/constants';
import PageHero from '@/components/shared/PageHero';

const CONTACT_IMAGES = [
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1920&q=90',
  'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1920&q=90',
  'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=1920&q=90',
  'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=1920&q=90',
];

const services = {
  en: [
    'Lip Filler – Russian Technique',
    'Botox – Full Face',
    'Cheek Filler',
    'Russian Volume Lashes',
    'Lash Lift & Tint',
    'Brow Lamination',
    'Microblading',
    'HydraFacial',
    'Balayage',
    'Gel Manicure',
    'Other / Consultation',
  ],
  ru: [
    'Увеличение губ – Русская техника',
    'Ботокс – Всё лицо',
    'Скуловой филлер',
    'Русский объём ресниц',
    'Ламинирование ресниц',
    'Ламинирование бровей',
    'Микроблейдинг',
    'Гидрафишл',
    'Балаяж',
    'Гель-маникюр',
    'Другое / Консультация',
  ],
  ka: [
    'ტუჩების შევსება – რუსული ტექნიკა',
    'ბოტოქსი – მთლიანად სახეზე',
    'ლოყების შევსება',
    'რუსული მოცულობითი წამწამები',
    'წამწამების აწევა და დაჭრა',
    'წვეროების ლამინაცია',
    'მიკრობლეიდინგი',
    'ჰიდრაფეიშალი',
    'ბალაიაჟი',
    'გელ მანიკური',
    'სხვა / კონსულტაცია',
  ],
  he: [
    'מילוי שפתיים – טכניקה רוסית',
    'בוטוקס – כל הפנים',
    'מילוי לחיים',
    'ריסים נפח רוסי',
    'הרמת וצביעת ריסים',
    'למינציית גבות',
    'מיקרובליידינג',
    'הידרה-פיישל',
    'בלאיאז\'',
    'מניקור ג\'ל',
    'אחר / ייעוץ',
  ],
  ar: [
    'حشو الشفاه – التقنية الروسية',
    'البوتوكس – الوجه كاملاً',
    'حشو الخدود',
    'رموش الحجم الروسي',
    'رفع وصبغ الرموش',
    'فرد الحواجب',
    'المايكروبلايدنج',
    'هايدروفاشيال',
    'بالاياژ',
    'مانيكير جل',
    'أخرى / استشارة',
  ],
  tr: [
    'Dudak Dolgusu – Rus Tekniği',
    'Botox – Yüz Genel',
    'Elmacık Kemiği Dolgusu',
    'Rus Hacim Kirpikler',
    'Kirpik Kıvırma ve Boyama',
    'Kaş Laminasyonu',
    'Microblading',
    'HydraFacial',
    'Balayage',
    'Jel Manikür',
    'Diğer / Danışmanlık',
  ],
};

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export default function ContactPage({ params }: ContactPageProps) {
  // For client components, we need to use the locale from params
  // This is a workaround since we can't easily use async params in client components
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', date: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [locale, setLocale] = useState<string>('en');

  // Get locale from params
  params.then((p) => setLocale(p.locale));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const link = buildWhatsAppBookingLink({
      service: form.service,
      name: form.name,
      date: form.date,
    });
    await new Promise((r) => setTimeout(r, 800));
    window.open(link, '_blank');
    setStatus('success');
  };

  // Translations
  const translations = {
    en: {
      title: 'Book Your Appointment',
      fullName: 'Full Name',
      phone: 'Phone / WhatsApp',
      email: 'Email',
      treatment: 'Treatment',
      date: 'Preferred Date',
      message: 'Message',
      submit: 'Confirm Booking Request',
      success: 'Request Sent!',
      successSub: "We've opened WhatsApp for you. We'll confirm your appointment within 1 hour.",
      selectTreatment: 'Select a treatment',
      address: 'Address',
      phoneLabel: 'Phone & WhatsApp',
      emailLabel: 'Email',
      hours: 'Hours',
      placeholder: {
        name: 'Your name',
        phone: '+995 599 ...',
        email: 'your@email.com',
        message: 'Any questions or specific requests...',
      },
    },
    ru: {
      title: 'Запись на приём',
      fullName: 'Имя и фамилия',
      phone: 'Телефон / WhatsApp',
      email: 'Email',
      treatment: 'Услуга',
      date: 'Предпочтительная дата',
      message: 'Сообщение',
      submit: 'Подтвердить запись',
      success: 'Запрос отправлен!',
      successSub: 'Мы подтвердим запись через WhatsApp в течение 1 часа.',
      selectTreatment: 'Выберите услугу',
      address: 'Адрес',
      phoneLabel: 'Телефон и WhatsApp',
      emailLabel: 'Email',
      hours: 'Часы работы',
      placeholder: {
        name: 'Ваше имя',
        phone: '+995 599 ...',
        email: 'ваш@email.com',
        message: 'Любые вопросы или особые пожелания...',
      },
    },
    ka: {
      title: 'ვიზიტის დაჯავშნა',
      fullName: 'სახელი და გვარი',
      phone: 'ტელეფონი / WhatsApp',
      email: 'ელ-ფოსტა',
      treatment: 'მომსახურება',
      date: 'სასურველი თარიღი',
      message: 'შეტყობინება',
      submit: 'დაჯავშნის მოთხოვნა',
      success: 'მოთხოვნა გაიგზავნა!',
      successSub: 'ჩვენ დავადასტურებთ ვიზიტს WhatsApp-ით 1 საათის განმავლობაში.',
      selectTreatment: 'აირჩიეთ მომსახურება',
      address: 'მისამართი',
      phoneLabel: 'ტელეფონი და WhatsApp',
      emailLabel: 'ელ-ფოსტა',
      hours: 'სამუშაო საათები',
      placeholder: {
        name: 'თქვენი სახელი',
        phone: '+995 599 ...',
        email: 'თქვენი@ელფოსტა.com',
        message: 'ნებისმიერი კითხვა ან სპეციფიკური მოთხოვნა...',
      },
    },
    he: {
      title: 'הזמנת תור',
      fullName: 'שם מלא',
      phone: 'טלפון / WhatsApp',
      email: 'אימייל',
      treatment: 'טיפול',
      date: 'תאריך מועדף',
      message: 'הודעה',
      submit: 'אשר הזמנה',
      success: 'הבקשה נשלחה!',
      successSub: 'נאשר את התור שלך ב-WhatsApp תוך שעה.',
      selectTreatment: 'בחר טיפול',
      address: 'כתובת',
      phoneLabel: 'טלפון ו-WhatsApp',
      emailLabel: 'אימייל',
      hours: 'שעות',
      placeholder: {
        name: 'השם שלך',
        phone: '+995 599 ...',
        email: 'your@email.com',
        message: 'שאלות או בקשות מיוחדות...',
      },
    },
    ar: {
      title: 'احجز موعدك',
      fullName: 'الاسم الكامل',
      phone: 'الهاتف / واتساب',
      email: 'البريد الإلكتروني',
      treatment: 'العلاج',
      date: 'التاريخ المفضل',
      message: 'رسالة',
      submit: 'تأكيد الحجز',
      success: 'تم إرسال الطلب!',
      successSub: 'سنؤكد موعدك عبر واتساب خلال ساعة.',
      selectTreatment: 'اختر علاجاً',
      address: 'العنوان',
      phoneLabel: 'الهاتف وواتساب',
      emailLabel: 'البريد الإلكتروني',
      hours: 'ساعات العمل',
      placeholder: {
        name: 'اسمك',
        phone: '+995 599 ...',
        email: 'your@email.com',
        message: 'أي أسئلة أو طلبات محددة...',
      },
    },
    tr: {
      title: 'Randevunuzu Alın',
      fullName: 'Ad Soyad',
      phone: 'Telefon / WhatsApp',
      email: 'E-posta',
      treatment: 'Tedavi',
      date: 'Tercih Edilen Tarih',
      message: 'Mesaj',
      submit: 'Randevu Talebini Onayla',
      success: 'Talep Gönderildi!',
      successSub: 'Randevunuzu 1 saat içinde WhatsApp ile onaylayacağız.',
      selectTreatment: 'Bir tedavi seçin',
      address: 'Adres',
      phoneLabel: 'Telefon ve WhatsApp',
      emailLabel: 'E-posta',
      hours: 'Çalışma Saatleri',
      placeholder: {
        name: 'Adınız',
        phone: '+995 599 ...',
        email: 'your@email.com',
        message: 'Herhangi bir soru veya özel istek...',
      },
    },
  };

  const t = translations[locale as keyof typeof translations] || translations.en;
  const serviceList = services[locale as keyof typeof services] || services.en;

  return (
    <div style={{ background: 'linear-gradient(180deg, #0d0a08 0%, #111009 100%)' }}>
      {/* Page Hero Slider */}
      <PageHero pageKey="contact" images={CONTACT_IMAGES} />

      <div className="container mx-auto max-w-6xl px-6 pt-8 pb-20">
        {/* Header */}
        <div className="text-center mb-16 -mt-10 relative z-10">
          <h1
            className="font-display font-bold"
            style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              background: 'linear-gradient(135deg, #f5e6d0, #C9A96E)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {t.title}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form — 3 cols */}
          <div className="lg:col-span-3">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 rounded-3xl border border-stone-800"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <CheckCircle2 size={48} className="text-amber-400 mx-auto mb-5" />
                <h3 className="text-white font-display text-2xl font-bold mb-3">{t.success}</h3>
                <p className="text-stone-400 max-w-sm mx-auto">
                  {t.successSub}
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 p-8 rounded-3xl border border-stone-800"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-stone-500 text-xs tracking-wide uppercase block mb-2">{t.fullName} *</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-stone-900/60 border border-stone-800 rounded-xl px-4 py-3 text-stone-200 text-sm outline-none focus:border-amber-400/50 transition-colors placeholder:text-stone-700"
                      placeholder={t.placeholder.name}
                    />
                  </div>
                  <div>
                    <label className="text-stone-500 text-xs tracking-wide uppercase block mb-2">{t.phone} *</label>
                    <input
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-stone-900/60 border border-stone-800 rounded-xl px-4 py-3 text-stone-200 text-sm outline-none focus:border-amber-400/50 transition-colors placeholder:text-stone-700"
                      placeholder={t.placeholder.phone}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-stone-500 text-xs tracking-wide uppercase block mb-2">{t.email}</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-stone-900/60 border border-stone-800 rounded-xl px-4 py-3 text-stone-200 text-sm outline-none focus:border-amber-400/50 transition-colors placeholder:text-stone-700"
                    placeholder={t.placeholder.email}
                  />
                </div>

                <div>
                  <label className="text-stone-500 text-xs tracking-wide uppercase block mb-2">{t.treatment} *</label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-stone-900/60 border border-stone-800 rounded-xl px-4 py-3 text-stone-200 text-sm outline-none focus:border-amber-400/50 transition-colors"
                  >
                    <option value="" disabled>{t.selectTreatment}</option>
                    {serviceList.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-stone-500 text-xs tracking-wide uppercase block mb-2">{t.date}</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full bg-stone-900/60 border border-stone-800 rounded-xl px-4 py-3 text-stone-200 text-sm outline-none focus:border-amber-400/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-stone-500 text-xs tracking-wide uppercase block mb-2">{t.message}</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={3}
                    className="w-full bg-stone-900/60 border border-stone-800 rounded-xl px-4 py-3 text-stone-200 text-sm outline-none focus:border-amber-400/50 transition-colors resize-none placeholder:text-stone-700"
                    placeholder={t.placeholder.message}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 rounded-xl text-stone-900 font-semibold tracking-wide text-sm transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                  style={{ background: 'linear-gradient(135deg, #C9A96E, #a07840)' }}
                >
                  {status === 'loading'
                    ? <><Loader2 size={16} className="animate-spin" /> Loading...</>
                    : t.submit}
                </button>
              </form>
            )}
          </div>

          {/* Contact info — 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: MapPin, label: t.address, value: SALON_INFO.address },
              { icon: Phone, label: t.phoneLabel, value: SALON_INFO.phone },
              { icon: Mail, label: t.emailLabel, value: SALON_INFO.email },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex gap-4 p-5 rounded-2xl border border-stone-800" style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(201,169,110,0.1)' }}>
                    <Icon size={16} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-stone-500 text-xs mb-1 uppercase tracking-wide">{item.label}</p>
                    <p className="text-stone-200 text-sm whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              );
            })}

            {/* Hours */}
            <div className="p-5 rounded-2xl border border-stone-800" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <div className="flex items-center gap-2 mb-4">
                <Clock size={14} className="text-amber-400" />
                <span className="text-stone-500 text-xs uppercase tracking-wide">{t.hours}</span>
              </div>
              {SALON_INFO.hours.map((h) => (
                <div key={h.day} className="flex justify-between text-sm py-1.5 border-b border-stone-800 last:border-0">
                  <span className="text-stone-400">{h.day}</span>
                  <span className="text-stone-300">{h.hours}</span>
                </div>
              ))}
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-stone-800 h-52">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.3!2d${SALON_INFO.coordinates.lng}!3d${SALON_INFO.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDM4JzQ4LjUiTiA0McKwMzgnMTIuMSJF!5e0!3m2!1sen!2sge!4v1`}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
