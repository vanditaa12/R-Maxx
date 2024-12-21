import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>Maximize Your Impact <span>Business with RMax</span></h1>
        <p>
          Enhance your business with RMax's all-in-one platform—streamlining client
          engagement, automating workflows, and fueling growth.
        </p>
        <div className="hero__actions">
          <button className="btn primary-btn">Get Started</button>
          <button className="btn">Book a Demo</button>
        </div>
      </div>
      <div className="hero__features">
        <span>Seamless Onboarding</span>
        <span>Client Engagement</span>
        <span>Generate Report</span>
        <span>Revenue Growth</span>
      </div>
    </section>
  );
};

export default HeroSection;
