import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const AboutPage = () => {
  return (
    <div class="centeredDiv">


      {/* About Content */}
      <section className="about-content">
        <h2>About Us</h2>
        <div className="about-features">
          <div className="feature">
            <h3>Fast Delivery</h3>
            <p>We ensure your food reaches you hot and fresh in no time.</p>
          </div>
          <div className="feature">
           
            <h3>Variety of Choices</h3>
            <p>From fast food to gourmet meals, we have something for everyone.</p>
          </div>
          <div className="feature">
            <h3>Easy Payments</h3>
            <p>Multiple payment options for a seamless ordering experience.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
