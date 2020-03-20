import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import store from './store'
import router from './router'
import './style.scss'
console.log('router:', router)
import PinyinMatch from 'pinyin-match';
Vue.prototype.$pinyinmatch = PinyinMatch;

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
