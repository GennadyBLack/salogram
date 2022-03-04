import { setNotice } from '../ErrorsComposable'
import { saveToken } from '../../helpers/Utils/localStorageHelper'
import { useRouter } from 'vue-router'
import { setCurrentUser } from '../CurrentUserComposable'

export default () => {
  const router = useRouter()

  const logout = () => {
    //set null token
    saveToken()
    setNotice('Are you logout')
    setCurrentUser(null)
    router.push('login')
  }

  return {
    logout,
  }
}
