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
          <span slot="label">纪念日</span>
        </tabbar-item>
        <div style="width: 20%;display: inline-block;height: 50px"></div>
        <tabbar-item link="/shopcart" :selected="$route.name === 'shopcart'" class="item">
          <img slot="icon" src="../../assets/img/icon.png">
          <img slot="icon-active" src="../../assets/img/icon1.png">
          <span slot="label"></span>
        </tabbar-item>
        <tabbar-item link="/news" :selected="$route.name === 'news'">
          <img slot="icon" src="../../assets/img/icon.png">
          <img slot="icon-active" src="../../assets/img/icon1.png">
          <span slot="label">新闻</span>
        </tabbar-item>
        <tabbar-item link="/search" :selected="$route.name === 'search'">
          <img slot="icon" src="../../assets/img/icon.png">
          <img slot="icon-active" src="../../assets/img/icon1.png">
          <span slot="label">我的</span>
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
  .weui-tabbar__item.item{position: absolute;width: 60px;height: 60px;display: inline-block;border-radius: 50%;background: red;margin: auto;left: 0;right: 0;bottom: 15px;}
</style>
