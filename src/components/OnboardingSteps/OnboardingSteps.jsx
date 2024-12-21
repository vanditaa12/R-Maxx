import React from "react";
import "./OnboardingSteps.css";

const OnboardingSteps = () => {
  const steps = [
    {
      id: 1,
      title: "Claim your preset profile",
      description:
        "Unlock tailored service and seamlessly elevate your experience by claiming your preset profile today.",
    },
    {
      id: 2,
      title: "Add services",
      description:
        "Make use of multiple scheduling, pricing options to add services. Choose from pre-created scheduling templates.",
    },
    {
      id: 3,
      title: "Build Website",
      description:
        "Build your online storefront your way, seamlessly integrating all services for a cohesive and efficient client experience.",
    },
  ];

  return (
    <section className="onboarding">
      <h2>Onboard business in 3 simple steps</h2>
      <div className="onboarding__steps">
        {steps.map((step) => (
          <div key={step.id} className="onboarding__step">
            <span className="step-number">{step.id}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OnboardingSteps;
