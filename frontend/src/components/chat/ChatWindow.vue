<template>
  <div class="">
    <div class="wrapper chat">
      <div class="col-3 chat-menu">
        <ul>
          <li v-for="chat in chats" :key="chat.id" class="chat-link">
            <template v-for="user in chat.users">
              <chat-menu-link
                :chatId="chat.id"
                :user="user"
                v-if="current_user.id !== user.id"
                :key="user.id"
              />
            </template>
          </li>
        </ul>
      </div>
      <div class="col-8 chat-messages">
        <ChatMessagesList
          :get-chat="getChat"
          :fetch-chat-by-id="fetchChatById"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ChatMenuLink from './ChatMenuLink.vue'
import ChatMessagesList from './ChatMessagesList.vue'
import userChats from '../../composables/chatComposable'
import { current_user } from '@/composables/CurrentUserComposable'
const { chats, getChat, fetchChatById } = userChats()
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
  align-items: center;
  display: flex;
  align-content: space-between;
  justify-content: flex-start;
  text-decoration: none;
  color: black;
  height: 4rem;
  width: 100%;
  border-bottom: 1px solid #eee;
  a {
    display: flex;
    flex-direction: row;
    color: black;
  }
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
    border-radius: 3px;
    background: white;
    border-right: 1px solid white;
    height: 50vh;
    overflow-y: auto;
    display: flex;
    border-right: 3px solid #eee;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    ul {
      width: 100%;
    }
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
