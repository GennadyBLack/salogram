import api from './index'

const messagesApi = {
  deleteMessageById: (id) => {
    return api.delete('/message', { id })
  },
  createMessage: async (chatId, data) => {
    return await api.post(`/chats/${chatId}/message`, data)
  },
  updateMessage: (id, data) => {
    return api.patch(`/messages/${id}`, data)
  },
  getMessageById: (id, config) => {
    return api.get(`/messages/${id}`, config)
  },
  getMessagesList: (id, config) => {
    return api.get(`/messages/${id}`, config)
  },
}
export default messagesApi
