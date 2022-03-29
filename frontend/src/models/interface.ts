interface loginData {
  [key: string]: any
  email: string
  password: string
  username: string
}
interface chatData {
  [key: string]: any
  current: string | number
  person: string | number
}

// interface loginData {
//   email: string
//   password: string
// }

export { loginData, chatData }
