
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  brand: string;
  nicotineStrength?: string;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface Brand {
  id: string;
  name: string;
  category: string;
  image: string;
}

export interface Purchase {
  id: string;
  customerName: string;
  date: string;
  products: CartItem[];
  total: number;
  storeName?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
