<template>
  <div class="tabbar">
    <router-link to="/movie">
      <i class="el-icon-chat-round"></i>
      <span>消息</span>
    </router-link>
    <router-link to="/music">
      <i class="el-icon-document-copy"></i>
      <span>好友</span>
    </router-link>
    <router-link to="/find">
      <i class="el-icon-stopwatch"></i>
      <span>发现</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "Tabbar",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped lang="less">
  .tabbar {
    height: 1rem;
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    background: #ffffff;
    /*background: #00BFFF;*/
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-top: 1px solid #dddddd;

    a {
      display: block;
      width: 33.33%;
      text-align: center;

      i {
        display: block;
        width: 100%;
        font-size: .44rem;
        color: #333333;
      }

      span {
        color: #333333;
        font-size: .22rem;
      }
    }

    a.router-link-active {
      i {
        color: #00aaff;
      }

      span {
        color: #00aaff;
      }
    }
  }
</style>
