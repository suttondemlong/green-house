import api from './apiConfig'

export const getEquipments = async () => {
  try {
      const response = await api.get('/equipments')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getEquipment = async id => {
  try {
      const response = await api.get(`/equipments/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}