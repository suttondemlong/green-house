import React from 'react';
import './MyEquipment.css'
import { Link } from "react-router-dom"
import light from "../../assets/light-bulb1.jpeg"
import plug from "../../assets/plug1.jpg"
import solar from "../../assets/solar-panel.jpeg"
import add from "../../assets/plus.png"

function MyEquipment(props) {
  return (
    <>
    <div className='buying'>
      <h2>My Equipment</h2>
      <div className='items'>
        <img className='myequipment-image-solar' src={solar} alt='A Solar Panel'/>
        <img className='myequipment-image-plug' src={plug} alt='An eco-friendly plug'/>
          <img className='myequipment-image-light' src={light} alt='An Edison light bulb' />
          <Link to="/equipments">
        <img className='myequipment-image-add' src={add} alt='My Wishlist' />
        </Link>
      </div>
        <Link className="my-equipment-link" to="/myequipment">  
      <button className="basic-button">See All</button>
      </Link>
    </div>
    
  </>
  );
}

export default MyEquipment;