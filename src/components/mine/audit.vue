<template>
    <div>
      <x-header :left-options="{backText: ''}">待审核</x-header>
      <ul class="auditList">
        <li>
          <div>
              <div class="listImg">
                  <img src="https://ss0.bdstatic.com/6ONWsjip0QIZ8tyhnq/it/u=3618554304,2887917621&fm=77&w_h=121_75&cs=2820658166,1330608299" alt="">
              </div>
            <div>
              <div class="font18">标题</div>
              <div class="font14">内容</div>
            </div>
          </div>
          <div class="btnGroup vCenter">
            <button class="yes">同意</button>
            <button class="no">拒绝</button>
          </div>
        </li>
        <li>
          <div>
              <div class="listImg">
                  <img src="https://ss0.bdstatic.com/6ONWsjip0QIZ8tyhnq/it/u=3618554304,2887917621&fm=77&w_h=121_75&cs=2820658166,1330608299" alt="">
              </div>
            <div>
              <div class="font18">标题</div>
              <div class="font14">内容</div>
            </div>
          </div>
          <div class="btnGroup vCenter">
            <button class="yes">同意</button>
            <button class="no">拒绝</button>
          </div>
        </li>
      </ul>
    </div>
</template>
<script>
import { XHeader } from 'vux'
export default {
  data () {
    return {
    }
  },
  components: {
    XHeader
  }
}
</script>
<style lang="scss">
  body{background: #f7f7f7;}
  .auditList{padding: 0.3rem;padding-top: 1.22rem}
  .auditList li{background: #fff;padding: 0.3rem;margin-bottom: 0.3rem;}
  #app .vux-header{position: fixed;top: 0;width: 100%;height: 0.92rem;background: $tonal}
  #app .vux-header .vux-header-left .left-arrow:before{border: 1px solid #fff;border-width: 1px 0 0 1px;}
  .btnGroup{width: 100%;display: flex;justify-content: space-between;}
  .btnGroup button{width: 2.8rem;border: 0;color: #fff;padding: 0.16rem 0;border-radius:0.3rem; margin-top: 0.3rem}
  .btnGroup button.yes{background: $tonal}
  .btnGroup button.no{background: #999}
  .auditList li .listImg{text-align: $center;margin-bottom: 0.3rem}
  .auditList li .listImg img{height: 3rem;}
  .auditList li .font18{font-weight: bold;margin-bottom: 0.2rem}
</style>
