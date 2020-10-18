import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store';
// import Home from '@/components/Home'
import CompanyList from '../components/CompanyList.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import( '../components/Landing.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../components/Login.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: '/importdata',
    name: 'ImportData',
    component: () => import( '../components/ImportData.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: () => import( '../components/Feedback.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: '/companylist',
    name: 'CompanyList',
    component: CompanyList,
    meta: { requiresAuth: false },
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import( '../components/Detail/Detail.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/detail_default',
    name: 'Detail_Default',
    component: () => import( '../components/Detail_Default/Detail.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: '/dashboard',
    name: 'LoginDashboard',
    component: () => import( '../components/LoginDashboard.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/inputlist',
    name: 'InputList',
    component: () => import( '../components/InputList.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/inputform',
    name: 'InputForm',
    component: () => import( '../components/InputForm.vue'),
    meta: { requiresAuth: true },
  },
  // 當 url path 不符合 router 表的時候，預設轉址到 順序一定要最後面
  { path: '/*', redirect: '/' }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  var isAuthenticated = store.state.isAuthenticated
  if (to.meta.requiresAuth){
    if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
    else next()
  }else next()
  
});

export default router
