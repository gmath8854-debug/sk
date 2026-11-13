import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '25mb' }));

// Local JSON mock database for orders & enquiries
const ORDERS_FILE = path.join(__dirname, 'orders.json');
if (!fs.existsSync(ORDERS_FILE)) {
  fs.writeFileSync(ORDERS_FILE, JSON.stringify([], null, 2));
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Saikumar Digital Lab API', time: new Date() });
});

// Submit customization or corporate order
app.post('/api/orders/create', (req, res) => {
  try {
    const orderData = req.body;
    const orderId = 'SKD-' + Math.floor(100000 + Math.random() * 900000);
    const newOrder = {
      orderId,
      createdAt: new Date().toISOString(),
      status: 'Received',
      ...orderData
    };

    const currentOrders = JSON.parse(fs.readFileSync(ORDERS_FILE, 'utf-8'));
    currentOrders.unshift(newOrder);
    fs.writeFileSync(ORDERS_FILE, JSON.stringify(currentOrders, null, 2));

    return res.status(201).json({
      success: true,
      message: 'Order received successfully',
      order: newOrder
    });
  } catch (error) {
    console.error('Order creation error:', error);
    return res.status(500).json({ success: false, message: 'Server error processing order' });
  }
});

// Retrieve orders list
app.get('/api/orders', (req, res) => {
  try {
    const orders = JSON.parse(fs.readFileSync(ORDERS_FILE, 'utf-8'));
    res.json({ success: true, count: orders.length, orders });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Could not load orders' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Saikumar Studio Backend API running on http://localhost:${PORT}`);
});

