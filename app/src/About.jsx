import React from "react";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left Side: Visual Credentials */}
        <div className="about-visuals">
          <div className="main-image-wrapper">
            <img
              src="oam35.jpeg"
              alt="Dr. Makala Satyanarayana"
              className="doctor-profile-img"
            />
            <div className="experience-badge-premium">
              <span className="exp-number">30+</span>
              <span className="exp-label">Years of Expertise</span>
            </div>
          </div>
          <div className="credential-dots"></div>
        </div>

        {/* Right Side: Professional Biography */}
        <div className="about-content">
          <header className="about-header">
            <span className="section-tag">Meet the Director</span>
            <h2 className="doctor-name">Dr. Makala Satyanarayana</h2>
            <p className="doctor-titles">
              M.Sc. Acupuncture, Ph.D. in Health Care Management
            </p>
          </header>

          <div className="about-body">
            <p>
              Founder and Chairman of{" "}
              <strong>Yoga Sakthi Sadhana Samithi</strong>, Vijayawada. Dr.
              Satyanarayana is a renowned expert in Acupuncture, Yoga Sakthi
              Chikitsa, and Holistic Health Care.
            </p>
            <p>
              His life's work is dedicated to drugless therapy, identifying root
              causes, and helping patients avoid unnecessary surgeries through
              traditional science.
            </p>
          </div>

          <div className="specialties-grid">
            <div className="specialty-item">
              <span className="check">✓</span>
              <span>Acupuncture & Acupressure</span>
            </div>
            <div className="specialty-item">
              <span className="check">✓</span>
              <span>Yoga Sakthi Chikitsa</span>
            </div>
            <div className="specialty-item">
              <span className="check">✓</span>
              <span>Pulse Diagnosis</span>
            </div>
            <div className="specialty-item">
              <span className="check">✓</span>
              <span>5 Element 12 Organ Therapy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
