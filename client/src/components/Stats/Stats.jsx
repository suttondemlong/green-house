import React from 'react';
import '../Stats/Stats.css'
import Savings from '../Savings/Savings'
import Badges from '../Badges/Badges'

function Stats(props) {
  return (
    <div className='stats-container'>
      <Savings />
      <div className='stats-vertical-line'></div>
      <Badges />
      </div>
  );
}

export default Stats;