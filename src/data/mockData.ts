import { Product, Category, Brand, Purchase } from '../types';

export const categories: Category[] = [
  {
    id: 'nicotine-pouches',
    name: 'Nicotine Pouches',
    image: '/images/nicotine-pouches.png',
    description: 'Tobacco-free nicotine pouches in various flavors and strengths'
  },
  {
    id: '5-percent-vapes',
    name: '5% Vapes',
    image: '/images/5-percent-vapes.png',
    description: 'Disposable vapes with 5% nicotine strength'
  },
  {
    id: 'other-products',
    name: 'Other Products',
    image: '/images/other-products.png',
    description: 'Accessories and other vape-related products'
  }
];

export const brands: Brand[] = [
  {
    id: 'zyn',
    name: 'ZYN',
    category: 'nicotine-pouches',
    image: '/images/brands/zyn.png'
  },
  {
    id: 'velo',
    name: 'Velo',
    category: 'nicotine-pouches',
    image: '/images/brands/velo.png'
  },
  {
    id: 'on',
    name: 'ON!',
    category: 'nicotine-pouches',
    image: '/images/brands/on.png'
  },
  {
    id: 'elf-bar',
    name: 'Elf Bar',
    category: '5-percent-vapes',
    image: '/images/brands/elf-bar.png'
  },
  {
    id: 'geek-vape',
    name: 'Geek Vape',
    category: '5-percent-vapes',
    image: '/images/brands/geek-vape.png'
  },
  {
    id: 'vuse',
    name: 'Vuse',
    category: '5-percent-vapes',
    image: '/images/brands/vuse.png'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    category: 'other-products',
    image: '/images/brands/accessories.png'
  }
];

