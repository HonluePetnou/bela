import { getAllBookings } from "@/app/actions/admin";
import { format, startOfWeek, addDays, isSameDay } from "date-fns";
import { fr } from "date-fns/locale";

export default async function PlanningPage() {
  const bookings = await getAllBookings();
  const today = new Date();
  const weekStart = startOfWeek(today, { weekStartsOn: 1 });
  
  const weekDays = Array.from({ length: 6 }).map((_, i) => addDays(weekStart, i));
  const timeSlots = ['10:00', '12:00', '14:00', '16:00'];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Planning Hebdomadaire</h1>
        <div className="flex gap-2">
          <button className="p-2 border rounded hover:bg-gray-50">←</button>
          <button className="p-2 border rounded hover:bg-gray-50 font-medium px-4">Cette semaine</button>
          <button className="p-2 border rounded hover:bg-gray-50">→</button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="grid grid-cols-7 border-b bg-gray-50">
          <div className="p-4 border-r font-bold text-xs text-gray-500 uppercase tracking-wider">Heure</div>
          {weekDays.map((day) => (
            <div key={day.toString()} className="p-4 border-r last:border-0 text-center">
              <p className="text-xs font-bold text-gray-500 uppercase">{format(day, "EEE", { locale: fr })}</p>
              <p className="text-lg font-bold">{format(day, "d")}</p>
            </div>
          ))}
        </div>

        <div className="divide-y">
          {timeSlots.map((slot) => (
            <div key={slot} className="grid grid-cols-7 min-h-[100px]">
              <div className="p-4 border-r bg-gray-50/50 flex items-center justify-center font-bold text-primary">
                {slot}
              </div>
              {weekDays.map((day) => {
                const booking = bookings.find(b => 
                  isSameDay(new Date(b.timeSlot.date), day) && b.timeSlot.startTime === slot
                );

                return (
                  <div key={day.toString()} className="p-2 border-r last:border-0 relative">
                    {booking ? (
                      <div className="h-full w-full bg-blue-100 border-l-4 border-primary p-2 rounded text-xs overflow-hidden shadow-sm">
                        <p className="font-bold text-primary truncate">{booking.user.firstName} {booking.user.lastName}</p>
                        <p className="text-[10px] text-gray-600 truncate">{booking.vehicle.brand} {booking.vehicle.model}</p>
                        <p className="text-[10px] font-medium text-blue-700 mt-1">{booking.service.nameFr}</p>
                      </div>
                    ) : (
                      <div className="h-full w-full border border-dashed border-gray-100 flex items-center justify-center">
                        <span className="text-[10px] text-gray-300">Libre</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
