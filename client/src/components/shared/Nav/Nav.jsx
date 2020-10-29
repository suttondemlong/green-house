import React from 'react';
import '../Nav.css'

function Nav(props) {
  return (
    <div className="nav-bar">
      <p className="app-name">GreenHouse</p>
      <p className="links">Explore Green Tech</p>
      <p className="links">Dashboard</p>
      <p className="links">Meet our Experts</p>
      <input className="nav-search-bar" type="text" placeholder="Search"></input>
    </div>
  );
}

export default Nav;

//login logo?