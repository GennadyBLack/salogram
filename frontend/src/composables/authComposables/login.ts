import { ref } from 'vue'
import { login as sendLoginForm } from '@/api/auth'
// @ts-ignore
import { setNotice } from '../ErrorsComposable'
// @ts-ignore
import { saveToken } from '../../helpers/Utils/localStorageHelper'
import { useRouter } from 'vue-router'
// @ts-ignore
import { fetchCurrentUser } from '../CurrentUserComposable/index'
import { loginData } from '@/models/interface'

export default () => {
  const login_form = ref<loginData>({
    email: '',
    password: '',
    username: '',
  })

  const router = useRouter()

  const editField = (name: string, value: string) => {
    login_form.value[name] = value
  }
  const redirect = async () => {
    await router.push({ name: 'main' })
  }
  const login = async () => {
    await sendLoginForm(login_form.value)
      .then(async (res: { data: { token: string } }) => {
        saveToken(res.data.token),
          setNotice('Login successfull', 'success_message')
        await fetchCurrentUser({}, redirect)
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
