import React from 'react';
import { Link } from "react-router-dom"
import light from "../../assets/light-bulb1.jpeg"
import plug from "../../assets/plug1.jpg"
import solar from "../../assets/solar-panel.jpeg"

function MyEquipment(props) {
  return (
    <>
    <div className='buying'>
      <h2>My Equipment</h2>
      <div className='items'>
        <img className='image' src={solar} alt='A Solar Panel'/>
        <img className='image' src={plug} alt='An eco-friendly plug'/>
        <img className='image' src={light} alt='An Edison light bulb' />
      </div>
        <Link className="my-equipment-link" to="/myequipment">  
      <button className="basic-button">See All</button>
      </Link>
    </div>
    
  </>
  );
}

export default MyEquipment;