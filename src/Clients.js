import React from 'react';
/*import './clients.css';*/

export default function Clients() {
  const clientNames = ['ALDAR', 'Mubadala', 'Emaar', 'ADCB', 'FAB', 'Masdar'];

  return (
    <section id="clients" className="clients-section">
      <h2 className="clients-title">Our Clients</h2>
      <div className="clients-grid">
        {clientNames.map((name, i) => (
          <div key={i} className="client-card">
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}
