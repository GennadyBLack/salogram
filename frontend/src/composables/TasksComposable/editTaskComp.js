import { ref, watch, onMounted } from 'vue'
import { getTaskById } from '../../api/task'
export default (id) => {
  const editTaskForm = ref(null)

  const fetchTask = async () => {
    try {
      console.log(id, 'ID')
      editTaskForm.value = (await getTaskById(id)).data
    } catch (error) {
      console.log(error, 'Error from fetch task')
    }
  }
  onMounted(() => {
    fetchTask()
  })

  watch(
    [id],
    (value) => {
      fetchTask()
    },
    { deep: true }
  )
  return { editTaskForm }
}
