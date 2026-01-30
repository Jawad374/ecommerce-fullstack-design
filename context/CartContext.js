'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 10000,
    categories: [],
    brands: [],
    features: []
  });

  // Mock Data
  const products = [
    { id: 1, name: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, oldPrice: 1128.00, rating: 7.5, image: 'https://placehold.co/200x200?text=Product+1', category: 'Electronics', brand: 'Samsung', features: ['Metallic'] },
    { id: 2, name: 'Canon EOS 80D DSLR Camera', price: 78.99, oldPrice: 1128.00, rating: 5.9, image: 'https://placehold.co/200x200?text=Product+2', category: 'Mobile accessory', brand: 'Apple', features: ['Plastic cover'] },
    { id: 3, name: 'Men\'s Denim Jacket', price: 49.50, oldPrice: 80.00, rating: 7.5, image: 'https://placehold.co/200x200?text=Product+3', category: 'Clothings', brand: 'Huawei', features: ['Metallic'] },
    { id: 4, name: 'Brown Leather Bag', price: 29.50, oldPrice: 50.00, rating: 7.5, image: 'https://placehold.co/200x200?text=Product+4', category: 'Mobile accessory', brand: 'Apple', features: ['8GB Ram'] },
    { id: 5, name: 'Apple Watch Series 4', price: 399.50, oldPrice: 450.00, rating: 7.5, image: 'https://placehold.co/200x200?text=Product+5', category: 'Electronics', brand: 'Apple', features: ['Super power'] },
    { id: 6, name: 'Gaming Headset', price: 59.50, oldPrice: 120.00, rating: 7.5, image: 'https://placehold.co/200x200?text=Product+6', category: 'Modern tech', brand: 'Lenovo', features: ['Large Memory'] },
    { id: 7, name: 'Headphones', price: 199.50, oldPrice: 500.00, rating: 7.5, image: 'https://placehold.co/200x200?text=Product+7', category: 'Modern tech', brand: 'Lenovo', features: ['Large Memory'] },
    { id: 8, name: 'Laptop', price: 1199.50, oldPrice: 1500.00, rating: 7.5, image: 'https://placehold.co/200x200?text=Product+8', category: 'Modern tech', brand: 'Lenovo', features: ['Large Memory'] },
    { id: 9, name: 'Smartphone', price: 899.50, oldPrice: 1100.00, rating: 7.5, image: 'https://placehold.co/200x200?text=Product+9', category: 'Modern tech', brand: 'Lenovo', features: ['Large Memory'] },
  ];

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1, color: 'Blue', size: 'Medium', seller: 'Seller Name' }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const clearCart = () => setCartItems([]);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = product.price >= parseFloat(filters.minPrice) && product.price <= parseFloat(filters.maxPrice);
    const matchesCategory = filters.categories.length === 0 || filters.categories.includes(product.category);
    const matchesBrand = filters.brands.length === 0 || filters.brands.includes(product.brand);
    // const matchesFeature = filters.features.length === 0 || filters.features.some(f => product.features.includes(f));
    
    return matchesSearch && matchesPrice && matchesCategory && matchesBrand;
  });

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      products,
      filteredProducts,
      searchQuery,
      setSearchQuery,
      filters,
      setFilters
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
