
import React from 'react';
import Layout from '../components/Layout';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../data/mockData';
import { Link } from 'react-router-dom';

const Index = () => {
  // Get featured products (first 4 products that are in stock)
  const featuredProducts = products
    .filter(product => product.inStock)
    .slice(0, 4);

  return (
    <Layout>
      <div className="space-y-8 pb-16">
        {/* Hero section */}
        <section className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-vape-purple to-vape-pink h-64 flex items-center">
          <div className="absolute inset-0 bg-opacity-70 bg-black"></div>
          <div className="relative z-10 text-white p-6 animate-slide-up">
            <h1 className="text-3xl font-bold mb-2">Welcome to VapeVault</h1>
            <p className="text-lg mb-4">Your one-stop shop for premium vape products</p>
            <Link to="/products" className="bg-white text-vape-purple px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors">
              Browse All Products
            </Link>
          </div>
        </section>

        {/* Categories section */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Categories</h2>
            <Link to="/products" className="text-vape-purple font-medium text-sm">View All</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>

        {/* Featured Products section */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Featured Products</h2>
            <Link to="/products" className="text-vape-purple font-medium text-sm">View All</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
