import React, {useEffect, useState} from 'react';
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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);
    
    return (
        <div className="hero-slider">
  <div
    className="slider-track"
    style={{
      transform: `translateX(-${currentIndex * 100}%)`,
      transition: 'transform 0.5s ease-in-out',
    }}
  >
    {images.map((img, i) => (
      <img key={i} src={img} alt={`Slide ${i}`} className="slide-image" />
    ))}
  </div>
  {/* Overlay stays on top */}
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
          className={`line ${i === currentIndex ? "active" : ""}`}
          style={{ animationDuration: currentIndex === i ? "5s" : "0s" }}
        />
      ))}
    </div>
  </div>
</div>
    );
}