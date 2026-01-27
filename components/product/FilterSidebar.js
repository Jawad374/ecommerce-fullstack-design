import { useState } from 'react';

export default function FilterSidebar() {
  const [priceMin, setPriceMin] = useState('0');
  const [priceMax, setPriceMax] = useState('999999');

  const categories = [
    'Mobile accessory',
    'Electronics',
    'Smartphones',
    'Modern tech'
  ];

  const brands = [
    'Samsung',
    'Apple',
    'Huawei',
    'Pocco',
    'Lenovo'
  ];

  const features = [
    'Metallic',
    'Plastic cover',
    '8GB Ram',
    'Super power',
    'Large Memory'
  ];

  const ratings = [5, 4, 3, 2];

  return (
    <div className="w-64 space-y-6">
      {/* Category Filter */}
      <div className="bg-white rounded-lg border p-4">
        <button className="flex items-center justify-between w-full mb-4">
          <h3 className="font-semibold text-gray-800">Category</h3>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className="space-y-2">
          {categories.map((category, index) => (
            <div key={index} className="text-sm text-gray-600 hover:text-blue-500 cursor-pointer">
              {category}
            </div>
          ))}
          <button className="text-sm text-blue-500 hover:underline">See all</button>
        </div>
      </div>

      {/* Brands Filter */}
      <div className="bg-white rounded-lg border p-4">
        <button className="flex items-center justify-between w-full mb-4">
          <h3 className="font-semibold text-gray-800">Brands</h3>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className="space-y-2">
          {brands.map((brand, index) => (
            <label key={index} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
              <span className="text-sm text-gray-600">{brand}</span>
            </label>
          ))}
          <button className="text-sm text-blue-500 hover:underline">See all</button>
        </div>
      </div>

      {/* Features Filter */}
      <div className="bg-white rounded-lg border p-4">
        <button className="flex items-center justify-between w-full mb-4">
          <h3 className="font-semibold text-gray-800">Features</h3>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className="space-y-2">
          {features.map((feature, index) => (
            <label key={index} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
              <span className="text-sm text-gray-600">{feature}</span>
            </label>
          ))}
          <button className="text-sm text-blue-500 hover:underline">See all</button>
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="bg-white rounded-lg border p-4">
        <button className="flex items-center justify-between w-full mb-4">
          <h3 className="font-semibold text-gray-800">Price range</h3>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className="mb-4">
          <input
            type="range"
            min="0"
            max="999999"
            value={priceMax}
            onChange={(e) => setPriceMax(e.target.value)}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div className="flex gap-2 mb-3">
          <input
            type="number"
            placeholder="Min"
            value={priceMin}
            onChange={(e) => setPriceMin(e.target.value)}
            className="flex-1 px-3 py-2 border rounded-md text-sm"
          />
          <input
            type="number"
            placeholder="Max"
            value={priceMax}
            onChange={(e) => setPriceMax(e.target.value)}
            className="flex-1 px-3 py-2 border rounded-md text-sm"
          />
        </div>
        <button className="w-full py-2 text-sm text-blue-500 border border-gray-300 rounded-md hover:bg-blue-50">
          Apply
        </button>
      </div>

      {/* Condition Filter */}
      <div className="bg-white rounded-lg border p-4">
        <button className="flex items-center justify-between w-full mb-4">
          <h3 className="font-semibold text-gray-800">Condition</h3>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="condition" defaultChecked className="w-4 h-4" />
            <span className="text-sm text-gray-600">Any</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="condition" className="w-4 h-4" />
            <span className="text-sm text-gray-600">Refurbished</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="condition" className="w-4 h-4" />
            <span className="text-sm text-gray-600">Brand new</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="condition" className="w-4 h-4" />
            <span className="text-sm text-gray-600">Old items</span>
          </label>
        </div>
      </div>

      {/* Ratings Filter */}
      <div className="bg-white rounded-lg border p-4">
        <button className="flex items-center justify-between w-full mb-4">
          <h3 className="font-semibold text-gray-800">Ratings</h3>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className="space-y-2">
          {ratings.map((rating, index) => (
            <label key={index} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                ))}
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
