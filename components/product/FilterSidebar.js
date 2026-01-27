import { useState } from 'react';

export default function FilterSidebar() {
  const [priceMin, setPriceMin] = useState('0');
  const [priceMax, setPriceMax] = useState('999999');

  const categories = ['Mobile accessory', 'Electronics', 'Smartphones', 'Modern tech'];
  const brands = ['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'];
  const features = ['Metallic', 'Plastic cover', '8GB Ram', 'Super power', 'Large Memory'];

  return (
    <div className="w-[240px] bg-white p-4 font-sans text-gray-700">
      
      {/* Category Section */}
      <section className="mb-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-base font-semibold text-[#1C1C1C]">Category</h3>
          <ChevronUpIcon />
        </div>
        <ul className="space-y-3 text-[15px] text-gray-500">
          {categories.map(cat => <li key={cat} className="cursor-pointer hover:text-blue-600">{cat}</li>)}
          <li className="text-blue-500 cursor-pointer pt-1">See all</li>
        </ul>
      </section>

      <hr className="border-gray-200 mb-5" />

      {/* Brands Section */}
      <section className="mb-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-base font-semibold text-[#1C1C1C]">Brands</h3>
          <ChevronUpIcon />
        </div>
        <div className="space-y-3">
          {brands.map(brand => (
            <label key={brand} className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-[18px] h-[18px] rounded border-gray-300 text-blue-600 focus:ring-0" />
              <span className="text-[15px]">{brand}</span>
            </label>
          ))}
          <p className="text-blue-500 cursor-pointer text-[15px] pt-1">See all</p>
        </div>
      </section>

      <hr className="border-gray-200 mb-5" />

      {/* Features Section */}
      <section className="mb-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-base font-semibold text-[#1C1C1C]">Features</h3>
          <ChevronUpIcon />
        </div>
        <div className="space-y-3">
          {features.map(feat => (
            <label key={feat} className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-[18px] h-[18px] rounded border-gray-300 text-blue-600 focus:ring-0" />
              <span className="text-[15px]">{feat}</span>
            </label>
          ))}
          <p className="text-blue-500 cursor-pointer text-[15px] pt-1">See all</p>
        </div>
      </section>

      <hr className="border-gray-200 mb-5" />

      {/* Price Range Section */}
      <section className="mb-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-base font-semibold text-[#1C1C1C]">Price range</h3>
          <ChevronUpIcon />
        </div>
        {/* Custom Track Design */}
        <div className="relative w-full h-1 bg-[#AFD0FF] rounded-full mt-6 mb-8">
          <div className="absolute h-full left-[20%] right-[30%] bg-[#0D6EFD]"></div>
          <div className="absolute top-1/2 left-[20%] -translate-y-1/2 w-5 h-5 bg-white border-2 border-[#0D6EFD] rounded-full cursor-pointer shadow-sm"></div>
          <div className="absolute top-1/2 right-[30%] -translate-y-1/2 w-5 h-5 bg-white border-2 border-[#0D6EFD] rounded-full cursor-pointer shadow-sm"></div>
        </div>
        <div className="flex gap-2 mb-3">
          <div className="flex-1">
            <span className="text-sm text-gray-900 mb-1 block">Min</span>
            <input type="text" value={priceMin} onChange={(e) => setPriceMin(e.target.value)} className="w-full border border-gray-200 rounded-md p-2 text-sm bg-gray-50 focus:outline-none" />
          </div>
          <div className="flex-1">
            <span className="text-sm text-gray-900 mb-1 block">Max</span>
            <input type="text" value={priceMax} onChange={(e) => setPriceMax(e.target.value)} className="w-full border border-gray-200 rounded-md p-2 text-sm bg-gray-50 focus:outline-none" />
          </div>
        </div>
        <button className="w-full py-2.5 text-[#0D6EFD] border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 bg-white shadow-sm">
          Apply
        </button>
      </section>

      <hr className="border-gray-200 mb-5" />

      {/* Condition Section */}
      <section className="mb-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-base font-semibold text-[#1C1C1C]">Condition</h3>
          <ChevronUpIcon />
        </div>
        <div className="space-y-3">
          {['Any', 'Refurbished', 'Brand new', 'Old items'].map((label, i) => (
            <label key={label} className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="cond" defaultChecked={i === 0} className="w-[18px] h-[18px] border-gray-300 text-blue-600 focus:ring-0" />
              <span className="text-[15px]">{label}</span>
            </label>
          ))}
        </div>
      </section>

      <hr className="border-gray-200 mb-5" />

      {/* Ratings Section */}
      <section>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-base font-semibold text-[#1C1C1C]">Ratings</h3>
          <ChevronUpIcon />
        </div>
        <div className="space-y-3">
          {[5, 4, 3, 2].map(num => (
            <label key={num} className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-[18px] h-[18px] rounded border-gray-300 text-blue-600 focus:ring-0" />
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < num ? "text-orange-400 text-lg" : "text-gray-300 text-lg"}>★</span>
                ))}
              </div>
            </label>
          ))}
        </div>
      </section>
    </div>
  );
}

function ChevronUpIcon() {
  return (
    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
    </svg>
  );
}