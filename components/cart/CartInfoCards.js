export default function CartInfoCards() {
  return (
    <div className="grid grid-cols-3 gap-4 my-8">
      {/* Secure Payment */}
      <div className="bg-gray-100 rounded-lg p-6 flex items-start gap-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-1">Secure payment</h3>
          <p className="text-sm text-gray-600">Have you ever finally just</p>
        </div>
      </div>

      {/* Customer Support */}
      <div className="bg-gray-100 rounded-lg p-6 flex items-start gap-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-1">Customer support</h3>
          <p className="text-sm text-gray-600">Have you ever finally just</p>
        </div>
      </div>

      {/* Free Delivery */}
      <div className="bg-gray-100 rounded-lg p-6 flex items-start gap-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-1">Free delivery</h3>
          <p className="text-sm text-gray-600">Have you ever finally just</p>
        </div>
      </div>
    </div>
  );
}
