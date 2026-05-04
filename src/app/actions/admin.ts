'use server';

import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

async function ensureAdmin() {
  const session = await auth();
  if (!session || (session.user as any).role === "USER") {
    throw new Error("Unauthorized");
  }
  return session;
}

export async function getAllBookings() {
  await ensureAdmin();
  return prisma.booking.findMany({
    include: {
      user: true,
      vehicle: true,
      service: true,
      timeSlot: true,
    },
    orderBy: {
      timeSlot: {
        date: 'desc',
      },
    },
  });
}

export async function updateBookingStatus(bookingId: string, status: string) {
  await ensureAdmin();
  const booking = await prisma.booking.update({
    where: { id: bookingId },
    data: { status },
  });
  revalidatePath('/admin/reservations');
  return booking;
}

export async function getAdminStats() {
  await ensureAdmin();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [totalBookings, todayBookings, totalClients] = await Promise.all([
    prisma.booking.count(),
    prisma.booking.count({
      where: {
        timeSlot: {
          date: {
            gte: today,
          }
        }
      }
    }),
    prisma.user.count({ where: { role: "USER" } }),
  ]);

  return {
    totalBookings,
    todayBookings,
    totalClients,
    presenceRate: "95%", // Placeholder as per CDC
  };
}

export async function getRecentBookings(limit = 5) {
  await ensureAdmin();
  return prisma.booking.findMany({
    take: limit,
    include: {
      user: true,
      vehicle: true,
      service: true,
      timeSlot: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}
