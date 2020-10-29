import React from 'react';
import Options from "../Options/Options.jsx"

function Directions(props) {
  return (
    <div>
      Directions
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