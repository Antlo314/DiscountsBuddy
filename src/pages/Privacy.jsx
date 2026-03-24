import React, { useEffect } from 'react';

export default function Privacy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem', color: '#fff', lineHeight: '1.8', minHeight: '60vh' }}>
      <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '3rem', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>Privacy Policy</h1>
      <p style={{ color: '#a1a1aa', marginBottom: '3rem', fontSize: '1.1rem' }}>This Privacy Policy explains how Discounts Buddy Pay Less Store collects, uses, and protects your information when you visit our website, sign up for deal alerts, or contact us.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-gold)', fontFamily: '"Playfair Display", serif' }}>1) Information We Collect</h2>
          <p style={{ color: '#a1a1aa' }}>We may collect the following categories of information:<br/>
          • <strong>Contact information:</strong> email address and (if provided) phone number for deal alerts or support.<br/>
          • <strong>Message details:</strong> information you submit through contact forms or support requests.<br/>
          • <strong>Usage data:</strong> basic device and browsing data (e.g., pages viewed, approximate location, browser type) to improve performance and security.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-gold)', fontFamily: '"Playfair Display", serif' }}>2) How We Use Your Information</h2>
          <p style={{ color: '#a1a1aa' }}>We use information to:<br/>
          • Send deal alerts and promotional messages only when you opt in.<br/>
          • Respond to questions, requests, and customer support inquiries.<br/>
          • Maintain site security, prevent fraud, and monitor for abuse.<br/>
          • Improve site experience, content, and performance.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-gold)', fontFamily: '"Playfair Display", serif' }}>3) Cookies & Tracking</h2>
          <p style={{ color: '#a1a1aa' }}>We may use cookies and similar technologies to remember preferences, measure site performance, and help prevent fraud. You can control cookies through your browser settings. Disabling cookies may impact site functionality.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-gold)', fontFamily: '"Playfair Display", serif' }}>4) Sharing of Information</h2>
          <p style={{ color: '#a1a1aa' }}>We may share information only as needed to operate the site and services, such as:<br/>
          • <strong>Service providers:</strong> email/SMS, analytics, hosting, and payment processing partners.<br/>
          • <strong>Legal requirements:</strong> if required by law or to protect rights, safety, and security.<br/>
          We do not sell your personal information.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-gold)', fontFamily: '"Playfair Display", serif' }}>5) Email & SMS Communications</h2>
          <p style={{ color: '#a1a1aa' }}>If you sign up for deal alerts, we may send emails and/or SMS messages about new inventory, discounts, and promotions. You can unsubscribe at any time using the link in emails or by following opt-out instructions in SMS messages.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-gold)', fontFamily: '"Playfair Display", serif' }}>6) Data Security</h2>
          <p style={{ color: '#a1a1aa' }}>We use reasonable administrative, technical, and physical safeguards to protect information. No method of transmission or storage is 100% secure, but we work to protect your information against unauthorized access and misuse.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-gold)', fontFamily: '"Playfair Display", serif' }}>7) Data Retention</h2>
          <p style={{ color: '#a1a1aa' }}>We keep information only as long as necessary for the purposes described in this policy, unless a longer retention period is required by law.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-gold)', fontFamily: '"Playfair Display", serif' }}>8) Your Choices & Rights</h2>
          <p style={{ color: '#a1a1aa' }}>Depending on your location, you may have the right to:<br/>
          • Request access to the personal information we hold about you.<br/>
          • Request correction or deletion of your information.<br/>
          • Opt out of marketing communications.<br/>
          To make a request, contact us using the details below.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-gold)', fontFamily: '"Playfair Display", serif' }}>9) Children’s Privacy</h2>
          <p style={{ color: '#a1a1aa' }}>Our site is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided personal information, contact us so we can delete it.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-gold)', fontFamily: '"Playfair Display", serif' }}>10) Changes to This Policy</h2>
          <p style={{ color: '#a1a1aa' }}>We may update this Privacy Policy from time to time. We will update the “Last updated” date when changes are made. Continued use of the site after updates means you accept the revised policy.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-gold)', fontFamily: '"Playfair Display", serif' }}>11) Contact Us</h2>
          <p style={{ color: '#a1a1aa' }}>Discounts Buddy Pay Less Store<br/>
          2574 Old Covington Hwy Bldg A, Conyers, GA<br/>
          Phone: (470) 840-4014<br/>
          Email: discountsbuddy@gmail.com</p>
        </section>
      </div>
    </div>
  );
}
