import axios from 'axios'
import { getToken } from '../helpers/Utils/localStorageHelper'
import { setNotice } from '../composables/ErrorsComposable/index'
// Default config for the axios instance
const axiosParams = {
  // Set different base URL based on the environment
  baseURL:
    process.env.NODE_ENV === 'development' ? 'http://localhost:8081/api' : '/', // Alternative if you have more environments
  // baseURL: process.env.VUE_APP_API_BASE_URL
}
// Create axios instance with default params
const axiosInstance = axios.create(axiosParams)
const token = getToken()
if (token) {
  axiosInstance.defaults.headers.common['Authorization'] = `Token ${token}`
}

// Main api function
axiosInstance.interceptors.response.use(
  (res) => {
    if (token) {
      axiosInstance.defaults.headers.common['Authorization'] = `Token ${token}`
    }
    return res
  },
  (error) => {
    if (error?.response?.status === 404) {
      setNotice('Такого запроса нет')
    } else {
      console.log('error')
    }
  }
)

axiosInstance.interceptors.request.use(
  (res) => {
    if (token) {
      axiosInstance.defaults.headers.common['Authorization'] = `Token ${token}`
    }
    return res
  },
  (error) => {
    console.log(error.response.status, '-ERROR BAABY')
  }
)
const api = (axios) => {
  // Wrapper functions around axios
  return {
    get: (url, config) => axios.get(url, config),
    post: (url, body, config) => axios.post(url, body, config),
    patch: (url, body, config) => axios.patch(url, body, config),
    delete: (url, config) => axios.delete(url, config),
  }
}
// Initialise the api function and pass axiosInstance to it
export default api(axiosInstance)
