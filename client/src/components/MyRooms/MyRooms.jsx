import React from 'react';
import "./MyRooms.css"
import bathroom from "../../assets/bathroom.jpg"
import kitchen from "../../assets/kitchen.jpeg"
import livingroom from "../../assets/livingroom.jpg"

function MyRooms(props) {
  return (
    <div>
      <div className="my-rooms">
        <h2>My Rooms</h2>
        <div className='rooms'>
        <img className='myroom-image' src={bathroom} alt='bathroom'/>
        <img className='myroom-image' src={kitchen} alt='kitchen'/>
        <img className='myroom-image' src={livingroom} alt='livingroom' />
        </div>
        <button className="seemore-button">
          See All
        </button>
      </div>
    </div>
  );
}

export default MyRooms;