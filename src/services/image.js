import axios from 'axios'
const baseUrl = '/api/image'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const upload = async newObject => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(baseUrl,newObject, config)
  return response.data
}


const updated = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`,newObject)
  return response.data
}

const deleted = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.data
}


const imageService = {
  getAll,
  upload,
  updated,
  deleted,
  setToken,
}

export default imageService