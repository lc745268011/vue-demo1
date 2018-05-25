<template>
  <div>
      <transition :name="transitionName">
     <div id="body" :style="height">
         <router-view class="child-view"></router-view>
     </div>
    </transition>
    <ctab-bar></ctab-bar>
    <!--<loading v-model="isLoading"></loading>-->
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
                transitionName: 'slide-left'
            }
        },
        components:{
            ctabBar,
            Loading
        },
        computed: {
            ...mapState({
                isLoading: state => state.vux.isLoading,
            })
        },
        beforeRouteUpdate (to, from, next) {
            let isBack = this.$router.isBack
            if (isBack) {
                this.transitionName = 'slide-right'
            } else {
                this.transitionName = 'slide-left'
            }
            this.$router.isBack = false
            next()
        },
        created(){
            this.hh()
        },
        methods:{
            hh(){
                this.height.height=window.innerHeight-53+'px';
                this.height.overflow='scroll';
            }
        }


    }
</script>

<style lang="scss">
    .child-view {
        position: absolute;
        width:100%;
    }
    .slide-left-enter, .slide-right-leave-active {
        opacity: 0;
        -webkit-transform: translate(50px, 0);
        transform: translate(50px, 0);
        transition: all 0.2s linear;

    }
    .slide-left-leave-active, .slide-right-enter {
        opacity: 0;
        -webkit-transform: translate(-50px, 0);
        transform: translate(-50px, 0);
        transition: all 0.2s linear;

    }
  .content{padding: 20px 0;}
</style>
