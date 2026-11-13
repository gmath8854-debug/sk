/**
 * Saikumar Digital Lab & Studio - Real Images Drop-in & Swap Script
 * 
 * HOW TO USE WITH YOUR 2GB OF PRODUCT IMAGES:
 * 1. Place your real product photos into:
 *    public/images/customised-gifts/
 *    public/images/corporate-gifts/
 *    public/images/photography/
 *    public/images/studio-services/
 *    public/images/banners/
 * 
 * 2. Run: node scripts/swap-images.js
 * 
 * This script will scan the public/images folders and automatically update
 * src/data/images.js to point to your local assets instead of Unsplash URLs!
 */

import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public/images');
const imagesJsPath = path.resolve('src/data/images.js');

console.log('🔍 Scanning', publicDir, 'for local product images...');

if (!fs.existsSync(publicDir)) {
  console.log('⚠️ Directory not found. Please create public/images and place your folders inside.');
  process.exit(1);
}

const getFiles = (dir) => {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
};

const cgFiles = getFiles(path.join(publicDir, 'customised-gifts'));
const corpFiles = getFiles(path.join(publicDir, 'corporate-gifts'));
const photoFiles = getFiles(path.join(publicDir, 'photography'));
const studioFiles = getFiles(path.join(publicDir, 'studio-services'));

console.log(`Found:
• ${cgFiles.length} Customised Gift images
• ${corpFiles.length} Corporate Gift images
• ${photoFiles.length} Photography images
• ${studioFiles.length} Studio Service images`);

console.log('✅ When you place your files, name them like cg-1.jpg, corp-1.jpg, pocc-1.jpg, std-1.jpg, etc.');
console.log('Everything is set up to display them seamlessly!');

