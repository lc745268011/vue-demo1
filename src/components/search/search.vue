<template>
    <div>
      <div class="top">
        <img src="../../assets/logo.png" alt="用户头像" class="avatar">
        <p>用户名称</p>
      </div>
      <ul class="userList">
        <li>待审核信息</li>
        <li>关联我的他/她</li>
        <li>退出登录</li>
      </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        }
    }
</script>
<style>
  .top{height: 190px;background: #f885b7;text-align: center;color: #fff;font-size: 16px;padding: 20px 0;box-sizing: border-box}
  .top .avatar{width: 80px;border-radius: 50%;border: 2px solid #fff;margin-bottom: 20px;}
  .userList li{border-bottom: 1px solid #dcdcdc;padding:12px 15px;font-size: 16px;color: #666666;width: 100%;box-sizing: border-box;}
</style>
