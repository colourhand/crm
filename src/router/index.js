import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import order from '@/components/order'
import userSetting from '@/components/userSetting'
import baseInfo from '@/components/baseInfo'
import adminSetting from '@/components/adminSetting'
import orderInfo from '@/components/orderInfo'
import userInfo from '@/components/userInfo'
import userManage from '@/components/userManage'
import addUser from '@/components/addUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/baseInfo',
      name: 'baseInfo',
      component: baseInfo
    },
    {
      path: '/adminSetting',
      name: 'adminSetting',
      component: adminSetting
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/orderInfo',
      name: 'orderInfo',
      component: orderInfo
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      component: userInfo
    },
    {
      path: '/userManage',
      name: 'userManage',
      component: userManage
    },
    {
      path: '/addUser',
      name: 'addUser',
      component: addUser
    },
    {
      path: '/userSetting',
      name: 'userSetting',
      component: userSetting
    }
  ]
})
