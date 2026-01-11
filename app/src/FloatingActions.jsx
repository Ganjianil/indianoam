import React from "react";

const FloatingActions = () => {
  const phone = "9000347369"; //
  const email = "indianoam@gmail.com"; //

  return (
    <div className="fab-permanent-container">
      <a
        href={`https://wa.me/${phone}`}
        className="fab-item whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        <span>💬</span>
      </a>
      <a href={`mailto:${email}`} className="fab-item mail">
        <span>✉️</span>
      </a>
      <a href={`tel:${phone}`} className="fab-item call">
        <span>📞</span>
      </a>
    </div>
  );
};

export default FloatingActions;
