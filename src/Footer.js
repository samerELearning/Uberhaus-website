import React from 'react';
import './footer.css';
import footerImage from './Assets/Images/image2.jpg';

export default function Footer() {
  return (
    <footer className="footer-section" style={{ backgroundImage: `url(${footerImage})` }}>
      <div className="footer-overlay">
        <div className="footer-top">
          <div className="footer-brand">Uberhaus</div>
          <div className="footer-text">Your dream <br /> destination is waiting</div>
          <div className="footer-contact">
            <div>
              <p><strong>Address</strong><br />B1-114, Regus Office, Cubes Park, Abu Dhabi</p>
              <p><strong>Email us</strong><br />Info@uberhaus.com</p>
            </div>
            <div>
              <p><strong>Instagram</strong><br />uberhaus.realestate</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© Uberhaus, 2025</p>
          <div className="footer-links">
            <a href="#">Linkedin</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
