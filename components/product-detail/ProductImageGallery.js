'use client';

import { useState } from 'react';

export default function ProductImageGallery({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  
  if (!product) return null;

  // Handle both DB structure (images array) and Context structure (single image string)
  let images = [];
  if (product.images && product.images.length > 0) {
    images = product.images;
  } else if (product.image) {
    images = [product.image, product.image, product.image, product.image]; // Fallback for single image
  } else {
    images = ['https://placehold.co/500x500?text=No+Image'];
  }
  
  // Ensure we have at least a few images for the gallery view if only 1 is provided
  if (images.length === 1) {
     images = [images[0], images[0], images[0]];
  }

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
