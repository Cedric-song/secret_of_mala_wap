import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/index'
import '@/utils/vue-prototype'
// import initRem from '@/utils/px-to-rem'

// initRem()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
