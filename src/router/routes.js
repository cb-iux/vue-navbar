import Vue from 'vue'
import Router from 'vue-router'
import About from '@/views/About'
import Contact from '@/views/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
