// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import head from './components/header/header'
import './common/stylus/index.styl'
import Axios from 'axios'

Vue.component('v-header', head)

// 把axios模块挂载到vue对象上
Vue.prototype.$ajax = Axios

//console.log(new Vue);
Vue.config.productionTip = false
Axios.defaults.baseURL = '/api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
