<template>
  <div class="Find">
    <div class="find-wrap">
      <div class="find-item" :plain="true" @click="open">
        <i class="el-icon-camera"></i>
        <span>发表动态</span>
      </div>
    </div>
    <div class="find-wrap">
      <div class="find-item">
        <i class="el-icon-s-finance"></i>
        <span>支付</span>
      </div>
    </div>
    <div class="find-wrap">
      <div class="find-item">
        <i class="el-icon-headset"></i>
        <span>最新音乐</span>
      </div>
      <div class="find-item">
        <i class="el-icon-video-camera-solid"></i>
        <span>最近电影</span>
      </div>
    </div>
    <div class="find-wrap">
      <div class="find-item">
        <i class="el-icon-setting"></i>
        <span>设置</span>
      </div>
    </div>
    <div class="find-wrap">
      <div class="find-item">
        <i class="el-icon-warning-outline"></i>
        <span>关于</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Find",
    data() {
      return {}
    },
    methods: {
      open() {
        this.$message('功能尚未开发，敬请期待');
      },
    }
  }
</script>

<style scoped lang="less">
  body {
    background: #eeeeee;
  }

  .find-wrap {
    margin: .2rem 0;

    .find-item {
      height: 1rem;
      line-height: 1rem;
      background: #ffffff;
      padding: 0 .2rem;
      border-bottom: solid #eeeeee 1px;

      span {
        font-size: .32rem;
        color: #333333;
        padding-left: .2rem;
      }

      i {
        font-size: .32rem;
        color: #333333;
      }
    }
  }
</style>
