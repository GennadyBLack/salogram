import { ref, reactive, computed, onMounted, watch, watchEffect } from 'vue'
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
    if (id) {
      getChat.value = (await chat.getChatById(id, {})).data
    } else {
      console.log('pleese provide id')
    }
  }

  onMounted(async () => {
    console.log('mounted chatComposable')
    await fetchChat()
  })

  watch(id, (curValue, oldValue) => {
    getChat.value = null
    if (curValue !== oldValue) {
      fetchChatById(curValue)
    }
  })

  //fetchChat происходит 3 раза при загрузке
  // watchEffect(() =>
  //     fetchChatById(
  //       route.params.id
  //     )
  // );
  return { chats, getChat, fetchChat, fetchChatById }
}
