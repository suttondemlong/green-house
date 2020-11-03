import React from 'react';
import { Link } from "react-router-dom"

function Equipment(props) {
  return (
    <>
    <hr className="chat-hr"></hr>
    <div className='buying'>
      <h2>My Equipment</h2>
      <div className='items'>
        {/* <img className='image' src={solar} alt='A Solar Panel'/>
        <img className='image' src={plug} alt='An eco-friendly plug'/>
        <img className='image' src={light} alt='An Edison light bulb' /> */}
      </div>
        <Link className="equipment-link" to="/myequipment">  
      <button className="seemore-button">
            See All
      </button>
      </Link>
    </div>
    
  </>
  );
}

export default Equipment;