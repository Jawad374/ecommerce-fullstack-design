export default function YouMayLike() {
  const products = [
    { name: 'Men Blazers Sets Elegant Formal', price: '$7.00 - $99.50', image: '/path-to-blazer.png' },
    { name: 'Men Shirt Sleeve Polo Contrast', price: '$7.00 - $99.50', image: '/path-to-polo.png' },
    { name: 'Apple Watch Series Space Gray', price: '$7.00 - $99.50', image: '/path-to-watch.png' },
    { name: 'Basketball Crew Socks Long Stuff', price: '$7.00 - $99.50', image: '/path-to-socks.png' },
    { name: "New Summer Men's castrol T-Shirts", price: '$7.00 - $99.50', image: '/path-to-tshirt.png' }
  ];

  return (
    <div className="bg-white border border-[#e3e8ee] rounded-md p-4 max-w-70">
      <h3 className="text-[16px] font-semibold text-[#1c1c1c] mb-4">You may like</h3>
      <div className="space-y-4">
        {products.map((product, index) => (
          <div key={index} className="flex gap-3 group cursor-pointer">
            {/* Image Container with specific border color */}
            <div className="w-20 h-20 border border-[#e3e8ee] rounded-md flex items-center justify-center p-2 shrink-0">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain mix-blend-multiply" 
              />
            </div>
            
            <div className="flex flex-col justify-center">
              {/* Product Title: specific color and line height */}
              <h4 className="text-[14px] text-[#505050] leading-5 mb-1 line-clamp-2">
                {product.name}
              </h4>
              {/* Price: specific muted blue-gray color */}
              <p className="text-[14px] text-[#8b96a5]">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}