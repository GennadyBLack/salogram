<template>
  <div class="messages-wrapper" v-if="route.params.id">
    <div class="messages" ref="windowComponent">
      {{ chatter?.id }}-id
      <pencil v-if="isTyping" class="types" />
      <MessageItem
        ref="scrollComponent"
        v-for="message in messages"
        :key="message?.id"
        :message="message"
        :side="`${message?.user?.id == current_user.id ? 'right' : 'left'}`"
      />
    </div>
    <form class="message-form d-flex" @submit.prevent="sendMessage">
      <InputField
        extend-class="full full-blue"
        @keydown="socketStartType"
        @keyup="socketStopType"
        v-model="text"
      />
      <base-button class="full full-blue" type="submit">Отправить</base-button>
    </form>
  </div>
  <div v-else class="nomessage">Выберите чат позязя</div>
</template>
<script setup>
import _ from 'lodash'
import chat from '../../api/chat'
import Pencil from '../../components/chat/Pencil.vue'
import MessageItem from './MessageItem.vue'
import useMeassages from '../../composables/chatComposable/useMesasges'
import { socketEmit, socketSub } from '../../composables/socketComposables'
import { current_user } from '../../composables/CurrentUserComposable/index'
import {
  ref,
  onUpdated,
  onMounted,
  onUnmounted,
  defineExpose,
  computed,
} from 'vue'
import { useRoute } from 'vue-router'

//Если вызываем здесь композабл userChats, то видимо из-за нестед роутов он маунтится дважды, и компьютеды срабатывают дважды,
//поэтому необходимые ф-ии и объекты переданы через пропсы

// import userChats from '../../composables/chatComposable'
import InputField from '../fields/InputField'

const props = defineProps({
  getChat: Object,
  fetchChatById: Function,
})

const { messages, fetchMessages } = useMeassages()
const { getChat } = userChats()
const route = useRoute()
const text = ref(null)
const isTyping = ref(false)
const scrollComponent = ref([])

const chatter = computed(() => {
  console.log(getChat, 'hetchat')
  return getChat?.value?.users?.find(
    (user) => user?.id !== current_user?.value?.id
  )
})

defineExpose({ scrollComponent })

// const windowComponent = ref(null)
// onMounted(() => {
//   console.log(windowComponent.value, 'windowComponent')
//   console.log(scrollComponent.value, 'scrollComponent')
//   windowComponent.value.addEventListener('scroll', handleScroll)
// })
//
// onUnmounted(() => {
//   windowComponent.value.removeEventListener('scroll', handleScroll)
// })

// const handleScroll = (e) => {
//   console.log(e, 'handleScroll')
//   let element = scrollComponent.value
//
//   console.log(windowComponent.value.innerHeight, 'windowComponent')
//   console.log(element.getBoundingClientRect().top, 'element')
//
//   if (element.getBoundingClientRect().top < windowComponent.value.innerHeight) {
//     fetchMessages({ params: { page: 1 } })
//   }
// }

socketSub('typing', (data) => {
  if (data.currentId !== current_user.value.id) {
    isTyping.value = true
  }
})

socketSub('stopTyping', (data) => {
  if (data?.currentId !== current_user.value.id) {
    isTyping.value = false
  }
})
socketSub('sendMessage', (arg) => {
  if (arg?.chatId === route.params.id) {
    fetchMessages()
  }
})
async function sendMessage() {
  await chat.createMessage(route.params.id, { text: text.value })

  await socketEmit('sendMessage', {
    chatId: route.params.id,
    userId: chatter.value.id,
    chatterName: chatter.value.username,
    text: text.value,
  })
  // text.value = ''
  fetchMessages()
}
// function socketType() {
//   socketEmit('typing', {
//     currentId: current_user.value.id,
//     chatterId: chatter.value.id,
//     chatId: route.params.id,
//   })
// }
const socketStopType = _.debounce(() => {
  socketEmit('stopTyping', {
    currentId: current_user.value.id,
    chatterId: chatter.value.id,
    chatId: route.params.id,
  })
}, 2000)

const socketStartType = _.debounce(() => {
  console.log(text.value)
  socketEmit('typing', {
    currentId: current_user.value.id,
    chatterId: chatter.value.id,
    chatId: route.params.id,
  })
}, 200)
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
  width: 100%;
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
/*.text-field {*/
/*  padding: 0.5rem 0.5rem;*/
/*  border: 1px solid dodgerblue;*/
/*  background-color: white;*/
/*  &:focus {*/
/*    outline: 1px solid dodgerblue;*/
/*    border: 1px solid dodgerblue;*/
/*  }*/
/*}*/
.pencil {
  position: relative;
  width: 0.35em;
  height: 0.8em;
  background: #2c2c2c;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  font-size: 1.4em;
}

.pencil:before {
  content: '';
  position: absolute;
  top: -0.35em;
  left: 0;
  width: 0.35em;
  height: 0.3em;
  background: #2c2c2c;
  border-radius: 0.1em;
}

.pencil:after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  top: 0.85em;
  left: 0;
  border: solid 0.2em #2c2c2c;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top: solid 0.45em #2c2c2c;
}
</style>
