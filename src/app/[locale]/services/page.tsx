import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import {
  CalendarCheck, Clock, ChevronRight, Phone,
  Droplets, ClipboardCheck, Disc3, Activity,
  Cog, Cpu, Zap, Car, Paintbrush, Hammer,
  Gauge, Square, Wind, Code2, AlertTriangle, Truck,
  type LucideIcon
} from 'lucide-react';

type ServiceKey = 'vidange' | 'revision' | 'freinage' | 'amortisseurs' | 'moteur' | 'diagnostic' | 'electricite' | 'carrosserie' | 'peinture' | 'debosselage' | 'pneus' | 'parebrise' | 'clim' | 'reprogrammation' | 'depannage' | 'remorquage';

const SERVICES: { key: ServiceKey; icon: LucideIcon; color: string; bg: string; category: string }[] = [
  // Maintenance
  { key: 'vidange',      icon: Droplets,       color: 'text-blue-400',   bg: 'bg-blue-500/10 border-blue-500/20',     category: 'maintenance' },
  { key: 'revision',     icon: ClipboardCheck, color: 'text-green-400',  bg: 'bg-green-500/10 border-green-500/20',   category: 'maintenance' },
  { key: 'freinage',     icon: Disc3,          color: 'text-red-400',    bg: 'bg-red-500/10 border-red-500/20',       category: 'maintenance' },
  { key: 'amortisseurs', icon: Activity,       color: 'text-yellow-400', bg: 'bg-yellow-500/10 border-yellow-500/20', category: 'maintenance' },
  // Repair
  { key: 'moteur',       icon: Cog,            color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20', category: 'repair' },
  { key: 'diagnostic',   icon: Cpu,            color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20', category: 'repair' },
  { key: 'electricite',  icon: Zap,            color: 'text-yellow-300', bg: 'bg-yellow-400/10 border-yellow-400/20', category: 'repair' },
  // Body
  { key: 'carrosserie',  icon: Car,            color: 'text-sky-400',    bg: 'bg-sky-500/10 border-sky-500/20',       category: 'body' },
  { key: 'peinture',     icon: Paintbrush,     color: 'text-pink-400',   bg: 'bg-pink-500/10 border-pink-500/20',     category: 'body' },
  { key: 'debosselage',  icon: Hammer,         color: 'text-amber-400',  bg: 'bg-amber-500/10 border-amber-500/20',   category: 'body' },
  // Specialized
  { key: 'pneus',        icon: Gauge,          color: 'text-emerald-400',bg: 'bg-emerald-500/10 border-emerald-500/20',category: 'specialized' },
  { key: 'parebrise',    icon: Square,         color: 'text-cyan-300',   bg: 'bg-cyan-400/10 border-cyan-400/20',     category: 'specialized' },
  { key: 'clim',         icon: Wind,           color: 'text-cyan-400',   bg: 'bg-cyan-500/10 border-cyan-500/20',     category: 'specialized' },
  { key: 'reprogrammation', icon: Code2,       color: 'text-violet-400', bg: 'bg-violet-500/10 border-violet-500/20', category: 'specialized' },
  // Emergency
  { key: 'depannage',    icon: AlertTriangle,  color: 'text-[#F97316]',  bg: 'bg-orange-500/10 border-orange-500/20', category: 'emergency' },
  { key: 'remorquage',   icon: Truck,          color: 'text-[#F97316]',  bg: 'bg-orange-500/10 border-orange-500/20', category: 'emergency' },
];

const CATEGORIES = ['maintenance', 'repair', 'body', 'specialized', 'emergency'] as const;

export default function ServicesPage() {
  const t = useTranslations('Services');
  const locale = useLocale();
  const base = `/${locale}`;

  return (
    <div className="min-h-screen pt-28 pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#161b22] border-b border-white/5">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0065CA]/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom py-14 lg:py-18 relative z-10">
          <div className="section-tag">{t('tag')}</div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mt-2 mb-4">{t('hero_title')}</h1>
          <p className="text-gray-400 max-w-2xl text-lg">{t('hero_subtitle')}</p>
        </div>
      </section>

      {/* Services by category */}
      <div className="container-custom mt-14 space-y-14">
        {CATEGORIES.map((category) => {
          const categoryServices = SERVICES.filter((s) => s.category === category);
          return (
            <div key={category}>
              {/* Category header */}
              <div className="flex items-center gap-3 mb-7">
                <div className="w-8 h-0.5 bg-[#F97316]" />
                <h2 className="text-lg font-bold text-white uppercase tracking-wider">
                  {t(`categories.${category}`)}
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryServices.map((service) => {
                  const Icon = service.icon;
                  const name = t(`services_list.${service.key}.name`);
                  const desc = t(`services_list.${service.key}.desc`);
                  const duration = t(`services_list.${service.key}.duration`);
                  const isEmergency = service.category === 'emergency';

                  return (
                    <div key={service.key} className="service-card p-6 flex flex-col group">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 flex-shrink-0 transition-all group-hover:scale-110 ${service.bg}`}>
                        <Icon className={`w-5 h-5 ${service.color}`} />
                      </div>

                      <h3 className="text-white font-bold text-base mb-2">{name}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{desc}</p>

                      {/* Duration */}
                      <div className="flex items-center gap-2 mb-4">
                        <Clock className="w-3.5 h-3.5 text-[#F97316]" />
                        <span className="text-xs text-gray-400">{duration}</span>
                      </div>

                      {/* CTA */}
                      {isEmergency ? (
                        <a href="tel:+237690208485" className="flex items-center gap-2 text-xs font-semibold text-[#F97316] hover:text-orange-400 transition-colors">
                          <Phone className="w-3.5 h-3.5" />
                          (+237) 690 208 485
                        </a>
                      ) : (
                        <Link href={`${base}/reserver`} className="flex items-center gap-1.5 text-xs font-semibold text-[#0065CA] hover:text-blue-400 transition-colors group/link">
                          <CalendarCheck className="w-3.5 h-3.5" />
                          {t('book_service')}
                          <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA bottom */}
      <div className="container-custom mt-16">
        <div className="cta-band rounded-2xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black text-white mb-2">
                {locale === 'fr' ? "Besoin d'une intervention ?" : 'Need a service?'}
              </h3>
              <p className="text-blue-200 text-sm">
                {locale === 'fr' ? 'Réservez votre créneau en ligne en moins de 5 minutes.' : 'Book your slot online in less than 5 minutes.'}
              </p>
            </div>
            <Link href={`${base}/reserver`} className="btn-accent whitespace-nowrap">
              <CalendarCheck className="w-4 h-4" />
              {locale === 'fr' ? 'Réserver maintenant' : 'Book now'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
