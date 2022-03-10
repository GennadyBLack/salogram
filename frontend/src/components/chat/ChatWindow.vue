<template>
  <div class="form main-window">
    <div class="wrapper chat">
      <div class="col-4 chat-menu">
        <ul>
          <li v-for="chat in chats" :key="chat.id">
            <template v-for="user in chat.users"
              ><router-link
                class="chat-link"
                v-if="current_user.id !== user.id"
                :key="user.id"
                :to="{ name: 'current_chat', params: { id: chat.id } }"
              >
                {{ user.username }}
              </router-link></template
            >
          </li>
        </ul>
      </div>
      <div class="col-8 chat-messages">
        <ChatMessagesList />
      </div>
    </div>
  </div>
</template>

<script setup>
import ChatMessagesList from './ChatMessagesList.vue'
import userChats from '../../composables/chatComposable'
import { current_user } from '@/composables/CurrentUserComposable'
const { chats } = userChats()
</script>

<style scoped lang="scss">
.main-window {
  width: 95%;
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
.wrapper {
  box-sizing: border-box;
  width: 100%;
}
.chat {
  max-height: 40rem;
  padding: 2rem;
  &-menu {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
  }
  &-messages {
    max-height: 100%;
    /*overflow: auto;*/
  }
}
</style>
