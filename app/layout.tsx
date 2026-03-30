import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans, Cinzel } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cinzel',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Silk Beauty Salon Batumi',
    default: 'Silk Beauty Salon | Premium Aesthetic Medicine & Beauty in Batumi, Georgia',
  },
  description:
    'Silk Beauty Salon in Batumi — world-class injectables, lash extensions, microblading, hair, nails & skincare by certified international specialists.',
  keywords: [
    'beauty salon Batumi',
    'lip fillers Batumi',
    'botox Batumi',
    'Russian volume lashes Batumi',
    'microblading Batumi',
    'aesthetic medicine Georgia',
    'HydraFacial Batumi',
    'nail salon Batumi',
    'hair salon Batumi',
  ],
  openGraph: {
    title: 'Silk Beauty Salon | Batumi, Georgia',
    description: 'Premium aesthetic medicine, injectables, and luxury beauty services in Batumi.',
    type: 'website',
    locale: 'en_US',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className={`${cormorant.variable} ${dmSans.variable} ${cinzel.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-[#0d0a08] text-stone-400 font-sans">
        {children}
      </body>
    </html>
  );
}
