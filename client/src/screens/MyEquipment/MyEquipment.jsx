import React from 'react';
import Layout from "../../components/shared/Layout/Layout"
import "./MyEquipment.css"
import MyEquipment from "../../components/MyEquipment/MyEquipment"
import MyRooms from "../../components/MyRooms/MyRooms"
import MyEquipmentRooms from "../../components/MyEquipmentRooms/MyEquipmentRooms"
import RoomsEquipment from "../../components/RoomsEquipment/RoomsEquipment"

function MyEquipmentScreen(props) {
  return (
    <div>
      <Layout >
        <MyEquipment />
        <hr className="general-hr"></hr>
        <MyRooms />
        <hr className="general-hr"></hr>
        <MyEquipmentRooms />
        <hr className="general-hr"></hr>
        <RoomsEquipment />
      </Layout>
      </div>
  );
}

export default MyEquipmentScreen;