'use client';

import { useState } from 'react';

export default function ProductGrid() {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [activeFilters, setActiveFilters] = useState(['Samsung', 'Apple', 'Pocco', 'Metallic', '4 star', '3 star']);

  const products = [
    {
      id: 1,
      name: 'GoPro HERO8 4K Action Camera - Black',
      price: 99.50,
      oldPrice: 1128.00,
      rating: 7.5,
      orders: 154,
      image: '📷',
      freeShipping: true
    },
    {
      id: 2,
      name: 'GoPro HERO8 4K Action Camera - Black',
      price: 99.50,
      oldPrice: 1128.00,
      rating: 5.0,
      orders: 154,
      image: '📱',
      freeShipping: true
    },
    {
      id: 3,
      name: 'GoPro HERO8 4K Action Camera - Black',
      price: 99.50,
      rating: 7.5,
      orders: 154,
      image: '📱',
      freeShipping: true
    },
    {
      id: 4,
      name: 'GoPro HERO8 4K Action Camera - Black',
      price: 99.50,
      oldPrice: 1128.00,
      rating: 7.5,
      orders: 154,
      image: '📱',
      freeShipping: true
    },
    {
      id: 5,
      name: 'GoPro HERO8 4K Action Camera - Black',
      price: 99.50,
      oldPrice: 1128.00,
      rating: 7.5,
      orders: 154,
      image: '📷',
      freeShipping: true
    },
    {
      id: 6,
      name: 'GoPro HERO8 4K Action Camera - Black',
      price: 99.50,
      rating: 7.5,
      orders: 154,
      image: '💻',
      freeShipping: true
    },
    {
      id: 7,
      name: 'GoPro HERO8 4K Action Camera - Black',
      price: 99.50,
      oldPrice: 1128.00,
      rating: 7.5,
      orders: 154,
      image: '⌚',
      freeShipping: true
    },
    {
      id: 8,
      name: 'GoPro HERO8 4K Action Camera - Black',
      price: 99.50,
      oldPrice: 1128.00,
      rating: 7.5,
      orders: 154,
      image: '📷',
      freeShipping: true
    },
    {
      id: 9,
      name: 'GoPro HERO8 4K Action Camera - Black',
      price: 99.50,
      rating: 7.5,
      orders: 154,
      image: '🎧',
      freeShipping: true
    }
  ];

  const removeFilter = (filter) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
  };

  return (
    <div className="flex-1">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-semibold text-gray-800">12,911 items in Mobile accessory</h1>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded" />
            <span className="text-sm text-gray-600">Verified only</span>
          </label>
          <select className="px-3 py-2 border rounded-md text-sm">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setViewMode('grid')}
            className={`p-2 border rounded hover:bg-gray-50 ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={`p-2 border rounded hover:bg-gray-50 ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="flex items-center gap-2 mb-6 flex-wrap">
          {activeFilters.map((filter, index) => (
            <span key={index} className="inline-flex items-center gap-2 px-3 py-1 bg-white border rounded-md text-sm">
              {filter}
              <button onClick={() => removeFilter(filter)} className="text-gray-400 hover:text-gray-600">
                ×
              </button>
            </span>
          ))}
          <button onClick={clearAllFilters} className="text-sm text-blue-500 hover:underline">
            Clear all filter
          </button>
        </div>
      )}

      {/* Grid View */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              {/* Product Image */}
              <div className="aspect-square bg-gray-100 flex items-center justify-center text-6xl">
                {product.image}
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="text-lg font-bold text-gray-800">${product.price.toFixed(2)}</div>
                    {product.oldPrice && (
                      <div className="text-sm text-gray-400 line-through">${product.oldPrice.toFixed(2)}</div>
                    )}
                  </div>
                  <button className="text-gray-400 hover:text-red-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < 4 ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                    ))}
                  </div>
                  <span className="text-sm text-yellow-600 font-medium">{product.rating}</span>
                </div>
                
                <h3 className="text-sm text-gray-600 line-clamp-2">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* List View */}
      {viewMode === 'list' && (
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                {/* Product Image */}
                <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center text-6xl flex-shrink-0">
                  {product.image}
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < 4 ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                        ))}
                      </div>
                      <span className="text-sm text-yellow-600 font-medium">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">• {product.orders} orders</span>
                    {product.freeShipping && (
                      <span className="text-sm text-green-600 font-medium">• Free Shipping</span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua
                  </p>
                  <button className="text-blue-500 text-sm hover:underline">View details</button>
                </div>

                {/* Price and Actions */}
                <div className="flex flex-col items-end justify-between w-32">
                  <button className="text-gray-400 hover:text-red-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-800">${product.price.toFixed(2)}</div>
                    {product.oldPrice && (
                      <div className="text-sm text-gray-400 line-through">${product.oldPrice.toFixed(2)}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
