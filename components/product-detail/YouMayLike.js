'use client';

import { useState, useEffect } from 'react';

export default function YouMayLike({ currentProductId, variant = 'vertical' }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch 5 random products or related logic from API or pass from parent
    // For now, let's fetch all and pick simple ones, or use an API endpoint for recommendations
    const fetchRecommendations = async () => {
        try {
            const res = await fetch('/api/products');
            if (res.ok) {
                const allProducts = await res.json();
                // Filter out current product and pick 5 random
                const others = allProducts.filter(p => p._id !== currentProductId);
                const randomFive = others.sort(() => 0.5 - Math.random()).slice(0, 5);
                setProducts(randomFive.map(p => ({
                    id: p._id,
                    name: p.name,
                    price: `$${p.price}`,
                    image: p.images?.[0] || 'https://placehold.co/200x200?text=No+Image'
                })));
            }
        } catch (error) {
            console.error("Failed to load recommendations", error);
        }
    };
    fetchRecommendations();
  }, [currentProductId]);

  if (products.length === 0) return null;

  const isVertical = variant === 'vertical';

  return (
    <div className={`bg-white border border-[#e3e8ee] rounded-md p-4 ${isVertical ? 'max-w-70' : 'w-full'}`}>
      <h3 className="text-[16px] font-semibold text-[#1c1c1c] mb-4">You may like</h3>
      <div className={isVertical ? "space-y-4" : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"}>
        {products.map((product, index) => (
          <div key={index} className={`flex gap-3 group cursor-pointer ${!isVertical ? 'bg-white border border-transparent hover:border-gray-200 rounded-lg p-2 transition-colors' : ''}`}>
            {/* Image Container with specific border color */}
            <div className="w-20 h-20 border border-[#e3e8ee] rounded-md flex items-center justify-center p-2 shrink-0">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain mix-blend-multiply" 
              />
            </div>
            
            <div className="flex flex-col justify-center">
              {/* Product Title: specific color and line height */}
              <h4 className="text-[14px] text-[#505050] leading-5 mb-1 line-clamp-2">
                {product.name}
              </h4>
              {/* Price: specific muted blue-gray color */}
              <p className="text-[14px] text-[#8b96a5]">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}