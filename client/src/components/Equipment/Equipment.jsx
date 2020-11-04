import React from "react";
import "./Equipment.css";
import { Link } from "react-router-dom";

const Equipment = (props) => {
  return (
    <>
      <Link className="Equipment" to={`/equipments/${props._id}/detail`}>
        <div className="equipment-container">
        <img className="Equipment-image" src={props.imgURL} alt={props.name} />
        </div>
      </Link>
    </>
  );
};

export default Equipment;
