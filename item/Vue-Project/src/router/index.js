import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import one from '@/components/one'
import two from '@/components/two'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/one'
    },
    {
      path: '/one',
      name: 'one',
      component: one
    },
    {
      path: '/two',
      name: 'two',
      component: two
    },  {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component:HelloWorld
    }
  ]
})

