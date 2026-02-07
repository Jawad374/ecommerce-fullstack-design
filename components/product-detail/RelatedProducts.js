'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RelatedProducts({ category, currentProductId }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchRelated = async () => {
        try {
            const res = await fetch('/api/products');
            if (res.ok) {
                const allProducts = await res.json();
                // Filter by category if possible, or just similar
                let related = allProducts.filter(p => p.category === category && p._id !== currentProductId);
                
                // If not enough related by category, just fill with others for demo
                if (related.length < 6) {
                    const others = allProducts.filter(p => p.category !== category && p._id !== currentProductId);
                    related = [...related, ...others].slice(0, 6);
                } else {
                    related = related.slice(0, 6);
                }

                setProducts(related.map(p => ({
                    id: p._id,
                    name: p.name,
                    price: `$${p.price}`,
                    image: p.images?.[0] || 'https://placehold.co/200x200?text=No+Image'
                })));
            }
        } catch (error) {
            console.error("Failed to fetch related products", error);
        }
    };
    
    if (category) {
        fetchRelated();
    }
  }, [category, currentProductId]);

  if (products.length === 0) return null;

  return (
    <div className="mt-12 w-full">
      <h2 className="text-[20px] font-semibold text-[#1c1c1c] mb-5">Related products</h2>
      
      {/* 6-column grid for large screens, scrolling on mobile */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((product, index) => (
          <Link href={`/product/${product.id}`} key={index} className="flex flex-col group cursor-pointer block">
            {/* Image Container with specific light gray background */}
            <div className="aspect-square bg-[#eeeeee] rounded-md flex items-center justify-center p-4 mb-3 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            <div className="flex flex-col">
              {/* Product Title: specific color and line height */}
              <h3 className="text-[16px] text-[#505050] leading-5.5 mb-1 line-clamp-2">
                {product.name}
              </h3>
              {/* Price: specific muted blue-gray color */}
              <p className="text-[16px] text-[#8b96a5]">
                {product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}