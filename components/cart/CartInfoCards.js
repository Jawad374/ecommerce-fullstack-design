'use client';

// Icons extracted to match the reference image style
const InfoIcon = ({ children }) => (
  <div className="w-12 h-12 bg-[#e5e7eb] rounded-full flex items-center justify-center shrink-0">
    {children}
  </div>
);

export default function CartInfoCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 bg-white">
      
      {/* Secure Payment */}
      <div className="flex items-center gap-4">
        <InfoIcon>
          <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2a5 5 0 00-5 5v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V7a5 5 0 00-5-5zm3 8H9V7a3 3 0 016 0v3z" />
          </svg>
        </InfoIcon>
        <div>
          <h3 className="text-[17px] font-medium text-gray-900 leading-tight">Secure payment</h3>
          <p className="text-[15px] text-gray-400">Have you ever finally just</p>
        </div>
      </div>

      {/* Customer Support */}
      <div className="flex items-center gap-4">
        <InfoIcon>
          <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z" />
          </svg>
        </InfoIcon>
        <div>
          <h3 className="text-[17px] font-medium text-gray-900 leading-tight">Customer support</h3>
          <p className="text-[15px] text-gray-400">Have you ever finally just</p>
        </div>
      </div>

      {/* Free Delivery */}
      <div className="flex items-center gap-4">
        <InfoIcon>
          <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM16 13V9h2.5l1.5 2v2h-4z" />
          </svg>
        </InfoIcon>
        <div>
          <h3 className="text-[17px] font-medium text-gray-900 leading-tight">Free delivery</h3>
          <p className="text-[15px] text-gray-400">Have you ever finally just</p>
        </div>
      </div>

    </div>
  );
}