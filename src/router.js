import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Menu from '@/views/Menu'
import Times from '@/views/Times'
import Mine from '@/views/Mine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/times',
      name: 'Times',
      component: Times
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
