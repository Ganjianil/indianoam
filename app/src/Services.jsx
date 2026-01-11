import React from "react";

const Services = () => {
  const phone = "8985372009";

  const serviceList = [
    {
      title: "Yoga Sakthi",
      src: "yokashak.webp",
      desc: "Harnessing internal energy through traditional Yoga Sakthi Chikitsa for holistic healing.",
    },
    {
      title: "Acupressure",
      src: "accupresure.jpg",
      desc: "Applying precise pressure to key points to stimulate the body's natural self-curative abilities.",
    },
    {
      title: "Multi-Therapies",
      src: "multi.webp",
      desc: "A combined drugless approach using multiple traditional sciences for root-cause cures.",
    },
    {
      title: "Mental Wellness",
      src: "ment.webp",
      desc: "Counseling for depression, stress, and anxiety using Yoga Sakthi principles.",
    },
    {
      title: "Meditation & Stress",
      src: "medi.webp",
      desc: "Prana Sakthi training to achieve lasting emotional and mental stability.",
    },
    {
      title: "Home Visit Therapy",
      src: "home.webp",
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
