import BookingWizard from "@/components/booking/BookingWizard";
import { useLocale } from "next-intl";
import { CalendarCheck } from 'lucide-react';

export default function BookingPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      {/* Hero */}
      <section className="bg-[#161b22] border-b border-white/5">
        <div className="container-custom py-10 lg:py-14">
          <div className="section-tag">
            <CalendarCheck className="w-4 h-4" />
            Réservation en ligne
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-white mt-2 mb-3">
            Réserver un Créneau
          </h1>
          <p className="text-gray-400 max-w-xl">
            Planifiez votre intervention en quelques clics. Notre système de réservation est disponible 24h/24.
          </p>
        </div>
      </section>

      {/* Wizard */}
      <section className="section">
        <div className="container-custom">
          <BookingWizard />
        </div>
      </section>
    </div>
  );
}
