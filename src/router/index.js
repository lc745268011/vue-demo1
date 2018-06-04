import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'

const home = r => require.ensure([], () => r(require('../components/home/home')))
const member = r => require.ensure([], () => r(require('../components/member/member')))
const news = r => require.ensure([], () => r(require('../components/news/newsList')))
const chooseType = r => require.ensure([], () => r(require('../components/shopcart/chooseType')))
const shopcart = r => require.ensure([], () => r(require('../components/shopcart/shopcart')))
const mine = r => require.ensure([], () => r(require('../components/mine/mine')))
const audit = r => require.ensure([], () => r(require('../components/mine/audit')))
const newsDetail = r => require.ensure([], () => r(require('../components/news/newsDetail')))
const thing = r => require.ensure([], () => r(require('../components/thing/thing')))
const hundred = r => require.ensure([], () => r(require('../components/mine/hundred')))

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      redirect: '/home',
      children: [
        {
          name:'home',
          path: '/home',
          component: home
        },
        {
          name:'member',
          path: '/member',
          component: member
        },
        {
          name:'news',
          path: '/news',
          component: news,
        },
        {
          name:'shopcart',
          path: '/shopcart',
          component: shopcart
        },
        {
          name:'chooseType',
          path: '/chooseType',
          component: chooseType
        },
        {
          name:'mine',
          path: '/mine',
          component: mine
        },
        {
            name:'audit',
            path: '/audit',
            component: audit
        },
        {
          name:'newsDetail',
          path: '/newsDetail',
          component: newsDetail
        },
        {
            name:'thing',
            path: '/thing',
            component: thing
        },
        {
            name:'hundred',
            path: '/hundred',
            component: hundred
        }


      ]
    }
  ]
})
