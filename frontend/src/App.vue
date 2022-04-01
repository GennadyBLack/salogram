<template>
  <div class="app_container">
    <component :is="layout" />
    <Errors />
  </div>
</template>
<script>
import {
  fetchCurrentUser,
  current_user,
} from './composables/CurrentUserComposable/index'
import Errors from './components/transitions/Errors'
import { setNotice } from './composables/ErrorsComposable/index'
import { initSocket, socketSub } from './composables/socketComposables'
import DefaultLayout from './layouts/DefaultLayout.vue'
import AuthLayout from './layouts/AuthLayout.vue'
export default {
  name: 'app',
  components: {
    AuthLayout,
    DefaultLayout,
    Errors,
  },
  computed: {
    chat_path() {
      return this.$route.name == 'current_chat'
    },
    chat_id() {
      return this?.$route?.params?.id ?? false
    },
    layout() {
      return this.$route.meta.layout
    },
  },
  watch: {
    chat_path: (next, old) => {
      console.log(next, 'next')
    },
  },
  async mounted() {
    await fetchCurrentUser()
    //подключаем пользователя к сокету как тольько пройдет аутентификацию
    initSocket()
    //подписываемся на уведомления о новых сообщениях
    socketSub(`notify:${current_user.value.id}`, (data = {}) => {
      //если мы сейчас не находимся в чате из которого пришло сообщение - вывести уведомление
      if (!this.chat_path && this.chat_id !== data?.chatId) {
        setNotice(
          `New message from ${data?.chatterName}`,
          'message-notify',
          data
        )
      }
    })
  },
}
</script>
