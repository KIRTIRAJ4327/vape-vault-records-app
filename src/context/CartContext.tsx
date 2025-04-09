
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, Purchase } from '../types';
import { toast } from 'sonner';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  cartTotal: number;
  savePurchase: (customerName: string, storeName?: string) => void;
  purchases: Purchase[];
  getPurchasesByCustomer: (customerName: string) => Purchase[];
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [cartTotal, setCartTotal] = useState(0);

  // Load purchases from localStorage on initial render
  useEffect(() => {
    const savedPurchases = localStorage.getItem('purchases');
    if (savedPurchases) {
      setPurchases(JSON.parse(savedPurchases));
    }
  }, []);

  // Calculate cart total whenever cart changes
  useEffect(() => {
    const total = cart.reduce((sum, item) => {
      return sum + (item.product.price * item.quantity);
    }, 0);
    setCartTotal(Number(total.toFixed(2)));
  }, [cart]);

  // Save purchases to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('purchases', JSON.stringify(purchases));
  }, [purchases]);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      
      if (existingItem) {
        return prevCart.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
    
    toast.success(`Added ${product.name} to cart`);
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseQuantity = (productId: string) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.product.id === productId 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      )
    );
  };

  const decreaseQuantity = (productId: string) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.product.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      )
    );
  };

  const savePurchase = (customerName: string, storeName?: string) => {
    if (cart.length === 0) {
      toast.error('Cart is empty');
      return;
    }

    if (!customerName.trim()) {
      toast.error('Customer name is required');
      return;
    }

    const newPurchase: Purchase = {
      id: Date.now().toString(),
      customerName,
      date: new Date().toISOString(),
      products: [...cart],
      total: cartTotal,
      storeName: storeName?.trim() || undefined
    };

    setPurchases(prevPurchases => [...prevPurchases, newPurchase]);
    clearCart();
    toast.success(`Purchase saved for ${customerName}`);
  };

  const getPurchasesByCustomer = (customerName: string) => {
    const lowercaseName = customerName.toLowerCase();
    return purchases.filter(purchase => 
      purchase.customerName.toLowerCase().includes(lowercaseName)
    );
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart,
      increaseQuantity,
      decreaseQuantity,
      cartTotal,
      savePurchase,
      purchases,
      getPurchasesByCustomer
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
