export default function CategorySections() {
  const homeOutdoor = [
    { name: 'Soft chairs', price: 'From', amount: 'USD 19', image: '/Image/interior/1.jpg' },
    { name: 'Sofa & chair', price: 'From', amount: 'USD 19', image: '/Image/interior/2.jpg' },
    { name: 'Kitchen dishes', price: 'From', amount: 'USD 19', image: '/Image/interior/3.jpg' },
    { name: 'Smart watches', price: 'From', amount: 'USD 19', image: '/Image/tech/6.jpg' },
    { name: 'Kitchen mixer', price: 'From', amount: 'USD 100', image: '/Image/interior/4.jpg' },
    { name: 'Blenders', price: 'From', amount: 'USD 39', image: '/Image/interior/5.jpg' },
    { name: 'Home appliance', price: 'From', amount: 'USD 19', image: '/Image/interior/6.jpg' },
    { name: 'Coffee maker', price: 'From', amount: 'USD 10', image: '/Image/interior/7.jpg' },
  ];

  const electronics = [
    { name: 'Smart watches', price: 'From', amount: 'USD 19', image: '/Image/tech/1.jpg' },
    { name: 'Cameras', price: 'From', amount: 'USD 89', image: '/Image/tech/2.jpg' },
    { name: 'Headphones', price: 'From', amount: 'USD 10', image: '/Image/tech/3.jpg' },
    { name: 'Smart watches', price: 'From', amount: 'USD 90', image: '/Image/tech/4.jpg' },
    { name: 'Gaming set', price: 'From', amount: 'USD 35', image: '/Image/tech/5.jpg' },
    { name: 'Laptops & PC', price: 'From', amount: 'USD 340', image: '/Image/tech/6.jpg' },
    { name: 'Smartphones', price: 'From', amount: 'USD 19', image: '/Image/tech/7.jpg' },
    { name: 'Electric kattle', price: 'From', amount: 'USD 240', image: '/Image/tech/8.jpg' },
  ];

  return (
    <div className="bg-white py-5">
      <div className="max-w-7xl mx-auto px-4 space-y-4">
        {/* Home and Outdoor Section */}
        <div className="rounded-md border border-gray-200 overflow-hidden flex">
          {/* Promo Banner with background image */}
          <div
            className="w-[240px] flex-shrink-0 relative overflow-hidden"
            style={{
              backgroundImage: 'url(/Image/others/image92.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center right',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/95 via-amber-50/70 to-transparent"></div>
            <div className="relative p-5 h-full flex flex-col">
              <h3 className="text-xl font-semibold text-gray-800 leading-tight">
                Home and<br />outdoor
              </h3>
              <button className="mt-4 px-4 py-2 bg-white text-gray-800 rounded-md text-sm font-medium w-fit shadow-sm hover:shadow">
                Source now
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1 grid grid-cols-4 border-l border-gray-200">
            {homeOutdoor.map((item, index) => (
              <div
                key={index}
                className={`p-3 flex items-center justify-between bg-white
                  ${index % 4 !== 0 ? 'border-l border-gray-200' : ''}
                  ${index >= 4 ? 'border-t border-gray-200' : ''}`}
              >
                <div className="flex-1 min-w-0">
                  <div className="text-base text-gray-800">{item.name}</div>
                  <div className="text-sm text-gray-400 mt-1">{item.price}</div>
                  <div className="text-sm text-gray-400">{item.amount}</div>
                </div>
                <div className="w-20 h-20 flex items-center justify-center flex-shrink-0 ml-2">
                  <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Consumer Electronics Section */}
        <div className="rounded-md border border-gray-200 overflow-hidden flex">
          {/* Promo Banner with background image */}
          <div
            className="w-[240px] flex-shrink-0 relative overflow-hidden"
            style={{
              backgroundImage: 'url(/Image/others/image92.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-100/95 via-sky-50/70 to-transparent"></div>
            <div className="relative p-5 h-full flex flex-col">
              <h3 className="text-xl font-semibold text-gray-800 leading-tight">
                Consumer<br />electronics and<br />gadgets
              </h3>
              <button className="mt-4 px-4 py-2 bg-white text-gray-800 rounded-md text-sm font-medium w-fit shadow-sm hover:shadow">
                Source now
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1 grid grid-cols-4 border-l border-gray-200">
            {electronics.map((item, index) => (
              <div
                key={index}
                className={`p-3 flex items-center justify-between bg-white
                  ${index % 4 !== 0 ? 'border-l border-gray-200' : ''}
                  ${index >= 4 ? 'border-t border-gray-200' : ''}`}
              >
                <div className="flex-1 min-w-0">
                  <div className="text-base text-gray-800">{item.name}</div>
                  <div className="text-sm text-gray-400 mt-1">{item.price}</div>
                  <div className="text-sm text-gray-400">{item.amount}</div>
                </div>
                <div className="w-20 h-20 flex items-center justify-center flex-shrink-0 ml-2">
                  <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
