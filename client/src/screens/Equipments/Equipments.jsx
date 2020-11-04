import React, { useState, useEffect } from 'react';
import './Equipments.css'
import Layout from '../../components/shared/Layout/Layout'
import Equipment from "../../components/Equipment/Equipment"
import { getEquipments } from "../../services/equipments";

function Equipments(props) {
  const [equipments, setEquipments] = useState([])

  useEffect(() => {
    const fetchEquipments = async () => {
      const equipments = await getEquipments()
      setEquipments(equipments)
    }
   fetchEquipments()
  }, [])
  const equipmentsJSX = equipments.map((equipment, index) => (
    <Equipment
      _id={equipment._id}
      imgURL={equipment.imgURL}
      key={index}
    />
  ));

  return (
    <Layout>
      <div className="equipment-container">
      <h2 className="equipments-user">Add Equipment</h2>
    <div className="equipments">{equipmentsJSX}</div>
    </div>
    </Layout>
  );
}

export default Equipments;