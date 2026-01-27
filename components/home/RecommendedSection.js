export default function RecommendedSection() {
  const products = [
    { name: 'T-shirts with multiple colors, for men', price: '$10.30', image: '👕' },
    { name: 'Jeans shorts for men blue color', price: '$10.30', image: '🧥' },
    { name: 'Brown winter coat medium size', price: '$12.50', image: '🧥' },
    { name: 'Jeans bag for travel for men', price: '$34.00', image: '💼' },
    { name: 'Leather wallet', price: '$99.00', image: '🎒' },
    { name: 'Canon camera black, 100x zoom', price: '$9.99', image: '📷' },
    { name: 'Headset for gaming with mic', price: '$8.99', image: '🎧' },
    { name: 'Smartwatch silver color modern', price: '$10.30', image: '⌚' },
    { name: 'Blue wallet for men leather material', price: '$10.30', image: '🎒' },
    { name: 'Jeans bag for travel for men', price: '$80.95', image: '☕' },
  ];

  const services = [
    {
      title: 'Source from Industry Hubs',
      image: '📦',
      color: 'from-amber-100 to-amber-50'
    },
    {
      title: 'Customize Your Products',
      image: '🎨',
      color: 'from-blue-100 to-blue-50'
    },
    {
      title: 'Fast, reliable shipping by ocean or air',
      image: '✈️',
      color: 'from-teal-100 to-teal-50'
    },
    {
      title: 'Product monitoring and inspection',
      image: '🔍',
      color: 'from-purple-100 to-purple-50'
    }
  ];

  const regions = [
     { name: 'Arabic Emirates', code: 'ae', sellers: 'shopname.ae' },
     { name: 'Australia', code: 'au', sellers: 'shopname.au' },
     { name: 'United States', code: 'us', sellers: 'shopname.us' },
     { name: 'Russia', code: 'ru', sellers: 'shopname.ru' },
     { name: 'Italy', code: 'it', sellers: 'shopname.it' },
     { name: 'Denmark', code: 'dk', sellers: 'shopname.dk' },
     { name: 'France', code: 'fr', sellers: 'shopname.fr' },
     { name: 'Arabic Emirates', code: 'ae', sellers: 'shopname.ae' },
     { name: 'China', code: 'cn', sellers: 'shopname.cn' },
     { name: 'Great Britain', code: 'gb', sellers: 'shopname.co.uk' },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Recommended Items */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended items</h2>
          <div className="grid grid-cols-5 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-100">
                <div className="relative bg-gray-50">
                  <div className="aspect-square flex items-center justify-center text-6xl">{product.image}</div>
                  <div className="absolute top-3 left-3 bg-white text-sm text-gray-800 px-2 py-1 rounded shadow-sm">{product.price}</div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-700 mb-1 line-clamp-2">{product.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Extra Services */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our extra services</h2>
          <div className="grid grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div key={index} className={`relative rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-48 bg-gradient-to-br ${service.color}`}>
                <div className="absolute inset-0 bg-[url('/images/service-${index}.jpg')] bg-cover bg-center opacity-20"></div>
                <div className="relative z-10 p-6 h-full flex flex-col">
                  <h3 className="text-base font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <div className="flex-1" />
                  <div className="flex items-center justify-between">
                    <div className="text-2xl text-gray-600">{service.image}</div>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
                      <span className="text-lg">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suppliers by Region */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Suppliers by region</h2>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
            {regions.map((region, index) => (
                <div key={index} className="flex items-center gap-3 min-w-[160px]">
                  <img
                    src={`https://flagcdn.com/w20/${region.code}.png`}
                    alt={`${region.name} flag`}
                    width={20}
                    height={14}
                    className="shrink-0 rounded-sm"
                  />
                  <div>
                    <div className="font-medium text-gray-800">{region.name}</div>
                    <div className="text-sm text-gray-500">{region.sellers}</div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
