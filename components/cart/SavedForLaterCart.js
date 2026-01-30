'use client';
import { useCart } from '@/context/CartContext';

export default function SavedForLaterCart() {
  const { addToCart } = useCart();

  const products = [
    { id: 101, name: 'GoPro HERO8 4K Action Camera - Black', price: 99.50, image: '/tablet.png' },
    { id: 102, name: 'GoPro HERO8 4K Action Camera - Black', price: 99.50, image: '/phone.png' },
    { id: 103, name: 'GoPro HERO8 4K Action Camera - Black', price: 99.50, image: '/watch.png' },
    { id: 104, name: 'GoPro HERO8 4K Action Camera - Black', price: 99.50, image: '/laptop.png' }
  ];

  return (
    <div className="mt-10 mb-20 bg-white border border-gray-200 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Saved for later</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            {/* Image Container with slight gray background */}
            <div className="aspect-square bg-[#F7F7F7] rounded-lg mb-4 flex items-center justify-center p-6">
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-h-full max-w-full object-contain mix-blend-multiply"
              />
            </div>
            
            <div className="space-y-2">
              <div className="text-[18px] font-bold text-gray-900">${product.price.toFixed(2)}</div>
              <h3 className="text-gray-500 text-[15px] leading-relaxed line-clamp-2 pr-4">
                {product.name}
              </h3>
              
              <button 
                onClick={() => addToCart(product)}
                className="flex items-center gap-2 mt-4 px-4 py-2 text-blue-600 border border-gray-200 rounded-md shadow-sm hover:bg-blue-50 hover:border-blue-200 transition-all font-medium text-sm active:bg-blue-100"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Move to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}