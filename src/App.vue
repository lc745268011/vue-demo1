<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <router-view/>
    </transition>
    <ctab-bar></ctab-bar>
    <loading v-model="isLoading"></loading>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { Loading } from 'vux'
  import ctabBar from './components/tabBar/tabbar'
  export default {
  name: 'App',
  components:{
    ctabBar,
    Loading
  },
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading,
    })
  },

  }
</script>

<style>
  @import './assets/css/common.css';
  @import '../node_modules/swiper/dist/css/swiper.css';
  @import '../node_modules/weui/dist/style/weui.css';
  @import '../node_modules/flex.css';
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
</style>
