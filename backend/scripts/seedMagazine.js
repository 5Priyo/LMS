const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.magazine.createMany({
    data: [
      {
        title: "YES HE DID",
        author: "Forward Times",
        summary: "A cover story celebrating historical leadership.",
        imagePath: "/Magazines/1.jpg"
      },
      {
        title: "Billionaires",
        author: "Forbes",
        summary: "Special issue on the richest people on the planet.",
        imagePath: "/Magazines/2.jpg"
      },
      {
        title: "5 Most Famous Psychologists",
        author: "Psychology Today",
        summary: "Profiles of top psychologists like Freud and Skinner.",
        imagePath: "/Magazines/3.jpg"
      },
      {
        title: "Elon Musk",
        author: "Success Magazine",
        summary: "Explores Musk’s path to success and leadership.",
        imagePath: "/Magazines/4.jpg"
      },
      {
        title: "Facebook Age",
        author: "Success Magazine",
        summary: "Insights into Mark Zuckerberg’s influence.",
        imagePath: "/Magazines/5.jpg"
      },
      {
        title: "Brain & Life",
        author: "Brain & Life",
        summary: "Music, health, and how it saves lives.",
        imagePath: "/Magazines/6.jpg"
      }
    ]
  });

  console.log("✅ Magazines seeded successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
