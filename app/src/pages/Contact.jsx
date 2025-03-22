import React from "react";
import "./Home.css";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <section className="contact-section">
        <h1>Contact Us</h1>
        <hr />
        <p>Have questions or need support? Reach out to us!</p>
        <div className="contact-details">
          <p>Email: support@fooddelivery.com</p>
          <p>Phone: +1 (234) 567-890</p>
          <p>Address: 123 Food Street, City, Country</p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
