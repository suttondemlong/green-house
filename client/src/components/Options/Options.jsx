import React from 'react';
import "../Options/Options.css"

function Options(props) {
  return (
    <div className='option'>
      <h3 className='options-title'>{props.title}</h3>
      <div className='p-container'>
        <p className='p'>{props.p}</p>
        </div>
    </div>
  );
}

export default Options;