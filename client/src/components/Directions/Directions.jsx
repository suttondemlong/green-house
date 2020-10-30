import React from 'react';
import '../Directions/Directions.css'
import Options from "../Options/Options.jsx"

function Directions(props) {
  return (
    <div className='directions-container'>
      
      <Options title='Discover new eco-tech' p='Get information on the newest and most popular eco-friendly brands'/>
      <div className='vertical-line'></div>
      <Options title='Track your savings' p='Get quantifiable data on your eco-friendly technology'/>
      <div className='vertical-line'></div> 
      <Options id='tech' title='View your technology' p='All your electronic items are viewable in one platform'/>
      </div>
  );
}

export default Directions;