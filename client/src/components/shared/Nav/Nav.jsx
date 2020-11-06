import React from 'react';
import {Link} from "react-router-dom"
import './Nav.css';
import login from '../../../../src/assets/login3.png';


function Nav(props) {
  return (
    <div className="nav-bar">
      <Link to='/' style={{textDecoration: 'none', color: '#ffffff'}}>
      <p className="app-name">GreenHouse</p>
      </Link>
      <p className="links">Explore Green Tech</p>
      <Link to='/dashboard' style={{textDecoration: 'none', color: '#ffffff'}}>
        <p className="links">Dashboard</p>
      </Link>
        <p className="links">Meet our Experts</p>
      <div className="search">
        <p className="nav-search-bar">Search</p> 
      <Link className="login-icon-link" to='/MyAccount'>
      <img className="login-icon" src={login} alt="login-icon" />
      </Link>
      </div>
    </div>
  );
}

export default Nav;

