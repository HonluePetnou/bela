import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  Wrench, Zap, ShieldCheck, CalendarCheck, Phone,
  ArrowRight, Star, ChevronRight, Clock, CheckCircle2,
  Droplets, Cpu, Cog, Gauge, Paintbrush, Wind, type LucideIcon
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'BELA MBII GARAGE — Expertise Automobile à Limbe, Cameroun',
  description: 'Maintenance, réparation et diagnostic électronique à Limbe. Réservez votre créneau en ligne 24h/24.',
};

const FEATURED_SERVICES: { icon: LucideIcon; color: string; bg: string; titleFr: string; titleEn: string; descFr: string; descEn: string; slug: string }[] = [
  {
    icon: Droplets,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
    titleFr: 'Vidange & Entretien',
    titleEn: 'Oil Change & Service',
    descFr: 'Vidange huile, filtres, révision complète selon barème constructeur.',
    descEn: 'Oil change, filters, full service per manufacturer schedule.',
    slug: 'vidange',
  },
  {
    icon: Cpu,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
    titleFr: 'Diagnostic Électronique',
    titleEn: 'Electronic Diagnostics',
    descFr: 'Lecture codes défauts OBD, expertise calculateurs, identification précise des pannes.',
    descEn: 'OBD fault code reading, ECU expertise, precise fault identification.',
    slug: 'diagnostic',
  },
  {
    icon: Cog,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10 border-orange-500/20',
    titleFr: 'Réparation Moteur',
    titleEn: 'Engine Repair',
    descFr: 'Culasse, distribution, joints, révision moteur toutes marques.',
    descEn: 'Cylinder head, timing, gaskets, engine overhaul for all makes.',
    slug: 'moteur',
  },
  {
    icon: Gauge,
    color: 'text-green-400',
    bg: 'bg-green-500/10 border-green-500/20',
    titleFr: 'Pneumatiques',
    titleEn: 'Tyres',
    descFr: 'Montage, équilibrage, permutation et réparation de crevaison.',
    descEn: 'Fitting, balancing, rotation and puncture repair.',
    slug: 'pneus',
  },
  {
    icon: Paintbrush,
    color: 'text-pink-400',
    bg: 'bg-pink-500/10 border-pink-500/20',
    titleFr: 'Carrosserie & Peinture',
    titleEn: 'Bodywork & Paint',
    descFr: 'Réparation collision, débosselage, retouche et peinture complète.',
    descEn: 'Collision repair, dent removal, touch-up and full respray.',
    slug: 'carrosserie',
  },
  {
    icon: Wind,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/20',
    titleFr: 'Climatisation',
    titleEn: 'Air Conditioning',
    descFr: 'Recharge gaz, diagnostic, remplacement compresseur. Confort assuré.',
    descEn: 'Gas recharge, diagnostics, compressor replacement.',
    slug: 'clim',
  },
];

const TESTIMONIALS = [
  {
    name: 'Brice Nkemdirim',
    vehicle: 'Toyota Corolla 2019',
    rating: 5,
    textFr: '"Service exceptionnel. Mon véhicule a été diagnostiqué et réparé en moins de 2 heures. Techniciens professionnels et transparents sur les travaux effectués."',
    textEn: '"Exceptional service. My vehicle was diagnosed and repaired in less than 2 hours. Professional technicians, transparent about the work done."',
    date: 'Mars 2026',
  },
  {
    name: 'Marie-Claire Epale',
    vehicle: 'Honda CR-V 2021',
    rating: 5,
    textFr: '"J\'ai réservé mon créneau en ligne, rien de plus simple. À mon arrivée, tout était prêt. Qualité des pièces et du travail irréprochable."',
    textEn: '"I booked my slot online — nothing simpler. When I arrived, everything was ready. Irreproachable parts and workmanship quality."',
    date: 'Avril 2026',
  },
  {
    name: 'Patrick Fotso',
    vehicle: 'Mercedes-Benz C200 2020',
    rating: 5,
    textFr: '"Meilleur garage de Limbe. Ils ont identifié un problème que deux autres garages avaient manqué. Travaux garantis et prix justifiés."',
    textEn: '"Best garage in Limbe. They identified a problem two other garages had missed. Guaranteed work and fair prices."',
    date: 'Mai 2026',
  },
];

