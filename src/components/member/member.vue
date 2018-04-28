<template>
    <div>
        我是会员页面
      <timeLine :points="points"></timeLine>
    </div>
</template>
<script>
  import timeLine from '../timeLine.vue'
  export default {
  name: 'member',
  data () {
    return {
      points: [{
        pointColor: 'red', // *关键点颜色 可选red yellow green
        img: '1', // 图片地址 可留空
        contentImg:'https://ss0.bdstatic.com/6ONWsjip0QIZ8tyhnq/it/u=3618554304,2887917621&fm=77&w_h=121_75&cs=2820658166,1330608299',
        title: 'hello world', // *时间点标题
        text: 'first post', // *时间点内容
        linkUrl: 'https://www.google.com', // *链接url 留空则不显示按钮
        linkText: 'Read detail', // 按钮显示内容 默认为Read more
        date: '2017-1-1' // 时间点
      }, {
        pointColor: 'yellow', // *关键点颜色 可选red yellow green
        img: '1', // 图片地址 可留空
        title: 'hello world', // *时间点标题
        text: 'first post' // *时间点内容
      }, {
        pointColor: 'green', // *关键点颜色 可选red yellow green
        title: 'hello world', // *时间点标题
        img: '1', // 图片地址 可留空
        text: 'first post', // *时间点内容
        linkUrl: '#', // *链接url 留空则不显示按钮
        date: '2017-1-1' // 时间点
      }
      ]
    }
  },
    components: {
      timeLine
    }
}
</script>
<style></style>
