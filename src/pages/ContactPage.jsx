import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactInfo from "../components/ContactInfo/ContactInfo";

const ContactPage = () => {
  return (
    <>
      <Header />
      <ContactForm />
      <ContactInfo />
      <Footer />
    </>
  );
};

export default ContactPage;
