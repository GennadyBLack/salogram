<template>
  <div>
    <div class="users-list">{{ users }}</div>

    <button @click="sock">sock</button>
    <button @click="chat">chat</button>
  </div>
</template>

<script>
import useUsers from '@/composables/usersComposables/index'
import useSocket from '@/composables/socketComposables/index'
import api from "../../api/index"
export default {
  setup() {
    const { socket, socketEmit } = useSocket()
    const { users } = useUsers()
    console.log(socket)
    const sock = () => {
      socketEmit('testus');
    }
    const chat = async () => {
      await api.post("/chats", {id: 1, tovarischId: 3})
      // await api.get("/chats")
    }
    return { sock, socket, users,chat }
  },
}
</script>
