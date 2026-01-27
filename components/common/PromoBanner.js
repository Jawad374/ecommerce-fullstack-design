export default function PromoBanner() {
  return (
    <div className="relative overflow-hidden bg-[#0D6EFD] rounded-md px-8 py-7 flex flex-col md:flex-row items-center justify-between min-h-30 mt-6">
      
      {/* The Diagonal Geometric Background (Left-to-Right Slant) */}
      <div 
        className="absolute right-0 top-0 h-full w-[45%] bg-[#0067FF]" 
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 25% 100%)' }}
      ></div>

      {/* Text Content */}
      <div className="relative z-10 text-white text-center md:text-left">
        <h3 className="text-[28px] font-bold tracking-tight leading-tight">
          Super discount on more than 100 USD
        </h3>
        <p className="text-[16px] opacity-80 mt-1 font-normal">
          Have you ever finally just write dummy info
        </p>
      </div>

      {/* Action Button */}
      <div className="relative z-10 mt-5 md:mt-0">
        <button className="px-6 py-2.5 bg-[#FF9017] text-white rounded-md hover:bg-[#F38300] transition-all font-semibold text-[16px] shadow-md active:scale-95">
          Shop now
        </button>
      </div>
    </div>
  );
}