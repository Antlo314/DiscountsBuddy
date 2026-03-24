import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, collections } from '../data/products';
import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';

export default function Shop() {
  const { category } = useParams();
  const { addToCart } = useCart();
  
  const displayedProducts = category 
    ? products.filter(p => p.category.toLowerCase() === category.toLowerCase())
    : products;

  // Verbatim Title format
  const title = category 
    ? collections.find(c => c.id === category)?.name || (category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' '))
    : 'All Collections';

  return (
    <div style={{ paddingTop: '1rem', paddingBottom: '4rem', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* Verbatim Header Section */}
      <div style={{ padding: '2rem 1rem', textAlign: 'left', borderBottom: '1px solid var(--border-muted)', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', margin: 0, fontWeight: '700' }}>{title}</h1>
      </div>
      
      <section className="category-section" style={{ padding: '0 1rem' }}>
        <div className="grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {displayedProducts.length > 0 ? displayedProducts.map(product => {
            const savingsPercent = product.oldPrice && product.price < product.oldPrice 
              ? Math.round((1 - (product.price / product.oldPrice)) * 100) 
              : 0;

            return (
              <div key={product.id} className="verbatim-product-card" style={{ transition: 'transform 0.2s', cursor: 'pointer' }}>
                <div style={{ borderRadius: '12px', background: '#fff', overflow: 'hidden', aspectRatio: '1', marginBottom: '1rem', position: 'relative' }}>
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                
                <h3 style={{ fontSize: '1rem', margin: '0 0 0.5rem 0', fontWeight: '500', color: 'var(--text-primary)', lineHeight: '1.4' }}>
                  <Link to={`/products-list/collections/${product.category}`}>{product.name}</Link>
                </h3>
                
                <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--accent-primary)' }}>
                    ${product.price.toFixed(2)}
                  </span>
                  {product.oldPrice && (
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textDecoration: 'line-through' }}>
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  )}
                  {savingsPercent > 0 && (
                    <span style={{ color: '#10b981', fontSize: '0.85rem', fontWeight: '600' }}>
                      {savingsPercent}% off
                    </span>
                  )}
                </div>
                
                <button 
                  onClick={() => addToCart(product)}
                  style={{ 
                    width: '100%',
                    background: 'var(--accent-primary)', 
                    color: 'white', 
                    border: 'none',
                    padding: '0.75rem', 
                    borderRadius: '9999px', 
                    cursor: 'pointer', 
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'background 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = 'var(--accent-hover)'}
                  onMouseOut={(e) => e.currentTarget.style.background = 'var(--accent-primary)'}
                >
                  <ShoppingBag size={18} /> Add to Cart
                </button>
              </div>
            );
          }) : (
            <div style={{ gridColumn: '1 / -1', padding: '4rem 0' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>We are restocking this collection. Check back soon for new deals.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
