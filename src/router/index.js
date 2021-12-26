import { createRouter, createWebHistory } from 'vue-router'
import Create from '../components/Create.vue'
import Login from '../components/Login.vue'
import MainPage from '../components/MainPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainPage,
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
    meta: {
      title: 'Registro',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login',
    },
  },
  {
    path: '/mainPage',
    name: 'MainPage',
    component: MainPage,
    meta: {
      title: 'MainPage',
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
] 

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
