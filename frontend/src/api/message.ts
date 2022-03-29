import api from './index'

const messagesApi = {
  deleteMessageById: (id:string|number) => {
    return api.delete('/message', { id })
  },
  createMessage: async (chatId:string|number, data:any) => {
    return await api.post(`/chats/${chatId}/message`, data)
  },
  updateMessage: (id:string|number, data:any) => {
    return api.patch(`/messages/${id}`, data)
  },
  getMessageById: (id:string|number, config:any) => {
    return api.get(`/messages/${id}`, config)
  },
  getMessagesList: (id:string|number, config:any) => {
    return api.get(`/messages/${id}`, config)
  },
}
export default messagesApi
