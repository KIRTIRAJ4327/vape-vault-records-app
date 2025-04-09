
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { brands, getProductsByBrand } from '../data/mockData';
import { ChevronLeft } from 'lucide-react';

const BrandPage = () => {
  const { brandId } = useParams<{ brandId: string }>();
  
  if (!brandId) {
    return (
      <Layout>
        <div className="text-center py-8">
          <p>Brand not found</p>
          <Link to="/products" className="text-vape-purple mt-2 block">
            Back to Products
          </Link>
        </div>
      </Layout>
    );
  }
  
  const brand = brands.find(b => b.id === brandId);
  const products = getProductsByBrand(brandId);
  
  if (!brand) {
    return (
      <Layout>
        <div className="text-center py-8">
          <p>Brand not found</p>
          <Link to="/products" className="text-vape-purple mt-2 block">
            Back to Products
          </Link>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="space-y-8 pb-16">
        {/* Header */}
        <div>
          <Link to="/products" className="inline-flex items-center text-vape-gray hover:text-vape-purple mb-4">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Products
          </Link>
          
          <div className="flex items-center">
            <div className="w-16 h-16 bg-vape-soft-peach rounded-lg overflow-hidden flex items-center justify-center mr-4">
              <img 
                src={brand.image || 'https://placehold.co/600x400/fde1d3/F97316?text=Brand'} 
                alt={brand.name} 
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/600x400/fde1d3/F97316?text=Brand';
                }}
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">{brand.name}</h1>
              <p className="text-vape-gray">
                {brand.category === 'nicotine-pouches' ? 'Nicotine Pouches' : 
                 brand.category === '5-percent-vapes' ? '5% Vapes' : 'Other Products'}
              </p>
            </div>
          </div>
        </div>
        
        {/* Products section */}
        <section>
          <h2 className="text-xl font-medium mb-4">Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.length > 0 ? (
              products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-vape-gray">No products found for this brand</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BrandPage;
