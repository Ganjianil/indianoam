import React from "react";

const Services = () => {
  const phone = "9000347369";

  const serviceList = [
    {
      title: "Dry Needling",
      src: "need.webp", // Local file in public folder
      desc: "Targeting myofascial trigger points to relieve deep muscle pain and tension.",
    },
    {
      title: "Cupping Therapy",
      src: "cuppi.webp", // Local file in public folder
      desc: "Traditional suction therapy to improve blood flow and reduce inflammation.",
    },
    {
      title: "Acupuncture for Pain",
      src: "body.jpg", // Local file in public folder
      desc: "Specialized root-cause cure for Back, Knee, and Cervical pain.",
    },
    {
      title: "Mental Wellness",
      src: "ment.webp", // Local file in public folder
      desc: "Counseling for depression, stress, and anxiety using Yoga Sakthi.",
    },
    {
      title: "Meditation & Stress",
      src: "medi.webp", // Local file in public folder
      desc: "Prana Sakthi training to achieve emotional and mental stability.",
    },
    {
      title: "Home Visit Therapy",
      src: "home.webp", // Local file in public folder
      desc: "Bringing professional drugless treatment to your doorstep in Vijayawada.",
    },
  ];

  const sendToWhatsApp = (serviceTitle) => {
    const message = encodeURIComponent(
      `Hello Dr. Oam, I am interested in ${serviceTitle}. Please share the details and available slots.`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-header">
          <span className="subtitle">Expert Drugless Therapy</span>
          <h2>Our Specialized Services</h2>
          <div className="underline"></div>
        </div>

        <div className="services-grid">
          {serviceList.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-img-container">
                {/* FIXED: Using service.src to match the array above */}
                <img src={service.src} alt={service.title} loading="lazy" />
                <div className="img-overlay">
                  <button
                    onClick={() => sendToWhatsApp(service.title)}
                    className="overlay-btn"
                  >
                    Enquire on WhatsApp
                  </button>
                </div>
              </div>
              <div className="service-info">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <button
                  className="service-whatsapp-btn"
                  onClick={() => sendToWhatsApp(service.title)}
                >
                  Book Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
