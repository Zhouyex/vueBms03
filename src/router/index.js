import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'

const Home = () => import("@/components/Home") ;
const Detail = () => import("@/components/Detail") ;
const List = () => import("@/components/List") ;
const Shopping = () => import("@/components/Shopping") ;
const Single = () => import("@/components/Single") ;
const Login = () => import("@/components/Login") ;

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: Shopping
    },
    {
      path: '/single/:id',
      name: 'Single',
      component: Single
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
