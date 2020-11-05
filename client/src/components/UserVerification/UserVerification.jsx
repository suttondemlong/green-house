import React from 'react';
import './UserVerification.css'

function UserVerification(props) {
  return (
    <div>
      <hr className="general-hr"></hr>
      <div className="verified-container">
        <div className='verified-name'>
        <div className="verified-title">Name</div>
        <div className="verified-content">Sherie Jones</div>
        </div>
        <div className='verified-email'>
        <div className="verified-title">Email</div>
        <div className="verified-content">eco-curious@gmail.com</div>
        </div>
        <div className='verified-password'>
        <div className="verified-title">Password</div>
        <div className="verified-content">********</div>
        </div>
      </div>
      <div className='verification-edit'>edit</div>
      <hr className="general-hr"></hr>
    </div>
  );
}

export default UserVerification;