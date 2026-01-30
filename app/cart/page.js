'use client';

import { useCart } from '@/context/CartContext';
import Header from '@/components/layout/Header';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import CartInfoCards from '@/components/cart/CartInfoCards';
import SavedForLaterCart from '@/components/cart/SavedForLaterCart';
import PromoBanner from '@/components/common/PromoBanner';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

// 1. Import the new Mobile Cart component
import MobileCart from '@/components/cart/MobileCart'; 

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  const handleQuantityChange = (id, newQuantity) => {
    updateQuantity(id, newQuantity);
  };

  const handleSaveForLater = (id) => {
    console.log('Save for later:', id);
  };

  const handleRemoveAll = () => {
    clearCart();
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = 0.00; // Simplified
  const tax = subtotal * 0.1; // Simplified tax
  const total = subtotal - discount + tax;

  return (
    <>
      {/* 2. MOBILE VIEW
         Visible only on screens smaller than 'lg' (1024px)
      */}
      <div className="block lg:hidden">
        <MobileCart />
      </div>

      {/* 3. DESKTOP VIEW
         Visible only on screens 'lg' and up
      */}
      <div className="hidden lg:block min-h-screen bg-gray-50">
        <Header />
        
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Cart Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">My cart ({cartItems.length})</h1>
          </div>

          {/* Main Cart Content */}
          <div className="grid grid-cols-12 gap-6">
            {/* Left - Cart Items */}
            <div className="col-span-8">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onRemove={handleRemoveItem}
                    onQuantityChange={handleQuantityChange}
                    onSaveForLater={handleSaveForLater}
                  />
                ))}
                {cartItems.length === 0 && <p className="text-gray-500">Your cart is empty.</p>}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between mt-6">
                <Link href="/">
                  <button className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to shop
                  </button>
                </Link>
                <button
                  onClick={handleRemoveAll}
                  className="text-blue-500 hover:underline"
                >
                  Remove all
                </button>
              </div>
            </div>

            {/* Right - Cart Summary */}
            <div className="col-span-4">
              <CartSummary
                subtotal={subtotal}
                discount={discount}
                tax={tax}
                total={total}
              />
            </div>
          </div>

          {/* Info Cards */}
          <CartInfoCards />

          {/* Saved For Later */}
          <SavedForLaterCart />

          {/* Promo Banner */}
          <div className="mt-12">
            <PromoBanner />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}