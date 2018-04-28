import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'

const home = r => require.ensure([], () => r(require('../components/home/home')))
const member = r => require.ensure([], () => r(require('../components/member/member')))
const news = r => require.ensure([], () => r(require('../components/news/newsList')))
const shopcart = r => require.ensure([], () => r(require('../components/shopcart/shopcart')))
const search = r => require.ensure([], () => r(require('../components/search/search')))
const newsDetail = r => require.ensure([], () => r(require('../components/news/newsDetail')))

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
          name:'search',
          path: '/search',
          component: search
        },
        {
          name:'newsDetail',
          path: '/newsDetail',
          component: newsDetail
        }


      ]
    }
  ]
})
