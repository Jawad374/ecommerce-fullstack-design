'use client';

import { useState } from 'react';

export default function CartItem({ item, onRemove, onQuantityChange, onSaveForLater }) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQty) => {
    setQuantity(newQty);
    onQuantityChange(item.id, newQty);
  };

  return (
    // Removed outer border/rounded to match the list style; added bottom border
    <div className="bg-white border-b border-gray-100 py-6 flex items-start gap-4 last:border-0">
      
      {/* Product Image - Centered image within border */}
      <div className="w-24 h-24 border border-gray-200 rounded-md flex items-center justify-center p-2 shrink-0">
        <img 
          src={item.image} 
          alt={item.name} 
          className="max-w-full max-h-full object-contain" 
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h3 className="font-medium text-gray-900 leading-tight mb-1">{item.name}</h3>
        <div className="text-[15px] text-gray-400 space-y-0.5">
          <p>Size: {item.size}, Color: {item.color}, Material: {item.material}</p>
          <p>Seller: {item.seller}</p>
        </div>
        
        {/* Action Buttons - Boxed style */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => onRemove(item.id)}
            className="px-3 py-1.5 text-sm font-medium text-red-500 border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 transition-colors"
          >
            Remove
          </button>
          <button
            onClick={() => onSaveForLater(item.id)}
            className="px-3 py-1.5 text-sm font-medium text-blue-600 border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 transition-colors"
          >
            Save for later
          </button>
        </div>
      </div>

      {/* Price and Quantity - Aligned Right */}
      <div className="flex flex-col items-end gap-3 min-w-30">
        <div className="text-[17px] font-semibold text-gray-900">
          ${item.price.toFixed(2)}
        </div>
        
        <div className="relative">
          <select
            value={quantity}
            onChange={(e) => handleQuantityChange(Number(e.target.value))}
            className="appearance-none pl-3 pr-10 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <option key={num} value={num}>
                Qty: {num}
              </option>
            ))}
          </select>
          {/* Custom Chevron for the select box */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}