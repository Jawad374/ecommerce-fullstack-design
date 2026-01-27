'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Breadcrumb from '@/components/product/Breadcrumb';
import FilterSidebar from '@/components/product/FilterSidebar';
import ProductGrid from '@/components/product/ProductGrid';
import Pagination from '@/components/product/Pagination';
import Newsletter from '@/components/common/Newsletter';
import Footer from '@/components/layout/Footer';
import MobileProductView from '@/components/product/MobileProductView'; // New Component

// Simple hook to detect mobile screen size
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return isMobile;
}

export default function ProductsPage() {
  const isMobile = useIsMobile();

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Clothings', href: '/clothings' },
    { label: "Men's wear", href: '/clothings/mens-wear' },
    { label: 'Summer clothing' }
  ];

  // Render Mobile View
  if (isMobile) {
    return <MobileProductView />;
  }

  // Render Desktop View (Your original code)
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