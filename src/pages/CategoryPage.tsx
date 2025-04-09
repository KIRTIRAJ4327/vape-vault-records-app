
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import BrandCard from '../components/BrandCard';
import ProductCard from '../components/ProductCard';
import { categories, getBrandsByCategory, getProductsByCategory } from '../data/mockData';
import { ChevronLeft } from 'lucide-react';

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  if (!categoryId) {
    return (
      <Layout>
        <div className="text-center py-8">
          <p>Category not found</p>
          <Link to="/products" className="text-vape-purple mt-2 block">
            Back to Products
          </Link>
        </div>
      </Layout>
    );
  }
  
  const category = categories.find(c => c.id === categoryId);
  const brands = getBrandsByCategory(categoryId);
  const products = getProductsByCategory(categoryId);
  
  if (!category) {
    return (
      <Layout>
        <div className="text-center py-8">
          <p>Category not found</p>
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
          <h1 className="text-2xl font-semibold">{category.name}</h1>
          <p className="text-vape-gray mt-1">{category.description}</p>
        </div>
        
        {/* Brands section */}
        {brands.length > 0 && (
          <section>
            <h2 className="text-xl font-medium mb-4">Brands</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {brands.map(brand => (
                <BrandCard key={brand.id} brand={brand} />
              ))}
            </div>
          </section>
        )}
        
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
                <p className="text-vape-gray">No products found in this category</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CategoryPage;
