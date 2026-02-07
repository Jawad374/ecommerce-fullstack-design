'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, Search, ShoppingCart, User, 
  Grid, List, Filter 
} from 'lucide-react';
import Newsletter from '@/components/common/Newsletter';
import Footer from '@/components/layout/Footer';

export default function MobileProductView() {
  const [viewMode, setViewMode] = useState('list');
  const [showFilter, setShowFilter] = useState(false);
  const [sortOption, setSortOption] = useState('newest'); // 'newest', 'price-asc', 'price-desc'
  const { filteredProducts, searchQuery, setSearchQuery, cartItems, uniqueCategories, uniqueBrands, filters, setFilters } = useCart();
  const router = useRouter();

  // Sort logic applied to filteredProducts
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-asc') return a.price - b.price;
    if (sortOption === 'price-desc') return b.price - a.price;
    return new Date(b.createdAt || 0) - new Date(a.createdAt || 0); // Default newest
  });
  
  const toggleCategory = (cat) => {
    setFilters(prev => {
        const current = prev.categories || [];
        const isSelected = current.includes(cat);
        const updated = isSelected
           ? current.filter(c => c !== cat)
           : [...current, cat];
        return { ...prev, categories: updated };
    });
  };

  const toggleBrand = (brand) => {
    setFilters(prev => {
        const current = prev.brands || [];
        const isSelected = current.includes(brand);
        const updated = isSelected
            ? current.filter(b => b !== brand)
            : [...current, brand];
        return { ...prev, brands: updated };
    });
  };

  return (
    <div className="bg-white min-h-screen font-sans pb-20 flex flex-col relative">

      {/* --- Filter Modal --- */}
      {showFilter && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <h2 className="text-lg font-bold">Filter & Sort</h2>
            <button onClick={() => setShowFilter(false)} className="p-2">
              <span className="text-2xl">&times;</span>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* Sort Options */}
            <div>
              <h3 className="font-semibold mb-3">Sort By</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'Newest', val: 'newest' },
                  { label: 'Price: Low to High', val: 'price-asc' },
                  { label: 'Price: High to Low', val: 'price-desc' },
                ].map(opt => (
                  <button
                    key={opt.val}
                    onClick={() => setSortOption(opt.val)}
                    className={`px-4 py-2 border rounded-full text-sm ${
                      sortOption === opt.val 
                      ? 'bg-blue-600 text-white border-blue-600' 
                      : 'bg-white text-gray-700 border-gray-300'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="font-semibold mb-3">Price Range</h3>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                   <label className="text-xs text-gray-500 mb-1 block">Min</label>
                   <input 
                      type="number" 
                      value={filters.minPrice} 
                      onChange={(e) => setFilters(prev => ({...prev, minPrice: e.target.value}))}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                   />
                </div>
                <span className="text-gray-400 mt-4">-</span>
                <div className="flex-1">
                   <label className="text-xs text-gray-500 mb-1 block">Max</label>
                   <input 
                      type="number" 
                      value={filters.maxPrice} 
                      onChange={(e) => setFilters(prev => ({...prev, maxPrice: e.target.value}))}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                   />
                </div>
              </div>
            </div>

            {/* Brands */}
            <div>
              <h3 className="font-semibold mb-3">Brands</h3>
              <div className="space-y-2">
                {(uniqueBrands.length > 0 ? uniqueBrands : ['Samsung', 'Apple', 'Huawei', 'Poco', 'Lenovo']).map(brand => (
                  <label key={brand} className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      checked={filters.brands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">{brand}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-gray-100 flex gap-3">
             <button 
                onClick={() => setFilters(prev => ({ ...prev, minPrice: 0, maxPrice: 10000, brands: [], categories: [] }))}
                className="flex-1 py-3 border border-gray-300 rounded-lg font-medium text-gray-700"
             >
               Reset
             </button>
             <button 
                onClick={() => setShowFilter(false)}
                className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-bold"
             >
               Apply
             </button>
          </div>
        </div>
      )}

      {/* --- Mobile Top Navigation --- */}
      <div className="p-4 flex items-center justify-between sticky top-0 bg-white z-20 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <button onClick={() => router.back()}>
            <ArrowLeft className="w-6 h-6 text-gray-800" />
          </button>
          <h1 className="text-lg font-semibold">
             {searchQuery ? `Search: ${searchQuery}` : 
              filters.categories.length > 0 ? filters.categories[0] : 'All Products'}
          </h1>
        </div>
        <div className="flex gap-4">
          <Link href="/cart" className="relative text-gray-600">
            <ShoppingCart className="w-6 h-6" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
          <Link href="/login" className="text-gray-600">
            <User className="w-6 h-6" />
          </Link>
        </div>
      </div>

      {/* --- Mobile Search --- */}
      <div className="px-4 py-2 bg-white">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-100 rounded-lg py-2.5 pl-10 pr-4 outline-none text-sm"
          />
        </div>
      </div>

      {/* --- Horizontal Categories --- */}
      <div className="flex gap-2 overflow-x-auto px-4 py-3 no-scrollbar">
        {(uniqueCategories?.length > 0 ? uniqueCategories : ['Tablets', 'Phones', 'Ipads', 'Ipod', 'Accessories']).map((cat) => {
          const isSelected = filters.categories.includes(cat);
          return (
            <button 
              key={cat} 
              onClick={() => toggleCategory(cat)}
              className={`px-4 py-1.5 rounded-lg text-sm whitespace-nowrap transition-colors ${
                isSelected ? 'bg-[#0D6EFD] text-white' : 'bg-[#E5F1FF] text-[#0D6EFD]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* --- Sort/Filter/View Switcher --- */}
      <div className="px-4 py-2 border-y border-gray-100 flex items-center justify-between">
        <div className="flex gap-2">
          <button 
             onClick={() => setShowFilter(true)}
             className="border border-gray-200 px-3 py-1 rounded-md text-sm flex items-center gap-1 active:bg-gray-50"
          >
            Sort: {sortOption === 'newest' ? 'Newest' : sortOption === 'price-asc' ? 'Low to High' : 'High to Low'} ▼
          </button>
          <button 
             onClick={() => setShowFilter(true)}
             className="border border-gray-200 px-3 py-1 rounded-md text-sm flex items-center gap-1 active:bg-gray-50"
          >
            <Filter className="w-4 h-4" /> Filter {filters.brands.length > 0 ? `(${filters.brands.length})` : ''}
          </button>
        </div>
        <div className="flex border border-gray-200 rounded-md overflow-hidden">
          <button 
            onClick={() => setViewMode('grid')} 
            className={`p-1.5 ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setViewMode('list')} 
            className={`p-1.5 border-l border-gray-200 ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* --- Product Grid/List --- */}
      <div className={`p-4 ${viewMode === 'grid' ? 'grid grid-cols-2 gap-3' : 'space-y-3'}`}>
        {sortedProducts.map((product) => (
          <Link 
            href={`/product/${product.id}`} 
            key={product.id} 
            className={`bg-white border border-gray-100 rounded-lg p-3 ${viewMode === 'list' ? 'flex gap-4' : 'flex flex-col'}`}
          >
            <div className={`shrink-0 bg-gray-50 rounded flex items-center justify-center p-2 ${viewMode === 'list' ? 'w-24 h-24' : 'w-full h-32 mb-2'}`}>
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-700 text-sm line-clamp-2">{product.name}</h3>
              <p className="font-bold text-gray-900 mt-1">${product.price}</p>
              <div className="flex items-center gap-1 mt-1 text-orange-400 text-[10px]">
                ★★★★☆ <span className="text-gray-400 text-xs ml-1">{product.rating}</span>
              </div>
              <p className="text-[#00B517] text-xs font-medium mt-1">Free Shipping</p>
            </div>
          </Link>
        ))}
        {filteredProducts.length === 0 && (
            <div className="col-span-full text-center py-10 text-gray-500">
                No products found.
            </div>
        )}
      </div>

      {/* --- Recommendation Section --- */}
      <div className="mt-6 border-t border-gray-100 pt-6">
        <h2 className="px-4 text-lg font-bold mb-4">You may also like</h2>
        <div className="flex gap-4 overflow-x-auto px-4 no-scrollbar pb-4">
          {useCart().products.slice(0, 5).map((item) => (
            <Link href={`/product/${item.id}`} key={item.id} className="min-w-35 border border-gray-100 rounded-lg p-3">
              <div className="w-full h-28 bg-gray-50 rounded mb-2 flex items-center justify-center">
                  <img src={item.image} alt={item.name} className="h-full w-full object-contain" />
              </div>
              <p className="font-bold text-gray-900 text-sm">${item.price}</p>
              <p className="text-xs text-gray-500 line-clamp-2 mt-1">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* --- Newsletter Section --- */}
      <div className="mt-6">
        <Newsletter />
      </div>

      {/* --- Footer Section --- */}
      <Footer />
    </div>
  );
}