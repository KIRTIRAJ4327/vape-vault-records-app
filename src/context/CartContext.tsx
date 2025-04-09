import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, Purchase } from '../types';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  cartTotal: number;
  savePurchase: (customerName: string, storeName?: string) => Promise<void>;
  purchases: Purchase[];
  getPurchasesByCustomer: (customerName: string) => Purchase[];
  loadPurchases: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [cartTotal, setCartTotal] = useState(0);

  // Load purchases from Supabase on initial render
  useEffect(() => {
    loadPurchases();
  }, []);

  // Calculate cart total whenever cart changes
  useEffect(() => {
    const total = cart.reduce((sum, item) => {
      return sum + (item.product.price * item.quantity);
    }, 0);
    setCartTotal(Number(total.toFixed(2)));
  }, [cart]);

  const loadPurchases = async () => {
    try {
      const { data, error } = await supabase
        .from('purchases')
        .select('*')
        .order('date', { ascending: false });

      if (error) {
        console.error('Error loading purchases:', error);
        return;
      }

      // Transform database records to Purchase objects
      const formattedPurchases: Purchase[] = data.map(item => ({
        id: item.id,
        customerName: item.customer_name,
        storeName: item.store_name || undefined,
        date: item.date,
        products: item.products,
        total: Number(item.total)
      }));

      setPurchases(formattedPurchases);
    } catch (error) {
      console.error('Error loading purchases:', error);
    }
  };

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

  const savePurchase = async (customerName: string, storeName?: string) => {
    if (cart.length === 0) {
      toast.error('Cart is empty');
      return;
    }

    if (!customerName.trim()) {
      toast.error('Customer name is required');
      return;
    }

    try {
      // Create new purchase object
      const newPurchase: Purchase = {
        id: crypto.randomUUID(),
        customerName,
        date: new Date().toISOString(),
        products: [...cart],
        total: cartTotal,
        storeName: storeName?.trim() || undefined
      };

      // Save to Supabase
      const { error } = await supabase
        .from('purchases')
        .insert({
          id: newPurchase.id,
          customer_name: newPurchase.customerName,
          store_name: newPurchase.storeName,
          date: newPurchase.date,
          products: newPurchase.products,
          total: newPurchase.total
        });

      if (error) {
        console.error('Error saving purchase:', error);
        toast.error('Failed to save purchase. Please try again.');
        return;
      }

      // Update local state
      setPurchases(prevPurchases => [newPurchase, ...prevPurchases]);
      clearCart();
      toast.success(`Purchase saved for ${customerName}`);
    } catch (error) {
      console.error('Error saving purchase:', error);
      toast.error('Failed to save purchase. Please try again.');
    }
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
      getPurchasesByCustomer,
      loadPurchases
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
