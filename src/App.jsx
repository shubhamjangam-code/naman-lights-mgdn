import React, { useState, useEffect } from 'react';
import { MapPin, Phone } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import LightingSimulator from './components/LightingSimulator';
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
    } catch (e) {
      return [];
    }
  });

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  // Sync cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('nfl_cart', JSON.stringify(cartItems));
    } catch (e) {}
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

  return (
    <div style={{ backgroundColor: 'transparent', minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', width: '100%', overflowX: 'hidden' }}>
      {/* 3D Animated Background Layer */}
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
        <Hero
          onExploreCatalog={() => {
            const catalogEl = document.getElementById('catalog');
            if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenSimulator={() => {
            const simEl = document.getElementById('ambiance');
            if (simEl) simEl.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <LightingSimulator />

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
          const catalogEl = document.getElementById('catalog');
          if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
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
      <div className="mobile-only" style={{
        position: 'fixed',
        bottom: '20px',
        right: '16px',
        zIndex: 95,
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <a
          href="tel:+919876543210"
          style={{
            backgroundColor: '#ffffff',
            color: 'var(--color-text-high-contrast)',
            border: '1px solid var(--color-border-gold)',
            borderRadius: '24px',
            padding: '10px 14px',
            fontSize: '11px',
            fontWeight: 700,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            boxShadow: '0 6px 18px rgba(15, 23, 42, 0.18)',
            backdropFilter: 'blur(8px)'
          }}
          aria-label="Call Store"
        >
          <Phone size={13} color="var(--color-gold)" /> Call Store
        </a>

        <a
          href="https://maps.app.goo.gl/RjGAaEzUckZq9aVXA"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'linear-gradient(135deg, #d4af37 0%, #aa8214 100%)',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            borderRadius: '24px',
            padding: '10px 16px',
            fontSize: '11px',
            fontWeight: 700,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            boxShadow: '0 6px 18px rgba(212, 175, 55, 0.35)'
          }}
          aria-label="Visit Store Map"
        >
          <MapPin size={13} /> Visit Shop
        </a>
      </div>
    </div>
  );
}
