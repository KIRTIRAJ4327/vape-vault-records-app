import { Product, Category, Brand, Purchase } from '../types';

export const categories: Category[] = [
  {
    id: 'nicotine-pouches',
    name: 'Nicotine Pouches',
    image: '/images/categories/nicotine-pouches.png',
    description: 'Tobacco-free nicotine pouches in various flavors and strengths'
  },
  {
    id: '5-percent-vapes',
    name: '5% Vapes',
    image: '/images/categories/5-percent-vapes.png',
    description: 'Disposable vapes with 5% nicotine strength'
  },
  {
    id: 'other-products',
    name: 'Other Products',
    image: '/images/categories/other-products.png',
    description: 'Accessories and other vape-related products'
  }
];

export const brands: Brand[] = [
  {
    id: 'zyn',
    name: 'ZYN',
    image: '/images/brands/zyn.png',
    description: 'Premium nicotine pouches with various strengths and flavors'
  },
  {
    id: 'velo',
    name: 'VELO',
    image: '/images/brands/velo.png',
    description: 'High-quality nicotine pouches with innovative flavors'
  },
  {
    id: 'white-fox',
    name: 'WHITE FOX',
    image: '/images/brands/white-fox.png',
    description: 'Strong nicotine pouches with unique tobacco and mint flavors'
  },
  {
    id: 'pablo',
    name: 'PABLO',
    image: '/images/brands/pablo.png',
    description: 'Extra strong nicotine pouches with bold flavors'
  },
  {
    id: 'snatch',
    name: 'SNATCH',
    image: '/images/brands/snatch.png',
    description: 'Premium nicotine pouches with citrus flavors'
  },
  {
    id: 'dope',
    name: 'DOPE',
    image: '/images/brands/dope.png',
    description: 'Strong nicotine pouches with unique flavor profiles'
  },
  {
    id: 'zolt',
    name: 'ZOLT',
    image: '/images/brands/zolt.png',
    description: 'Medium strength nicotine pouches with classic flavors'
  },
  {
    id: 'boss-bar',
    name: 'Boss Bar',
    image: '/images/brands/boss-bar.png',
    description: 'Long-lasting 18000 puff disposable vapes'
  },
  {
    id: 'lost-mary',
    name: 'Lost Mary',
    image: '/images/brands/lost-mary.png',
    description: 'Premium 20000-25000 puff disposable vapes'
  },
  {
    id: 'geek-bar',
    name: 'Geek Bar',
    image: '/images/brands/geek-bar.png',
    description: 'High-quality disposable vapes'
  },
  {
    id: 'levelx',
    name: 'Level X',
    image: '/images/brands/levelx.png',
    description: 'Premium 25000 puff pods with unique flavors'
  },
  {
    id: 'zpods',
    name: 'Z Pods',
    image: '/images/brands/zpods.png',
    description: 'High-quality pods with diverse flavor selection'
  }
];

