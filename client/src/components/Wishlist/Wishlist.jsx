import React from 'react';
import barrel from "../../assets/barrel.jpg"
import power from "../../assets/plug.jpg"
import nest from "../../assets/nest.jpg"

function Wishlist(props) {
  return (
    <>
    <hr className="chat-hr"></hr>
    <div className='buying'>
      <h2>My Wishlist</h2>
      <div className='items'>
        <img className='image' src={barrel} alt='A rain barrel'/>
        <img className='image' src={power} alt='Power strip'/>
        <img className='image' src={nest} alt='Nest thermostat' />
      </div>
      <button className="seemore-button" disabled>
          See All
        </button>
    </div>
    
  </>
  );
}

export default Wishlist;