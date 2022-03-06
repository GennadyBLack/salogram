import { ref, onMounted } from 'vue'
import users from '../../api/user'

export default (props) => {
  const users_list = ref(null)

  const fetchAllUsers = async (query) => {
    try {
      users_list.value = (await users.getAllUsers(query)).data
    } catch (error) {
      console.log(error, ' from get all user')
    }
  }

  onMounted(async () => {
    await fetchAllUsers()
  })

  return {
    users: users_list,
    fetchAllUsers,
  }
}
