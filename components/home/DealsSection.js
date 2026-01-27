'use client';

export default function DealsSection() {
  const deals = [
    { name: 'Smart watches', discount: '-25%', image: '/Image/tech/1.jpg' },
    { name: 'Laptops', discount: '-15%', image: '/Image/tech/7.jpg' },
    { name: 'GoPro cameras', discount: '-40%', image: '/Image/tech/6.jpg' },
    { name: 'Headphones', discount: '-25%', image: '/Image/tech/5.jpg' },
    { name: 'Canon camreras', discount: '-25%', image: '/Image/tech/6.jpg' },
  ];

  return (
    <div className="bg-gray-100 py-3 md:pt-4">
      <div className="max-w-7xl mx-auto px-0 md:px-4">
        {/* Container: Flex-col on mobile, flex-row (h-[240px]) on desktop */}
        <div className="bg-white md:rounded-md border-y md:border border-gray-200 overflow-hidden flex flex-col md:flex-row md:h-60">
          
          {/* --- HEADER SECTION --- */}
          {/* Desktop Sidebar: Fixed 240px | Mobile: Full width with border-b */}
          <div className="w-full md:w-60 shrink-0 border-b md:border-b-0 md:border-r border-gray-200 p-4 md:p-5 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">Deals and offers</h3>
              <p className="text-xs md:text-sm text-gray-400 font-normal">Electronic equipments</p>
            </div>

            {/* Countdown Timers */}
            <div className="flex gap-1.5 md:mt-4">
              {[
                { val: '13', label: 'Hour' },
                { val: '34', label: 'Min' },
                { val: '56', label: 'Sec' }
              ].map((time, i) => (
                <div key={i} className="bg-gray-100 md:bg-[#606060] text-center rounded px-1 w-10 md:w-11 py-1.5 md:py-2">
                  <span className="block text-sm md:text-base font-bold text-gray-500 md:text-white leading-none">{time.val}</span>
                  <span className="block text-[9px] md:text-[10px] text-gray-400 md:text-gray-200 mt-1">{time.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* --- PRODUCTS SECTION --- */}
          {/* Desktop: Grid-like flex | Mobile: Horizontal Scroll (no-scrollbar) */}
          <div className="flex-1 flex overflow-x-auto no-scrollbar divide-x divide-gray-200">
            {deals.map((deal, idx) => (
              <div 
                key={idx} 
                className="min-w-35 md:min-w-0 md:flex-1 p-4 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer text-center"
              >
                <div className="h-24 md:h-28 w-full flex items-center justify-center mb-3">
                  <img 
                    src={deal.image} 
                    alt={deal.name} 
                    className="max-h-full max-w-full object-contain mix-blend-multiply" 
                  />
                </div>
                <h4 className="text-xs md:text-sm text-gray-700 font-normal mb-2 leading-tight px-1">
                  {deal.name}
                </h4>
                <span className="bg-[#FFE3E3] text-[#EB001B] px-3 py-1 rounded-full text-[10px] md:text-xs font-bold">
                  {deal.discount}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Reusing the scrollbar hide utility */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}