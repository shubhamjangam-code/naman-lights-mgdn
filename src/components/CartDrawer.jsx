import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, CheckCircle2, MapPin } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [submitted, setSubmitted] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  if (!isOpen) return null;

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
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      backdropFilter: 'blur(8px)',
      zIndex: 200,
      display: 'flex',
      justifyContent: 'flex-end'
    }}
    onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: '#121217',
          borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
          width: '100%',
          maxWidth: '440px',
          height: '100%',
          maxHeight: '100dvh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 0 50px rgba(0, 0, 0, 0.8)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-in cart-drawer-panel"
      >
        {/* Header */}
        <div className="cart-drawer-header" style={{
          padding: '20px 24px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#0e0e13'
        }}>
          <div>
            <h2 style={{
              fontSize: '16px',
              fontFamily: 'var(--font-heading)',
              color: '#ffffff',
              fontWeight: 700,
              letterSpacing: '0.04em'
            }}>
              SELECTION INQUIRY ({cartItems.reduce((a, b) => a + b.quantity, 0)})
            </h2>
            <div style={{ fontSize: '12px', color: '#d78c43', marginTop: '2px' }}>
              Naman Fancy Light Atelier
            </div>
          </div>
          <button 
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#ffffff',
              borderRadius: '6px',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Cart Body */}
        {submitted ? (
          <div style={{
            padding: '48px 24px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px'
          }}>
            <CheckCircle2 size={52} color="#d78c43" />
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff' }}>
              INQUIRY RECEIVED!
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: 1.6 }}>
              Thank you, <strong style={{ color: '#ffffff' }}>{clientName}</strong>. Our Kolhapur showroom team will connect with you at <strong style={{ color: '#d78c43' }}>{clientPhone}</strong> with architectural fixture specifications and showroom appointment details.
            </p>
          </div>
        ) : (
          <>
            <div className="cart-drawer-body" style={{
              flex: 1,
              overflowY: 'auto',
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}>
              {cartItems.length === 0 ? (
                <div style={{
                  textAlign: 'center',
                  padding: '60px 0',
                  color: '#94a3b8'
                }}>
                  Your selection inquiry cart is currently empty.
                  <div style={{ marginTop: '18px' }}>
                    <button className="btn-amber" onClick={onClose} style={{ padding: '10px 20px', fontSize: '12.5px' }}>
                      EXPLORE COLLECTIONS
                    </button>
                  </div>
                </div>
              ) : (
                cartItems.map(item => (
                  <div 
                    key={item.id}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '10px',
                      padding: '12px',
                      display: 'flex',
                      gap: '14px',
                      alignItems: 'center'
                    }}
                  >
                    <img 
                      src={item.image} 
                      alt={item.name}
                      style={{
                        width: '60px',
                        height: '60px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        backgroundColor: '#0a0a0e',
                        flexShrink: 0
                      }}
                    />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontSize: '13.5px',
                        color: '#ffffff',
                        fontWeight: 700,
                        lineHeight: 1.3,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {item.name}
                      </div>

                      {/* Quantity Controls */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '6px' }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: '6px',
                          backgroundColor: '#1b1b22'
                        }}>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            style={{
                              background: 'none', border: 'none', color: '#ffffff',
                              padding: '4px 8px', cursor: 'pointer'
                            }}
                          >
                            <Minus size={11} />
                          </button>
                          <span style={{ fontSize: '11px', color: '#ffffff', fontWeight: 600, padding: '0 6px' }}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            style={{
                              background: 'none', border: 'none', color: '#ffffff',
                              padding: '4px 8px', cursor: 'pointer'
                            }}
                          >
                            <Plus size={11} />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.id)}
                          style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
                          title="Remove item"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Location & Form */}
            {cartItems.length > 0 && (
              <div className="cart-drawer-footer" style={{
                padding: '20px 24px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                backgroundColor: '#0e0e13'
              }}>
                <div style={{
                  backgroundColor: 'rgba(215, 140, 67, 0.15)',
                  border: '1px solid rgba(215, 140, 67, 0.35)',
                  borderRadius: '8px',
                  padding: '10px 14px',
                  marginBottom: '16px',
                  color: '#e2e8f0',
                  fontSize: '11.5px',
                  lineHeight: 1.4,
                  textAlign: 'center'
                }}>
                  📍 Luminaires are available for live demonstration and direct purchase at our Kolhapur Showroom.
                </div>

                <a 
                  href="https://maps.app.goo.gl/RjGAaEzUckZq9aVXA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-amber" 
                  style={{ width: '100%', textDecoration: 'none', justifyContent: 'center', marginBottom: '14px', padding: '12px' }}
                >
                  <MapPin size={14} /> VISIT SHOWROOM TO BUY
                </a>

                <form onSubmit={handleSubmitQuote} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
                  
                  <button type="submit" className="btn-secondary" style={{ width: '100%', padding: '12px' }}>
                    SUBMIT INQUIRY
                  </button>
                </form>
              </div>
            )}
          </>
        )}
      </div>

      <style>{`
        @media (max-width: 480px) {
          .cart-drawer-panel {
            max-width: 100vw !important;
          }
          .cart-drawer-header {
            padding: 16px 16px !important;
          }
          .cart-drawer-body {
            padding: 16px 16px !important;
          }
          .cart-drawer-footer {
            padding: 16px 16px !important;
          }
        }
      `}</style>
    </div>
  );
}
