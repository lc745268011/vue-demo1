<template>
    <div>
      <div class="top">
        <img src="../../assets/logo.png" alt="用户头像" class="avatar">
        <p>用户名称</p>
        <p>ID : 123456</p>
      </div>
      <group>
        <cell title="待审核信息" link="audit">
          <div class="badge-value">
            <badge text="8"></badge>
          </div>
        </cell>
        <cell title="100件说我爱你" link="hundred"></cell>
        <cell title="关联我的他/她"></cell>
        <cell title="退出登录"></cell>
      </group>
    </div>
</template>
<script>
    import { Badge, Group, Cell } from 'vux'
    export default {
        data(){
            return {

            }
        },
        components: {
            Badge,
            Group,
            Cell
        }
    }
</script>
<style>
  .top{height: 190px;background: #f885b7;text-align: center;color: #fff;font-size: 16px;padding: 20px 0;box-sizing: border-box}
  .top .avatar{width: 80px;border-radius: 50%;border: 2px solid #fff;margin-bottom: 20px;}
  .userList li{border-bottom: 1px solid #dcdcdc;padding:12px 15px;font-size: 16px;color: #666666;width: 100%;box-sizing: border-box;}
  .badge-value {
    display: inline-block!important;
  }
  .vertical-middle {
    vertical-align: middle;
  }
  div.weui-cells{margin-top: 0}
</style>
