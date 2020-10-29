import React from 'react';

function Directions(props) {
  return (
    <div>
      <h3>GreenHouse</h3>
      <Options />
      {/* Pass props for options */}
      |
      <Options />
      |
      <Options />
      <hr />
    </div>
  );
}

export default Directions;