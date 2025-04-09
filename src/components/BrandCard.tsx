
import React from 'react';
import { Link } from 'react-router-dom';
import { Brand } from '../types';

interface BrandCardProps {
  brand: Brand;
}

const BrandCard: React.FC<BrandCardProps> = ({ brand }) => {
  // Use a placeholder image if the actual image is not available
  const imageUrl = brand.image || 'https://placehold.co/600x400/fde1d3/F97316?text=Brand';

  return (
    <Link 
      to={`/brand/${brand.id}`} 
      className="block bg-white rounded-xl shadow-sm overflow-hidden h-full border border-gray-100 hover:shadow-md transition-shadow"
    >
      <div className="h-32 overflow-hidden bg-vape-soft-peach flex items-center justify-center p-4">
        <img 
          src={imageUrl} 
          alt={brand.name} 
          className="max-h-full max-w-full object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://placehold.co/600x400/fde1d3/F97316?text=Brand';
          }}
        />
      </div>
      <div className="p-3 text-center">
        <h3 className="text-base font-medium text-vape-dark">{brand.name}</h3>
      </div>
    </Link>
  );
};

export default BrandCard;
