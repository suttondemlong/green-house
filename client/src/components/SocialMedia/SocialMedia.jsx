import React, {useState} from 'react';
import "./SocialMedia.css"
import instagram from "../../assets/social-media/Instagram.png"
import facebook from "../../assets/social-media/Facebook.png"

function SocialMedia(props) {
  const [toggle, setToggle] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setToggle(true)
    setTimeout(() => {
      setToggle(false);
    }, 10000);
  }

  return (
    <div className="socialmedia-container">
      <h2 className='social-title'>SOCIAL MEDIA</h2>
      <div className='socialmedia-icons'>
      <img className='instagram' src={instagram} alt='instagram-logo'/>
        <img className='facebook' src={facebook} alt='facebook-logo' />
        </div>
      <div className='social-add'>add account</div>
      <button className='social-button' onClick={handleClick}>Delete My Account</button>
      {<h3 className="social-h3" style={{ color: (toggle===false) ? "white" : "black" }}>We're sad to see you leave!</h3>}
    </div>
  );
}

export default SocialMedia;