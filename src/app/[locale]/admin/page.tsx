import { getAdminStats, getRecentBookings } from "@/app/actions/admin";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export default async function AdminPage() {
  const stats = await getAdminStats();
  const recentBookings = await getRecentBookings();

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
        <div className="bg-white p-2 px-4 rounded-lg border text-sm text-gray-500 font-medium shadow-sm">
          {format(new Date(), "EEEE d MMMM yyyy", { locale: fr })}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Réservations (Auj.)", value: stats.todayBookings, color: "bg-blue-500" },
          { label: "Réservations totales", value: stats.totalBookings, color: "bg-orange-500" },
          { label: "Clients totaux", value: stats.totalClients, color: "bg-green-500" },
          { label: "Taux de présence", value: stats.presenceRate, color: "bg-purple-500" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-xl shadow-sm border">
            <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
            <p className="text-3xl font-bold">{stat.value}</p>
            <div className={`h-1 w-12 ${stat.color} mt-4 rounded-full`} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Bookings */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-xl font-bold mb-4">Réservations récentes</h2>
          <div className="space-y-4">
            {recentBookings.length > 0 ? (
              recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div>
                    <p className="font-bold">{booking.user.firstName} {booking.user.lastName}</p>
                    <p className="text-xs text-gray-500">
                      {booking.vehicle.brand} {booking.vehicle.model} - {booking.service.nameFr}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold">{booking.timeSlot.startTime}</p>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase font-bold ${
                      booking.status === 'CONFIRMED' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm italic">Aucune réservation récente.</p>
            )}
          </div>
        </div>

        {/* Planning Preview */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-xl font-bold mb-4">Prochains créneaux</h2>
          <div className="flex items-center justify-center h-48 bg-gray-50 rounded-lg border-2 border-dashed">
            <p className="text-gray-400">Planning hebdomadaire disponible bientôt.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
