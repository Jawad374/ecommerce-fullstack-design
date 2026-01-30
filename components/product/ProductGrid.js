'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function ProductGallery() {
  const { filteredProducts, filters, setFilters } = useCart();
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const activeTags = [...filters.brands, ...filters.categories];

  const clearAllFilters = () => {
    setFilters({
      minPrice: 0,
      maxPrice: 10000,
      categories: [],
      brands: [],
      features: []
    });
  };

  const removeTag = (tag) => {
     if (filters.brands.includes(tag)) {
        setFilters(prev => ({...prev, brands: prev.brands.filter(b => b !== tag)}));
     } else if (filters.categories.includes(tag)) {
        setFilters(prev => ({...prev, categories: prev.categories.filter(c => c !== tag)}));
     }
  }

  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-50 min-h-screen font-sans">
      {/* --- Header Toolbar --- */}
      <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3 mb-4 shadow-sm">
        <div className="flex items-center gap-6">
          <span className="text-gray-800">{filteredProducts.length} items found</span>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-0" />
            <span className="text-sm text-gray-700">Verified only</span>
          </label>
        </div>
        
        <div className="flex items-center gap-2">
          <select className="px-3 py-1.5 border border-gray-200 rounded-md text-sm bg-white text-gray-700 outline-none">
            <option>Featured</option>
          </select>
          {/* View Switcher Buttons */}
          <div className="flex border border-gray-200 rounded-md overflow-hidden">
            <button 
              onClick={() => setViewMode('grid')} 
              className={`p-2 transition-colors ${viewMode === 'grid' ? 'bg-gray-100' : 'bg-white hover:bg-gray-50'}`}
              title="Grid View"
            >
              <GridIcon active={viewMode === 'grid'} />
            </button>
            <button 
              onClick={() => setViewMode('list')} 
              className={`p-2 border-l border-gray-200 transition-colors ${viewMode === 'list' ? 'bg-gray-100' : 'bg-white hover:bg-gray-50'}`}
              title="List View"
            >
              <ListIcon active={viewMode === 'list'} />
            </button>
          </div>
        </div>
      </div>

      {/* --- Active Filter Tags --- */}
      {activeTags.length > 0 && (
        <div className="flex items-center gap-2 mb-6 flex-wrap">
          {activeTags.map(filter => (
            <div key={filter} className="flex items-center gap-2 px-3 py-1 bg-white border border-blue-400 rounded-md text-sm text-gray-600">
              {filter}
              <button onClick={() => removeTag(filter)} className="text-gray-400 hover:text-black">×</button>
            </div>
          ))}
          <button onClick={clearAllFilters} className="text-sm text-blue-600 font-medium ml-2 hover:underline">Clear all filter</button>
        </div>
      )}

      {/* --- Dynamic Product Grid/List --- */}
      <div className={viewMode === 'grid' 
        ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" 
        : "flex flex-col gap-3"
      }>
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            className={`bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow ${
              viewMode === 'list' ? 'flex flex-row p-4 gap-6' : 'flex flex-col p-4'
            }`}
          >
            {/* Image section */}
            <Link href={`/product/${product.id}`} className={`flex items-center justify-center shrink-0 ${
              viewMode === 'list' ? 'w-48 h-48' : 'w-full h-48 mb-4'
            }`}>
              <img src={product.image} alt={product.name} className="max-h-full object-contain" />
            </Link>

            {/* Content section */}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
                    {product.oldPrice && <span className="text-gray-400 line-through text-sm">${product.oldPrice.toFixed(2)}</span>}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex text-orange-400 text-xs">★★★★<span className="text-gray-200">★</span></div>
                    <span className="text-orange-500 font-medium text-xs">{product.rating}</span>
                  </div>
                </div>
                <button className="p-2 border border-gray-200 rounded-md text-blue-500 hover:bg-blue-50">
                  <HeartIcon />
                </button>
              </div>

              <h3 className={`text-gray-700 mt-2 ${viewMode === 'grid' ? 'text-sm' : 'text-base font-medium'}`}>
                <Link href={`/product/${product.id}`}>
                  {product.name}
                </Link>
              </h3>

              {/* Extras visible only in List View */}
              {viewMode === 'list' && (
                <>
                  <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                    {product.description || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                  </p>
                  <Link href={`/product/${product.id}`} className="text-blue-600 font-semibold text-sm mt-3 hover:underline">View details</Link>
                </>
              )}
            </div>
          </div>
        ))}
        {filteredProducts.length === 0 && (
            <div className="col-span-full py-10 text-center text-gray-500">
                No products found matching your criteria.
            </div>
        )}
      </div>
    </div>
  );
}

// Icons
const GridIcon = ({ active }) => (
  <svg className={`w-5 h-5 ${active ? 'text-black' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
  </svg>
);

const ListIcon = ({ active }) => (
  <svg className={`w-5 h-5 ${active ? 'text-black' : 'text-gray-400'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);