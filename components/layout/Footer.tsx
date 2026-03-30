import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Sparkles, Calendar, ChevronRight } from 'lucide-react';
import { SALON_INFO } from '@/lib/constants';

// Colored Social Media Icons
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <defs>
      <linearGradient id="instagramGradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFDC80" />
        <stop offset="25%" stopColor="#FCAF45" />
        <stop offset="50%" stopColor="#F77737" />
        <stop offset="75%" stopColor="#F56040" />
        <stop offset="100%" stopColor="#C13584" />
      </linearGradient>
    </defs>
    <path fill="url(#instagramGradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path fill="#25F4EE" d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    <path fill="#FE2C55" d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" opacity="0.3"/>
    <path fill="#000" d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" opacity="0.2"/>
  </svg>
);

interface FooterProps {
  locale?: string;
}

export default function Footer({ locale = 'en' }: FooterProps) {
  // Translations
  const translations: Record<string, {
    tagline: string;
    services: string;
    salon: string;
    legal: string;
    terms: string;
    privacy: string;
    cookies: string;
    findSpecialist: string;
    rights: string;
    followUs: string;
  }> = {
    en: {
      tagline: 'World-class aesthetic medicine and luxury beauty services in the heart of Batumi, Georgia.',
      services: 'Services',
      salon: 'Salon',
      legal: 'Legal',
      terms: 'Terms of Use',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Notice',
      findSpecialist: 'Find a Specialist',
      rights: 'All rights reserved.',
      followUs: 'Follow Us',
    },
    ru: {
      tagline: 'Мировая эстетическая медицина и роскошные услуги красоты в сердце Батуми, Грузия.',
      services: 'Услуги',
      salon: 'Салон',
      legal: 'Правовая информация',
      terms: 'Условия использования',
      privacy: 'Политика конфиденциальности',
      cookies: 'Уведомление о cookies',
      findSpecialist: 'Найти специалиста',
      rights: 'Все права защищены.',
      followUs: 'Подписывайтесь',
    },
    ka: {
      tagline: 'მსოფლიო კლასის ესთეტიკური მედიცინა და საფუძველი სილამაზის სერვისები ბათუმის გულში, საქართველო.',
      services: 'სერვისები',
      salon: 'სალონი',
      legal: 'იურიდიული',
      terms: 'გამოყენების პირობები',
      privacy: 'კონფიდენციალურობა',
      cookies: 'Cookie შეტყობინება',
      findSpecialist: 'იპოვეთ სპეციალისტი',
      rights: 'ყველა უფლება დაცულია.',
      followUs: 'გამოგვიწერეთ',
    },
    he: {
      tagline: 'רפואה אסתטית ברמה עולמית ושירותי יופי יוקרתיים בלב בתומי, גיאורגיה.',
      services: 'שירותים',
      salon: 'סלון',
      legal: 'משפטי',
      terms: 'תנאי שימוש',
      privacy: 'מדיניות פרטיות',
      cookies: 'הודעת עוגיות',
      findSpecialist: 'מצא מומחה',
      rights: 'כל הזכויות שמורות.',
      followUs: 'עקבו אחרינו',
    },
    ar: {
      tagline: 'طب تجميل عالمي وخدمات جمال فاخرة في قلب باتومي، جورجيا.',
      services: 'الخدمات',
      salon: 'الصالون',
      legal: 'قانوني',
      terms: 'شروط الاستخدام',
      privacy: 'سياسة الخصوصية',
      cookies: 'إشعار ملفات تعريف الارتباط',
      findSpecialist: 'ابحث عن متخصص',
      rights: 'جميع الحقوق محفوظة.',
      followUs: 'تابعنا',
    },
    tr: {
      tagline: 'Batumi\'nin kalbinde dünya standartlarında estetik tıp ve lüks güzellik hizmetleri.',
      services: 'Hizmetler',
      salon: 'Salon',
      legal: 'Yasal',
      terms: 'Kullanım Koşulları',
      privacy: 'Gizlilik Politikası',
      cookies: 'Çerez Bildirimi',
      findSpecialist: 'Uzman Bul',
      rights: 'Tüm hakları saklıdır.',
      followUs: 'Bizi Takip Edin',
    },
  };

  const t = translations[locale] || translations.en;

  const footerLinks = [
    {
      title: t.services,
      links: [
        { label: 'Injectables',     href: '/treatments?cat=injectables' },
        { label: 'Skin Treatments', href: '/treatments?cat=skin' },
        { label: 'Lashes & Brows',  href: '/treatments?cat=lashes' },
        { label: 'Hair',            href: '/treatments?cat=hair' },
        { label: 'Nails',           href: '/treatments?cat=nails' },
        { label: 'Permanent Makeup',href: '/treatments?cat=pmu' },
      ],
    },
    {
      title: t.salon,
      links: [
        { label: 'About Us',      href: '/about' },
        { label: 'Specialists',   href: '/specialists' },
        { label: 'Book Now',      href: '/contact' },
      ],
    },
    {
      title: t.legal,
      links: [
        { label: t.terms,    href: '/legal/terms' },
        { label: t.privacy,  href: '/legal/privacy' },
        { label: t.cookies,  href: '/legal/cookies' },
      ],
    },
  ];

  return (
    <footer
      className="border-t"
      style={{ 
        borderColor: 'rgba(201, 169, 110, 0.1)', 
        background: 'linear-gradient(180deg, #0a0806 0%, #080604 100%)' 
      }}
    >
      <div className="container mx-auto max-w-7xl px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand - 2 columns */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ 
                  background: 'linear-gradient(135deg, #C9A96E, #a07840)',
                  boxShadow: '0 4px 16px rgba(201, 169, 110, 0.25)'
                }}
              >
                <Sparkles size={18} className="text-stone-900" />
              </div>
              <div className="flex flex-col">
                <span
                  className="font-accent font-semibold tracking-widest text-sm uppercase"
                  style={{
                    background: 'linear-gradient(135deg, #f5e6d0, #C9A96E)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Silk Beauty
                </span>
                <span className="text-stone-600 text-[10px] tracking-[0.2em] uppercase">
                  Aesthetic Clinic
                </span>
              </div>
            </div>
            
            <p className="text-stone-500 text-base leading-relaxed mb-6 max-w-md">
              {t.tagline}
            </p>

            {/* Find a Specialist Button - Galderma Style */}
            <Link
              href={`/${locale}/specialists`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 group"
              style={{ 
                background: 'linear-gradient(135deg, #C9A96E, #a07840)',
                color: '#0d0a08',
                boxShadow: '0 4px 16px rgba(201, 169, 110, 0.25)'
              }}
            >
              <Calendar size={16} />
              {t.findSpecialist}
              <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-stone-300 text-xs font-semibold tracking-widest uppercase mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={`/${locale}${link.href}`}
                      className="text-stone-500 text-sm hover:text-gold-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent mb-10" />

        {/* Contact & Social Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-10">
          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
            {[
              { icon: MapPin, text: SALON_INFO.address },
              { icon: Phone,  text: SALON_INFO.phone },
              { icon: Mail,   text: SALON_INFO.email },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-stone-500 text-sm">
                <Icon size={14} className="text-gold-400/60 flex-shrink-0" />
                <span className="text-stone-400">{text}</span>
              </div>
            ))}
          </div>

          {/* Social Icons - Colored */}
          <div className="flex items-center gap-4">
            <span className="text-stone-600 text-xs tracking-wider uppercase mr-2">{t.followUs}</span>
            
            {/* Facebook */}
            <a
              href={SALON_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-stone-800/50 hover:bg-[#1877F2]/10 border border-stone-700 hover:border-[#1877F2]/30 transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>

            {/* Instagram */}
            <a
              href={SALON_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-stone-800/50 hover:bg-pink-500/10 border border-stone-700 hover:border-pink-500/30 transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>

            {/* TikTok */}
            <a
              href={SALON_INFO.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-stone-800/50 hover:bg-[#25F4EE]/10 border border-stone-700 hover:border-[#25F4EE]/30 transition-all duration-300 hover:scale-110"
              aria-label="TikTok"
            >
              <TikTokIcon />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-stone-700 text-xs text-center">
          © {new Date().getFullYear()} Silk Beauty Salon, Batumi. {t.rights}
        </p>
      </div>
    </footer>
  );
}
