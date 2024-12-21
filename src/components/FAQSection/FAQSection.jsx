// import React, { useState } from "react";
// import "./FAQSection.css";
// import { useNavigate } from "react-router-dom";

// const FAQSection = () => {
//   const faqs = [
//     { question: "What is RMax?", answer: "RMax is a SaaS platform/ecosystem that lets any small to medium service business set up & manage their business quickly & easily." },
//     { question: "How does it work?", answer: "It provides tools for scheduling, client management, payments, and more in an integrated platform." },
//     { question: "How much does it cost?", answer: "RMax offers multiple pricing tiers to fit your business needs, starting at $17/month." },
//   ];

//   const [openIndex, setOpenIndex] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const filteredFaqs = faqs.filter((faq) =>
//     faq.question.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <section className="faq-section">
//       <h2>Frequently Asked Questions</h2>
//       <p>Find answers to common questions about our services and features.</p>
//       <p>For more details, contact our support team.</p>
//       <div className="faq-search">
//         <input
//           type="text"
//           placeholder="Ask Q! e.g. Tell me about key Features."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button className="faq-search-btn">
//           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
//             <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85a1.007 1.007 0 0 0-.115-.098zm-5.442.156a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"/>
//           </svg>
//         </button>
//       </div>
//       <div className="faq-list">
//         {filteredFaqs.map((faq, index) => (
//           <div key={index} className="faq-item">
//             <button className="faq-question" onClick={() => toggleFAQ(index)}>
//               {faq.question}
//             </button>
//             {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
//           </div>
//         ))}
//         {filteredFaqs.length === 0 && <p className="no-results">No results found.</p>}
//       </div>
//       <p>
//         Haven’t got your answer? <button className="btn primary-btn" onClick={() => navigate("/contact")}>
//             Get Started
//           </button>
//       </p>
//     </section>
//   );
// };

// export default FAQSection;

import React, { useState } from "react";
import "./FAQSection.css";
import { useNavigate } from "react-router-dom";

const FAQSection = () => {
  const navigate = useNavigate(); // Define the navigate function

  const faqs = [
    { question: "What is RMax?", answer: "RMax is a SaaS platform/ecosystem that lets any small to medium service business set up & manage their business quickly & easily." },
    { question: "How does it work?", answer: "It provides tools for scheduling, client management, payments, and more in an integrated platform." },
    { question: "How much does it cost?", answer: "RMax offers multiple pricing tiers to fit your business needs, starting at $17/month." },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <p>Find answers to common questions about our services and features.</p>
      <p>For more details, contact our support team.</p>
      <div className="faq-search">
        <input
          type="text"
          placeholder="Ask Q! e.g. Tell me about key Features."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="faq-search-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85a1.007 1.007 0 0 0-.115-.098zm-5.442.156a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"/>
          </svg>
        </button>
      </div>
      <div className="faq-list">
        {filteredFaqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </button>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
        {filteredFaqs.length === 0 && <p className="no-results">No results found.</p>}
      </div>
      <p>
        Haven’t got your answer?{" "}
        <button
          className="btn primary-btn"
          onClick={() => navigate("/contact")}
        >
          Get Started
        </button>
      </p>
    </section>
  );
};

export default FAQSection;
