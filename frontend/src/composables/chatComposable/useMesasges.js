import { ref, onMounted, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { messages as messageApi } from '@/api/message'

const initFilter = { limit: 10, page: 1 }

export default () => {
  const messages = ref([])
  const route = useRoute()
  const id = computed(() => route.params.id)

  const fetchMessages = async (config = initFilter) => {
    console.log(id.value, 'route.params.id')
    // messages.value = await messageApi.getMessagesList(config)
  }

  onMounted(async () => {
    await fetchMessages()
  })

  watch(
    id,
    (curValue, oldValue) => {
      //   console.log(curValue.params.id, oldValue.params.id)
      console.log(curValue, oldValue)
      fetchMessages()
    },
    { deep: true }
  )

  return { messages, fetchMessages }
}
