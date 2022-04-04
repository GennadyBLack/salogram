import { ref, onMounted, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { socketSub, socketEmit } from '../socketComposables'
import messagesApi from '../../api/message'
import { current_user } from '../CurrentUserComposable'

const initFilter = { limit: 10, page: 1 }

export default () => {
  const messages = ref([])
  const route = useRoute()
  const id = computed(() => route.params.id)

  const fetchMessages = async (config = initFilter) => {
    if (id.value) {
      socketEmit('openChat', {
        chatId: id.value,
      })
      const fetched = (await messagesApi.getMessagesList(id.value, config)).data
        .data
      messages.value = fetched
    } else {
      console.log('please provide id')
    }
  }

  onMounted(async () => {
    if (id.value) {
      await fetchMessages()
    }
  })

  watch(
    id,
    (curValue, oldValue) => {
      messages.value = []
      //   console.log(curValue.params.id, oldValue.params.id)
      console.log(curValue, oldValue)
      fetchMessages()
    },
    { deep: true }
  )

  return { messages: computed(() => messages.value), fetchMessages }
}
