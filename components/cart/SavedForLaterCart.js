export default function SavedForLaterCart() {
  const products = [
    { id: 1, name: 'GoPro HERO8 4K Action Camera - Black', price: 99.50, image: '📱' },
    { id: 2, name: 'GoPro HERO8 4K Action Camera - Black', price: 99.50, image: '📱' },
    { id: 3, name: 'GoPro HERO8 4K Action Camera - Black', price: 99.50, image: '⌚' },
    { id: 4, name: 'GoPro HERO8 4K Action Camera - Black', price: 99.50, image: '💻' }
  ];

  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Saved for later</h2>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square bg-gray-100 flex items-center justify-center text-6xl">
              {product.image}
            </div>
            <div className="p-4">
              <div className="text-lg font-bold text-gray-800 mb-2">${product.price.toFixed(2)}</div>
              <h3 className="text-sm text-gray-600 mb-3 line-clamp-2">{product.name}</h3>
              <button className="w-full py-2 text-sm text-blue-500 border border-blue-500 rounded-md hover:bg-blue-50 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Move to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
