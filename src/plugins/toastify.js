import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export default {
  install(Vue) {
    Vue.prototype.$toast = (message, type) => {
      return Toastify({
        text: message,
        duration: 3500,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: type === 'danger' ? '#f44336' : '#4caf50',
      }).showToast();
    }
  }
}