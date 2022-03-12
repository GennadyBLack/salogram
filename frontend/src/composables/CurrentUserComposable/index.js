import { ref, computed } from 'vue'
import { me } from '../../api/auth'
import { getToken } from '../../helpers/Utils/localStorageHelper'
export const current_user = computed(() => user.value)

export const user = ref(null)

export const fetchCurrentUser = async (config, func) => {
  try {
    if (!current_user.value && getToken() !== null) {
      const res = await me(config)
      if (func) {
        await func()
      }
      user.value = res.data.user
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
