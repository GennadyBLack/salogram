<template>
  <div class="main-body container">
    <div class="users-list">
      <base-list-item
        v-for="user in test?.data"
        :key="user.id"
        :item-text="user.username"
        :item-img="user?.image || null"
      >
        <template #actions v-if="user.id !== current_user.id">
          <base-button class="outline outline-green" @click="pingPong(user.id)">
            Ping
          </base-button>
          <base-button
            class="outline outline-green"
            @click="create_chat(user.id)"
          >
            Create chat
          </base-button>
        </template>
      </base-list-item>
    </div>
    <div class="controls">
      <base-button class="full full-blue" @click="sock"
        >get all Chat</base-button
      >
      <base-button class="full full-green" @click="chat">chat</base-button>
    </div>
  </div>
</template>

<script setup>
import useUsers from '@/composables/usersComposables/index'
import { current_user } from '@/composables/CurrentUserComposable/index'
import chat from '../../api/chat'
import users from '../../api/user'
import { socketEmit, socketSub } from '../../composables/socketComposables'
const { users: test } = useUsers()
const sock = () => {
  users.getAllUserChats({})
  // socketEmit('testus')
}
const create_chat = async (personId) => {
  await chat.createChat({ current: current_user.value.id, person: personId })
}
function pingPong(id) {
  socketEmit('ping', { userID: id })
}

socketSub('pong', (pong) => {
  console.log(pong)
})
</script>
<style lang="scss">
.main-body {
  height: 95vh;
}
/*.users-list {*/
/*  display: flex;*/
/*  flex-wrap: wrap;*/
/*  background: #eee;*/
/*  border-radius: 3px;*/
/*  padding: 1rem;*/
/*  margin: 1rem 0;*/
/*  &__item {*/
/*    background: rgb(172, 158, 158);*/
/*    border-radius: 3px;*/
/*    padding: 1rem;*/
/*    margin: 1rem;*/
/*  }*/
/*}*/
</style>
