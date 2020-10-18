import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/components/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import( '../components/Landing.vue')
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
  {
    path: '/detail',
    name: 'Detail',
    component: () => import( '../components/Detail/Detail.vue')
  },
  {
    path: '/detail_default',
    name: 'Detail_Default',
    component: () => import( '../components/Detail_Default/Detail.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
