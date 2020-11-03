import React from 'react';
import "./MyRooms.css"

function MyRooms(props) {
  return (
    <div>
      <hr className="chat-hr"></hr>
      <div className="my-rooms">
        <h2>My Rooms</h2>
        <button className="seemore-button">
          See All
        </button>
      </div>
    </div>
  );
}

export default MyRooms;