import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Component from 'vue-class-component'

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate' // for vue-router 2.2+
])

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
