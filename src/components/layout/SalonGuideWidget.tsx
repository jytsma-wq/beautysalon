'use client';

import { FormEvent, useEffect, useId, useRef, useState } from 'react';
import { ArrowUpRight, BookOpen, MessageCircleQuestion, Send, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useConsent } from '@/components/providers/ConsentProvider';
import { siteConfig } from '@/data/site-config';
import type { Locale } from '@/i18n';
import { Link } from '@/i18n/routing';
import { trackBookingClick, trackContactClick, trackEvent } from '@/lib/analytics';
import { cn } from '@/lib/utils';
import {
  resolveSalonQuestion,
  type ChatbotExplanationKey,
  type ChatbotIntent,
  type SalonChatbotResolution,
} from '@/lib/salon-chatbot';
import {
  getSalonChatbotKnowledge,
  type SalonChatbotKnowledge,
} from '@/lib/salon-chatbot-knowledge';

interface GuideAction {
  kind: 'book' | 'guide' | 'library' | 'prices' | 'whatsapp';
  href: string;
  external?: boolean;
}

interface GuideMessage {
  id: number;
  role: 'user' | 'guide';
  lines: readonly string[];
  actions?: readonly GuideAction[];
}

const explanationTranslationKeys: Record<ChatbotExplanationKey, string> = {
  antiWrinkle: 'explanations.antiWrinkle',
  dermalFiller: 'explanations.dermalFiller',
  lipFiller: 'explanations.lipFiller',
  microneedling: 'explanations.microneedling',
  fireIce: 'explanations.fireIce',
  chemicalPeel: 'explanations.chemicalPeel',
  skinBoosters: 'explanations.skinBoosters',
  nails: 'explanations.nails',
  lashes: 'explanations.lashes',
  balayage: 'explanations.balayage',
  keratin: 'explanations.keratin',
};

