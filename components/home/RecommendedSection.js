export default function RecommendedSection() {
  const products = [
    { name: 'T-shirts with multiple colors, for men', price: '$10.30', image: '/Image/cloth/1.jpg' },
    { name: 'Jeans shorts for men blue color', price: '$10.30', image: '/Image/cloth/2.jpg' },
    { name: 'Brown winter coat medium size', price: '$12.50', image: '/Image/cloth/3.jpg' },
    { name: 'Jeans bag for travel for men', price: '$34.00', image: '/Image/cloth/5.jpg' },
    { name: 'Leather wallet', price: '$9.00', image: '/Image/cloth/6.jpg' },
    { name: 'Canon camera black, 100x zoom', price: '$999.99', image: '/Image/tech/6.jpg' },
    { name: 'Headset for gaming with mic', price: '$80.99', image: '/Image/tech/5.jpg' },
    { name: 'Smartwatch silver color modern', price: '$10.30', image: '/Image/tech/8.jpg' },
    { name: 'SmartPhone From Apple', price: '$999.30', image: '/Image/tech/1.jpg' },
    { name: 'Laptop for office work ', price: '$500.95', image: '/Image/tech/7.jpg' },
  ];

  const services = [
    {
      title: 'Source from Industry Hubs',
      image: '/Image/others/step1.png',
      icon: '🔎',
      iconImage: '/icons/1.png',
      color: 'from-amber-100 to-amber-50'
    },
    {
      title: 'Customize Your Products',
      image: '/Image/others/step2.png',
      icon: '🎨',
      iconImage: '/icons/2.png',
      color: 'from-blue-100 to-blue-50'
    },
    {
      title: 'Fast, reliable shipping by ocean or air',
      image: '/Image/others/step3.png',
      icon: '✈️',
      iconImage: '/icons/3.png',
      color: 'from-teal-100 to-teal-50'
    },
    {
      title: 'Product monitoring and inspection',
      image: '/Image/others/step4.png',
      icon: '🔍',
      iconImage: '/icons/4.png',
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
                  <div className="aspect-square flex items-center justify-center">
                    <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" style={{ filter: 'none', opacity: 1 }} />
                  </div>
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

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative cursor-pointer overflow-visible rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Top image area */}
                <div className="relative h-32 w-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full rounded-t-lg object-cover"
                  />

                  {/* Floating Icon - Centered on the boundary */}
                  <div className="absolute -bottom-6 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-white bg-blue-100">
                    <img
                      src={service.iconImage}
                      alt="icon"
                      className="h-5 w-5 object-contain opacity-80"
                    />
                  </div>
                </div>

                {/* Bottom content */}
                <div className="p-4 pt-8">
                  <h3 className="text-base font-semibold leading-snug text-gray-900">
                    {service.title}
                  </h3>
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
                    src={`/Image/flags/Property 1=${region.code.toUpperCase()}.png`}
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
