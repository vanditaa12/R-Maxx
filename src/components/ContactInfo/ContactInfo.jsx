// import React from "react";
// import "./ContactInfo.css";
// import { useNavigate } from "react-router-dom";

// const ContactInfo = () => {
//   return (
//     <section className="contact-info">
//       <h3>Contact Info</h3>
//       <div className="info-details">
//         <div>
//           <h4>Email Address</h4>
//           <p>support@RMax.com</p>
//           <p>Assistance hours: Monday - Friday, 6 am to 8 pm EST</p>
//         </div>
//         <div>
//           <h4>Contact Number</h4>
//           <p>+91-8657491236</p>
//           <p>Assistance hours: Monday - Friday, 6 am to 8 pm EST</p>
//         </div>
//       </div>
//       <button className="message-btn" onClick={() => navigate("/features")}>Leave us a Message →</button>
//     </section>
//   );
// };

// export default ContactInfo;

import React from "react";
import "./ContactInfo.css";
import { useNavigate } from "react-router-dom";

const ContactInfo = () => {
  const navigate = useNavigate(); // Define the navigate function

  return (
    <section className="contact-info">
      <h3>Contact Info</h3>
      <div className="info-details">
        <div>
          <h4>Email Address</h4>
          <p>support@RMax.com</p>
          <p>Assistance hours: Monday - Friday, 6 am to 8 pm EST</p>
        </div>
        <div>
          <h4>Contact Number</h4>
          <p>+91-8657491236</p>
          <p>Assistance hours: Monday - Friday, 6 am to 8 pm EST</p>
        </div>
      </div>
      <button
        className="message-btn"
        onClick={() => navigate("/features")} // Proper navigation
      >
        Leave us a Message →
      </button>
    </section>
  );
};

export default ContactInfo;
