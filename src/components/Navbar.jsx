import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { setIsDrawerOpen, itemsCount } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        <ShoppingCartIcon />
        DiscountsBuddy
      </Link>
      
      <div className="nav-links" style={{ display: 'none' }}>
        {/* We'll make this responsive later */}
        <Link to="/products-list" className="nav-item">Shop All</Link>
        <Link to="/products-list/collections/electronics" className="nav-item">Electronics</Link>
        <Link to="/products-list/collections/tools" className="nav-item">Tools</Link>
      </div>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button className="cart-button" onClick={() => setIsDrawerOpen(true)}>
          <ShoppingBag size={20} />
          {itemsCount > 0 && <span style={{ fontWeight: 'bold' }}>{itemsCount}</span>}
        </button>
      </div>
    </nav>
  );
}

function ShoppingCartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-primary)'}}>
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
  )
}
