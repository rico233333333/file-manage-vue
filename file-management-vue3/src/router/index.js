import { createWebHistory, createRouter } from 'vue-router'

import Layout from '../components/layout/index.vue'
// import AboutView from './AboutView.vue'

const routes = [
  { path: '/', component: Layout },
//   { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;