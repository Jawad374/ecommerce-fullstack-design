import React from 'react';
import { useCart } from '@/context/CartContext';
import { ArrowLeft, ShoppingCart, User, Star, Heart, ChevronRight, ShieldCheck, Globe, Truck } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function MobileProductDetail({ product }) {
  const { addToCart, cartItems } = useCart();
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  if (!product) return null;

  // Handle images logic similar to Desktop version
  let images = [];
  if (product.images && product.images.length > 0) {
    images = product.images;
  } else if (product.image) {
    images = [product.image];
  } else {
    images = ['https://placehold.co/500x500?text=No+Image'];
  }

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-8 font-sans">
      
      {/* --- Header --- */}
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center px-4 h-14 border-b border-gray-100">
        <button className="-ml-2 p-2" onClick={() => router.back()}>
          <ArrowLeft className="w-6 h-6 text-gray-800" />
        </button>
        <div className="flex gap-2">
          <Link href="/cart" className="p-2 relative">
            <ShoppingCart className="w-6 h-6 text-gray-800" />
            {cartItems.length > 0 && (
                <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                {cartItems.length}
                </span>
            )}
          </Link>
          <Link href="/login" className="p-2 -mr-2">
            <User className="w-6 h-6 text-gray-800" />
          </Link>
        </div>
      </header>

      {/* --- Product Image Area --- */}
      <div className="bg-white border-b border-gray-200 relative">
        <div className="aspect-square relative w-full max-h-95 flex items-center justify-center bg-white">
            {/* Main Image */}
            <div className="w-3/4 h-3/4 relative">
              <img 
                src={images[currentImageIndex]} 
                alt={product.name} 
                className="w-full h-full object-contain mix-blend-multiply transition-opacity duration-300"
              />
            </div>
            
            {/* Image Counter (Optional but helpful) */}
            {images.length > 1 && (
               <div className="absolute bottom-6 left-6 bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-500">
                  {currentImageIndex + 1} / {images.length}
               </div>
            )}

            {/* Floating Carousel Controls */}
            {images.length > 1 && (
            <div className="absolute bottom-6 right-6 flex gap-1">
               <div className="bg-gray-400/30 backdrop-blur-sm rounded-full p-1.5 flex gap-2 px-3">
                  <button onClick={handlePrev} className="active:scale-90 transition-transform">
                      <ArrowLeft className="w-4 h-4 text-gray-700" />
                  </button>
                  <div className="w-px h-4 bg-gray-400/50"></div>
                  <button onClick={handleNext} className="active:scale-90 transition-transform">
                      <ChevronRight className="w-4 h-4 text-gray-700" />
                  </button>
               </div>
            </div>
            )}
        </div>
      </div>

      {/* --- Main Info Section --- */}
      <div className="bg-white p-4 mb-3">
        {/* Rating Row */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex text-orange-400">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 text-gray-300 fill-gray-200" />
          </div>
          <span className="text-orange-400 font-medium ml-1 text-sm">{product.rating || 4.5}</span>
          <span className="text-gray-300 mx-2 text-xs">•</span>
          <span className="text-gray-400 text-sm">32 reviews</span>
          <span className="text-gray-300 mx-2 text-xs">•</span>
          <span className="text-gray-400 text-sm">154 sold</span>
        </div>

        {/* Title */}
        <h1 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
          {product.name}
        </h1>
        
        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl font-bold text-red-600">${product.price}</span>
          <span className="text-sm text-gray-400 font-normal">(50-100 pcs)</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mb-6 h-11">
          <button 
            onClick={() => addToCart(product)}
            className="flex-1 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium rounded-md shadow-sm text-sm transition-colors"
          >
            Add to cart
          </button>
          <button className="aspect-square border border-gray-200 rounded-md bg-white flex items-center justify-center">
            <Heart className="w-6 h-6 text-blue-500" />
          </button>
        </div>

        {/* Specs Table - Dynamic */}
        <div className="space-y-3 text-sm text-gray-600 font-normal">
          <div className="grid grid-cols-[100px_1fr]">
            <span className="text-gray-400">Condition</span>
            <span className="text-gray-700">Brand new</span>
          </div>
          <div className="grid grid-cols-[100px_1fr]">
            <span className="text-gray-400">Material</span>
            <span className="text-gray-700">{product.material || 'N/A'}</span>
          </div>
          <div className="grid grid-cols-[100px_1fr]">
            <span className="text-gray-400">Category</span>
            <span className="text-gray-700">{product.category || 'General'}</span>
          </div>
          <div className="grid grid-cols-[100px_1fr]">
            <span className="text-gray-400">Brand</span>
            <span className="text-gray-700">{product.brand || 'Generic'}</span>
          </div>
        </div>

        {/* Description Snippet */}
        <div className="mt-4 text-sm text-gray-500 leading-relaxed">
          {product.description?.length > 150 ? (
             <>
               {product.description.slice(0, 150)}...
               <button className="text-blue-600 font-medium ml-1">Read more</button>
             </>
          ) : (
            product.description
          )}
        </div>
      </div>

      {/* --- Supplier Card --- */}
      <div className="bg-white p-4 mb-3 border-y border-gray-200">
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-3">
            {/* Avatar R */}
            <div className="w-11 h-11 bg-teal-100/80 text-teal-700 font-bold rounded flex items-center justify-center text-xl shrink-0">
              {product.brand ? product.brand.charAt(0).toUpperCase() : 'S'}
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-gray-400 text-xs mb-0.5">Supplier</span>
              <span className="text-gray-900 font-medium text-base">{product.brand || 'Verified Seller'}</span>
            </div>
          </div>
          <ChevronRight className="text-gray-400 w-5 h-5 mt-2" />
        </div>
        
        {/* Supplier Badges */}
        <div className="flex gap-5 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            {/* German Flag CSS */}
            <div className="flex flex-col w-5 h-3.5 shadow-sm rounded-[1px] overflow-hidden">
                <div className="h-1/3 bg-[#000000] w-full"></div>
                <div className="h-1/3 bg-[#FF0000] w-full"></div>
                <div className="h-1/3 bg-[#FFCC00] w-full"></div>
            </div>
            <span className="text-gray-600">Germany</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <ShieldCheck className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">Verified</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Globe className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">Shipping</span>
          </div>
        </div>
      </div>

      {/* --- Similar Products --- */}
      <div className="pt-2 px-4">
        <h3 className="font-bold text-gray-900 mb-4 text-base">Similar products</h3>
        
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
            
             <MobileSimilarProducts currentId={product.id} category={product.category} />

        </div>
      </div>
    </div>
  );
}

// Subcomponent for similar products to keep main clean
function MobileSimilarProducts({ currentId, category }) {
  const { products } = useCart();
  // Filter products by category and exclude current
  const similar = products
    .filter(p => p.category === category && p.id !== currentId)
    .slice(0, 5);

  if (similar.length === 0) return <div className="text-sm text-gray-400">No similar products found</div>;

  return similar.map(item => (
     <Link href={`/product/${item.id}`} key={item.id} className="min-w-36.25 max-w-36.25 bg-white rounded-lg border border-gray-200 p-2.5 flex flex-col">
        <div className="h-28 bg-gray-100 rounded-md mb-2 overflow-hidden relative">
            <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply opacity-80" />
        </div>
        <div className="text-sm font-bold text-gray-900 mb-1">${item.price}</div>
        <div className="text-xs text-gray-500 leading-tight line-clamp-2">
            {item.name}
        </div>
    </Link>
  ));
}