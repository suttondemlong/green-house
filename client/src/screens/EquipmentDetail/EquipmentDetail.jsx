import React, { useState, useEffect } from 'react';
import '../EquipmentDetail/EquipmentDetail.css'
import { getEquipment } from "../../services/equipments"
import { Link, useParams } from "react-router-dom"
import energy from '../../assets/noun_Energy_2965874.png'
import Layout from '../../components/shared/Layout/Layout';

function EquipmentDetail(props) {
  const [detail, setDetail] = useState([])
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchEquipment = async () => {
      const res = await getEquipment(id)
      setDetail(res)
      setLoaded(true)
    }
    fetchEquipment()
    console.log(detail)
  }, [])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    <Layout>
    <div>
      <h2 className="e-detail-title">Equipment Details</h2>
      <img className="e-detail-image" src={detail.imgURL} alt={detail.name} />
      <p className="e.detail-name">{detail.name}</p>
      <button className="basic-button">Details</button>
      <hr className='general-hr'></hr>
      <h2 className="e-detail-title">This Item Saved You</h2>
      <div className="e-detail-saved-container">
        <img className="e-detail-image2" src={energy} />
        <div className="e-detail-stats-container">
          <h4>Total Money Saved</h4>
            <p>${(Math.round( detail.money  * 100) / 100).toFixed(2)}</p>
          <h4>Total Energy Saved</h4>
          <p>{detail.energy} wtts</p>
          <h4>This is equivalent to saving</h4>
          <p>{detail.trees} trees</p>
        </div>
        </div>
        <Link to='/similaritems'>
        <button className="basic-button">
            Browse Similar Products
        </button>
        </Link>
      </div>
      </Layout>
  );
}

export default EquipmentDetail;