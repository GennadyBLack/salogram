import { ref } from 'vue'
import { getToken } from '@/helpers/Utils/localStorageHelper'
import { io } from 'socket.io-client'

export const socket = ref(null)

const iniOptions = {
  // forceNew: true,
  // reconnectionDelayMax: 10000,
  reconnection: true,
  auth: {
    token: getToken(),
  },
}

export const initSocket = (options = iniOptions) => {
  try {
    socket.value = null
    socket.value = io('http://localhost:8081', options)
    console.log(socket.value)
  } catch (error) {
    console.log('error from socket', error)
  }
}

export const socketEmit = (name, options = 'sdsd') => {
  socket.value.emit(`${name}`, options)
}

export const socketSub = (name, listener) => {
  socket.value.on(`${name}`, listener)
}
