import api from './index'

const users = {
  getAllUsers: (config:any = {}) => {
    return api.get('/users', config)
  },
  deleteUserById: (id:string|number) => {
    return api.delete('/user', { id })
  },
  test: () => {
    return api.get('/users/test', {})
  },
  createBoard: (id:string|number, data:any) => {
    return api.post(`/users/${id}/boards`, data)
  },
  getAllUserChats: (config:any) => {
    return api.get(`/me/chats`, config)
  },
}
export default users
