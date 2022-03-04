import api from './index'

export const getAllUsers = () => {
  return api.get('/users', {})
}

export const deleteUserById = (id) => {
  return api.delete('/user', { id })
}

export const test = () => {
  return api.get('/users/test', {})
}

export const createBoard = (id, data) => {
  return api.post(`/users/${id}/boards`, data)
}
