<template>
  <div class="home">
    <swiper :list="demo03_list" auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
    <timeLine :points="points"></timeLine>
  </div>
</template>

<script>
import { Swiper } from 'vux'
import timeLine from '../timeLine.vue'

const imgList = [
  'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
  'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
  'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
]
const demoList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))
export default {
  name: 'home',
  data () {
    return {
      demo03_list: demoList,
      points: [{
        pointColor: 'red', // *关键点颜色 可选red yellow green
        img: 'https://ss0.bdstatic.com/6ONWsjip0QIZ8tyhnq/it/u=3618554304,2887917621&fm=77&w_h=121_75&cs=2820658166,1330608299', // 图片地址 可留空
        contentImg:'https://ss0.bdstatic.com/6ONWsjip0QIZ8tyhnq/it/u=3618554304,2887917621&fm=77&w_h=121_75&cs=2820658166,1330608299',
        title: 'hello world', // *时间点标题
        text: 'first post', // *时间点内容
        date: '2017-1-1' // 时间点
      }, {
        pointColor: 'yellow', // *关键点颜色 可选red yellow green
        img: 'https://gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg', // 图片地址 可留空
        title: 'hello world', // *时间点标题
        text: 'first post' // *时间点内容
      }, {
        pointColor: 'green', // *关键点颜色 可选red yellow green
        title: 'hello world', // *时间点标题
        img: '1', // 图片地址 可留空
        text: 'first post', // *时间点内容
        date: '2017-1-1' // 时间点
      }
      ]
    }
  },
  components: {
    Swiper,
    timeLine
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
