import React, {useContext} from 'react';
import './UserVerification.css'
import { LoginUserContext } from "../../components/LoginUser/LoginUserContext"

function UserVerification(props) {
  const [currentUser]= useContext(LoginUserContext);
  
  return (
    <div>
      <hr className="general-hr"></hr>
      <div className="verified-container">
        <div className='verified-name'>
        <div className="verified-title">Name</div>
          <div className="verified-content">{currentUser.name}</div>
        </div>
        <div className='verified-email'>
        <div className="verified-title">Email</div>
          <div className="verified-content">{currentUser.email}</div>
        </div>
        <div className='verified-password'>
        <div className="verified-title">Password</div>
          <div className="verified-content">{currentUser.password}</div>
        </div>
      </div>
      <div className='verification-edit'>edit</div>
      <hr className="general-hr"></hr>
    </div>
  );
}

export default UserVerification;