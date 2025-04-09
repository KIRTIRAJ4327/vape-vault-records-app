
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { products } from '../data/mockData';
import { ChevronLeft, ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart, cart } = useCart();
  const navigate = useNavigate();
  const [added, setAdded] = useState(false);
  
  if (!productId) {
    return (
      <Layout>
        <div className="text-center py-8">
          <p>Product not found</p>
          <Link to="/products" className="text-vape-purple mt-2 block">
            Back to Products
          </Link>
        </div>
      </Layout>
    );
  }
  
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return (
      <Layout>
        <div className="text-center py-8">
          <p>Product not found</p>
          <Link to="/products" className="text-vape-purple mt-2 block">
            Back to Products
          </Link>
        </div>
      </Layout>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    
    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };
  
  const goToCart = () => {
    navigate('/cart');
  };
  
  const isInCart = cart.some(item => item.product.id === product.id);
  
  return (
    <Layout>
      <div className="pb-24">
        {/* Back link */}
        <Link to="/products" className="inline-flex items-center text-vape-gray hover:text-vape-purple mb-4">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Products
        </Link>
        
        {/* Product image and details */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          <div className="h-64 overflow-hidden bg-vape-soft-blue flex items-center justify-center p-6">
            <img 
              src={product.image || 'https://placehold.co/600x400/d3e4fd/3B82F6?text=Product'} 
              alt={product.name} 
              className="max-h-full max-w-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/600x400/d3e4fd/3B82F6?text=Product';
              }}
            />
          </div>
          
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h1 className="text-2xl font-semibold text-vape-dark">{product.name}</h1>
              <span className="text-xl font-bold text-vape-purple">${product.price.toFixed(2)}</span>
            </div>
            
            <p className="text-vape-gray mb-4">{product.description}</p>
            
            <div className="space-y-4">
              {product.nicotineStrength && (
                <div className="flex items-center">
                  <span className="text-vape-gray mr-2">Nicotine Strength:</span>
                  <span className="px-3 py-1 bg-vape-light-purple text-vape-purple rounded-full text-sm font-medium">
                    {product.nicotineStrength}
                  </span>
                </div>
              )}
              
              <div className="flex items-center">
                <span className="text-vape-gray mr-2">Brand:</span>
                <Link to={`/brand/${product.brand}`} className="text-vape-purple capitalize">
                  {product.brand.replace('-', ' ')}
                </Link>
              </div>
              
              <div className="flex items-center">
                <span className="text-vape-gray mr-2">Category:</span>
                <Link to={`/category/${product.category}`} className="text-vape-purple">
                  {product.category === 'nicotine-pouches' ? 'Nicotine Pouches' : 
                   product.category === '5-percent-vapes' ? '5% Vapes' : 'Other Products'}
                </Link>
              </div>
              
              <div className="flex items-center">
                <span className="text-vape-gray mr-2">Availability:</span>
                {product.inStock ? (
                  <span className="text-green-600 flex items-center">
                    <Check className="w-4 h-4 mr-1" />
                    In Stock
                  </span>
                ) : (
                  <span className="text-red-600">Out of Stock</span>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock || added}
            className={`flex-1 py-3 px-4 rounded-lg font-medium flex items-center justify-center transition-colors ${
              !product.inStock
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : added
                ? 'bg-green-500 text-white'
                : 'bg-vape-purple text-white hover:bg-vape-purple/90'
            }`}
          >
            {added ? (
              <>
                <Check className="w-5 h-5 mr-2" />
                Added to Cart
              </>
            ) : (
              <>
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </>
            )}
          </button>
          
          {isInCart && (
            <button
              onClick={goToCart}
              className="flex-1 py-3 px-4 rounded-lg font-medium bg-vape-dark text-white hover:bg-vape-dark/90 transition-colors flex items-center justify-center"
            >
              View Cart
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
