'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems, searchQuery, setSearchQuery } = useCart();

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-5 flex flex-col md:flex-row md:items-center">
          
          {/* Mobile Top Row: Logo & Icons */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex items-center gap-4">
              {/* Menu Toggle Trigger */}
              <button 
                className="md:hidden text-gray-800" 
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              <Link href="/" className="flex items-center gap-4">
                <div className="relative w-9 h-9 md:w-11 md:h-11">
                  <div className="absolute -left-1 -top-1 w-9 h-9 md:w-11 md:h-11 rounded-lg bg-blue-100" />
                  <div className="relative w-9 h-9 md:w-11 md:h-11 rounded-lg bg-blue-500 flex items-center justify-center">
                    <img src="/Image/others/logoicon.png" alt="Brand logo" className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                </div>
                <span className="text-[#3187ED] font-bold text-xl md:text-2xl">Brand</span>
              </Link>
            </div>

            <div className="flex items-center gap-5 md:hidden">
              <Link href="/cart" className="text-gray-800 relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </Link>
              <Link href="/login" className="text-gray-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 mx-12">
            <div className="flex w-full items-stretch border-2 border-[#0D6EFD] rounded-lg overflow-hidden h-10">
              <input 
                type="text" 
                placeholder="Search" 
                className="flex-1 px-4 py-2 outline-none text-gray-700" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="relative border-l border-[#0D6EFD]">
                <select className="appearance-none h-full px-4 pr-8 bg-white text-sm text-gray-700 cursor-pointer outline-none">
                  <option>All category</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <button className="px-7 bg-[#0D6EFD] text-white font-medium hover:bg-blue-600 transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Desktop Navigation Icons */}
          <div className="hidden md:flex items-center gap-7 flex-none">
            <Link href="/login" className="flex flex-col items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-[12px] font-medium text-gray-400">Profile</span>
            </Link>
            <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <span className="text-[12px] font-medium text-gray-400">Message</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-[12px] font-medium text-gray-400">Orders</span>
            </button>
            <Link href="/cart" className="flex flex-col items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors relative">
              <div className="relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </div>
              <span className="text-[12px] font-medium text-gray-400">My cart</span>
            </Link>
          </div>

          {/* Mobile Search & Category Scroller */}
          <div className="w-full md:hidden mt-3">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search" 
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="mt-3 flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {['All category', 'Gadgets', 'Clothes', 'Accessories', 'Electronics'].map((cat) => (
                <button key={cat} className="whitespace-nowrap px-4 py-1.5 bg-gray-100 text-blue-600 rounded-lg text-sm border border-transparent active:bg-blue-100 transition-colors">
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Sub-Navigation Bar */}
      <nav className="hidden md:block bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center">
          <div className="flex items-center gap-7">
            <button className="flex items-center gap-2 text-gray-900 font-medium">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              <span>All category</span>
            </button>
            <Link href="/hot-offers" className="text-gray-900 font-medium hover:text-blue-500 transition-colors">Hot offers</Link>
            <Link href="/gift-boxes" className="text-gray-900 font-medium hover:text-blue-500 transition-colors">Gift boxes</Link>
            <Link href="/projects" className="text-gray-900 font-medium hover:text-blue-500 transition-colors">Projects</Link>
            <Link href="/menu" className="text-gray-900 font-medium hover:text-blue-500 transition-colors">Menu item</Link>
            <button className="text-gray-900 font-medium flex items-center gap-1 hover:text-blue-500 transition-colors">Help <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></button>
          </div>
          <div className="ml-auto flex items-center gap-7 text-gray-900 font-medium">
            <span>English, USD</span>
            <div className="flex items-center gap-2">
              <span>Ship to</span>
              <img src="/Image/flags/Property 1=DE.png" alt="DE" className="w-5 h-3 shadow-sm" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu Drawer */}
      <div 
        className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop overlay */}
        <div 
          className="absolute inset-0 bg-black/50" 
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Drawer Content */}
        <div 
          className={`absolute left-0 top-0 h-full w-70 bg-white transition-transform duration-300 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header with User Profile */}
          <div className="bg-gray-50 p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <Link href="/login" className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </Link>
              <div>
                <Link href="/login" className="text-gray-900 font-medium">Sign in</Link>
                <span className="mx-1 text-gray-400">|</span>
                <Link href="/login" className="text-gray-900 font-medium">Register</Link>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 flex flex-col gap-1">
            <Link href="/" className="flex items-center gap-4 py-2 px-2 text-gray-700 hover:bg-gray-100 rounded-md">
               <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
               Home
            </Link>
            <Link href="/categories" className="flex items-center gap-4 py-2 px-2 text-gray-700 hover:bg-gray-100 rounded-md">
               <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
               Categories
            </Link>
            <Link href="/favorites" className="flex items-center gap-4 py-2 px-2 text-gray-700 hover:bg-gray-100 rounded-md">
               <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
               Favorites
            </Link>
            <Link href="/orders" className="flex items-center gap-4 py-2 px-2 text-gray-700 hover:bg-gray-100 rounded-md border-b border-gray-100 pb-3">
               <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m8 4v10M4 7v10l8 4"/></svg>
               My orders
            </Link>

            <div className="pt-3 flex flex-col gap-1">
              <button className="flex items-center gap-4 py-2 px-2 text-gray-700 hover:bg-gray-100 rounded-md">
                 <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                 English | USD
              </button>
              <Link href="/contact" className="flex items-center gap-4 py-2 px-2 text-gray-700 hover:bg-gray-100 rounded-md">
                 <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                 Contact us
              </Link>
              <Link href="/about" className="flex items-center gap-4 py-2 px-2 text-gray-700 hover:bg-gray-100 rounded-md border-b border-gray-100 pb-3">
                 <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1"/></svg>
                 About
              </Link>
            </div>

            <div className="pt-3 flex flex-col gap-1 text-sm">
               <Link href="/agreement" className="py-2 px-2 text-gray-800">User agreement</Link>
               <Link href="/partnership" className="py-2 px-2 text-gray-800">Partnership</Link>
               <Link href="/privacy" className="py-2 px-2 text-gray-800">Privacy policy</Link>
            </div>
          </nav>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </header>
  );
}