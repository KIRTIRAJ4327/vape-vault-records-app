
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useCart } from '../context/CartContext';
import { MinusCircle, PlusCircle, Trash2, ShoppingBag, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, cartTotal, savePurchase, clearCart } = useCart();
  const [customerName, setCustomerName] = useState('');
  const [storeName, setStoreName] = useState('');
  const [showSaveModal, setShowSaveModal] = useState(false);
  
  const handleSavePurchase = () => {
    savePurchase(customerName, storeName);
    setShowSaveModal(false);
    setCustomerName('');
    setStoreName('');
  };
  
  return (
    <Layout>
      <div className="space-y-6 pb-24">
        <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
        
        {cart.length > 0 ? (
          <>
            {/* Cart items */}
            <div className="space-y-4">
              {cart.map(item => (
                <div key={item.product.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex items-center">
                  <div className="w-16 h-16 bg-vape-soft-blue rounded-md overflow-hidden flex items-center justify-center mr-4">
                    <img 
                      src={item.product.image || 'https://placehold.co/600x400/d3e4fd/3B82F6?text=Product'} 
                      alt={item.product.name} 
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://placehold.co/600x400/d3e4fd/3B82F6?text=Product';
                      }}
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <Link to={`/product/${item.product.id}`} className="font-medium text-vape-dark hover:text-vape-purple">
                      {item.product.name}
                    </Link>
                    {item.product.nicotineStrength && (
                      <div className="text-xs text-vape-gray mt-1">
                        Strength: {item.product.nicotineStrength}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => decreaseQuantity(item.product.id)}
                      disabled={item.quantity <= 1}
                      className={`p-1 ${item.quantity <= 1 ? 'text-gray-300' : 'text-vape-gray hover:text-vape-purple'}`}
                    >
                      <MinusCircle className="w-5 h-5" />
                    </button>
                    
                    <span className="font-medium">{item.quantity}</span>
                    
                    <button
                      onClick={() => increaseQuantity(item.product.id)}
                      className="p-1 text-vape-gray hover:text-vape-purple"
                    >
                      <PlusCircle className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="min-w-[80px] text-right font-medium">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </div>
                  
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="ml-4 text-gray-400 hover:text-red-500"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
            
            {/* Cart summary */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mt-6">
              <div className="flex justify-between text-lg font-medium mb-4">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowSaveModal(true)}
                  className="flex-1 px-4 py-3 rounded-lg bg-vape-purple text-white font-medium hover:bg-vape-purple/90 flex items-center justify-center"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Save Purchase
                </button>
                
                <button
                  onClick={clearCart}
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-vape-gray font-medium hover:bg-gray-50 flex items-center justify-center"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="mb-6 text-vape-purple">
              <ShoppingBag className="h-16 w-16 mx-auto" />
            </div>
            <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-vape-gray mb-6">Looks like you haven't added any products to your cart yet</p>
            <Link to="/products" className="px-6 py-3 rounded-lg bg-vape-purple text-white font-medium hover:bg-vape-purple/90">
              Browse Products
            </Link>
          </div>
        )}
      </div>
      
      {/* Save Purchase Modal */}
      {showSaveModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Save Purchase</h3>
              <button onClick={() => setShowSaveModal(false)} className="text-vape-gray hover:text-vape-dark">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="customerName" className="block text-sm font-medium text-vape-gray mb-1">
                  Customer Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="customerName"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter customer name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-vape-purple focus:border-vape-purple"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="storeName" className="block text-sm font-medium text-vape-gray mb-1">
                  Store Name (Optional)
                </label>
                <input
                  type="text"
                  id="storeName"
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  placeholder="Enter store name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-vape-purple focus:border-vape-purple"
                />
              </div>
              
              <div className="bg-gray-50 -mx-6 px-6 py-3 mt-4 border-t border-gray-100">
                <div className="flex justify-between text-sm font-medium mb-3">
                  <span>Total Items:</span>
                  <span>{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
                </div>
                <div className="flex justify-between text-base font-semibold">
                  <span>Total Amount:</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => setShowSaveModal(false)}
                  className="px-4 py-2 rounded-md border border-gray-300 text-vape-gray font-medium hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSavePurchase}
                  disabled={!customerName.trim()}
                  className={`px-4 py-2 rounded-md font-medium ${
                    !customerName.trim()
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-vape-purple text-white hover:bg-vape-purple/90'
                  }`}
                >
                  Save Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default CartPage;
