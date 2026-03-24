import React from 'react';
import Hero from '../components/Hero';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const { addToCart } = useCart();
  const featured = products.slice(0, 8);

  return (
    <div className="home-page">
      <Hero />
      <section className="category-section">
        <h2 className="section-title">Today's Deals</h2>
        <div className="grid">
          {featured.map(product => (
            <div key={product.id} className="product-card">
              <Link to={`/products-list/collections/${product.category.toLowerCase()}`}>
                <div className="card-img-wrap" style={{ borderRadius: '8px', marginBottom: '1rem', background: '#ffffff' }}>
                  <img src={product.image} alt={product.name} className="card-img" />
                </div>
              </Link>
              <div className="product-info">
                <h3 style={{ fontSize: '1.1rem', margin: '0 0 0.5rem 0' }}>{product.name}</h3>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <span className="product-price">${product.price.toFixed(2)}</span>
                    {product.oldPrice && <span className="product-old-price">${product.oldPrice.toFixed(2)}</span>}
                  </div>
                  <button 
                    onClick={() => addToCart(product)}
                    style={{ background: 'var(--surface-secondary)', border: '1px solid var(--border-muted)', color: 'white', padding: '0.5rem', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.3s' }}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'var(--accent-primary)'; e.currentTarget.style.borderColor = 'var(--accent-primary)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'var(--surface-secondary)'; e.currentTarget.style.borderColor = 'var(--border-muted)'; }}
                  >
                    <ShoppingBag size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Link to="/products-list" className="btn-primary" style={{ display: 'inline-block' }}>View All Collections</Link>
        </div>
      </section>
    </div>
  );
}
