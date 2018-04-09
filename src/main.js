import Vue from 'vue'
import App from './App.vue'

window.Event = new Vue()


import './assets/scss/style.scss'
new Vue({
  el: '#app',
  render: h => h(App)
})

export { event }
