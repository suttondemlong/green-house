import React from 'react';
import './Nav.css';
// import { NavLink } from 'react-router-dom'
import login from '../../../../src/assets/login3.png';
// import glass from '../../../../src/assets/loupe.png'

function Nav(props) {
  return (
    <div className="nav-bar">
      <p className="app-name">GreenHouse</p>
      <p className="links">Explore Green Tech</p>
      <p className="links">Dashboard</p>
      <p className="links">Meet our Experts</p>
        <div className="search">
        <input className="nav-search-bar" type="text" placeholder="Search" />
        
        </div>
        <img className ="login-icon" src={login} />
    </div>
  );
}

export default Nav;

//login logo?

{/* <p className="language">
Language <img className="down-arrow" src={image} /> */}

{/* <input className="nav-search-bar" type="text" src={glass} placeholder="Search"></input> */}