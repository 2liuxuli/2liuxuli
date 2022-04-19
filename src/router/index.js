import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('../views/home/index.vue')
const Login = () => import('../views/login.vue')

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHashHistory(), // 历史记录 对SEO影响不利，H5页面建议使用 createWebHistory
  routes
})

export default router
