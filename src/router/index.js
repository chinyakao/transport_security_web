import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../components/Login.vue')
  },
  {
    path: '/importdata',
    name: 'ImportData',
    component: () => import( '../components/ImportData.vue')
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: () => import( '../components/Feedback.vue')
  },
  {
    path: '/companylist',
    name: 'CompanyList',
    component: () => import( '../components/CompanyList.vue')
  },
  // {
  //   path: '/test',
  //   name: 'Test',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../components/test.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
