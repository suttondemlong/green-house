import React from 'react';
import './Buying.css'
import light from "../../assets/light-bulb1.jpeg"
import plug from "../../assets/plug1.jpg"
import solar from "../../assets/solar-panel.jpeg"


function Buying(props) {
  return (
    <div className='buying'>
      <h2>What people are buying</h2>
      <div className='items'>
        <img className='image' src={solar} alt='A Solar Panel'/>
        <img className='image' src={plug} alt='An eco-friendly plug'/>
        <img className='image' src={light} alt='An Edison light bulb' />
      </div>
      <button className="seemore-button" disabled>
          See More
        </button>
    </div>
  );
}

export default Buying;