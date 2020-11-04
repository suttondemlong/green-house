import React from 'react';
import "./SimilarItemsProducts.css"
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
      <div className="comparison">
        <img className='image' src={whitebulb}></img>
          <p className="comparison-detail">Indoor/Outdoor Useage: Indoor Only</p>
          <p className="comparison-detail">Lasts: 26 Weeks</p>
          <p className="comparison-detail">Price: $4.15</p>
          <p className="comparison-detail">Annual Energy Cost: $4.15</p>
          <p className="comparison-detail">Watts: 8.5 W</p>
          <p className="comparison-detail">Dimmable: No</p>
        <img className='image' src={clearbulb}></img>
          <p className="comparison-detail">Indoor/Outdoor Useage: Indoor/Outdoor</p>
          <p className="comparison-detail">Lasts: 23 Weeks</p>
          <p className="comparison-detail">Price: $3.93</p>
          <p className="comparison-detail">Annual Energy Cost: $1.50</p>
          <p className="comparison-detail">Watts: 5 W</p>
          <p className="comparison-detail">Dimmable: No</p>
      </div>
    </div>
  );
}

export default SimilarItemsProducts;