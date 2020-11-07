import React from 'react';
import "./UserInformation.css"



function UserInformation(props) {
  return (
    <div className="userinformation">
      <div className="user-left-div">
        {props.currentUser && <img className='userinfo-image' src={props.currentUser.imgURL} alt='User' />}
        <p className='user-change'>Change Photo</p>
      </div>
      <div className="user-right-div">
      <p className='user-friends'>32 Friends</p> 
      <button className="user-view-button" disabled>
        View Friends
        </button>
        <button className="user-add-button" disabled>
          Add Friends
        </button>
        </div>
    </div>
  );
}

export default UserInformation;