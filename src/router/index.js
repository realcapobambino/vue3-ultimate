import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
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
  {
    path: '/posts/:id',
    name: 'Details',
    component: Details,
    props: true
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
