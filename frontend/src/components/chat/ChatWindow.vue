<template>
  <div class="">
    <div class="wrapper chat">
      <div class="col-4 chat-menu">
        <ul class="chat-list">
          <li v-for="chat in chats" :key="chat.id" class="chat-link">
            <div class="chatter"  v-for="user in chat.users">
              <router-link
                      :key="user.id"
                      :to="{ name: 'current_chat', params: { id: chat.id } }"
              >
              <base-list-item v-if="current_user.id !== user.id">
                <template #text>
                    <p>{{ user.username }}</p>
                </template>
              </base-list-item>
              </router-link>
            </div>

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
}
.main-li:hover {
  opacity: 1;
}
.chats,
.dialog {
  min-height: 50vh;
  height: auto;
  border: 1px solid #16a149;
  color: black;
  padding: 1rem;
}
.chat-link {
  text-decoration: none;
  color: black;
  height: 2rem;
  display: block;
}
.wrapper {
  box-sizing: border-box;
  width: 100%;
  min-height: 50vh;
}
.chat {
  min-height: 35rem;
  padding: 2rem;
  &-menu {
    border-right: 1px solid white;
    height: 50vh;
    overflow-x: auto;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
  }
  &-list {
    width: 90%;
  }
  &-messages {
    height: 50vh;
    min-height: 100%;
    max-height: 100%;
    border-radius: 3px;
    /*overflow: auto;*/
  }
}
.form {
  margin: 2% auto;
}
</style>
