export default function DealsSection() {
  const deals = [
    { name: 'Smart watches', discount: '-25%', image: '⌚' },
    { name: 'Laptops', discount: '-15%', image: '💻' },
    { name: 'GoPro cameras', discount: '-40%', image: '📷' },
    { name: 'Headphones', discount: '-25%', image: '🎧' },
    { name: 'Canon cameras', discount: '-25%', image: '📸' },
  ];

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Deals and offers</h2>
          <div className="flex gap-2 text-sm">
            <div className="bg-gray-200 px-3 py-1 rounded">13 Days</div>
            <div className="bg-gray-200 px-3 py-1 rounded">05 Hr</div>
            <div className="bg-gray-200 px-3 py-1 rounded">46 Min</div>
            <div className="bg-gray-200 px-3 py-1 rounded">05 Sec</div>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="text-6xl mb-4">{deal.image}</div>
              <h3 className="text-gray-800 font-medium mb-2">{deal.name}</h3>
              <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                {deal.discount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
