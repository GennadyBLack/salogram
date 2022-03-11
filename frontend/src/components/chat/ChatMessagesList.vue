<template>
  <div class="messages-wrapper" v-if="route.params.id">
    <div class="messages">
      <div v-if="isTyping" class="types">Пользователь печатает</div>
      <MessageItem
        v-for="message in messages"
        :key="message.id"
        :message="message"
        :side="`${message.user.id == current_user.id ? 'right' : 'left'}`"
      />
    </div>
    <form class="message-form d-flex" @submit.prevent="sendMessage">
      <input class="col-9 text-field" @keyup="socketType" v-model="text" />
      <button class="col-2" type="submit">Отправить</button>
    </form>
  </div>
  <div v-else class="nomessage">Выберите чат позязя</div>
</template>

<script setup>
import MessageItem from './MessageItem.vue'
import useMeassages from '../../composables/chatComposable/useMesasges'
import { socketEmit, socketSub } from '../../composables/socketComposables'
import { current_user } from '../../composables/CurrentUserComposable/index'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import chat from '@/api/chat'
const { messages, fetchMessages } = useMeassages()
const route = useRoute()
const text = ref(null)
const isTyping = ref(false)
socketSub('typing', () => {
  console.log('istyping')
  isTyping.value = true
})
async function sendMessage() {
  await chat.createMessage(route.params.id, { text: text.value })
  text.value = ''
  //Здесь наверное должен быть вебсокет, прослушивающий апдейт и обновляющий чат
  fetchMessages()
}
function socketType() {
  socketEmit('typing', {
    currentId: current_user.value.id,
    chatId: route.params.id,
  })
}
</script>
<style lang="scss">
.messages-wrapper {
  background: white;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 0.5rem;
  border-radius: 3px;
  position: relative;
}
.messages {
  height: 85%;
  display: block;
  overflow: auto;
  display: flex;
  flex-direction: column-reverse;
}
.message-form {
  width: 63%;
  position: fixed;
  margin-top: 1rem;
}
.nomessage {
  background: linear-gradient(#70ef67, #ff961f);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.types {
  color: black;
}
.text-field {
  padding: 0.5rem 0.5rem;
  border: 1px solid dodgerblue;
  background-color: white;
  &:focus {
    outline: 1px solid dodgerblue;
    border: 1px solid dodgerblue;
  }
}
</style>
