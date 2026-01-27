import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b">
      {/* Top Bar */}
      <div className="bg-white py-3 px-6 flex items-center justify-between">
        {/* Logo and Search */}
        <div className="flex items-center gap-6 flex-1">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">□</span>
            </div>
            <span className="text-blue-500 font-bold text-xl">Brand</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl flex">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
            />
            <select className="px-3 border-t border-b border-gray-300 bg-white text-sm text-gray-600">
              <option>All category</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home</option>
            </select>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
              Search
            </button>
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-6 ml-6">
          <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs">Profile</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="text-xs">Message</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-xs">Orders</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-xs">My cart</span>
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white border-t px-6 py-3">
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-gray-700 hover:text-blue-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span>All category</span>
          </button>
          <Link href="/hot-offers" className="text-gray-700 hover:text-blue-500">Hot offers</Link>
          <Link href="/gift-boxes" className="text-gray-700 hover:text-blue-500">Gift boxes</Link>
          <Link href="/projects" className="text-gray-700 hover:text-blue-500">Projects</Link>
          <Link href="/menu" className="text-gray-700 hover:text-blue-500">Menu item</Link>
          <button className="text-gray-700 hover:text-blue-500 flex items-center gap-1">
            Help
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div className="ml-auto flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-700">
              <span>English, USD</span>
            </button>
            <button className="flex items-center gap-2 text-gray-700">
              <span>Ship to</span>
              <img src="https://flagcdn.com/w20/de.png" alt="DE" className="w-5 h-3" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
