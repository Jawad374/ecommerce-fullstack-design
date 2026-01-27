export default function DealsSection() {
  const deals = [
    { name: 'Smart watches', discount: '-25%', image: '/Image/tech/1.jpg' },
    { name: 'Laptops', discount: '-15%', image: '/Image/tech/7.jpg' },
    { name: 'GoPro cameras', discount: '-40%', image: '/Image/tech/6.jpg' },
    { name: 'Headphones', discount: '-25%', image: '/Image/tech/5.jpg' },
    { name: 'Canon camreras', discount: '-25%', image: '/Image/tech/6.jpg' },
  ];

  return (
    <div className="bg-gray-100 pt-4">
      <div className="max-w-7xl mx-auto px-4">
        {/* Added h-[240px] to match the visual height of category banners */}
        <div className="bg-white rounded-md border border-gray-200 overflow-hidden flex h-[240px]">
          
          {/* Left Sidebar: Fixed at 240px to align with section below */}
          <div className="w-[240px] flex-shrink-0 border-r border-gray-200 p-5 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 leading-tight">Deals and offers</h3>
            <p className="text-sm text-gray-400 mb-4 font-normal">Hygiene equipments</p>

            <div className="flex gap-1.5">
              {[
                { val: '04', label: 'Days' },
                { val: '13', label: 'Hour' },
                { val: '34', label: 'Min' },
                { val: '56', label: 'Sec' }
              ].map((time, i) => (
                <div key={i} className="bg-[#606060] text-center rounded px-1 w-11 py-2">
                  <span className="block text-base font-bold text-white leading-none">{time.val}</span>
                  <span className="block text-[10px] text-gray-200 mt-1">{time.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section: Flex-1 ensures consistent alignment with product grids below */}
          <div className="flex-1 flex divide-x divide-gray-200">
            {deals.map((deal, idx) => (
              <div key={idx} className="flex-1 p-4 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer text-center">
                <div className="h-28 w-full flex items-center justify-center mb-3">
                  <img 
                    src={deal.image} 
                    alt={deal.name} 
                    className="max-h-full max-w-full object-contain mix-blend-multiply" 
                  />
                </div>
                <h4 className="text-sm text-gray-700 font-normal mb-2 leading-tight px-1">
                  {deal.name}
                </h4>
                <span className="bg-[#FFE3E3] text-[#EB001B] px-3 py-1 rounded-full text-xs font-bold">
                  {deal.discount}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}