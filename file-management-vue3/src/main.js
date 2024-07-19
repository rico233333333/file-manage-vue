import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import Particles from "particles.vue3";  // 粒子动画

// import './style.css'
import App from './App.vue'
import router from "../src/router/index.js"

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(Particles)
app.mount('#app')
