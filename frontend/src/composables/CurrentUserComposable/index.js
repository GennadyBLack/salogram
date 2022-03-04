import { ref, computed } from 'vue'
import { me } from '../../api/auth'

export const current_user = computed(() => {
  return user.value
})

export const user = ref(null)

export const fetchCurrentUser = async (config, func) => {
  try {
    if (!current_user.value) {
      await me(config).then((res) => {
        if (func) {
          func()
        }
        user.value = res.data.user
      })
    } else {
      console.log('user already here')
    }
  } catch (error) {
    console.log(error, 'from curent')
  }
}

export const setCurrentUser = (data) => {
  user.value = data
}
