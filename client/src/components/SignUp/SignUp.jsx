import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom'
import './SignUp.css'
import { createUser } from '../../services/users'

function SignUp(props) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    imgURL: "",
    socialmedia: [],
  })
  const [isCreated, setCreated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    })
  };
  const handleSumbit = async (event) => {
    event.preventDefault();
    const created = await createUser(user);
    setCreated({ created })
  }; 
    if (isCreated) {
    return <Redirect to={"/dashboard"} />
    }

  return (
    <div>
      <h2>Already have an account?</h2>
      <Link to="/MyAccount">
        <button className="basic-button">Log-in</button>
        </Link>
      <form className="signup-form" onSubmit={handleSumbit}>
        <label className="sign-l-name" htmlFor="name">Name</label>
        <input
          className="sign-i-name"
          placeholder="Enter Name"
          value={user.name}
          type="text"
          name="name"
          required
          autoFocus
          onChange={handleChange}/>
        
        <label className="sign-l-email" htmlFor="email">Email</label>
        <input
          className="sign-i-email"
          placeholder="Enter Email"
          value={user.email}
          type="text"
          name="email"
          required
          onChange={handleChange}/>

        <label className="sign-l-password" htmlFor="password">Password</label>
        <input
          className="sign-i-password"
          type="password"
          placeholder="Enter Password"
          value={user.password}
          name="password"
          required
          onChange={handleChange}/>

        <label className="sign-l-imgURL" htmlFor="imgURL">Image URL</label>
        <input
          className="sign-i-imgURL"
          placeholder="Insert Image URL"
          value={user.imgURL}
          type="text"
          name="imgURL"
          required
          onChange={handleChange}/>

        <label className="sign-l-socialmedia" htmlFor="socialmedia">Social Media</label>
        <input
          className="sign-i-socialmedia"
          type="text"
          placeholder="Insert Facebook URL"
          value={user.socialmedia}
          name="socialmedia"
          onChange={handleChange}/>
        <button className="basic-button" type="submit">
        Submit
      </button>
      </form>
    </div>
  );
}

export default SignUp;