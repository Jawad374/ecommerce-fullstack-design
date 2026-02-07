'use client';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function RecommendedSection() {
  const { products } = useCart();
  
  // Use context products, fallback to empty array if loading/undefined
  const recommendedProducts = products ? products.slice(0, 10) : [];

  const services = [
    { title: 'Source from Industry Hubs', image: '/Image/others/step1.png', iconImage: '/icons/1.png' },
    { title: 'Customize Your Products', image: '/Image/others/step2.png', iconImage: '/icons/2.png' },
    { title: 'Fast, reliable shipping by ocean or air', image: '/Image/others/step3.png', iconImage: '/icons/3.png' },
    { title: 'Product monitoring and inspection', image: '/Image/others/step4.png', iconImage: '/icons/4.png' }
  ];

  const regions = [
     { name: 'Arabic Emirates', code: 'ae', sellers: 'shopname.ae' },
     { name: 'Australia', code: 'au', sellers: 'shopname.au' },
     { name: 'United States', code: 'us', sellers: 'shopname.us' },
     { name: 'Russia', code: 'ru', sellers: 'shopname.ru' },
     { name: 'Italy', code: 'it', sellers: 'shopname.it' },
     { name: 'Denmark', code: 'dk', sellers: 'shopname.dk' },
     { name: 'France', code: 'fr', sellers: 'shopname.fr' },
     { name: 'China', code: 'cn', sellers: 'shopname.cn' },
     { name: 'Great Britain', code: 'gb', sellers: 'shopname.co.uk' },
  ];

  return (
    <div className="bg-gray-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Recommended Items */}
        <div className="mb-10 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Recommended items</h2>
          {/* Mobile: 2 columns | Desktop: 5 columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-6">
            {recommendedProducts.map((product) => (
              <Link 
                href={`/product/${product.id}`} 
                key={product.id} 
                className="bg-white rounded-lg overflow-hidden border border-gray-200 md:border-gray-100 hover:shadow-lg transition-shadow cursor-pointer block"
              >
                <div className="relative bg-white p-2">
                  <div className="aspect-square flex items-center justify-center">
                    <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" />
                  </div>
                </div>
                <div className="p-3 md:p-4">
                  <p className="text-sm font-bold text-gray-900 mb-1">${product.price}</p>
                  <p className="text-xs md:text-sm text-gray-500 line-clamp-2 leading-relaxed">{product.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Our Extra Services - Hidden on very small screens or kept as a tight grid */}
        <div className="mb-10 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Our extra services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div key={index} className="group relative rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
                <div className="relative h-28 md:h-32 w-full">
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                  <div className="absolute -bottom-5 right-4 z-10 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border-[3px] border-white bg-[#D1E7FF]">
                    <img src={service.iconImage} alt="icon" className="h-5 w-5 object-contain" />
                  </div>
                </div>
                <div className="p-4 pt-6">
                  <h3 className="text-sm md:text-base font-medium text-gray-900 pr-8 leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suppliers by Region - Hidden on Mobile to save space */}
        <div className="hidden md:block mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Suppliers by region</h2>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
            {regions.map((region, index) => (
                <div key={index} className="flex items-center gap-3 min-w-40">
                  <img
                    src={`/Image/flags/Property 1=${region.code.toUpperCase()}.png`}
                    alt={region.name}
                    className="w-5 h-3.5 shrink-0 rounded-sm"
                  />
                  <div>
                    <div className="font-medium text-gray-800">{region.name}</div>
                    <div className="text-sm text-gray-500">{region.sellers}</div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}