import React from "react";
import "./PricingSection.css";

const PricingSection = () => {
  return (
    <section className="pricing-section">
      <h2>Choose Plan That’s Right For You</h2>
      <p>
        Simple and transparent pricing. Start for free, upgrade when you love it.
        <br />
        <span className="highlight">30 day free trial in a button</span>
      </p>
      <div className="cta-row">
        <p>
          Running a <strong>Growth Business</strong> or <strong>Enterprise</strong>? Let’s connect -{" "}
          <button className="talk-to-sales">Talk to Sales</button>
        </p>
      </div>
      <div className="toggle-row">
        <label>
          Monthly <input type="checkbox" /> Yearly <span className="save">SAVE 25%</span>
        </label>
      </div>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>Starter</h3>
          <p className="price">$17 <span>/ month</span></p>
          <p>billed monthly</p>
          <ul>
            <li>Commercial License</li>
            <li>100+ HTML UI Elements</li>
            <li>Unlimited Domain Support</li>
          </ul>
        </div>
        <div className="pricing-card premium">
          <h3>Premium</h3>
          <p className="price">$88 <span>/ month</span></p>
          <p>billed monthly</p>
          <ul>
            <li>Commercial License</li>
            <li>100+ HTML UI Elements</li>
            <li>Unlimited Domain Support</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
