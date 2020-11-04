import React from "react";
import "./Equipment.css";
import { Link } from "react-router-dom";

const Equipment = (props) => {
  return (
    <>
      <Link className="equipment" to={`/equipments/${props._id}/detail`}>
        <div className="equipment-container">
        <img className="equipment-image" src={props.imgURL} alt={props.name} />
        </div>
      </Link>
    </>
  );
};

export default Equipment;
