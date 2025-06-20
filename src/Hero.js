import React, { useEffect, useRef, useState } from 'react';
import './hero.css';
import image1 from './Assets/Images/image1.jpg';
import image2 from './Assets/Images/image5.jpg';
import image3 from './Assets/Images/image3.jpg';
import logo from './Assets/Images/logo.png';


const images = [image1, image2, image3];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setIsTransitioning(true);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === images.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500);
    }
  }, [currentIndex]);

  const allImages = [...images, images[0]];
  const displayIndex = currentIndex % images.length;

  return (
    <div className="hero-slider">
      <div
        ref={sliderRef}
        className="slider-track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
        }}
      >
        {allImages.map((img, i) => (
          <img key={i} src={img} alt={`Slide ${i}`} className="slide-image" />
        ))}
      </div>

      <div className="hero-overlay">
        <header className="hero-header">
          <img src={logo} alt="Uberhaus Logo" className="logo" />

          <nav className="nav desktop-nav">
            <a href="#services">Services</a>
            <a href="#clients">Clients</a>
            <a href="#about">About</a>
          </nav>

          <button
            className="burger"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            ☰
          </button>
        </header>

        {menuOpen && (
          <div className="mobile-nav">
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#clients" onClick={() => setMenuOpen(false)}>Clients</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          </div>
        )}

        <div className="image-indicator">
          {images.map((_, i) => (
            <div key={i} className="line-wrapper">
              <div className={`line-fill ${i === displayIndex ? 'active' : ''}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


