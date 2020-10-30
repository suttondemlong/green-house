import React from "react";
import "./Footer.css";
import image from "../../../assets/downarrow.png";

function Footer(props) {
  return (
    <div className="footer-container">
      <div className="footer-flex-container">
        <div className="left-container">
          <h1 className="footer-logo">GreenHouse</h1>
          <p className="contact-links">
            Accessibility Help | Privacy Statement | Cookies Settings
          </p>
        </div>
        <div className="aboutUs-div">
          <p className="contact-us">Contact Us</p>
          <p className="subscribe">Subscribe to our Newsletter</p>
          <p className="expert">Become an Expert</p>
          <p className="support">Support</p>
          <p className="language">
            Language <img className="down-arrow" src={image} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
