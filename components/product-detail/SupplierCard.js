import React from 'react';

export default function SupplierCard() {
  return (
    <div className="max-w-70 bg-white border border-[#e3e8ee] rounded-md p-4 shadow-sm">
      {/* Supplier Info Header */}
      <div className="flex gap-3 mb-4">
        {/* Teal Avatar Box */}
        <div className="w-12 h-12 bg-[#c3f0f1] rounded-sm flex items-center justify-center text-[#4ca7a8] font-semibold text-xl">
          R
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-[16px] text-[#1c1c1c] leading-tight">Supplier</div>
          <div className="text-[16px] text-[#1c1c1c] leading-tight">Guanjoi Trading LLC</div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-[#e0e0e0] mb-4" />

      {/* Details List */}
      <div className="space-y-2.5 mb-5">
        <div className="flex items-center gap-3 text-[#8b96a5]">
          <div className="w-5 h-4 flex items-center justify-center overflow-hidden">
             {/* Replace with your local flag image path if needed */}
            <img src="https://flagcdn.com/w20/de.png" alt="Germany" className="object-cover" />
          </div>
          <span className="text-[15px]">Germany, Berlin</span>
        </div>
        
        <div className="flex items-center gap-3 text-[#8b96a5]">
          <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
          <span className="text-[15px]">Verified Seller</span>
        </div>

        <div className="flex items-center gap-3 text-[#8b96a5]">
          <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.015 9.015 0 018.716 6.747M12 3a9.015 9.015 0 00-8.716 6.747m11.742 9.664a8.531 8.531 0 01-5.158 0m5.158 0a8.531 8.531 0 00-5.158 0" />
          </svg>
          <span className="text-[15px]">Worldwide shipping</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2">
        <button className="w-full py-2.5 bg-[#127fff] text-white rounded-md font-medium text-[15px] hover:bg-blue-600 transition-colors">
          Send inquiry
        </button>
        <button className="w-full py-2.5 bg-white border border-[#dee2e7] text-[#127fff] rounded-md font-medium text-[15px] hover:bg-gray-50 transition-colors">
          Seller's profile
        </button>
      </div>

      {/* Save for Later - Positioned outside the border box in the screenshot but inside the layout flow */}
      <div className="mt-5 flex justify-center">
        <button className="flex items-center gap-2 text-[#127fff] hover:underline font-medium text-[15px]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
          Save for later
        </button>
      </div>
    </div>
  );
}