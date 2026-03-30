import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Book a Consultation',
    desc: 'Fill in our booking form or WhatsApp us. We confirm within 1 hour.',
  },
  {
    number: '02',
    title: 'Meet Your Specialist',
    desc: 'Your expert reviews your goals, answers questions, and designs a personal treatment plan.',
  },
  {
    number: '03',
    title: 'The Treatment',
    desc: 'Relax in our luxury suite while your specialist works their magic.',
  },
  {
    number: '04',
    title: 'Aftercare & Follow-up',
    desc: 'We send aftercare instructions and check in 48 hours later to ensure you love your results.',
  },
];

export default function VipJourney({ locale }: { locale: string }) {
  return (
    <section
      className="px-6 py-24"
      style={{ background: '#0d0a08' }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-amber-400/60 text-xs tracking-[0.3em] uppercase mb-4">Your Experience</p>
            <h2
              className="font-display font-bold mb-6"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                background: 'linear-gradient(135deg, #f5e6d0, #C9A96E)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              The Silk
              <br />VIP Journey
            </h2>
            <p className="text-stone-400 leading-relaxed mb-8">
              From first contact to aftercare, every step is crafted for a seamless, luxurious experience.
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-stone-900 transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #C9A96E, #a07840)' }}
            >
              Start Your Journey <ArrowRight size={16} />
            </Link>
          </div>

          {/* Steps */}
          <div className="space-y-5">
            {steps.map((s, i) => (
              <div
                key={s.number}
                className="flex gap-5 p-5 rounded-2xl border border-stone-800 transition-colors hover:border-amber-400/20"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-accent font-bold text-sm"
                  style={{
                    background: 'linear-gradient(135deg, rgba(201,169,110,0.2), rgba(160,120,64,0.1))',
                    color: '#C9A96E',
                    border: '1px solid rgba(201,169,110,0.2)',
                  }}
                >
                  {s.number}
                </div>
                <div>
                  <h3 className="text-stone-200 font-semibold mb-1 text-sm">{s.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
