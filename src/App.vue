<template>
  <div style="width: 100%">
     <transition name="fade" mode="out-in">
         <keep-alive>
            <router-view class="child-view body1" v-if="$route.meta.keepAlive"></router-view>
         </keep-alive>
     </transition>
      <transition name="fade" mode="out-in">
        <router-view class="child-view body2" v-if="!$route.meta.keepAlive"></router-view>
     </transition>
      <button @click="showMenu" class="btn">{{text}}</button>
      <transition name="move">
          <div class="menu" v-show="show">
              <div class="inner inner-1">1</div>
              <div class="inner inner-2">2</div>
              <div class="inner inner-3">3</div>
          </div>
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
        data(){
            return{
                height:{
                   overflow:'',
                    height:'',
                },
                transitionName: 'slide-left',
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
        beforeRouteUpdate (to, from, next) {
            let isBack = this.$router.isBack
            if (isBack) {
                this.transitionName = 'slide-right'
            } else {
                this.transitionName = 'slide-left'
            }
            this.$router.isBack = false
            next();
            this.show=false
        },
        methods:{
            showMenu () {
                this.show = !this.show;
            }
        }


    }
</script>

<style lang="scss">
    .child-view {
        /*position: absolute;*/
        width:100%;
        overflow-y: scroll;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
  .content{padding: 20px 0;}

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