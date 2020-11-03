import React from 'react';
import Layout from "../../components/shared/Layout/Layout"
import "./MyEquipment.css"
import Equipment from "../../components/Equipment/Equipment"
import MyRooms from "../../components/MyRooms/MyRooms"
import MyEquipmentRooms from "../../components/MyEquipmentRooms/MyEquipmentRooms"

function MyEquipment(props) {
  return (
    <div>
      <Layout >
        <Equipment />
        <MyRooms />
        <MyEquipmentRooms />
      </Layout>
      </div>
  );
}

export default MyEquipment;