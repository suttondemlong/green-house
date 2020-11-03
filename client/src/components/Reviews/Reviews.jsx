import React from 'react';
import './Reviews.css'
import bulb from "../../assets/bulb.jpeg"
import power from "../../assets/plug.jpg"
import nest from "../../assets/nest.jpg"
import add from "../../assets/plus.png"

function Reviews(props) {
  return (
    <>
    <hr className="chat-hr"></hr>
    <div className='reviews'>
      <h2>My Reviews</h2>
      <div className='review-items'>
        <img className='review-image-bulb' src={bulb} alt='A light bulb'/>
        <img className='review-image-power' src={power} alt='Power strip'/>
          <img className='review-image-nest' src={nest} alt='Nest thermostat' />
          <img className='review-image-add' src={add} alt='Add a Review' />
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