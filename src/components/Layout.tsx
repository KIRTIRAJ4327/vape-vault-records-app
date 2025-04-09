
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, Home, Package, History } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const { cart } = useCart();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-vape-purple font-bold text-2xl">VapeVault</span>
          </Link>
          
          <Link to="/search" className="relative">
            <Search className="text-vape-purple w-6 h-6" />
          </Link>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6 animate-fade-in">
        {children}
      </main>
      
      {/* Navigation */}
      <nav className="bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] py-3 px-6 sticky bottom-0">
        <div className="container mx-auto">
          <div className="flex justify-around items-center">
            <Link to="/" className={`flex flex-col items-center ${isActive('/') ? 'text-vape-purple' : 'text-gray-500'}`}>
              <Home className="w-6 h-6" />
              <span className="text-xs mt-1">Home</span>
            </Link>
            
            <Link to="/products" className={`flex flex-col items-center ${isActive('/products') ? 'text-vape-purple' : 'text-gray-500'}`}>
              <Package className="w-6 h-6" />
              <span className="text-xs mt-1">Products</span>
            </Link>
            
            <Link to="/cart" className={`flex flex-col items-center relative ${isActive('/cart') ? 'text-vape-purple' : 'text-gray-500'}`}>
              <ShoppingCart className="w-6 h-6" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-vape-purple text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
              <span className="text-xs mt-1">Cart</span>
            </Link>
            
            <Link to="/history" className={`flex flex-col items-center ${isActive('/history') ? 'text-vape-purple' : 'text-gray-500'}`}>
              <History className="w-6 h-6" />
              <span className="text-xs mt-1">History</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Layout;
