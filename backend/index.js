const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bookRoutes = require('./routes/bookRoutes');        // Book routes
const magazineRoutes = require('./routes/magazineRoutes'); // Magazine routes

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('📚 Welcome to the Library API');
});

// API route handlers
app.use('/api', bookRoutes);       // /api/books and /api/books/:id
app.use('/api', magazineRoutes);   // /api/magazines and /api/magazines/:id

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler (optional)
app.use((err, req, res, next) => {
  console.error('Server Error:', err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