const GALLERY_IMAGES = [
  { src: '/images/garage/1.jpeg', alt: 'Atelier BELA MBII', span: 'col-span-2 row-span-2' },
  { src: '/images/garage/6.jpeg', alt: 'Équipement diagnostic', span: 'col-span-1 row-span-1' },
  { src: '/images/garage/7.jpeg', alt: 'Travaux carrosserie', span: 'col-span-1 row-span-1' },
  { src: '/images/garage/8.jpeg', alt: 'Réparation mécanique', span: 'col-span-1 row-span-1' },
  { src: '/images/garage/9.jpeg', alt: 'Entretien véhicule', span: 'col-span-1 row-span-1' },
];

export default function Home() {
  const t = useTranslations('Index');
  const locale = useLocale();
  const base = `/${locale}`;

  const whyUsItems = [
    {
      icon: Wrench,
      title: locale === 'fr' ? 'Techniciens Expérimentés' : 'Experienced Technicians',
      desc: locale === 'fr'
        ? 'Notre équipe est composée de mécaniciens qualifiés avec plus de 10 ans d\'expérience sur toutes les marques.'
        : 'Our team consists of qualified mechanics with over 10 years of experience on all makes and models.',
    },
    {
      icon: Zap,
      title: locale === 'fr' ? 'Équipement Moderne' : 'Modern Equipment',
      desc: locale === 'fr'
        ? 'Nous utilisons les derniers outils de diagnostic OBD pour identifier les pannes avec précision et rapidité.'
        : 'We use the latest OBD diagnostic tools to identify faults precisely and quickly.',
    },
    {
      icon: ShieldCheck,
      title: locale === 'fr' ? 'Garantie des Travaux' : 'Guaranteed Workmanship',
      desc: locale === 'fr'
        ? 'Toutes nos interventions sont garanties. Votre satisfaction et votre sécurité sont notre priorité absolue.'
        : 'All our work comes with a guarantee. Your satisfaction and safety are our absolute priority.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-end pb-16 lg:pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/garage/1.jpeg"
            alt="Atelier BELA MBII GARAGE"
            fill
            className="object-cover"
            priority
            quality={85}
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117] via-[#0d1117]/80 to-[#0d1117]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-[#0d1117]/30" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-[#0065CA]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-[#F97316]/5 blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10 w-full">
          <div className="max-w-3xl">
            {/* Tag */}
            <div className="section-tag mb-6 animate-fade-in-up flex items-center gap-2 w-fit">
              <Star className="w-4 h-4 text-[#F97316]" fill="currentColor" />
              {t('hero.tag')}
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.05] animate-fade-in-up delay-100">
              {t('hero.title')}{' '}
              <span className="text-[#F97316] inline-block">{t('hero.title_accent')}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl leading-relaxed animate-fade-in-up delay-200">
              {t('hero.subtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up delay-300">
              <Link href={`${base}/reserver`} className="btn-accent">
                <CalendarCheck className="w-5 h-5" />
                {t('hero.cta_book')}
              </Link>
              <Link href={`${base}/services`} className="btn-outline">
                {t('hero.cta_services')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Quick info pills */}
            <div className="flex flex-wrap gap-3 animate-fade-in-up delay-400">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 backdrop-blur-sm">
                <Clock className="w-4 h-4 text-[#F97316]" />
                {t('hero.open_hours')}
              </div>
              <a href="tel:+237690208485" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 backdrop-blur-sm hover:bg-white/10 transition-all">
                <Phone className="w-4 h-4 text-[#0065CA]" />
                {t('hero.phone')}
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 text-gray-500">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
          <span className="text-[10px] tracking-[0.2em] uppercase rotate-90 origin-center translate-y-4">Scroll</span>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-[#161b22] border-y border-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5 divide-y lg:divide-y-0">
            {[
              { number: t('stats.founded'), label: t('stats.founded_label') },
              { number: t('stats.brands'), label: t('stats.brands_label') },
              { number: t('stats.services'), label: t('stats.services_label') },
              { number: t('stats.satisfaction'), label: t('stats.satisfaction_label') },
            ].map((stat, i) => (
              <div key={i} className="px-8 py-8 text-center">
                <div className="text-4xl lg:text-5xl font-black mb-1" style={{
                  background: i % 2 === 0
                    ? 'linear-gradient(135deg, #fff, #94a3b8)'
                    : 'linear-gradient(135deg, #F97316, #fb923c)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  {stat.number}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="section-tag justify-center">{t('services_section.tag')}</div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              {t('services_section.title')}
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
              {t('services_section.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURED_SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.slug} href={`${base}/services`} className="service-card p-6 group">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 transition-all group-hover:scale-110 ${service.bg}`}>
                    <Icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#0065CA] transition-colors">
                    {locale === 'fr' ? service.titleFr : service.titleEn}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {locale === 'fr' ? service.descFr : service.descEn}
                  </p>
                  <div className="flex items-center gap-1.5 text-[#0065CA] text-xs font-semibold uppercase tracking-wide group-hover:gap-2.5 transition-all">
                    {locale === 'fr' ? 'En savoir plus' : 'Learn more'}
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href={`${base}/services`} className="btn-outline-primary">
              {t('services_section.see_all')}
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="section bg-[#161b22] border-y border-white/5">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Left: text */}
            <div>
              <div className="section-tag">{t('why_us.tag')}</div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
                {t('why_us.title')}
              </h2>
              <p className="text-gray-400 mb-10 leading-relaxed">
                {t('why_us.subtitle')}
              </p>
              <div className="space-y-6">
                {whyUsItems.map(({ icon: Icon, title, desc }, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="w-12 h-12 rounded-xl bg-[#0065CA]/10 border border-[#0065CA]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0065CA] group-hover:border-[#0065CA] transition-all duration-300">
                      <Icon className="w-5 h-5 text-[#0065CA] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href={`${base}/reserver`} className="btn-primary">
                  <CalendarCheck className="w-4 h-4" />
                  {locale === 'fr' ? 'Réserver un créneau' : 'Book a slot'}
                </Link>
              </div>
            </div>

            {/* Right: image mosaic */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-3 h-[480px]">
                <div className="relative rounded-xl overflow-hidden row-span-2">
                  <Image
                    src="/images/garage/2.jpeg"
                    alt="Atelier BELA MBII"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/garage/6.jpeg"
                    alt="Diagnostic électronique"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/garage/7.jpeg"
                    alt="Réparation mécanique"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#0065CA] rounded-xl p-4 shadow-2xl">
                <div className="text-2xl font-black text-white">10+</div>
                <div className="text-blue-200 text-xs uppercase tracking-wide">
                  {locale === 'fr' ? "Ans d'expérience" : 'Years experience'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY PREVIEW ===== */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-tag justify-center">{t('gallery_section.tag')}</div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              {t('gallery_section.title')}
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">{t('gallery_section.subtitle')}</p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 h-[500px]">
            <div className="relative rounded-xl overflow-hidden col-span-2 row-span-2 group">
              <Image src="/images/garage/3.jpeg" alt="Atelier" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="img-overlay" />
            </div>
            <div className="relative rounded-xl overflow-hidden group">
              <Image src="/images/garage/8.jpeg" alt="Garage" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative rounded-xl overflow-hidden group">
              <Image src="/images/garage/9.jpeg" alt="Équipement" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative rounded-xl overflow-hidden group">
              <Image src="/images/garage/10.jpeg" alt="Réparation" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative rounded-xl overflow-hidden group">
              <Image src="/images/garage/11.jpeg" alt="Atelier" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href={`${base}/gallery`} className="btn-outline">
              {locale === 'fr' ? 'Voir toute la galerie' : 'View full gallery'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section bg-[#161b22] border-y border-white/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-tag justify-center">{t('testimonials.tag')}</div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              {t('testimonials.title')}
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">{t('testimonials.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t_, i) => (
              <div key={i} className="testimonial-card">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t_.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#F97316] text-[#F97316]" />
                  ))}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 italic">
                  {locale === 'fr' ? t_.textFr : t_.textEn}
                </p>
                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <div>
                    <div className="text-white font-semibold text-sm">{t_.name}</div>
                    <div className="text-gray-600 text-xs mt-0.5">{t_.vehicle}</div>
                  </div>
                  <div className="text-gray-600 text-xs">{t_.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section className="cta-band">
        <div className="container-custom py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl lg:text-3xl font-black text-white mb-2">
                {t('cta_band.title')}
              </h2>
              <p className="text-blue-200 text-sm">{t('cta_band.subtitle')}</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
              <div className="flex items-center gap-2 text-blue-200 text-sm">
                <Clock className="w-4 h-4" />
                {t('cta_band.hours')}
              </div>
              <Link href={`${base}/reserver`} className="btn-accent whitespace-nowrap">
                <CalendarCheck className="w-4 h-4" />
                {t('cta_band.button')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
