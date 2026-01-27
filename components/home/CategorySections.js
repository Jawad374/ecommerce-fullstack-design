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
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Home and Outdoor Section */}
        <div className="mb-12">
          <div className="grid grid-cols-12 gap-6">
            {/* Promo Banner */}
            <div className="col-span-3">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-6 h-full flex flex-col justify-between min-h-[300px]">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Home and outdoor</h3>
                  <button className="mt-4 px-4 py-2 bg-white text-gray-800 rounded-md hover:bg-gray-50 text-sm font-medium">
                    Source now
                  </button>
                </div>
                <div className="text-6xl mt-4">🪴</div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="col-span-9">
              <div className="grid grid-cols-4 gap-4">
                {homeOutdoor.map((item, index) => (
                  <div key={index} className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="text-4xl mb-3 text-center">{item.image}</div>
                    <h4 className="text-sm text-gray-700 mb-1">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Consumer Electronics Section */}
        <div>
          <div className="grid grid-cols-12 gap-6">
            {/* Promo Banner */}
            <div className="col-span-3">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-6 h-full flex flex-col justify-between min-h-[300px]">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Consumer electronics and gadgets</h3>
                  <button className="mt-4 px-4 py-2 bg-white text-gray-800 rounded-md hover:bg-gray-50 text-sm font-medium">
                    Source now
                  </button>
                </div>
                <div className="text-6xl mt-4">🎧</div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="col-span-9">
              <div className="grid grid-cols-4 gap-4">
                {electronics.map((item, index) => (
                  <div key={index} className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="text-4xl mb-3 text-center">{item.image}</div>
                    <h4 className="text-sm text-gray-700 mb-1">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.price}</p>
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
