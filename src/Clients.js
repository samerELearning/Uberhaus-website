import React, { useEffect, useState } from 'react';
import './clients.css';
import img1 from './Assets/Images/image3.jpg';
import img2 from './Assets/Images/image4.PNG';

const testimonials = [
  {
    text: "An exquisite luxury residence featuring personalized services from Uberhaus real estate,",
    author: "Adam Neuman",
    image: img1,
  },
  {
    text: "Uberhaus exceeded expectations. Their team made our dream home a reality.",
    author: "Lina Roberts",
    image: img2,
  },
];

export default function Clients() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="clients" className="clients-section">
      <div className="client-image" style={{ backgroundImage: `url(${testimonials[index].image})` }} />
      <div className="client-content">
        <p className="testimonial-text">{testimonials[index].text}</p>
        <p className="testimonial-author">{testimonials[index].author}</p>
        <div className="testimonial-indicator">
          {testimonials.map((_, i) => (
            <div key={i} className="indicator-bar">
              <div className={`indicator-fill ${i === index ? 'active' : ''}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

