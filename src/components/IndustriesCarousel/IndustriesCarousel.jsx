// import React from "react";
// import "./IndustriesCarousel.css";

// import sports from "../../assets/icons/sports.jpg";

// const IndustriesCarousel = () => {
//   const industries = [
//     {
//       title: "Sports",
//       description: "From fitness studios to sports academies, RMax empowers sports businesses...",
//       image: <img src={sports} alt="Sports Icon" />,
//     },
//     {
//       title: "Healthcare & Wellness",
//       description: "Health and wellness service providers—from yoga instructors to clinics...",
//       image: "/assets/images/healthcare.jpg", // Replace with the correct image path
//     },
//     {
//       title: "Learning Activities",
//       description: "Tutors, educators, and learning centers—from music schools to art studios...",
//       image: "/assets/images/learning.jpg", // Replace with the correct image path
//     },
//   ];

//   return (
//     <section className="industries-carousel">
//       <h2>Empowering Service Providers Across Industries</h2>
//       <p>
//         Whether you're in sports, education, wellness, household services, or niche markets, our technology simplifies your business operations, making it easier for you to focus on what you do best.
//       </p>
//       <div className="carousel">
//         {industries.map((industry, index) => (
//           <div key={index} className="carousel-item">
//             <img src={industry.image} alt={industry.title} className="carousel-image" />
//             <h3>{industry.title}</h3>
//             <p>{industry.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default IndustriesCarousel;


import React from "react";
import "./IndustriesCarousel.css";

import sports from "../../assets/icons/sports.jpg";
import healthcare from "../../assets/icons/healthcare.jpg"; // Replace with actual path
import learning from "../../assets/icons/learning.jpg"; // Replace with actual path

const IndustriesCarousel = () => {
  const industries = [
    {
      title: "Sports",
      description: "From fitness studios to sports academies, RMax empowers sports businesses...",
      image: sports, // Use the imported image variable directly
    },
    {
      title: "Healthcare & Wellness",
      description: "Health and wellness service providers—from yoga instructors to clinics...",
      image: healthcare, // Use the imported image variable directly
    },
    {
      title: "Learning Activities",
      description: "Tutors, educators, and learning centers—from music schools to art studios...",
      image: learning, // Use the imported image variable directly
    },
  ];

  return (
    <section className="industries-carousel">
      <h2>Empowering Service Providers Across Industries</h2>
      <p>
        Whether you're in sports, education, wellness, household services, or niche markets, our technology simplifies your business operations, making it easier for you to focus on what you do best.
      </p>
      <div className="carousel">
        {industries.map((industry, index) => (
          <div key={index} className="carousel-item">
            <img src={industry.image} alt={industry.title} className="carousel-image" />
            <h3>{industry.title}</h3>
            <p>{industry.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesCarousel;
