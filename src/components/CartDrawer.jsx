import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, Trash2 } from 'lucide-react';

export default function CartDrawer() {
  const { isDrawerOpen, setIsDrawerOpen, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <>
      <div 
        className={`cart-drawer-overlay ${isDrawerOpen ? 'open' : ''}`}
        onClick={() => setIsDrawerOpen(false)}
      />
      <div className={`cart-drawer ${isDrawerOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3>Shopping Bag</h3>
          <button className="cart-close" onClick={() => setIsDrawerOpen(false)}>
            <X size={24} />
          </button>
        </div>
        
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', color: 'var(--text-tertiary)', marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--surface-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Trash2 size={24} color="var(--text-tertiary)"/>
              </div>
              <p style={{ fontSize: '1.1rem', fontFamily: '"Playfair Display", serif' }}>Your bag is currently empty.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {cartItems.map(item => (
                <div key={item.id} style={{ display: 'flex', gap: '1.25rem', borderBottom: '1px solid var(--border-muted)', paddingBottom: '1.5rem' }}>
                  <img src={item.image} alt={item.name} style={{ width: '90px', height: '90px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', background: '#f8f8f8' }} />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.95rem', fontWeight: '500', color: 'var(--text-primary)', lineHeight: '1.3' }}>{item.name}</h4>
                    <div style={{ color: 'var(--text-primary)', fontWeight: '700', marginBottom: 'auto', fontSize: '1.1rem' }}>${item.price.toFixed(2)}</div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'var(--surface-secondary)', padding: '0.25rem 0.5rem', borderRadius: '9999px' }}>
                        <button onClick={() => updateQuantity(item.id, -1)} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex' }}><Minus size={14}/></button>
                        <span style={{ fontSize: '0.9rem', fontWeight: '600', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex' }}><Plus size={14}/></button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', color: 'var(--text-tertiary)', cursor: 'pointer', display: 'flex', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-tertiary)'}>
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontSize: '1.25rem', fontWeight: '600', fontFamily: '"Playfair Display", serif' }}>
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', textAlign: 'center', marginBottom: '1rem' }}>Shipping & taxes calculated at checkout.</p>
            <button className="checkout-btn" onClick={() => alert("Stripe Integration Pending")}>
              Proceed to Secure Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
