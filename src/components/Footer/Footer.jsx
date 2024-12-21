import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__columns">
        <div>
          <h4>Company</h4>
          <a href="#about">About us</a>
          <a href="#contact">Contact us</a>
          <a href="#careers">Careers</a>
        </div>
        <div>
          <h4>Download</h4>
          <a href="#app-store">App Store</a>
          <a href="#google-play">Google Play</a>
        </div>
        <div>
          <h4>Legal</h4>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
        </div>
      </div>
      <p>&copy; 2024 RMax. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
