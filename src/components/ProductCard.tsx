import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { PlusCircle } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [imageError, setImageError] = useState(false);
  
  // Use a placeholder image if the actual image is not available or fails to load
  const imageUrl = !imageError ? product.image : 'https://placehold.co/600x400/d3e4fd/3B82F6?text=Product';

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link 
      to={`/product/${product.id}`} 
      className="product-card block bg-white rounded-xl shadow-sm overflow-hidden h-full border border-gray-100"
    >
      <div className="h-48 overflow-hidden bg-vape-soft-blue flex items-center justify-center p-4">
        <img 
          src={imageUrl} 
          alt={product.name} 
          className="max-h-full max-w-full object-contain"
          onError={() => {
            console.log('Image failed to load:', imageUrl);
            setImageError(true);
          }}
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-base font-medium text-vape-dark">{product.name}</h3>
          <span className="font-semibold text-vape-purple">${product.price.toFixed(2)}</span>
        </div>
        
        <p className="text-sm text-vape-gray mt-1 line-clamp-2">{product.description}</p>
        
        {product.nicotineStrength && (
          <div className="mt-2">
            <span className="text-xs px-2 py-1 bg-vape-light-purple text-vape-purple rounded-full">
              {product.nicotineStrength}
            </span>
          </div>
        )}
        
        <div className="flex justify-between items-center mt-3">
          {!product.inStock ? (
            <span className="text-xs px-2 py-1 bg-red-100 text-red-600 rounded-full">Out of Stock</span>
          ) : (
            <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full">In Stock</span>
          )}
          
          <button 
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`p-2 rounded-full ${product.inStock ? 'text-vape-purple hover:bg-vape-light-purple' : 'text-gray-400 cursor-not-allowed'}`}
          >
            <PlusCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
