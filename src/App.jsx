// // import React from "react";
// // import HomePage from "./pages/HomePage";

// // function App() {
// //   return <HomePage />;
// // }

// // export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import FeaturesPage from "./pages/FeaturesPage";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/pricing" element={<PricingPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//         <Route path="/features" element={<FeaturesPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage/HomePage";
// import PricingPage from "./pages/PricingPage/PricingPage";
// import ContactPage from "./pages/ContactPage/ContactPage";
//import FeaturesPage from "./pages/FeaturesPage/FeaturesPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/features" element={<FeaturesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
