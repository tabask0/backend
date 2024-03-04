// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const invoiceData = [
  {
    amount: 100,
    due_date: new Date('2023-12-31'),
    description: 'Web development services',
    user_id: 1,
  },
  {
    amount: 200,
    due_date: new Date('2024-01-15'),
    description: 'Graphic design services',
    user_id: 1,
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const invoice of invoiceData) {
    const createdInvoice = await prisma.invoice.create({
      data: invoice,
    });
    console.log(`Created invoice with id: ${createdInvoice.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
