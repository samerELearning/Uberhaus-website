import React from 'react';
//import './about.css';
import aboutImage from './Assets/Images/image5.jpg';

export default function About() {
  return (
    <section id="about" className="about-section" style={{ backgroundImage: `url(${aboutImage})` }}>
      <div className="about-overlay">
        <div className="about-text">
          <h2>Our <br />story</h2>
          <p>
            At Uberhaus, we redefine the art of real estate. Our mission is to provide an unparalleled
            experience for discerning buyers and sellers in the luxury market. With an understanding of
            the affluent lifestyle, our expert team curates exclusive listings that cater to your unique needs.
            Whether you're seeking a stunning waterfront villa or a chic urban penthouse, we offer personalized
            guidance every step of the way, ensuring your property journey is as seamless as it is rewarding.
          </p>
        </div>
      </div>
    </section>
  );
}
