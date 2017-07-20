// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import AuthService from '@/services/AuthService'

Vue.config.productionTip = false
Vue.use(VueMaterial)
AuthService.checkAuth()
Vue.material.registerTheme('default', {
  primary: 'pink',
  accent: 'grey',
  warn: 'grey',
  background: 'white'
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
