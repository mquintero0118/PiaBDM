import { createRouter, createWebHistory } from 'vue-router'
import Create from '../components/Create.vue'
import Login from '../components/Login.vue'
import MainPage from '../components/MainPage.vue'
import EditProfile from '../components/EditProfile.vue'
import CreateNews from '../components/createNews.vue'  
import seeNews2 from '../components/seeNews2.vue'
import searchNews from '../components/searchNews.vue'
import createSection from '../components/createSection.vue'
import editSection from '../components/editSection.vue'
import createReporter from '../components/createReporter.vue'
import pendingNews from '../components/pendingNews.vue'
import pendingNewsReporter from '../components/pendingNewsReporter.vue'
import createNewsEnRedaccion from '../components/createNewsEnRedaccion.vue'

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
    path: '/pendingNews',
    name: 'PendingNews',
    component: pendingNews,
    meta: {
      title: 'PendingNews',
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
    path: '/seeNews2',
    name: 'seeNews2',
    component: seeNews2,
    meta: {
      title: 'See News',
    },
    props: route => ({ query: route.query })
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
    path: '/createReporter',
    name: 'CreateReporter',
    component: createReporter,
    meta: {
      title: 'Create Reporter',
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
    path: '/pendingNewsReporter',
    name: 'PendingNewsReporter',
    component: pendingNewsReporter,
    meta: {
      title: 'Pending News',
    },
    
  },

  {
    path: '/createNewsEnRedaccion',
    name: 'CreateNewsEnRedaccion',
    component: createNewsEnRedaccion,
    meta: {
      title: 'Create News',
    },
    props: route => ({ query: route.query })
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
