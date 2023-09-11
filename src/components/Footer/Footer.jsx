import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo.png";
// import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineFacebook, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai';


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="first">
          <img src={Logo} alt="Logo footer" />
          <p>
          Empowering your fitness journey at The FitClub. Discover classes, top-notch equipment, and personalized training for a healthier lifestyle.
          </p>
        </div>
        <div className="second">
          <nav className="footer-navbar">
            <h1>Menu</h1>
            <ul className="footer-menu">
              <li><a href="#">Home</a></li>
              <li><a href="#">Programs</a></li>
              <li><a href="#">Why us</a></li>
              <li><a href="#">Plans</a></li>
              <li><a href="#">Testimonial</a></li>
            </ul>
          </nav>
        </div>
        <div className="third">
          <h1>Contact</h1>
          <p>
            <strong>Phone:</strong> <span id="phone-number">***/****/****</span>
          </p>
          <p>State</p>
          <p>Location</p>
          <p>City, Street</p>
          {/* <AiFillFacebook/> */}
          <div className="social">
            <AiOutlineFacebook className="icon"/>
            <AiOutlineInstagram className="icon"/>
            <AiFillYoutube className="icon"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
