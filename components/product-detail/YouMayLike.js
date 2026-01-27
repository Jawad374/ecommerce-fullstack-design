export default function YouMayLike() {
  const products = [
    { name: 'Men Blazers Sets Elegant Formal', price: '$7.00 - $99.50', image: '🧥' },
    { name: 'Men Shirt Sleeve Polo Contrast', price: '$7.00 - $99.50', image: '👕' },
    { name: 'Apple Watch Series Space Gray', price: '$7.00 - $99.50', image: '⌚' },
    { name: 'Basketball Crew Socks Long Stuff', price: '$7.00 - $99.50', image: '👕' },
    { name: "New Summer Men's castrol T-Shirts", price: '$7.00 - $99.50', image: '👕' }
  ];

  return (
    <div className="bg-white border rounded-lg p-6">
      <h3 className="font-semibold text-gray-800 mb-4">You may like</h3>
      <div className="space-y-4">
        {products.map((product, index) => (
          <div key={index} className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
            <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center text-2xl flex-shrink-0">
              {product.image}
            </div>
            <div className="flex-1">
              <h4 className="text-sm text-gray-700 line-clamp-2 mb-1">{product.name}</h4>
              <p className="text-sm font-medium text-gray-800">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
