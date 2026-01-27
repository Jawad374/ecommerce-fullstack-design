export default function Newsletter() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Subscribe on our newsletter</h2>
        <p className="text-gray-600 mb-6">
          Get daily news on upcoming offers from many suppliers all over the world
        </p>
        <div className="flex justify-center gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Email"
            className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button className="px-8 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-medium">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
