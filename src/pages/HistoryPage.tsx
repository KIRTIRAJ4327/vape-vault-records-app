
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { useCart } from '../context/CartContext';
import { Calendar, Search, ChevronDown, ChevronUp, Package, RefreshCw } from 'lucide-react';
import { format } from 'date-fns';

const HistoryPage = () => {
  const { purchases, getPurchasesByCustomer, loadPurchases } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedPurchase, setExpandedPurchase] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const filteredPurchases = searchQuery
    ? getPurchasesByCustomer(searchQuery)
    : [...purchases].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  const toggleExpand = (purchaseId: string) => {
    setExpandedPurchase(expandedPurchase === purchaseId ? null : purchaseId);
  };
  
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'PPP p');
    } catch (error) {
      return dateString;
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      await loadPurchases();
    } catch (error) {
      console.error('Error refreshing purchase history:', error);
    } finally {
      setIsRefreshing(false);
    }
  };
  
  // Refresh data when page loads
  useEffect(() => {
    loadPurchases();
  }, [loadPurchases]);
  
  return (
    <Layout>
      <div className="space-y-6 pb-24">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Purchase History</h1>
          <button 
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="p-2 text-vape-purple hover:bg-vape-light-purple rounded-full transition-colors"
          >
            <RefreshCw className={`h-5 w-5 ${isRefreshing ? 'animate-spin' : ''}`} />
          </button>
        </div>
        
        {/* Search */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by customer name..."
            className="pl-10 py-2 w-full rounded-lg border border-gray-200 focus:border-vape-purple focus:ring-1 focus:ring-vape-purple"
          />
        </div>
        
        {/* Purchases list */}
        {filteredPurchases.length > 0 ? (
          <div className="space-y-4">
            {filteredPurchases.map((purchase) => (
              <div 
                key={purchase.id} 
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
              >
                {/* Purchase header */}
                <div 
                  className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                  onClick={() => toggleExpand(purchase.id)}
                >
                  <div className="flex-grow">
                    <div className="flex items-center mb-1">
                      <h3 className="font-medium">{purchase.customerName}</h3>
                      {purchase.storeName && (
                        <span className="ml-2 text-xs px-2 py-0.5 bg-vape-light-purple text-vape-purple rounded-full">
                          {purchase.storeName}
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-vape-gray flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(purchase.date)}
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="text-right mr-4">
                      <div className="text-sm text-vape-gray">Total</div>
                      <div className="font-semibold">${purchase.total.toFixed(2)}</div>
                    </div>
                    {expandedPurchase === purchase.id ? (
                      <ChevronUp className="w-5 h-5 text-vape-gray" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-vape-gray" />
                    )}
                  </div>
                </div>
                
                {/* Purchase details */}
                {expandedPurchase === purchase.id && (
                  <div className="border-t border-gray-100 p-4 animate-slide-up">
                    <h4 className="font-medium mb-3 text-sm">Products</h4>
                    <div className="space-y-3">
                      {purchase.products.map((item) => (
                        <div key={item.product.id} className="flex items-center">
                          <div className="w-10 h-10 bg-vape-soft-blue rounded-md overflow-hidden flex items-center justify-center mr-3">
                            <img 
                              src={item.product.image || 'https://placehold.co/600x400/d3e4fd/3B82F6?text=Product'} 
                              alt={item.product.name} 
                              className="max-w-full max-h-full object-contain"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = 'https://placehold.co/600x400/d3e4fd/3B82F6?text=Product';
                              }}
                            />
                          </div>
                          <div className="flex-grow">
                            <div className="font-medium text-sm">{item.product.name}</div>
                            {item.product.nicotineStrength && (
                              <div className="text-xs text-vape-gray">
                                {item.product.nicotineStrength}
                              </div>
                            )}
                          </div>
                          <div className="text-sm text-vape-gray">
                            {item.quantity} × ${item.product.price.toFixed(2)}
                          </div>
                          <div className="ml-4 min-w-[70px] text-right font-medium">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-gray-100 flex justify-end">
                      <div className="text-right">
                        <div className="text-sm text-vape-gray">Total</div>
                        <div className="font-semibold">${purchase.total.toFixed(2)}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            {searchQuery ? (
              <div>
                <p className="text-vape-gray mb-2">No purchases found for "{searchQuery}"</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-vape-purple hover:underline"
                >
                  Clear search
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6 text-vape-purple">
                  <Package className="h-16 w-16 mx-auto" />
                </div>
                <h2 className="text-xl font-medium mb-2">No purchase history</h2>
                <p className="text-vape-gray">
                  Your purchase history will appear here once you start saving purchases
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default HistoryPage;
