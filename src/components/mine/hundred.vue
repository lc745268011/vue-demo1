<template>
    <div>
     <!-- <div class="container">
        <ul>
          <li v-for="(item, index) in list">
            <div :style="{background:item.bg}"></div>
            <div>{{item.tips}}</div>
          </li>
        </ul>
      </div>-->
      <div id="iSlider-wrapper"></div>
    </div>
</template>
<script>
    import '../../assets/css/iSlider.css'
    import '../../assets/js/iSlider.js'
    import '../../assets/js/iSlider.animate.js'
    export default {
        data(){
            return {
             /* list:[
                  {
                  bg:'red',
                  tips:'11111'
                  },{
                      bg:'yellow',
                      tips:'22222'
                  },{
                      bg:'blue',
                      tips:'33333'
                  },{
                      bg:'pink',
                      tips:'44444'
                  },{
                      bg:'black',
                      tips:'55555'
                  }],*/
                img:[{content: "/static/img/1.png"},
                    {content: "/static/img/2.png"},
                    {content: "/static/img/6.png"}]
            }
        },
        mounted:function(){
            var S = new iSlider(document.getElementById('iSlider-wrapper'), this.img, {
                isLooping: 1,
                isOverspread: 1,
                isAutoplay: 1,
                animateTime: 800,
                animateType: 'flow',
                onslideRestore:function () {
                    console.log(1)
                }
            });
        },
       /* methods:{
           slideClick:function () {
               
           } 
        }*/
    }
</script>
<style scoped>
  li{width: 6rem;height: 3rem;border: 1px solid #dcdcdc; display: -webkit-box; -webkit-box-pack: center; -webkit-box-align: center; }
  li div:first-child{width: 100%;height: 1rem}
</style>
<style>
    body {
        margin: 0;
        padding: 0;
        background: #333;
        overflow: hidden;
    }

    /*ul wrapper*/
    #iSlider-wrapper {
        height: 100%;
        width: 100%;
        overflow: hidden;
        position: absolute;
    }

    #iSlider-wrapper ul {
        list-style: none;
        margin: 0;
        padding: 0;
        height: 100%;
        overflow: hidden;
    }

    #iSlider-wrapper li {
        position: absolute;
        margin: 0;
        padding: 0;
        height: 100%;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-pack: center;
        -webkit-box-align: center;
        list-style: none;
    }

    #iSlider-wrapper li img {
        max-width: 100%;
        max-height: 100%;
    }
</style>