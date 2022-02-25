import { createRouter, createWebHistory } from 'vue-router'
import Create from '../components/Create.vue'
import Login from '../components/Login.vue'
import MainPage from '../components/MainPage.vue'
import EditProfile from '../components/EditProfile.vue'
import CreateNews from '../components/createNews.vue'  
import seeNews from '../components/seeNews.vue'
import searchNews from '../components/searchNews.vue'
import createSection from '../components/createSection.vue'
import editSection from '../components/editSection.vue'

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
    path: '/editProfile',
    name: 'EditProfile',
    component: EditProfile,
    meta: {
      title: 'Edit Profile',
    },
  },
  {
    path: '/createNews',
    name: 'CreateNews',
    component: CreateNews,
    meta: {
      title: 'Create News',
    },
  },
  {
    path: '/seeNews',
    name: 'SeeNews',
    component: seeNews,
    meta: {
      title: 'See News',
    },
  },
  {
    path: '/searchNews',
    name: 'SearchNews',
    component: searchNews,
    meta: {
      title: 'Search News',
    },
  },
  {
    path: '/createSection',
    name: 'CreateSection',
    component: createSection,
    meta: {
      title: 'Create Section',
    },
  },
  {
    path: '/editSection',
    name: 'EditSection',
    component: editSection,
    meta: {
      title: 'Edit Section',
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
