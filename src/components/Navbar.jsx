import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { setIsDrawerOpen, itemsCount } = useCart();

  return (
    <>
      <div className="top-notice-bar">
        <span>The Vault</span> • Secure Express Delivery • Limited Exclusive Stock
      </div>
      
      <nav className="navbar" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '1.25rem 5%' }}>
        <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-secondary)' }}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <Search size={22} />
          </button>
        </div>

        <Link to="/" className="nav-brand" style={{ justifyContent: 'center' }}>
          {/* Attempt to load the new premium logo, fallback to text if missing relative pathing issue */}
          <img 
            src="/assets/premium_shopping_logo_1774385562969.png" 
            alt="DiscountsBuddy Prestige Logo" 
            style={{ height: '48px', objectFit: 'contain' }}
            onError={(e) => { e.currentTarget.style.display = 'none'; document.getElementById('brand-text-fallback').style.display = 'block'; }}
          />
          <span id="brand-text-fallback" style={{ display: 'none', fontWeight: '600', letterSpacing: '-0.5px' }}>DISCOUNTSBUDDY</span>
        </Link>
        
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', justifyContent: 'flex-end', color: 'var(--text-primary)' }}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <User size={22} />
          </button>
          
          <button className="cart-button" onClick={() => setIsDrawerOpen(true)}>
            <ShoppingBag size={20} />
            <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>
              Bag {itemsCount > 0 ? `(${itemsCount})` : ''}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}
