import api from './index'

const chat = {
  getAllUserChat: (config = {}) => {
    return api.get('/chats', config)
  },
  deleteChatById: (id) => {
    return api.delete('/chats', { id })
  },
  createChat: (data) => {
    return api.post(`/chats`, data)
  },
}
export default chat
