import { ref, onMounted } from 'vue'
import { getToken } from '@/helpers/Utils/localStorageHelper'
import { io } from 'socket.io-client'

export default () => {
  const socket = ref(null)

  const iniOptions = {
    // forceNew: true,
    // reconnectionDelayMax: 10000,
    reconnection: true,
    auth: {
      token: getToken(),
    },
  }

  const initSocket = (options = iniOptions) => {
    try {
      socket.value = null
      if (socket.value) {
        console.log(socket.value, 'socketvalue')
      }
      const token = getToken()
      socket.value = io('http://localhost:8081', options)
      console.log(socket.value)
    } catch (error) {
      console.log('error from socket', error)
    }
  }

  const socketEmit = (name, options = 'sdsd') => {
    socket.value.emit(`${name}`, options)
  }

  onMounted(async () => {
    await initSocket()
  })

  return {
    socket,
    initSocket,
    socketEmit,
  }
}
