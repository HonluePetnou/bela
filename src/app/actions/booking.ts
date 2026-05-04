'use server';

import prisma from "@/lib/prisma";
import { z } from "zod";
import bcrypt from "bcrypt";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function getServices() {
  return prisma.service.findMany({
    where: { isActive: true },
  });
}

export async function getAvailableSlots(dateStr: string) {
  // Simplified logic for prototype: 
  // Generate default slots for the day, check which ones are booked in TimeSlot table
  const config = await prisma.garageConfig.findUnique({ where: { id: 'singleton' } });
  if (!config) return [];

  const date = new Date(dateStr);
  const slots = ['10:00', '12:00', '14:00', '16:00'];

  const existingSlots = await prisma.timeSlot.findMany({
    where: {
      date: {
        gte: new Date(date.setHours(0, 0, 0, 0)),
        lt: new Date(date.setHours(23, 59, 59, 999)),
      },
    }
  });

  const bookedTimes = existingSlots.filter(s => s.isBooked || s.isBlocked).map(s => s.startTime);

  return slots.map(time => ({
    time,
    available: !bookedTimes.includes(time)
  }));
}

const bookingSchema = z.object({
  vehicle: z.object({
    brand: z.string(),
    model: z.string(),
    year: z.string(), // Parse to Int later
    licensePlate: z.string(),
  }),
  serviceId: z.string(),
  date: z.string(),
  time: z.string(),
  user: z.object({
    id: z.string().optional(), // if logged in
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    phone: z.string(),
    password: z.string().optional(), // if creating new account
  }),
});

export async function createBooking(data: any) {
  try {
    const parsed = bookingSchema.parse(data);

    let userId = parsed.user.id;

    // Create user if not logged in
    if (!userId) {
      const existingUser = await prisma.user.findUnique({ where: { email: parsed.user.email } });
      if (existingUser) {
        return { error: "Un compte avec cet email existe déjà. Veuillez vous connecter." };
      }

      if (!parsed.user.password) {
        return { error: "Mot de passe requis pour créer un compte." };
      }

      const hashedPassword = await bcrypt.hash(parsed.user.password, 12);
      const newUser = await prisma.user.create({
        data: {
          firstName: parsed.user.firstName,
          lastName: parsed.user.lastName,
          email: parsed.user.email,
          phone: parsed.user.phone,
          passwordHash: hashedPassword,
        }
      });
      userId = newUser.id;
    }

    if (!userId) throw new Error("User ID is missing");

    // Ensure vehicle exists or create it
    let vehicle = await prisma.vehicle.findFirst({
      where: { userId, licensePlate: parsed.vehicle.licensePlate }
    });

    if (!vehicle) {
      vehicle = await prisma.vehicle.create({
        data: {
          userId,
          brand: parsed.vehicle.brand,
          model: parsed.vehicle.model,
          year: parseInt(parsed.vehicle.year, 10),
          licensePlate: parsed.vehicle.licensePlate,
          fuelType: "Inconnu",
        }
      });
    }

    // Create TimeSlot
    const targetDate = new Date(parsed.date);
    const timeSlot = await prisma.timeSlot.create({
      data: {
        date: targetDate,
        startTime: parsed.time,
        endTime: "TBD", // Simplification
        isBooked: true,
      }
    });

    const reference = "RES-" + Math.random().toString(36).substring(2, 8).toUpperCase();

    // Create Booking
    const booking = await prisma.booking.create({
      data: {
        userId,
        vehicleId: vehicle.id,
        serviceId: parsed.serviceId,
        timeSlotId: timeSlot.id,
        reference,
        status: "CONFIRMED"
      },
      include: {
        service: true,
        user: true,
      }
    });

    // Send email if RESEND_API_KEY is present
    if (process.env.RESEND_API_KEY && !process.env.RESEND_API_KEY.includes('re_...')) {
      await resend.emails.send({
        from: 'BELA MBII GARAGE <onboarding@resend.dev>',
        to: parsed.user.email,
        subject: `Confirmation de réservation - ${reference}`,
        html: `<p>Bonjour ${parsed.user.firstName},</p><p>Votre réservation pour ${booking.service.nameFr} le ${parsed.date} à ${parsed.time} est confirmée.</p><p>Référence: ${reference}</p>`,
      });
    }

    return { success: true, reference };
  } catch (error: any) {
    console.error(error);
    return { error: error.message || "Une erreur est survenue lors de la réservation." };
  }
}
