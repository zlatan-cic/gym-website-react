import React from "react";
import "./Header.css";

// Import Image
import Logo from "../../assets/logo.png"

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="Logo Image" />
      <nav className="header-navbar">
        <ul className="header-menu">
          <li>Home</li>
          <li>Programs</li>
          <li>Why us</li>
          <li>Plans</li>
          <li>Testimonial</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
