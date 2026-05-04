const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Config
  await prisma.garageConfig.upsert({
    where: { id: 'singleton' },
    update: {},
    create: {
      id: 'singleton',
      openTime: '10:00',
      closeTime: '17:30',
      slotDuration: 120,
    },
  });

  // Services
  const services = [
    {
      nameFr: "Vidange et filtres",
      nameEn: "Oil and filters change",
      descFr: "Vidange huile moteur, remplacement filtre à huile, à air, à carburant",
      descEn: "Engine oil change, replacement of oil, air, and fuel filters",
      slotDuration: 120,
    },
    {
      nameFr: "Révision complète",
      nameEn: "Full service",
      descFr: "Contrôle général, remplacement consommables selon barème",
      descEn: "General check, replacement of consumables according to scale",
      slotDuration: 240,
    },
    {
      nameFr: "Système de freinage",
      nameEn: "Braking system",
      descFr: "Remplacement plaquettes, disques, tambours, liquide de frein",
      descEn: "Replacement of pads, discs, drums, brake fluid",
      slotDuration: 120,
    },
    {
      nameFr: "Diagnostic électronique",
      nameEn: "Electronic diagnostics",
      descFr: "Lecture et effacement codes défauts, expertise calculateurs",
      descEn: "Reading and clearing fault codes, ECU expertise",
      slotDuration: 120,
    },
  ];

  for (const s of services) {
    const existing = await prisma.service.findFirst({ where: { nameFr: s.nameFr } });
    if (!existing) {
      await prisma.service.create({ data: s });
    }
  }

  console.log("Seed completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
