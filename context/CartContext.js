'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 10000,
    categories: [],
    brands: [],
    features: []
  });

  // Mock Data for fallback
  const mockProducts = [
    { id: 1, name: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, oldPrice: 1128.00, rating: 7.5, image: 'https://placehold.co/200x200?text=Product+1', category: 'Electronics', brand: 'Samsung', features: ['Metallic'] },
    // ... items 2-9 omitted for brevity, keeping only essential fallback logic
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        if (res.ok) {
          const dbProducts = await res.json();
          // Map DB structure to Frontend structure
          const formattedProducts = dbProducts.map(p => ({
            ...p,
            id: p._id, // Use _id as id
            // Ensure image is set (use first image or fallback)
            image: (p.images && p.images.length > 0) ? p.images[0] : 'https://placehold.co/200x200?text=No+Image',
            // Ensure other fields exist
            rating: p.rating || 0,
            oldPrice: p.oldPrice || null,
          }));
          setProducts(formattedProducts);
        } else {
           // If API fails, use mock data? Or just empty. 
           // Let's stick to empty or mock if critical.
           // For now, let's allow it to be empty if DB fetch fails so we see the issue.
           console.error("Failed to fetch products");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

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
    
    return matchesSearch && matchesPrice && matchesCategory && matchesBrand;
  });

  // Derived filters from unique product data
  const uniqueCategories = [...new Set(products.map(p => p.category).filter(Boolean))];
  const uniqueBrands = [...new Set(products.map(p => p.brand).filter(Boolean))];

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
      setFilters,
      uniqueCategories,
      uniqueBrands
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