function createWhatsAppHref(question: string): string {
  const phone = siteConfig.contact.whatsappPhone.replace(/\D/g, '');
  const message = question.trim()
    ? `Website question: ${question.trim()}`
    : 'Hello, I have a question about a treatment at Silk Beauty Salon.';

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function optionLine(
  option: SalonChatbotKnowledge['bookingOptions'][number],
  minutesShort: string,
  priceUnavailable: string
): string {
  const price = option.priceGel === undefined ? priceUnavailable : `₾${option.priceGel}`;
  return `${option.label}: ${price} · ${option.durationMinutes} ${minutesShort}`;
}

function getIntentLine(
  resolution: SalonChatbotResolution,
  knowledge: SalonChatbotKnowledge,
  locale: Locale,
  translate: (key: string, values?: Record<string, string | number>) => string
): string | null {
  switch (resolution.intent) {
    case 'emergency':
      return translate('answers.emergency');
    case 'medical':
      return translate('answers.medical');
    case 'brand':
      return translate('answers.brand');
    case 'clarification':
      return translate('answers.foreheadFiller');
    case 'cancellation':
      return translate('answers.cancellation', { hours: 48 });
    case 'reschedule':
      return translate('answers.reschedule', { hours: 24 });
    case 'booking':
      return translate('answers.booking', { hours: 24 });
    case 'location':
      return translate('answers.location', {
        address: knowledge.salon.address,
        city: knowledge.salon.city,
        country: knowledge.salon.country,
      });
    case 'hours':
      return translate('answers.hours', {
        mondaySaturday: knowledge.salon.businessHours.monday,
        sunday: knowledge.salon.businessHours.sunday,
      });
    case 'contact':
      return translate('answers.contact', {
        phone: knowledge.salon.phone,
        whatsapp: knowledge.salon.whatsappPhone,
        email: knowledge.salon.email,
      });
    case 'languages':
      return translate('answers.languages');
    case 'payment':
      return translate('answers.payment');
    case 'results':
      return locale === 'en' && knowledge.planning
        ? knowledge.planning.results
        : translate('answers.results');
    case 'downtime':
      return locale === 'en' && knowledge.planning
        ? knowledge.planning.downtime
        : translate('answers.downtime');
    case 'price':
      return knowledge.bookingOptions.length === 0
        ? translate('answers.askTreatmentPrice')
        : null;
    case 'duration':
      return knowledge.bookingOptions.length === 0
        ? translate('answers.askTreatmentDuration')
        : null;
    case 'treatment':
      return resolution.topicId ? null : translate('answers.consultation');
    case 'unknown':
      return translate('answers.unknown');
    case 'greeting':
      return translate('answers.greeting');
    default:
      return null;
  }
}

function buildGuideAnswer(
  question: string,
  locale: Locale,
  resolution: SalonChatbotResolution,
  knowledge: SalonChatbotKnowledge,
  translate: (key: string, values?: Record<string, string | number>) => string
): Pick<GuideMessage, 'lines' | 'actions'> {
  const canShowTreatmentFacts = !['emergency', 'medical', 'brand'].includes(
    resolution.intent
  );
  const lines: string[] = canShowTreatmentFacts
    ? knowledge.bookingOptions.map((option) =>
        optionLine(
          option,
          translate('minutesShort'),
          translate('answers.priceUnavailable')
        )
      )
    : [];
  const isGeneralPriceQuestion =
    resolution.intent === 'price' &&
    resolution.topicId === null &&
    knowledge.bookingOptions.length === 0;

  if (isGeneralPriceQuestion) {
    lines.push(translate('answers.priceOverview'));
    for (const range of knowledge.publishedPriceRanges) {
      lines.push(
        `${translate(`categories.${range.category}`)}: ₾${range.minimumGel}–₾${range.maximumGel}`
      );
    }
  }

  const intentLine = getIntentLine(resolution, knowledge, locale, translate);

  if (intentLine) lines.push(intentLine);

  if (
    resolution.explanationKey &&
    !['emergency', 'medical', 'brand', 'clarification', 'results', 'downtime'].includes(
      resolution.intent
    )
  ) {
    lines.push(translate(explanationTranslationKeys[resolution.explanationKey]));
  }

  if (
    knowledge.planning &&
    ['price', 'duration', 'treatment', 'explanation'].includes(resolution.intent)
  ) {
    lines.push(
      `${translate('labels.results')}: ${
        locale === 'en' ? knowledge.planning.results : translate('answers.results')
      }`
    );
    lines.push(
      `${translate('labels.recovery')}: ${
        locale === 'en' ? knowledge.planning.downtime : translate('answers.downtime')
      }`
    );
  }

  if (lines.length === 0) lines.push(translate('answers.unknown'));

  const actions: GuideAction[] = [];
  const needsStaff = resolution.requiresHuman || [
    'cancellation',
    'reschedule',
    'medical',
    'brand',
    'unknown',
  ].includes(resolution.intent);

  if (resolution.intent === 'emergency') {
    return { lines, actions };
  }

  if (needsStaff) {
    actions.push({
      kind: 'whatsapp',
      href: createWhatsAppHref(question),
      external: true,
    });
  } else if (isGeneralPriceQuestion) {
    actions.push({ kind: 'prices', href: '/pricelist' });
  } else if (
    resolution.topicId ||
    ['booking', 'treatment', 'price', 'duration', 'results', 'downtime', 'location', 'hours', 'languages', 'payment'].includes(
      resolution.intent
    )
  ) {
    actions.push({ kind: 'book', href: '/book' });
  }

  const guideHref = knowledge.treatmentHref ?? knowledge.relatedArticleHref;
  if (guideHref && actions.length < 2) {
    actions.push({ kind: 'guide', href: guideHref });
  } else if (
    actions.length < 2 &&
    ['unknown', 'treatment'].includes(resolution.intent)
  ) {
    actions.push({ kind: 'library', href: knowledge.libraryHref });
  }

  if (isGeneralPriceQuestion && actions.length < 2) {
    actions.push({ kind: 'book', href: '/book' });
  }

  return { lines, actions };
}

export function SalonGuideWidget({ locale }: { locale: Locale }) {
  const t = useTranslations('chatbot');
  const { showBanner } = useConsent();
  const titleId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const nextMessageId = useRef(1);
  const [isOpen, setIsOpen] = useState(false);
  const [showInvitation, setShowInvitation] = useState(true);
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<GuideMessage[]>([
    {
      id: 0,
      role: 'guide',
      lines: [t('welcome'), t('disclaimer')],
    },
  ]);

  const openGuide = () => {
    setIsOpen(true);
    setShowInvitation(false);
    trackEvent('salon_guide_open');
  };

  const closeGuide = (returnFocus = false) => {
    setIsOpen(false);
    setShowInvitation(false);
    if (returnFocus) requestAnimationFrame(() => launcherRef.current?.focus());
  };

  const askQuestion = (value: string, guidedIntent?: ChatbotIntent) => {
    const cleanQuestion = value.trim();
    if (!cleanQuestion) return;

    const resolution = resolveSalonQuestion(cleanQuestion, locale, guidedIntent);
    const knowledge = getSalonChatbotKnowledge(resolution, locale);
    const answer = buildGuideAnswer(cleanQuestion, locale, resolution, knowledge, t);
    const userId = nextMessageId.current++;
    const guideId = nextMessageId.current++;

    setMessages((current) => [
      ...current,
      { id: userId, role: 'user', lines: [cleanQuestion] },
      { id: guideId, role: 'guide', ...answer },
    ]);
    setQuestion('');
    trackEvent('salon_guide_question', {
      intent: resolution.intent,
      topic: resolution.topicId ?? 'unmatched',
      handoff: resolution.requiresHuman,
    });
  };

  const submitQuestion = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    askQuestion(question);
  };

  useEffect(() => {
    if (!isOpen) return;
    inputRef.current?.focus();

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeGuide(true);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  useEffect(() => {
    const transcript = transcriptRef.current;
    if (!transcript) return;
    const latestAnswer = transcript.lastElementChild as HTMLElement | null;
    const answerTop = latestAnswer
      ? Math.max(0, latestAnswer.offsetTop - transcript.offsetTop)
      : transcript.scrollHeight;
    if (typeof transcript.scrollTo === 'function') {
      transcript.scrollTo({ top: answerTop, behavior: 'smooth' });
    } else {
      transcript.scrollTop = answerTop;
    }
  }, [messages]);

  return (
    <div
      className={cn(
        'fixed z-[60] flex items-end gap-3 ltr:right-4 rtl:left-4 lg:ltr:right-6 lg:rtl:left-6',
        showBanner ? 'bottom-52 lg:bottom-36' : 'bottom-24 lg:bottom-6'
      )}
    >
      {isOpen ? (
        <section
          role="dialog"
          aria-modal="false"
          aria-labelledby={titleId}
          className="absolute bottom-16 flex max-h-[calc(100dvh-7rem)] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden border border-border bg-background shadow-2xl ltr:right-0 rtl:left-0"
        >
          <header className="flex min-h-16 items-center gap-3 bg-primary px-4 py-3 text-primary-foreground">
            <span className="flex size-10 shrink-0 items-center justify-center border border-white/25" aria-hidden="true">
              <MessageCircleQuestion className="size-5" />
            </span>
            <div className="min-w-0 flex-1">
              <h2 id={titleId} className="text-base font-medium leading-tight">
                {t('title')}
              </h2>
              <p className="mt-0.5 text-xs text-white/75">{t('status')}</p>
            </div>
            <button
              type="button"
              onClick={() => closeGuide()}
              className="flex size-11 items-center justify-center border border-white/25 text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label={t('close')}
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </header>

          <div
            ref={transcriptRef}
            role="log"
            aria-live="polite"
            aria-label={t('transcriptLabel')}
            className="custom-scrollbar min-h-0 flex-1 space-y-3 overflow-y-auto bg-secondary/45 p-4"
          >
            {messages.map((message) => (
              <article
                key={message.id}
                className={cn(
                  'max-w-[92%] border px-3 py-2.5 text-sm leading-relaxed',
                  message.role === 'user'
                    ? 'ms-auto border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-background text-foreground'
                )}
              >
                {message.lines.map((line, index) => (
                  <p key={`${message.id}-${index}`} className={index === 0 ? 'font-medium' : 'mt-2 text-muted-foreground'}>
                    {line}
                  </p>
                ))}
                {message.actions && message.actions.length > 0 ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {message.actions.map((action) => {
                      const label = t(`actions.${action.kind}`);
                      const className = 'inline-flex min-h-11 items-center gap-1.5 border border-primary px-3 py-2 text-xs font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring';

                      if (action.external) {
                        return (
                          <a
                            key={action.kind}
                            href={action.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={className}
                            onClick={() => trackContactClick('whatsapp')}
                          >
                            {label}
                            <ArrowUpRight className="size-3.5" aria-hidden="true" />
                          </a>
                        );
                      }

                      return (
                        <Link
                          key={action.kind}
                          href={action.href}
                          className={className}
                          onClick={() => {
                            if (action.kind === 'book') trackBookingClick('salon_guide');
                          }}
                        >
                          {label}
                          {action.kind === 'library' || action.kind === 'guide' || action.kind === 'prices' ? (
                            <BookOpen className="size-3.5" aria-hidden="true" />
                          ) : null}
                        </Link>
                      );
                    })}
                  </div>
                ) : null}
              </article>
            ))}
          </div>

          <div className="shrink-0 border-t border-border bg-background p-3">
            <p className="mb-2 text-xs font-medium text-muted-foreground">{t('quickLabel')}</p>
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {(['lipPrice', 'foreheadBotoxPrice', 'choose', 'recovery'] as const).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => askQuestion(t(`prompts.${key}`))}
                  className="min-h-11 shrink-0 border border-border bg-background px-3 py-2 text-xs font-medium transition hover:border-primary hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {t(`quick.${key}`)}
                </button>
              ))}
            </div>
            <form onSubmit={submitQuestion} className="flex gap-2">
              <label htmlFor={`${titleId}-question`} className="sr-only">
                {t('inputLabel')}
              </label>
              <input
                ref={inputRef}
                id={`${titleId}-question`}
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                placeholder={t('placeholder')}
                autoComplete="off"
                className="min-h-11 min-w-0 flex-1 border border-input bg-background px-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/25"
              />
              <button
                type="submit"
                disabled={!question.trim()}
                className="flex size-11 shrink-0 items-center justify-center bg-primary text-primary-foreground transition hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-40"
                aria-label={t('send')}
              >
                <Send className="size-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </section>
      ) : null}

      {showInvitation && !isOpen ? (
        <button
          type="button"
          onClick={openGuide}
          className="max-w-56 border border-border bg-background px-4 py-3 text-start text-sm font-semibold leading-snug text-foreground shadow-xl transition hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          {t('invite')}
        </button>
      ) : null}

      <button
        ref={launcherRef}
        type="button"
        onClick={() => (isOpen ? closeGuide() : openGuide())}
        className="relative flex size-14 shrink-0 items-center justify-center bg-primary text-primary-foreground shadow-xl transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring motion-reduce:hover:scale-100"
        aria-label={isOpen ? t('launcherClose') : t('launcherOpen')}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="size-6" aria-hidden="true" /> : <MessageCircleQuestion className="size-6" aria-hidden="true" />}
      </button>
    </div>
  );
}
