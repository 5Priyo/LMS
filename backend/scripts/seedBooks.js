const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.book.createMany({
    data: [
      {
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        description: "A modern introduction to JavaScript with deep insights and coding exercises.",
        level: "Intermediate",
        imagePath: "/books/4.jpg",
        category: "Programming",
      },
      {
        title: "Android Programming",
        author: "Bill Phillips, Brian Hardy",
        description: "Comprehensive guide to building Android apps with Java.",
        level: "Beginner",
        imagePath: "/books/5.jpg",
        category: "Mobile Development",
      },
      {
        title: "Eloquent JavaScript",
        author: "Marijn Haverbeke",
        description: "A deep dive into JavaScript programming with examples.",
        level: "Advanced",
        imagePath: "/books/6.jpg",
        category: "Programming",
      },
      {
        title: "Graphic Design: The New Basics",
        author: "Ellen Lupton",
        description: "Fundamental concepts of graphic design.",
        level: "Beginner",
        imagePath: "/books/7.jpg",
        category: "Design",
      },
      {
        title: "Agile Testing",
        author: "Lisa Crispin, Janet Gregory",
        description: "Principles and practices for testing in agile teams.",
        level: "Intermediate",
        imagePath: "/books/8.jpeg",
        category: "Testing",
      },
      {
        title: "The Art of Software Testing",
        author: "Glenford J. Myers",
        description: "Classic guide to structured and effective software testing.",
        level: "Advanced",
        imagePath: "/books/9.jpg",
        category: "Testing",
      },
      {
        title: "Software Engineering",
        author: "Ian Sommerville",
        description: "Comprehensive textbook on software engineering practices.",
        level: "Intermediate",
        imagePath: "/books/10.jpg",
        category: "Software Engineering",
      },
      {
        title: "Logo Design Love",
        author: "David Airey",
        description: "A guide to creating memorable brand logos.",
        level: "All Levels",
        imagePath: "/books/11.jpg",
        category: "Branding",
      },
      {
        title: "Foundations of Software Testing",
        author: "Dorothy Graham",
        description: "Introduction to software testing concepts with ISTQB focus.",
        level: "Intermediate",
        imagePath: "/books/12.jpg",
        category: "Testing",
      },
    ],
    skipDuplicates: true,
  });

  console.log("✅ 9 books inserted successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Error inserting books:", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
