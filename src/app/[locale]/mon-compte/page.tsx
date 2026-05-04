import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getUserBookings, getUserVehicles } from "@/app/actions/user";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import Link from "next/link";
import { Calendar, Car, LayoutDashboard, LogOut, ArrowRight, User } from "lucide-react";

export default async function AccountPage() {
  const session = await auth();

  if (!session) {
    redirect("/connexion");
  }

  const [bookings, vehicles] = await Promise.all([
    getUserBookings(),
    getUserVehicles(),
  ]);

  return (
    <main className="min-h-screen pt-28 pb-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0065CA]/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container-custom relative z-10">
        <div className="mb-10">
          <div className="section-tag">Mon Espace Client</div>
          <h1 className="text-3xl lg:text-4xl font-black text-white">Tableau de bord</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="card-glass p-6">
              <div className="w-12 h-12 rounded-full bg-[#0065CA]/20 flex items-center justify-center mb-4 border border-[#0065CA]/30">
                <User className="w-6 h-6 text-[#0065CA]" />
              </div>
              <p className="text-sm text-gray-500 mb-1">Bienvenue,</p>
              <p className="text-lg font-bold text-white leading-tight">{session.user?.name}</p>
              <p className="text-xs text-gray-400 mt-1 truncate">{session.user?.email}</p>
            </div>
            
            <nav className="flex flex-col gap-2">
              <button className="flex items-center gap-3 w-full text-left p-3.5 rounded-xl bg-[#0065CA] text-white font-medium shadow-[0_0_15px_rgba(0,101,202,0.3)] transition-all">
                <LayoutDashboard className="w-4 h-4" />
                Tableau de bord
              </button>
              <button className="flex items-center gap-3 w-full text-left p-3.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all">
                <Calendar className="w-4 h-4" />
                Mes réservations
              </button>
              <button className="flex items-center gap-3 w-full text-left p-3.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all">
                <Car className="w-4 h-4" />
                Mes véhicules
              </button>
              <Link href="/api/auth/signout" className="flex items-center gap-3 w-full text-left p-3.5 rounded-xl text-red-400 hover:bg-red-500/10 transition-all mt-4">
                <LogOut className="w-4 h-4" />
                Déconnexion
              </Link>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Bookings */}
            <div className="card-glass p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#F97316]" />
                  Mes réservations
                </h2>
                <Link href="/reserver" className="text-sm font-semibold text-[#0065CA] hover:text-blue-400 transition-colors flex items-center gap-1">
                  Nouvelle <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              
              {bookings.length > 0 ? (
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <div key={booking.id} className="p-5 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all flex flex-col md:flex-row md:justify-between md:items-center gap-4 group">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <p className="font-bold text-white text-lg">{booking.service.nameFr}</p>
                          <span className={`text-[10px] px-2 py-1 rounded-full uppercase font-bold tracking-wider ${
                            booking.status === 'CONFIRMED' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-gray-500/20 text-gray-300 border border-gray-500/30'
                          }`}>
                            {booking.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-gray-500" />
                            {format(new Date(booking.timeSlot.date), "dd MMMM yyyy", { locale: fr })} à {booking.timeSlot.startTime}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-2 uppercase font-mono tracking-wider">Réf: {booking.reference}</p>
                      </div>
                      <div className="md:text-right border-t border-white/5 md:border-none pt-4 md:pt-0">
                        <p className="text-sm font-medium text-gray-300 flex items-center md:justify-end gap-2">
                          <Car className="w-4 h-4 text-gray-500" />
                          {booking.vehicle.brand} {booking.vehicle.model}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-[#0065CA]/10 border border-[#0065CA]/20 p-8 rounded-xl text-center">
                  <div className="w-12 h-12 rounded-full bg-[#0065CA]/20 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-6 h-6 text-[#0065CA]" />
                  </div>
                  <p className="text-gray-300 mb-4">Vous n'avez aucune réservation pour le moment.</p>
                  <Link href="/reserver" className="btn-primary inline-flex">
                    Réserver maintenant
                  </Link>
                </div>
              )}
            </div>

            {/* Vehicles */}
            <div className="card-glass p-6 lg:p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                  <Car className="w-5 h-5 text-[#0065CA]" />
                  Mes véhicules
                </h2>
                <button className="text-xs font-semibold text-[#F97316] border border-[#F97316]/30 px-3 py-1.5 rounded-lg hover:bg-[#F97316] hover:text-white transition-all">
                  + Ajouter
                </button>
              </div>

              {vehicles.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {vehicles.map((v) => (
                    <div key={v.id} className="p-5 border border-white/5 rounded-xl bg-white/5 hover:border-[#0065CA]/30 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <p className="font-bold text-white text-lg">{v.brand} <span className="font-medium text-gray-300">{v.model}</span></p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-400 flex items-center justify-between">
                          <span>Immatriculation</span>
                          <span className="font-mono text-gray-300 bg-black/30 px-2 py-0.5 rounded">{v.licensePlate}</span>
                        </p>
                        <p className="text-sm text-gray-400 flex items-center justify-between">
                          <span>Année</span>
                          <span className="text-gray-300">{v.year}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Car className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                  <p className="text-gray-500 italic text-sm">Aucun véhicule enregistré.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
