<template>
  <router-link :to="{ name: 'current_chat', params: { id: chatId } }">
    {{ user.username }}
    <span :class="{ online: status }"></span>
  </router-link>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { socketSub } from '../../composables/socketComposables'
let { user, chatId } = defineProps({
  user: Object,
  chatId: [String, Number],
})
let status = ref(false)
console.log(user.id, 'user.id')
socketSub(`status:${user.id}`, (data) => {
  status.value = data
})
</script>
<style lang="scss">
.online {
  height: 1rem;
  width: 1rem;
  background: green;
  border-radius: 3rem;
  display: block;
}
</style>
