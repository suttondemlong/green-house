import React, {useContext} from 'react';
import "./UserInformation.css"
import { LoginUserContext } from "../../components/LoginUser/LoginUserContext"


function UserInformation(props) {
  const [currentUser] = useContext(LoginUserContext)
  return (
    <div className="userinformation">
      <div className="user-left-div">
        <div className="user-info-mask">
        <img className='userinfo-image' src={currentUser.imgURL} alt='User' />
        </div>
          <p className='user-change'>Change Photo</p>
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