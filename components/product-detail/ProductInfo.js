import React from 'react';

export default function ProductInfo({ product }) {
  if (!product) return null;
  return (
    <div className="max-w-xl font-sans p-4 bg-white">
      {/* Stock Status */}
      <div className="flex items-center gap-1.5 text-[#32b43a] mb-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-[15px] font-medium">In stock</span>
      </div>

      {/* Product Title */}
      <h1 className="text-[22px] leading-tight font-semibold text-[#1c1c1c] mb-3">
        {product.name}
      </h1>

      {/* Rating and Reviews Row */}
      <div className="flex items-center text-[#8b96a5] text-sm mb-4">
        <div className="flex items-center gap-1">
          <div className="flex text-[#ff9017] text-lg">
            {[...Array(4)].map((_, i) => <span key={i}>★</span>)}
            <span className="text-[#dee2e7]">★</span>
          </div>
          <span className="text-[#ff9017] font-medium ml-1">{product.rating}</span>
        </div>
        <span className="mx-2 text-[#dee2e7]">•</span>
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 opacity-60" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5H4a2 2 0 01-2-2V5z" />
          </svg>
          <span>32 reviews</span>
        </div>
        <span className="mx-2 text-[#dee2e7]">•</span>
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 opacity-60" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span>154 sold</span>
        </div>
      </div>

      {/* Pricing Section - The "Peach" Box */}
      <div className="bg-[#fff0df] p-4 flex gap-0 mb-6 border-l-0">
        <div className="flex-1 border-r border-[#f7e1c1] pr-4">
          <div className="text-[18px] font-bold text-[#fa3434]">${product.price.toFixed(2)}</div>
          <div className="text-[13px] text-[#8b96a5]">50-100 pcs</div>
        </div>
        <div className="flex-1 border-r border-[#f7e1c1] px-6">
          <div className="text-[18px] font-bold text-[#1c1c1c]">${(product.price * 0.9).toFixed(2)}</div>
          <div className="text-[13px] text-[#8b96a5]">100-700 pcs</div>
        </div>
        <div className="flex-1 pl-6">
          <div className="text-[18px] font-bold text-[#1c1c1c]">${(product.price * 0.8).toFixed(2)}</div>
          <div className="text-[13px] text-[#8b96a5]">700+ pcs</div>
        </div>
      </div>

      {/* Product Details Table */}
      <div className="space-y-4 text-[15px]">
        <DetailRow label="Price:" value="Negotiable" />
        <hr className="border-[#e0e0e0]" />
        <DetailRow label="Type:" value="Classic shoes" />
        <DetailRow label="Material:" value="Plastic material" />
        <DetailRow label="Design:" value="Modern nice" />
        <hr className="border-[#e0e0e0]" />
        <DetailRow label="Customization:" value="Customized logo and design custom packages" />
        <DetailRow label="Protection:" value="Refund Policy" />
        <DetailRow label="Warranty:" value="2 years full warranty" />
      </div>
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="flex items-start">
      <span className="w-32 text-[#8b96a5] shrink-0">{label}</span>
      <span className="text-[#505050]">{value}</span>
    </div>
  );
}