import React from 'react';
import yellowbulb from "../../assets/yellowbulb.jpeg"
import whitebulb from "../../assets/whitebulb.jpeg"
import clearbulb from "../../assets/clearbulb.jpeg"

function SimilarItemsProducts(props) {
  return (
    <div className='buying'>
      <h2>Similar Items</h2>
      <div className="items-similar">
        <img className='image' src={clearbulb}></img>
        <img className='image' src={whitebulb}></img>
        <img className='image' src={yellowbulb}></img>
      </div>
      <hr className="general-hr"></hr>
      <h2>Product Comparison</h2>
    </div>
  );
}

export default SimilarItemsProducts;