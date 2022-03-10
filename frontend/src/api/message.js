import api from './index'
const messages = {
  deleteMessageById: (id) => {
    return api.delete('/message', { id })
  },
  createMessage: (chatId, data) => {
    return api.post(`/chats/${chatId}/message`, data)
  },
  updateMessage: (id, data) => {
    return api.patch(`/messages/${id}`, data)
  },
  getMessageById: (id, config) => {
    return api.get(`/messages/${id}`, config)
  },
  getMessagesList: (config) => {
    return api.get(`/messages`, config)
  },
}
export default messages
