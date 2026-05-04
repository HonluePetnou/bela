import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Wrench } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Nav');
  const locale = useLocale();
  const base = `/${locale}`;

  const quickLinks = [
    { href: base, label: tNav('home') },
    { href: `${base}/services`, label: tNav('services') },
    { href: `${base}/about`, label: tNav('about') },
    { href: `${base}/gallery`, label: tNav('gallery') },
    { href: `${base}/contact`, label: tNav('contact') },
    { href: `${base}/reserver`, label: tNav('book') },
  ];

  const services = [
    locale === 'fr' ? 'Vidange & Filtres' : 'Oil & Filter Change',
    locale === 'fr' ? 'Diagnostic Électronique' : 'Electronic Diagnostics',
    locale === 'fr' ? 'Réparation Moteur' : 'Engine Repair',
    locale === 'fr' ? 'Climatisation' : 'Air Conditioning',
    locale === 'fr' ? 'Carrosserie' : 'Bodywork',
    locale === 'fr' ? 'Pneumatiques' : 'Tyres',
  ];

  return (
    <footer className="bg-[#080c10] border-t border-white/5">
      {/* Main footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-5">
            <Link href={base} className="flex items-center gap-2.5 group w-fit">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0065CA] to-[#0052a3] flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-sm leading-none tracking-wide">BELA MBII</div>
                <div className="text-[#F97316] text-[10px] font-semibold tracking-[0.2em] uppercase leading-none mt-0.5">GARAGE</div>
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t('description')}
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, name: 'facebook', href: '#' },
                { icon: Instagram, name: 'instagram', href: '#' },
                { icon: Twitter, name: 'twitter', href: '#' },
              ].map(({ icon: Icon, name, href }) => (
                <a
                  key={name}
                  href={href}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#0065CA] hover:border-[#0065CA] transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h5 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
              {t('quick_links')}
            </h5>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 text-sm hover:text-[#F97316] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#0065CA] group-hover:bg-[#F97316] transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
              {t('services')}
            </h5>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href={`${base}/services`}
                    className="text-gray-500 text-sm hover:text-[#F97316] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#0065CA] group-hover:bg-[#F97316] transition-colors"></span>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
              {t('contact')}
            </h5>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-md bg-[#0065CA]/10 border border-[#0065CA]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0065CA]" />
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Busumbii Entrance Mile 3,<br />Limbe, Cameroun
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-md bg-[#0065CA]/10 border border-[#0065CA]/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 text-[#0065CA]" />
                </div>
                <a href="tel:+237690208485" className="text-gray-500 text-sm hover:text-white transition-colors">
                  (+237) 690 208 485
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-md bg-[#0065CA]/10 border border-[#0065CA]/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 text-[#0065CA]" />
                </div>
                <a href="mailto:info@belambiigarage.com" className="text-gray-500 text-sm hover:text-white transition-colors">
                  info@belambiigarage.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-md bg-[#F97316]/10 border border-[#F97316]/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-3.5 h-3.5 text-[#F97316]" />
                </div>
                <p className="text-gray-500 text-sm">{t('hours_value')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">{t('copyright')}</p>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <Link href={`${base}/mentions-legales`} className="hover:text-gray-400 transition-colors">
              {t('legal')}
            </Link>
            <span>·</span>
            <span>{t('made_by')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
