export default function RelatedProducts() {
  const products = [
    { name: 'Xiaomi Redmi 8 Original', price: '$32.00-$40.00', image: '/path-to-wallet.png' },
    { name: 'Xiaomi Redmi 8 Original', price: '$32.00-$40.00', image: '/path-to-watch.png' },
    { name: 'Xiaomi Redmi 8 Original', price: '$32.00-$40.00', image: '/path-to-headphone.png' },
    { name: 'Xiaomi Redmi 8 Original', price: '$32.00-$40.00', image: '/path-to-shorts.png' },
    { name: 'Xiaomi Redmi 8 Original', price: '$32.00-$40.00', image: '/path-to-kettle.png' },
    { name: 'Xiaomi Redmi 8 Original', price: '$32.00-$40.00', image: '/path-to-organizer.png' }
  ];

  return (
    <div className="mt-12 w-full">
      <h2 className="text-[20px] font-semibold text-[#1c1c1c] mb-5">Related products</h2>
      
      {/* 6-column grid for large screens, scrolling on mobile */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col group cursor-pointer">
            {/* Image Container with specific light gray background */}
            <div className="aspect-square bg-[#eeeeee] rounded-md flex items-center justify-center p-4 mb-3 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            <div className="flex flex-col">
              {/* Product Title: specific color and line height */}
              <h3 className="text-[16px] text-[#505050] leading-5.5 mb-1">
                {product.name}
              </h3>
              {/* Price: specific muted blue-gray color */}
              <p className="text-[16px] text-[#8b96a5]">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}