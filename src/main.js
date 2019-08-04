// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from './store/store'

Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI);

Vue.prototype.axios = axios;

Vue.config.productionTip = false;

Vue.directive('changeStyle',{
  bind(el,binding){
    // el.style.color = 'red'
    el.style.color = '#'+Math.random().toString(16).slice(2,8)
    el.style.fontSize = binding.value.ita;

    if(binding.arg === 'ita')
    {
      el.style.fontStyle='italic'
    }
    
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
