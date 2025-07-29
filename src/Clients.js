import React, { useEffect, useState } from 'react';
import './clients.css';
import img1 from './Assets/Images/image3.webp';
import img2 from './Assets/Images/image4.webp';

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
    const [currentImage, setCurrentImage] = useState(testimonials[0].image);
    const [nextIndex, setNextIndex] = useState(1);
    const [fadeImage, setFadeImage] = useState(false);

    useEffect(() => {
    const timer = setInterval(() => {
        setFadeImage(true);

        setTimeout(() => {
        setIndex(nextIndex);
        setCurrentImage(testimonials[nextIndex].image);
        setNextIndex((nextIndex + 1) % testimonials.length);
        setFadeImage(false);
        }, 500); // duration matches CSS transition
    }, 5000);

    return () => clearInterval(timer);
    }, [nextIndex]);


  return (
    <section id="clients" className="clients-section">
        <div className="client-image-container">
  <div
    className={`client-image-layer ${fadeImage ? 'fade-out' : 'fade-in'}`}
    style={{ backgroundImage: `url(${currentImage})` }}
  />
</div>

        
        <div className="client-content">
            <div className={`slide-text ${fadeImage ? 'slide-out' : 'slide-in'}`}>
                <p className="testimonial-text">
                    <span className="quote-mark">“</span>
                        {testimonials[index].text}
                    <span className="quote-mark">”</span>
                </p>
                <p className="testimonial-author">{testimonials[index].author}</p>
            </div>
            
            {/* Fixed position outside the animated text */}
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


