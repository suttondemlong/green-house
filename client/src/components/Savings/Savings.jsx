import React from 'react';
import "../Savings/Savings.css"
import GaugeChart from 'react-gauge-chart'
import energy from '../../assets/noun_Energy_2965874.png'
import tree from '../../assets/noun_Tree_16622.png'
import water from '../../assets/noun_Water_2353460.png'

function Savings(props) {
  return (
    <div className="savings-overall-container">
      <h2 className="savings-main-title">Savings</h2>
      <div className='savings-items-container'>
      <div className='money-saved-container'>
        <div className="gauge-title">Total Money Saved</div>
        <div className="gauge">  
        <GaugeChart id="gauge-chart1"
          nrOfLevels={20}
          percent={0.86}
          />
        </div>
      </div>
        <div className='energy-saved-container'>
        <div className="inner-titles">Total Energy Saved</div>
          <div className='savings-watts'>
          <img className="savings-icon" src={energy} alt="energy-icon" />
            <p>200 wtts</p>
          </div>
          <div className="inner-titles">This is equivalent to saving</div>
          <div className='savings-trees'>
          <img className="savings-icon" src={tree} alt='tree-icon' />
            <p>100 trees</p>
          </div>
        </div>
      <div className="water-saved-container">
        <div className="inner-titles">Total Water Saved</div>
          <div className='savings-gallons'>
            <img className="savings-icon" src={water} alt='water-droplet-icon'/>
            <p>36 Gallons</p>
          </div>
        </div>
    </div>
    <button ID="view-details-button" className="basic-button">View Details</button>
    </div>
  );
}

export default Savings;