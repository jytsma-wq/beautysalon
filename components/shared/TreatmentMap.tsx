'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Zone {
  id: string;
  label: string;
  treatments: string[];
  x: number; // % from left
  y: number; // % from top
}

const zones: Zone[] = [
  { id: 'forehead', label: 'Forehead',   treatments: ['Botox – Forehead', 'Chemical Peel'],         x: 50, y: 12 },
  { id: 'eyes',     label: 'Eyes',       treatments: ['Botox – Crow\'s Feet', 'Under-eye Filler'],  x: 37, y: 22 },
  { id: 'lips',     label: 'Lips',       treatments: ['Lip Filler – Russian', 'Lip Blush PMU'],     x: 50, y: 40 },
  { id: 'cheeks',   label: 'Cheeks',     treatments: ['Cheek Filler', 'HydraFacial'],               x: 30, y: 32 },
  { id: 'jaw',      label: 'Jawline',    treatments: ['Jawline Contouring'],                        x: 50, y: 55 },
  { id: 'brows',    label: 'Brows',      treatments: ['Brow Lamination', 'Microblading'],           x: 66, y: 22 },
];

export default function TreatmentMap({ locale = 'en' }: { locale?: string }) {
  const [active, setActive] = useState<Zone | null>(null);

  return (
    <div className="relative w-full max-w-xs mx-auto">
      {/* Silhouette placeholder */}
      <div
        className="relative w-full"
        style={{ paddingBottom: '140%' }}
      >
        {/* Simple face outline SVG */}
        <svg
          viewBox="0 0 200 280"
          className="absolute inset-0 w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="100" cy="120" rx="70" ry="90" stroke="rgba(201,169,110,0.2)" strokeWidth="1.5" />
          <ellipse cx="100" cy="240" rx="40" ry="30" stroke="rgba(201,169,110,0.1)" strokeWidth="1" />
          <line x1="60" y1="210" x2="75" y2="240" stroke="rgba(201,169,110,0.1)" strokeWidth="1" />
          <line x1="140" y1="210" x2="125" y2="240" stroke="rgba(201,169,110,0.1)" strokeWidth="1" />
        </svg>

        {/* Zone markers */}
        {zones.map((zone) => (
          <button
            key={zone.id}
            onClick={() => setActive(active?.id === zone.id ? null : zone)}
            className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-200 hover:scale-125"
            style={{
              left: `${zone.x}%`,
              top:  `${zone.y}%`,
              background: active?.id === zone.id ? '#C9A96E' : 'rgba(201,169,110,0.3)',
              borderColor: active?.id === zone.id ? '#f5e6d0' : '#C9A96E',
              boxShadow: active?.id === zone.id ? '0 0 12px rgba(201,169,110,0.6)' : 'none',
            }}
            aria-label={zone.label}
          />
        ))}
      </div>

      {/* Tooltip panel */}
      {active && (
        <div
          className="mt-4 p-4 rounded-2xl border border-amber-400/20"
          style={{ background: 'rgba(201,169,110,0.05)' }}
        >
          <h4 className="text-amber-400 font-semibold text-sm mb-2">{active.label} Treatments</h4>
          <ul className="space-y-1">
            {active.treatments.map((t) => (
              <li key={t}>
                <Link
                  href={`/${locale}/contact?service=${encodeURIComponent(t)}`}
                  className="text-stone-400 text-xs hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-amber-400/50 flex-shrink-0" />
                  {t}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
