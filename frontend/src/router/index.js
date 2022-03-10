import { createRouter, createWebHistory } from 'vue-router'
import {
  current_user,
  fetchCurrentUser,
} from '../composables/CurrentUserComposable/index'
import Login from '../views/auth/LoginForm'
import Register from '../views/auth/RegisterForm'
import Main from '../views/main/Main'
import Direct from '../views/direct/Direct'

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
    path: '/main',
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
        meta: { layout: 'DefaultLayout', requiresAuth: true },
        props: true,
      },
    ],
  },

  // {
  //   path: '/board/:id',
  //   name: 'board',
  //   component: Board,
  //   meta: { layout: 'DefaultLayout', requiresAuth: true },
  //   props: true,
  // },
  // {
  //   path: '/boards',
  //   name: 'board_list',
  //   component: BoardsList,
  //   meta: { layout: 'DefaultLayout', requiresAuth: true },
  //   props: true,
  // },
  // {
  //   path: '/board_edit/:id',
  //   name: 'board_edit',
  //   component: BoardEdit,
  //   meta: { layout: 'DefaultLayout', requiresAuth: true },
  //   props: true,
  // },
  // ,
  // {
  //   path: '/board_create',
  //   name: 'board_create',
  //   component: createBoardForm,
  //   meta: { layout: 'DefaultLayout', requiresAuth: true },
  //   props: true,
  // },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../components/transitions/404'),
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
