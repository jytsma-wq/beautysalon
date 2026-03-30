'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Cookie, X, Check } from 'lucide-react';

interface CookieConsentProps {
  locale: string;
}

const translations: Record<string, {
  title: string;
  description: string;
  acceptAll: string;
  acceptNecessary: string;
  manageSettings: string;
  learnMore: string;
}> = {
  en: {
    title: 'Cookie Preferences',
    description: 'We use cookies to enhance your experience, analyze site traffic, and personalize content. By clicking "Accept All", you consent to our use of cookies.',
    acceptAll: 'Accept All',
    acceptNecessary: 'Necessary Only',
    manageSettings: 'Cookie Settings',
    learnMore: 'Learn more',
  },
  ru: {
    title: 'Настройки cookies',
    description: 'Мы используем cookies для улучшения вашего опыта, анализа трафика и персонализации контента. Нажимая "Принять все", вы соглашаетесь на использование cookies.',
    acceptAll: 'Принять все',
    acceptNecessary: 'Только необходимые',
    manageSettings: 'Настройки',
    learnMore: 'Подробнее',
  },
  ka: {
    title: 'Cookie პრეფერენსიები',
    description: 'ჩვენ ვიყენებთ cookies-ს თქვენი გამოცდილების გასაუმჯობესებლად, ტრაფიკის ანალიზისთვის და კონტენტის პერსონალიზაციისთვის.',
    acceptAll: 'ყველას მიღება',
    acceptNecessary: 'მხოლოდ საჭირო',
    manageSettings: 'პარამეტრები',
    learnMore: 'გაიგეთ მეტი',
  },
  he: {
    title: 'העדפות עוגיות',
    description: 'אנו משתמשים בעוגיות כדי לשפר את החוויה שלך, לנתח תנועה ולהתאים אישית תוכן.',
    acceptAll: 'קבל הכל',
    acceptNecessary: 'רק הכרחי',
    manageSettings: 'הגדרות',
    learnMore: 'למד עוד',
  },
  ar: {
    title: 'تفضيلات ملفات تعريف الارتباط',
    description: 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك وتحليل حركة المرور وتخصيص المحتوى.',
    acceptAll: 'قبول الكل',
    acceptNecessary: 'ضروري فقط',
    manageSettings: 'الإعدادات',
    learnMore: 'معرفة المزيد',
  },
  tr: {
    title: 'Çerez Tercihleri',
    description: 'Deneyiminizi geliştirmek, trafiği analiz etmek ve içeriği kişiselleştirmek için çerezleri kullanıyoruz.',
    acceptAll: 'Tümünü Kabul Et',
    acceptNecessary: 'Sadece Gerekli',
    manageSettings: 'Ayarlar',
    learnMore: 'Daha fazla bilgi',
  },
};

export default function CookieConsent({ locale }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be changed
    analytics: false,
    marketing: false,
  });

  const t = translations[locale] || translations.en;

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (type: 'all' | 'necessary' | 'custom') => {
    const consent = {
      timestamp: new Date().toISOString(),
      type,
      preferences: type === 'all' 
        ? { necessary: true, analytics: true, marketing: true }
        : type === 'necessary'
        ? { necessary: true, analytics: false, marketing: false }
        : preferences,
    };
    
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="fixed bottom-0 left-0 right-0 z-[9999]"
      >
        <div 
          className="border-t"
          style={{ 
            background: 'linear-gradient(180deg, rgba(13, 10, 8, 0.98), rgba(13, 10, 8, 0.99))',
            borderColor: 'rgba(201, 169, 110, 0.15)',
            backdropFilter: 'blur(20px)'
          }}
        >
          <div className="container mx-auto max-w-7xl px-6 py-6">
            {!showSettings ? (
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                {/* Left - Info */}
                <div className="flex items-start gap-4 flex-1">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(201, 169, 110, 0.1)' }}
                  >
                    <Cookie size={24} className="text-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">{t.title}</h3>
                    <p className="text-stone-400 text-sm leading-relaxed max-w-2xl">
                      {t.description}
                      {' '}
                      <Link 
                        href={`/${locale}/legal/cookies`}
                        className="text-gold-400 hover:text-gold-300 underline underline-offset-2"
                      >
                        {t.learnMore}
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Right - Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
                  <button
                    onClick={() => setShowSettings(true)}
                    className="px-5 py-2.5 rounded-full text-sm font-medium text-stone-400 border border-stone-700 hover:border-stone-600 hover:text-stone-300 transition-all"
                  >
                    {t.manageSettings}
                  </button>
                  <button
                    onClick={() => saveConsent('necessary')}
                    className="px-5 py-2.5 rounded-full text-sm font-medium text-gold-400 border border-gold-400/40 hover:bg-gold-400/10 transition-all"
                  >
                    {t.acceptNecessary}
                  </button>
                  <button
                    onClick={() => saveConsent('all')}
                    className="px-6 py-2.5 rounded-full text-sm font-semibold text-stone-900 transition-all hover:opacity-90"
                    style={{ 
                      background: 'linear-gradient(135deg, #C9A96E, #a07840)',
                    }}
                  >
                    {t.acceptAll}
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Settings Panel */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold text-lg">{t.title}</h3>
                  <button 
                    onClick={() => setShowSettings(false)}
                    className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 flex items-center justify-center text-stone-400 hover:text-white transition-all"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-stone-900/50 border border-stone-800">
                    <div>
                      <p className="text-white font-medium text-sm mb-1">Necessary Cookies</p>
                      <p className="text-stone-500 text-xs">Essential for the website to function. Cannot be disabled.</p>
                    </div>
                    <div className="w-10 h-6 rounded-full bg-gold-500/20 flex items-center justify-end px-1">
                      <Check size={14} className="text-gold-400" />
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-stone-900/50 border border-stone-800">
                    <div>
                      <p className="text-white font-medium text-sm mb-1">Analytics Cookies</p>
                      <p className="text-stone-500 text-xs">Help us understand how visitors interact with our website.</p>
                    </div>
                    <button
                      onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                      className={`w-10 h-6 rounded-full transition-all ${
                        preferences.analytics 
                          ? 'bg-gold-500 flex items-center justify-end px-1' 
                          : 'bg-stone-700 flex items-center justify-start px-1'
                      }`}
                    >
                      <div className="w-4 h-4 rounded-full bg-white transition-transform" />
                    </button>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-stone-900/50 border border-stone-800">
                    <div>
                      <p className="text-white font-medium text-sm mb-1">Marketing Cookies</p>
                      <p className="text-stone-500 text-xs">Used to deliver relevant advertisements and track campaign performance.</p>
                    </div>
                    <button
                      onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                      className={`w-10 h-6 rounded-full transition-all ${
                        preferences.marketing 
                          ? 'bg-gold-500 flex items-center justify-end px-1' 
                          : 'bg-stone-700 flex items-center justify-start px-1'
                      }`}
                    >
                      <div className="w-4 h-4 rounded-full bg-white transition-transform" />
                    </button>
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setShowSettings(false)}
                    className="px-5 py-2.5 rounded-full text-sm font-medium text-stone-400 border border-stone-700 hover:border-stone-600 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => saveConsent('custom')}
                    className="px-6 py-2.5 rounded-full text-sm font-semibold text-stone-900 transition-all hover:opacity-90"
                    style={{ 
                      background: 'linear-gradient(135deg, #C9A96E, #a07840)',
                    }}
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
