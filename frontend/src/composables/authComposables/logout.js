import { setNotice } from '../ErrorsComposable'
import { saveToken } from '../../helpers/Utils/localStorageHelper'
import { useRouter } from 'vue-router'
import { setCurrentUser } from '../CurrentUserComposable'

export default () => {
  const router = useRouter()

  const logout = async () => {
    //set null token
    saveToken()
    setNotice('Are you logout')
    //Навигации асинхронные, поэтому выкидываем юзера после эвейта роута

    setCurrentUser(null)
    await router.push('login')
  }

  return {
    logout,
  }
}
