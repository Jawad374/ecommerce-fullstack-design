export default function ProductInfo() {
  return (
    <div className="space-y-4">
      {/* Stock Status */}
      <div className="flex items-center gap-2 text-green-600">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm font-medium">in stock</span>
      </div>

      {/* Product Title */}
      <h1 className="text-3xl font-bold text-gray-800">
        Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
      </h1>

      {/* Rating and Reviews */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < 4 ? 'text-yellow-400' : 'text-gray-300'}>★</span>
            ))}
          </div>
          <span className="text-yellow-600 font-medium">9.3</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span className="text-sm">32 reviews</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="text-sm">154 sold</span>
        </div>
      </div>

      {/* Pricing */}
      <div className="flex items-end gap-4 py-4 border-y">
        <div>
          <div className="text-sm text-gray-500 mb-1">Price:</div>
          <div className="text-3xl font-bold text-red-600">$98.00</div>
          <div className="text-sm text-gray-400">50-100 pcs</div>
        </div>
        <div>
          <div className="text-xl font-bold text-gray-800">$90.00</div>
          <div className="text-sm text-gray-400">100-700 pcs</div>
        </div>
        <div>
          <div className="text-xl font-bold text-gray-800">$78.00</div>
          <div className="text-sm text-gray-400">700+ pcs</div>
        </div>
      </div>

      {/* Product Details */}
      <div className="space-y-3 text-sm">
        <div className="flex">
          <span className="w-32 text-gray-500">Price:</span>
          <span className="text-gray-800 font-medium">Negotiable</span>
        </div>
        <div className="flex">
          <span className="w-32 text-gray-500">Type:</span>
          <span className="text-gray-800">Classic shoes</span>
        </div>
        <div className="flex">
          <span className="w-32 text-gray-500">Material:</span>
          <span className="text-gray-800">Plastic material</span>
        </div>
        <div className="flex">
          <span className="w-32 text-gray-500">Design:</span>
          <span className="text-gray-800">Modern nice</span>
        </div>
        <div className="flex">
          <span className="w-32 text-gray-500">Customization:</span>
          <span className="text-gray-800">Customized logo and design custom packages</span>
        </div>
        <div className="flex">
          <span className="w-32 text-gray-500">Protection:</span>
          <span className="text-gray-800">Refund Policy</span>
        </div>
        <div className="flex">
          <span className="w-32 text-gray-500">Warranty:</span>
          <span className="text-gray-800">2 years full warranty</span>
        </div>
      </div>
    </div>
  );
}
