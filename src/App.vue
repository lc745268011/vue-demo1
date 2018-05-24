<template>
  <div>
    <!--<transition name="router-fade" mode="out-in">-->
     <div id="body" :style="height">
       <router-view/>
     </div>
    <!--</transition>-->
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
                }
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
/*  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }*/
  .content{padding: 20px 0;}
</style>
