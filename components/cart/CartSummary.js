'use client';

import { useState } from 'react';

export default function CartSummary({ subtotal, discount, tax, total }) {
  const [couponCode, setCouponCode] = useState('');

  const handleApplyCoupon = () => {
    console.log('Applying coupon:', couponCode);
  };

  return (
    <div className="bg-white border rounded-lg p-6 sticky top-6">
      {/* Coupon Section */}
      <div className="mb-6">
        <label className="text-sm text-gray-600 block mb-2">Have a coupon?</label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add coupon"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="flex-1 px-3 py-2 border rounded-md text-sm focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleApplyCoupon}
            className="px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-50 text-sm font-medium"
          >
            Apply
          </button>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-3 mb-6 pb-6 border-b">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal:</span>
          <span className="text-gray-800 font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Discount:</span>
          <span className="text-red-600 font-medium">-${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tax:</span>
          <span className="text-green-600 font-medium">+${tax.toFixed(2)}</span>
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-gray-800 font-semibold">Total:</span>
        <span className="text-2xl font-bold text-gray-800">${total.toFixed(2)}</span>
      </div>

      {/* Checkout Button */}
      <button className="w-full py-3 bg-green-500 text-white rounded-md hover:bg-green-600 font-medium mb-3">
        Checkout
      </button>

      {/* Payment Methods */}
      <div className="flex items-center justify-center gap-2 pt-3 border-t">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6 grayscale opacity-60" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6 grayscale opacity-60" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/200px-PayPal.svg.png" alt="PayPal" className="h-6 grayscale opacity-60" />
        <span className="text-xs text-gray-400">and more...</span>
      </div>
    </div>
  );
}
