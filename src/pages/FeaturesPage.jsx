import React from "react";
import Header from "../components/Header/Header";
//import HeroSection from "../components/HeroSection/HeroSection";
import FeaturesMenu from "../components/FeaturesMenu/FeaturesMenu";
import OnboardingSteps from "../components/OnboardingSteps/OnboardingSteps";
import WhyRMax from "../components/WhyRMax/WhyRMax";
import IndustriesCarousel from "../components/IndustriesCarousel/IndustriesCarousel";
import PricingSection from "../components/PricingSection/PricingSection";
import MobileAppSection from "../components/MobileAppSection/MobileAppSection";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <FeaturesMenu />
      <OnboardingSteps />
      <WhyRMax />
      <IndustriesCarousel />
      <PricingSection />
      <MobileAppSection />
      <Footer />
    </>
  );
};

export default HomePage;
