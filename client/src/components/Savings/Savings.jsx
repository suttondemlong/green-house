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
      <div className='stat-saved-container'>
        <div className="inner-titles" id='gauge-title'>Total Money Saved</div>  
          <GaugeChart
          id="gauge-chart1"
          nrOfLevels={10}
          arcPadding={0.1}
          cornerRadius={1}
          percent={0.86}
          colors={['#3BB428']}  
          />
        <div className="money-saved-integer">$486.73</div>
      </div>
        <div className='stat-saved-container' id="middle-column">
        <div className="inner-titles">Total Energy Saved</div>
          <div className='savings-stats'>
          <img className="savings-icon" src={energy} alt="energy-icon" />
            <div className="calculations">200 wtts</div>
          </div>
          <div className="inner-titles">This is equivalent to saving</div>
          <div className='savings-stats'>
          <img className="savings-icon" src={tree} alt='tree-icon' />
            <div className="calculations">100 trees</div>
          </div>
        </div>
      <div className="stat-saved-container">
        <div className="inner-titles">Total Water Saved</div>
          <div className='savings-stats'>
            <img className="savings-icon" src={water} alt='water-droplet-icon'/>
            <div className="calculations">36 Gallons</div>
          </div>
        </div>  
    </div>
    <button className="basic-button" id="view-details-button">View Details</button>
    </div>
  );
}

export default Savings;