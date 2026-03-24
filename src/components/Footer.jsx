import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#2b3142', color: '#e2e8f0', padding: '4rem 2rem 2rem', marginTop: 'auto', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '3rem', marginBottom: '2rem' }}>
        
        {/* Column 1: Brand */}
        <div style={{ maxWidth: '300px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <img src="https://storage.googleapis.com/msgsndr/oGkE4T3ZyjuhK6Fu09IY/media/696573acf8a93bd2500a2cea.jpg" alt="Discounts Buddy Logo" style={{ width: '40px', height: '40px', borderRadius: '8px', objectFit: 'contain' }} />
            <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 'bold', color: '#fff' }}>Discounts Buddy</h3>
          </div>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: '#cbd5e1', marginBottom: '1.5rem', fontWeight: '600' }}>
            Pay Less Store — general merchandise sold as-is at extreme discounts. New deals daily.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://facebook.com/discountsbuddy" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#1e293b', color: '#fff' }}>
              <Facebook size={18} fill="currentColor" strokeWidth={0} />
            </a>
          </div>
        </div>

        {/* Column 2: Shop */}
        <div>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#fff', marginBottom: '1.2rem' }}>Shop</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><Link to="/products-list" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '700' }}>All Collections</Link></li>
            <li><Link to="/products-list/collections/electronics" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '700' }}>Electronics</Link></li>
            <li><Link to="/products-list/collections/tools" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '700' }}>Tools</Link></li>
            <li><Link to="/products-list/collections/home-kitchen" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '700' }}>Home & Kitchen</Link></li>
            <li><Link to="/products-list/collections/clearance" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '700' }}>Clearance</Link></li>
          </ul>
        </div>

        {/* Column 3: Policies */}
        <div>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#fff', marginBottom: '1.2rem' }}>Policies</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><Link to="/returns" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '700' }}>Returns</Link></li>
            <li><Link to="/shipping" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '700' }}>Shipping / Pickup</Link></li>
            <li><Link to="/privacy" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '700' }}>Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#fff', marginBottom: '1.2rem' }}>Contact</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: '#cbd5e1', fontSize: '0.95rem', fontWeight: '700' }}>
            <li>2574 Old Covington Hwy Bld A<br/>Conyers, GA, United States</li>
            <li>Mon – Sun, 11 AM – 7 PM</li>
            <li><a href="tel:+14708404014" style={{ color: '#cbd5e1', textDecoration: 'none' }}>(470) 840-4014</a></li>
            <li><a href="mailto:discountsbuddy@gmail.com" style={{ color: '#cbd5e1', textDecoration: 'none' }}>discountsbuddy@gmail.com</a></li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', fontSize: '0.9rem', color: '#cbd5e1' }}>
        <p style={{ marginBottom: '1rem', fontWeight: '700' }}>Local pickup available • Shipping on select items • Secure checkout</p>
        <p style={{ fontWeight: '700' }}>© 2026 Discounts Buddy Pay Less Store • Powered by Lumen Labs, Zion 3.0</p>
      </div>
    </footer>
  );
}
