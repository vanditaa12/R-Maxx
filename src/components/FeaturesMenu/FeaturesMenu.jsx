import React from "react";
import "./FeaturesMenu.css";

const FeaturesMenu = () => {
  const features = [
    {
      category: "Discover",
      items: [
        "Custom Branded Website",
        "User Mobile App",
        "Business Webpage",
      ],
    },
    {
      category: "Manage",
      items: [
        "Courses",
        "Classes",
        "Appointments",
        "Services",
        "Retreats",
        "Payments",
        "Design Tools",
        "Communication",
        "Trail Session",
        "Staff Roles",
        "Workshops",
        "Reporting Tools",
        "Multi-Location",
        "Events",
      ],
    },
    {
      category: "Grow",
      items: ["AI Marketing Tools", "Social Media Integration", "CRM"],
    },
  ];

  return (
    <div className="features-menu">
      <div className="menu-container">
        {features.map((feature, index) => (
          <div key={index} className="menu-category">
            <h4>{feature.category}</h4>
            <ul>
              {feature.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button className="see-all-features-btn">See all features →</button>
    </div>
  );
};

export default FeaturesMenu;
