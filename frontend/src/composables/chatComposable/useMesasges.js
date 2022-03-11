import { ref, onMounted, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import messagesApi from '../../api/message'

const initFilter = { limit: 10, page: 1 }

export default () => {
  const messages = ref([])
  const route = useRoute()
  const id = computed(() => route.params.id)

  const fetchMessages = async (config = initFilter) => {
    messages.value = (await messagesApi.getMessagesList(id.value, config)).data
  }

  onMounted(async () => {
    if (id.value) {
      alert(id.value)
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

  return { messages: computed(() => messages.value.reverse()), fetchMessages }
}
