import React from 'react';
import './Wishlist.css'
import barrel from "../../assets/barrel.jpg"
import power from "../../assets/plug.jpg"
import nest from "../../assets/nest.jpg"
import add from "../../assets/plus.png"

function Wishlist(props) {
  return (
    <>
    <div className='wishlist'>
      <h2>My Wishlist</h2>
      <div className='wishlist-items'>
        <img className='wishlist-image-barrel' src={barrel} alt='A rain barrel'/>
        <img className='wishlist-image-power' src={power} alt='Power strip'/>
          <img className='wishlist-image-nest' src={nest} alt='Nest thermostat' />
          <img className='wishlist-image-add' src={add} alt='My Wishlist' />
      </div>
      <button className="basic-button" disabled>See All</button>
    </div>
    
  </>
  );
}

export default Wishlist;