import axios from 'axios'
const baseUrl = '/api/image'

const getAll = () => {
  const request = axios.get(baseUrl)
  console.log(request)
  return request.then(response => response.data)
}
const upload = async newObject => {
  const response = await axios.post(baseUrl,newObject)
  console.log('Enviada')
  return response.data
}

const imageService = {
  getAll,
  upload
}

export default imageService