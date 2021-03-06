import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import './fonts/iconfont.css'
import './reset.css'


window.bus = new Vue()
Vue.config.productionTip = false
Vue.use(Element)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
