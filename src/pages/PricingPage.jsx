import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PricingComparison from "../components/PricingComparison/PricingComparison";
import FAQSection from "../components/FAQSection/FAQSection";

const PricingPage = () => {
  return (
    <>
      <Header />
      <PricingComparison />
      <FAQSection />
      <Footer />
    </>
  );
};

export default PricingPage;
