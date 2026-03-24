import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';

export default function Shop() {
  const { category } = useParams();
  const { addToCart } = useCart();
  
  const displayedProducts = category 
    ? products.filter(p => p.category.toLowerCase() === category.toLowerCase())
    : products;

  const title = category 
    ? category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ') 
    : 'All Collections';

  return (
    <div style={{ paddingTop: '2rem' }}>
      <div style={{ background: 'var(--surface-primary)', padding: '4rem 2rem', textAlign: 'center', borderBottom: '1px solid var(--border-muted)' }}>
        <h1 style={{ fontSize: '3rem', margin: 0 }}>{title}</h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}>Explore our handpicked selection of premium items at extreme discounts.</p>
      </div>
      
      <section className="category-section">
        <div className="grid">
          {displayedProducts.length > 0 ? displayedProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="card-img-wrap" style={{ borderRadius: '8px', marginBottom: '1rem', background: '#ffffff' }}>
                <img src={product.image} alt={product.name} className="card-img" />
              </div>
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
          )) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem' }}>
              <h3 style={{ color: 'var(--text-secondary)', fontSize: '1.5rem' }}>No products found in this category.</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Check back later for new deals.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
