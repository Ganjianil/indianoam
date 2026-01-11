import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-col about">
          <h3 className="footer-logo">
               Indian Oam Holistic Health Care<span>.</span>
          </h3>
          <p>
            Certified Acupuncture & Holistic Wellness specialist based in
            Vijayawada.
          </p>
        </div>

        <div className="footer-col links">
          <h4>Navigate</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
          </ul>
        </div>

        <div className="footer-col contact">
          <h4>Connect</h4>
          <p>📍 Ashok Nagar, Vijayawada</p>
          <p>📞 8985372009</p>
          <p>✉️ indianoam@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Indian Oam Holistic Health Care. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
