import { ref, computed, onMounted } from 'vue'
import chat from '../../api/chat'

export default () => {
  const chats = ref(null)

  const fetchChat = async () => {
    chats.value = (await chat.getAllUserChat({})).data
  }
  const fetchChatById = async (id) => {
    return await chat.getChatById(id, {})
  }

  onMounted(async () => {
    await fetchChat()
  })
  return { chats, fetchChat, fetchChatById }
}
