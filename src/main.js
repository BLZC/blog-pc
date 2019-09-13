import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import mavonEditor from 'mavon-editor'
import 'element-ui/lib/theme-chalk/index.css'
import { get, post } from './request/http'
import { LZCMessage } from './common'
Vue.config.productionTip = false
Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$LZCMessage = LZCMessage
Vue.use(ElementUI)
Vue.use(mavonEditor)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
