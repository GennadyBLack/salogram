<template>
  <div>
    <div class="users-list">
      <div class="users-list__item" v-for="user in test" :key="user.id">
        <div class="user-list__title">{{ user.username }}</div>
        <button
          @click="create_chat(user.id)"
          class="user-list__button"
          v-if="user.id !== current_user.id"
        >
          Create chat
        </button>
        {{ user.chats }}
      </div>
    </div>

    <button @click="sock">get all Chat</button>
    <button @click="chat">chat</button>
  </div>
</template>

<script setup>
import useUsers from '@/composables/usersComposables/index'
import { current_user } from '@/composables/CurrentUserComposable/index'
import chat from '../../api/chat'
import users from '../../api/user'
// const { socket, socketEmit } = useSocket()
// import useSocket from '@/composables/socketComposables/index'

const { users: test } = useUsers()
// console.log(socket)
const sock = () => {
  users.getAllUserChats({})
  // socketEmit('testus')
}
const create_chat = async (personId) => {
  await chat.createChat({ current: current_user.value.id, person: personId })
}
</script>
<style lang="scss">
.test {
  &-testus {
    color: red;
  }
}
</style>
