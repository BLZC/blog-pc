import Vue from 'vue'
import { get, post, del, put } from '../request/http'
import { getCookie, setCookie, deleteCookie } from './cookieConfig'
import {getLocalStorage,setLocalStorage,deleteLocalStorage,clearAllLocalStorage} from './localStorageConfig'
// import {
//   Button,
//   Row,
//   Col,
//   Menu,
//   Submenu,
//   MenuItem,
//   Input,
//   Card,
//   Divider
// } from 'element-ui'
import ElementUI from 'element-ui'
Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$delete = del
Vue.prototype.$put = put
Vue.prototype.$getCookie = getCookie
Vue.prototype.$setCookie = setCookie
Vue.prototype.$deleteCookie = deleteCookie
Vue.prototype.$getls = getLocalStorage
Vue.prototype.$setls = setLocalStorage
Vue.prototype.$deletels = deleteLocalStorage
Vue.prototype.$clearls = clearAllLocalStorage

// Vue.use(Button)
// Vue.use(Row)
// Vue.use(Col)
// Vue.use(Menu)
// Vue.use(Submenu)
// Vue.use(MenuItem)
// Vue.use(Input)
// Vue.use(Card)
// Vue.use(Divider)


Vue.use(ElementUI)
export default Vue
