// scripts/updatePdfPath.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function updatePdfPath() {
  await prisma.book.update({
    where: { id: 1 },
    data: {
      pdfPath: '/pdf/ios.pdf',
    },
  });

  console.log("PDF path updated");
  await prisma.$disconnect();
}

updatePdfPath().catch((e) => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
