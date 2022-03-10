<template>
  <div class="messages-wrapper">
    <div class="messages">
      <li v-for="message in messages" :key="message.id">{{ message.text }}</li>
    </div>
    <form class="message-form d-flex" @submit.prevent="sendMessage">
      <input class="col-9 text-field" v-model="text">
      <button class="col-2" type="submit">Отправить</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useMeassages from '../../composables/chatComposable/useMesasges'
import { useRoute } from 'vue-router'
import chat from '@/api/chat'
const { messages, fetchMessages } = useMeassages()
const route = useRoute()
const text = ref(null)
async function sendMessage() {
  await chat.createMessage(route.params.id, { text: text.value })
  text.value = ''
  //Здесь наверное должен быть вебсокет, прослушивающий апдейт и обновляющий чат
  fetchMessages()
}
</script>
<style lang="scss">
.messages-wrapper {
  background: white;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 0.5rem
}
.messages {
  height: 85%;
  display: block;
}
.message-form {
  margin-top: 1rem;
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
