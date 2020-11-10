import React, { useEffect, useState, useContext } from "react";
import { LoginUserContext } from "../../components/LoginUser/LoginUserContext"
import {updateUser} from '../../services/users'
import "./Password.css";

function Password(props) {
  const [currentUser] = useContext(LoginUserContext)
  const [password, setPassword] = useState({
    password: ''
  })
  const [passwordConfirm, setPasswordConfirm] = useState({
    password: ''
  })
  const [message, setMessage] = useState('')


  useEffect(() => {
    if (((password.password === '') && (passwordConfirm.password === ''))) {
      setMessage()
    } else if (password.password === passwordConfirm.password) {
      setMessage('Passwords matched!')
    } else if (password.password === '') {
      setMessage('Please enter new password')
    } else if (passwordConfirm.password === '') {
      setMessage('Please enter confirmed password')
    } else if (password.password === passwordConfirm.password) {
      setMessage('Successfully created password')
    } else {
      setMessage('Invalid password: Inputs do not match')
    }
  }, [password, passwordConfirm])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPassword({
      ...password,
      [name]: value,
    })
  }
  const handleChange2 = (event) => {
    const { name, value } = event.target;
    setPasswordConfirm({
      ...passwordConfirm,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (password.password === passwordConfirm.password) {
      const updated = await updateUser(currentUser._id, password )
      let localUser = JSON.stringify(updated)
      localStorage.setItem('localUser', localUser)
      window.location.reload()
    } else {
      setMessage("Unable to process change: Make sure inputs match")
    }
  }

  return (
    <div>
      <h2 className="password-title">CHANGE PASSWORD</h2>
        <div className="password-container">
          <form className="user-form" onSubmit={handleSubmit}>
          <div className="user-form-inputs">
            <label htmlFor="password" className="new-password">New Password</label>
            <input
              type="password"
              className="password-input"
              name="password" value={password.password}
              onChange={handleChange}></input>
          <label htmlFor="password" className="confirm-new-password">Confirm New Password</label>
            <input
              type="password"
              className="confirm-password-input"
              name="password"
              value={passwordConfirm.password}
              onChange={handleChange2}></input>
          </div>
            <p className="validation">{message}</p>
          <button className="basic-button">Save Changes</button>
          </form>
        </div>  
      <hr className="general-hr"></hr>
    </div>
  );
}

export default Password;
