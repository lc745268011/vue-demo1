import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'

const home = r => require.ensure([], () => r(require('../components/home/home')))
const member = r => require.ensure([], () => r(require('../components/member/member')))
const member1 = r => require.ensure([], () => r(require('../components/member/member1')))
const news = r => require.ensure([], () => r(require('../components/news/newsList')))
const chooseType = r => require.ensure([], () => r(require('../components/shopcart/chooseType')))
const shopcart = r => require.ensure([], () => r(require('../components/shopcart/shopcart')))
const mine = r => require.ensure([], () => r(require('../components/mine/mine')))
const audit = r => require.ensure([], () => r(require('../components/mine/audit')))
const newsDetail = r => require.ensure([], () => r(require('../components/news/newsDetail')))
const thing = r => require.ensure([], () => r(require('../components/thing/thing')))
const hundred = r => require.ensure([], () => r(require('../components/mine/hundred')))
const editor = r => require.ensure([], () => r(require('../components/shopcart/editor')))

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: App,
      redirect: '/home',
      children: [
        {
          name:'home',
          path: '/home',
          component: home,
          meta: { keepAlive: true }
        },
        {
          name:'member',
          path: '/member',
          component: member
        },
        {
          name:'member1',
          path: '/member1',
          component: member1
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
            name:'editor',
            path: '/editor',
            component: editor
        },
        {
            name:'hundred',
            path: '/hundred',
            component: hundred
        }


      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
          return savedPosition
      } else {
          if (from.meta.keepAlive) {
              from.meta.savedPosition = document.body.scrollTop;
          }
          return { x: 0, y: to.meta.savedPosition || 0 }
      }
  },
})
