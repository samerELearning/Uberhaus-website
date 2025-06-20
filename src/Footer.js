import React from 'react';
import './footer.css';
import footerImage from './Assets/Images/image2.jpg';

export default function Footer() {
  return (
    <footer className="footer-section" style={{ backgroundImage: `url(${footerImage})` }}>
      <div className="footer-overlay">
        <div className="footer-top-stacked">
            <div className="footer-brand">Uberhaus</div>
            <div className="footer-text">Your dream <br /> destination is waiting</div>
            <div className="footer-contact">
                <p>B1-114, Regus Office, Cubes Park, Abu Dhabi</p>
                <p>Info@uberhaus.com</p>
                <p>Instagram: uberhaus.realestate</p>
            </div>
        </div>



        <div className="footer-bottom">
          <p>© Uberhaus, 2025</p>
          <div className="footer-links">
            <a href="#">Linkedin</a>
            <a href="https://www.instagram.com/uberhaus.realestate/">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

