// @ts-ignore
import api from './index'

export const login = (data:any) => {
  return api.post('/auth/login', data, data)
}

export const register = (data:any) => {
  return api.post('/auth/register', data, data)
}

export const me = async (config = {}) => {
  console.log(config, 'config')
  return await api.post('/auth/me', {}, config)
}
