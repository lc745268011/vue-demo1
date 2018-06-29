<template>
  <div style="width: 100%">
      <div class="box">
          <div class="contain">
              <div class="main">
                  <transition :name="transitionName">
                      <router-view class="child-view"></router-view>
                  </transition>
                  <button @click="showMenu" class="btn">{{text}}</button>
                  <transition name="move">
                      <div class="menu" v-show="show">
                          <div class="inner inner-1">1</div>
                          <div class="inner inner-2">2</div>
                          <div class="inner inner-3">3</div>
                      </div>
                  </transition>
              </div>
              <ctab-bar></ctab-bar>
          </div>
      </div>
    <loading v-model="isLoading"></loading>
  </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { Loading } from 'vux'
    import ctabBar from './components/tabBar/tabbar'
    export default {
        name: 'App',
        data(){
            return{
                height:{
                   overflow:'',
                    height:'',
                },
                transitionName: '',
                show: false
            }
        },
        components:{
            ctabBar,
            Loading
        },
        computed: {
            ...mapState({
                isLoading: state => state.vux.isLoading,
            }),
            text () {
                return this.show ? '收' : '开';
            }
        },
        watch: {
            $route(to, from) {
                //如果to索引大于from索引,判断为前进状态,反之
                if (to.meta.index > from.meta.index) {
                    this.transitionName = 'slide-left';
                } else {
                    this.transitionName = 'slide-right';
                }
            }
        },
        methods:{
            showMenu () {
                this.show = !this.show;
            }
        }


    }
</script>

<style lang="scss">
  .box {
      width: 100%;
      height: 667px;
      /*border: 1px solid #222;*/
      margin: 0 auto;
      /*border-radius: 16px;*/
  }

  .contain {
      width: 100%;
      height: 600px;
      /*border: 1px solid #222;*/
      /*margin: 20px auto 0 auto;*/
      display: flex;
      flex-direction: column;
  }

  .nav {
      width: 100%;
      height: 40px;
      display: flex;
      flex-direction: row;
  }

  .nav .nav-link {
      line-height: 40px;
      border: 1px solid #222;
      flex-grow: 1;
      text-align: center;
      cursor: pointer;
  }
  .nav .nav-link.router-link-exact-active{
      background-color:#ccc;
  }
  .main {
      flex-grow: 1;
      overflow: scroll;
      position: relative;
  }
  .login,.home,.user{
      width:100%;
      height:100%;
      position:absolute;
  }

  /*路由切换动画*/
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
      will-change: transform;
      transition: all 500ms;
      position: absolute;
  }
  .slide-right-enter {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
  }
  .slide-right-leave-active {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
  }
  .slide-left-enter {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
  }
  .slide-left-leave-active {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
  }

</style>
<style lang="stylus" rel="stylesheet/stylus">
    #app
        .btn
            position: fixed
            bottom: 100px
            right: 10px
            z-index: 10
            width: 50px
            height: 50px
            line-height: 50px
            border-radius: 50%
            border: none
            outline: none
            color: #fff
            font-size: 18px
            background: blue
        .menu
             position: fixed
             bottom: 100px
             right: 10px
             width: 50px
             height: 50px
             border-radius: 50%
             transition: all .7s ease-in
             &.move-enter-active
                .inner
                  transform: translate3d(0, 0, 0)
                  transition-timing-function: cubic-bezier(0, .57, .44, 1.97)
                .inner-1
                    transition-delay: .1s
                .inner-2
                    transition-delay: .2s
                .inner-3
                    transition-delay: .3s
             &.move-enter, &.move-leave-active
                .inner
                    transition-timing-function: ease-in-out
                .inner-1
                    transform: translate3d(0, 60px, 0)
                    transition-delay: .3s
                .inner-2
                    transform: translate3d(40px, 40px, 0)
                    transition-delay: .2s
                .inner-3
                    transform: translate3d(60px, 0, 0)
                    transition-delay: .1s
            .inner
                display: inline-block
                position: absolute
                width: 30px
                height: 30px
                line-height: 30px
                border-radius: 50%
                background: red
                text-align: center
                color: #fff
                transition: all .4s
            .inner-1
                top: -50px
                left: 10px
            .inner-2
                left: -30px
                top: -30px
            .inner-3
                left: -50px
                top: 10px
</style>