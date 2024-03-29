import axios from 'axios'
// @ts-ignore
import { getToken } from '../helpers/Utils/localStorageHelper'
// @ts-ignore
import { setNotice } from '../composables/ErrorsComposable/index'
// Default config for the axios instance
const axiosParams = {
  // Set different base URL based on the environment
  baseURL:
    process.env.NODE_ENV === 'development' ? 'http://localhost:8081/api' : '/', // Alternative if you have more environments
  // baseURL: process.env.VUE_APP_API_BASE_URL
  headers: {
    Authorization: `Token ${getToken()}` || '',
  },
}
// Create axios instance with default params
const axiosInstance = axios.create(axiosParams)

// Main api function
axiosInstance.interceptors.response.use(
  (res) => {
    // const token = getToken()
    // if (token) {
    //   axiosInstance.defaults.headers.common['Authorization'] = `Token ${token}`
    // }
    return res
  },
  (error) => {
    if (error?.response?.status >= 400) {
      console.dir(error)
      setNotice(
        `${error?.response?.data?.error}` ||
          `${error?.response?.data}` ||
          'Произошла ошибка'
      )
    } else {
      console.log('error')
    }
  }
)

axiosInstance.interceptors.request.use(
  (res) => {
    // const token = getToken()
    // if (token) {
    //   axiosInstance.defaults.headers.common['Authorization'] = `Token ${token}`
    // }
    return res
  },
  (error) => {
    console.log(error.response.status, '-ERROR BAABY')
  }
)
const api = (axios:any) => {
  // Wrapper functions around axios
  return {
    get: (url:string, config?:any) => axios.get(url, config),
    post: (url:string, body:any, config?:any) => axios.post(url, body, config),
    patch: (url:string, body:any, config?:any) => axios.patch(url, body, config),
    delete: (url:string, config?:any) => axios.delete(url, config),
  }
}
// Initialise the api function and pass axiosInstance to it
export default api(axiosInstance)
