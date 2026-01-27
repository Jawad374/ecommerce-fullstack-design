export default function Newsletter() {
  return (
    <div className="bg-gray-100 py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
          Subscribe on our newsletter
        </h2>
        <p className="text-sm md:text-base text-gray-600 mb-6 max-w-sm md:max-w-none mx-auto">
          Get daily news on upcoming offers from many suppliers all over the world
        </p>

        {/* Form Container: Vertical stack on mobile, horizontal gap-2 on desktop */}
        <div className="flex flex-col md:flex-row justify-center gap-2 max-w-md mx-auto">
          <div className="relative flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 pl-10 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 text-sm md:text-base"
            />
          </div>
          <button className="w-full md:w-auto px-8 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-medium transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}