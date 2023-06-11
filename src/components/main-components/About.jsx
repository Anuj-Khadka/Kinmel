import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/About.css";
import aboutImage from "../../assets/images/about-image.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-header">
          <h2 className="section-title">About Us</h2>
          <p className="slogan tertiary">
            Delivering Quality Products with Passion
          </p>
        </div>
        <div className="about-body">
          <div className="about-image-container">
            <img src={aboutImage} alt="About Us" className="about-image" />
          </div>
          <div className="about-text">
            <div className="about-boxes">
              <h3 className="about-title">Our Story</h3>
              <p className="about-description tertiary">
                In a world where style meets convenience, our online store
                brings together exquisite products crafted with passion. From
                fashion to home decor, discover curated collections that tell
                unique stories. Join our vibrant community, where elegance and
                inspiration await. Step into a world of extraordinary shopping
                and create unforgettable moments with us.
              </p>
            </div>
            <div className="about-boxes">
              <h3 className="about-title">Our Mission</h3>
              <p className="about-description tertiary">
              Our mission is to empower customers by providing a seamless online shopping experience, offering high-quality products, exceptional customer service, and fostering a sense of trust and satisfaction in every interaction.
              </p>
            </div>
            <NavLink to="/" className="cta-button">
              Shop Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
