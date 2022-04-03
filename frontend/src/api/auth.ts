// @ts-ignore
import api from './index'
import { loginData } from '@/models/interface'

export const login = (data: loginData) => {
  return api.post('/auth/login', data, data)
}

export const register = (data: loginData) => {
  return api.post('/auth/register', data, data)
}

export const me = async (config = {}) => {
  console.log(config, 'config')
  return await api.post('/auth/me', {}, config)
}
