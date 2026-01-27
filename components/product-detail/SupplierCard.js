export default function SupplierCard() {
  return (
    <div className="bg-white border rounded-lg p-6 sticky top-6">
      {/* Supplier Info */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-500 font-bold text-xl">
            R
          </div>
          <div>
            <div className="font-semibold text-gray-800">Supplier</div>
            <div className="text-sm text-gray-600">Guangjo Trading LLC</div>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <img src="/Image/flags/Property 1=DE.png" alt="DE" className="w-5 h-3" />
            <span>Germany, Berlin</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Verified Seller</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Worldwide shipping</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-medium">
          Send inquiry
        </button>
        <button className="w-full py-3 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 font-medium">
          Seller's profile
        </button>
      </div>

      {/* Save for Later */}
      <button className="w-full mt-4 flex items-center justify-center gap-2 text-blue-500 hover:text-blue-600">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <span>Save for later</span>
      </button>
    </div>
  );
}
