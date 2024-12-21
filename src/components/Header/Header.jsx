import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">RMax</div>
      <nav className="header__nav">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#solutions">Solutions</a>
      </nav>
      <div className="header__actions">
        <button className="btn login-btn">Login</button>
        <button className="btn primary-btn">Try For Free</button>
      </div>
    </header>
  );
};

export default Header;
