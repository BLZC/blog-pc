import Vue from 'vue'
import Router from 'vue-router'

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
          component: () => import('../views/list.vue')
        },
        {
          path: '/content',
          name: 'content',
          component: () => import('../views/content.vue')
        },
        {
          path: '/search',
          name: 'search',
          component: () => import('../views/search.vue')
        }
      ]
    }
  ]
})
