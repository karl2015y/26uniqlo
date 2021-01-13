import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/user/Home.vue'
import Dashboard from '../views/admin/Dashboard.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "about" */ '../views/user/Shop.vue'),

  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "about" */ '../views/user/Blog.vue'),

  },
  {
    path: '/blog/:blog_id',
    name: 'BlogDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/user/BlogDetail.vue'),

  },
  {
    path: '/pd/:product_id',
    name: 'ProductDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/user/ProductDetail.vue'),

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
    path: '/myorder',
    name: 'Myorder',
    component: () => import(/* webpackChunkName: "about" */ '../views/user/Myorder.vue'),
  },
  {
    path: '/daigou',
    name: 'Daigou',
    component: () => import(/* webpackChunkName: "about" */ '../views/user/Daigou.vue'),
  },
  {
    path: '/daigou/:dgid',
    name: 'DaigouItems',
    component: () => import(/* webpackChunkName: "about" */ '../views/user/Daigou.vue'),
  },
  {
    path: '/admin',
    name: 'Dashboards',
    component: Dashboard,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'blogs',
        name: 'Blogs',
        component: () => import(/* webpackChunkName: "about" */ '../components/admin/Blogs'),
    
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import(/* webpackChunkName: "about" */ '../components/admin/Products'),
        meta: { requiresAuth: true }
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import(/* webpackChunkName: "about" */ '../components/admin/Orders'),
        meta: { requiresAuth: true }
      },
      {
        path: 'orders/:dgid',
        name: 'OrdersDG',
        component: () => import(/* webpackChunkName: "about" */ '../components/admin/Orders'),
        meta: { requiresAuth: true }
      },
      {
        path: 'brands',
        name: 'Brands',
        component: () => import(/* webpackChunkName: "about" */ '../components/admin/Brands'),
        meta: { requiresAuth: true }
      },
      {
        path: 'daigouparameter',
        name: 'Daigouparameter',
        component: () => import(/* webpackChunkName: "about" */ '../components/admin/Daigouparameter'),
        meta: { requiresAuth: true }
      }   
    ],
  },
  
]

const router = new VueRouter({
  routes
})

export default router
