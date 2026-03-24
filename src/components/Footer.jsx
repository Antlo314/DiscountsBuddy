import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, Lock } from 'lucide-react';

export default function Footer() {
  return (
    <footer>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '3rem', marginBottom: '4rem', maxWidth: '1400px', margin: '0 auto 4rem auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#fff' }}>
          <ShieldCheck size={32} color="var(--accent-gold)" />
          <div>
            <h5 style={{ margin: 0, fontSize: '1rem', fontFamily: '"Playfair Display", serif' }}>Guaranteed Authenticity</h5>
            <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.85rem', color: '#a1a1aa' }}>100% genuine products</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#fff', marginLeft: '2rem' }}>
          <Truck size={32} color="var(--accent-gold)" />
          <div>
            <h5 style={{ margin: 0, fontSize: '1rem', fontFamily: '"Playfair Display", serif' }}>Express Shipping</h5>
            <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.85rem', color: '#a1a1aa' }}>Fully insured and tracked</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#fff', marginLeft: '2rem' }}>
          <Lock size={32} color="var(--accent-gold)" />
          <div>
            <h5 style={{ margin: 0, fontSize: '1rem', fontFamily: '"Playfair Display", serif' }}>Secure Vault Checkout</h5>
            <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.85rem', color: '#a1a1aa' }}>Encrypted transactions</p>
          </div>
        </div>
      </div>
      
      <div className="footer-grid">
        <div className="footer-col" style={{ maxWidth: '300px' }}>
          <h3 style={{ marginBottom: '1.5rem', fontFamily: '"Playfair Display", serif', fontSize: '1.5rem', background: 'linear-gradient(to right, #fff, #cfa861)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            DiscountsBuddy
          </h3>
          <p style={{ color: '#a1a1aa', fontSize: '0.9rem', lineHeight: '1.6' }}>
            Curating everyday excellence. Access our exclusive vault of high-end home goods, electronics, and lifestyle products at unmatched value.
          </p>
        </div>
        <div className="footer-col">
          <h4>The Vault</h4>
          <ul className="footer-links">
            <li><Link to="/products-list">All Collections</Link></li>
            <li><Link to="/products-list/collections/electronics">Premium Electronics</Link></li>
            <li><Link to="/products-list/collections/home-kitchen">Curated Home</Link></li>
            <li><Link to="/products-list/collections/apparel">Exclusive Apparel</Link></li>
            <li><Link to="/products-list/collections/clearance">Elite Clearance</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Client Services</h4>
          <ul className="footer-links">
            <li><Link to="/">Returns & Exchanges</Link></li>
            <li><Link to="/">White Glove Delivery</Link></li>
            <li><Link to="/">Privacy Manifesto</Link></li>
            <li><Link to="/">Terms of Service</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Concierge</h4>
          <ul className="footer-links">
            <li><a href="tel:+14708404014" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>+1 (470) 840-4014</a></li>
            <li><a href="mailto:contact@discountsbuddy.com">contact@discountsbuddy.com</a></li>
            <li style={{ marginTop: '1.5rem', color: '#71717a' }}>Atlanta Metro Area<br/>By Appointment Only</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} DiscountsBuddy Global. All rights reserved.
      </div>
    </footer>
  );
}
