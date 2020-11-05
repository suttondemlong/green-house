import React, { useState, useEffect } from 'react';
import './Equipments.css'
import Layout from '../../components/shared/Layout/Layout'
import Equipment from "../../components/Equipment/Equipment"
import { getEquipments } from "../../services/equipments";
import Search from '../../components/Search/Search';
import Sort from '../../components/Sort/Sort'
import { AZ, ZA, lowestFirst, highestFirst } from "../../utils/sort"

function Equipments(props) {
  const [equipments, setEquipments] = useState([])
  const [queriedEquipments, setQueriedEquipments] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [sortType, setSortType] = useState([])
  
  useEffect(() => {
    const fetchEquipments = async () => {
      const equipments = await getEquipments()
      setEquipments(equipments)
      setQueriedEquipments(equipments)
    }
   fetchEquipments()
  }, [])

  const handleSort = type => {
    setSortType(type)
    switch (type) {
      case "name-ascending":
        setQueriedEquipments(AZ(queriedEquipments))
        break
      case "name-descending":
        setQueriedEquipments(ZA(queriedEquipments))
        break
      case "price-ascending":
        setQueriedEquipments(lowestFirst(queriedEquipments))
        break
      case "price-descending":
        setQueriedEquipments(highestFirst(queriedEquipments))
        break
      default:
        break
    }
  }

  const handleSearch = event => {
    const searchedEquipments = equipments.filter(equipments => equipments.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setQueriedEquipments(searchedEquipments, () => handleSort(sortType))
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
        {(searchValue === '') ? null : <h2>Results For {searchValue} </h2>}
        <Sort onSubmit={handleSubmit} onChange={handleSort} queriedEquipments={queriedEquipments}/>
    <div className="equipments">{equipmentsJSX}</div>
    </div>
    </Layout>
  );
}

export default Equipments;