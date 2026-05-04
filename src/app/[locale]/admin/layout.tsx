import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Calendar, Car, Users, Wrench, Settings, ArrowLeft } from "lucide-react";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session || (session.user as any).role === "USER") {
    redirect("/connexion");
  }

  return (
    <div className="min-h-screen bg-[#0d1117] flex">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-[#161b22] border-r border-white/5 text-white flex flex-col pt-24">
        <div className="p-6 border-b border-white/5">
          <p className="text-xs uppercase text-[#0065CA] font-bold tracking-[0.2em]">Administration</p>
          <p className="text-lg font-black mt-1">BELA MBII</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          <Link href="/admin/planning" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all">
            <Calendar className="w-4 h-4" /> Planning
          </Link>
          <Link href="/admin/reservations" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all">
            <Car className="w-4 h-4" /> Réservations
          </Link>
          <Link href="/admin/clients" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all">
            <Users className="w-4 h-4" /> Clients
          </Link>
          <Link href="/admin/services" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all">
            <Wrench className="w-4 h-4" /> Services
          </Link>
          <Link href="/admin/config" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all">
            <Settings className="w-4 h-4" /> Configuration
          </Link>
        </nav>

        <div className="p-4 border-t border-white/5">
          <Link href="/" className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Retour au site
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 pt-24 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
