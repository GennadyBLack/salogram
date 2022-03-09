<template>
  <div class="main-window d-flex row m-auto">
    <div class="chats col-4">
      <ul>
        <li v-for="chat in chats" :key="chat.id" class="main-li">
          <template v-for="user in chat.users"
            ><router-link
              class="chat-link"
              v-if="current_user.id !== user.id"
              :key="user.id"
              :to="{ name: 'directus', params: { id: user.id } }"
            >
              {{ user.username }}
            </router-link></template
          >
        </li>
      </ul>
    </div>
    <div class="dialog col-8"></div>
  </div>
</template>

<script setup>
import userChats from '../../composables/chatComposable'
import { current_user } from '@/composables/CurrentUserComposable'
const { chats } = userChats()
</script>

<style scoped>
.main-window {
  width: 50vw;
}
.main-li {
  border-bottom: 1px solid gray;
}
.chats,
.dialog {
  min-height: 50vh;
  height: auto;
  border: 1px solid #16a149;
  background: white;
  color: black;
  padding: 1rem;
}
</style>
