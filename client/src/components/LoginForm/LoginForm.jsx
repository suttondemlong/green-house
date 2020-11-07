import React from 'react';
import {Link} from 'react-router-dom'
import "./LoginForm.css"

function LoginForm(props) {
  return (
    <div className='Login-container'>
      <form className='login-form'>
    <Link to='/signup'>
        <button className="basic-button" type='submit'>Signup</button>
        </Link>
        <label className="sign-l-name" htmlFor="email">Email</label>
        <input type='text' className="login-email" placeholder='Enter Email' name='email' />
        <label className="sign-l-name" htmlFor="password">Password</label>
        <input type='password' className='login-password' placeholder='Enter Password' name='password' />
        <button className="basic-button" type='submit'>Submit</button>
        </form>
    </div>
  );
}

export default LoginForm;