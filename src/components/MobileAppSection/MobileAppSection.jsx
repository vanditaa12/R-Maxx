// import React from "react";
// import "./MobileAppSection.css";
// import appstore from "../../assets/icons/appstore.jpg";
// import googleplay from "../../assets/icons/googleplay.png";

// const MobileAppSection = () => {
//   return (
//     <section className="mobile-app-section">
//       <h2>Manage Your Business On the Go</h2>
//       <p>
//         With free Business Mobile App, you can manage your entire service business from anywhere. Stay connected and stay in control, no matter where your day takes you.
//       </p>
//       <div className="app-buttons">
//         <img src="/assets/icons/appstore.jpg" alt="App Store" />
//         <img src="/assets/icons/googleplay.png" alt="Google Play" />
//       </div>
//       <div className="faq-section">
//         <h3>Frequently Asked Questions</h3>
//         <p>Find answers to common questions about our services and features.</p>
//         <p>For more details, contact our support team.</p>
//       </div>
//     </section>
//   );
// };

// export default MobileAppSection;


import React from "react";
import "./MobileAppSection.css";
import appstore from "../../assets/icons/appstore.jpg"; // Correct path to App Store image
import googleplay from "../../assets/icons/googleplay.png"; // Correct path to Google Play image

const MobileAppSection = () => {
  return (
    <section className="mobile-app-section">
      <h2>Manage Your Business On the Go</h2>
      <p>
        With free Business Mobile App, you can manage your entire service business from anywhere. Stay connected and stay in control, no matter where your day takes you.
      </p>
      <div className="app-buttons">
        <img src={appstore} alt="App Store" /> {/* Use imported variable */}
        <img src={googleplay} alt="Google Play" /> {/* Use imported variable */}
      </div>
      <div className="faq-section">
        <h3>Frequently Asked Questions</h3>
        <p>Find answers to common questions about our services and features.</p>
        <p>For more details, contact our support team.</p>
      </div>
    </section>
  );
};

export default MobileAppSection;
