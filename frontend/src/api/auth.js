import api from './index'

export const login = (data) => {
  return api.post('/auth/login', data, data)
}

export const register = (data) => {
  return api.post('/auth/register', data, data)
}

export const me = (config = {}) => {
  console.log(config, 'config')
  return api.post('/auth/me', {}, config)
}
// export const deleteTaskById = (id) =>{
//     return api.delete('/task',{id})
// }
