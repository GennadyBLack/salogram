import { createRouter, createWebHistory } from 'vue-router'

import {
  current_user,
  fetchCurrentUser,// @ts-ignore
} from '@/composables/CurrentUserComposable/index'
import Login from '../views/auth/LoginForm.vue'
import Register from '../views/auth/RegisterForm.vue'
import Main from '../views/main/Main.vue'
import Direct from '../views/direct/Direct.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { layout: 'AuthLayout', requiresAuth: false },
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { layout: 'AuthLayout', requiresAuth: false },
  },
  {
    path: '/',
    name: 'main',
    component: Main,
    meta: { layout: 'DefaultLayout', requiresAuth: true },
    props: true,
  },
  {
    path: '/direct',
    name: 'direct',
    component: Direct,
    meta: { layout: 'DefaultLayout', requiresAuth: true },
    props: true,
    children: [
      {
        path: '/direct/:id',
        name: 'current_chat',
        component: Direct,
        // meta: { layout: 'DefaultLayout', key: (route: { params:{id:number|string} }) => `CurrentChat-${route.params.id}`, requiresAuth: true },
        meta: { layout: 'DefaultLayout', requiresAuth: true },
        props: true,
      },
    ],
  },

  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../components/transitions/404.vue'),
    meta: { layout: 'DefaultLayout' },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, from, next) => {
  if (!current_user.value) await fetchCurrentUser()
  if (to.meta.requiresAuth && current_user.value) {
    next()
  } else if (to.meta.requiresAuth && !current_user.value) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
