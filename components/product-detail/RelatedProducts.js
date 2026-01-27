export default function RelatedProducts() {
  const products = [
    { name: 'Xiaomi Redmi 8 Original', price: '$32.00 - $40.00', image: '📱' },
    { name: 'Xiaomi Redmi 8 Original', price: '$32.00 - $40.00', image: '⌚' },
    { name: 'Xiaomi Redmi 8 Original', price: '$32.00 - $40.00', image: '🎧' },
    { name: 'Xiaomi Redmi 8 Original', price: '$32.00 - $40.00', image: '👖' },
    { name: 'Xiaomi Redmi 8 Original', price: '$32.00 - $40.00', image: '☕' },
    { name: 'Xiaomi Redmi 8 Original', price: '$32.00 - $40.00', image: '👜' }
  ];

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Related products</h2>
      <div className="grid grid-cols-6 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <div className="aspect-square bg-gray-100 flex items-center justify-center text-5xl">
              {product.image}
            </div>
            <div className="p-3">
              <h3 className="text-sm text-gray-700 mb-2 line-clamp-2">{product.name}</h3>
              <p className="text-sm font-medium text-gray-800">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
