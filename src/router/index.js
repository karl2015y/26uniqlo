import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/user/Home.vue'
import Dashboard from '../views/admin/Dashboard.vue';
import Orders from '../components/admin/Orders';
import Products from '../components/admin/Products';


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

    component: () => import(/* webpackChunkName: "about" */ '../views/user/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',

    component: () => import(/* webpackChunkName: "about" */ '../views/user/Register.vue'),
  }, 
   {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/user/Cart.vue'),
  },
  {
    path: '/admin',
    name: 'Dashboards',
    component: Dashboard,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'products',
        name: 'Products',
        component: Products,
        meta: { requiresAuth: true }
      },
      {
        path: 'orders',
        name: 'Orders',
        component: Orders,
        meta: { requiresAuth: true }
      }
    ],
  },
  
]

const router = new VueRouter({
  routes
})

export default router
