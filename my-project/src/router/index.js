import Vue from 'vue'
import Router from 'vue-router'
import movieindex from '@/views/movieindex'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'movieindex',
      component: movieindex
    }
  ]
})
