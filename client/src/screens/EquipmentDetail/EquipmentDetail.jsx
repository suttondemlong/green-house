import React, {useState, useEffect} from 'react';
import '../EquipmentDetail/EquipmentDetail'
import { getEquipment } from "../../services/equipments"
import {useParams} from "react-router-dom"

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
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h2>Equipment Details</h2>
      <img src={detail.imgURL} alt={detail.name} />
      <p>{detail.name}</p>
      <hr className='general-hr'></hr>
    </div>
  );
}

export default EquipmentDetail;