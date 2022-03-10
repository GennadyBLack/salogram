<template>
  <div class="messages-wrapper">
    <div class="messages">
      <li v-for="message in messages" :key="message.id">{{message.text}}</li>
    </div>
    <form class="text-field row" @submit.prevent="sendMessage">
      <v-input-field class="col-9" v-model="text"></v-input-field>
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
  console.log('sending')
  await chat.createMessage(route.params.id, { text: text.value })
  text.value = ""
  //Здесь наверное должен быть вебсокет, прослушивающий апдейт и обновляющий чат
  fetchMessages();
}
</script>
<style lang="scss">
.messages-wrapper {
  background: #eee;
  width: 100%;
  height: 100%;
  overflow: scroll;
}
.messages {
  height: 85%;
  display: block;
}
.text-field {
  height: 15%;
  border: 1px solid black;
  background-color: white;
}
</style>
