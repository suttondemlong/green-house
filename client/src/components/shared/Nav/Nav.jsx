import React from 'react';
import '../Nav.css'

function Nav(props) {
  return (
    <div className="nav-bar">
      <h1>GreenHouse</h1>
      <p>Explore Green Tech</p>
      <p>Dashboard</p>
      <p>Meet our Experts</p>
      <input className="nav-search-bar" type="text" placeholder="Search"></input>
    </div>
  );
}

export default Nav;