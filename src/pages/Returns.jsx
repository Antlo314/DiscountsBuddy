import React, { useEffect } from 'react';

export default function Returns() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const sections = [
    { id: 'as-is', label: 'What “As-Is” Means' },
    { id: 'final-sale', label: 'Returns & Final Sale' },
    { id: 'shipping-damage', label: 'Shipping Damage' },
    { id: 'wrong-item', label: 'Wrong/Missing Items' },
    { id: 'nonreturnable', label: 'Not Eligible' },
    { id: 'refunds', label: 'Refunds' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem', color: 'var(--text-primary)', lineHeight: '1.8', minHeight: '60vh' }}>
      <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '3rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-muted)', paddingBottom: '1rem' }}>Returns / As-Is Policy</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>Discounts Buddy Pay Less Store sells a wide variety of merchandise at deep discounts. Many items are sold as-is, and inventory is limited. Please review this policy carefully before purchasing.</p>

      {/* Fast Scroll Buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
        {sections.map(sec => (
          <button 
            key={sec.id} 
            onClick={() => scrollToSection(sec.id)}
            style={{ 
              background: 'var(--surface-primary)', border: '1px solid var(--border-muted)', 
              color: 'var(--text-primary)', padding: '0.5rem 1rem', borderRadius: '9999px', 
              fontSize: '0.9rem', fontWeight: '600', cursor: 'pointer', transition: 'var(--transition-smooth)'
            }}
            onMouseOver={(e) => { e.target.style.borderColor = 'var(--text-primary)'; e.target.style.background = 'var(--surface-secondary)'; }}
            onMouseOut={(e) => { e.target.style.borderColor = 'var(--border-muted)'; e.target.style.background = 'var(--surface-primary)'; }}
          >
            {sec.label}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        <section id="as-is">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)', fontFamily: '"Playfair Display", serif' }}>1) What “As-Is” Means</h2>
          <p style={{ color: 'var(--text-secondary)' }}>“As-is” means the item is sold in its current condition. Items may be new, open-box, refurbished, shelf-pulls, or customer returns. Packaging may be missing or damaged. Accessories and manuals may not be included unless specifically stated.</p>
          <strong style={{ display: 'block', marginTop: '1rem', color: 'var(--text-primary)' }}>What you can expect</strong>
          <p style={{ color: 'var(--text-secondary)' }}>Clear pricing, deep discounts, and condition notes when available.</p>
          <strong style={{ display: 'block', marginTop: '1rem', color: 'var(--text-primary)' }}>What we can’t guarantee</strong>
          <p style={{ color: 'var(--text-secondary)' }}>Perfect cosmetics, full accessories, or manufacturer warranties on all items.</p>
        </section>

        <section id="final-sale">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)', fontFamily: '"Playfair Display", serif' }}>2) Returns & Final Sale (Default)</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Due to the nature of discounted, limited-stock merchandise, all sales are final unless otherwise stated on the product listing or required by law. Please review item details before purchasing.</p>
        </section>

        <section id="shipping-damage">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)', fontFamily: '"Playfair Display", serif' }}>3) Shipping Damage / Delivery Issues</h2>
          <p style={{ color: 'var(--text-secondary)' }}>If a shipped order arrives damaged, contact us within 48 hours of delivery. Include your order number and:<br/>
          • Photos of the outer box/packaging (all sides)<br/>
          • Photos of internal packaging<br/>
          • Photos of the item damage<br/>
          We will review and determine the best resolution available based on the situation and carrier options. Claims may require carrier inspection or additional documentation.</p>
        </section>

        <section id="wrong-item">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)', fontFamily: '"Playfair Display", serif' }}>4) Wrong Item / Missing Parts (If Applicable)</h2>
          <p style={{ color: 'var(--text-secondary)' }}>If you received the wrong item or a major component is missing from a shipped order, contact us within 48 hours of delivery. We will investigate and, when appropriate, provide the best available resolution.</p>
        </section>

        <section id="nonreturnable">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)', fontFamily: '"Playfair Display", serif' }}>5) Items Not Eligible for Return (Default)</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Unless explicitly stated otherwise, the following are not eligible for return:<br/>
          • As-is items and clearance items<br/>
          • Items marked “final sale”<br/>
          • Items with missing serial numbers or signs of heavy use not reported within the timeframe<br/>
          • Items returned without original components included at sale (when applicable)</p>
        </section>

        <section id="refunds">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)', fontFamily: '"Playfair Display", serif' }}>6) Refunds (If a Refund Is Approved)</h2>
          <p style={{ color: 'var(--text-secondary)' }}>If a refund is approved, it is typically issued to the original payment method. Processing time can vary by bank/payment provider. Shipping charges (if any) may be non-refundable unless required by law or the issue was caused by our fulfillment error.</p>
        </section>

        <section id="contact">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)', fontFamily: '"Playfair Display", serif' }}>7) Contact Us</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Returns & policy questions:<br/>
          Discounts Buddy Pay Less Store<br/>
          2574 Old Covington Hwy Bld A, Conyers, GA<br/>
          Phone: (470) 840-4014<br/>
          Email: discountsbuddy@gmail.com</p>
        </section>
      </div>
    </div>
  );
}
