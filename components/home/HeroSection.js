'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  const categories = [
    'Automobiles',
    'Clothes and wear',
    'Home interiors',
    'Computer and tech',
    'Tools, equipments',
    'Sports and outdoor',
    'Animal and pets',
    'Machinery tools',
    'More category'
  ];

  return (
    <div className="bg-gray-50 py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-0 md:px-6">
        {/* Main Hero Container: 12-column grid system */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-5 items-stretch bg-white border-y md:border border-gray-200 md:rounded-lg md:p-4">
          
          {/* Sidebar Categories (Desktop Only) */}
          <div className="hidden md:flex md:col-span-3 lg:col-span-2 flex-col">
            <div className="overflow-hidden w-full h-full">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`block px-4 py-2.5 text-sm transition-colors ${
                    index === 0 
                    ? 'bg-[#E5F1FF] font-semibold text-gray-900 rounded-md' 
                    : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          {/* Main Hero Banner */}
          <div className="col-span-1 md:col-span-6 lg:col-span-7 h-full">
            <div
              className="relative overflow-hidden min-h-55 md:min-h-95 flex items-center h-full w-full p-6 md:p-12"
              style={{
                backgroundImage: `url('/Image/others/Banner-board-800x420.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Content overlay */}
              <div className="relative z-10 max-w-70 md:max-w-md">
                <h2 className="text-lg md:text-3xl text-gray-800 font-normal leading-tight">
                  Latest trending
                </h2>
                <h1 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                  Electronic items
                </h1>
                <button className="px-4 py-2 md:px-6 md:py-2.5 bg-white text-blue-600 rounded-lg font-medium shadow-sm hover:bg-gray-50 transition-colors">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebars (Desktop Only) */}
          <div className="hidden md:flex md:col-span-3 flex-col gap-3">
            {/* User Account Card */}
            <div className="bg-[#E3F0FF] rounded-lg p-4 flex flex-col gap-3 flex-1">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-gray-200 rounded-full shrink-0 relative overflow-hidden">
                   {/* Avatar Placeholder */}
                   <div className="absolute inset-0 bg-blue-200 opacity-50 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                   </div>
                </div>
                <div className="leading-tight">
                  <p className="text-sm text-gray-800">Hi, user</p>
                  <p className="text-sm text-gray-800 font-normal">let's get started</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button className="w-full py-2 bg-[#0D6EFD] text-white rounded-md text-sm font-medium hover:bg-blue-700">
                  Join now
                </button>
                <button className="w-full py-2 bg-white text-[#0D6EFD] border border-gray-100 rounded-md text-sm font-medium hover:bg-gray-50">
                  Log in
                </button>
              </div>
            </div>

            {/* Promo Card: Discount */}
            <div className="bg-[#F38332] rounded-lg p-4 text-white min-h-22.5 flex flex-col justify-center">
              <p className="text-sm leading-tight max-w-32.5">
                Get US $10 off with a new supplier
              </p>
            </div>

            {/* Promo Card: Inquiry */}
            <div className="bg-[#55BDC3] rounded-lg p-4 text-white min-h-22.5 flex flex-col justify-center">
              <p className="text-sm leading-tight max-w-35">
                Send quotes with supplier preferences
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}