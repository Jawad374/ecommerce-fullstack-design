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
    <div className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 items-stretch">
          {/* Sidebar Categories */}
          <div className="col-span-2 flex">
            <div className="bg-white rounded-lg overflow-hidden h-full">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block px-4 py-3 hover:bg-blue-50 text-gray-700 hover:text-blue-500 border-b last:border-b-0"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          {/* Main Hero Banner */}
          <div className="col-span-7 flex">
            <div
              className="rounded-lg p-12 relative overflow-hidden min-h-[380px] flex items-center h-full w-full"
              style={{
                backgroundImage: `url('/Image/others/Banner-board-800x420.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600/10 via-transparent to-transparent"></div>
              <div className="relative z-10 max-w-xl">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Latest trending<br />
                  <span className="text-5xl">Electronic items</span>
                </h1>
                <button className="mt-4 px-6 py-2 bg-white text-gray-800 rounded-md hover:bg-gray-100 font-medium">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3 flex flex-col gap-4 h-full">
            {/* User Account Card */}
            <div className="bg-blue-100 rounded-lg p-6 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="text-sm text-gray-600">Hi, user</p>
                  <p className="text-sm text-gray-600">let's get started</p>
                </div>
              </div>
              <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mb-2">
                Join now
              </button>
              <button className="w-full py-2 bg-white text-blue-500 rounded-md hover:bg-gray-50">
                Log in
              </button>
            </div>

            {/* Promo Card */}
            <div className="bg-orange-500 rounded-lg p-6 text-white flex-1 flex flex-col justify-center">
              <p className="text-sm mb-1">Get US $10 off</p>
              <p className="text-xs">with a new supplier</p>
            </div>

            {/* Promo Card 2 */}
            <div className="bg-teal-500 rounded-lg p-6 text-white flex-1 flex flex-col justify-center">
              <p className="text-sm mb-1">Send quotes with</p>
              <p className="text-xs">supplier preferences</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
