import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const test = async () => {
  const users = await prisma.user.findMany();
  console.log(users);
};

test();