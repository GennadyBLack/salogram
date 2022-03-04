import { ref } from 'vue'
import { register as sendRegisterForm } from '@/api/auth'
import { setNotice } from '../ErrorsComposable'
import { saveToken } from '../../helpers/Utils/localStorageHelper'
import { useRouter } from 'vue-router'

export default () => {
  const register_form = ref({ email: null, password: null, username: null })
  const router = useRouter()

  const editField = (name, value) => {
    register_form.value[name] = value
  }

  const register = async () => {
    await sendRegisterForm(register_form.value)
      .then((res) => {
        saveToken(res.data.token),
          setNotice('Register successfull', 'success_message')
        router.push({ name: 'board' })
      })
      .catch(() => {
        setNotice('Register error')
      })
  }
  return {
    register_form,
    register,
    editField,
  }
}
