import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        accent:  ['var(--font-cinzel)', 'serif'],
        body:    ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: {
          100: '#fdf8f0',
          200: '#f5e6d0',
          300: '#e8c98a',
          400: '#C9A96E',
          500: '#a07840',
          600: '#7a5a2e',
        },
        silk: {
          50:  '#FEFBF9',
          100: '#FDF6F2',
          200: '#FAEBE0',
          300: '#F5DBCC',
          500: '#E6A98D',
          700: '#C66B4A',
          900: '#854836',
        },
        surface: {
          0: '#0d0a08',
          1: '#111009',
          2: '#160f0b',
          3: '#1a120e',
        },
      },
      fontSize: {
        // Hero sizes
        'hero-lg': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.15', letterSpacing: '-0.03em' }],
        'hero-md': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'hero-sm': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        
        // Display sizes
        'display-1': ['clamp(2.25rem, 4vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'display-2': ['clamp(1.875rem, 3.5vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'display-3': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.35', letterSpacing: '0' }],
        
        // Body sizes
        'body-xl': ['1.25rem', { lineHeight: '1.75' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-md': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'body-xs': ['0.8125rem', { lineHeight: '1.6' }],
        
        // UI sizes
        'button': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.025em' }],
        'label': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.05em' }],
        'caption': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.025em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'gold': '0 0 40px rgba(201, 169, 110, 0.15)',
        'soft': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'elegant': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'glow': '0 0 30px rgba(201, 169, 110, 0.2)',
      },
      animation: {
        'float':       'float 4s ease-in-out infinite',
        'pulse-glow':  'pulse-glow 2s ease-in-out infinite',
        'shimmer':     'shimmer 3s linear infinite',
        'marquee':     'marquee 30s linear infinite',
        'fade-in':     'fadeIn 0.5s ease-out',
        'slide-up':    'slideUp 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201,169,110,0.2)' },
          '50%':      { boxShadow: '0 0 40px rgba(201,169,110,0.5)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      transitionTimingFunction: {
        'elegant': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
