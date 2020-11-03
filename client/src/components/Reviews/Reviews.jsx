import React from 'react';
import bulb from "../../assets/bulb.jpeg"
import power from "../../assets/plug.jpg"
import nest from "../../assets/nest.jpg"

function Reviews(props) {
  return (
    <>
    <hr className="chat-hr"></hr>
    <div className='buying'>
      <h2>My Reviews</h2>
      <div className='items'>
        <img className='image' src={bulb} alt='A light bulb'/>
        <img className='image' src={power} alt='Power strip'/>
        <img className='image' src={nest} alt='Nest thermostat' />
      </div>
      <button className="seemore-button" disabled>
          See All
        </button>
    </div>
    
    <hr className="chat-hr"></hr>
  </>
  );
}

export default Reviews;