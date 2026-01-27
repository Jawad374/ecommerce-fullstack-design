import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-5 gap-8 mb-6 items-start">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-4">
              <div className="relative w-10 h-10">
                <div className="absolute -left-1 -top-1 w-10 h-10 rounded-lg bg-blue-100" />
                <div className="relative w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                  <img src="/Image/others/logoicon.png" alt="Brand logo" className="w-6 h-6" />
                </div>
              </div>
              <span className="text-blue-600 font-bold text-xl">Brand</span>
            </div>
            <p className="text-sm text-gray-600 mb-4 max-w-sm">
              Best information about the company goes here but now lorem ipsum is
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.888h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9A12.14 12.14 0 013 4.79a4.28 4.28 0 001.32 5.71 4.24 4.24 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.2 4.3 4.3 0 01-1.93.07 4.28 4.28 0 003.99 2.97A8.6 8.6 0 012 19.54a12.13 12.13 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.7 8.7 0 0022.46 6z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 17.34V10.5H6.14v6.84h2.2zM7.24 9.36a1.28 1.28 0 110-2.56 1.28 1.28 0 010 2.56zM18 17.34v-3.36c0-1.8-1.02-2.64-2.38-2.64-1.1 0-1.58.6-1.86 1.02v-0.86H11.1c.03.57 0 6.84 0 6.84h2.2v-3.82c0-.2.01-.4.07-.55.15-.4.49-.82 1.06-.82.75 0 1.05.62 1.05 1.53v3.66H18z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="4" ry="4" strokeWidth="1.5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="1.5" />
                  <path d="M17.5 6.5h.01" strokeWidth="1.5" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.5 6.2a3 3 0 00-2.12-2.12C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.38.58A3 3 0 00.5 6.2 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.8 3 3 0 002.12 2.12C4.3 20.5 12 20.5 12 20.5s7.7 0 9.38-.58A3 3 0 0023.5 17.8 31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.8zM10 15.5V8.5l6 3.5-6 3.5z" />
                </svg>
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
          <div className="flex flex-col items-start">
            <div className="text-sm text-gray-700 mb-2 font-bold">Get app</div>
            <div className="flex flex-col gap-3 w-full">
              <a href="#" className="inline-flex items-center gap-4 bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-900">
                <img src="/apple-512.png" alt="App Store" className="w-7 h-7 object-contain" />
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-xs">Download on the</span>
                  <span className="text-lg font-semibold">App Store</span>
                </div>
              </a>
              <a href="#" className="inline-flex items-center gap-4 bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-900">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Google Play" className="w-7 h-7" />
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-xs uppercase">Get it on</span>
                  <span className="text-lg font-semibold">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            <p className="text-sm text-gray-600">© 2026 Ecommerce.</p>
            <div>
              <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-500">
                <img src="/Image/flags/Property 1=GB.png" alt="English" width={20} height={14} className="rounded-sm" />
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
