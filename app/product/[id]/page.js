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

export default function ProductDetailPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Clothings', href: '/clothings' },
    { label: "Men's wear", href: '/clothings/mens-wear' },
    { label: 'Summer clothing' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Main Product Section */}
        <div className="grid grid-cols-12 gap-6 mb-8">
          {/* Left - Product Images */}
          <div className="col-span-5">
            <ProductImageGallery />
          </div>

          {/* Middle - Product Info */}
          <div className="col-span-4">
            <ProductInfo />
          </div>

          {/* Right - Supplier Card & You May Like */}
          <div className="col-span-3 space-y-6">
            <SupplierCard />
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
  );
}
