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
import { initSocket, socket, socketSub } from './composables/socketComposables'
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
    layout() {
      return this.$route.meta.layout
    },
  },

  async mounted() {
    await fetchCurrentUser()
    //подключаем пользователя к сокету как тольько пройдет аутентификацию
    initSocket()
    //подписываемся на уведомления о новых сообщениях
    socketSub(`notify:${current_user.value.id}`, (data = {}) => {
      console.log('new message for your', data)
    })
  },
}
</script>
