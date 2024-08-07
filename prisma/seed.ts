import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.company.create({
    data: {
      id: 1,
      name: 'Company 1',
    },
  });

  await prisma.company.create({
    data: {
      id: 2,
      name: 'Company 2',
    },
  });

  await prisma.company.create({
    data: {
      id: 3,
      name: 'Company 3',
    },
  });

  await prisma.store.create({
    data: {
      id: 1,
      companyId: 1,
    },
  });

  await prisma.store.create({
    data: {
      id: 2,
      companyId: 2,
    },
  });

  await prisma.store.create({
    data: {
      id: 3,
      companyId: 3,
    },
  });

  await prisma.product.create({
    data: {
      id: 1,
      name: 'Product 1',
      price: 10,
      storeId: 1,
    },
  });

  await prisma.product.create({
    data: {
      id: 2,
      name: 'Product 2',
      price: 20,
      storeId: 1,
    },
  });

  await prisma.product.create({
    data: {
      id: 3,
      name: 'Product 3',
      storeId: 1,
      price: 30,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
