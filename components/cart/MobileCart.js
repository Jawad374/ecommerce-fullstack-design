import React from 'react';
import { useCart } from '@/context/CartContext';
import { ArrowLeft, MoreVertical, Minus, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function MobileCart() {
  const { cartItems, updateQuantity, removeFromCart, products } = useCart();
  const router = useRouter();

  const savedItems = [
    { id: 1, name: 'Regular Fit Resort Shirt', price: '$57.70', img: 'https://via.placeholder.com/150/374151/FFFFFF?text=Headset' },
    { id: 2, name: 'Regular Fit Resort Shirt', price: '$57.70', img: 'https://via.placeholder.com/150/1F2937/FFFFFF?text=Phone' },
    { id: 3, name: 'Regular Fit Resort Shirt', price: '$57.70', img: 'https://via.placeholder.com/150/4B5563/FFFFFF?text=Watch' },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = 0;
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="bg-gray-50 min-h-screen pb-10 font-sans">
      
      {/* 1. Header */}
      <header className="bg-white px-4 py-4 flex items-center gap-4 sticky top-0 z-20 border-b border-gray-100 shadow-sm">
        <button onClick={() => router.back()}>
            <ArrowLeft className="w-6 h-6 text-gray-800" />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Shopping cart ({cartItems.length})</h1>
      </header>

      {/* 2. Cart Items List */}
      <div className="space-y-2 py-3">
        {cartItems.map((item) => (
          <div key={item.id} className="bg-white p-4 border-y border-gray-100">
            <div className="flex gap-3 mb-4">
              {/* Product Image */}
              <div className="w-20 h-20 bg-gray-50 rounded-md border border-gray-100 p-1 shrink-0">
                <img src={item.image} className="w-full h-full object-contain mix-blend-multiply" alt={item.name} />
              </div>
              
              {/* Details */}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                    <h3 className="text-sm font-medium text-gray-900 leading-snug line-clamp-2 pr-2">
                        {item.name}
                    </h3>
                    <button className="text-gray-400" onClick={() => removeFromCart(item.id)}>
                        <MoreVertical className="w-5 h-5" />
                    </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                    Size: {item.size || 'Medium'}, Color: {item.color || 'Blue'}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                    Seller: {item.seller || 'Global Seller'}
                </p>
              </div>
            </div>

            {/* Controls Row */}
            <div className="flex justify-between items-center">
                {/* Stepper */}
                <div className="flex items-center border border-gray-300 rounded-sm h-9 w-32 bg-white">
                    <button 
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="w-10 h-full flex items-center justify-center text-gray-600 border-r border-gray-300 active:bg-gray-100"
                    >
                        <Minus className="w-4 h-4" />
                    </button>
                    <span className="flex-1 text-center text-sm font-semibold text-gray-900">
                        {item.quantity}
                    </span>
                    <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-10 h-full flex items-center justify-center text-gray-600 border-l border-gray-300 active:bg-gray-100"
                    >
                        <Plus className="w-4 h-4" />
                    </button>
                </div>

                {/* Price */}
                <span className="font-bold text-gray-900 text-lg">
                    ${(item.price * item.quantity).toFixed(2)}
                </span>
            </div>
          </div>
        ))}
         {cartItems.length === 0 && <div className="text-center p-8 text-gray-500">Cart is empty</div>}
      </div>

       {/* Coupon Section (Static for now) */}
      <div className="bg-white p-4 border-y border-gray-100 mb-2">
         <div className="flex items-center justify-center border border-gray-200 rounded-lg p-2 gap-2 text-gray-400 text-sm cursor-pointer hover:bg-gray-50 transition-colors">
            <span>🎟️</span>
            <span>Have a coupon code?</span>
         </div>
      </div>

      {/* 3. Summary Section */}
      <div className="bg-white p-4 space-y-2 mb-4 border-y border-gray-100">
         <div className="flex justify-between text-gray-500 text-sm">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
         </div>
         <div className="flex justify-between text-gray-500 text-sm">
            <span>Discount:</span>
            <span className="text-red-500">- ${discount.toFixed(2)}</span>
         </div>
         <div className="flex justify-between text-gray-500 text-sm">
            <span>Tax:</span>
            <span className="text-green-600">+ ${tax.toFixed(2)}</span>
         </div>
         <div className="border-t border-gray-100 my-2 pt-2 flex justify-between font-bold text-gray-900 text-base">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
         </div>
         
         <button 
            onClick={() => {
                alert('Checkout functionality coming soon (requires payment gateway integration)');
            }}
            className="w-full bg-[#00B517] text-white py-3.5 rounded-lg font-bold text-base shadow-lg shadow-green-200 mt-2 active:scale-[0.98] transition-transform"
         >
            Checkout
         </button>
      </div>

      {/* 4. You May Also Like */}
      <div className="px-4 py-2">
          <h3 className="font-bold text-gray-900 text-lg mb-4">You may also like</h3>
          
          <div className="grid grid-cols-2 gap-3">
              {products.slice(0, 4).map((item) => (
                  <Link href={`/product/${item.id}`} key={item.id} className="bg-white rounded-lg border border-gray-200 p-3 flex flex-col shadow-sm">
                      {/* Image */}
                      <div className="w-full h-32 bg-gray-50 rounded-md border border-gray-100 mb-2 p-2 flex items-center justify-center">
                          <img src={item.image} className="max-w-full max-h-full object-contain mix-blend-multiply" alt={item.name} />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">{item.name}</h4>
                            <p className="font-bold text-gray-900">${item.price}</p>
                          </div>
                          
                          <button className="mt-2 w-full py-1.5 border border-blue-600 rounded text-blue-600 text-xs font-medium bg-white active:bg-blue-50">
                              View Details
                          </button>
                      </div>
                  </Link>
              ))}
          </div>
      </div>
    </div>
  );
}