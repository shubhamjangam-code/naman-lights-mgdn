import React, { useState, useEffect } from 'react';
import { MapPin, Phone } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import SeamlessOffering from './components/SeamlessOffering';
import ProjectShowcase from './components/ProjectShowcase';
import ServicesGrid from './components/ServicesGrid';
import ProductCatalog from './components/ProductCatalog';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import { PRODUCTS } from './data/products';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('nfl_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  // Sync cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('nfl_cart', JSON.stringify(cartItems));
    } catch {}
  }, [cartItems]);

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const handleUpdateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems(prev => prev.map(item => item.id === productId ? { ...item, quantity: newQty } : item));
  };

  const handleRemoveItem = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartTotalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const scrollToCatalog = () => {
    const catalogEl = document.getElementById('catalog');
    if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{
      backgroundColor: 'transparent',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      width: '100%',
      overflowX: 'hidden'
    }}>
      {/* 3D Animated Ambient Dark Studio Background */}
      <Background3D />

      {/* Header Bar */}
      <Header
        cartCount={cartTotalCount}
        onOpenCart={() => setCartOpen(true)}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Content Area */}
      <main style={{ flex: 1, position: 'relative', zIndex: 1, width: '100%' }}>
        {/* 1. Hero Section (Screenshot 1 Reference) */}
        <Hero
          onExploreCatalog={scrollToCatalog}
        />

        {/* 3. Features & Seamless Offering Section (Screenshot 3 Reference) */}
        <SeamlessOffering onExploreCatalog={scrollToCatalog} />

        {/* 4. Curated Work & Projects Showcase (Screenshot 4 Reference) */}
        <ProjectShowcase onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setSearchQuery('');
        }} />

        {/* 5. Services & Architectural Categories Grid (Screenshot 5 Reference) */}
        <ServicesGrid onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setSearchQuery('');
        }} />

        {/* 6. Product Catalog */}
        <ProductCatalog
          products={PRODUCTS}
          activeCategory={activeCategory}
          onSelectCategory={(cat) => {
            setActiveCategory(cat);
            setSearchQuery('');
          }}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onQuickView={setSelectedProduct}
          onAddToCart={handleAddToCart}
        />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setSearchQuery('');
          scrollToCatalog();
        }}
      />

      {/* Modals & Drawers */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Mobile Floating Quick Contact & Map Pill */}
      <div className="mobile-only mobile-floating-actions" style={{
        position: 'fixed',
        bottom: 'calc(16px + env(safe-area-inset-bottom, 0px))',
        right: '16px',
        zIndex: 95,
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <a
          href="tel:+919876543210"
          style={{
            backgroundColor: 'rgba(21, 21, 27, 0.94)',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '24px',
            padding: '9px 13px',
            fontSize: '11px',
            fontWeight: 700,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(10px)'
          }}
          aria-label="Call Store"
        >
          <Phone size={13} color="#d78c43" /> Call Store
        </a>

        <a
          href="https://maps.app.goo.gl/RjGAaEzUckZq9aVXA"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'var(--color-amber-gradient)',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '24px',
            padding: '9px 15px',
            fontSize: '11px',
            fontWeight: 700,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 8px 24px rgba(215, 140, 67, 0.4)'
          }}
          aria-label="Visit Store Map"
        >
          <MapPin size={13} /> Visit Shop
        </a>
      </div>
    </div>
  );
}
