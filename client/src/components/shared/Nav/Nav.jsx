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
      <p className="links">Dashboard</p>
      <p className="links">Meet our Experts</p>
        <div className="search">
        <input className="nav-search-bar" type="text" placeholder="Search" />
        
        </div>
        <img className ="login-icon" src={login} alt="login-icon" />
    </div>
  );
}

export default Nav;

