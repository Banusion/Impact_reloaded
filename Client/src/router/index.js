import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import AuthService from '@/services/AuthService'

Vue.use(Router)

const routes = [{
  path: '/',
  name: 'home',
  component: Home,
  meta: {
    requiresAuth: true
  }
}, {
  path: '/login',
  name: 'login',
  component: Login
}, {
  path: '/logout',
  redirect: '/login'
}, {
  path: '*',
  redirect: '/'
}]

let router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!AuthService.user.authenticated) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next() // make sure to always call next()!
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
