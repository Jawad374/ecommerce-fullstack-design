export default function CategorySections() {
  const homeOutdoor = [
    { name: 'Soft chairs', price: 'USD 19', image: '🪑' },
    { name: 'Sofa & chair', price: 'USD 19', image: '🛋️' },
    { name: 'Kitchen dishes', price: 'USD 39', image: '🍽️' },
    { name: 'Smart watches', price: 'From USD 19', image: '⌚' },
    { name: 'Blenders', price: 'USD 39', image: '⚙️' },
    { name: 'Home appliance', price: 'USD 19', image: '📱' },
    { name: 'Coffee maker', price: 'From USD 10', image: '☕' },
  ];

  const electronics = [
    { name: 'Smart watches', price: 'USD 19', image: '⌚' },
    { name: 'Cameras', price: 'USD 89', image: '📷' },
    { name: 'Headphones', price: 'USD 10', image: '🎧' },
    { name: 'Smart watches', price: 'USD 90', image: '⌚' },
    { name: 'Gaming set', price: 'USD 35', image: '🎮' },
    { name: 'Laptops & PC', price: 'USD 340', image: '💻' },
    { name: 'Smartphones', price: 'USD 19', image: '📱' },
    { name: 'Electric kettle', price: 'USD 240', image: '🔌' },
  ];

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Home and Outdoor Section */}
        <div className="mb-8">
          <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white">
            <div className="grid grid-cols-12 items-stretch">
              {/* Promo Banner */}
              <div className="col-span-3 p-0">
                <div className="h-full rounded-l-lg bg-gradient-to-br from-amber-50 to-amber-100 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Home and outdoor</h3>
                    <button className="mt-4 px-4 py-2 bg-white text-gray-800 rounded-md hover:bg-gray-50 text-sm font-medium">
                      Source now
                    </button>
                  </div>
                  <div className="text-6xl mt-4 text-right">🪴</div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="col-span-9 p-0">
                <div className="grid grid-cols-5 divide-x divide-y divide-gray-100">
                  {homeOutdoor.map((item, index) => (
                    <div key={index} className="p-4 flex items-center justify-between bg-white">
                      <div className="flex-1 pr-3">
                        <div className="text-sm text-gray-700 mb-1">{item.name}</div>
                        <div className="text-xs text-gray-500">{item.price}</div>
                      </div>
                      <div className="w-16 h-12 flex items-center justify-center text-3xl">{item.image}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Consumer Electronics Section */}
        <div>
          <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white">
            <div className="grid grid-cols-12 items-stretch">
              {/* Promo Banner */}
              <div className="col-span-3 p-0">
                <div className="h-full rounded-l-lg bg-gradient-to-br from-pink-50 to-pink-100 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Consumer electronics and gadgets</h3>
                    <button className="mt-4 px-4 py-2 bg-white text-gray-800 rounded-md hover:bg-gray-50 text-sm font-medium">
                      Source now
                    </button>
                  </div>
                  <div className="text-6xl mt-4 text-right">🎧</div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="col-span-9 p-0">
                <div className="grid grid-cols-5 divide-x divide-y divide-gray-100">
                  {electronics.map((item, index) => (
                    <div key={index} className="p-4 flex items-center justify-between bg-white">
                      <div className="flex-1 pr-3">
                        <div className="text-sm text-gray-700 mb-1">{item.name}</div>
                        <div className="text-xs text-gray-500">{item.price}</div>
                      </div>
                      <div className="w-16 h-12 flex items-center justify-center text-3xl">{item.image}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
