import React from "react";
import "./Password.css";

function Password(props) {
  return (
    <div>
      <h2 className="password-title">CHANGE PASSWORD</h2>
      <div className="password-component-container">
        <div className="password-container">
          <div className="new-password">New Password</div>
          <input type="password" className="password-input"></input>
        </div>
        <div className="input-container">
          <div className="confirm-new-password">Confirm New Password</div>
          <input type="password" className="confirm-password-input"></input>
        </div>
      </div>
      <hr className="general-hr"></hr>
    </div>
  );
}

export default Password;
