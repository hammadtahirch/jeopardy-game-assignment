import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css';
import ToastifyPlugin from './plugins/toastify'

Vue.config.productionTip = false
Vue.use(ToastifyPlugin)
new Vue({
  render: h => h(App),
}).$mount('#app')
