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
      <hr />
    </div>
  );
}

export default Directions;