export const products: Product[] = [
  // ZYN Products
  {
    id: 'zyn-cool-mint-6mg',
    name: 'ZYN Cool Mint',
    price: 4.99,
    description: 'Refreshing cool mint flavor with a smooth nicotine experience',
    image: '/images/products/zyn-cool-mint.png',
    category: 'nicotine-pouches',
    brand: 'zyn',
    nicotineStrength: '6mg',
    inStock: true
  },
  {
    id: 'zyn-espresso-6mg',
    name: 'ZYN Espresso',
    price: 4.99,
    description: 'Rich coffee flavor with a bold nicotine kick',
    image: '/images/products/zyn-espresso.png',
    category: 'nicotine-pouches',
    brand: 'zyn',
    nicotineStrength: '6mg',
    inStock: true
  },
  {
    id: 'zyn-spearmint-9mg',
    name: 'ZYN Spearmint',
    price: 5.49,
    description: 'Strong spearmint flavor with an extra nicotine boost',
    image: '/images/products/zyn-spearmint.png',
    category: 'nicotine-pouches',
    brand: 'zyn',
    nicotineStrength: '9mg',
    inStock: true
  },
  {
    id: 'zyn-applemint-9mg',
    name: 'ZYN Apple Mint',
    price: 5.49,
    description: 'Sweet apple combined with refreshing mint',
    image: '/images/products/zyn-applemint.png',
    category: 'nicotine-pouches',
    brand: 'zyn',
    nicotineStrength: '9mg',
    inStock: true
  },
  {
    id: 'zyn-cucumber-lime-6.5mg',
    name: 'ZYN Cucumber Lime',
    price: 4.99,
    description: 'Refreshing cucumber with a zesty lime finish',
    image: '/images/products/zyn-cucumber-lime.png',
    category: 'nicotine-pouches',
    brand: 'zyn',
    nicotineStrength: '6.5mg',
    inStock: true
  },
  {
    id: 'zyn-deep-freeze-11mg',
    name: 'ZYN Deep Freeze',
    price: 5.99,
    description: 'Intense cooling sensation with extra strong nicotine',
    image: '/images/products/zyn-deep-freeze.png',
    category: 'nicotine-pouches',
    brand: 'zyn',
    nicotineStrength: '11mg',
    inStock: true
  },
  {
    id: 'zyn-blackcherry-6mg',
    name: 'ZYN Black Cherry',
    price: 4.99,
    description: 'Rich black cherry flavor with smooth nicotine delivery',
    image: '/images/products/zyn-blackcherry.png',
    category: 'nicotine-pouches',
    brand: 'zyn',
    nicotineStrength: '6mg',
    inStock: true
  },
  
  // VELO Products
  {
    id: 'velo-peppermint-storm-10mg',
    name: 'VELO Peppermint Storm',
    price: 4.99,
    description: 'Intense peppermint blast with strong nicotine',
    image: '/images/products/velo-peppermint-storm.png',
    category: 'nicotine-pouches',
    brand: 'velo',
    nicotineStrength: '10mg',
    inStock: true
  },
  {
    id: 'velo-mango-flame-9mg',
    name: 'VELO Mango Flame',
    price: 4.99,
    description: 'Tropical mango with a spicy kick',
    image: '/images/products/velo-mango-flame.png',
    category: 'nicotine-pouches',
    brand: 'velo',
    nicotineStrength: '9mg',
    inStock: true
  },
  {
    id: 'velo-lime-flame-9mg',
    name: 'VELO Lime Flame',
    price: 4.99,
    description: 'Zesty lime with a fiery twist',
    image: '/images/products/velo-lime-flame.png',
    category: 'nicotine-pouches',
    brand: 'velo',
    nicotineStrength: '9mg',
    inStock: true
  },
  {
    id: 'velo-groovy-grape-6mg',
    name: 'VELO Groovy Grape',
    price: 4.49,
    description: 'Sweet and juicy grape flavor',
    image: '/images/products/velo-groovy-grape.png',
    category: 'nicotine-pouches',
    brand: 'velo',
    nicotineStrength: '6mg',
    inStock: true
  },
  {
    id: 'velo-mighty-peppermint-10.9mg',
    name: 'VELO Mighty Peppermint',
    price: 5.49,
    description: 'Extra strong peppermint with maximum freshness',
    image: '/images/products/velo-mighty-peppermint.png',
    category: 'nicotine-pouches',
    brand: 'velo',
    nicotineStrength: '10.9mg',
    inStock: true
  },
  {
    id: 'velo-tangled-berry-10mg',
    name: 'VELO Tangled Berry',
    price: 4.99,
    description: 'Mixed berry medley with strong nicotine',
    image: '/images/products/velo-tangled-berry.png',
    category: 'nicotine-pouches',
    brand: 'velo',
    nicotineStrength: '10mg',
    inStock: true
  },
  {
    id: 'velo-icy-cherry-10mg',
    name: 'VELO Icy Cherry',
    price: 4.99,
    description: 'Sweet cherry with a cool ice finish',
    image: '/images/products/velo-icy-cherry.png',
    category: 'nicotine-pouches',
    brand: 'velo',
    nicotineStrength: '10mg',
    inStock: true
  },
  {
    id: 'velo-lofty-liquorice-10mg',
    name: 'VELO Lofty Liquorice',
    price: 4.99,
    description: 'Rich liquorice flavor with strong nicotine',
    image: '/images/products/velo-lofty-liquorice.png',
    category: 'nicotine-pouches',
    brand: 'velo',
    nicotineStrength: '10mg',
    inStock: true
  },
  {
    id: 'velo-orange-sparkle-10mg',
    name: 'VELO Orange Sparkle',
    price: 4.99,
    description: 'Vibrant orange with a sparkling twist',
    image: '/images/products/velo-orange-sparkle.png',
    category: 'nicotine-pouches',
    brand: 'velo',
    nicotineStrength: '10mg',
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
  },

  // WHITE FOX Products
  {
    id: 'white-fox-peppermint-12mg',
    name: 'WHITE FOX Peppermint',
    price: 5.99,
    description: 'Strong peppermint with intense nicotine satisfaction',
    image: '/images/products/white-fox-peppermint.png',
    category: 'nicotine-pouches',
    brand: 'white-fox',
    nicotineStrength: '12mg',
    inStock: true
  },
  {
    id: 'white-fox-blue-tobacco-12mg',
    name: 'WHITE FOX Blue Tobacco',
    price: 5.99,
    description: 'Unique blue tobacco blend with strong nicotine',
    image: '/images/products/white-fox-blue-tobacco.png',
    category: 'nicotine-pouches',
    brand: 'white-fox',
    nicotineStrength: '12mg',
    inStock: true
  },
  {
    id: 'white-fox-double-mint-16mg',
    name: 'WHITE FOX Double Mint',
    price: 6.49,
    description: 'Extra strong double mint flavor',
    image: '/images/products/white-fox-double-mint.png',
    category: 'nicotine-pouches',
    brand: 'white-fox',
    nicotineStrength: '16mg',
    inStock: true
  },
  {
    id: 'white-fox-red-gn-tobacco-16mg',
    name: 'WHITE FOX Red GN Tobacco',
    price: 6.49,
    description: 'Bold red tobacco with maximum strength',
    image: '/images/products/white-fox-red-gn-tobacco.png',
    category: 'nicotine-pouches',
    brand: 'white-fox',
    nicotineStrength: '16mg',
    inStock: true
  },

  // PABLO Products
  {
    id: 'pablo-mango-ice-50mg',
    name: 'PABLO Mango Ice',
    price: 7.99,
    description: 'Ultra-strong mango with icy finish',
    image: '/images/products/pablo-mango-ice.png',
    category: 'nicotine-pouches',
    brand: 'pablo',
    nicotineStrength: '50mg',
    inStock: true
  },
  {
    id: 'pablo-bubble-gum-50mg',
    name: 'PABLO Bubble Gum',
    price: 7.99,
    description: 'Sweet bubble gum with maximum strength',
    image: '/images/products/pablo-bubble-gum.png',
    category: 'nicotine-pouches',
    brand: 'pablo',
    nicotineStrength: '50mg',
    inStock: true
  },
  {
    id: 'pablo-dark-cherry-50mg',
    name: 'PABLO Dark Cherry',
    price: 7.99,
    description: 'Rich dark cherry with intense nicotine',
    image: '/images/products/pablo-dark-cherry.png',
    category: 'nicotine-pouches',
    brand: 'pablo',
    nicotineStrength: '50mg',
    inStock: true
  },
  {
    id: 'pablo-frosted-ice-50mg',
    name: 'PABLO Frosted Ice',
    price: 7.99,
    description: 'Intense menthol ice with maximum strength',
    image: '/images/products/pablo-frosted-ice.png',
    category: 'nicotine-pouches',
    brand: 'pablo',
    nicotineStrength: '50mg',
    inStock: true
  },

  // SNATCH Products
  {
    id: 'snatch-citrus-16mg',
    name: 'SNATCH Citrus',
    price: 5.99,
    description: 'Zesty citrus blend with strong nicotine',
    image: '/images/products/snatch-citrus.png',
    category: 'nicotine-pouches',
    brand: 'snatch',
    nicotineStrength: '16mg',
    inStock: true
  },

  // DOPE Products
  {
    id: 'dope-blue-12mg',
    name: 'DOPE Blue',
    price: 5.49,
    description: 'Refreshing blue raspberry flavor',
    image: '/images/products/dope-blue.png',
    category: 'nicotine-pouches',
    brand: 'dope',
    nicotineStrength: '12mg',
    inStock: true
  },
  {
    id: 'dope-black-35mg',
    name: 'DOPE Black',
    price: 6.99,
    description: 'Extra strong black edition with intense nicotine',
    image: '/images/products/dope-black.png',
    category: 'nicotine-pouches',
    brand: 'dope',
    nicotineStrength: '35mg',
    inStock: true
  },

  // ZOLT Products
  {
    id: 'zolt-wintergreen-15mg',
    name: 'ZOLT Wintergreen',
    price: 5.99,
    description: 'Classic wintergreen with strong nicotine',
    image: '/images/products/zolt-wintergreen.png',
    category: 'nicotine-pouches',
    brand: 'zolt',
    nicotineStrength: '15mg',
    inStock: true
  },
  {
    id: 'zolt-cool-mint-15mg',
    name: 'ZOLT Cool Mint',
    price: 5.99,
    description: 'Refreshing cool mint experience',
    image: '/images/products/zolt-cool-mint.png',
    category: 'nicotine-pouches',
    brand: 'zolt',
    nicotineStrength: '15mg',
    inStock: true
  },
  {
    id: 'zolt-sour-apple-15mg',
    name: 'ZOLT Sour Apple',
    price: 5.99,
    description: 'Tangy sour apple flavor',
    image: '/images/products/zolt-sour-apple.png',
    category: 'nicotine-pouches',
    brand: 'zolt',
    nicotineStrength: '15mg',
    inStock: true
  },
  {
    id: 'zolt-spearmint-15mg',
    name: 'ZOLT Spearmint',
    price: 5.99,
    description: 'Classic spearmint taste',
    image: '/images/products/zolt-spearmint.png',
    category: 'nicotine-pouches',
    brand: 'zolt',
    nicotineStrength: '15mg',
    inStock: true
  },
  {
    id: 'zolt-coffee-15mg',
    name: 'ZOLT Coffee',
    price: 5.99,
    description: 'Rich coffee flavor with strong nicotine',
    image: '/images/products/zolt-coffee.png',
    category: 'nicotine-pouches',
    brand: 'zolt',
    nicotineStrength: '15mg',
    inStock: true
  },

  // Boss Bar 18000 Puff Products
  {
    id: 'boss-bar-watermelon-ice-18000',
    name: 'Boss Bar Watermelon Ice 18000',
    price: 24.99,
    description: 'Refreshing watermelon with icy finish - 18000 puffs',
    image: '/images/products/boss-bar-watermelon-ice.png',
    category: '5-percent-vapes',
    brand: 'boss-bar',
    inStock: true
  },
  {
    id: 'boss-bar-blood-orange-bull-18000',
    name: 'Boss Bar Blood Orange Bull 18000',
    price: 24.99,
    description: 'Energizing blood orange with bull flavor - 18000 puffs',
    image: '/images/products/boss-bar-blood-orange-bull.png',
    category: '5-percent-vapes',
    brand: 'boss-bar',
    inStock: true
  },
  {
    id: 'boss-bar-menthol-18000',
    name: 'Boss Bar Menthol 18000',
    price: 24.99,
    description: 'Classic menthol flavor - 18000 puffs',
    image: '/images/products/boss-bar-menthol.png',
    category: '5-percent-vapes',
    brand: 'boss-bar',
    inStock: true
  },
  {
    id: 'boss-bar-spearmint-18000',
    name: 'Boss Bar Spearmint 18000',
    price: 24.99,
    description: 'Refreshing spearmint taste - 18000 puffs',
    image: '/images/products/boss-bar-spearmint.png',
    category: '5-percent-vapes',
    brand: 'boss-bar',
    inStock: true
  },
  {
    id: 'boss-bar-gummy-bear-18000',
    name: 'Boss Bar Gummy Bear 18000',
    price: 24.99,
    description: 'Sweet gummy bear flavor - 18000 puffs',
    image: '/images/products/boss-bar-gummy-bear.png',
    category: '5-percent-vapes',
    brand: 'boss-bar',
    inStock: true
  },
  {
    id: 'boss-bar-cherry-cola-18000',
    name: 'Boss Bar Cherry Cola 18000',
    price: 24.99,
    description: 'Classic cherry cola taste - 18000 puffs',
    image: '/images/products/boss-bar-cherry-cola.png',
    category: '5-percent-vapes',
    brand: 'boss-bar',
    inStock: true
  },
  {
    id: 'boss-bar-strawberry-watermelon-18000',
    name: 'Boss Bar Strawberry Watermelon 18000',
    price: 24.99,
    description: 'Sweet strawberry watermelon blend - 18000 puffs',
    image: '/images/products/boss-bar-strawberry-watermelon.png',
    category: '5-percent-vapes',
    brand: 'boss-bar',
    inStock: true
  },

  // Lost Mary Products
  {
    id: 'lost-mary-blue-baza-splash-20000',
    name: 'Lost Mary Blue Baza Splash 20000',
    price: 27.99,
    description: 'Refreshing blue razz splash flavor - 20000 puffs',
    image: '/images/products/lost-mary-blue-baza-splash.png',
    category: '5-percent-vapes',
    brand: 'lost-mary',
    inStock: true
  },
  {
    id: 'lost-mary-strawberry-ice-20000',
    name: 'Lost Mary Strawberry Ice 20000',
    price: 27.99,
    description: 'Sweet strawberry with icy finish - 20000 puffs',
    image: '/images/products/lost-mary-strawberry-ice.png',
    category: '5-percent-vapes',
    brand: 'lost-mary',
    inStock: true
  },
  {
    id: 'lost-mary-mango-twist-20000',
    name: 'Lost Mary Mango Twist 20000',
    price: 27.99,
    description: 'Tropical mango with a twist - 20000 puffs',
    image: '/images/products/lost-mary-mango-twist.png',
    category: '5-percent-vapes',
    brand: 'lost-mary',
    inStock: true
  },
  {
    id: 'lost-mary-pina-colada-20000',
    name: 'Lost Mary Piña Colada 20000',
    price: 27.99,
    description: 'Tropical piña colada blend - 20000 puffs',
    image: '/images/products/lost-mary-pina-colada.png',
    category: '5-percent-vapes',
    brand: 'lost-mary',
    inStock: true
  },
  {
    id: 'lost-mary-peach-plus-20000',
    name: 'Lost Mary Peach+ 20000',
    price: 27.99,
    description: 'Enhanced peach flavor - 20000 puffs',
    image: '/images/products/lost-mary-peach-plus.png',
    category: '5-percent-vapes',
    brand: 'lost-mary',
    inStock: true
  },
  {
    id: 'lost-mary-lime-grapefruit-20000',
    name: 'Lost Mary Lime Grapefruit 20000',
    price: 27.99,
    description: 'Citrus blend of lime and grapefruit - 20000 puffs',
    image: '/images/products/lost-mary-lime-grapefruit.png',
    category: '5-percent-vapes',
    brand: 'lost-mary',
    inStock: true
  },
  {
    id: 'lost-mary-orange-pomegranate-cranberry-20000',
    name: 'Lost Mary Orange Pomegranate Cranberry 20000',
    price: 27.99,
    description: 'Complex blend of orange, pomegranate, and cranberry - 20000 puffs',
    image: '/images/products/lost-mary-orange-pomegranate-cranberry.png',
    category: '5-percent-vapes',
    brand: 'lost-mary',
    inStock: true
  },
  {
    id: 'lost-mary-supermint-25000',
    name: 'Lost Mary Supermint 25000',
    price: 29.99,
    description: 'Extra strong mint flavor - 25000 puffs',
    image: '/images/products/lost-mary-supermint.png',
    category: '5-percent-vapes',
    brand: 'lost-mary',
    inStock: true
  },

  // Level X 25000 Puff Pods
  {
    id: 'levelx-sic-strawberry-25000',
    name: 'Level X Sic Strawberry 25000',
    price: 29.99,
    description: 'Intense strawberry flavor - 25000 puffs',
    image: '/images/products/levelx-sic-strawberry.png',
    category: 'other-products',
    brand: 'levelx',
    inStock: true
  },
  {
    id: 'levelx-bomb-blue-razz-25000',
    name: 'Level X Bomb Blue Razz 25000',
    price: 29.99,
    description: 'Explosive blue raspberry flavor - 25000 puffs',
    image: '/images/products/levelx-bomb-blue-razz.png',
    category: 'other-products',
    brand: 'levelx',
    inStock: true
  },
  {
    id: 'levelx-boss-blueberry-25000',
    name: 'Level X Boss Blueberry 25000',
    price: 29.99,
    description: 'Premium blueberry taste - 25000 puffs',
    image: '/images/products/levelx-boss-blueberry.png',
    category: 'other-products',
    brand: 'levelx',
    inStock: true
  },
  {
    id: 'levelx-watermelon-chew-25000',
    name: 'Level X Watermelon Chew 25000',
    price: 29.99,
    description: 'Juicy watermelon candy flavor - 25000 puffs',
    image: '/images/products/levelx-watermelon-chew.png',
    category: 'other-products',
    brand: 'levelx',
    inStock: true
  },
  {
    id: 'levelx-rainbow-skittles-25000',
    name: 'Level X Rainbow Skittles 25000',
    price: 29.99,
    description: 'Taste the rainbow flavor - 25000 puffs',
    image: '/images/products/levelx-rainbow-skittles.png',
    category: 'other-products',
    brand: 'levelx',
    inStock: true
  },
  {
    id: 'levelx-gusto-green-apple-25000',
    name: 'Level X Gusto Green Apple 25000',
    price: 29.99,
    description: 'Tangy green apple taste - 25000 puffs',
    image: '/images/products/levelx-gusto-green-apple.png',
    category: 'other-products',
    brand: 'levelx',
    inStock: true
  },
  {
    id: 'levelx-extreme-mint-25000',
    name: 'Level X Extreme Mint 25000',
    price: 29.99,
    description: 'Super strong mint flavor - 25000 puffs',
    image: '/images/products/levelx-extreme-mint.png',
    category: 'other-products',
    brand: 'levelx',
    inStock: true
  },
  {
    id: 'levelx-grovy-grape-passionfruit-25000',
    name: 'Level X Grovy Grape Passionfruit 25000',
    price: 29.99,
    description: 'Grape and passionfruit blend - 25000 puffs',
    image: '/images/products/levelx-grovy-grape-passionfruit.png',
    category: 'other-products',
    brand: 'levelx',
    inStock: true
  },
  {
    id: 'levelx-mad-mango-peach-25000',
    name: 'Level X Mad Mango Peach 25000',
    price: 29.99,
    description: 'Tropical mango peach mix - 25000 puffs',
    image: '/images/products/levelx-mad-mango-peach.png',
    category: 'other-products',
    brand: 'levelx',
    inStock: true
  },
  {
    id: 'levelx-packin-peach-berry-25000',
    name: 'Level X Packin Peach Berry 25000',
    price: 29.99,
    description: 'Sweet peach and berry combination - 25000 puffs',
    image: '/images/products/levelx-packin-peach-berry.png',
    category: 'other-products',
    brand: 'levelx',
    inStock: true
  },

  // Z Pods Products
  {
    id: 'zpods-mango-peach',
    name: 'Z Pods Mango Peach',
    price: 19.99,
    description: 'Tropical mango and sweet peach blend',
    image: '/images/products/zpods-mango-peach.png',
    category: 'other-products',
    brand: 'zpods',
    inStock: true
  },
  {
    id: 'zpods-cotton-fluff',
    name: 'Z Pods Cotton Fluff',
    price: 19.99,
    description: 'Sweet cotton candy flavor',
    image: '/images/products/zpods-cotton-fluff.png',
    category: 'other-products',
    brand: 'zpods',
    inStock: true
  },
  {
    id: 'zpods-honeydew-melon-ice',
    name: 'Z Pods Honeydew Melon Ice',
    price: 19.99,
    description: 'Sweet honeydew with cooling ice',
    image: '/images/products/zpods-honeydew-melon-ice.png',
    category: 'other-products',
    brand: 'zpods',
    inStock: true
  },
  {
    id: 'zpods-guava-lychee',
    name: 'Z Pods Guava Lychee',
    price: 19.99,
    description: 'Tropical guava and lychee combination',
    image: '/images/products/zpods-guava-lychee.png',
    category: 'other-products',
    brand: 'zpods',
    inStock: true
  },
  {
    id: 'zpods-berry-mix',
    name: 'Z Pods Berry Mix',
    price: 19.99,
    description: 'Mixed berry medley',
    image: '/images/products/zpods-berry-mix.png',
    category: 'other-products',
    brand: 'zpods',
    inStock: true
  },
  {
    id: 'zpods-banana',
    name: 'Z Pods Banana',
    price: 19.99,
    description: 'Sweet ripe banana flavor',
    image: '/images/products/zpods-banana.png',
    category: 'other-products',
    brand: 'zpods',
    inStock: true
  },
  {
    id: 'zpods-strawberry-watermelon-ice',
    name: 'Z Pods Strawberry Watermelon Ice',
    price: 19.99,
    description: 'Strawberry and watermelon with cooling finish',
    image: '/images/products/zpods-strawberry-watermelon-ice.png',
    category: 'other-products',
    brand: 'zpods',
    inStock: true
  },
  {
    id: 'zpods-pog',
    name: 'Z Pods POG',
    price: 19.99,
    description: 'Passion fruit, Orange, and Guava blend',
    image: '/images/products/zpods-pog.png',
    category: 'other-products',
    brand: 'zpods',
    inStock: true
  },
  {
    id: 'zpods-mint',
    name: 'Z Pods Mint',
    price: 19.99,
    description: 'Refreshing mint flavor',
    image: '/images/products/zpods-mint.png',
    category: 'other-products',
    brand: 'zpods',
    inStock: true
  },
  {
    id: 'zpods-sktl-ice',
    name: 'Z Pods SKTL Ice',
    price: 19.99,
    description: 'Rainbow candy with ice',
    image: '/images/products/zpods-sktl-ice.png',
    category: 'other-products',
    brand: 'zpods',
    inStock: true
  },
  {
    id: 'zpods-watermelon',
    name: 'Z Pods Watermelon',
    price: 19.99,
    description: 'Sweet watermelon flavor',
    image: '/images/products/zpods-watermelon.png',
    category: 'other-products',
    brand: 'zpods',
    inStock: true
  },
  {
    id: 'zpods-watermelon-ice',
    name: 'Z Pods Watermelon Ice',
    price: 19.99,
    description: 'Watermelon with cooling ice finish',
    image: '/images/products/zpods-watermelon-ice.png',
    category: 'other-products',
    brand: 'zpods',
    inStock: true
  },
  {
    id: 'zpods-watermelon-banana',
    name: 'Z Pods Watermelon Banana',
    price: 19.99,
    description: 'Watermelon and banana combination',
    image: '/images/products/zpods-watermelon-banana.png',
    category: 'other-products',
    brand: 'zpods',
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
