import React from 'react';

function Equipment(props) {
  return (
    <>
    <div className='buying'>
      <h2>My Equipment</h2>
      <div className='items'>
        {/* <img className='image' src={solar} alt='A Solar Panel'/>
        <img className='image' src={plug} alt='An eco-friendly plug'/>
        <img className='image' src={light} alt='An Edison light bulb' /> */}
      </div>
      <button className="seemore-button" disabled>
          See All
        </button>
    </div>
    
  </>
  );
}

export default Equipment;