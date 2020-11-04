import React, { useState, useEffect } from 'react';
import './Equipments.css'
import Layout from '../../components/shared/Layout/Layout'
import Equipment from "../../components/Equipment/Equipment"
import { getEquipments } from "../../services/equipments";
import Search from '../../components/Search/Search';

function Equipments(props) {
  const [equipments, setEquipments] = useState([])
  const [queriedEquipments, SetQueriedEquipments] = useState([])
  const [searchValue, setSearchValue] = useState('')
  
  useEffect(() => {
    const fetchEquipments = async () => {
      const equipments = await getEquipments()
      setEquipments(equipments)
      SetQueriedEquipments(equipments)
    }
   fetchEquipments()
  }, [])

  const handleSearch = event => {
    const searchedEquipments = equipments.filter(equipments => equipments.name.toLowerCase().includes(event.target.value.toLowerCase()))
    SetQueriedEquipments(searchedEquipments)
    setSearchValue(event.target.value)
  }

  const handleSubmit = event => event.preventDefault()

  const equipmentsJSX = queriedEquipments.map((equipment, index) => (
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
        <Search onSubmit={handleSubmit} onChange={handleSearch} searchValue={searchValue}/>
        {(searchValue === '') ? <h2></h2> : <h2>Results For {searchValue} </h2>}
    <div className="equipments">{equipmentsJSX}</div>
    </div>
    </Layout>
  );
}

export default Equipments;