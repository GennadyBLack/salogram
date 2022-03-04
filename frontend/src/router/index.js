import { createRouter, createWebHistory } from 'vue-router'
import {
  current_user,
  fetchCurrentUser,
} from '../composables/CurrentUserComposable/index'
import CustomersList from '../components/CustomersList.vue'
import AddCustomer from '../components/AddCustomer.vue'
import Customer from '../components/Customer.vue'
import Login from '../views/auth/LoginForm'
import Register from '../views/auth/RegisterForm'
import Board from '../views/board/Board'
import BoardsList from '../views/board/BoardsList'
import BoardEdit from '../views/board/BoardEdit'
import createBoardForm from '../components/board/createBoardForm'

const routes = [
  {
    path: '/',
    name: 'tasks',
    alias: '/customer',
    component: CustomersList,
    meta: { layout: 'DefaultLayout' },
    children: [
      {
        path: '/customer/:id',
        name: 'customer-details',
        component: Customer,
        props: true,
        meta: { layout: 'DefaultLayout', requiresAuth: true },
      },
    ],
  },
  {
    path: '/add',
    name: 'add',
    component: AddCustomer,
    meta: { layout: 'DefaultLayout', requiresAuth: true },
  },

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
    path: '/board/:id',
    name: 'board',
    component: Board,
    meta: { layout: 'DefaultLayout', requiresAuth: true },
    props: true,
  },
  {
    path: '/boards',
    name: 'board_list',
    component: BoardsList,
    meta: { layout: 'DefaultLayout', requiresAuth: true },
    props: true,
  },
  {
    path: '/board_edit/:id',
    name: 'board_edit',
    component: BoardEdit,
    meta: { layout: 'DefaultLayout', requiresAuth: true },
    props: true,
  },
  ,
  {
    path: '/board_create',
    name: 'board_create',
    component: createBoardForm,
    meta: { layout: 'DefaultLayout', requiresAuth: true },
    props: true,
  },
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
