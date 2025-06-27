import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Insert one book
  await prisma.book.create({
    data: {
      title: "iOS Programming: The Big Nerd Ranch Guide",
      author: "Christian Keur & Aaron Hillegass", 
      description: "Self-Improvement Guide",
      level: "Intermediate",
      category: "Mobile Development",          // ✅ added
      imagePath: "/Books/1.jpeg"
    },
  });

  // Insert multiple books at once
  await prisma.book.createMany({
    data: [
      {
        title: "Test Automation in the Real World",
        author: "Greg Paskal",
        description: "Practical advice on building reliable and maintainable automated tests.",
        level: "Intermediate",
        category: "Testing",                   // ✅ added
        imagePath: "/Books/2.jpg",
      },
      {
        title: "Continuous Testing for DevOps Professionals",
        author: "Eran Kinsbruner et al",
        description: "Covers modern testing strategies integrated into CI/CD pipelines.",
        level: "Intermediate to Advanced",
        category: "DevOps & Testing",         // ✅ added
        imagePath: "/Books/3.jpg"
      }
    ],
    skipDuplicates: true,
  });

  console.log("✅ Books inserted successfully");
}

main()
  .catch(e => console.error("❌ Error inserting books:", e))
  .finally(async () => {
    await prisma.$disconnect();
  });
