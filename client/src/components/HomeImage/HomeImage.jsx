import React from 'react';
import './HomeImage.css';

function HomeImage(props) {
  return (
    <div>
      <div className="text-in-image">
        {/* <img src="home-image.jpg"></img> */}
        <div className="text-in-image">
          <div>
            Join an eco-friendly community.
          </div>
          <div>
            Reach your goals of sustainability.
          </div>
          <div>
            GreenHouse will give you the tools and information you need.
          </div>
        </div>
        <div className="title-gren-hous">
          GreenHouse /ˈɡrēnˌhous/
        </div>
        <div className="definition">
          De-mystifying green tech in the home for the eco-curious 
        </div>
      </div>
    </div>
  );
}

export default HomeImage;