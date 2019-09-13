import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

import home from './modules/home' //引入某个store对象
import content from './modules/content'
export default new vuex.Store({
  modules: {
    home,
    content
  }
})
