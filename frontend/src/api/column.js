import api from './index'

export const deleteColumnById = (id) => {
  return api.delete('/columns', { id })
}

//* id - board id
export const createColumn = (id, data) => {
  return api.post(`/columns/${id}`, data)
}

export const updateColumn = (id, data) => {
  return api.patch('/columns/' + id, { data })
}

export const getColumnById = (id, config) => {
  return api.get(`/columns/${id}`, config)
}
