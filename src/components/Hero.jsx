import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <h1 className="hero-title">Pay Less. Buy More.</h1>
        <p className="hero-subtitle">Everyday items at prices that feel like steals. From electronics to home essentials, get premium products at extreme discounts.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/products-list" className="btn-primary">Shop Today's Deals</Link>
          <Link to="/products-list/collections/clearance" className="btn-outline-light">Browse Collections</Link>
        </div>
      </div>
    </section>
  );
}
