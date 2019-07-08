import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '/', 
          name: 'home',
          component: () => import('./views/Home.vue')
        }
      ]
    },
    {
      path: '/vip/version/advanced',
      name: 'vip',
      component: () => import('./views/Vip.vue'),
      children: [
        {
          path: '/vip/version/:id',
          name: 'advanced',
          component: () => import('./components/Version.vue'),
          props: true
        }
      ]
    }
  ]
})
