import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-col">
          <h3 style={{ marginBottom: '1rem', background: 'linear-gradient(135deg, #fff 0%, #a1a1aa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>DiscountsBuddy</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Pay Less Store — general merchandise sold as-is at extreme discounts. New deals daily.</p>
        </div>
        <div className="footer-col">
          <h4>Shop</h4>
          <ul className="footer-links">
            <li><Link to="/products-list">All Collections</Link></li>
            <li><Link to="/products-list/collections/electronics">Electronics</Link></li>
            <li><Link to="/products-list/collections/tools">Tools</Link></li>
            <li><Link to="/products-list/collections/home-kitchen">Home & Kitchen</Link></li>
            <li><Link to="/products-list/collections/clearance">Clearance</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Policies</h4>
          <ul className="footer-links">
            <li><Link to="/">Returns</Link></li>
            <li><Link to="/">Shipping / Pickup</Link></li>
            <li><Link to="/">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-links">
            <li><a href="tel:+14708404014">(470) 840-4014</a></li>
            <li><a href="mailto:contact@discountsbuddy.com">contact@discountsbuddy.com</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Discounts Buddy. All rights reserved.
      </div>
    </footer>
  );
}
