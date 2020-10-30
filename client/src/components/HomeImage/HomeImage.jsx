import React from 'react';
import './HomeImage.css';

function HomeImage(props) {
  return (
    <div>
      <div>
        <div className="hero-container">
          <p className="image-text">Join an eco-friendly community.</p>
          <p className="image-text">Reach your goals of sustainability.</p>
          <p className="image-text">GreenHouse will give you the</p> 
          <p className="image-text">tools and</p>
          <p className="image-text">information you need.</p>
          <p className="join-button" disabled>Join our Community</p>
        </div>
        <div className="title-gren-hous">
          <span className="greenhouse-bold">GreenHouse</span> /ˈɡrēnˌhous/
        </div>
        <div className="definition">
          De-mystifying green tech in the home for the eco-curious 
        </div>
      </div>
    </div>
  );
}

export default HomeImage;