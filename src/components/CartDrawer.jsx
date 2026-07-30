import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [submitted, setSubmitted] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleSubmitQuote = (e) => {
    e.preventDefault();
    if (!clientName || !clientPhone) return;
    setSubmitted(true);
    setTimeout(() => {
      onClearCart();
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.6)',
      backdropFilter: 'blur(6px)',
      zIndex: 200,
      display: 'flex',
      justify: 'flex-end'
    }}
    onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: 'var(--color-bg-secondary)',
          borderLeft: '1px solid var(--color-border)',
          width: '100%',
          maxWidth: '440px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'var(--shadow-card)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-in"
      >
        {/* Header */}
        <div style={{
          padding: 'var(--spacing-4)',
          borderBottom: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between',
          backgroundColor: 'var(--color-bg-subtle)'
        }}>
          <div>
            <h2 className="h1" style={{ color: 'var(--color-text-high-contrast)' }}>
              SELECTION CART ({cartItems.reduce((a, b) => a + b.quantity, 0)})
            </h2>
            <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-text-secondary)' }}>
              Naman Fancy Light Studio Inquiry
            </div>
          </div>
          <button 
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-text-high-contrast)',
              cursor: 'pointer',
              padding: 'var(--spacing-1)'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Body */}
        {submitted ? (
          <div style={{
            padding: 'var(--spacing-8) var(--spacing-4)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'var(--spacing-3)'
          }}>
            <CheckCircle2 size={48} color="var(--color-primary)" />
            <h3 className="h1" style={{ color: 'var(--color-text-high-contrast)' }}>
              QUOTE REQUEST SUBMITTED!
            </h3>
            <p style={{ color: 'var(--color-text)', fontSize: 'var(--font-size-body)' }}>
              Thank you, <strong style={{ color: 'var(--color-text-high-contrast)' }}>{clientName}</strong>. Our senior lighting consultant will contact you at <strong style={{ color: 'var(--color-primary)' }}>{clientPhone}</strong> with architectural trade pricing and CAD layout assistance.
            </p>
          </div>
        ) : (
          <>
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: 'var(--spacing-4)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-3)'
            }}>
              {cartItems.length === 0 ? (
                <div style={{
                  textAlign: 'center',
                  padding: 'var(--spacing-8) 0',
                  color: 'var(--color-text-secondary)'
                }}>
                  Your selection cart is currently empty.
                  <div style={{ marginTop: 'var(--spacing-3)' }}>
                    <button className="btn-outline-accent" onClick={onClose}>
                      BROWSE FIXTURES
                    </button>
                  </div>
                </div>
              ) : (
                cartItems.map(item => (
                  <div 
                    key={item.id}
                    style={{
                      backgroundColor: 'var(--color-bg-subtle)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-subtle)',
                      padding: 'var(--spacing-2)',
                      display: 'flex',
                      gap: 'var(--spacing-3)',
                      alignItems: 'center'
                    }}
                  >
                    <img 
                      src={item.image} 
                      alt={item.name}
                      style={{
                        width: '64px',
                        height: '64px',
                        objectFit: 'cover',
                        borderRadius: 'var(--radius-subtle)',
                        backgroundColor: '#0f172a'
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontSize: 'var(--font-size-h2)',
                        color: 'var(--color-text-high-contrast)',
                        fontWeight: 700,
                        lineHeight: 1.2
                      }}>
                        {item.name}
                      </div>
                      <div style={{ fontSize: '11px', color: '#745618', fontWeight: 700, margin: '2px 0' }}>
                        In-Store Exclusive
                      </div>

                      {/* Quantity Controls */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)', marginTop: '4px' }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          border: '1px solid var(--color-border)',
                          borderRadius: 'var(--radius-subtle)',
                          backgroundColor: 'var(--color-bg-secondary)'
                        }}>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            style={{
                              background: 'none', border: 'none', color: 'var(--color-text-high-contrast)',
                              padding: '2px 6px', cursor: 'pointer'
                            }}
                          >
                            <Minus size={10} />
                          </button>
                          <span style={{ fontSize: '11px', color: 'var(--color-text-high-contrast)', fontWeight: 600, padding: '0 6px' }}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            style={{
                              background: 'none', border: 'none', color: 'var(--color-text-high-contrast)',
                              padding: '2px 6px', cursor: 'pointer'
                            }}
                          >
                            <Plus size={10} />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.id)}
                          style={{ background: 'none', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer' }}
                          title="Remove item"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Location Info & Inquiry Form */}
            {cartItems.length > 0 && (
              <div style={{
                padding: 'var(--spacing-4)',
                borderTop: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-bg-subtle)'
              }}>
                <div style={{
                  backgroundColor: 'var(--color-gold-light)',
                  border: '1px solid var(--color-border-gold)',
                  borderRadius: 'var(--radius-subtle)',
                  padding: '10px 14px',
                  marginBottom: 'var(--spacing-3)',
                  color: '#745618',
                  fontSize: '12px',
                  fontWeight: 700,
                  textAlign: 'center'
                }}>
                  🏬 All products are available exclusively for purchase at our Kolhapur Showroom.
                </div>

                <a 
                  href="https://maps.app.goo.gl/RjGAaEzUckZq9aVXA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold" 
                  style={{ width: '100%', textDecoration: 'none', justifyContent: 'center', marginBottom: 'var(--spacing-2)' }}
                >
                  VISIT SHOP TO BUY <ArrowRight size={14} />
                </a>

                <form onSubmit={handleSubmitQuote} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                  <input 
                    type="text" 
                    placeholder="Your Name *"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    required
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone / WhatsApp Number *"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    required
                  />
                  
                  <button type="submit" className="btn-secondary" style={{ width: '100%', marginTop: '2px' }}>
                    BOOK IN-STORE EXPERIENCE VISIT
                  </button>
                </form>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
