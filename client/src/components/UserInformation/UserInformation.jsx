import React, { useContext, useState } from 'react';
import {Link} from "react-router-dom"
import "./UserInformation.css"
import { LoginUserContext } from "../../components/LoginUser/LoginUserContext"
import EditImageComp from '../EditImageComp/EditImageComp';


function UserInformation(props) {
  const [currentUser] = useContext(LoginUserContext)
  const [toggle, setToggle] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setToggle(true)
  }

  return (
    <div className="userinformation">
      <div className="user-left-div">
        <div className="user-info-mask">
        <img className='userinfo-image' src={currentUser.imgURL} alt='User' />
        </div>
        <button className='user-change' onClick={handleClick}>Change Photo</button>
        {(toggle === false) ? <EditImageComp /> : <EditImageComp style={{display: "none"}} />}
      </div>
      <div className="user-right-div">
        <p className='user-friends'>32 Friends</p> 
        <div className="user-button-container">
      <button className="user-view-button" disabled>
        View Friends
        </button>
        <button className="user-add-button" disabled>
            Add Friends
        </button>
        </div>
        </div>
    </div>
  );
}

export default UserInformation;