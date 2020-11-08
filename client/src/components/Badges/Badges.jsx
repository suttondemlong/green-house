import React from 'react';
import badges from '../../assets/badges.png'
import './Badges.css';

function Badges(props) {
  return (
    <div className="badges-overall-container">
      <h2 className="badges-title">Badges</h2>
      <div className="badges-container">
        <img className="badge-image" src={badges} alt="" />
        <button className="basic-button" id="badges-button">See All</button>
      </div>
    </div>
    
  );
}

export default Badges;