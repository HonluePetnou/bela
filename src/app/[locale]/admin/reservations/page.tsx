import { getAllBookings } from "@/app/actions/admin";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export default async function ReservationsPage() {
  const bookings = await getAllBookings();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Toutes les réservations</h1>
        <button className="btn-primary py-2 px-4 text-sm">+ Nouvelle réservation</button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500 tracking-wider">Référence</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500 tracking-wider">Client</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500 tracking-wider">Véhicule</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500 tracking-wider">Service</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500 tracking-wider">Date & Heure</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500 tracking-wider">Statut</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500 tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-mono text-sm font-bold text-primary">{booking.reference}</td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-sm">{booking.user.firstName} {booking.user.lastName}</p>
                    <p className="text-xs text-gray-500">{booking.user.email}</p>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {booking.vehicle.brand} {booking.vehicle.model}
                    <span className="block text-xs text-gray-400">{booking.vehicle.licensePlate}</span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">{booking.service.nameFr}</td>
                  <td className="px-6 py-4 text-sm">
                    <p className="font-bold">{format(new Date(booking.timeSlot.date), "dd/MM/yyyy")}</p>
                    <p className="text-xs text-gray-500">{booking.timeSlot.startTime}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] px-2 py-1 rounded-full uppercase font-bold ${
                      booking.status === 'CONFIRMED' ? 'bg-green-100 text-green-700' :
                      booking.status === 'COMPLETED' ? 'bg-blue-100 text-blue-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-gray-400 hover:text-primary mr-3">Modifier</button>
                    <button className="text-gray-400 hover:text-red-500">Annuler</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {bookings.length === 0 && (
            <div className="p-12 text-center text-gray-500">
              <p>Aucune réservation trouvée.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
