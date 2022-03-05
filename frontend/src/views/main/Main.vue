<template>
  <div><button @click="sock">sock</button></div>
</template>
<script setup>
import socket from '../../plugins/socket'
const sock = () => {
  console.log(socket, 'sockets')
  if (socket !== null) {
    socket.emit('connection')
  }
}
</script>
