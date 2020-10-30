import api from './apiConfig'

export const getArticles = async () => {
  try {
      const response = await api.get('/articles')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getArticle = async id => {
  try {
      const response = await api.get(`/articles/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createArticle = async article => {
  try {
      const response = await api.post('/articles', article)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateArticle = async (id, article) => {
  try {
      const response = await api.put(`/articles/${id}`, article)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteArticle = async id => {
  try {
      const response = await api.delete(`/articles/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}