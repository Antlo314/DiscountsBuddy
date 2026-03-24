import React from 'react';
import Hero from '../components/Hero';
import { collections } from '../data/products';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      
      <section className="collections-section" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-primary)', textAlign: 'left', fontWeight: '500' }}>
          Collections
        </h2>
        
        <div className="collections-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {collections.map(collection => (
            <Link to={collection.path} key={collection.id} className="collection-card" style={{ textDecoration: 'none' }}>
              <div 
                className="collection-img-wrap" 
                style={{ 
                  backgroundColor: '#ffffff', 
                  borderRadius: '16px', 
                  aspectRatio: '1', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  overflow: 'hidden',
                  marginBottom: '1rem',
                  transition: 'transform 0.3s ease'
                }}
              >
                <img 
                  src={collection.image} 
                  alt={collection.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                />
              </div>
              <p style={{ 
                margin: 0, 
                fontSize: '1.1rem', 
                color: 'var(--text-primary)', 
                fontWeight: '400',
                display: 'flex',
                alignItems: 'center'
              }}>
                {collection.name} <span style={{ marginLeft: '4px' }}>&rarr;</span>
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
