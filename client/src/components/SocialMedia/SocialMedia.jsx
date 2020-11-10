import React, { useState, useContext } from 'react';
import {Link, Redirect} from "react-router-dom"
import "./SocialMedia.css"
import instagram from "../../assets/social-media/Instagram.png"
import facebook from "../../assets/social-media/Facebook.png"
import { LoginUserContext } from "../../components/LoginUser/LoginUserContext"
import {deleteUser} from "../../services/users"

function SocialMedia(props) {
  const currentUser = useContext(LoginUserContext)
  const [isDeleted, setIsDeleted] = useState(false)

  if (isDeleted) {
    return <Redirect to={'/'} />
    }

  const handleDelete = async () => {
    await deleteUser(currentUser._id)
    setIsDeleted(!isDeleted)
  }

  return (
    <div className="socialmedia-container">
      <h2 className='social-title'>SOCIAL MEDIA</h2>
      <div className='socialmedia-icons'>
      <img className='instagram' src={instagram} alt='instagram-logo'/>
        <img className='facebook' src={facebook} alt='facebook-logo' />
      </div>
      <Link to="/signup">
      <div className='social-add'>add account</div>
      </Link>
      <button className='social-button' onClick={handleDelete}>Delete My Account</button>
      <div className="social-h3"></div>
    </div>
  );
}

export default SocialMedia;