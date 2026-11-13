import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();
const DB_FILE = path.join(__dirname, '../database/orders.json');

const getDB = () => {
  if (!fs.existsSync(DB_FILE)) {
    fs.mkdirSync(path.dirname(DB_FILE), { recursive: true });
    fs.writeFileSync(DB_FILE, JSON.stringify([], null, 2));
  }
  return JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
};

const saveDB = (data) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};

// Create Order / Checkout
router.post('/orders/create', (req, res) => {
  try {
    const { items, customer, deliveryAddress, paymentMethod, notes } = req.body;
    
    if (!customer || !customer.name || !customer.phone) {
      return res.status(400).json({ success: false, message: 'Customer name and phone number are required.' });
    }

    const orderId = 'SKD-' + Math.floor(100000 + Math.random() * 900000);
    const newOrder = {
      orderId,
      createdAt: new Date().toISOString(),
      status: 'Confirmed & In Production',
      items: items || [],
      customer,
      deliveryAddress: deliveryAddress || {},
      paymentMethod: paymentMethod || 'WhatsApp Studio Confirmation',
      notes: notes || ''
    };

    const orders = getDB();
    orders.unshift(newOrder);
    saveDB(orders);

    return res.status(201).json({
      success: true,
      message: 'Order created successfully! Our team will prepare your preview.',
      order: newOrder
    });
  } catch (error) {
    console.error('Order creation error:', error);
    return res.status(500).json({ success: false, message: 'Server error processing order' });
  }
});

// Customization Popup Submission (Reference Image 4)
router.post('/customization/submit', (req, res) => {
  try {
    const { productId, productName, occasion, customText, quantity, uploadedPhotos, instructions, customerName, customerPhone } = req.body;
    
    const enquiryId = 'CUST-' + Math.floor(100000 + Math.random() * 900000);
    const enquiry = {
      enquiryId,
      type: 'Personalised Customisation',
      createdAt: new Date().toISOString(),
      productId,
      productName,
      occasion,
      customText,
      quantity: quantity || 1,
      uploadedPhotos: uploadedPhotos || [],
      instructions,
      customer: { name: customerName, phone: customerPhone },
      status: 'Ready for Preview'
    };

    const orders = getDB();
    orders.unshift(enquiry);
    saveDB(orders);

    return res.status(201).json({
      success: true,
      message: 'Customisation details received! Digital mock-up in progress.',
      enquiry
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Could not submit customisation' });
  }
});

// Corporate Enquiry Submission
router.post('/corporate/enquire', (req, res) => {
  try {
    const { companyName, contactPerson, email, phone, quantity, productName, logoUrl, deliveryLocation, requirements } = req.body;
    
    const corpId = 'CORP-' + Math.floor(100000 + Math.random() * 900000);
    const corpEnquiry = {
      corpId,
      type: 'Corporate Executive Order',
      createdAt: new Date().toISOString(),
      companyName,
      contactPerson,
      email,
      phone,
      quantity,
      productName,
      logoUrl,
      deliveryLocation,
      requirements,
      status: 'Quotation Pending'
    };

    const orders = getDB();
    orders.unshift(corpEnquiry);
    saveDB(orders);

    return res.status(201).json({
      success: true,
      message: 'Corporate request received! Quotation will be delivered via WhatsApp and Email.',
      enquiry: corpEnquiry
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Could not process corporate enquiry' });
  }
});

export default router;

