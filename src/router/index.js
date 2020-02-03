import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/projet1',
    name: 'projet1',
    component: () => import('../views/Projet-1.vue')
  },
  {
    path: '/projet2',
    name: 'projet2',
    component: () => import('../views/Projet-2.vue')
  },
  {
    path: '/projet3',
    name: 'projet3',
    component: () => import('../views/Projet-3.vue')
  },
  {
    path: '/projet4',
    name: 'projet4',
    component: () => import('../views/Projet-4.vue')
  },
  {
    path: '/projet5',
    name: 'projet5',
    component: () => import('../views/Projet-5.vue')
  },
  {
    path: '*',
    name: 'error',
    component: () => import('../views/Error.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
