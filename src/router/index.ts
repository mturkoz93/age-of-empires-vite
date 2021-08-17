import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Units from '../pages/Units.vue'
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/units',
    name: 'Units',
    component: Units,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
