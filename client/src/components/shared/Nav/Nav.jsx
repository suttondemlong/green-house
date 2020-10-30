import React from 'react';
import './Nav.css';
import login from '../../../../src/assets/login.png';
import glass from '../../../../src/assets/loupe.png'

function Nav(props) {
  return (
    <div className="nav-bar">
      <p className="app-name">GreenHouse</p>
      <p className="links">Explore Green Tech</p>
      <p className="links">Dashboard</p>
      <p className="links">Meet our Experts</p>
      <input className="nav-search-bar" type="text" src={glass} placeholder="Search"></input>
      <img className ="login-icon" src={login} />
    </div>
  );
}

export default Nav;

//login logo?