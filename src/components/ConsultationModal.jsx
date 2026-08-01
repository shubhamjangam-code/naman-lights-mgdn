import React, { useState } from 'react';
import { X, Calendar, Clock, Sparkles, CheckCircle2, User, Phone, MapPin } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Residential Villa',
    date: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3500);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.6)',
      backdropFilter: 'blur(8px)',
      zIndex: 250,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--spacing-4)'
    }}
    onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: 'var(--color-bg-secondary)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-subtle)',
          width: '100%',
          maxWidth: '540px',
          padding: 'var(--spacing-5)',
          boxShadow: 'var(--shadow-card)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-in"
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 'var(--spacing-3)',
            right: 'var(--spacing-3)',
            background: 'none',
            border: 'none',
            color: 'var(--color-text-high-contrast)',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: 'var(--spacing-6) 0' }}>
            <CheckCircle2 size={48} color="var(--color-primary)" style={{ marginBottom: 'var(--spacing-3)' }} />
            <h2 className="h1" style={{ color: 'var(--color-text-high-contrast)', marginBottom: 'var(--spacing-2)' }}>
              CONSULTATION BOOKED
            </h2>
            <p style={{ color: 'var(--color-text)', fontSize: 'var(--font-size-body)' }}>
              Our senior lighting designer will reach out shortly to confirm your session and review your floor plan specs.
            </p>
          </div>
        ) : (
          <>
            <div className="section-subtitle">EXPERT ADVISORY SERVICE</div>
            <h2 className="h1" style={{ color: 'var(--color-text-high-contrast)', marginBottom: 'var(--spacing-2)' }}>
              BOOK ARCHITECTURAL LIGHTING CONSULTATION
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-small)', marginBottom: 'var(--spacing-4)' }}>
              Schedule a 1-on-1 session with our principal optical specialists to calculate lux levels, beam angles, and custom fixture design for your project.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
              <div>
                <label style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-text-high-contrast)', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                  Full Name / Architect Firm *
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Ar. Rajesh Mehta"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={{ width: '100%' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-2)' }}>
                <div>
                  <label style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-text-high-contrast)', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                    Phone / WhatsApp *
                  </label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+91 98765 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    style={{ width: '100%' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-text-high-contrast)', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                    style={{ width: '100%' }}
                  >
                    <option value="Residential Villa">Luxury Villa / Penthouse</option>
                    <option value="Hospitality">Hotel / Resort / Lounge</option>
                    <option value="Commercial Office">Corporate Office / Retail</option>
                    <option value="Bespoke Jhoomer">Custom Jhoomer Design</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-text-high-contrast)', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                  Preferred Consultation Date
                </label>
                <input 
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  style={{ width: '100%' }}
                />
              </div>

              <div>
                <label style={{ fontSize: 'var(--font-size-h2)', color: 'var(--color-text-high-contrast)', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                  Project Notes & Lux Requirements
                </label>
                <textarea 
                  rows="3"
                  placeholder="Share details regarding ceiling height, room dimensions, dimming preferences..."
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  style={{ width: '100%', resize: 'none' }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: 'var(--spacing-2)', width: '100%' }}>
                CONFIRM APPOINTMENT REQUEST
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
