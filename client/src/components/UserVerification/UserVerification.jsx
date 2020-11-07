import React from 'react';
import './UserVerification.css'

function UserVerification(props) {
  return (
    <div>
      <hr className="general-hr"></hr>
      <div className="verified-container">
        <div className='verified-name'>
        <div className="verified-title">Name</div>
          {props.currentUser && <div className="verified-content">{props.currentUser.name}</div>}
        </div>
        <div className='verified-email'>
        <div className="verified-title">Email</div>
          {props.currentUser && <div className="verified-content">{props.currentUser.email}</div>}
        </div>
        <div className='verified-password'>
        <div className="verified-title">Password</div>
          {props.currentUser && <div className="verified-content">{props.currentUser.password}</div>}
        </div>
      </div>
      <div className='verification-edit'>edit</div>
      <hr className="general-hr"></hr>
    </div>
  );
}

export default UserVerification;