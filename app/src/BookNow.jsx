import React from "react";

const BookNow = () => {
  const phone = "9000347369";
  const email = "indianoam@gmail.com";

  return (
    <section className="booking-section" id="contact">
      <div className="booking-container">
        <div className="booking-header">
          <h2>Book Your Appointment</h2>
          <div className="header-line"></div>
        </div>

        <div className="booking-grid">
          {/* Left: Interactive Form */}
          <div className="booking-card form-card">
            <h3>Send a Message</h3>
            <form className="appointment-form">
              <div className="input-group">
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="input-group">
                <input type="tel" placeholder="Phone Number" required />
              </div>
              <div className="input-group">
                <select required>
                  <option value="">Select Treatment</option>
                  <option value="cupping">Cupping Therapy</option>
                  <option value="needling">Dry Needling</option>
                  <option value="pain">Back/Knee Pain</option>
                  <option value="mental">Stress & Depression</option>
                </select>
              </div>
              <div className="input-group">
                <textarea
                  placeholder="Describe your health concern..."
                  rows="4"
                ></textarea>
              </div>
              <button type="submit" className="confirm-btn">
                Confirm Booking
              </button>
            </form>
          </div>

          {/* Right: Location & Details */}
          <div className="booking-card info-card">
            <div className="map-holder">
              <iframe
                title="Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.4385150892!2d80.6628!3d16.5062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDMwJzIyLjMiTiA4MMKwMzknNDYuMSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: "15px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="contact-details-list">
              <div className="detail-item">
                <span className="icon">📍</span>
                <p>
                  <strong>Address:</strong> 11-165, Ashok Nagar, Vijayawada -
                  520007
                </p>
              </div>
              <div className="detail-item">
                <span className="icon">📞</span>
                <p>
                  <strong>Contact:</strong> {phone}
                </p>
              </div>
              <div className="detail-item">
                <span className="icon">✉️</span>
                <p>
                  <strong>Email:</strong> {email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookNow;
