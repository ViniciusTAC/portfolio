import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home.vue')
  },
  {
    path: '/tcc',
    name: 'TCC',
    component: () => import('../components/Tcc.vue')
  },
  {
    path: '/servico',
    name: 'Servicos',
    component: () => import('../components/Servicos.vue')
  },
  {
    path: '/servico',
    name: 'Servicos',
    component: () => import('../components/Servicos.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../components/Portfolio.vue')
  },
  {
    path: '/contato',
    name: 'Contato',
    component: () => import('../components/Contato.vue')
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import('../components/Sobre.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
