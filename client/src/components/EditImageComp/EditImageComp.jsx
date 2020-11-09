import React, { useState, useContext } from 'react';
import { LoginUserContext } from "../../components/LoginUser/LoginUserContext"
import { updateUser } from '../../services/users';
import { Redirect} from 'react-router-dom'

function EditImageComp(props) {
  const [currentUser] = useContext(LoginUserContext)
  const [user, setUser] = useState({
    imgURL: currentUser.imgURL
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
    setUpdated(updated)
  }

  if (isUpdated) {
    return <Redirect to={`/MyAccount`} />
  }

  console.log(user.imgURL)

  return (
    <div>
      <p>Change your profile image here:</p>
        <label className="edit-imgURL" htmlFor="imgURL">
          <form className="user-form" onSubmit={handleSubmit}>
            <input
              className="edit-imgURL"
              placeholder="Insert Image URL"
              value={user.imgURL}
              type="text"
              name="imgURL"
              required
              onChange={handleChange} />
              <button className="basic-button">Save Changes</button>
            </form>
        </label>
    </div>
  );
}

export default EditImageComp;