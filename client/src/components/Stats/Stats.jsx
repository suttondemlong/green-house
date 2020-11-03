import React from 'react';
import '../Stats/Stats.css'
import Savings from '../Savings/Savings'
import Badges from '../Badges/Badges'

function Stats(props) {
  return (
    <div className='stats-container'>
      <Savings />
      <div className='vertical-line'></div>
      <Badges />
      </div>
  );
}

export default Stats;