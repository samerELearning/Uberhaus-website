import React, { useEffect, useRef, useState } from 'react';
import "./hero.css";
import image1 from "./Assets/Images/image1.jpg";
import image2 from "./Assets/Images/image2.jpg";
import image3 from "./Assets/Images/image3.jpg";
import image4 from "./Assets/Images/image4.PNG";
import image5 from "./Assets/Images/image5.jpg";
import logo from "./Assets/Images/logo.png";

const images = [image1, image2, image3];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setIsTransitioning(true);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // When we reach the cloned slide (index === images.length), reset instantly to 0
    if (currentIndex === images.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500); // Match transition duration
    }
  }, [currentIndex]);

  const allImages = [...images, images[0]]; // Clone first image at end

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

      {/* Overlay */}
      <div className="hero-overlay">
        <header className="hero-header">
          <img src={logo} alt="Uberhaus Logo" className="logo" />
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#clients">Clients</a>
            <a href="#about">About</a>
          </nav>
        </header>
        <div className="image-indicator">
          {images.map((_, i) => (
            <div
              key={i}
              className={`line ${i === currentIndex % images.length ? 'active' : ''}`}
              style={{
                animationDuration:
                  i === currentIndex % images.length ? '5s' : '0s',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
