import React from "react";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="container">
          <span className="hero-subtitle">CERTIFIED PROFESSIONAL</span>
          <h1 className="hero-title">Holistic Healing & Wellness</h1>
          <p className="hero-description">
            Specializing in Acupuncture, Yoga Sakthi Chikitsa, and Root Cause
            Cures under the expert guidance of{" "}
            <strong>Dr. Makala Satyanarayana</strong>.
          </p>
          <div className="hero-btn-group">
            <a href="#gallery" className="btn-primary">
              View Gallery
            </a>
            <a href="#about" className="btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Visual Badge for Trust */}
      <div className="hero-badge">
        <span className="badge-year">30+</span>
        <span className="badge-text">Years Experience</span>
      </div>
    </section>
  );
};

export default Hero;
