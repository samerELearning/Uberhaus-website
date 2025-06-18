import React from 'react';
import './services.css';

export default function Services() {
  return (
    <section id="services" className="services-section">
      <h2 className="services-title">Services</h2>
      <div className="services-container">
        <div className="service-card">
          <h3>Buy</h3>
          <p>
            We provide tailored listings and expert guidance to ensure your property purchase is effortless and enjoyable.
          </p>
        </div>
        <div className="service-card">
          <h3>Sell</h3>
          <p>
            Seamless property transactions with our bespoke listings and expert insights, designed for discerning buyers.
          </p>
        </div>
        <div className="service-card">
          <h3>Rent</h3>
          <p>
            Discover exclusive rental listings and personalized service designed for exclusive clients.
          </p>
        </div>
      </div>
    </section>
  );
}