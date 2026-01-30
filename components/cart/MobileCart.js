import React from 'react';
import { ArrowLeft, MoreVertical, Minus, Plus } from 'lucide-react';

export default function MobileCart() {
  // Mock data to match your screenshot
  const cartItems = [
    {
      id: 1,
      name: 'T-shirts with multiple colors for men',
      size: 'medium',
      color: 'blue',
      seller: 'Artel Market',
      price: '78.99',
      qty: 2,
      img: 'https://via.placeholder.com/150/1E40AF/FFFFFF?text=T-Shirt'
    },
    {
      id: 2,
      name: 'Solid Backpack blue jeans large size',
      size: 'medium',
      color: 'blue',
      seller: 'Artel Market',
      price: '78.99',
      qty: 1,
      img: 'https://via.placeholder.com/150/2563EB/FFFFFF?text=Backpack'
    },
    {
      id: 3,
      name: 'Water boiler black for kitchen, 1200 Watt',
      size: 'medium',
      color: 'blue',
      seller: 'Artel Market',
      price: '78.99',
      qty: 2,
      img: 'https://via.placeholder.com/150/000000/FFFFFF?text=Boiler'
    }
  ];

  const savedItems = [
    { id: 1, name: 'Regular Fit Resort Shirt', price: '$57.70', img: 'https://via.placeholder.com/150/374151/FFFFFF?text=Headset' },
    { id: 2, name: 'Regular Fit Resort Shirt', price: '$57.70', img: 'https://via.placeholder.com/150/1F2937/FFFFFF?text=Phone' },
    { id: 3, name: 'Regular Fit Resort Shirt', price: '$57.70', img: 'https://via.placeholder.com/150/4B5563/FFFFFF?text=Watch' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-10 font-sans">
      
      {/* 1. Header */}
      <header className="bg-white px-4 py-4 flex items-center gap-4 sticky top-0 z-20 border-b border-gray-100 shadow-sm">
        <button>
            <ArrowLeft className="w-6 h-6 text-gray-800" />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Shopping cart</h1>
      </header>

      {/* 2. Cart Items List */}
      <div className="space-y-2 py-3">
        {cartItems.map((item) => (
          <div key={item.id} className="bg-white p-4 border-y border-gray-100">
            <div className="flex gap-3 mb-4">
              {/* Product Image */}
              <div className="w-20 h-20 bg-gray-50 rounded-md border border-gray-100 p-1 shrink-0">
                <img src={item.img} className="w-full h-full object-contain mix-blend-multiply" alt={item.name} />
              </div>
              
              {/* Details */}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                    <h3 className="text-sm font-medium text-gray-900 leading-snug line-clamp-2 pr-2">
                        {item.name}
                    </h3>
                    <button className="text-gray-400">
                        <MoreVertical className="w-5 h-5" />
                    </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                    Size: {item.size}, Color: {item.color}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                    Seller: {item.seller}
                </p>
              </div>
            </div>

            {/* Controls Row */}
            <div className="flex justify-between items-center">
                {/* Stepper */}
                <div className="flex items-center border border-gray-300 rounded-sm h-9 w-32 bg-white">
                    <button className="w-10 h-full flex items-center justify-center text-gray-600 border-r border-gray-300 active:bg-gray-100">
                        <Minus className="w-4 h-4" />
                    </button>
                    <span className="flex-1 text-center text-sm font-semibold text-gray-900">
                        {item.qty}
                    </span>
                    <button className="w-10 h-full flex items-center justify-center text-gray-600 border-l border-gray-300 active:bg-gray-100">
                        <Plus className="w-4 h-4" />
                    </button>
                </div>

                {/* Price */}
                <span className="font-bold text-gray-900 text-base">
                    ${item.price}
                </span>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Order Summary & Checkout */}
      <div className="bg-white p-4 mb-4 border-y border-gray-200">
          <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-500 text-base">
                  <span>Items (3):</span>
                  <span>$32.00</span>
              </div>
              <div className="flex justify-between text-gray-500 text-base">
                  <span>Shipping:</span>
                  <span>$10.00</span>
              </div>
              <div className="flex justify-between text-gray-500 text-base">
                  <span>Tax:</span>
                  <span>$7.00</span>
              </div>
              <div className="flex justify-between text-gray-900 font-bold text-lg pt-2">
                  <span>Total:</span>
                  <span>$220.00</span>
              </div>
          </div>

          <button className="w-full bg-[#00B517] hover:bg-green-600 active:bg-green-700 text-white font-medium py-3.5 rounded-lg text-lg transition-colors">
              Checkout (3 items)
          </button>
      </div>

      {/* 4. Saved for Later */}
      <div className="px-4 py-2">
          <h3 className="font-bold text-gray-900 text-lg mb-4">Saved for later</h3>
          
          <div className="space-y-4">
              {savedItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg border border-gray-200 p-3 flex gap-3 shadow-sm">
                      {/* Image */}
                      <div className="w-24 h-24 bg-gray-50 rounded-md border border-gray-100 shrink-0 p-2">
                          <img src={item.img} className="w-full h-full object-contain mix-blend-multiply" alt={item.name} />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 flex flex-col justify-between py-1">
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 line-clamp-2">{item.name}</h4>
                            <p className="font-bold text-gray-900 mt-1">{item.price}</p>
                          </div>
                          
                          <div className="flex gap-3 mt-2">
                              <button className="px-3 py-1.5 border border-gray-200 rounded text-blue-600 text-xs font-medium bg-white shadow-sm active:bg-gray-50">
                                  Move to cart
                              </button>
                              <button className="px-3 py-1.5 border border-gray-200 rounded text-red-500 text-xs font-medium bg-white shadow-sm active:bg-gray-50">
                                  Remove
                              </button>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
}