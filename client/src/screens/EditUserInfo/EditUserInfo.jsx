import React, {useState, useEffect, useContext} from 'react';
import './EditUserInfo.css';
import { Redirect } from 'react-router-dom';
import Layout from '../../components/shared/Layout/Layout';
import { updateUser } from '../../services/users';
import { LoginUserContext } from "../../components/LoginUser/LoginUserContext"

const EditUserInfo = (props) => {
  const [currentUser] = useContext(LoginUserContext);

  const [user, setUser] = useState({
    name: currentUser.name,
    email: currentUser.email, 
    password: currentUser.password
  })

  const [isUpdated, setUpdated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const updated = await updateUser(currentUser._id, user)
    let localUser = JSON.stringify(updated)
    localStorage.setItem('localUser', localUser)
    setUpdated(true)
  }

  if (isUpdated) {
    return <Redirect to={'/MyAccount'} />
  }

  return (
    <Layout>
      <div className="info-edit-container">
        <form className='edit-form' onSubmit={handleSubmit}>
          <label className="edit-label" htmlFor='name'>
            <div>Name:</div>
            <input
              className="edit-input"
              placeholder='Name'
              value={user.name}
              name="name"
              required
              autoFocus
              onChange={handleChange}
            />
          </label>
          <label className="edit-label" htmlFor='email'>
            <div>Email:</div>
            <input
              className="edit-input"
              placeholder='Email'
              value={user.email}
              name="email"
              required
              autoFocus
              onChange={handleChange}
            />
          </label>
          <label className="edit-label" htmlFor="password">
            <div>Password:</div>
            <input
              className="edit-input"
              placeholder='Password'
              value={user.password}
              name="password"
              required
              autoFocus
              onChange={handleChange}
            />
          </label>
          <button type='submit' className="basic-button">Save</button>
        </form>
      </div>
    </Layout>

  );
}

export default EditUserInfo;