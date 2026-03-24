import React from 'react';
import Hero from '../components/Hero';
import { collections } from '../data/products';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      
      <section className="collections-section">
        <h2 className="section-title">
          Curated Collections
        </h2>
        
        <div className="collections-grid">
          {collections.map(collection => (
            <Link to={collection.path} key={collection.id} className="collection-card">
              <div className="collection-img-wrap">
                <img src={collection.image} alt={collection.name} />
                <div className="collection-overlay">
                  <h3 className="collection-title">
                    {collection.name} <span>&rarr;</span>
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
