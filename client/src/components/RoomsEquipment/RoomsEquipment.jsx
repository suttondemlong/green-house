import React from 'react';
import light from "../../assets/light-bulb1.jpeg"
import plug from "../../assets/plug1.jpg"
import solar from "../../assets/solar-panel.jpeg"
import add from "../../assets/plus.png"
import "./RoomsEquipment.css"

function RoomsEquipment(props) {
  return (
    <div className="rooms-equipment">
      <h2>Room's Equipment</h2>
      <div className='items'>
        <img className='image' src={solar} alt='A Solar Panel'/>
        <img className='image' src={plug} alt='An eco-friendly plug'/>
        <img className='image' src={light} alt='An Edison light bulb' />
        <img className='roomsequip-add-image' src={add} alt='add button' />
      </div>
      <button className="seemore-button">
            See All
      </button>
    </div>
  );
}

export default RoomsEquipment;