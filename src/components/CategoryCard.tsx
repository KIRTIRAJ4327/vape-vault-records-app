import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const [imageError, setImageError] = useState(false);
  
  // Use a placeholder image if the actual image is not available or fails to load
  const imageUrl = !imageError ? category.image : 'https://placehold.co/600x400/e5deff/8B5CF6?text=Category';

  return (
    <Link 
      to={`/products?category=${category.id}`} 
      className="category-card block bg-white rounded-xl shadow-md overflow-hidden h-full border border-gray-100"
    >
      <div className="h-40 overflow-hidden bg-vape-light-purple">
        <img 
          src={imageUrl} 
          alt={category.name} 
          className="w-full h-full object-cover object-center"
          onError={() => {
            console.log('Category image failed to load:', imageUrl);
            setImageError(true);
          }}
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-vape-dark">{category.name}</h3>
        <p className="text-sm text-vape-gray mt-1">{category.description}</p>
        <div className="flex items-center mt-3 text-vape-purple">
          <span className="text-sm font-medium">View Products</span>
          <ArrowRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
