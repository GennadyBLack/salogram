import api from './index'

const chat = {
  getAllUserChat: (config = {}) => {
    return api.get('/me/chats', config)
  },
  deleteChatById: (id) => {
    return api.delete('/chats', { id })
  },
  createChat: (data) => {
    return api.post(`/chats`, data)
  },
  createMessage: (id, data) => {
    return api.post(`/chats/${id}/message`, data)
  },
}
export default chat
