
import React, { useState } from 'react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { products } from '../data/mockData';
import { Filter } from 'lucide-react';

const Products = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [brandFilter, setBrandFilter] = useState<string | null>(null);
  
  // Get unique categories and brands for filters
  const uniqueCategories = Array.from(new Set(products.map(p => p.category)));
  const uniqueBrands = Array.from(new Set(products.map(p => p.brand)));
  
  // Apply filters
  const filteredProducts = products.filter(product => {
    const categoryMatch = !categoryFilter || product.category === categoryFilter;
    const brandMatch = !brandFilter || product.brand === brandFilter;
    return categoryMatch && brandMatch;
  });
  
  const resetFilters = () => {
    setCategoryFilter(null);
    setBrandFilter(null);
  };
  
  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">All Products</h1>
        <button 
          onClick={() => setFilterOpen(!filterOpen)}
          className="flex items-center text-vape-purple"
        >
          <Filter className="w-5 h-5 mr-1" />
          <span>Filter</span>
        </button>
      </div>
      
      {/* Filter sidebar */}
      {filterOpen && (
        <div className="mb-6 p-4 bg-white rounded-lg shadow-sm border border-gray-100 animate-fade-in">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-medium">Filters</h2>
            <button 
              onClick={resetFilters}
              className="text-sm text-vape-purple"
            >
              Reset
            </button>
          </div>
          
          {/* Category filter */}
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2">Category</h3>
            <div className="space-y-1">
              {uniqueCategories.map(category => (
                <div key={category} className="flex items-center">
                  <input 
                    type="radio"
                    id={`category-${category}`}
                    name="category"
                    checked={categoryFilter === category}
                    onChange={() => setCategoryFilter(category)}
                    className="mr-2"
                  />
                  <label htmlFor={`category-${category}`} className="text-sm">
                    {category === 'nicotine-pouches' ? 'Nicotine Pouches' : 
                     category === '5-percent-vapes' ? '5% Vapes' : 'Other Products'}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Brand filter */}
          <div>
            <h3 className="text-sm font-medium mb-2">Brand</h3>
            <div className="space-y-1">
              {uniqueBrands.map(brand => (
                <div key={brand} className="flex items-center">
                  <input 
                    type="radio"
                    id={`brand-${brand}`}
                    name="brand"
                    checked={brandFilter === brand}
                    onChange={() => setBrandFilter(brand)}
                    className="mr-2"
                  />
                  <label htmlFor={`brand-${brand}`} className="text-sm capitalize">
                    {brand.replace('-', ' ')}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Products grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-16">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-vape-gray">No products match your filters</p>
            <button 
              onClick={resetFilters}
              className="mt-2 text-vape-purple"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Products;
