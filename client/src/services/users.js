import api from './apiConfig'

export const getUsers = async () => {
  try {
      const response = await api.get('/users')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getUser = async () => {
  try {
      const response = await api.get(`/users/5fa46e41e342102b4e7ba5be`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createUser = async user => {
  try {
      const response = await api.post('/users', user)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateUser = async (id, user) => {
  try {
      const response = await api.put(`/users/${id}`, user)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteUser = async id => {
  try {
      const response = await api.delete(`/users/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}