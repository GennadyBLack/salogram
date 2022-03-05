<template>
  <div><button @click="sock">sock</button></div>
</template>

<script>
import useSocket from '@/composables/socketComposables/index'
export default {
  setup() {
    const { socket, socketEmit } = useSocket()
    console.log(socket)
    const sock = () => {
      socketEmit('testus')
    }
    return { sock, socket }
  },
}
</script>
