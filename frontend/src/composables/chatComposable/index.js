import { ref, computed, onMounted } from 'vue'
import chat from '../../api/chat'

export default () => {
  const chats = ref(null)
  const getChat = ref(null)

  const fetchChat = async () => {
    chats.value = (await chat.getAllUserChat({})).data
  }
  const fetchChatById = async (id) => {
    getChat.value = (await chat.getChatById(id, {})).data
  }

  onMounted(async () => {
    await fetchChat()
  })
  return { chats, getChat, fetchChat, fetchChatById }
}
