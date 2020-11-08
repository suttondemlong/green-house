import React from 'react';
import {Link} from "react-router-dom"
import './Nav.css';
import login from '../../../../src/assets/login3.png';


function Nav(props) {
  return (
    <div className="nav-bar">
      <div className="nav-contents">
      <Link to='/' style={{textDecoration: 'none', color: '#ffffff'}}>
      <p className="app-name">GreenHouse</p>
      </Link>
      <Link to='/equipments'style={{textDecoration: 'none', color: '#ffffff'}}>
      <p className="links">Explore Green Tech</p>
      </Link>
      <Link to='/dashboard' style={{textDecoration: 'none', color: '#ffffff'}}>
        <p className="links">Dashboard</p>
      </Link>
      <Link to='/MyAccount'style={{textDecoration: 'none', color: '#ffffff'}}>
      <p className="links">My Account</p>
      </Link>
      <div className="search">
        <p className="nav-search-bar">Search</p> 
      <Link className="login-icon-link" to='/signin'>
      <img className="login-icon" src={login} alt="login-icon" />
      </Link>
      </div>
      </div>
    </div>
  );
}

export default Nav;

