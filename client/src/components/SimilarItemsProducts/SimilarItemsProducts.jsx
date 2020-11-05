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
      <h2 id="similar-items-title">Similar Items</h2>
      <div className="items-similar">
        <img className="image" src={clearbulb} alt="icon"></img>
        <img className="image" src={whitebulb} alt="icon"></img>
        <img className="image" src={yellowbulb} alt="icon"></img>
      </div>
      <hr className="general-hr"></hr>
      <h2 id="product-comparison-title">Product Comparison</h2>
      <div className="comparison">
        <div className="similar-leftdiv">
          <img className="compare-image" src={whitebulb} alt="icon"></img>
          <div className="compare-next">
            <p className="comparison-detail">
              Indoor/Outdoor Useage: Indoor Only
            </p>
            <img className="checks" src={greencheck} alt="icon"></img>
          </div>
          <div className="compare-next">
            <p className="comparison-detail">Lasts: 26 Weeks</p>
            <img className="checks" src={greycheck} alt="icon"></img>
        </div>
        <div className="compare-next">
          <p className="comparison-detail">Price: $4.15</p>
          <img className="checks" src={greencheck} alt="icon"></img>
        </div>
        <div className="compare-next">
          <p className="comparison-detail">Annual Energy Cost: $4.15</p>
          <img className="checks" src={greencheck} alt="icon"></img>
        </div>
        <div className="compare-next">
          <p className="comparison-detail">Watts: 8.5 W</p>
          <img className="checks" src={greycheck} alt="icon"></img>
        </div>
        <div className="compare-next">
          <p className="comparison-detail">Dimmable: No</p>
          <img className="checks" src={greycheck} alt="icon"></img>
          </div>
          </div>
        <div className="similaritems-vertical-line"></div>
        <div className="right-similardiv">
        <img className="compare-image" src={clearbulb} alt="icon"></img>
        <div className="compare-next">
          <p className="comparison-detail">
            Indoor/Outdoor Useage: Indoor/Outdoor
          </p>
          <img className="checks" src={greencheck} alt="icon"></img>
        </div>
        <div className="compare-next">
          <p className="comparison-detail">Lasts: 23 Weeks</p>
          <img className="checks" src={greycheck} alt="icon"></img>
        </div>
        <div className="compare-next">
          <p className="comparison-detail">Price: $3.93</p>
          <img className="checks" src={greencheck} alt="icon"></img>
        </div>
        <div className="compare-next">
          <p className="comparison-detail">Annual Energy Cost: $1.50</p>
          <img className="checks" src={greencheck} alt="icon"></img>
        </div>
        <div className="compare-next">
          <p className="comparison-detail">Watts: 5 W</p>
          <img className="checks" src={greycheck} alt="icon"></img>
        </div>
        <div className="compare-next">
          <p className="comparison-detail">Dimmable: No</p>
          <img className="checks" src={greycheck} alt="icon"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimilarItemsProducts;
