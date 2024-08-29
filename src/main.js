import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css';
import ToastifyPlugin from './plugins/toastify'

Vue.config.productionTip = false
Vue.use(ToastifyPlugin)
Vue.config.errorHandler = function (err, vm, info) {
  // Handle the error
  console.error('An error occurred:', err);
  console.log('Vue instance:', vm);
  console.log('Error info:', info);

  // You can add custom error handling logic here
  // For example, sending the error to a logging service
};

new Vue({
  render: h => h(App),
}).$mount('#app')
