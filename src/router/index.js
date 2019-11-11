import Vue from 'vue'
import Router from 'vue-router'
import shop from './module/shop'
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: () => import('../views/home/home.vue')
        },
        {
          path: '/content',
          name: 'content',
          component: () => import('../views/content/content.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/about/index.vue')
        },
        {
          path: '/editsuccess',
          name: 'editsuccess',
          component: () => import('../views/edit/editsuccess.vue')
        },
        {
          path: '/message',
          name: 'message',
          component: () => import('../views/message')
        },
        {
          path: '/search',
          name: 'search',
          component: () => import('../views/search')
        },
        //商城模块
        ...shop
      ]
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('../views/edit/edit')
    }
  ]
})
