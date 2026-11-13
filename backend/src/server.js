import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Static uploads serving
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Mount API routes
app.use('/api', orderRoutes);
app.use('/api', uploadRoutes);

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    app: 'Saikumar Digital Lab & Studio API',
    version: '3.0.0',
    time: new Date()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Saikumar Studio API running on http://localhost:${PORT}`);
});

