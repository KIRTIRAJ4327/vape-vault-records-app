import fs from 'fs';
import path from 'path';
import { createCanvas } from 'canvas';
import { fileURLToPath } from 'url';

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

// Function to generate a placeholder image
function generatePlaceholderImage(text, outputPath) {
  const width = 400;
  const height = 400;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#d3e4fd';
  ctx.fillRect(0, 0, width, height);

  // Text
  ctx.fillStyle = '#3B82F6';
  ctx.font = 'bold 24px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath, buffer);
}

// Generate product images
const products = [
  // ZYN Products
  'zyn-cool-mint', 'zyn-espresso', 'zyn-spearmint', 'zyn-applemint', 
  'zyn-cucumber-lime', 'zyn-deep-freeze', 'zyn-blackcherry',
  
  // VELO Products
  'velo-peppermint-storm', 'velo-mango-flame', 'velo-lime-flame', 
  'velo-groovy-grape', 'velo-mighty-peppermint', 'velo-tangled-berry',
  'velo-icy-cherry', 'velo-lofty-liquorice', 'velo-orange-sparkle',
  
  // ON! Products
  'on-mint', 'on-berry',
  
  // Elf Bar Products
  'elf-bar-blueberry', 'elf-bar-watermelon', 'elf-bar-grape',
  
  // Geek Vape Products
  'geek-vape-bluerazz', 'geek-vape-mango',
  
  // Vuse Products
  'vuse-menthol', 'vuse-tobacco',
  
  // WHITE FOX Products
  'white-fox-peppermint', 'white-fox-blue-tobacco', 'white-fox-double-mint',
  'white-fox-red-gn-tobacco',
  
  // PABLO Products
  'pablo-mango-ice', 'pablo-bubble-gum', 'pablo-dark-cherry', 'pablo-frosted-ice',
  
  // SNATCH Products
  'snatch-citrus',
  
  // DOPE Products
  'dope-blue', 'dope-black',
  
  // ZOLT Products
  'zolt-wintergreen', 'zolt-cool-mint', 'zolt-sour-apple', 'zolt-spearmint',
  'zolt-coffee',
  
  // Boss Bar Products
  'boss-bar-watermelon-ice', 'boss-bar-blood-orange-bull', 'boss-bar-menthol',
  'boss-bar-spearmint', 'boss-bar-gummy-bear', 'boss-bar-cherry-cola',
  'boss-bar-strawberry-watermelon',
  
  // Lost Mary Products
  'lost-mary-blue-baza-splash', 'lost-mary-strawberry-ice', 'lost-mary-mango-twist',
  'lost-mary-pina-colada', 'lost-mary-peach-plus', 'lost-mary-lime-grapefruit',
  'lost-mary-orange-pomegranate-cranberry', 'lost-mary-supermint',
  
  // Level X Products
  'levelx-sic-strawberry', 'levelx-bomb-blue-razz', 'levelx-boss-blueberry',
  'levelx-watermelon-chew', 'levelx-rainbow-skittles', 'levelx-gusto-green-apple',
  'levelx-extreme-mint', 'levelx-grovy-grape-passionfruit', 'levelx-mad-mango-peach',
  'levelx-packin-peach-berry',
  
  // Z Pods Products
  'zpods-mango-peach', 'zpods-cotton-fluff', 'zpods-honeydew-melon-ice',
  'zpods-guava-lychee', 'zpods-berry-mix', 'zpods-banana',
  'zpods-strawberry-watermelon-ice', 'zpods-pog', 'zpods-mint',
  'zpods-sktl-ice', 'zpods-watermelon', 'zpods-watermelon-ice',
  'zpods-watermelon-banana',
  
  // Accessories
  'usb-c-charger', 'carrying-case'
];

// Generate brand images
const brands = [
  'zyn', 'velo', 'on', 'elf-bar', 'geek-vape', 'vuse', 'white-fox',
  'pablo', 'snatch', 'dope', 'zolt', 'boss-bar', 'lost-mary',
  'levelx', 'zpods', 'accessories'
];

// Generate category images
const categories = [
  'nicotine-pouches', '5-percent-vapes', 'other-products'
];

// Generate all images
products.forEach(product => {
  generatePlaceholderImage(
    product.replace(/-/g, ' ').toUpperCase(),
    path.join(__dirname, '..', 'public/images/products', `${product}.png`)
  );
});

brands.forEach(brand => {
  generatePlaceholderImage(
    brand.replace(/-/g, ' ').toUpperCase(),
    path.join(__dirname, '..', 'public/images/brands', `${brand}.png`)
  );
});

categories.forEach(category => {
  generatePlaceholderImage(
    category.replace(/-/g, ' ').toUpperCase(),
    path.join(__dirname, '..', 'public/images/categories', `${category}.png`)
  );
});

console.log('Placeholder images generated successfully!'); 