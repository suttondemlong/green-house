import React from 'react';
import livingroom from "../../assets/livingroom.jpg"
import "./MyEquipmentRooms.css"

function MyEquipmentRooms(props) {
  return (
    <div className="my-equip-rooms">
      <hr className="chat-hr"></hr>
      <img className="equip-rooms-img" src={livingroom} alt='livingroom' />
      <h4 className="room-title">Living Room</h4>
      <h3 className="room-stats">Room Statistics</h3>
      <p className="room-items">Total Items: 9</p>
    </div>
  );
}

export default MyEquipmentRooms;