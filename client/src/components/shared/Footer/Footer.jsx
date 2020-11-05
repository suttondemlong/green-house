import React from "react";
import "./Footer.css";
import image from "../../../assets/downarrow.png";
import pinterest from "../../../assets/social-media/Pinterest.png"
import instagram from "../../../assets/social-media/Instagram.png"
import twitter from "../../../assets/social-media/Twitter.png"
import facebook from "../../../assets/social-media/Facebook.png"
import linkedin from "../../../assets/social-media/LinkedIN.png"

function Footer(props) {
  return (
    <div className="footer-container">
      <div className="footer-flex-container">
        <div className="left-container">
          <h1 className="footer-logo">GreenHouse</h1>
          <img className='pinterest' src={pinterest} alt='pinterest-logo'/>
          <img className='instagram' src={instagram} alt='instagram-logo'/>
          <img className='twitter' src={twitter} alt='twitter-logo'/>
          <img className='facebook' src={facebook} alt='facebook-logo'/>
          <img className='linkedin' src={linkedin} alt='linkedin-logo'/>
          
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
            Language <img className="down-arrow" src={image} alt="down arrow" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
