import { ref } from 'vue'
import { login as sendLoginForm } from '@/api/auth'
import { setNotice } from '../ErrorsComposable'
import { saveToken } from '../../helpers/Utils/localStorageHelper'
import { useRouter } from 'vue-router'
import { fetchCurrentUser } from '../CurrentUserComposable/index'

export default () => {
  const login_form = ref({ email: null, password: null, username: null })

  const router = useRouter()

  const editField = (name, value) => {
    login_form.value[name] = value
  }
  const redirect = () => {
    router.push({ name: 'board' })
  }
  const login = async () => {
    await sendLoginForm(login_form.value)
      .then(async (res) => {
        saveToken(res.data.token),
          setNotice('Login successfull', 'success_message')
        await fetchCurrentUser(
          {
            headers: { Authorization: `Token ${res.data.token}` },
          },
          redirect
        )
      })
      .catch(() => {
        setNotice('Login error')
      })
  }
  return {
    login_form,
    login,
    editField,
  }
}
