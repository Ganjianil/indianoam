import React from "react";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-wrapper">
        {/* RIGHT SIDE (Top on Mobile): The Photo */}
        <div className="hero-image-container">
          <div className="image-border-effect">
            <img
              src="oamowner.jpeg"
              alt="Dr. Makala Satyanarayana"
              className="hero-doctor-photo"
            />
            <div className="hero-badge-floating">
              <span className="badge-year">30+</span>
              <span className="badge-text">Years Exp.</span>
            </div>
          </div>
        </div>

        {/* LEFT SIDE (Bottom on Mobile): Text Content */}
        <div className="hero-text">
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
    </section>
  );
};

export default Hero;
