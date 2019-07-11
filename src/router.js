import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    
    {
      path: '/vip',
      name: 'vip',
      redirect: '/vip/advanced',
      component: () => import('./views/Vip.vue'),
      children: [
        {
          path: ':id',
          name: 'version',
          component: () => import('./components/Version.vue'),
          props: true
        }
      ]
    }
  ]
})
