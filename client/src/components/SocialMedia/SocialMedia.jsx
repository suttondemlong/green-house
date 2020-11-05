import React, {useState, useEffect} from 'react';
import "./SocialMedia.css"
import instagram from "../../assets/social-media/Instagram.png"
import facebook from "../../assets/social-media/Facebook.png"

function SocialMedia(props) {
  const [toggle, setToggle] = useState(false)
  
  useEffect(() => {
    setTimeout(() => {
      setToggle(toggle);
    }, 10000);
    setToggle(false);

  }, []);

  const handleClick = (e) => {
    e.preventDefault()
    setToggle(true)
  }

  return (
    <div>
      <h2>SOCIAL MEDIA</h2>
      <img className='instagram' src={instagram} alt='instagram-logo'/>
      <img className='facebook' src={facebook} alt='facebook-logo' />
      <div className='social-add'>add account</div>
      <button className='social-button' onClick={handleClick}>Delete My Account</button>
      {(toggle === false) ? null : <h3>We're sad to see you leave!</h3>}
    </div>
  );
}

export default SocialMedia;