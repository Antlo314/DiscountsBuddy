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

  const title = category 
    ? collections.find(c => c.id === category)?.name || (category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' '))
    : 'All Collections';

  return (
    <div style={{ paddingBottom: '4rem', maxWidth: '1400px', margin: '0 auto' }}>
      
      <div style={{ padding: '4rem 5%', textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '3rem', margin: 0, fontWeight: '600', color: 'var(--text-primary)' }}>{title}</h1>
      </div>
      
      <section className="category-section" style={{ padding: '0 5%' }}>
        <div className="grid collections-grid">
          {displayedProducts.length > 0 ? displayedProducts.map(product => {
            const savingsPercent = product.oldPrice && product.price < product.oldPrice 
              ? Math.round((1 - (product.price / product.oldPrice)) * 100) 
              : 0;

            return (
              <div key={product.id} className="product-card">
                <div className="product-img-box">
                  <img src={product.image} alt={product.name} />
                </div>
                
                <div className="product-info">
                  <h3 className="product-title">
                    <Link to={`/products-list/collections/${product.category}`}>{product.name}</Link>
                  </h3>
                  
                  <div className="product-price-row">
                    <span className="price-current">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.oldPrice && (
                      <span className="price-old">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    )}
                    {savingsPercent > 0 && (
                      <span className="price-badge">
                        {savingsPercent}% OFF
                      </span>
                    )}
                  </div>
                  
                  <button 
                    onClick={() => addToCart(product)}
                    className="add-to-cart-btn"
                  >
                    <ShoppingBag size={18} /> Add to Cart
                  </button>
                </div>
              </div>
            );
          }) : (
            <div style={{ gridColumn: '1 / -1', padding: '4rem 0', textAlign: 'center' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>We are restocking this collection. Check back soon for new arrivals.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
