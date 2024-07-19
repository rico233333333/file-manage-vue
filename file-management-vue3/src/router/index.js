import { createWebHistory, createRouter } from 'vue-router'

import Layout from '../components/layout/Index.vue'
import Login from '../components/login/Index.vue'
// import AboutView from './AboutView.vue'

const routes = [
  { path: '/welcome', component: Login },
  { path: '/', component: Layout },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;