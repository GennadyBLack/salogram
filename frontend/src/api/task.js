import api from './index'

export const getAllTasks = () => {
  return api.get('/tasks', {})
}

export const deleteTaskById = (id) => {
  return api.delete('/task', { id })
}

export const createTask = (id, data) => {
  return api.post(`/columns/${id}/task`, data)
}

export const updateTask = (id, data) => {
  return api.patch('/task/' + id, { data })
}

export const getTaskById = (id) => {
  return api.get(`task/${id}`)
}
