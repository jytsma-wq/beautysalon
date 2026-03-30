'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { ChevronDown, Globe } from 'lucide-react';
import { useLocale } from '@/hooks/useLocale';
import { locales, LOCALE_NAMES } from '@/lib/constants';
import type { Locale } from '@/types/types';

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { locale } = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  function switchLocale(next: Locale) {
    // Replace the current locale segment in the path
    const segments = pathname.split('/');
    segments[1] = next;
    router.push(segments.join('/'));
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-stone-400 hover:text-stone-200 text-xs transition-colors border border-stone-800 hover:border-stone-700"
      >
        <Globe size={12} />
        <span className="uppercase tracking-wider">{locale}</span>
        <ChevronDown size={10} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 w-36 rounded-xl border border-stone-800 shadow-xl overflow-hidden z-50"
          style={{ background: 'rgba(17,16,9,0.98)', backdropFilter: 'blur(20px)' }}
        >
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => switchLocale(l)}
              className={`w-full text-left px-4 py-2.5 text-xs flex items-center justify-between transition-colors ${
                l === locale
                  ? 'text-amber-400 bg-amber-400/5'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-white/5'
              }`}
            >
              <span>{LOCALE_NAMES[l]}</span>
              <span className="text-stone-600 uppercase">{l}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
