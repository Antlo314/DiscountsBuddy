import React, { useEffect } from 'react';

export default function Shipping() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem', color: '#fff', lineHeight: '1.8', minHeight: '60vh' }}>
      <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '3rem', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>Shipping & Pickup</h1>
      <p style={{ color: '#a1a1aa', marginBottom: '3rem', fontSize: '1.1rem' }}>Below are our default shipping and local pickup guidelines. Because inventory is limited and most items are sold as-is, please review pickup windows and shipping expectations before ordering.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-gold)', fontFamily: '"Playfair Display", serif' }}>1) Local Pickup</h2>
          <strong style={{ display: 'block', marginTop: '0.5rem', color: '#e4e4e7' }}>Pickup Location</strong>
          <p style={{ color: '#a1a1aa' }}>2574 Old Covington Hwy Bldg A, Conyers, GA, United States, Georgia</p>
          <strong style={{ display: 'block', marginTop: '1rem', color: '#e4e4e7' }}>Pickup Window</strong>
          <p style={{ color: '#a1a1aa' }}>Please pick up your order within 7 days of purchase unless otherwise stated. If you need more time, contact us as soon as possible.</p>
          <strong style={{ display: 'block', marginTop: '1rem', color: '#e4e4e7' }}>What to Bring</strong>
          <p style={{ color: '#a1a1aa' }}>Bring your order confirmation and a valid ID. If someone else is picking up, please notify us in advance.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-gold)', fontFamily: '"Playfair Display", serif' }}>2) Processing Time</h2>
          <p style={{ color: '#a1a1aa' }}>Orders are typically processed within 1–3 business days. During high-volume periods, processing may take longer. If an item becomes unavailable before fulfillment (limited stock), we will contact you with next steps.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-gold)', fontFamily: '"Playfair Display", serif' }}>3) Shipping (Default)</h2>
          <p style={{ color: '#a1a1aa' }}>Shipping is available for select items. We generally ship within the United States (lower 48) unless otherwise noted. Carrier selection (e.g., USPS/UPS/FedEx) may vary based on package size, destination, and cost efficiency.</p>
          <strong style={{ display: 'block', marginTop: '1rem', color: '#e4e4e7' }}>Packaging</strong>
          <p style={{ color: '#a1a1aa' }}>We package orders securely. Some items may ship in manufacturer packaging or reused protective packaging.</p>
          <strong style={{ display: 'block', marginTop: '1rem', color: '#e4e4e7' }}>Shipping Costs</strong>
          <p style={{ color: '#a1a1aa' }}>Shipping costs are shown at checkout when available. For oversized items, shipping may be restricted or pickup-only.</p>
          <strong style={{ display: 'block', marginTop: '1rem', color: '#e4e4e7' }}>Delivery Estimates</strong>
          <p style={{ color: '#a1a1aa' }}>After processing, delivery is typically 2–7 business days depending on destination and carrier service.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-gold)', fontFamily: '"Playfair Display", serif' }}>4) Tracking</h2>
          <p style={{ color: '#a1a1aa' }}>When tracking is available, we will provide a tracking number by email or via your order confirmation details. Tracking updates may take 24–48 hours to appear after label creation.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-gold)', fontFamily: '"Playfair Display", serif' }}>5) Damaged Packages & Delivery Issues</h2>
          <p style={{ color: '#a1a1aa' }}>If your order arrives damaged, please contact us within 48 hours of delivery and include:<br/>
          • Order number<br/>
          • Photos of the outer box/packaging<br/>
          • Photos of the item damage<br/>
          We will review and determine the best resolution available based on the situation and carrier options.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-gold)', fontFamily: '"Playfair Display", serif' }}>6) Sold As-Is Reminder</h2>
          <p style={{ color: '#a1a1aa' }}>Many items are sold as-is and may be new, open-box, refurbished, or customer returns. Product descriptions and condition notes should be reviewed before purchase.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-gold)', fontFamily: '"Playfair Display", serif' }}>7) Contact</h2>
          <p style={{ color: '#a1a1aa' }}>Questions about shipping or pickup?<br/>
          Discounts Buddy Pay Less Store<br/>
          2574 Old Covington Hwy Bldg A, Conyers, GA<br/>
          Phone: (470) 840-4014<br/>
          Email: discountsbuddy@gmail.com</p>
        </section>
      </div>
    </div>
  );
}
