<template>
  <div class="messge">
    <van-notice-bar
      text="暂未开发，敬请期待"
      left-icon="warning-o"
      mode="closeable"/>
  </div>
</template>

<script>
  export default {
    name: "Messge",
    data() {
      return {}
    },
    mounted() {
    },
    methods: {}
  }
</script>

<style scoped lang="less">
  .el-carousel__container {
    height: auto;
  }

  .feel-input {
    width: 100%;
    padding: .2rem 0;

    .el-textarea__inner {
      height: 2rem;
    }

  }

  .swiper-container {
    width: 100%;

    .swiper-slide {
      font-size: 0;
    }
  }

  .popup {
    padding: .2rem;
  }

</style>
