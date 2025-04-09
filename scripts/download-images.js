import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create directories if they don't exist
const directories = [
  'public/images/products',
  'public/images/brands',
  'public/images/categories'
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Function to download an image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(filepath);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Function to create a README with image sources
function createImageSourcesReadme() {
  const readmeContent = `# Image Sources

This document tracks the sources of all product images used in the application.

## Product Images
- ZYN Products: https://www.zyn.com/
- VELO Products: https://www.velo.com/
- ON! Products: https://www.onpouches.com/
- Elf Bar Products: https://www.elfbar.com/
- Geek Vape Products: https://www.geekvape.com/
- Vuse Products: https://www.vuse.com/
- WHITE FOX Products: https://www.whitefoxpouches.com/
- PABLO Products: https://www.pablopouches.com/
- SNATCH Products: https://www.snatchpouches.com/
- DOPE Products: https://www.dopepouches.com/
- ZOLT Products: https://www.zoltpouches.com/
- Boss Bar Products: https://www.bossbar.com/
- Lost Mary Products: https://www.lostmary.com/
- Level X Products: https://www.levelxvape.com/
- Z Pods Products: https://www.zpods.com/

## Brand Logos
All brand logos should be obtained from the respective brand websites listed above.

## Category Images
Category images should be created or sourced from stock photo websites with proper licensing.

## Image Guidelines
1. All images should be in PNG format
2. Recommended size: 400x400 pixels
3. Maintain aspect ratio
4. Ensure proper licensing for all images
5. Keep original filenames as specified in the application

## Legal Notice
Please ensure you have the proper rights and licenses to use these images in your application.
`;

  fs.writeFileSync(path.join(__dirname, '..', 'public/images/IMAGE_SOURCES.md'), readmeContent);
}

// Create the image sources documentation
createImageSourcesReadme();

console.log('Image source documentation created. Please check IMAGE_SOURCES.md for guidance on obtaining official images.'); 