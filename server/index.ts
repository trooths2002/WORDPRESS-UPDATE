import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'The Righteous Teachers API is running' });
});

app.get('/api/content/:type', (req, res) => {
  const { type } = req.params;
  
  // Mock content based on WordPress structure
  const content = {
    'messages-in-black': [
      { id: 1, title: 'The Importance of Research', excerpt: 'Understanding the value of thorough research...' },
      { id: 2, title: 'Truth and Justice', excerpt: 'Exploring the relationship between seeking truth...' }
    ],
    'specials': [
      { id: 1, title: 'Historical Research Papers', excerpt: 'Collection of research papers exploring...' },
      { id: 2, title: 'Educational Essays', excerpt: 'Thoughtful essays on education, philosophy...' }
    ],
    'audio': [
      { id: 1, title: 'Savior\'s Day 1958', duration: '45:32', format: 'mp3' },
      { id: 2, title: 'Educational Lectures', duration: '32:08', format: 'mp3' }
    ]
  };

  res.json(content[type] || []);
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 The Righteous Teachers server running on port ${PORT}`);
  console.log(`📖 WordPress launch package preview available`);
});