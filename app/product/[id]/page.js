'use client';

import { useParams } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import Header from '@/components/layout/Header';
import Breadcrumb from '@/components/product/Breadcrumb';
import ProductImageGallery from '@/components/product-detail/ProductImageGallery';
import ProductInfo from '@/components/product-detail/ProductInfo';
import SupplierCard from '@/components/product-detail/SupplierCard';
import ProductTabs from '@/components/product-detail/ProductTabs';
import YouMayLike from '@/components/product-detail/YouMayLike';
import RelatedProducts from '@/components/product-detail/RelatedProducts';
import PromoBanner from '@/components/common/PromoBanner';
import Newsletter from '@/components/common/Newsletter';
import Footer from '@/components/layout/Footer';

// 1. Import the new component
import MobileProductDetail from '@/components/product-detail/MobileProductDetail'; 

export default function ProductDetailPage() {
  const { id } = useParams();
  const { products } = useCart();
  const product = products.find(p => p.id === parseInt(id));

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Clothings', href: '/clothings' },
    { label: "Men's wear", href: '/clothings/mens-wear' },
    { label: 'Summer clothing' }
  ];

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  return (
    <>
      {/* 2. MOBILE VIEW CONTAINER
        Visible only on screens smaller than 'lg' (1024px).
      */}
      <div className="block lg:hidden bg-gray-50">
        <MobileProductDetail product={product} />
        
        {/* Added Newsletter and Footer here for mobile */}
        <Newsletter />
        <Footer />
      </div>

      {/* 3. DESKTOP VIEW CONTAINER
        Visible only on screens 'lg' and up.
        This contains all your original code.
      */}
      <div className="hidden lg:block min-h-screen bg-gray-50">
        <Header />
        
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Breadcrumb items={breadcrumbItems} />
          
          {/* Main Product Section */}
          <div className="grid grid-cols-12 gap-6 mb-8">
            {/* Left - Product Images */}
            <div className="col-span-5">
              <ProductImageGallery product={product} />
            </div>

            {/* Middle - Product Info */}
            <div className="col-span-4">
              <ProductInfo product={product} />
            </div>

            {/* Right - Supplier Card & You May Like */}
            <div className="col-span-3 space-y-6">
              <SupplierCard product={product} />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-start">
            {/* Left Column: Product Tabs */}
            <div className="flex-3 w-full">
              <ProductTabs />
            </div>

            {/* Right Column: Sidebar */}
            <div className="flex-1 w-full lg:max-w-70">
              <YouMayLike />
            </div>
          </div>

          {/* Related Products */}
          <RelatedProducts />

          {/* Promo Banner */}
          <PromoBanner />
        </div>

        <Newsletter />
        <Footer />
      </div>
    </>
  );
}