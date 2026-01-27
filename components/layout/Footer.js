import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-5 gap-8 mb-6 items-start">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">□</span>
              </div>
              <span className="text-blue-600 font-bold text-xl">Brand</span>
            </div>
            <p className="text-sm text-gray-600 mb-4 max-w-sm">
              Best information about the company goes here but now lorem ipsum is
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                <span className="text-sm text-gray-600">f</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                <span className="text-sm text-gray-600">t</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                <span className="text-sm text-gray-600">in</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                <span className="text-sm text-gray-600">ig</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                <span className="text-sm text-gray-600">yt</span>
              </a>
            </div>
          </div>

          {/* About Column */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-blue-500">About Us</Link></li>
              <li><Link href="/find-store" className="text-sm text-gray-600 hover:text-blue-500">Find store</Link></li>
              <li><Link href="/categories" className="text-sm text-gray-600 hover:text-blue-500">Categories</Link></li>
              <li><Link href="/blogs" className="text-sm text-gray-600 hover:text-blue-500">Blogs</Link></li>
            </ul>
          </div>

          {/* Partnership Column */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Partnership</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-blue-500">About Us</Link></li>
              <li><Link href="/find-store" className="text-sm text-gray-600 hover:text-blue-500">Find store</Link></li>
              <li><Link href="/categories" className="text-sm text-gray-600 hover:text-blue-500">Categories</Link></li>
              <li><Link href="/blogs" className="text-sm text-gray-600 hover:text-blue-500">Blogs</Link></li>
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Information</h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-sm text-gray-600 hover:text-blue-500">Help Center</Link></li>
              <li><Link href="/refund" className="text-sm text-gray-600 hover:text-blue-500">Money Refund</Link></li>
              <li><Link href="/shipping" className="text-sm text-gray-600 hover:text-blue-500">Shipping</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-blue-500">Contact us</Link></li>
            </ul>
          </div>

          {/* App Column (right) */}
          <div className="flex flex-col items-end">
            <div className="text-sm text-gray-700 mb-2">Get app</div>
            <div className="flex flex-col gap-3">
                <a href="#" className="inline-flex items-center gap-3 bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-900">
                  <img src="/apple-512.png" alt="App Store" className="w-5 h-5 object-contain" />
                  <span className="text-sm font-semibold">App Store</span>
                </a>
              <a href="#" className="inline-flex items-center gap-3 bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-900">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Google Play" className="w-5 h-5" />
                <span className="text-sm font-semibold">Google Play</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            <p className="text-sm text-gray-600">© 2023 Ecommerce.</p>
            <div>
              <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-500">
                <img src="https://flagcdn.com/w20/gb.png" alt="English" width={20} height={14} className="rounded-sm" />
                <span>English</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
