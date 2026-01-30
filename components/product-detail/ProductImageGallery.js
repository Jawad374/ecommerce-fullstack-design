'use client';

import { useState } from 'react';

export default function ProductImageGallery({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  
  if (!product) return null;

  // Use product image or fallbacks
  const images = [product.image, product.image, product.image, product.image, product.image, product.image];

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
        <img src={images[selectedImage]} alt={product.name} className="max-w-full max-h-full object-contain" />
      </div>

      {/* Thumbnail Gallery */}
      <div className="flex gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center p-1 overflow-hidden hover:border-2 hover:border-blue-500 transition-all ${
              selectedImage === index ? 'border-2 border-blue-500' : 'border-2 border-transparent'
            }`}
          >
             <img src={image} alt="Thumbnail" className="w-full h-full object-contain" />
          </button>
        ))}
      </div>
    </div>
  );
}
