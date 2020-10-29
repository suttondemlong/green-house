import React from 'react';

function Directions(props) {
  return (
    <div>
      <Options />
      {/* Pass props for options */}
      |
      <Options />
      |
      <Options />
    </div>
  );
}

export default Directions;