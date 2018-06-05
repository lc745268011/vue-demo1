<template>
    <div>
      <div style="height:70px"></div>
      <tabbar class="tabbar" @on-index-change="onIndexChange">
        <tabbar-item link="/home" :selected="$route.name === 'home'">
          <img slot="icon" src="../../assets/img/home.png">
          <img slot="icon-active" src="../../assets/img/home1.png">
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item link="/member" :selected="$route.name === 'member'">
          <img slot="icon" src="../../assets/img/love.png">
          <img slot="icon-active" src="../../assets/img/love1.png">
          <span slot="label">纪念日</span>
        </tabbar-item>
        <div style="width: 20%;display: inline-block;height: 50px"></div>
        <tabbar-item link="/chooseType" :selected="$route.name === 'chooseType'" class="item">
          <img slot="icon" src="../../assets/img/pen.png">
          <img slot="icon-active" src="../../assets/img/pen1.png">
          <span slot="label"></span>
        </tabbar-item>
        <tabbar-item link="/news" :selected="$route.name === 'news'">
          <img slot="icon" src="../../assets/img/qiao.png">
          <img slot="icon-active" src="../../assets/img/qiao1.png">
          <span slot="label">悄悄话</span>
        </tabbar-item>
        <tabbar-item link="/mine" :selected="$route.name === 'mine'||$route.name === 'audit'">
          <img slot="icon" src="../../assets/img/mine.png">
          <img slot="icon-active" src="../../assets/img/mine1.png">
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

<style>
  .weui-tabbar.tabbar{position: fixed;}
  .weui-tabbar__item.item{position: absolute;width: 50px;height: 50px;display: inline-block;border-radius: 50%;background: #fff;margin: auto;left: 0;right: 0;bottom: 15px;padding-top: 0;border: 1px solid #dcdcdc}
  .weui-tabbar__item.item.weui-bar__item_on{background: #f885b7;border: 0}
  .item .weui-tabbar__icon{position: relative;width: 100%;height: 100%}
  .item .weui-tabbar__icon img{position: absolute;margin: auto;top: 0;bottom: 0;left: 0;right: 0;width: 30px;height: 30px;}
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label span{color: #f885b7}
</style>
