import React from 'react';
import { Link } from 'react-router-dom'
import './SignUp.css'

function SignUp(props) {
  return (
    <div>
      <h2>Already have an account?</h2>
      <Link to="/MyAccount">
        <button className="basic-button">Log-in</button>
        </Link>
      <form className="signup-form">
        <label className="sign-l-name" htmlFor="name">Name</label>
        <input className="sign-i-name" placeholder="Enter Name" type="text" name="name" required autoFocus />
        
        <label className="sign-l-email" htmlFor="email">Email</label>
        <input className="sign-i-email" placeholder="Enter Email" type="text" name="email" required />

        <label className="sign-l-password" htmlFor="password">Password</label>
        <input className="sign-i-password" type="password" placeholder="Enter Password" name="password" required />

        <label className="sign-l-imgURL" htmlFor="imgURL">Image URL</label>
        <input className="sign-i-imgURL" placeholder="Insert Image URL" type="text" name="imgURL" required />

        <label className="sign-l-socialmedia" htmlFor="social media">Social Media</label>
        <input className="sign-i-socialmedia"  type="text" placeholder="Insert Facebook URL" name="social media" />
        <input className="sign-i-socialmedia" type="text" placeholder="Insert Instagram URL" name="social media" />
      </form>
      <button className="basic-button">
        Submit
      </button>
    </div>
  );
}

export default SignUp;