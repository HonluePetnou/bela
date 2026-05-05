'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import {
  Wrench, Menu, X, User, LogOut, CalendarCheck, Clock, Phone, Mail
} from 'lucide-react';

export default function Header() {
  const { data: session } = useSession();
  const t = useTranslations('Nav');
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Detect locale from pathname
  const locale = pathname.startsWith('/en') ? 'en' : 'fr';
  const basePath = `/${locale}`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: basePath, label: t('home') },
    { href: `${basePath}/services`, label: t('services') },
    { href: `${basePath}/about`, label: t('about') },
    { href: `${basePath}/gallery`, label: t('gallery') },
    { href: `${basePath}/contact`, label: t('contact') },
  ];

  const isActive = (href: string) => {
    if (href === basePath) return pathname === basePath || pathname === `${basePath}/`;
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0d1117]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        {/* Top bar */}
        <div className={`border-b border-white/5 transition-all duration-300 ${scrolled ? 'hidden' : 'block'}`}>
          <div className="container-custom">
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-6 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#F97316]" />
                  {locale === 'fr' ? 'Lun–Sam : 10h00–17h30' : 'Mon–Sat: 10:00–17:30'}
                </span>
                <a href="tel:+237690208485" className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#0065CA]" />
                  (+237) 690 208 485
                </a>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <a href="mailto:info@belambiigarage.com" className="flex items-center gap-1.5 hover:text-white transition-colors hidden sm:flex">
                  <Mail className="w-3.5 h-3.5 text-gray-500" />
                  info@belambiigarage.com
                </a>
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href={basePath} className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Image src="/logo/BELA MBII GARAGE.svg" alt="Bela Mbii Garage Logo" width={40} height={40} className="object-contain" />
              </div>
              <div className="hidden sm:block">
                <div className="text-white font-bold text-sm leading-none tracking-wide">BELA MBII</div>
                <div className="text-[#F97316] text-[10px] font-semibold tracking-[0.2em] uppercase leading-none mt-0.5">GARAGE</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? 'text-white bg-white/8'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="hidden lg:flex items-center gap-3">
              {scrolled && <LanguageSwitcher />}

              {session ? (
                <div className="flex items-center gap-2">
                  <Link
                    href={`${basePath}/mon-compte`}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                  >
                    <User className="w-4 h-4" />
                    <span>{session.user?.name?.split(' ')[0]}</span>
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="p-2 rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-all"
                    title={t('logout')}
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <Link
                  href={`${basePath}/connexion`}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                >
                  <User className="w-4 h-4" />
                  {t('login')}
                </Link>
              )}

              <Link
                href={`${basePath}/reserver`}
                className="btn-accent text-sm py-2.5 px-5 flex items-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                {t('book')}
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-[#0d1117]/98 backdrop-blur-xl border-t border-white/5 px-4 py-4 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.href)
                    ? 'text-white bg-white/8 border border-white/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-white/5 flex flex-col gap-2">
              {session ? (
                <>
                  <Link
                    href={`${basePath}/mon-compte`}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                  >
                    <User className="w-4 h-4" />
                    {t('account')}
                  </Link>
                  <button
                    onClick={() => { signOut(); setMobileOpen(false); }}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm text-red-400 hover:bg-red-500/10 transition-all"
                  >
                    <LogOut className="w-4 h-4" />
                    {t('logout')}
                  </button>
                </>
              ) : (
                <Link
                  href={`${basePath}/connexion`}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                >
                  <User className="w-4 h-4" />
                  {t('login')}
                </Link>
              )}
              <Link
                href={`${basePath}/reserver`}
                onClick={() => setMobileOpen(false)}
                className="btn-accent text-sm py-3 flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                {t('book')}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className={scrolled ? 'h-16' : 'h-0'} />
    </>
  );
}
