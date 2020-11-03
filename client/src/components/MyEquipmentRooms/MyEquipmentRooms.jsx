import React from 'react';
import livingroom from "../../assets/livingroom.jpg"
import "./MyEquipmentRooms.css"

function MyEquipmentRooms(props) {
  return (
    <div>
       <hr className="chat-hr"></hr>
      <div className="my-equip-rooms">
        <img className="equip-rooms-img" src={livingroom} alt='livingroom' />
          <div className="room-info">
            <h5 className="room-title">Living Room</h5>
            <h6 className="room-stats">Room Statistics</h6>
            <p className="room-items">Total Items: 9</p>
          </div>
      </div>
    </div>
  );
}

export default MyEquipmentRooms;