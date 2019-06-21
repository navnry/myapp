<template>
  <div class="sider">
    <div class="sider-wrap">
      <div class="sider-head">
        <img src="" alt="">
        <span>{{username}}</span>
      </div>
      <div class="side-content"></div>
      <div class="sider-footer">
        <span v-if="logining==true">注销登录</span>
        <span v-if="logining==false">去登录</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Sider",
    data() {
      return {
        username: "未登录",
        logining: false
      }
    },
    methods: {}
  }
</script>

<style scoped lang="less">
  .sider {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .7);
    top: 0;
    left: 0;

    .sider-wrap {
      width: 60%;
      height: 100%;
      float: left;
      background: #ffffff;
      padding: .5rem .2rem;
      position: relative;

      .sider-head {
        text-align: center;
        padding: .4rem 0;
        border-bottom: 1px solid #0094ff;
        img {
          display: block;
          width: 1rem;
          height: 1rem;
          margin: .5rem auto .15rem auto;
          border-radius: 50%;
          background: #cccccc;
        }

        span {
          font-size: .3rem;
          color: #0094ff;
        }
      }

      .sider-footer {
        position: absolute;
        left: .2rem;
        right: 0;
        text-align: right;
        bottom: .5rem;
        right: .3rem;
        padding: .3rem 0;
        border-bottom: 1px solid #0094ff;

        span {
          font-size: .26rem;
          color: #0094ff;
        }
      }
    }
  }
</style>
