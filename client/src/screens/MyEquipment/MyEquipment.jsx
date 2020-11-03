import React from 'react';
import Layout from "../../components/shared/Layout/Layout"
import "./MyEquipment.css"
import Equipment from "../../components/Equipment/Equipment"
import MyRooms from "../../components/MyRooms/MyRooms"

function MyEquipment(props) {
  return (
    <div>
      <Layout >
        <Equipment />
        <MyRooms />
      </Layout>
      </div>
  );
}

export default MyEquipment;