export const products: Product[] = [
  // Nicotine Pouches - ZYN
  {
    id: 'zyn-mint-6mg',
    name: 'ZYN Mint',
    price: 4.99,
    description: 'Refreshing mint flavor with a smooth kick',
    image: '/images/products/zyn-mint.png',
    category: 'nicotine-pouches',
    brand: 'zyn',
    nicotineStrength: '6mg',
    inStock: true
  },
  {
    id: 'zyn-wintergreen-6mg',
    name: 'ZYN Wintergreen',
    price: 4.99,
    description: 'Cool wintergreen flavor with a lasting freshness',
    image: '/images/products/zyn-wintergreen.png',
    category: 'nicotine-pouches',
    brand: 'zyn',
    nicotineStrength: '6mg',
    inStock: true
  },
  {
    id: 'zyn-coffee-3mg',
    name: 'ZYN Coffee',
    price: 4.99,
    description: 'Rich coffee flavor with a smooth finish',
    image: '/images/products/zyn-coffee.png',
    category: 'nicotine-pouches',
    brand: 'zyn',
    nicotineStrength: '3mg',
    inStock: true
  },
  
  // Nicotine Pouches - Velo
  {
    id: 'velo-citrus-4mg',
    name: 'Velo Citrus',
    price: 3.99,
    description: 'Zesty citrus with a refreshing tang',
    image: '/images/products/velo-citrus.png',
    category: 'nicotine-pouches',
    brand: 'velo',
    nicotineStrength: '4mg',
    inStock: true
  },
  {
    id: 'velo-mint-7mg',
    name: 'Velo Mint Strong',
    price: 3.99,
    description: 'Powerful mint sensation with extra strength',
    image: '/images/products/velo-mint.png',
    category: 'nicotine-pouches',
    brand: 'velo',
    nicotineStrength: '7mg',
    inStock: true
  },
  
  // Nicotine Pouches - ON!
  {
    id: 'on-mint-8mg',
    name: 'ON! Mint Extra Strong',
    price: 4.49,
    description: 'Intense mint experience with maximum strength',
    image: '/images/products/on-mint.png',
    category: 'nicotine-pouches',
    brand: 'on',
    nicotineStrength: '8mg',
    inStock: true
  },
  {
    id: 'on-berry-4mg',
    name: 'ON! Mixed Berry',
    price: 4.49,
    description: 'Sweet berry blend with a fruity taste',
    image: '/images/products/on-berry.png',
    category: 'nicotine-pouches',
    brand: 'on',
    nicotineStrength: '4mg',
    inStock: true
  },
  
  // 5% Vapes - Elf Bar
  {
    id: 'elf-bar-blueberry',
    name: 'Elf Bar Blueberry',
    price: 15.99,
    description: 'Sweet blueberry flavor with smooth vapor',
    image: '/images/products/elf-bar-blueberry.png',
    category: '5-percent-vapes',
    brand: 'elf-bar',
    inStock: true
  },
  {
    id: 'elf-bar-watermelon',
    name: 'Elf Bar Watermelon',
    price: 15.99,
    description: 'Juicy watermelon flavor with a refreshing finish',
    image: '/images/products/elf-bar-watermelon.png',
    category: '5-percent-vapes',
    brand: 'elf-bar',
    inStock: true
  },
  {
    id: 'elf-bar-grape',
    name: 'Elf Bar Grape',
    price: 15.99,
    description: 'Rich grape flavor with a sweet note',
    image: '/images/products/elf-bar-grape.png',
    category: '5-percent-vapes',
    brand: 'elf-bar',
    inStock: false
  },
  
  // 5% Vapes - Geek Vape
  {
    id: 'geek-vape-bluerazz',
    name: 'Geek Vape Blue Raspberry',
    price: 17.99,
    description: 'Tangy blue raspberry with a sweet kick',
    image: '/images/products/geek-vape-bluerazz.png',
    category: '5-percent-vapes',
    brand: 'geek-vape',
    inStock: true
  },
  {
    id: 'geek-vape-mango',
    name: 'Geek Vape Mango Ice',
    price: 17.99,
    description: 'Tropical mango flavor with a cool menthol finish',
    image: '/images/products/geek-vape-mango.png',
    category: '5-percent-vapes',
    brand: 'geek-vape',
    inStock: true
  },
  
  // 5% Vapes - Vuse
  {
    id: 'vuse-menthol',
    name: 'Vuse Menthol',
    price: 16.99,
    description: 'Classic menthol flavor with a smooth draw',
    image: '/images/products/vuse-menthol.png',
    category: '5-percent-vapes',
    brand: 'vuse',
    inStock: true
  },
  {
    id: 'vuse-golden-tobacco',
    name: 'Vuse Golden Tobacco',
    price: 16.99,
    description: 'Rich tobacco flavor with notes of caramel',
    image: '/images/products/vuse-tobacco.png',
    category: '5-percent-vapes',
    brand: 'vuse',
    inStock: true
  },
  
  // Other Products - Accessories
  {
    id: 'charger-usb-c',
    name: 'USB-C Charger',
    price: 9.99,
    description: 'Fast charging USB-C cable for vape devices',
    image: '/images/products/usb-c-charger.png',
    category: 'other-products',
    brand: 'accessories',
    inStock: true
  },
  {
    id: 'carrying-case',
    name: 'Vape Carrying Case',
    price: 14.99,
    description: 'Protective case for storing vapes and accessories',
    image: '/images/products/carrying-case.png',
    category: 'other-products',
    brand: 'accessories',
    inStock: true
  }
];

export const mockPurchases: Purchase[] = [
  {
    id: '1',
    customerName: 'John Doe',
    date: '2025-04-08T14:30:00Z',
    products: [
      { product: products[0], quantity: 2 },
      { product: products[7], quantity: 1 }
    ],
    total: 14.97,
    storeName: 'Downtown Store'
  },
  {
    id: '2',
    customerName: 'Jane Smith',
    date: '2025-04-07T10:15:00Z',
    products: [
      { product: products[3], quantity: 1 },
      { product: products[11], quantity: 1 }
    ],
    total: 21.98,
    storeName: 'Mall Location'
  }
];

// Helper function to get products by category
export const getProductsByCategory = (categoryId: string) => {
  return products.filter(product => product.category === categoryId);
};

// Helper function to get products by brand
export const getProductsByBrand = (brandId: string) => {
  return products.filter(product => product.brand === brandId);
};

// Helper function to get brands by category
export const getBrandsByCategory = (categoryId: string) => {
  return brands.filter(brand => brand.category === categoryId);
};

// Helper function to search products
export const searchProducts = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) || 
    product.description.toLowerCase().includes(lowercaseQuery) || 
    product.brand.toLowerCase().includes(lowercaseQuery)
  );
};
