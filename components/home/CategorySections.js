'use client';
import Link from 'next/link';

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

  const renderSection = (title, items, bannerBg, bannerGradient) => (
    <div className="md:rounded-md border-y md:border border-gray-200 overflow-hidden bg-white">
      {/* Mobile Title (Only shown on mobile) */}
      <div className="md:hidden px-4 pt-4">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Promo Banner (Hidden on Mobile) */}
        <div
          className="hidden md:block w-60 shrink-0 relative overflow-hidden"
          style={{
            backgroundImage: `url(${bannerBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className={`absolute inset-0 bg-linear-to-br ${bannerGradient}`}></div>
          <div className="relative p-5 h-full flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800 leading-tight">
              {title.split(' ').map((word, i) => (
                <span key={i}>{word}<br /></span>
              ))}
            </h3>
            <Link href="/products">
              <button className="mt-4 px-4 py-2 bg-white text-gray-800 rounded-md text-sm font-medium w-fit shadow-sm hover:shadow cursor-pointer">
                Source now
              </button>
            </Link>
          </div>
        </div>

        {/* Products Grid (Desktop) / Horizontal Scroller (Mobile) */}
        <div className="flex-1 flex md:grid md:grid-cols-4 overflow-x-auto no-scrollbar divide-x md:divide-x-0 divide-gray-200">
          {items.map((item, index) => (
            <Link
              href="/products"
              key={index}
              className={`p-3 md:p-3 flex flex-col md:flex-row items-center md:justify-between bg-white min-w-35 md:min-w-0
                ${index % 4 !== 0 ? 'md:border-l md:border-gray-200' : ''}
                ${index >= 4 ? 'md:border-t md:border-gray-200' : ''}
                hover:shadow-inner transition-shadow`}
            >
              {/* Product Info (Moves below image on mobile) */}
              <div className="order-2 md:order-1 flex-1 min-w-0 md:w-auto mt-2 md:mt-0 w-full">
                <div className="text-sm md:text-base text-gray-800 md:truncate">{item.name}</div>
                <div className="text-[11px] md:text-sm text-gray-400 mt-1">{item.price} {item.amount}</div>
              </div>

              {/* Product Image */}
              <div className="order-1 md:order-2 w-20 h-20 md:w-20 md:h-20 flex items-center justify-center shrink-0">
                <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Source Now Link (Shown only on mobile) */}
      <div className="md:hidden border-t border-gray-100 p-4">
        <Link href="/products" className="text-blue-600 font-medium flex items-center gap-2 text-sm">
          Source now
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="bg-white py-3 md:py-5">
      <div className="max-w-7xl mx-auto px-0 md:px-4 space-y-4">
        {renderSection(
          "Home and outdoor", 
          homeOutdoor, 
          "/Image/others/image92.png", 
          "from-amber-50/95 via-amber-50/70 to-transparent"
        )}
        {renderSection(
          "Consumer electronics and gadgets", 
          electronics, 
          "/Image/others/image92.png", 
          "from-sky-100/95 via-sky-50/70 to-transparent"
        )}
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}