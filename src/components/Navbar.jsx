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
          <img 
            src="https://storage.googleapis.com/msgsndr/oGkE4T3ZyjuhK6Fu09IY/media/696573acf8a93bd2500a2cea.jpg" 
            alt="DiscountsBuddy Logo" 
            style={{ height: '42px', borderRadius: '8px', objectFit: 'contain' }} 
          />
          <span style={{ fontWeight: '800', letterSpacing: '-0.5px' }}>DiscountsBuddy</span>
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
