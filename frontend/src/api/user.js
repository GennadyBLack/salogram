import api from './index'

const users = {
  getAllUsers: (config = {}) => {
    return api.get('/users', config)
  },
  deleteUserById: (id) => {
    return api.delete('/user', { id })
  },
  test: () => {
    return api.get('/users/test', {})
  },
  createBoard: (id, data) => {
    return api.post(`/users/${id}/boards`, data)
  },
  getAllUserChats: (config) => {
    return api.get(`/me/chats`, config)
  },
}
export default users
