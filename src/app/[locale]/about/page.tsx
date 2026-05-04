import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Hash, Target, Handshake, Shield, Zap, CalendarCheck } from 'lucide-react';

const VALUES_FR = [
  { title: 'Excellence', desc: "Nous visons l'excellence dans chaque intervention, sans compromis sur la qualité.", icon: Target },
  { title: 'Transparence', desc: 'Nos devis sont clairs et détaillés. Aucune intervention sans votre accord préalable.', icon: Handshake },
  { title: 'Intégrité', desc: 'Nous agissons avec honnêteté et éthique dans toutes nos relations clients.', icon: Shield },
  { title: 'Réactivité', desc: "Nous respectons les délais et vous tenons informé à chaque étape de l'intervention.", icon: Zap },
];

const VALUES_EN = [
  { title: 'Excellence', desc: 'We aim for excellence in every job, with no compromise on quality.', icon: Target },
  { title: 'Transparency', desc: 'Our quotes are clear and detailed. No work without your prior agreement.', icon: Handshake },
  { title: 'Integrity', desc: 'We act with honesty and ethics in all our client relationships.', icon: Shield },
  { title: 'Responsiveness', desc: 'We respect deadlines and keep you informed at every stage.', icon: Zap },
];

export default function AboutPage() {
  const locale = useLocale();
  const base = `/${locale}`;
  const fr = locale === 'fr';
  const values = fr ? VALUES_FR : VALUES_EN;

  return (
    <div className="min-h-screen pt-28 pb-20">
      {/* Hero */}
      <section className="relative bg-[#161b22] border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#0065CA]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#F97316]/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-tag">{fr ? 'Notre histoire' : 'Our story'}</div>
              <h1 className="text-4xl lg:text-5xl font-black text-white mt-2 mb-4">
                {fr ? 'À Propos de Bela Mbii Garage' : 'About Bela Mbii Garage'}
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                {fr
                  ? "Plus d'une décennie d'expertise automobile au service des habitants de Limbe et du Sud-Ouest Cameroun."
                  : 'Over a decade of automotive expertise serving the people of Limbe and South-West Cameroon.'}
              </p>
            </div>
            <div className="relative h-[280px] lg:h-[350px] rounded-2xl overflow-hidden">
              <Image src="/images/garage/4.jpeg" alt="BELA MBII GARAGE" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#161b22]/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Image grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-52 rounded-xl overflow-hidden">
                <Image src="/images/garage/2.jpeg" alt="Atelier" fill className="object-cover" />
              </div>
              <div className="relative h-52 rounded-xl overflow-hidden mt-8">
                <Image src="/images/garage/5.jpeg" alt="Garage" fill className="object-cover" />
              </div>
              <div className="relative h-52 rounded-xl overflow-hidden col-span-2">
                <Image src="/images/garage/3.jpeg" alt="Équipe" fill className="object-cover" />
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="section-tag">{fr ? 'Notre histoire' : 'Our history'}</div>
              <h2 className="text-3xl font-black text-white mt-2 mb-6">
                {fr ? 'Une décennie au service de votre mobilité' : 'A decade serving your mobility'}
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-sm lg:text-base">
                <p>
                  {fr
                    ? "Fondée en 2014 à Limbe, dans la région du Sud-Ouest du Cameroun, BELA MBII LTD s'est imposée comme la référence locale en matière de services automobiles. Notre garage est né de la passion de notre fondateur pour la mécanique et d'une vision claire : offrir aux conducteurs camerounais un service d'entretien et de réparation automobile digne des standards internationaux."
                    : 'Founded in 2014 in Limbe, South-West Cameroon, BELA MBII LTD has established itself as the local reference for automotive services. Our garage was born from our founder\'s passion for mechanics and a clear vision: to offer Cameroonian drivers a vehicle maintenance and repair service that meets international standards.'}
                </p>
                <p>
                  {fr
                    ? "Au fil des années, nous avons investi dans des équipements de diagnostic modernes, formé nos techniciens aux dernières technologies automobiles, et développé une culture d'entreprise axée sur la transparence, la qualité et la satisfaction client."
                    : 'Over the years, we have invested in modern diagnostic equipment, trained our technicians in the latest automotive technologies, and developed a company culture centred on transparency, quality and customer satisfaction.'}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { n: '2014', l: fr ? 'Fondé en' : 'Founded' },
                  { n: '20+', l: fr ? 'Marques' : 'Brands' },
                  { n: '15+', l: fr ? 'Services' : 'Services' },
                  { n: '99%', l: 'Satisfaction' },
                ].map((item) => (
                  <div key={item.n} className="card-glass p-4 text-center rounded-xl">
                    <div className="text-2xl font-black text-[#0065CA]">{item.n}</div>
                    <div className="text-gray-500 text-xs mt-1">{item.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-[#161b22] border-y border-white/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-tag justify-center">{fr ? 'Ce qui nous guide' : 'What guides us'}</div>
            <h2 className="text-3xl font-black text-white mt-2">{fr ? 'Nos Valeurs' : 'Our Values'}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ title, desc, icon: Icon }, i) => (
              <div key={i} className="card-glass p-6 text-center group rounded-xl">
                <div className="w-14 h-14 rounded-xl bg-[#0065CA]/10 border border-[#0065CA]/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#0065CA] group-hover:border-transparent transition-all">
                  <Icon className="w-6 h-6 text-[#0065CA] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal info */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto card-glass p-8 rounded-2xl">
            <h3 className="text-white font-bold text-xl mb-6 text-center">
              {fr ? 'Informations Légales' : 'Legal Information'}
            </h3>
            <div className="space-y-0">
              {[
                { icon: MapPin, label: fr ? 'Adresse' : 'Address', value: 'Busumbii Entrance Mile 3, Limbe, Cameroun' },
                { icon: Phone, label: fr ? 'Téléphone' : 'Phone', value: '(+237) 690 208 485' },
                { icon: Hash, label: 'RCCM', value: 'TPPRR/RC/LBE/2024/B/007' },
                { icon: Hash, label: 'NIU', value: 'M012416350442Z' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 py-4 border-b border-white/5 last:border-0">
                  <div className="w-8 h-8 rounded-lg bg-[#0065CA]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#0065CA]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 uppercase tracking-wide mb-0.5">{label}</div>
                    <div className="text-gray-300 text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href={`${base}/reserver`} className="btn-primary">
              <CalendarCheck className="w-4 h-4" />
              {fr ? 'Réserver un créneau' : 'Book a slot'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
