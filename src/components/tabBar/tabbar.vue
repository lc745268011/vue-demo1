<template>
    <div>
      <div style="height:26px"></div>
      <tabbar class="tabbar" @on-index-change="onIndexChange">
        <tabbar-item link="/home" :selected="$route.name === 'home'">
          <img slot="icon" src="../../assets/img/icon.png">
          <img slot="icon-active" src="../../assets/img/icon1.png">
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item link="/member" :selected="$route.name === 'member'">
          <img slot="icon" src="../../assets/img/icon.png">
          <img slot="icon-active" src="../../assets/img/icon1.png">
          <span slot="label">会员</span>
        </tabbar-item>
        <tabbar-item link="/shopcart" :selected="$route.name === 'shopcart'">
          <img slot="icon" src="../../assets/img/icon.png">
          <img slot="icon-active" src="../../assets/img/icon1.png">
          <span slot="label">购物车</span>
        </tabbar-item>
        <tabbar-item link="/news" :selected="$route.name === 'news'">
          <img slot="icon" src="../../assets/img/icon.png">
          <img slot="icon-active" src="../../assets/img/icon1.png">
          <span slot="label">新闻</span>
        </tabbar-item>
        <tabbar-item link="/search" :selected="$route.name === 'search'">
          <img slot="icon" src="../../assets/img/icon.png">
          <img slot="icon-active" src="../../assets/img/icon1.png">
          <span slot="label">查找</span>
        </tabbar-item>
      </tabbar>
    </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'
  export default {
  components: {
    Tabbar,
    TabbarItem
  },
  methods: {
    onIndexChange (newIndex, oldIndex) {
      // console.log(newIndex, oldIndex)
    }
  }
}
</script>

<style scoped>
  .tabbar{position: fixed;}
</style>
