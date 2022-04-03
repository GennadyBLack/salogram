import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import chat from '../../api/chat'

export default () => {
  const chats = ref(null)
  const getChat = ref(null)
  const route = useRoute()
  const id = computed(() => {
    return route.params.id
  })

  const fetchChat = async () => {
    chats.value = (await chat.getAllUserChat({})).data
  }
  const fetchChatById = async (id) => {
    getChat.value = (await chat.getChatById(id, {})).data
  }

  onMounted(async () => {
    console.log('mounted chatComposable')
    await fetchChat()
  })
  watch(id, (curValue, oldValue) => {
    fetchChatById(curValue)
  })
  return { chats, getChat, fetchChat, fetchChatById }
}
