import { ref, computed } from 'vue'
import { createTask as addTask } from '@/api/task'
import useBoard from '../boardComposables/useBoardComp'

export default () => {
  const task = ref(null)
  const createTask = async (id) => {
    try {
      await addTask(id, { title: task.value })
    } catch (error) {
      console.log('error from create task')
    }
  }

  const deleteTask = (id) => {
    try {
      deleteTaskById(id)
    } catch (error) {
      console.log(error)
    }
  }
  const setTask = (value) => {
    task.value = value
  }

  return {
    task,
    createTask,
    deleteTask,
    setTask,
  }
}
