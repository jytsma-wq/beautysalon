'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2, Sparkles, Phone, MapPin, Clock, Star } from 'lucide-react';
import type { ChatMessage } from '@/types/types';

// Suggested questions in multiple languages
const SUGGESTED_QUESTIONS: Record<string, string[]> = {
  en: [
    'What treatments do you offer?',
    'How much does lip filler cost?',
    'Tell me about Botox treatments',
    'How do I book an appointment?',
    'What are your opening hours?',
    'Do you offer Russian Volume lashes?',
  ],
  ru: [
    'Какие процедуры вы предлагаете?',
    'Сколько стоит увеличение губ?',
    'Расскажите о ботоксе',
    'Как записаться на прием?',
    'Часы работы салона?',
    'У вас есть русские объемные ресницы?',
  ],
  ka: [
    'რა პროცედურები გაქვთ?',
    'რამდენი ღირს ტუჩების შევსება?',
    'მომიყევით ბოტოქსის შესახებ',
    'როგორ დავჯავშნო?',
    'სამუშაო საათები?',
    'გაქვთ რუსული მოცულობითი წამწამები?',
  ],
  he: [
    'אילו טיפולים אתם מציעים?',
    'כמה עולה מילוי שפתיים?',
    'ספרי לי על בוטוקס',
    'איך לקבוע תור?',
    'שעות פתיחה?',
    'יש לכם ריסים נפח רוסי?',
  ],
  ar: [
    'ما العلاجات التي تقدمونها؟',
    'كم تكلفة حشو الشفاه؟',
    'أخبريني عن البوتوكس',
    'كيف أحجز موعد؟',
    'ساعات العمل؟',
    'هل لديكم رموش الحجم الروسي؟',
  ],
  tr: [
    'Hangi tedavileri sunuyorsunuz?',
    'Dudak dolgusu ne kadar?',
    'Botox hakkında bilgi verin',
    'Nasıl randevu alırım?',
    'Çalışma saatleri?',
    'Rus hacim kirpikleriniz var mı?',
  ],
};

// Greeting messages
const GREETINGS: Record<string, string> = {
  en: "Hello! I'm Mariam, your personal beauty consultant at Silk Beauty Salon. How can I help you today? ✨",
  ru: "Привет! Я Мариам, ваш личный консультант по красоте в Silk Beauty Salon. Чем могу помочь? ✨",
  ka: "გამარჯობა! მე მარიამი ვარ, თქვენი პერსონალური სილამაზის კონსულტანტი Silk Beauty Salon-ში. როგორ შემიძლია დაგეხმაროთ? ✨",
  he: "שלום! אני מרים, היועצת האישית שלך בסילק ביוטי. איך אוכל לעזור? ✨",
  ar: "مرحباً! أنا مريم، مستشارة الجمال الشخصية لديك في سيلك بيوتي. كيف يمكنني مساعدتك؟ ✨",
  tr: "Merhaba! Ben Mariam, Silk Beauty'deki kişisel güzellik danışmanınızım. Size nasıl yardımcı olabilirim? ✨",
};

// Tooltip translations
const TOOLTIPS: Record<string, string> = {
  en: "Hello, my name is Mariam. Can I help you?",
  ru: "Привет, меня зовут Мариам. Могу я вам помочь?",
  ka: "გამარჯობა, მე მარიამი ვარ. შემიძლია დაგეხმაროთ?",
  he: "שלום, קוראים לי מרים. איך אוכל לעזור?",
  ar: "مرحباً، اسمي مريم. هل يمكنني مساعدتك؟",
  tr: "Merhaba, benim adım Mariam. Size yardımcı olabilir miyim?",
};

interface MariamChatbotProps {
  locale: string;
}

