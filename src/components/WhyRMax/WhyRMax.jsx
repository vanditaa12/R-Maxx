import React from "react";
import "./WhyRMax.css";
import scheduleIcon from "../../assets/icons/scheduleIcon.png";
import printIcon from "../../assets/icons/printIcon.jpg";
import clientIcon from "../../assets/icons/clientIcon.png";

const WhyRMax = () => {
  const features = [
    {
      title: "Scheduling",
      description: "Manage appointments, classes, and events, workshops with...",
      icon: <img src={scheduleIcon} alt="Scheduling Icon" />,
      link: "View details",
    },
    {
      title: "Client Management & CRM",
      description: "Keep track of customer data, preferences, and interactions to...",
      icon: <img src={clientIcon} alt="Client Management Icon" />,
      link: "View details",
    },
    {
      title: "AI Powered Insights",
      description: "Know exactly what is happening in your business and get actionable...",
      icon: "⭐", // You can replace this with another image/icon
      link: "View details",
    },
    {
      title: "Marketing & Engagement Tools",
      description: "Boost client retention and grow your business with integrated...",
      icon: "📈", // You can replace this with another image/icon
      link: "View details",
    },
    {
      title: "Custom Branded Website",
      description: "Create a fully personalized website for your business...",
      icon: "🌐", // You can replace this with another image/icon
      link: "View details",
    },
    {
        title: "Billing & Payments",
        description: "Streamline invoicing and payments with automated workflows, reducing...",
        icon: <img src={printIcon} alt="Client Management Icon" />,
        link: "View details",
      },
  ];

  return (
    <section className="why-rmax">
      <h2>Why RMax?</h2>
      <p>
        RMax is designed to simplify and transform the way service businesses operate. From onboarding, scheduling, and billing to client management, payments, and growth, RMax integrates everything in one easy-to-use platform connecting all the stakeholders.
      </p>
      <div className="why-rmax__grid">
        {features.map((feature, index) => (
          <div key={index} className="why-rmax__card">
            <div className="why-rmax__icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <a href="#">{feature.link} &rarr;</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyRMax;
