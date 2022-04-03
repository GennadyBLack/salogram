import { ref, reactive, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import chat from '../../api/chat'

export default () => {
  const chats = ref(null)
  const getChat = ref(null)
  const route = useRoute()
  const id = computed(() => {
    console.log(route.params.id, 'ja zagruzil')
    return route.params.id
  })

  const fetchChat = async () => {
    chats.value = (await chat.getAllUserChat({})).data
  }
  const fetchChatById = async (id) => {
    getChat.value = (await chat.getChatById(id, {})).data
  }

  onMounted(async () => {
    await fetchChat()
  })
  // watch(id, (curValue, oldValue) => {
  //   getChat.value = null
  //   //   console.log(curValue.params.id, oldValue.params.id)
  //   // console.log(curValue, oldValue)
  //   // if (curValue !== oldValue) {
  //   //   // fetchChatById(curValue)
  //   // }
  // })
  return { chats, getChat, fetchChat, fetchChatById }
}
