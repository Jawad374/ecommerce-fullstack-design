'use client';

import { useState } from 'react';

export default function CartItem({ item, onRemove, onQuantityChange, onSaveForLater }) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQty) => {
    setQuantity(newQty);
    onQuantityChange(item.id, newQty);
  };

  return (
    <div className="bg-white border rounded-lg p-4 flex items-start gap-4">
      {/* Product Image */}
      <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-4xl flex-shrink-0">
        {item.image}
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h3 className="font-medium text-gray-800 mb-2">{item.name}</h3>
        <div className="text-sm text-gray-600 space-y-1">
          <p>Size: {item.size}, Color: {item.color}, Material: {item.material}</p>
          <p>Seller: {item.seller}</p>
        </div>
        <div className="flex gap-4 mt-3">
          <button
            onClick={() => onRemove(item.id)}
            className="text-sm text-red-500 hover:underline"
          >
            Remove
          </button>
          <button
            onClick={() => onSaveForLater(item.id)}
            className="text-sm text-blue-500 hover:underline"
          >
            Save for later
          </button>
        </div>
      </div>

      {/* Price and Quantity */}
      <div className="flex items-center gap-8">
        <div className="text-right">
          <div className="text-xl font-bold text-gray-800">${item.price.toFixed(2)}</div>
        </div>
        <div>
          <label className="text-sm text-gray-600 block mb-1">Qty:</label>
          <select
            value={quantity}
            onChange={(e) => handleQuantityChange(Number(e.target.value))}
            className="px-3 py-2 border rounded-md text-sm"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
