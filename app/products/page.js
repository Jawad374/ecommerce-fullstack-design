'use client';

import Header from '@/components/layout/Header';
import Breadcrumb from '@/components/product/Breadcrumb';
import FilterSidebar from '@/components/product/FilterSidebar';
import ProductGrid from '@/components/product/ProductGrid';
import Pagination from '@/components/product/Pagination';
import Newsletter from '@/components/common/Newsletter';
import Footer from '@/components/layout/Footer';

export default function ProductsPage() {
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
        
        <div className="flex gap-6">
          <FilterSidebar />
          <div className="flex-1">
            <ProductGrid />
            <Pagination />
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}
