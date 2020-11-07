import React, {useContext, useState} from 'react';
import {Link, Redirect} from 'react-router-dom'
import "./LoginForm.css"
import { LoginUserContext } from "../LoginUser/LoginUserContext"
import { signIn } from "../../services/users"

function LoginForm(props) {
  const [currentUser, setCurrentUser] = useContext(LoginUserContext)
  const [userInfo, setUserInfo] = useState({ email: "", password: "" })

  const [isLoggedIn, setLoggedIn] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    })
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(userInfo)
    try {
      let user = await signIn(userInfo)
      setCurrentUser(user)
    } catch(error) {
      throw error
    }
    setLoggedIn(true)
  };

  if (isLoggedIn) {
    return <Redirect to={"/dashboard"} />
    }

  return (
    <div className='Login-container'>
      <form onSubmit={handleSubmit} className='login-form'>
    <Link to='/signup'>
        <button className="basic-button" type='submit'>Signup</button>
    </Link>
        <label className="sign-l-name" htmlFor="email">Email</label>
        <input onChange={handleChange} value={userInfo.email} type='text' className="login-email" placeholder='Enter Email' name='email' />
        <label className="sign-l-name" htmlFor="password">Password</label>
        <input onChange={handleChange} value={userInfo.password} type='password' className='login-password' placeholder='Enter Password' name='password' />
        <button className="basic-button" type='submit'>Submit</button>
        </form>
    </div>
  );
}

export default LoginForm;