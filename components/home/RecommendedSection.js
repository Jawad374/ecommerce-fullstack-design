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
    { name: 'Arabic Emirates', flag: '🇦🇪', sellers: 'shopname.ae' },
    { name: 'Australia', flag: '🇦🇺', sellers: 'shopname.au' },
    { name: 'United States', flag: '🇺🇸', sellers: 'shopname.us' },
    { name: 'Russia', flag: '🇷🇺', sellers: 'shopname.ru' },
    { name: 'Italy', flag: '🇮🇹', sellers: 'shopname.it' },
    { name: 'Denmark', flag: '🇩🇰', sellers: 'shopname.dk' },
    { name: 'France', flag: '🇫🇷', sellers: 'shopname.fr' },
    { name: 'Arabic Emirates', flag: '🇦🇪', sellers: 'shopname.ae' },
    { name: 'China', flag: '🇨🇳', sellers: 'shopname.cn' },
    { name: 'Great Britain', flag: '🇬🇧', sellers: 'shopname.co.uk' },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Recommended Items */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended items</h2>
          <div className="grid grid-cols-5 gap-4">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-square bg-gray-100 flex items-center justify-center text-6xl">
                  {product.image}
                </div>
                <div className="p-4">
                  <p className="text-lg font-bold text-gray-800 mb-1">{product.price}</p>
                  <p className="text-sm text-gray-600 line-clamp-2">{product.name}</p>
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
              <div key={index} className={`bg-gradient-to-br ${service.color} rounded-lg p-6 relative overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-48`}>
                <h3 className="text-base font-semibold text-gray-800 mb-4 relative z-10">
                  {service.title}
                </h3>
                <div className="absolute bottom-4 right-4 text-6xl opacity-50">
                  {service.image}
                </div>
                <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100">
                  <span className="text-xl">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Suppliers by Region */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Suppliers by region</h2>
          <div className="grid grid-cols-5 gap-4">
            {regions.map((region, index) => (
              <div key={index} className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{region.flag}</span>
                  <span className="font-medium text-gray-800">{region.name}</span>
                </div>
                <p className="text-sm text-gray-500 underline">{region.sellers}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
