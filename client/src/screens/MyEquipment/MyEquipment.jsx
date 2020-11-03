import React from 'react';
import Layout from "../../components/shared/Layout/Layout"
import "./MyEquipment.css"
import Equipment from "../../components/Equipment/Equipment"
import MyRooms from "../../components/MyRooms/MyRooms"
import MyEquipmentRooms from "../../components/MyEquipmentRooms/MyEquipmentRooms"
import RoomsEquipment from "../../components/RoomsEquipment/RoomsEquipment"

function MyEquipment(props) {
  return (
    <div>
      <Layout >
        <Equipment />
        <MyRooms />
        <MyEquipmentRooms />
        <RoomsEquipment />
      </Layout>
      </div>
  );
}

export default MyEquipment;