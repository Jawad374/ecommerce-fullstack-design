import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">□</span>
              </div>
              <span className="text-blue-500 font-bold text-xl">Brand</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Best information about the company gies here but now lorem ipsum is
            </p>
            <div className="flex gap-2">
              <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                <span className="text-sm">f</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                <span className="text-sm">t</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                <span className="text-sm">in</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                <span className="text-sm">ig</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                <span className="text-sm">yt</span>
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

          {/* For Users Column */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">For users</h3>
            <ul className="space-y-2">
              <li><Link href="/login" className="text-sm text-gray-600 hover:text-blue-500">Login</Link></li>
              <li><Link href="/register" className="text-sm text-gray-600 hover:text-blue-500">Register</Link></li>
              <li><Link href="/settings" className="text-sm text-gray-600 hover:text-blue-500">Settings</Link></li>
              <li><Link href="/orders" className="text-sm text-gray-600 hover:text-blue-500">My Orders</Link></li>
            </ul>
          </div>
        </div>

        {/* App Download Section */}
        <div className="border-t pt-8 mb-8">
          <div className="flex items-center justify-center gap-4">
            <h3 className="font-semibold text-gray-800">Get app</h3>
            <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
              <span className="text-xl">🍎</span>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </button>
            <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
              <span className="text-xl">▶</span>
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-6 text-center">
          <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
            © 2023 Ecommerce. 
            <button className="flex items-center gap-1 hover:text-blue-500">
              <span>🇬🇧</span>
              <span>English</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
}
