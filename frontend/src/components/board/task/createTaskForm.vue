<template>
  <div>
    <input type="text" v-model="task" @blur="blur" class="create-task-input" />
  </div>
</template>
<script setup>
import useTask from '../../../composables/TasksComposable/index'
const { task, createTask } = useTask()
const props = defineProps({ id: Number, update: Function })
const emit = defineEmits(['blur'])

const blur = async () => {
  await createTask(props?.id)
  //update board data
  await props.update()
  emit('blur')
}
</script>
