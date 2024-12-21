import React from "react";
import "./PricingComparison.css";

const PricingComparison = () => {
  const features = [
    { feature: "Users", starter: "1", premium: "15" },
    { feature: "Branches", starter: "1", premium: "10" },
    { feature: "Courses", starter: "3", premium: "15/branch" },
    { feature: "Max. Students Allowed", starter: "25", premium: "500" },
    { feature: "Communication", starter: "Yes", premium: "Yes" },
  ];

  return (
    <section className="pricing-comparison">
      <h2>Flexible Plans, Transparent Pricing</h2>
      <p className="subheading">Find the Perfect Fit for You</p>
      <p className="highlight">30-day free trial with money-back guarantee.</p>
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Features</th>
            <th>Starter</th>
            <th>Premium</th>
          </tr>
        </thead>
        <tbody>
          {features.map((row, index) => (
            <tr key={index}>
              <td>{row.feature}</td>
              <td>{row.starter}</td>
              <td>{row.premium}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default PricingComparison;
