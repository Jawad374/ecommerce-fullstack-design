export default function DealsSection() {
  const deals = [
    { name: 'Smart watches', discount: '-25%', image: '⌚' },
    { name: 'Laptops', discount: '-15%', image: '💻' },
    { name: 'GoPro cameras', discount: '-40%', image: '📷' },
    { name: 'Headphones', discount: '-25%', image: '🎧' },
    { name: 'Canon cameras', discount: '-25%', image: '📱' },
  ];

  return (
    <div className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-lg border overflow-hidden">
          <div className="grid grid-cols-12 items-stretch">
            {/* Left - Title & Countdown */}
            <div className="col-span-3 border-r p-6 flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-gray-800">Deals and offers</h3>
              <p className="text-sm text-gray-500 mb-4">Hygiene equipments</p>

              <div className="flex gap-3">
                <div className="bg-gray-800 text-white text-sm rounded px-3 py-2">04<br/><span className="text-xs text-gray-200">Days</span></div>
                <div className="bg-gray-800 text-white text-sm rounded px-3 py-2">13<br/><span className="text-xs text-gray-200">Hour</span></div>
                <div className="bg-gray-800 text-white text-sm rounded px-3 py-2">34<br/><span className="text-xs text-gray-200">Min</span></div>
                <div className="bg-gray-800 text-white text-sm rounded px-3 py-2">56<br/><span className="text-xs text-gray-200">Sec</span></div>
              </div>
            </div>

            {/* Right - 5 product columns */}
            <div className="col-span-9 p-4">
              <div className="grid grid-cols-5 gap-4 h-full items-stretch">
                {deals.map((deal, idx) => (
                  <div key={idx} className="bg-white rounded-lg border p-6 flex flex-col items-center justify-between">
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-6xl">{deal.image}</div>
                    </div>
                    <div className="mt-4 text-center">
                      <h4 className="text-sm text-gray-700 mb-2">{deal.name}</h4>
                      <div className="inline-block bg-pink-50 text-pink-600 px-3 py-1 rounded-full text-sm font-semibold">{deal.discount}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
