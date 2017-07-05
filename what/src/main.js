// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import '@/assets/css/iboot/iboot.scss'
import '@/assets/css/iboot/main.scss'
import '@/assets/css/an/an.scss'
import '@/assets/css/animate.css'
import '@/assets/css/delay.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
