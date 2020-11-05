import React from 'react';

function Password(props) {
  return (
    <div>
      <h2>CHANGE PASSWORD</h2>
      
      <h4>New Password</h4>
      <h4>Confirm New Password</h4>
      <input type='password'></input>
      <input type='password'></input>
      <hr className="general-hr"></hr>
    </div>
  );
}

export default Password;