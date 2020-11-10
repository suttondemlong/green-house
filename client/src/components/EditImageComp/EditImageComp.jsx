import React, { useState, useContext } from 'react';
import { LoginUserContext } from "../../components/LoginUser/LoginUserContext"
import { updateUser } from '../../services/users';
import { Redirect } from 'react-router-dom'
import "./EditImageComp.css"
import { UpdateUserContext } from '../../components/LoginUser/LoginUserContext'

function EditImageComp(props) {
  const currentUser = useContext(LoginUserContext)
  const updateUserContext = useContext(UpdateUserContext)
  const [user, setUser] = useState({
    name: currentUser.name,
    email: currentUser.email, 
    password: currentUser.password,
    imgURL: currentUser.imgURL,
    _id: currentUser._id,
  })

  const [isUpdated, setUpdated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const updated = await updateUser(currentUser._id, user)
    let localUser = JSON.stringify(updated)
    localStorage.setItem('localUser', localUser)
    updateUserContext(user)
    setUpdated(true)
  }

  if (isUpdated) {
    return <Redirect to={`/MyAccount`} />
  }

  console.log(user.imgURL)

  return (
      <form className="edit-imgURL" onSubmit={handleSubmit}>
        {/* <p>Change your profile image here:</p> */}
        <input
            className="edit-imgURL-input"
            value={user.imgURL}
            type="text"
            name="imgURL"
            placeholder="New image URL"
            // autoFocus
            required
            onChange={handleChange} />
            <button id="edit-save-button" className="basic-button">Save Changes</button>
        </form>
  );
}

export default EditImageComp;