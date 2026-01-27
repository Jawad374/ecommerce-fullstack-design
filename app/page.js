import Header from '@/components/layout/Header';
import HeroSection from '@/components/home/HeroSection';
import DealsSection from '@/components/home/DealsSection';
import CategorySections from '@/components/home/CategorySections';
import SupplierRequestSection from '@/components/home/SupplierRequestSection';
import RecommendedSection from '@/components/home/RecommendedSection';
import Newsletter from '@/components/common/Newsletter';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <DealsSection />
        <CategorySections />
        <SupplierRequestSection />
        <RecommendedSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
