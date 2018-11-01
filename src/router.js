import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import StudentsShow from './views/StudentsShow.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/students/:id',
      name: 'students-show',
      component: StudentsShow
    }
  ]
})
