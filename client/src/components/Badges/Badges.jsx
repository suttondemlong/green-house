import React from 'react';
import badges from '../../assets/badges.png'
import './Badges.css';

function Badges(props) {
  return (
    <div className="badges-container">
      <h2 className="badges-title">Badges</h2>
      <div className="badges-images">
        <img className="badge-image" src={badges} alt="" />
      </div>
      <button className="seemore-button">See All</button>
    </div>
  );
}

export default Badges;