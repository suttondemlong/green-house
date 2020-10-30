import React from 'react';

function Buying(props) {
  return (
    <div className='buying'>
      <h2>What people are buying</h2>
      <div className='items'>
        <img className='image' src='green-house/client/src/assets/light-bulb1.jpeg' alt='An Edison light bulb'/>
        <img className='image' src='green-house/client/src/assets/plug1.jpg'alt='An eco-friendly plug'/>
        <img className='image' src='green-house/client/src/assets/light-bulb1.jpeg' alt='An Edison light bulb'/>
      </div>
    </div>
  );
}

export default Buying;