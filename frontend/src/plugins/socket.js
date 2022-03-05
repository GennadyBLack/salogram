const io = require('socket.io-client')
import { getToken } from '../helpers/Utils/localStorageHelper'

const token = getToken()
console.log(token)
const socket = io('http://localhost:8081', {
  path: '/socket.io',
  debug: true,
  //   reconnectionDelayMax: 10000,
  auth: {
    token: `${token}`,
  },
  //   query: {
  //     connection: true,
  //   },
})

export default socket