export default function MariamChatbot({ locale }: MariamChatbotProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const [showTooltip, setShowTooltip] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  const suggested = SUGGESTED_QUESTIONS[locale] || SUGGESTED_QUESTIONS.en;
  const greeting = GREETINGS[locale] || GREETINGS.en;
  const tooltip = TOOLTIPS[locale] || TOOLTIPS.en;

  // Hide tooltip after first interaction
  useEffect(() => {
    if (open) {
      setShowTooltip(false);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function send(text: string) {
    if (!text.trim() || loading) return;

    const userMsg: ChatMessage = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    setShowQuickActions(false);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg], locale }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: locale === 'ru' ? 'Извините, у меня проблемы с соединением. Позвоните нам: +995 599 123 456!' : locale === 'ka' ? 'უკაცრავად, კავშირის პრობლემა. დაგვირეკეთ: +995 599 123 456!' : 'Sorry, I\'m having trouble connecting. Please call us at +995 599 123 456!' },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const quickActions = [
    { icon: Phone, label: locale === 'ru' ? 'Позвонить' : locale === 'ka' ? 'დარეკვა' : 'Call', action: 'tel:+995599123456' },
    { icon: MapPin, label: locale === 'ru' ? 'Локация' : locale === 'ka' ? 'მდებარეობა' : 'Location', action: 'https://maps.google.com/?q=28+Rustaveli+Avenue+Batumi+Georgia' },
    { icon: Clock, label: locale === 'ru' ? 'Часы' : locale === 'ka' ? 'საათები' : 'Hours', action: null },
  ];

  return (
    <>
      {/* Floating button - Bottom Left with Profile Photo & Tooltip */}
      <div className="fixed bottom-6 left-6 z-40">
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && !open && (
            <motion.div
              initial={{ opacity: 0, x: -10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full left-0 mb-3 w-64 p-4 rounded-2xl shadow-2xl border"
              style={{ 
                background: 'linear-gradient(180deg, #1a0a10 0%, #0d0608 100%)',
                borderColor: 'rgba(236, 72, 153, 0.2)'
              }}
            >
              {/* Arrow */}
              <div 
                className="absolute -bottom-2 left-6 w-4 h-4 rotate-45 border-r border-b"
                style={{ 
                  background: '#0d0608',
                  borderColor: 'rgba(236, 72, 153, 0.2)'
                }}
              />
              <div className="flex items-start gap-3">
                <div 
                  className="w-10 h-10 rounded-full flex-shrink-0 overflow-hidden ring-2 ring-pink-400/30"
                  style={{ background: 'linear-gradient(135deg, #ec4899, #be185d)' }}
                >
                  {/* Mariam Profile Photo Placeholder */}
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
                    alt="Mariam"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-pink-100 text-sm font-medium mb-1">{tooltip}</p>
                  <p className="text-pink-400/60 text-xs">AI Beauty Consultant</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button with Profile Photo */}
        <motion.button
          onClick={() => setOpen(true)}
          onMouseEnter={() => setShowTooltip(true)}
          className="relative w-16 h-16 rounded-full shadow-2xl border-2 border-pink-400/30 overflow-hidden group"
          style={{ 
            background: 'linear-gradient(135deg, #ec4899, #be185d)',
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            boxShadow: [
              '0 0 20px rgba(236, 72, 153, 0.3)', 
              '0 0 40px rgba(236, 72, 153, 0.6)', 
              '0 0 20px rgba(236, 72, 153, 0.3)'
            ] 
          }}
          transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
        >
          {/* Mariam Profile Photo */}
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
            alt="Mariam - AI Beauty Consultant"
            className="w-full h-full object-cover transition-transform group-hover:scale-110"
          />
          
          {/* Online Indicator */}
          {!open && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[#0d0a08]"
            />
          )}
        </motion.button>
      </div>

      {/* Chat Modal - Bottom Left */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20, x: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20, x: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-24 left-6 z-50 w-[360px] sm:w-[400px] max-h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-pink-500/20"
            style={{ background: 'linear-gradient(180deg, #1a0a10 0%, #0d0608 100%)' }}
          >
            {/* Header */}
            <div
              className="px-5 py-4 flex items-center justify-between"
              style={{ background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(190, 24, 93, 0.15))' }}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  {/* Profile Photo in Header */}
                  <div 
                    className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-pink-400/30"
                    style={{ background: 'linear-gradient(135deg, #ec4899, #be185d)' }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
                      alt="Mariam"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-400 rounded-full border-2 border-[#1a0a10]"
                  />
                </div>
                <div>
                  <p className="text-white text-base font-bold">Mariam</p>
                  <div className="flex items-center gap-1.5">
                    <Sparkles size={10} className="text-pink-400" />
                    <p className="text-pink-300/70 text-xs">AI Beauty Consultant</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setOpen(false)} 
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all"
              >
                <X size={16} />
              </button>
            </div>

            {/* Quick Actions Bar */}
            {showQuickActions && messages.length === 0 && (
              <div className="px-4 py-2 border-b border-pink-500/10 flex gap-2 overflow-x-auto">
                {quickActions.map((action, i) => (
                  action.action ? (
                    <a
                      key={i}
                      href={action.action}
                      target={action.action.startsWith('http') ? '_blank' : undefined}
                      rel={action.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pink-500/10 text-pink-300 text-xs whitespace-nowrap hover:bg-pink-500/20 transition-colors"
                    >
                      <action.icon size={12} />
                      {action.label}
                    </a>
                  ) : (
                    <button
                      key={i}
                      onClick={() => send(locale === 'ru' ? 'Какие у вас часы работы?' : locale === 'ka' ? 'რა საათები მუშაობთ?' : 'What are your opening hours?')}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pink-500/10 text-pink-300 text-xs whitespace-nowrap hover:bg-pink-500/20 transition-colors"
                    >
                      <action.icon size={12} />
                      {action.label}
                    </button>
                  )
                ))}
              </div>
            )}

            {/* Messages Area */}
            <div className="h-64 overflow-y-auto px-4 py-4 space-y-3">
              {messages.length === 0 && (
                <div>
                  {/* Mariam's Greeting */}
                  <div className="flex gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full flex-shrink-0 overflow-hidden ring-1 ring-pink-400/30">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
                        alt="Mariam"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-pink-500/10 border border-pink-500/20 rounded-2xl rounded-tl-none px-4 py-3 text-pink-100 text-sm max-w-[85%]">
                      {greeting}
                    </div>
                  </div>

                  {/* Suggested Questions */}
                  <div className="space-y-2 ml-10">
                    <p className="text-pink-400/60 text-xs mb-2 flex items-center gap-1">
                      <Star size={10} />
                      {locale === 'ru' ? 'Частые вопросы:' : locale === 'ka' ? 'ხშირი კითხვები:' : 'Suggested questions:'}
                    </p>
                    {suggested.slice(0, 4).map((s, i) => (
                      <motion.button
                        key={s}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        onClick={() => send(s)}
                        className="block w-full text-left px-4 py-2.5 rounded-xl border border-pink-500/20 text-pink-200/80 text-sm hover:bg-pink-500/10 hover:border-pink-400/40 transition-all"
                      >
                        {s}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* Chat Messages */}
              {messages.map((m, i) => (
                <div key={i} className={`flex gap-2 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  {m.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full flex-shrink-0 overflow-hidden ring-1 ring-pink-400/30">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
                        alt="Mariam"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div
                    className={`px-4 py-3 rounded-2xl text-sm max-w-[85%] ${
                      m.role === 'user'
                        ? 'text-white rounded-tr-none'
                        : 'bg-pink-500/10 border border-pink-500/20 text-pink-100 rounded-tl-none'
                    }`}
                    style={m.role === 'user' ? { background: 'linear-gradient(135deg, #ec4899, #be185d)' } : {}}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {/* Loading Indicator */}
              {loading && (
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 overflow-hidden ring-1 ring-pink-400/30">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
                      alt="Mariam"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-pink-500/10 border border-pink-500/20 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-2">
                    <Loader2 size={14} className="text-pink-400 animate-spin" />
                    <span className="text-pink-300/60 text-sm">
                      {locale === 'ru' ? 'Печатаю...' : locale === 'ka' ? 'ვწერ...' : 'Typing...'}
                    </span>
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input Area */}
            <div className="px-4 py-4 border-t border-pink-500/10 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && send(input)}
                placeholder={locale === 'ru' ? 'Спросите меня о чем-нибудь...' : locale === 'ka' ? 'რაიმეს შესახებ მკითხეთ...' : 'Ask me anything...'}
                className="flex-1 bg-pink-500/5 border border-pink-500/20 rounded-xl px-4 py-3 text-pink-100 text-sm outline-none focus:border-pink-400/50 transition-colors placeholder:text-pink-400/40"
              />
              <motion.button
                onClick={() => send(input)}
                disabled={!input.trim() || loading}
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all disabled:opacity-40"
                style={{ background: 'linear-gradient(135deg, #ec4899, #be185d)' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={16} className="text-white" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
