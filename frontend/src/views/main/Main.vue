<template>
  <div>
    <div class="users-list">{{ users }}</div>

    <button @click="sock">sock</button>
  </div>
</template>

<script>
import useUsers from '@/composables/usersComposables/index'
import useSocket from '@/composables/socketComposables/index'
export default {
  setup() {
    const { socket, socketEmit } = useSocket()
    const { users } = useUsers()
    console.log(socket)
    const sock = () => {
      socketEmit('testus')
    }
    return { sock, socket, users }
  },
}
</script>
