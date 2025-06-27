const express = require('express');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

// POST /api/magazines - Insert a magazine
router.post('/magazines', async (req, res) => {
  const { title, author, summary, imagePath } = req.body;

  try {
    const newMagazine = await prisma.magazine.create({
      data: {
        title,
        author,
        summary,
        imagePath,
      },
    });
    res.status(201).json(newMagazine);
  } catch (error) {
    console.error('Error inserting magazine:', error);
    res.status(500).json({ error: 'Failed to insert magazine' });
  }
});

// GET /api/magazines - List all magazines
router.get('/magazines', async (req, res) => {
  try {
    const magazines = await prisma.magazine.findMany();
    res.json(magazines);
  } catch (error) {
    console.error('Error fetching magazines:', error);
    res.status(500).json({ error: 'Failed to fetch magazines' });
  }
});

// ✅ GET /api/magazines/:id - Get magazine by ID
router.get('/magazines/:id', async (req, res) => {
  const magId = parseInt(req.params.id);

  try {
    const magazine = await prisma.magazine.findUnique({
      where: { id: magId },
    });

    if (!magazine) {
      return res.status(404).json({ error: 'Magazine not found' });
    }

    res.json(magazine);
  } catch (error) {
    console.error('Error fetching magazine:', error);
    res.status(500).json({ error: 'Failed to fetch magazine' });
  }
});

module.exports = router;
