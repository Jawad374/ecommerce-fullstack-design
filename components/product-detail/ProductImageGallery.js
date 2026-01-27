'use client';

import { useState } from 'react';

export default function ProductImageGallery() {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const images = ['👕', '👕', '👕', '👕', '👕', '👕'];

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center text-9xl">
        {images[selectedImage]}
      </div>

      {/* Thumbnail Gallery */}
      <div className="flex gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-3xl hover:border-2 hover:border-blue-500 transition-all ${
              selectedImage === index ? 'border-2 border-blue-500' : 'border-2 border-transparent'
            }`}
          >
            {image}
          </button>
        ))}
      </div>
    </div>
  );
}
