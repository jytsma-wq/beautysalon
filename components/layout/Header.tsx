'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Menu, X, Sparkles, Globe, Phone, Calendar } from 'lucide-react';
import { useLocale } from '@/hooks/useLocale';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale } = useLocale();
  const pathname = usePathname();
  const t = useTranslations('nav');

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const navLinks = [
    { href: '/treatments', label: t('treatments') },
    { href: '/specialists', label: t('specialists') },
    { href: '/about', label: t('about') },
    { href: '/contact', label: t('contact') },
  ];

  // International link with special styling
  const internationalLink = { href: '/international', label: t('international') };

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(13,10,8,0.98)'
          : 'rgba(13,10,8,0.85)',
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(12px)',
        borderBottom: scrolled 
          ? '1px solid rgba(201, 169, 110, 0.15)' 
          : '1px solid rgba(255,255,255,0.03)',
      }}
    >
      {/* Top Bar - French Design Elegance */}
      <div 
        className="hidden lg:block border-b transition-all duration-500"
        style={{ 
          borderColor: scrolled ? 'rgba(201, 169, 110, 0.1)' : 'transparent',
          background: scrolled ? 'rgba(201, 169, 110, 0.03)' : 'transparent'
        }}
      >
        <div className="container mx-auto max-w-7xl px-6 h-10 flex items-center justify-between">
          {/* Left - Phone */}
          <a 
            href="tel:+995599123456"
            className="flex items-center gap-2 text-stone-500 hover:text-gold-400 transition-colors text-xs tracking-wide"
          >
            <Phone size={12} />
            <span>+995 599 123 456</span>
          </a>

          {/* Right - Language Switcher */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto max-w-7xl px-6 h-16 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-3 group">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
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
            <span className="text-stone-600 text-[10px] tracking-[0.2em] uppercase hidden sm:block">
              Aesthetic Clinic
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - Center */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const href = `/${locale}${link.href}`;
            const active = pathname === href;
            return (
              <Link
                key={link.href}
                href={href}
                className={`relative px-5 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full ${
                  active
                    ? 'text-gold-400'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
                style={active ? { background: 'rgba(201, 169, 110, 0.1)' } : {}}
              >
                {link.label}
                {active && (
                  <span 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: '#C9A96E' }}
                  />
                )}
              </Link>
            );
          })}
          
          {/* International Link - Galderma Style */}
          <Link
            href={`/${locale}${internationalLink.href}`}
            className={`flex items-center gap-2 ml-4 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              pathname === `/${locale}${internationalLink.href}`
                ? 'bg-gold-400/15 text-gold-400 border border-gold-400/30'
                : 'bg-transparent text-stone-400 border border-stone-700 hover:border-gold-400/40 hover:text-gold-300 hover:bg-gold-400/5'
            }`}
          >
            <Globe size={16} />
            {internationalLink.label}
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Mobile Language Switcher */}
          <div className="lg:hidden">
            <LanguageSwitcher />
          </div>

          {/* Book Now Button - Elegant */}
          <Link
            href={`/${locale}/contact`}
            className="hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold tracking-wide text-stone-900 transition-all duration-300 hover:scale-105"
            style={{ 
              background: 'linear-gradient(135deg, #C9A96E, #a07840)',
              boxShadow: '0 4px 16px rgba(201, 169, 110, 0.25)'
            }}
          >
            <Calendar size={16} />
            {t('bookNow')}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2.5 rounded-xl text-stone-400 hover:text-stone-200 hover:bg-stone-800/50 transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer - Galderma Style */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t"
          style={{ 
            background: 'rgba(13,10,8,0.98)',
            borderColor: 'rgba(201, 169, 110, 0.1)'
          }}
        >
          <div className="container mx-auto max-w-7xl px-6 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                className={`block px-4 py-3 rounded-xl text-base transition-all ${
                  pathname === `/${locale}${link.href}`
                    ? 'text-gold-400 bg-gold-400/10'
                    : 'text-stone-300 hover:text-stone-100 hover:bg-stone-800/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* International link in mobile */}
            <Link
              href={`/${locale}${internationalLink.href}`}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl text-base ${
                pathname === `/${locale}${internationalLink.href}`
                  ? 'text-gold-400 bg-gold-400/10'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Globe size={18} />
              {internationalLink.label}
            </Link>

            {/* Divider */}
            <div className="h-px bg-stone-800 my-4" />

            {/* Phone in mobile */}
            <a 
              href="tel:+995599123456"
              className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:text-stone-200 transition-colors"
            >
              <Phone size={16} />
              <span>+995 599 123 456</span>
            </a>

            {/* Book Now in mobile */}
            <Link
              href={`/${locale}/contact`}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-base font-semibold text-stone-900 mt-4 transition-all"
              style={{ background: 'linear-gradient(135deg, #C9A96E, #a07840)' }}
            >
              <Calendar size={18} />
              {t('bookNow')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
