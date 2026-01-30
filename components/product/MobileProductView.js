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
  const { filteredProducts, searchQuery, setSearchQuery, cartItems } = useCart();
  const router = useRouter();

  return (
    <div className="bg-white min-h-screen font-sans pb-20 flex flex-col">
      {/* --- Mobile Top Navigation --- */}
      <div className="p-4 flex items-center justify-between sticky top-0 bg-white z-20 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <button onClick={() => router.back()}>
            <ArrowLeft className="w-6 h-6 text-gray-800" />
          </button>
          <h1 className="text-lg font-semibold">Mobile accessory</h1>
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
        {['Tablets', 'Phones', 'Ipads', 'Ipod', 'Accessories'].map((cat) => (
          <button key={cat} className="px-4 py-1.5 bg-[#E5F1FF] text-[#0D6EFD] rounded-lg text-sm whitespace-nowrap">
            {cat}
          </button>
        ))}
      </div>

      {/* --- Sort/Filter/View Switcher --- */}
      <div className="px-4 py-2 border-y border-gray-100 flex items-center justify-between">
        <div className="flex gap-2">
          <button className="border border-gray-200 px-3 py-1 rounded-md text-sm flex items-center gap-1">
            Sort: Newest ▼
          </button>
          <button className="border border-gray-200 px-3 py-1 rounded-md text-sm flex items-center gap-1">
            <Filter className="w-4 h-4" /> Filter
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
        {filteredProducts.map((product) => (
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
          {[1, 2, 3].map((item) => (
            <div key={item} className="min-w-35 border border-gray-100 rounded-lg p-3">
              <div className="w-full h-28 bg-gray-50 rounded mb-2 flex items-center justify-center text-2xl">🎒</div>
              <p className="font-bold text-gray-900 text-sm">$10.30</p>
              <p className="text-xs text-gray-500 line-clamp-2 mt-1">Solid Backpack blue jeans large size</p>
            </div>
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