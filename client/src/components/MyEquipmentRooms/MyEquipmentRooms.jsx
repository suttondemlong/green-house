import React from 'react';
import livingroom from "../../assets/livingroom.jpg"
import "./MyEquipmentRooms.css"

function MyEquipmentRooms(props) {
  return (
    <div>
      <div className="my-equip-rooms">
        <img className="equip-rooms-img" src={livingroom} alt='livingroom' />
          <div className="room-info">
            <p className="room-title">Living Room</p>
            <p className="room-stats">Room Statistics</p> 
            <p className="room-items">Total Items: 9</p>
          </div>
      </div>
    </div>
  );
}

export default MyEquipmentRooms;