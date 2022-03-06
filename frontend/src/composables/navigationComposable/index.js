import { ref, computed, watchEffect } from 'vue'

export function MainMenuComposable(props) {
  const availableRoutes = ref(null)

  const allRoutes = [
    { name: 'login', title: 'Login', auth: true, type: 'button' },
    { name: 'register', title: 'Register', auth: true, type: 'button' },
    { name: 'main', title: 'Main', auth: false, type: 'button' },
    { name: 'direct', title: 'Direct', auth: false, type: 'button' },
    // { name: 'users', title: 'Users', auth: false, type: 'button' },

    // { name: 'board', title: 'Create', auth: false, type: 'button' },
  ]

  const filterRoutes = () => {
    const id = props.value ? props.value.id : false
    availableRoutes.value = allRoutes.filter((item) => {
      if (item.auth && !id) {
        return item
      } else if (!item.auth && id) {
        return item
      }
    })
  }
  watchEffect(filterRoutes)

  return { routes: computed(() => availableRoutes.value) }
}
