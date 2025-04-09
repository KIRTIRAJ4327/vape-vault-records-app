
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { searchProducts } from '../data/mockData';
import { Search, X } from 'lucide-react';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<ReturnType<typeof searchProducts>>([]);
  const [isSearching, setIsSearching] = useState(false);
  
  useEffect(() => {
    if (query.trim().length > 0) {
      setIsSearching(true);
      
      // Small delay to simulate API call and avoid too many searches while typing
      const timer = setTimeout(() => {
        setSearchResults(searchProducts(query));
        setIsSearching(false);
      }, 300);
      
      return () => clearTimeout(timer);
    } else {
      setSearchResults([]);
    }
  }, [query]);
  
  const handleClearSearch = () => {
    setQuery('');
    setSearchResults([]);
  };
  
  return (
    <Layout>
      <div className="space-y-6 pb-16">
        <h1 className="text-2xl font-semibold mb-4">Search Products</h1>
        
        {/* Search input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className={`h-5 w-5 ${isSearching ? 'text-vape-purple search-pulse' : 'text-gray-400'}`} />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by product name, brand, or keyword..."
            className="pl-10 pr-10 py-3 w-full rounded-lg border border-gray-200 focus:border-vape-purple focus:ring-1 focus:ring-vape-purple"
          />
          {query && (
            <button 
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={handleClearSearch}
            >
              <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>
        
        {/* Search results */}
        <div className="mt-6">
          {isSearching ? (
            <div className="text-center py-8">
              <p className="text-vape-gray">Searching...</p>
            </div>
          ) : query && searchResults.length > 0 ? (
            <>
              <h2 className="text-lg font-medium mb-4">Search Results ({searchResults.length})</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {searchResults.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : query ? (
            <div className="text-center py-8">
              <p className="text-vape-gray">No products found for "{query}"</p>
              <button 
                onClick={handleClearSearch}
                className="mt-2 text-vape-purple"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="text-center py-12 px-4">
              <div className="mb-6 text-vape-purple">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium mb-2">Search for Products</h3>
              <p className="text-vape-gray">
                Type product names, brands, or keywords to find what you're looking for
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
