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
              :to="{ name: 'current_chat', params: { id: user.id } }"
            >
              {{ user.username }}
            </router-link></template
          >
        </li>
      </ul>
    </div>
    <div class="dialog col-8">
      <ChatMessagesList />
    </div>
  </div>
</template>

<script setup>
import ChatMessagesList from './ChatMessagesList.vue'
import userChats from '../../composables/chatComposable'
import { current_user } from '@/composables/CurrentUserComposable'
const { chats } = userChats()
</script>

<style scoped>
.main-window {
  width: 50vw;
}
.main-li {
  opacity: 0.7;
  text-decoration: none;
  border-bottom: 1px solid gray;
  list-style-type: none; /* Убираем маркеры */
  padding: 1rem;
  background: #eee;
}
.main-li:hover {
  opacity: 1;
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
.chat-link {
  text-decoration: none;
  color: black;
}
</style>
