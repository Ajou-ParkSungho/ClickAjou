import Vue from 'vue'
import Router from 'vue-router'

import axios from 'axios'

import Main from '../view/main'
import Menu from '../view/menu'
import Login from './login'
import Facilities from './facilities'
import Library from './library'


import Test from '../view/test'
import { doesNotReject } from 'assert';

Vue.use(Router)



const router  =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    ...Login,
    {
      path: '/menu',
      name: 'Menu',
      component: Menu,
      
    },
    ...Facilities,
    ...Library,
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
router.beforeEach( (to, from, next) => {
  console.log(to.name)
  if (to.name !== 'Login' && to.name !== 'Main'){
    axios.get('http://localhost:8888/auth/check',{ headers: {'x-access-token': localStorage.getItem('token')} })
    .then((response) => {
      console.log(response.data)
      if(!response.data.success){
        next({path: '/login'})
      }
      else
        next()
    })
    next()
  }
  else if (to.name === 'Login' || to.name === 'Main'){
    axios.get('http://localhost:8888/auth/check',{ headers: {'x-access-token': localStorage.getItem('token')} })
    .then((response) => {
      console.log(response.data)
      if(response.data.success){
        next({path: '/menu'})
      }
      else
        next()
    })
    next()
  }
  next()
})
export default router