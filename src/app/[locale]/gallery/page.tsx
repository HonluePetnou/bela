import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarCheck } from 'lucide-react';

const GALLERY_IMAGES = [
  { src: '/images/garage/1.jpeg', alt: 'Atelier BELA MBII', className: 'col-span-2 row-span-2' },
  { src: '/images/garage/2.jpeg', alt: 'Réparation mécanique', className: '' },
  { src: '/images/garage/3.jpeg', alt: 'Garage extérieur', className: '' },
  { src: '/images/garage/4.jpeg', alt: 'Véhicule en atelier', className: '' },
  { src: '/images/garage/5.jpeg', alt: 'Intervention technique', className: 'col-span-2' },
  { src: '/images/garage/6.jpeg', alt: 'Diagnostic électronique', className: '' },
  { src: '/images/garage/7.jpeg', alt: 'Carrosserie', className: '' },
  { src: '/images/garage/8.jpeg', alt: 'Équipement', className: '' },
  { src: '/images/garage/9.jpeg', alt: 'Technicien au travail', className: '' },
  { src: '/images/garage/10.jpeg', alt: 'Réparation', className: '' },
  { src: '/images/garage/11.jpeg', alt: 'Atelier', className: '' },
  { src: '/images/garage/12.jpeg', alt: 'Maintenance', className: '' },
  { src: '/images/garage/13.jpeg', alt: 'Service client', className: '' },
  { src: '/images/garage/14.jpeg', alt: 'Pneus', className: '' },
];

export default function GalleryPage() {
  const locale = useLocale();
  const fr = locale === 'fr';
  const base = `/${locale}`;

  return (
    <div className="min-h-screen pt-28 pb-20">
      {/* Hero */}
      <section className="bg-[#161b22] border-b border-white/5">
        <div className="container-custom py-14 lg:py-20">
          <div className="section-tag">{fr ? 'Notre atelier en images' : 'Our workshop in pictures'}</div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mt-2 mb-4">
            {fr ? 'Galerie Photos' : 'Photo Gallery'}
          </h1>
          <p className="text-gray-400 max-w-2xl">
            {fr
              ? 'Découvrez notre atelier, nos équipements et notre équipe en action.'
              : 'Discover our workshop, equipment and team in action.'}
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px]">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={i}
                className={`relative rounded-xl overflow-hidden group cursor-pointer ${img.className}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-[#0d1117]/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <p className="text-white text-xs font-medium">{img.alt}</p>
                  </div>
                </div>
                {/* Number badge */}
                <div className="absolute top-3 left-3 w-7 h-7 rounded-lg bg-[#0065CA]/80 backdrop-blur-sm flex items-center justify-center text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="card-glass rounded-2xl p-8 max-w-lg mx-auto text-center">
              <div className="text-3xl mb-3">📸</div>
              <h3 className="text-white font-bold text-lg mb-2">
                {fr ? 'Confiez-nous votre véhicule' : 'Trust us with your vehicle'}
              </h3>
              <p className="text-gray-500 text-sm mb-5">
                {fr
                  ? 'Réservez votre créneau en ligne et rejoignez nos clients satisfaits.'
                  : 'Book your slot online and join our satisfied clients.'}
              </p>
              <Link href={`${base}/reserver`} className="btn-accent">
                <CalendarCheck className="w-4 h-4" />
                {fr ? 'Réserver un créneau' : 'Book a slot'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
