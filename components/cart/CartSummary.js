'use client';

import { useState } from 'react';

export default function CartSummary({ subtotal, discount, tax, total }) {
  const [couponCode, setCouponCode] = useState('');

  const handleApplyCoupon = () => {
    console.log('Applying coupon:', couponCode);
  };

  return (
    <div className="w-full max-w-sm space-y-3 sticky top-6">
      {/* Coupon Card */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
        <label className="text-[17px] text-gray-700 block mb-3">Have a coupon?</label>
        <div className="flex border border-gray-200 rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-blue-500">
          <input
            type="text"
            placeholder="Add coupon"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="flex-1 px-4 py-2.5 text-base text-gray-400 focus:outline-none"
          />
          <button
            onClick={handleApplyCoupon}
            className="px-5 py-2.5 text-blue-600 border-l border-gray-200 hover:bg-gray-50 font-semibold transition-colors"
          >
            Apply
          </button>
        </div>
      </div>

      {/* Summary Card */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
        <div className="space-y-3 mb-4">
          <div className="flex justify-between items-center text-gray-500">
            <span className="text-[17px]">Subtotal:</span>
            <span className="text-gray-900">${subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-[17px]">Discount:</span>
            <span className="text-red-500 font-normal">− ${discount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-[17px]">Tax:</span>
            <span className="text-green-500 font-normal">+ ${tax.toLocaleString()}</span>
          </div>
        </div>

        <hr className="border-gray-100 mb-4" />

        {/* Total Row */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-[19px] font-bold text-gray-900">Total:</span>
          <span className="text-[22px] font-bold text-gray-900">${total.toLocaleString()}</span>
        </div>

        {/* Checkout Button */}
        <button className="w-full py-4 bg-[#3bb70e] text-white rounded-lg hover:bg-green-600 font-semibold text-lg transition-colors shadow-sm mb-6">
          Checkout
        </button>

        {/* Payment Icons */}
        <div className="flex items-center justify-center gap-2">
          {/* Using placeholder divs to mimic the clean look of the image icons */}
          <div className="h-8 w-12 border border-gray-100 rounded flex items-center justify-center bg-gray-50">
             <span className="text-[8px] font-bold text-blue-800">AMEX</span>
          </div>
          <div className="h-8 w-12 border border-gray-100 rounded flex items-center justify-center bg-gray-50">
             <div className="flex -space-x-1">
               <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
               <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
             </div>
          </div>
          <div className="h-8 w-12 border border-gray-100 rounded flex items-center justify-center bg-gray-50">
             <span className="text-[8px] italic font-black text-blue-900">Pay</span><span className="text-[8px] italic font-black text-blue-400">Pal</span>
          </div>
          <div className="h-8 w-12 border border-gray-100 rounded flex items-center justify-center bg-gray-50">
             <span className="text-[10px] italic font-bold text-blue-700">VISA</span>
          </div>
          <div className="h-8 w-12 border border-gray-100 rounded flex items-center justify-center bg-gray-50">
             <span className="text-[10px] font-bold">Pay</span>
          </div>
        </div>
      </div>
    </div>
  );
}