const express = require('express');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

// POST /api/books - Insert a new book
router.post('/books', async (req, res) => {
  const { title, author, level, description, imagePath, category, pdfPath } = req.body;

  try {
    const newBook = await prisma.book.create({
      data: {
        title,
        author,
        level,
        description,
        imagePath,
        category,
        pdfPath, // include pdfPath if added to schema
      },
    });
    res.status(201).json(newBook);
  } catch (error) {
    console.error('Error inserting book:', error);
    res.status(500).json({ error: 'Failed to insert book' });
  }
});

// GET /api/books - List all books or related books by category
router.get('/books', async (req, res) => {
  const { category, excludeId } = req.query;

  try {
    if (category) {
      const relatedBooks = await prisma.book.findMany({
        where: {
          category,
          NOT: {
            id: excludeId ? parseInt(excludeId) : undefined,
          },
        },
        take: 4, // Limit to 4 related books (optional)
      });
      return res.json(relatedBooks);
    }

    const books = await prisma.book.findMany();
    res.json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: 'Failed to fetch books' });
  }
});

// GET /api/books/:id - Fetch single book by ID
router.get('/books/:id', async (req, res) => {
  const bookId = parseInt(req.params.id);

  try {
    const book = await prisma.book.findUnique({
      where: { id: bookId },
    });

    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.json(book);
  } catch (error) {
    console.error('Error fetching book:', error);
    res.status(500).json({ error: 'Failed to fetch book' });
  }
});

module.exports = router;
