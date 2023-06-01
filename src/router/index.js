import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotHome from '../views/NotHome.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/nothome',
    name: 'nothome',
    component: NotHome
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
