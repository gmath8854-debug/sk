import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Uploads destination
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const cleanName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, cleanName);
  }
});

const fileFilter = (req, file, cb) => {
  const allowed = /jpeg|jpg|png|webp|pdf/;
  const mime = allowed.test(file.mimetype);
  const ext = allowed.test(path.extname(file.originalname).toLowerCase());

  if (mime && ext) {
    return cb(null, true);
  }
  cb(new Error('Only JPG, PNG, WEBP, and PDF files are permitted'));
};

const upload = multer({
  storage,
  limits: { fileSize: 15 * 1024 * 1024 }, // 15MB limit
  fileFilter
});

// Single or multiple file upload handler
router.post('/upload', upload.array('photos', 8), (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ success: false, message: 'No files were uploaded' });
    }

    const fileResults = req.files.map(f => ({
      filename: f.filename,
      originalName: f.originalname,
      size: f.size,
      url: `/uploads/${f.filename}`
    }));

    return res.json({
      success: true,
      message: `${fileResults.length} file(s) uploaded successfully`,
      files: fileResults
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

export default router;

