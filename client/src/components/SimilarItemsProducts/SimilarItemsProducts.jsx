import React from "react";
import "./SimilarItemsProducts.css";
import yellowbulb from "../../assets/yellowbulb.jpeg";
import whitebulb from "../../assets/whitebulb.jpeg";
import clearbulb from "../../assets/clearbulb.jpeg";
import greencheck from "../../assets/green-check.png";
import greycheck from "../../assets/grey-check.png";

function SimilarItemsProducts(props) {
  return (
    <div className="buying">
      <h2>Similar Items</h2>
      <div className="items-similar">
        <img className="image" src={clearbulb}></img>
        <img className="image" src={whitebulb}></img>
        <img className="image" src={yellowbulb}></img>
      </div>
      <hr className="general-hr"></hr>
      <h2>Product Comparison</h2>
      <div className="comparison">
        <div className="similar-leftdiv">
          <img className="compare-image" src={whitebulb}></img>
          <div className="compare-next">
            <p className="comparison-detail">
              Indoor/Outdoor Useage: Indoor Only
            </p>
            <img className="checks" src={greencheck}></img>
          </div>
          <div className="compare-next">
            <p className="comparison-detail">Lasts: 26 Weeks</p>
            <img className="checks" src={greycheck}></img>
          </div>
        </div>
        <div className="compare-next">
          <p className="comparison-detail">Price: $4.15</p>
          <img className="checks" src={greencheck}></img>
        </div>
        <div className="compare-next">
          <p className="comparison-detail">Annual Energy Cost: $4.15</p>
          <img className="checks" src={greencheck}></img>
        </div>
        <div className="compare-next">
          <p className="comparison-detail">Watts: 8.5 W</p>
          <img className="checks" src={greycheck}></img>
        </div>
        <div className="compare-next">
          <p className="comparison-detail">Dimmable: No</p>
          <img className="checks" src={greycheck}></img>
        </div>
      
      <div className="right-similardiv">
        <img className="compare-image" src={clearbulb}></img>
        <div className="compare-next">
          <p className="comparison-detail">
            Indoor/Outdoor Useage: Indoor/Outdoor
          </p>
          <img className="checks" src={greencheck}></img>
        </div>
        <div className="compare-next">
          <p className="comparison-detail">Lasts: 23 Weeks</p>
          <img className="checks" src={greycheck}></img>
        </div>
        <div className="compare-next">
          <p className="comparison-detail">Price: $3.93</p>
          <img className="checks" src={greencheck}></img>
        </div>
        <div className="compare-next">
          <p className="comparison-detail">Annual Energy Cost: $1.50</p>
          <img className="checks" src={greencheck}></img>
        </div>
        <div className="compare-next">
          <p className="comparison-detail">Watts: 5 W</p>
          <img className="checks" src={greycheck}></img>
        </div>
        <div className="compare-next">
          <p className="comparison-detail">Dimmable: No</p>
          <img className="checks" src={greycheck}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimilarItemsProducts;
