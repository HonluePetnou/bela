'use server';

import prisma from "@/lib/prisma";
import { auth } from "@/auth";

export async function getUserBookings() {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) throw new Error("Unauthorized");

  return prisma.booking.findMany({
    where: { userId },
    include: {
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

export async function getUserVehicles() {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) throw new Error("Unauthorized");

  return prisma.vehicle.findMany({
    where: { userId },
  });
}
