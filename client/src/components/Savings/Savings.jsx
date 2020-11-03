import React from 'react';
import GaugeChart from 'react-gauge-chart'

function Savings(props) {
  return (
    <div>
      <h2>Savings</h2>
      <div className="gauge">
      <GaugeChart id="gauge-chart1"
        nrOfLevels={20}
        percent={0.86}
        />
        </div>
    </div>
  );
}

export default Savings;