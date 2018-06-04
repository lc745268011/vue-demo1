// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import stack from './components/thing/thing'
Vue.config.productionTip = false
import Swiper from 'swiper/dist/js/swiper.js'
window.Swiper = Swiper
// 引入静态资源
import './assets/css/common.css'
import '../node_modules/swiper/dist/css/swiper.css';
import '../node_modules/weui/dist/style/weui.css';
import '../node_modules/flex.css';
import './assets/js/rem.js'
/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
    stack,
  store,
  // components: { App },
  // template: '<App/>'
}).$mount('#app')
