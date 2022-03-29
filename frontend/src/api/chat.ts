import api from './index'

const chat = {
  getAllUserChat: (config = {}) => {
    return api.get('/me/chats', config)
  },
  getChatById: (id:string|number, config = {}) => {
    return api.get(`/chats/${id}`, config)
  },
  deleteChatById: (id:string|number) => {
    return api.delete('/chats', { id })
  },
  createChat: (data:any) => {
    return api.post(`/chats`, data)
  },
  createMessage: (id:string|number, data:any) => {
    return api.post(`/chats/${id}/message`, data)
  },
}
export default chat
