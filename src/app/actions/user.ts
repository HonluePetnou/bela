'use server';

import prisma from "@/lib/prisma";
import { auth } from "@/auth";

export async function getUserBookings() {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");

  return prisma.booking.findMany({
    where: { userId: session.user.id },
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
  if (!session) throw new Error("Unauthorized");

  return prisma.vehicle.findMany({
    where: { userId: session.user.id },
  });
}
