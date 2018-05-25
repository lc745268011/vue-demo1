<template>
  <div>

     <transition :name="transitionName">
     <router-view class="child-view" id="body" :style="height"></router-view>
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
        opacity: 1;
        -webkit-transform: translate(-7.5rem, 0);
        transform: translate(-7.5rem, 0);
        transition: all 0.7s linear;
    }
    .slide-left-enter-to{
        opacity: 1;
        -webkit-transform: translate(0px, 0);
        transform: translate(0px, 0);
        transition: all 0.7s linear;
    }
    .slide-left-leave-active, .slide-right-enter {
        opacity: 1;
        -webkit-transform: translate(7.5rem, 0);
        transform: translate(7.5rem, 0);
        transition: all 0.7s linear;

    }
  .content{padding: 20px 0;}
</style>
